#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const Database = require("better-sqlite3");

const db = new Database("data_store/site.db");
db.pragma("foreign_keys = ON");
const now = new Date().toISOString();
const hashPass = (value) => crypto.createHash("sha256").update(String(value || "")).digest("hex");
const userTables = [
  "sessions",
  "otp_codes",
  "user_partnerships",
  "user_profiles",
  "admin_feature_permissions",
  "bank_accounts",
  "deposits",
  "withdrawals",
  "bets",
  "transactions",
  "casino_provider_player_map",
  "casino_provider_transactions",
  "admin_client_partnership",
  "admin_client_general",
  "wallets",
  "users",
];

const reset = db.transaction(() => {
  for (const table of userTables) {
    const exists = db.prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name=?").get(table);
    if (exists) db.prepare(`DELETE FROM ${table}`).run();
  }
  db.prepare(
    "INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at,min_bet,max_bet,credit_limit,partnership_remaining) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
  ).run(
    "admin_king007",
    "king007",
    hashPass("1234"),
    "super_admin",
    1,
    null,
    Date.now(),
    now,
    now,
    0,
    0,
    0,
    100
  );
  db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)").run(
    "admin_king007",
    10000,
    0,
    0,
    now
  );
});

reset();
const users = db.prepare("SELECT username,role FROM users ORDER BY username").all();
console.log(JSON.stringify({ ok: true, users }, null, 2));
db.close();
