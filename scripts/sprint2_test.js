"use strict";

const assert = require("assert/strict");
const Database = require("better-sqlite3");
const { validatePartnershipEntries, validateBetAmount } = require("../lib/sprint2");

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (id TEXT PRIMARY KEY, role TEXT NOT NULL, parent_id TEXT);
  CREATE TABLE wallets (user_id TEXT PRIMARY KEY, balance REAL NOT NULL, exposer REAL NOT NULL DEFAULT 0, casino_exposer REAL NOT NULL DEFAULT 0, updated_at TEXT);
  CREATE TABLE bets (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, stack REAL NOT NULL, pnl REAL NOT NULL, exposure REAL NOT NULL, status TEXT NOT NULL, settlement_result TEXT, settlement_net REAL, settled_at TEXT);
  CREATE TABLE user_partnerships (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, partner_id TEXT NOT NULL, share_percentage REAL NOT NULL);
`);
const users = [
  ["admin", "admin"],
  ["master1", "master"],
  ["master2", "master"],
  ["user", "user"],
];
const insertUser = db.prepare("INSERT INTO users (id,role) VALUES (?,?)");
users.forEach((item) => insertUser.run(...item));
const insertWallet = db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)");
["admin", "master1", "master2"].forEach((id) => insertWallet.run(id, 1000, 0, 0, "now"));
insertWallet.run("user", 1000, 100, 0, "now");

const getPartner = (id) => db.prepare("SELECT * FROM users WHERE id=?").get(id);
// Single Master share
const partnership = validatePartnershipEntries({
  input: [{ partnerId: "master1", sharePercentage: 30 }],
  getPartner,
  canAccessPartner: () => true,
});
assert.equal(partnership.totalShare, 30);
assert.equal(partnership.remainingShare, 70);
// Zero-share rows are ignored (blank form rows)
assert.equal(validatePartnershipEntries({ input: [{ partnerId: "master2", sharePercentage: 0 }], getPartner, canAccessPartner: () => true }).entries.length, 0);
// Several Masters may share; together at most 100%, each Master once
const two = validatePartnershipEntries({ input: [{ partnerId: "master1", sharePercentage: 25 }, { partnerId: "master2", sharePercentage: 35 }], getPartner, canAccessPartner: () => true });
assert.equal(two.entries.length, 2);
assert.equal(two.remainingShare, 40);
assert.throws(
  () => validatePartnershipEntries({ input: [{ partnerId: "master1", sharePercentage: 60 }, { partnerId: "master2", sharePercentage: 50 }], getPartner, canAccessPartner: () => true }),
  /together cannot exceed 100/
);
assert.throws(
  () => validatePartnershipEntries({ input: [{ partnerId: "master1", sharePercentage: 10 }, { partnerId: "master1", sharePercentage: 10 }], getPartner, canAccessPartner: () => true }),
  /only once/
);
// Admins and users cannot receive a share
assert.throws(() => validatePartnershipEntries({ input: [{ partnerId: "admin", sharePercentage: 10 }], getPartner, canAccessPartner: () => true }), /Master account/);
assert.throws(() => validatePartnershipEntries({ input: [{ partnerId: "master1", sharePercentage: 10 }], getPartner, canAccessPartner: () => false }), /outside your downline/);
assert.throws(() => validatePartnershipEntries({ input: "{invalid", getPartner, canAccessPartner: () => true }), /valid JSON/);
assert.throws(() => validatePartnershipEntries({ input: [{ partnerId: "master1", sharePercentage: 101 }], getPartner, canAccessPartner: () => true }), /exceed 100/);
const insertPartnership = db.prepare("INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage) VALUES (?,?,?,?)");
partnership.entries.forEach((entry, index) => insertPartnership.run(`p${index}`, "user", entry.partnerId, entry.sharePercentage));

assert.equal(validateBetAmount({ amount: 10, minBet: 10, maxBet: 100, currentExposure: 20, creditLimit: 100 }), true);
assert.throws(() => validateBetAmount({ amount: 9, minBet: 10 }), /at least/);
assert.throws(() => validateBetAmount({ amount: 101, maxBet: 100 }), /not exceed/);
assert.throws(() => validateBetAmount({ amount: 81, currentExposure: 20, creditLimit: 100 }), /credit/);

// Settlement maths is covered by scripts/settlement_test.js.
console.log(JSON.stringify({ ok: true, partnership }));
db.close();
