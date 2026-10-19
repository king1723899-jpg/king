"use strict";

// Coin movement engine. Every balance change between accounts goes through
// here so that: (1) coins only move between a child and its direct parent,
// (2) debits are conditional (no overdraft, no lost updates), (3) every move
// is written to an append-only ledger, and (4) retries with the same
// idempotency key never move coins twice. The sum of all wallet balances is
// invariant under every operation in this module.

const { roundMoney } = require("./sprint2");

const MAX_TRANSFER_AMOUNT = 10_000_000_000;

class CoinError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "CoinError";
    this.status = status;
  }
}

const LEDGER_SCHEMA = `
CREATE TABLE IF NOT EXISTS coin_ledger (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  direction TEXT NOT NULL,
  actor_id TEXT,
  from_user_id TEXT NOT NULL,
  to_user_id TEXT NOT NULL,
  amount REAL NOT NULL CHECK (amount > 0),
  from_balance_after REAL NOT NULL,
  to_balance_after REAL NOT NULL,
  remark TEXT,
  ref_id TEXT,
  idempotency_key TEXT UNIQUE,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_coin_ledger_from ON coin_ledger(from_user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_coin_ledger_to ON coin_ledger(to_user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_coin_ledger_ref ON coin_ledger(ref_id);
`;

const normalizeAmount = (value) => {
  const raw = typeof value === "string" ? value.trim() : value;
  if (raw === "" || raw === null || raw === undefined) throw new CoinError("Amount is required");
  const n = Number(raw);
  if (!Number.isFinite(n)) throw new CoinError("Amount must be a number");
  const rounded = roundMoney(n);
  if (Math.abs(rounded - n) > 1e-9) throw new CoinError("Amount can have at most 2 decimal places");
  if (rounded < 0.01) throw new CoinError("Amount must be greater than zero");
  if (rounded > MAX_TRANSFER_AMOUNT) throw new CoinError("Amount exceeds the maximum allowed per transaction");
  return rounded;
};

const cleanKey = (value) => {
  const key = String(value || "").trim();
  if (!key) return null;
  if (key.length > 128) throw new CoinError("Idempotency key is too long");
  return key;
};

