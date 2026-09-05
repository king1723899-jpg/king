"use strict";

const assert = require("assert/strict");
const Database = require("better-sqlite3");
const { validatePartnershipEntries, validateBetAmount, settleBet } = require("../lib/sprint2");

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (id TEXT PRIMARY KEY, role TEXT NOT NULL, parent_id TEXT);
  CREATE TABLE wallets (user_id TEXT PRIMARY KEY, balance REAL NOT NULL, exposer REAL NOT NULL DEFAULT 0, casino_exposer REAL NOT NULL DEFAULT 0, updated_at TEXT);
  CREATE TABLE bets (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, stack REAL NOT NULL, pnl REAL NOT NULL, exposure REAL NOT NULL, status TEXT NOT NULL, settlement_result TEXT, settlement_net REAL, settled_at TEXT);
  CREATE TABLE user_partnerships (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, partner_id TEXT NOT NULL, share_percentage REAL NOT NULL);
`);
const users = [
  ["admin", "admin"],
  ["sub1", "sub_admin"],
  ["sub2", "sub_admin"],
  ["sub3", "sub_admin"],
  ["sub4", "sub_admin"],
  ["sub5", "sub_admin"],
  ["sub6", "sub_admin"],
  ["user", "user"],
];
const insertUser = db.prepare("INSERT INTO users (id,role) VALUES (?,?)");
users.forEach((item) => insertUser.run(...item));
const createSubAdmin = db.prepare("INSERT INTO users (id,role,parent_id) VALUES (?,?,?)");
createSubAdmin.run("sub-created", "sub_admin", "admin");
assert.deepEqual(db.prepare("SELECT role,parent_id FROM users WHERE id=?").get("sub-created"), { role: "sub_admin", parent_id: "admin" });
const insertWallet = db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)");
["admin", "sub1", "sub2", "sub3"].forEach((id) => insertWallet.run(id, 1000, 0, 0, "now"));
insertWallet.run("user", 1000, 100, 0, "now");

const getPartner = (id) => db.prepare("SELECT * FROM users WHERE id=?").get(id);
const partnership = validatePartnershipEntries({
  input: [
    { partnerId: "admin", sharePercentage: 20 },
    { partnerId: "sub1", sharePercentage: 20 },
    { partnerId: "sub2", sharePercentage: 30 },
    { partnerId: "sub3", sharePercentage: 30 },
  ],
  getPartner,
  canAccessPartner: () => true,
});
assert.equal(partnership.totalShare, 100);
assert.equal(partnership.remainingShare, 0);
const fiveSubAdmins = validatePartnershipEntries({
  input: [
    { partnerId: "admin", sharePercentage: 10 },
    { partnerId: "sub1", sharePercentage: 10 },
    { partnerId: "sub2", sharePercentage: 10 },
    { partnerId: "sub3", sharePercentage: 10 },
    { partnerId: "sub4", sharePercentage: 10 },
    { partnerId: "sub5", sharePercentage: 10 },
  ],
  getPartner,
  canAccessPartner: () => true,
});
assert.equal(fiveSubAdmins.entries.length, 6);
assert.throws(() => validatePartnershipEntries({ input: "{invalid", getPartner, canAccessPartner: () => true }), /valid JSON/);
const insertPartnership = db.prepare("INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage) VALUES (?,?,?,?)");
partnership.entries.forEach((entry, index) => insertPartnership.run(`p${index}`, "user", entry.partnerId, entry.sharePercentage));

assert.throws(() => validatePartnershipEntries({ input: [{ partnerId: "admin", sharePercentage: 101 }], getPartner, canAccessPartner: () => true }), /exceed 100/);
assert.equal(validateBetAmount({ amount: 10, minBet: 10, maxBet: 100, currentExposure: 20, creditLimit: 100 }), true);
assert.throws(() => validateBetAmount({ amount: 9, minBet: 10 }), /at least/);
assert.throws(() => validateBetAmount({ amount: 101, maxBet: 100 }), /not exceed/);
assert.throws(() => validateBetAmount({ amount: 81, currentExposure: 20, creditLimit: 100 }), /credit/);

insertWallet.run("user2", 1000, 100, 0, "now");
db.prepare("INSERT INTO bets (id,user_id,stack,pnl,exposure,status) VALUES (?,?,?,?,?,?)").run("bet-win", "user", 100, 100, 100, "unsettled");
const winning = settleBet({ db, betId: "bet-win", result: "win", now: "settled" });
assert.equal(winning.userNet, 100);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("user").balance, 1100);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("admin").balance, 980);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub1").balance, 980);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub2").balance, 970);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub3").balance, 970);

db.prepare("INSERT INTO bets (id,user_id,stack,pnl,exposure,status) VALUES (?,?,?,?,?,?)").run("bet-loss", "user", 100, 100, 100, "unsettled");
const losing = settleBet({ db, betId: "bet-loss", result: "loss", now: "settled" });
assert.equal(losing.userNet, -100);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("user").balance, 1000);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("admin").balance, 1000);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub1").balance, 1000);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub2").balance, 1000);
assert.equal(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get("sub3").balance, 1000);

console.log(JSON.stringify({ ok: true, partnership, winning, losing }, null, 2));
db.close();
