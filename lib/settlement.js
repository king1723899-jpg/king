"use strict";

// Sports bet settlement. Every coin a player wins is paid by their upline and
// every coin a player loses is received by their upline, so the sum of all
// wallets never changes. All moves go through the coin engine and ledger.
//
// Bet maths (decimal odds, stake S, odds O):
//   back on winner  -> player +S*(O-1)     back on loser  -> player -S
//   lay on winner   -> player -S*(O-1)     lay on loser   -> player +S
// Counterparty: each of the player's Masters bears their share %, the player's
// direct parent bears the rest.
// Commission: COMMISSION% of stake, deducted from winnings on a win; on a loss
// it is added to the loss but capped so the player's balance never goes below 0.

const { roundMoney } = require("./sprint2");

const BET_KINDS = ["bet_win", "bet_loss"];

const betOutcome = (bet, winnerSelectionId) => {
  const onWinner = String(bet.selection_id) === String(winnerSelectionId);
  const isBack = Number(bet.is_back) === 1;
  return onWinner === isBack ? "win" : "loss";
};

const betAmounts = (bet) => {
  const stake = roundMoney(bet.stack);
  const odds = Number(bet.odds);
  const isBack = Number(bet.is_back) === 1;
  const profit = roundMoney(stake * (odds - 1));
  return isBack ? { winAmount: profit, lossAmount: stake } : { winAmount: stake, lossAmount: profit };
};

// Split an amount by percentage shares; the last party absorbs rounding.
const splitAmount = (amount, parties) => {
  const out = [];
  let allocated = 0;
  parties.forEach((party, index) => {
    const last = index === parties.length - 1;
    const share = last ? roundMoney(amount - allocated) : roundMoney((amount * party.percent) / 100);
    allocated = roundMoney(allocated + share);
    if (share > 0) out.push({ userId: party.userId, amount: share, percent: party.percent });
  });
  return out;
};

