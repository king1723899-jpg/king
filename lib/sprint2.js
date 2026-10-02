"use strict";

const roundMoney = (value) => Math.round(Number(value || 0) * 100) / 100;
const validateBetAmount = ({ amount, minBet = 0, maxBet = 0, currentExposure = 0, creditLimit = 0 }) => {
  const cleanAmount = Number(amount);
  if (!Number.isFinite(cleanAmount) || cleanAmount <= 0) throw new Error("Bet amount must be positive");
  if (Number(minBet) > 0 && cleanAmount < Number(minBet)) throw new Error(`Bet amount must be at least ${minBet}`);
  if (Number(maxBet) > 0 && cleanAmount > Number(maxBet)) throw new Error(`Bet amount must not exceed ${maxBet}`);
  if (Number(creditLimit) > 0 && Number(currentExposure) + cleanAmount > Number(creditLimit)) {
    throw new Error("Bet exceeds available credit reference");
  }
  return true;
};

const parsePartnershipEntries = (input) => {
  let value = input;
  if (typeof value === "string") {
    if (!value.trim()) return [];
    try {
      value = JSON.parse(value);
    } catch {
      throw new Error("Partnerships must be valid JSON");
    }
  }
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) throw new Error("Partnerships must be an array");
  return value.map((entry) => ({
    partnerId: String(entry?.partnerId ?? entry?.partner_id ?? entry?.id ?? "").trim(),
    sharePercentage: roundMoney(entry?.sharePercentage ?? entry?.share_percentage ?? entry?.share ?? 0),
  }));
};

const validatePartnershipEntries = ({ input, maxPartners = 5, getPartner, canAccessPartner }) => {
  const entries = parsePartnershipEntries(input).filter((entry) => entry.partnerId);
  const seen = new Set();
  let total = 0;
  const validated = entries.map((entry) => {
    if (seen.has(entry.partnerId)) throw new Error("Partnership partners must be unique");
    seen.add(entry.partnerId);
    if (!Number.isFinite(entry.sharePercentage) || entry.sharePercentage < 0) {
      throw new Error("Partnership shares must be non-negative numbers");
    }
    const partner = getPartner(entry.partnerId);
    if (!partner || !["super_admin", "admin", "master", "sub_admin"].includes(String(partner.role || "").toLowerCase())) {
      throw new Error("Each partnership partner must be an admin or Master Account");
    }
    if (!canAccessPartner(partner)) throw new Error("Partnership partner is outside your downline");
    total = roundMoney(total + entry.sharePercentage);
    return { ...entry, partner };
  });
  const masterCount = validated.filter((entry) => ["master", "sub_admin"].includes(String(entry.partner.role || "").toLowerCase())).length;
  if (masterCount > maxPartners) throw new Error(`A user can have at most ${maxPartners} Master Account partners`);
  if (total > 100) throw new Error("Assigned partnership shares cannot exceed 100%");
  return {
    entries: validated,
    totalShare: total,
    remainingShare: roundMoney(100 - total),
  };
};

const SPORTS_COMMISSION_RATE = 0.01;

const settleBet = ({ db, betId, result, now = new Date().toISOString() }) => {
  const cleanBetId = String(betId || "").trim();
  const cleanResult = String(result || "").trim().toLowerCase();
  if (!cleanBetId || !["win", "loss"].includes(cleanResult)) throw new Error("betId and result (win/loss) are required");

  db.exec("CREATE TABLE IF NOT EXISTS commission_records (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, from_user_id TEXT, bet_id TEXT, amount REAL NOT NULL DEFAULT 0, note TEXT, created_at TEXT NOT NULL)");
  return db.transaction(() => {
    const bet = db.prepare("SELECT id,user_id,stack,pnl,exposure,status FROM bets WHERE id=?").get(cleanBetId);
    if (!bet) throw new Error("Bet not found");
    if (String(bet.status || "").toLowerCase() === "settled") throw new Error("Bet is already settled");

    const userId = String(bet.user_id || "").trim();
    const userWallet = db.prepare("SELECT balance,exposer,casino_exposer FROM wallets WHERE user_id=?").get(userId);
    if (!userWallet) throw new Error("User wallet not found");
    const userNet = cleanResult === "win" ? Math.max(0, roundMoney(bet.pnl)) : -Math.max(0, roundMoney(bet.stack));
    const partnershipRows = db.prepare("SELECT partner_id,share_percentage FROM user_partnerships WHERE user_id=? ORDER BY partner_id").all(userId);
    const updateWallet = db.prepare("UPDATE wallets SET balance=?,updated_at=? WHERE user_id=?");
    const partnerBalances = [];

    updateWallet.run(roundMoney(userWallet.balance + userNet), now, userId);
    for (const partnership of partnershipRows) {
      const partnerId = String(partnership.partner_id || "").trim();
      const partnerWallet = db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(partnerId);
      if (!partnerWallet) throw new Error(`Partner wallet not found: ${partnerId}`);
      const partnerNet = roundMoney(-userNet * (Number(partnership.share_percentage) / 100));
      const nextBalance = roundMoney(partnerWallet.balance + partnerNet);
      updateWallet.run(nextBalance, now, partnerId);
      partnerBalances.push({ partnerId, sharePercentage: Number(partnership.share_percentage), net: partnerNet, balance: nextBalance });
    }

    const stakeAmount = Math.max(0, roundMoney(bet.stack));
    const commissionAmount = roundMoney(stakeAmount * SPORTS_COMMISSION_RATE);
    const parentId = String(db.prepare("SELECT parent_id FROM users WHERE id=?").get(userId)?.parent_id || "").trim();
    let commission = null;
    if (commissionAmount > 0 && parentId) {
      const parentWallet = db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(parentId);
      if (parentWallet) {
        const childBalance = roundMoney(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(userId).balance - commissionAmount);
        updateWallet.run(childBalance, now, userId);
        updateWallet.run(roundMoney(parentWallet.balance + commissionAmount), now, parentId);
        db.prepare("INSERT INTO commission_records (id,user_id,from_user_id,bet_id,amount,note,created_at) VALUES (?,?,?,?,?,?,?)").run(
          "com_" + cleanBetId + "_" + Date.now().toString(36), parentId, userId, cleanBetId, commissionAmount, "1% sports commission on stake", now
        );
        commission = { parentId, fromUserId: userId, amount: commissionAmount };
      }
    }

    const nextExposer = Math.max(0, roundMoney(userWallet.exposer - Math.max(0, Number(bet.exposure || 0))));
    db.prepare("UPDATE wallets SET exposer=?,updated_at=? WHERE user_id=?").run(nextExposer, now, userId);
    db.prepare("UPDATE bets SET status=?,settlement_result=?,settlement_net=?,settled_at=? WHERE id=?").run(
      "settled",
      cleanResult,
      userNet,
      now,
      cleanBetId
    );
    return { betId: cleanBetId, userId, result: cleanResult, userNet, partnerBalances, commission };
  })();
};

module.exports = { parsePartnershipEntries, validatePartnershipEntries, validateBetAmount, settleBet, roundMoney };
