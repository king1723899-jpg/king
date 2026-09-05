"use strict";

const path = require("path");
const Database = require("better-sqlite3");

const dbPath = process.env.DB_PATH || path.join(__dirname, "..", "data_store", "site.db");
const db = new Database(dbPath);

db.pragma("foreign_keys = ON");

const hasColumn = db
  .prepare("PRAGMA table_info(users)")
  .all()
  .some((column) => String(column.name || "").toLowerCase() === "upline_commission");

const migrate = db.transaction(() => {
  if (!hasColumn) {
    db.exec("ALTER TABLE users ADD COLUMN upline_commission REAL NOT NULL DEFAULT 0");
  }

  const roleMappings = [
    ["super_admin", "owner"],
    ["super_admin", "superadmin"],
    ["super_admin", "sadmin"],
    ["super_admin", "super master"],
    ["super_admin", "super-master"],
    ["super_admin", "super_master"],
    ["admin", "master"],
    ["admin", "master_agent"],
    ["admin", "masteragent"],
    ["admin", "mdl"],
    ["sub_admin", "agent"],
    ["sub_admin", "subadmin"],
    ["sub_admin", "dl"],
  ];
  const updateRole = db.prepare("UPDATE users SET role=? WHERE lower(trim(role))=?");
  for (const [newRole, oldRole] of roleMappings) updateRole.run(newRole, oldRole);

  db.prepare("UPDATE users SET upline_commission=COALESCE(upline_commission,0) WHERE upline_commission IS NULL").run();
  db.exec("CREATE INDEX IF NOT EXISTS idx_users_parent_id ON users(parent_id)");
  db.exec("CREATE INDEX IF NOT EXISTS idx_users_role ON users(role)");
});

try {
  migrate();
  const result = db.prepare("SELECT role, COUNT(*) AS count FROM users GROUP BY role ORDER BY role").all();
  console.log(JSON.stringify({ ok: true, dbPath, roles: result }, null, 2));
} catch (error) {
  console.error(JSON.stringify({ ok: false, message: error.message }, null, 2));
  process.exitCode = 1;
} finally {
  db.close();
}
