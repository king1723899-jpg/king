"use strict";

const mysql = require("mysql2/promise");

const required = ["MYSQL_HOST", "MYSQL_USER", "MYSQL_DATABASE"];
const missing = required.filter((name) => !String(process.env[name] || "").trim());
if (missing.length) {
  console.error(`Missing MySQL configuration: ${missing.join(", ")}`);
  process.exit(1);
}

const connectionOptions = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD || "",
  waitForConnections: true,
  connectionLimit: 2,
};
const databaseName = String(process.env.MYSQL_DATABASE).trim();
if (!/^[A-Za-z0-9_$-]+$/.test(databaseName)) {
  console.error("MYSQL_DATABASE contains unsupported characters");
  process.exit(1);
}
let pool;

const hasColumn = async (table, column) => {
  const [rows] = await pool.execute(
    "SELECT 1 FROM information_schema.columns WHERE table_schema=DATABASE() AND table_name=? AND column_name=? LIMIT 1",
    [table, column]
  );
  return rows.length > 0;
};

const addColumnIfMissing = async (table, column, definition) => {
  if (!(await hasColumn(table, column))) {
    await pool.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${column}\` ${definition}`);
  }
};

(async () => {
  try {
    if (String(process.env.MYSQL_CREATE_DATABASE || "").trim() === "1") {
      const adminPool = mysql.createPool(connectionOptions);
      await adminPool.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
      await adminPool.end();
    }
    pool = mysql.createPool({ ...connectionOptions, database: databaseName });
    for (const [column, definition] of [
      ["min_bet", "DECIMAL(18,2) NOT NULL DEFAULT 0"],
      ["max_bet", "DECIMAL(18,2) NOT NULL DEFAULT 0"],
      ["credit_limit", "DECIMAL(18,2) NOT NULL DEFAULT 0"],
      ["partnership_remaining", "DECIMAL(7,2) NOT NULL DEFAULT 100"],
    ]) await addColumnIfMissing("users", column, definition);
    for (const [column, definition] of [
      ["settlement_result", "VARCHAR(16) NULL"],
      ["settlement_net", "DECIMAL(18,2) NULL"],
      ["settled_at", "DATETIME NULL"],
    ]) await addColumnIfMissing("bets", column, definition);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_partnerships (
        id VARCHAR(64) PRIMARY KEY,
        user_id VARCHAR(64) NOT NULL,
        partner_id VARCHAR(64) NOT NULL,
        share_percentage DECIMAL(7,2) NOT NULL,
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL,
        UNIQUE KEY uq_user_partnership (user_id, partner_id),
        KEY idx_user_partnership_user (user_id),
        KEY idx_user_partnership_partner (partner_id)
      )
    `);
    console.log(JSON.stringify({ ok: true, message: "MySQL Sprint 2 schema is ready" }, null, 2));
  } catch (error) {
    console.error(JSON.stringify({ ok: false, message: error.message }, null, 2));
    process.exitCode = 1;
  } finally {
    if (pool) await pool.end();
  }
})();
