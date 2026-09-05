"use strict";

const path = require("path");
const Database = require("better-sqlite3");

const dbPath = process.env.DB_PATH || path.join(__dirname, "..", "data_store", "site.db");
const db = new Database(dbPath);
db.pragma("foreign_keys = ON");

const ensureColumn = (table, column, definition) => {
  const exists = db.prepare(`PRAGMA table_info(${table})`).all().some((item) => item.name === column);
  if (!exists) db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
};

const migrate = db.transaction(() => {
  ensureColumn("users", "min_bet", "REAL NOT NULL DEFAULT 0");
  ensureColumn("users", "max_bet", "REAL NOT NULL DEFAULT 0");
  ensureColumn("users", "credit_limit", "REAL NOT NULL DEFAULT 0");
  ensureColumn("users", "partnership_remaining", "REAL NOT NULL DEFAULT 100");
  ensureColumn("bets", "settlement_result", "TEXT");
  ensureColumn("bets", "settlement_net", "REAL");
  ensureColumn("bets", "settled_at", "TEXT");
  db.exec(`
    CREATE TABLE IF NOT EXISTS user_partnerships (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      partner_id TEXT NOT NULL,
      share_percentage REAL NOT NULL CHECK (share_percentage >= 0 AND share_percentage <= 100),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(user_id, partner_id)
    );
    CREATE INDEX IF NOT EXISTS idx_user_partnerships_user_id ON user_partnerships(user_id);
    CREATE INDEX IF NOT EXISTS idx_user_partnerships_partner_id ON user_partnerships(partner_id);
  `);
  db.prepare("UPDATE users SET partnership_remaining=COALESCE(partnership_remaining,100)").run();
});

try {
  migrate();
  console.log(JSON.stringify({ ok: true, dbPath }, null, 2));
} catch (error) {
  console.error(JSON.stringify({ ok: false, message: error.message }, null, 2));
  process.exitCode = 1;
} finally {
  db.close();
}
