"use strict";

// End-to-end test of account creation and parent <-> child coin flow.
// Boots server.js against a throw-away SQLite file and drives it over HTTP.
const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const Database = require("better-sqlite3");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-e2e-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const BASE = `http://127.0.0.1:${PORT}`;
const SA_USER = "e2eowner";
const SA_PASS = "owner@123";

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env,
    PORT: String(PORT),
    HOST: "127.0.0.1",
    NODE_ENV: "test",
    SQLITE_DB_PATH: dbPath,
    MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA_USER,
    DEFAULT_LOGIN_PASSWORD: SA_PASS,
    ADMIN_INITIAL_BALANCE: "0",
    ENABLE_TEST_ACCOUNTS: "false",
    DEMO_USERS_COUNT: "0",
    API_RATE_LIMIT_MAX: "100000",
    AUTH_RATE_LIMIT_MAX: "100000",
    JWT_SECRET: "e2e-secret",
    JWT_REFRESH_SECRET: "e2e-refresh",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));

const call = async (method, url, token, body, headers = {}) => {
  const res = await fetch(BASE + url, {
    method,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: "Bearer " + token } : {}), ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, data: json.data };
};
const waitForServer = async () => {
  for (let i = 0; i < 120; i += 1) {
    try {
      await fetch(BASE + "/api/userMessage");
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  throw new Error("server did not start\n" + serverLog);
};
const passwordFor = new Map();
const loginAdmin = async (username, password) => {
  const r = await call("POST", "/api/login-admin", null, { username, password });
  assert.equal(r.status, 200, `admin login ${username}: ${JSON.stringify(r.json)}`);
  passwordFor.set(r.data.token, password);
  return r.data.token;
};
const loginUser = async (username, password) => {
  const r = await call("POST", "/api/login", null, { username, password });
  assert.equal(r.status, 200, `user login ${username}: ${JSON.stringify(r.json)}`);
  return r.data.token;
};
const create = (token, body) =>
  call("POST", "/api/admin/client-onboarding", token, {
    fullName: body.userName,
    password: "pass@123",
    confirmPassword: "pass@123",
    transactionCode: passwordFor.get(token),
    ...body,
  });
const dw = (token, userId, type, amount, transactionPassword, extra = {}) =>
  call("POST", "/api/user-account-balance", token, { userId, balanceUpdateType: type, amount, transactionPassword, ...extra.body }, extra.headers);

let ro;
const bal = (username) => ro.prepare("SELECT w.balance FROM wallets w JOIN users u ON u.id=w.user_id WHERE u.username=?").get(username).balance;
const total = () => Math.round(ro.prepare("SELECT SUM(balance) AS s FROM wallets").get().s * 100) / 100 + 0;

(async () => {
  await waitForServer();
  ro = new Database(dbPath, { readonly: true, fileMustExist: true });
  const sa = await loginAdmin(SA_USER, SA_PASS);
  assert.equal(total(), 0);

  // --- Account creation rules ---
  let bad = await create(sa, { userName: "nopass", partnershipType: "admin", transactionCode: "wrong" });
  assert.equal(bad.status, 400, "creator transaction password is verified");
  let r = await create(sa, { userName: "adm1", partnershipType: "admin" });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const adm1Id = r.data.userId;
  r = await create(sa, { userName: "adm2", partnershipType: "admin" });
  assert.equal(r.status, 200);
  for (const legacy of ["super_master", "sub_super_master"]) {
    r = await create(sa, { userName: "legacy_" + legacy, partnershipType: legacy });
    assert.equal(r.data.role, "master", "legacy types are created as Master");
  }

  // Super Admin -> Admin coins (wrong txn password rejected first)
  r = await dw(sa, adm1Id, "D", 10000, "wrong");
  assert.equal(r.status, 400);
  assert.match(r.json.message, /transaction password/i);
  r = await dw(sa, adm1Id, "D", 10000, SA_PASS);
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(r.data.balance, 10000);
  assert.equal(bal("adm1"), 10000);
  assert.equal(total(), 0);

  const adm1 = await loginAdmin("adm1", "pass@123");
  r = await create(adm1, { userName: "adm1_admin", partnershipType: "admin" });
  assert.equal(r.status, 403, "admin cannot create admin");
  r = await create(adm1, { userName: "mst1", partnershipType: "master", creditAmount: 1000 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const mst1Id = r.data.userId;
  assert.equal(bal("mst1"), 1000);
  assert.equal(bal("adm1"), 9000);

  // Master share: only one Master, only on User accounts
  r = await create(adm1, { userName: "usrx", partnershipType: "master", partnerships: [{ partnerId: mst1Id, sharePercentage: 10 }] });
  assert.equal(r.status, 400, "share not allowed on master accounts");
  r = await create(adm1, { userName: "usr1", partnershipType: "client", creditAmount: 500, partnerships: [{ partnerId: mst1Id, sharePercentage: 20 }] });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const usr1Id = r.data.userId;
  assert.equal(bal("usr1"), 500);
  assert.equal(ro.prepare("SELECT COUNT(*) AS c FROM user_partnerships WHERE user_id=?").get(usr1Id).c, 1);
  r = await create(adm1, { userName: "usr9", partnershipType: "client", creditAmount: 99999999 });
  assert.equal(r.status, 400, "opening credit cannot exceed parent balance");
  assert.equal(ro.prepare("SELECT COUNT(*) AS c FROM users WHERE username='usr9'").get().c, 0, "failed create leaves no account");

  const mst1 = await loginAdmin("mst1", "pass@123");
  r = await create(mst1, { userName: "mst1_master", partnershipType: "master" });
  assert.equal(r.status, 403, "master cannot create master");
  r = await create(mst1, { userName: "usr2", partnershipType: "client", creditAmount: 100 });
  assert.equal(r.status, 200);
  const usr2Id = r.data.userId;

  // --- Strict parent <-> child ---
  r = await dw(mst1, usr1Id, "D", 10, "pass@123");
  assert.equal(r.status, 403, "master cannot fund admin's user");
  r = await dw(adm1, usr2Id, "D", 10, "pass@123");
  assert.equal(r.status, 403, "admin cannot skip a level");
  r = await dw(adm1, adm1Id, "D", 10, "pass@123");
  assert.equal(r.status, 403, "cannot fund yourself");

  r = await dw(adm1, usr1Id, "D", 200, "pass@123");
  assert.equal(r.status, 200);
  assert.equal(r.data.balance, 700);
  assert.equal(r.data.parentBalance, 8300);
  r = await dw(adm1, usr1Id, "D", 8300.01, "pass@123");
  assert.equal(r.status, 400, "no overdraft");
  r = await dw(adm1, usr1Id, "W", 700.01, "pass@123");
  assert.equal(r.status, 400, "cannot withdraw more than user has");
  r = await dw(adm1, usr1Id, "W", 150, "pass@123");
  assert.equal(r.status, 200);
  assert.equal(bal("usr1"), 550);
  assert.equal(bal("adm1"), 8450);
  r = await dw(adm1, usr1Id, "D", "1.234", "pass@123");
  assert.equal(r.status, 400);
  r = await dw(adm1, usr1Id, "D", -5, "pass@123");
  assert.equal(r.status, 400);

  // Idempotent retry
  const key = "e2e-" + Date.now();
  const a = await dw(adm1, usr1Id, "D", 25, "pass@123", { headers: { "Idempotency-Key": key } });
  const b = await dw(adm1, usr1Id, "D", 25, "pass@123", { headers: { "Idempotency-Key": key } });
  assert.equal(a.status, 200);
  assert.equal(b.data.replayed, true);
  assert.equal(bal("usr1"), 575);

  // Direct balance edits are gone
  r = await call("POST", "/api/update-user-wallet", sa, { userId: usr1Id, balance: 999999, transactionPassword: SA_PASS });
  assert.equal(r.status, 400);
  r = await call("POST", "/api/update-user-wallet", adm1, { userId: usr1Id, walletUpdateType: "CRD", amount: 5000, transactionPassword: "pass@123" });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(bal("usr1"), 575, "credit reference does not change balance");

  // --- User withdraw / deposit requests, approved by the parent ---
  const usr1 = await loginUser("usr1", "pass@123");
  r = await call("POST", "/api/add-deposit-withdraw", usr1, { type: "withdraw", amount: 5000 });
  assert.equal(r.status, 400, "withdraw request above balance rejected");
  r = await call("POST", "/api/add-deposit-withdraw", usr1, { type: "withdraw", amount: 75 });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  const wreq = r.data.id;
  r = await call("POST", "/api/update-deposit-withdraw-status", mst1, { id: wreq, status: "approved" });
  assert.equal(r.status, 403, "only the parent approves");
  r = await call("POST", "/api/update-deposit-withdraw-status", adm1, { id: wreq, status: "approved" });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  assert.equal(bal("usr1"), 500);
  assert.equal(bal("adm1"), 8500);
  r = await call("POST", "/api/update-deposit-withdraw-status", adm1, { id: wreq, status: "pending" });
  assert.equal(r.status, 400, "cannot reopen");
  r = await call("POST", "/api/update-deposit-withdraw-status", adm1, { id: wreq, status: "approved" });
  assert.equal(r.status, 409, "cannot approve twice");
  assert.equal(bal("usr1"), 500);

  r = await call("POST", "/api/add-deposit-withdraw", usr1, { type: "deposit", amount: 300 });
  const dreq = r.data.id;
  r = await call("POST", "/api/update-deposit-withdraw-status", adm1, { id: dreq, status: "rejected" });
  assert.equal(r.status, 200);
  r = await call("POST", "/api/update-deposit-withdraw-status", adm1, { id: dreq, status: "approved" });
  assert.equal(r.status, 409);
  assert.equal(bal("usr1"), 500);

  // --- Concurrency: 30 simultaneous withdraws of 40 from a 500 balance ---
  const results = await Promise.all(Array.from({ length: 30 }, () => dw(adm1, usr1Id, "W", 40, "pass@123")));
  const okCount = results.filter((x) => x.status === 200).length;
  assert.equal(okCount, 12, "exactly floor(500/40) withdraws succeed");
  assert.equal(bal("usr1"), 20);

  // Super Admin withdraws from Admin
  r = await dw(sa, adm1Id, "W", 1000, SA_PASS);
  assert.equal(r.status, 200);

  // --- Invariants ---
  assert.equal(total(), 0, "sum of all wallets is conserved");
  const replay = new Map();
  for (const row of ro.prepare("SELECT from_user_id,to_user_id,amount FROM coin_ledger").all()) {
    replay.set(row.from_user_id, (replay.get(row.from_user_id) || 0) - row.amount);
    replay.set(row.to_user_id, (replay.get(row.to_user_id) || 0) + row.amount);
  }
  for (const [uid, value] of replay) {
    const w = ro.prepare("SELECT balance FROM wallets WHERE user_id=?").get(uid).balance;
    assert.equal(Math.round(value * 100) / 100 + 0, w + 0, "ledger reconciles for " + uid);
  }
  const negatives = ro.prepare("SELECT u.username FROM wallets w JOIN users u ON u.id=w.user_id WHERE w.balance<0 AND u.role<>'super_admin'").all();
  assert.deepEqual(negatives, []);

  // Ledger API visibility
  r = await call("GET", "/api/admin/coin-ledger?limit=500", mst1);
  assert.equal(r.status, 200);
  assert.ok(r.data.items.every((i) => [i.fromUsername, i.toUsername].some((n) => ["mst1", "usr2"].includes(n))), "master sees only its own tree");
  r = await call("GET", "/api/admin/coin-ledger?username=usr1", mst1);
  assert.equal(r.status, 403);
  r = await call("GET", "/api/admin/coin-ledger?limit=500", sa);
  assert.equal(r.data.total, ro.prepare("SELECT COUNT(*) AS c FROM coin_ledger").get().c);

  // Roles list contains only the 4 roles
  const roles = ro.prepare("SELECT DISTINCT role FROM users").all().map((x) => x.role).sort();
  assert.deepEqual(roles, ["admin", "master", "super_admin", "user"]);

  console.log(JSON.stringify({ ok: true, ledgerEntries: r.data.total, concurrentWithdrawsOk: okCount }));
})()
  .catch((e) => {
    console.error(e);
    console.error("---- server log tail ----\n" + serverLog.slice(-3000));
    process.exitCode = 1;
  })
  .finally(() => {
    try {
      ro?.close();
    } catch {}
    server.kill();
    setTimeout(() => {
      try {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      } catch {}
    }, 500);
  });
