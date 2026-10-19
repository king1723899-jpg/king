"use strict";

// Unit tests for lib/coins.js: parent <-> child coin movement.
const assert = require("assert/strict");
const crypto = require("crypto");
const Database = require("better-sqlite3");
const { createCoinEngine, CoinError } = require("../lib/coins");

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT, role TEXT NOT NULL, parent_id TEXT);
  CREATE TABLE wallets (user_id TEXT PRIMARY KEY, balance REAL NOT NULL DEFAULT 0, exposer REAL NOT NULL DEFAULT 0, casino_exposer REAL NOT NULL DEFAULT 0, updated_at TEXT);
`);
const addUser = (id, role, parentId, balance = 0, exposer = 0) => {
  db.prepare("INSERT INTO users (id,username,role,parent_id) VALUES (?,?,?,?)").run(id, id, role, parentId);
  db.prepare("INSERT INTO wallets (user_id,balance,exposer) VALUES (?,?,?)").run(id, balance, exposer);
};
addUser("sa", "super_admin", null, 0);
addUser("admin1", "admin", "sa");
addUser("admin2", "admin", "sa");
addUser("master1", "master", "admin1");
addUser("user1", "user", "admin1");
addUser("user2", "user", "master1");

const engine = createCoinEngine({
  db,
  makeId: (p) => p + crypto.randomUUID(),
  isUnlimitedSource: (u) => u.role === "super_admin",
});
const bal = (id) => db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(id).balance;
const total = () => Math.round(db.prepare("SELECT SUM(balance) AS s FROM wallets").get().s * 100) / 100 + 0;
const ledgerCount = () => db.prepare("SELECT COUNT(*) AS c FROM coin_ledger").get().c;
const fails = (fn, re) => assert.throws(fn, (e) => e instanceof CoinError && re.test(e.message));

// 1. Super Admin -> Admin (unlimited source: SA goes negative = coins issued)
let e = engine.transfer({ childId: "admin1", direction: "deposit", amount: 10000, actorId: "sa" });
assert.equal(bal("admin1"), 10000);
assert.equal(bal("sa"), -10000);
assert.equal(e.fromUserId, "sa");
assert.equal(e.toUserId, "admin1");
assert.equal(total(), 0, "coins are conserved");

// 2. Admin -> User and Admin -> Master
engine.transfer({ childId: "user1", direction: "deposit", amount: 2500.5, actorId: "admin1" });
engine.transfer({ childId: "master1", direction: "deposit", amount: 3000, actorId: "admin1" });
assert.equal(bal("admin1"), 4499.5);
assert.equal(bal("user1"), 2500.5);
assert.equal(bal("master1"), 3000);

// 3. Master -> User
engine.transfer({ childId: "user2", direction: "deposit", amount: 1000, actorId: "master1" });
assert.equal(bal("master1"), 2000);
assert.equal(bal("user2"), 1000);

// 4. Overdraft is impossible for non-SA parents
fails(() => engine.transfer({ childId: "user2", direction: "deposit", amount: 2000.01, actorId: "master1" }), /Insufficient balance in master1/);
assert.equal(bal("master1"), 2000);

// 5. Withdraw returns coins to the direct parent only
e = engine.transfer({ childId: "user2", direction: "withdraw", amount: 400, actorId: "master1" });
assert.equal(bal("user2"), 600);
assert.equal(bal("master1"), 2400);
assert.equal(e.toUserId, "master1");

// 6. Withdraw cannot touch coins locked in open bets (exposure)
db.prepare("UPDATE wallets SET exposer=500 WHERE user_id='user2'").run();
fails(() => engine.transfer({ childId: "user2", direction: "withdraw", amount: 100.01, actorId: "master1" }), /Insufficient available balance/);
engine.transfer({ childId: "user2", direction: "withdraw", amount: 100, actorId: "master1" });
assert.equal(bal("user2"), 500);
db.prepare("UPDATE wallets SET exposer=0 WHERE user_id='user2'").run();

// 7. Withdraw from Admin back to Super Admin
engine.transfer({ childId: "admin1", direction: "withdraw", amount: 499.5, actorId: "sa" });
assert.equal(bal("admin1"), 4000);
assert.equal(bal("sa"), -9500.5);

// 8. Amount validation
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: 0, actorId: "admin1" }), /greater than zero/);
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: -5, actorId: "admin1" }), /greater than zero/);
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: "abc", actorId: "admin1" }), /must be a number/);
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: 1.234, actorId: "admin1" }), /2 decimal/);
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: Infinity, actorId: "admin1" }), /must be a number/);
fails(() => engine.transfer({ childId: "user1", direction: "deposit", amount: 1e11, actorId: "admin1" }), /maximum/);
fails(() => engine.transfer({ childId: "user1", direction: "sideways", amount: 1, actorId: "admin1" }), /Invalid transfer type/);
fails(() => engine.transfer({ childId: "sa", direction: "deposit", amount: 1, actorId: "sa" }), /no parent/);
fails(() => engine.transfer({ childId: "ghost", direction: "deposit", amount: 1, actorId: "sa" }), /not found/);

// 9. Idempotency: the same key never moves coins twice
const before = bal("user1");
const first = engine.transfer({ childId: "user1", direction: "deposit", amount: 10, actorId: "admin1", idempotencyKey: "k-1" });
const again = engine.transfer({ childId: "user1", direction: "deposit", amount: 10, actorId: "admin1", idempotencyKey: "k-1" });
assert.equal(bal("user1"), before + 10);
assert.equal(again.replayed, true);
assert.equal(again.id, first.id);
assert.throws(() => engine.transfer({ childId: "user1", direction: "withdraw", amount: 10, actorId: "admin1", idempotencyKey: "k-1" }), /different transfer/);

// 10. Failure inside an outer transaction rolls back everything
const ledgerBefore = ledgerCount();
const adminBefore = bal("admin1");
assert.throws(() =>
  db.transaction(() => {
    engine.transfer({ childId: "user1", direction: "deposit", amount: 50, actorId: "admin1" });
    throw new Error("boom");
  })()
);
assert.equal(bal("admin1"), adminBefore);
assert.equal(ledgerCount(), ledgerBefore);

// 11. move(): token redemption from the SA issuer
engine.move({ fromId: "sa", toId: "user2", amount: 25, kind: "token_redeem", direction: "deposit", actorId: "master1" });
assert.equal(bal("user2"), 525);

// 12. Randomised stress: thousands of mixed ops keep the invariants
const children = ["admin1", "admin2", "master1", "user1", "user2"];
let ok = 0;
let rejected = 0;
for (let i = 0; i < 5000; i += 1) {
  const childId = children[i % children.length];
  const direction = Math.random() < 0.5 ? "deposit" : "withdraw";
  const amount = Math.round(Math.random() * 300000) / 100 + 0.01;
  try {
    engine.transfer({ childId, direction, amount, actorId: "x" });
    ok += 1;
  } catch (err) {
    assert.ok(err instanceof CoinError, err.message);
    rejected += 1;
  }
}
assert.equal(total(), 0, "coins are conserved after stress");
for (const id of children) assert.ok(bal(id) >= 0, `${id} never goes negative`);
// Ledger replays to the same balances
const replay = new Map();
for (const row of db.prepare("SELECT from_user_id,to_user_id,amount FROM coin_ledger").all()) {
  replay.set(row.from_user_id, (replay.get(row.from_user_id) || 0) - row.amount);
  replay.set(row.to_user_id, (replay.get(row.to_user_id) || 0) + row.amount);
}
for (const [id, value] of replay) assert.equal(Math.round(value * 100) / 100 + 0, bal(id) + 0, `ledger reconciles for ${id}`);
assert.equal(db.prepare("SELECT COUNT(*) AS c FROM coin_ledger WHERE amount<=0").get().c, 0);

console.log(JSON.stringify({ ok: true, stress: { ok, rejected }, ledgerEntries: ledgerCount() }));
db.close();