const createSettlementEngine = ({ db, coinEngine, makeId, now = () => new Date().toISOString(), commissionPercent = 1 }) => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS market_results (
      id TEXT PRIMARY KEY,
      match_id TEXT NOT NULL,
      market_id TEXT NOT NULL,
      winner_selection_id TEXT NOT NULL,
      status TEXT NOT NULL,
      declared_by TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_market_results_market ON market_results(match_id, market_id, status);
    CREATE TABLE IF NOT EXISTS commission_records (
      id TEXT PRIMARY KEY, user_id TEXT NOT NULL, from_user_id TEXT, bet_id TEXT,
      amount REAL NOT NULL DEFAULT 0, note TEXT, created_at TEXT NOT NULL
    );
  `);
  const cols = new Set(db.prepare("PRAGMA table_info(bets)").all().map((c) => c.name));
  for (const [name, type] of [["settlement_result", "TEXT"], ["settlement_net", "REAL"], ["settled_at", "TEXT"], ["commission", "REAL"], ["result_selection_id", "TEXT"]]) {
    if (!cols.has(name)) db.exec(`ALTER TABLE bets ADD COLUMN ${name} ${type}`);
  }

  const stmts = {
    user: db.prepare("SELECT id,username,role,parent_id FROM users WHERE id=?"),
    partners: db.prepare("SELECT partner_id,share_percentage FROM user_partnerships WHERE user_id=? AND share_percentage>0 ORDER BY share_percentage DESC, partner_id"),
    wallet: db.prepare("SELECT balance,exposer FROM wallets WHERE user_id=?"),
    releaseExposure: db.prepare("UPDATE wallets SET exposer=max(0,round(COALESCE(exposer,0)-?,2)),updated_at=? WHERE user_id=?"),
    lockExposure: db.prepare("UPDATE wallets SET exposer=round(COALESCE(exposer,0)+?,2),updated_at=? WHERE user_id=?"),
    markSettled: db.prepare(
      "UPDATE bets SET status='settled',settlement_result=?,settlement_net=?,commission=?,result_selection_id=?,settled_at=? WHERE id=? AND lower(status) IN ('unsettled','pending')"
    ),
    markOpen: db.prepare(
      "UPDATE bets SET status='unsettled',settlement_result=NULL,settlement_net=NULL,commission=NULL,result_selection_id=NULL,settled_at=NULL WHERE id=? AND status='settled'"
    ),
    insertCommission: db.prepare("INSERT INTO commission_records (id,user_id,from_user_id,bet_id,amount,note,created_at) VALUES (?,?,?,?,?,?,?)"),
    deleteCommission: db.prepare("DELETE FROM commission_records WHERE bet_id=?"),
    openBetsInMarket: db.prepare("SELECT * FROM bets WHERE CAST(match_id AS TEXT)=? AND market_id=? AND lower(status) IN ('unsettled','pending')"),
    settledBetsInMarket: db.prepare("SELECT * FROM bets WHERE CAST(match_id AS TEXT)=? AND market_id=? AND status='settled'"),
    activeResult: db.prepare("SELECT * FROM market_results WHERE match_id=? AND market_id=? AND status='declared' LIMIT 1"),
    insertResult: db.prepare("INSERT INTO market_results (id,match_id,market_id,winner_selection_id,status,declared_by,created_at,updated_at) VALUES (?,?,?,?,'declared',?,?,?)"),
    rollbackResult: db.prepare("UPDATE market_results SET status='rolled_back',updated_at=? WHERE id=?"),
    unreversedEntries: db.prepare(
      `SELECT * FROM coin_ledger WHERE ref_id=? AND kind IN ('bet_win','bet_loss')
       AND id NOT IN (SELECT ref_id FROM coin_ledger WHERE kind='bet_rollback' AND ref_id IS NOT NULL)`
    ),
  };

  // Who carries the other side of a player's bet: each Master by their share %,
  // the direct parent for the rest. A Master that is also the parent is merged.
  const counterparties = (user) => {
    const parentId = String(user.parent_id || "").trim();
    if (!parentId) throw new Error(`Player ${user.username} has no parent account`);
    const shares = new Map();
    let masterTotal = 0;
    for (const row of stmts.partners.all(user.id)) {
      const pct = Math.max(0, Number(row.share_percentage) || 0);
      const room = roundMoney(100 - masterTotal);
      const take = Math.min(pct, room);
      if (take <= 0) continue;
      const pid = String(row.partner_id);
      shares.set(pid, roundMoney((shares.get(pid) || 0) + take));
      masterTotal = roundMoney(masterTotal + take);
    }
    shares.set(parentId, roundMoney((shares.get(parentId) || 0) + roundMoney(100 - masterTotal)));
    // Parent last so it absorbs rounding.
    const out = [...shares.entries()].filter(([id, pct]) => id !== parentId && pct > 0).map(([userId, percent]) => ({ userId, percent }));
    if ((shares.get(parentId) || 0) > 0 || !out.length) out.push({ userId: parentId, percent: shares.get(parentId) || 0 });
    return out;
  };

  const settleBetInTxn = (bet, outcome, { actorId = null, winnerSelectionId = null } = {}) => {
    const user = stmts.user.get(String(bet.user_id));
    if (!user) throw new Error("Bet owner not found");
    const ts = now();
    const parties = counterparties(user);
    const { winAmount, lossAmount } = betAmounts(bet);
    const fullCommission = roundMoney((roundMoney(bet.stack) * commissionPercent) / 100);
    // Release the coins locked for this bet before moving money.
    stmts.releaseExposure.run(Math.max(0, Number(bet.exposure) || 0), ts, user.id);
    let userNet;
    let commission;
    const label = `${bet.match_name || "Match " + bet.match_id} / ${bet.market_name || "Market"} / ${bet.selection_name || bet.selection_id}`;
    if (outcome === "win") {
      commission = Math.min(fullCommission, winAmount);
      userNet = roundMoney(winAmount - commission);
      for (const part of splitAmount(userNet, parties)) {
        coinEngine.move({ fromId: part.userId, toId: user.id, amount: part.amount, kind: "bet_win", direction: "settlement", actorId, refId: bet.id, remark: label, allowOverdraft: true });
      }
    } else {
      const wallet = stmts.wallet.get(user.id) || { balance: 0, exposer: 0 };
      const roomAfterLoss = roundMoney(Number(wallet.balance) - Number(wallet.exposer || 0) - lossAmount);
      commission = Math.max(0, Math.min(fullCommission, roomAfterLoss));
      const total = roundMoney(lossAmount + commission);
      userNet = -total;
      for (const part of splitAmount(total, parties)) {
        coinEngine.move({ fromId: user.id, toId: part.userId, amount: part.amount, kind: "bet_loss", direction: "settlement", actorId, refId: bet.id, remark: label, allowOverdraft: true });
      }
    }
    for (const part of splitAmount(commission, parties)) {
      stmts.insertCommission.run(makeId("com_"), part.userId, user.id, bet.id, part.amount, `${commissionPercent}% commission (${part.percent}% share)`, ts);
    }
    const marked = stmts.markSettled.run(outcome, userNet, commission, winnerSelectionId === null ? null : String(winnerSelectionId), ts, bet.id);
    if (!marked.changes) throw new Error("Bet is already settled");
    return { betId: bet.id, userId: user.id, outcome, userNet, commission, parties: parties.map((p) => p.userId) };
  };

  const unsettleBetInTxn = (bet, { actorId = null } = {}) => {
    const ts = now();
    const entries = stmts.unreversedEntries.all(bet.id);
    for (const entry of entries) {
      coinEngine.move({ fromId: entry.to_user_id, toId: entry.from_user_id, amount: entry.amount, kind: "bet_rollback", direction: "settlement", actorId, refId: entry.id, remark: "Rollback: " + (entry.remark || ""), allowOverdraft: true });
    }
    stmts.deleteCommission.run(bet.id);
    const reopened = stmts.markOpen.run(bet.id);
    if (!reopened.changes) throw new Error("Bet is not settled");
    stmts.lockExposure.run(Math.max(0, Number(bet.exposure) || 0), ts, bet.user_id);
    return { betId: bet.id, userId: bet.user_id, reversedEntries: entries.length };
  };

  const declareMarketResult = db.transaction(({ matchId, marketId, winnerSelectionId, actorId }) => {
    const mId = String(matchId || "").trim();
    const mkId = String(marketId || "").trim();
    const winner = String(winnerSelectionId || "").trim();
    if (!mId || !mkId || !winner) throw new Error("matchId, marketId and selectionId are required");
    if (stmts.activeResult.get(mId, mkId)) throw new Error("Result already declared for this market. Roll it back first.");
    const bets = stmts.openBetsInMarket.all(mId, mkId);
    const ts = now();
    stmts.insertResult.run(makeId("mr_"), mId, mkId, winner, actorId ? String(actorId) : null, ts, ts);
    const results = bets.map((bet) => settleBetInTxn(bet, betOutcome(bet, winner), { actorId, winnerSelectionId: winner }));
    return { matchId: mId, marketId: mkId, winnerSelectionId: winner, settled: results.length, results };
  });

  const rollbackMarketResult = db.transaction(({ matchId, marketId, actorId }) => {
    const mId = String(matchId || "").trim();
    const mkId = String(marketId || "").trim();
    const declared = stmts.activeResult.get(mId, mkId);
    if (!declared) throw new Error("No declared result to roll back for this market");
    const bets = stmts.settledBetsInMarket.all(mId, mkId);
    const results = bets.map((bet) => unsettleBetInTxn(bet, { actorId }));
    stmts.rollbackResult.run(now(), declared.id);
    return { matchId: mId, marketId: mkId, reopened: results.length, results };
  });

  const settleSingleBet = db.transaction(({ betId, result, actorId }) => {
    const outcome = String(result || "").trim().toLowerCase();
    if (!["win", "loss"].includes(outcome)) throw new Error("result must be win or loss");
    const bet = db.prepare("SELECT * FROM bets WHERE id=?").get(String(betId || ""));
    if (!bet) throw new Error("Bet not found");
    if (!["unsettled", "pending"].includes(String(bet.status || "").toLowerCase())) throw new Error("Bet is already settled");
    return settleBetInTxn(bet, outcome, { actorId });
  });

  return {
    declareMarketResult: (args) => declareMarketResult.immediate(args),
    rollbackMarketResult: (args) => rollbackMarketResult.immediate(args),
    settleSingleBet: (args) => settleSingleBet.immediate(args),
    betOutcome,
    betAmounts,
  };
};

module.exports = { createSettlementEngine, betOutcome, betAmounts, splitAmount, BET_KINDS };
