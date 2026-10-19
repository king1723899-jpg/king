"use strict";

// Unit tests for lib/settlement.js: back/lay maths, upline funding, Master
// share split, commission, rollback and coin conservation.
const assert = require("assert/strict");
const crypto = require("crypto");
const Database = require("better-sqlite3");
const { createCoinEngine } = require("../lib/coins");
const { createSettlementEngine, splitAmount } = require("../lib/settlement");

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT, role TEXT NOT NULL, parent_id TEXT);
  CREATE TABLE wallets (user_id TEXT PRIMARY KEY, balance REAL NOT NULL DEFAULT 0, exposer REAL NOT NULL DEFAULT 0, casino_exposer REAL NOT NULL DEFAULT 0, updated_at TEXT);
  CREATE TABLE user_partnerships (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, partner_id TEXT NOT NULL, share_percentage REAL NOT NULL, created_at TEXT, updated_at TEXT);
  CREATE TABLE bets (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, match_id INTEGER NOT NULL, market_id TEXT NOT NULL, selection_id INTEGER NOT NULL,
    selection_name TEXT, odds REAL NOT NULL, stack REAL NOT NULL, pnl REAL, exposure REAL NOT NULL, market_name TEXT, match_name TEXT,
    is_back INTEGER NOT NULL, status TEXT NOT NULL, created_at TEXT);