const createCoinEngine = ({
  db,
  makeId,
  now = () => new Date().toISOString(),
  isUnlimitedSource = () => false,
}) => {
  if (!db) throw new Error("db is required");
  if (typeof makeId !== "function") throw new Error("makeId is required");
  db.exec(LEDGER_SCHEMA);

  const stmts = {
    user: db.prepare("SELECT id,username,role,parent_id FROM users WHERE id=?"),
    ensureWallet: db.prepare(
      "INSERT OR IGNORE INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,0,0,0,?)"
    ),
    wallet: db.prepare("SELECT user_id,balance,exposer,casino_exposer FROM wallets WHERE user_id=?"),
    // Available = balance minus coins locked in open bets.
    debitIfAvailable: db.prepare(
      "UPDATE wallets SET balance=round(balance-?,2),updated_at=? WHERE user_id=? AND round(balance-COALESCE(exposer,0),2) >= ?"
    ),
    debitUnchecked: db.prepare("UPDATE wallets SET balance=round(balance-?,2),updated_at=? WHERE user_id=?"),
    credit: db.prepare("UPDATE wallets SET balance=round(balance+?,2),updated_at=? WHERE user_id=?"),
    byKey: db.prepare("SELECT * FROM coin_ledger WHERE idempotency_key=?"),
    insert: db.prepare(
      `INSERT INTO coin_ledger (id,kind,direction,actor_id,from_user_id,to_user_id,amount,from_balance_after,to_balance_after,remark,ref_id,idempotency_key,created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`
    ),
  };

  const mapEntry = (row) =>
    row && {
      id: row.id,
      kind: row.kind,
      direction: row.direction,
      actorId: row.actor_id,
      fromUserId: row.from_user_id,
      toUserId: row.to_user_id,
      amount: row.amount,
      fromBalanceAfter: row.from_balance_after,
      toBalanceAfter: row.to_balance_after,
      remark: row.remark || "",
      refId: row.ref_id,
      createdAt: row.created_at,
    };

  // Low-level move between two wallets. Must run inside a transaction.
  // allowOverdraft: settlement only. An upline that owes a player's winnings
  // pays even when short; the negative balance is the amount owed.
  const moveInTxn = ({ fromId, toId, amount, kind, direction, actorId = null, remark = "", refId = null, idempotencyKey = null, insufficientMessage, allowOverdraft = false }) => {
    if (String(fromId) === String(toId)) throw new CoinError("Cannot transfer coins to the same account");
    const fromUser = stmts.user.get(String(fromId));
    const toUser = stmts.user.get(String(toId));
    if (!fromUser || !toUser) throw new CoinError("Account not found", 404);
    const ts = now();
    stmts.ensureWallet.run(fromUser.id, ts);
    stmts.ensureWallet.run(toUser.id, ts);
    const debit = allowOverdraft || isUnlimitedSource(fromUser)
      ? stmts.debitUnchecked.run(amount, ts, fromUser.id)
      : stmts.debitIfAvailable.run(amount, ts, fromUser.id, amount);
    if (!debit.changes) throw new CoinError(insufficientMessage || "Insufficient balance");
    stmts.credit.run(amount, ts, toUser.id);
    const fromBalanceAfter = roundMoney(stmts.wallet.get(fromUser.id).balance);
    const toBalanceAfter = roundMoney(stmts.wallet.get(toUser.id).balance);
    const entryId = makeId("cl_");
    stmts.insert.run(
      entryId,
      String(kind),
      String(direction),
      actorId ? String(actorId) : null,
      fromUser.id,
      toUser.id,
      amount,
      fromBalanceAfter,
      toBalanceAfter,
      String(remark || "").slice(0, 300) || null,
      refId ? String(refId) : null,
      idempotencyKey,
      ts
    );
    return {
      id: entryId,
      kind,
      direction,
      actorId,
      fromUserId: fromUser.id,
      toUserId: toUser.id,
      amount,
      fromBalanceAfter,
      toBalanceAfter,
      remark: String(remark || ""),
      refId,
      createdAt: ts,
      replayed: false,
    };
  };

  // Parent <-> direct child transfer. Safe to call inside an outer transaction
  // (it becomes a savepoint) or on its own (runs as BEGIN IMMEDIATE).
  const transferInTxn = ({ childId, direction, amount, actorId = null, kind, remark = "", refId = null, idempotencyKey = null }) => {
    const amt = normalizeAmount(amount);
    const key = cleanKey(idempotencyKey);
    if (!["deposit", "withdraw"].includes(direction)) throw new CoinError("Invalid transfer type");
    if (key) {
      const previous = stmts.byKey.get(key);
      if (previous) {
        if (String(previous.direction) !== direction || Math.abs(previous.amount - amt) > 1e-9) {
          throw new CoinError("Idempotency key was already used for a different transfer", 409);
        }
        return { ...mapEntry(previous), replayed: true };
      }
    }
    const child = stmts.user.get(String(childId || ""));
    if (!child) throw new CoinError("User not found", 404);
    const parentId = String(child.parent_id || "").trim();
    if (!parentId) throw new CoinError("This account has no parent; coins can only move between a parent and its child");
    const parent = stmts.user.get(parentId);
    if (!parent) throw new CoinError("Parent account not found", 404);
    const isDeposit = direction === "deposit";
    return {
      ...moveInTxn({
        fromId: isDeposit ? parent.id : child.id,
        toId: isDeposit ? child.id : parent.id,
        amount: amt,
        kind: kind || direction,
        direction,
        actorId,
        remark,
        refId,
        idempotencyKey: key,
        insufficientMessage: isDeposit
          ? `Insufficient balance in ${parent.username}`
          : `Insufficient available balance in ${child.username}`,
      }),
      childId: child.id,
      parentId: parent.id,
    };
  };

  const transferTxn = db.transaction((args) => transferInTxn(args));
  const transfer = (args) => {
    try {
      return db.inTransaction ? transferTxn(args) : transferTxn.immediate(args);
    } catch (e) {
      // Two racing requests with the same key: the loser replays the winner.
      const key = cleanKey(args?.idempotencyKey);
      if (key && /UNIQUE/i.test(String(e?.message || ""))) {
        const previous = stmts.byKey.get(key);
        if (previous) return { ...mapEntry(previous), replayed: true };
      }
      throw e;
    }
  };

  // Arbitrary move (e.g. deposit-token redemption from the issuing super
  // admin). Must run inside a transaction.
  const moveTxn = db.transaction((args) => moveInTxn({ ...args, amount: normalizeAmount(args.amount) }));
  const move = (args) => (db.inTransaction ? moveTxn(args) : moveTxn.immediate(args));

  return { transfer, move, normalizeAmount, mapEntry };
};

module.exports = { createCoinEngine, normalizeAmount, CoinError, MAX_TRANSFER_AMOUNT, LEDGER_SCHEMA };
