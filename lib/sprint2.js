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

// A user account may share its commission with several Master accounts; the
// shares together cannot exceed 100% (the rest stays with the parent).
const MAX_MASTER_SHARES = 10;
const validatePartnershipEntries = ({ input, maxPartners = MAX_MASTER_SHARES, getPartner, canAccessPartner }) => {
  const entries = parsePartnershipEntries(input).filter((entry) => entry.partnerId && entry.sharePercentage > 0);
  if (entries.length > maxPartners) throw new Error(`At most ${maxPartners} Masters can share commission`);
  const seen = new Set();
  let total = 0;
  const validated = entries.map((entry) => {
    if (seen.has(entry.partnerId)) throw new Error("Each Master can be selected only once");
    seen.add(entry.partnerId);
    if (!Number.isFinite(entry.sharePercentage) || entry.sharePercentage < 0) {
      throw new Error("Partnership shares must be non-negative numbers");
    }
    const partner = getPartner(entry.partnerId);
    if (!partner || String(partner.role || "").toLowerCase() !== "master") {
      throw new Error("Commission share can only be given to a Master account");
    }
    if (!canAccessPartner(partner)) throw new Error("Master account is outside your downline");
    total = roundMoney(total + entry.sharePercentage);
    return { ...entry, partner };
  });
  if (total > 100) throw new Error("Master shares together cannot exceed 100%");
  return {
    entries: validated,
    totalShare: total,
    remainingShare: roundMoney(100 - total),
  };
};

module.exports = { parsePartnershipEntries, validatePartnershipEntries, validateBetAmount, roundMoney, MAX_MASTER_SHARES };