`);
const makeId = (p) => p + crypto.randomUUID();
const coins = createCoinEngine({ db, makeId, isUnlimitedSource: (u) => u.role === "super_admin" });
const settle = createSettlementEngine({ db, coinEngine: coins, makeId, commissionPercent: 1 });

const addUser = (id, role, parent, balance) => {
  db.prepare("INSERT INTO users (id,username,role,parent_id) VALUES (?,?,?,?)").run(id, id, role, parent);
  db.prepare("INSERT INTO wallets (user_id,balance) VALUES (?,?)").run(id, balance);
};
addUser("sa", "super_admin", null, 0);
addUser("adm", "admin", "sa", 10000);
addUser("mst", "master", "adm", 5000);
addUser("p1", "user", "adm", 1000); // player with 40% Master share
addUser("p2", "user", "mst", 1000); // player created by a Master
db.prepare("INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage) VALUES ('up1','p1','mst',40)").run();

const bal = (id) => db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(id).balance;
const exp = (id) => db.prepare("SELECT exposer FROM wallets WHERE user_id=?").get(id).exposer;
const r2 = (n) => Math.round(n * 100) / 100 + 0;
const total = () => Math.round(db.prepare("SELECT SUM(balance) s FROM wallets").get().s * 100) / 100 + 0;
const T0 = total();
let n = 0;
const place = (user, sel, odds, stake, isBack, market = "M1") => {
  const id = "b" + ++n;
  const exposure = isBack ? stake : Math.round((odds - 1) * stake * 100) / 100;
  db.prepare("INSERT INTO bets (id,user_id,match_id,market_id,selection_id,odds,stack,exposure,is_back,status,market_name,match_name) VALUES (?,?,1,?,?,?,?,?,?,'unsettled','MATCH_ODDS','A v B')")
    .run(id, user, market, sel, odds, stake, exposure, isBack ? 1 : 0);
  db.prepare("UPDATE wallets SET exposer=exposer+? WHERE user_id=?").run(exposure, user);
  return id;
};
const snap = () => Object.fromEntries(["adm", "mst", "p1", "p2"].map((u) => [u, bal(u)]));
const diff = (a, b) => Object.fromEntries(Object.keys(a).map((k) => [k, Math.round((b[k] - a[k]) * 100) / 100 + 0]));

// splitAmount keeps every paisa
assert.deepEqual(splitAmount(100, [{ userId: "a", percent: 33.33 }, { userId: "b", percent: 66.67 }]).map((x) => x.amount), [33.33, 66.67]);
assert.equal(splitAmount(0.01, [{ userId: "a", percent: 50 }, { userId: "b", percent: 50 }]).reduce((s, x) => s + x.amount, 0), 0.01);

// 1. Back bet wins: odds 3, stake 100 -> +200 less 1% of stake = +199; Master 40%, Admin 60%
let s = snap();
place("p1", 11, 3, 100, true);
let r = settle.declareMarketResult({ matchId: 1, marketId: "M1", winnerSelectionId: 11, actorId: "sa" });
assert.equal(r.settled, 1);
assert.deepEqual(diff(s, snap()), { adm: -119.4, mst: -79.6, p1: 199, p2: 0 });
assert.equal(exp("p1"), 0);
assert.equal(total(), T0);

// 2. Back bet loses: -100 stake -1 commission = -101, received 40/60
s = snap();
place("p1", 12, 3, 100, true, "M2");
settle.declareMarketResult({ matchId: 1, marketId: "M2", winnerSelectionId: 11 });
assert.deepEqual(diff(s, snap()), { adm: 60.6, mst: 40.4, p1: -101, p2: 0 });
assert.equal(total(), T0);

// 3. Lay bet: odds 5, stake 100 locks liability 400
s = snap();
place("p2", 21, 5, 100, false, "M3");
assert.equal(exp("p2"), 400);
settle.declareMarketResult({ matchId: 1, marketId: "M3", winnerSelectionId: 22 }); // laid runner lost -> player wins stake
assert.deepEqual(diff(s, snap()), { adm: 0, mst: -99, p1: 0, p2: 99 }); // p2's parent is the Master
assert.equal(exp("p2"), 0);
assert.equal(total(), T0);

// 4. Lay bet loses: -400 liability -1 commission
s = snap();
place("p2", 21, 5, 100, false, "M4");
settle.declareMarketResult({ matchId: 1, marketId: "M4", winnerSelectionId: 21 });
assert.deepEqual(diff(s, snap()), { adm: 0, mst: 401, p1: 0, p2: -401 });
assert.equal(total(), T0);

// 5. Commission never pushes a player below zero
db.prepare("UPDATE wallets SET balance=100 WHERE user_id='p2'").run();
const t5 = total();
place("p2", 31, 2, 100, true, "M5");
settle.declareMarketResult({ matchId: 1, marketId: "M5", winnerSelectionId: 32 });
assert.equal(bal("p2"), 0, "loss of whole balance: commission capped to 0");
assert.equal(total(), t5);

// 6. Rollback restores every wallet and exposure exactly, then re-declare works
db.prepare("UPDATE wallets SET balance=1000 WHERE user_id='p2'").run();
const t6 = total();
place("p1", 41, 2.5, 200, true, "M6");
place("p1", 42, 2.0, 100, false, "M6");
place("p2", 41, 2.5, 50, false, "M6");
const before = { ...snap(), e1: exp("p1"), e2: exp("p2") };
settle.declareMarketResult({ matchId: 1, marketId: "M6", winnerSelectionId: 41 });
assert.throws(() => settle.declareMarketResult({ matchId: 1, marketId: "M6", winnerSelectionId: 42 }), /already declared/);
assert.equal(total(), t6);
settle.rollbackMarketResult({ matchId: 1, marketId: "M6" });
assert.deepEqual({ ...snap(), e1: exp("p1"), e2: exp("p2") }, before, "rollback restores balances and exposure");
assert.throws(() => settle.rollbackMarketResult({ matchId: 1, marketId: "M6" }), /No declared result/);
r = settle.declareMarketResult({ matchId: 1, marketId: "M6", winnerSelectionId: 42 });
assert.equal(r.settled, 3);
settle.rollbackMarketResult({ matchId: 1, marketId: "M6" });
assert.deepEqual({ ...snap(), e1: exp("p1"), e2: exp("p2") }, before, "second rollback only reverses the second settlement");
assert.equal(db.prepare("SELECT COUNT(*) c FROM commission_records WHERE bet_id IN (SELECT id FROM bets WHERE market_id='M6')").get().c, 0);
assert.equal(total(), t6);

// 7. Randomised: many markets, random bets and results, rollbacks -> conservation + no player overdraft
const t7 = total();
for (let m = 0; m < 300; m += 1) {
  const market = "R" + m;
  for (let k = 0; k < 5; k += 1) {
    const user = Math.random() < 0.5 ? "p1" : "p2";
    const odds = Math.round((1.1 + Math.random() * 6) * 100) / 100;
    const stake = Math.round((1 + Math.random() * 50) * 100) / 100;
    const isBack = Math.random() < 0.5;
    const need = isBack ? stake : Math.round((odds - 1) * stake * 100) / 100;
    const w = db.prepare("SELECT balance,exposer FROM wallets WHERE user_id=?").get(user);
    if (w.balance - w.exposer < need) continue; // placement would be refused
    place(user, 100 + Math.floor(Math.random() * 3), odds, stake, isBack, market);
  }
  settle.declareMarketResult({ matchId: 1, marketId: market, winnerSelectionId: 100 + Math.floor(Math.random() * 3) });
  if (Math.random() < 0.2) settle.rollbackMarketResult({ matchId: 1, marketId: market });
}
assert.equal(total(), t7, "coins conserved across 300 random markets");
for (const p of ["p1", "p2"]) assert.ok(bal(p) >= 0, `${p} never negative`);

// 8. Single-bet settle (legacy) uses the same maths
s = snap();
const id8 = place("p1", 1, 2, 10, true, "S1");
settle.settleSingleBet({ betId: id8, result: "win" });
assert.deepEqual(diff(s, snap()), { adm: -5.94, mst: -3.96, p1: 9.9, p2: 0 });
assert.throws(() => settle.settleSingleBet({ betId: id8, result: "loss" }), /already settled/);

// 9. Several Masters: 30% + 20% to two Masters, 50% to the parent
addUser("mst2", "master", "adm", 5000);
addUser("p3", "user", "adm", 1000);
db.prepare("INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage) VALUES ('up3a','p3','mst',30),('up3b','p3','mst2',20)").run();
const s9 = { adm: bal("adm"), mst: bal("mst"), mst2: bal("mst2"), p3: bal("p3") };
const t9 = total();
place("p3", 7, 3, 100, true, "MM1"); // win: +200 -1 = +199
settle.declareMarketResult({ matchId: 1, marketId: "MM1", winnerSelectionId: 7 });
assert.deepEqual(
  { adm: r2(bal("adm") - s9.adm), mst: r2(bal("mst") - s9.mst), mst2: r2(bal("mst2") - s9.mst2), p3: r2(bal("p3") - s9.p3) },
  { adm: -99.5, mst: -59.7, mst2: -39.8, p3: 199 }
);
assert.equal(total(), t9);
assert.equal(db.prepare("SELECT ROUND(SUM(amount),2) s FROM commission_records WHERE bet_id IN (SELECT id FROM bets WHERE market_id='MM1')").get().s, 1);

console.log(JSON.stringify({ ok: true, ledgerEntries: db.prepare("SELECT COUNT(*) c FROM coin_ledger").get().c }));
