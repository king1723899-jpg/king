"use strict";

// End-to-end: every Users-list action with the exact payloads the admin
// dialogs send, downline drill-down visibility, Admin creating Admin and
// several Master shares on one user.
const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const Database = require("better-sqlite3");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-act-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["actowner", "owner@123"];
const PW = "pass@123";

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env, PORT: String(PORT), HOST: "127.0.0.1", NODE_ENV: "test", SQLITE_DB_PATH: dbPath, MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0], DEFAULT_LOGIN_PASSWORD: SA[1], ADMIN_INITIAL_BALANCE: "0", DEMO_USERS_COUNT: "0", ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000", AUTH_RATE_LIMIT_MAX: "100000", JWT_SECRET: "act-a", JWT_REFRESH_SECRET: "act-b",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));
const call = async (method, url, token, body) => {
  const res = await fetch(BASE + url, { method, headers: { "Content-Type": "application/json", ...(token ? { Authorization: "Bearer " + token } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, data: json.data };
};
const ok = (r) => r.status === 200 && !r.json.error;
const expectOk = (r, label) => assert.ok(ok(r), `${label}: ${r.status} ${JSON.stringify(r.json).slice(0, 200)}`);
let ro;
const bal = (u) => ro.prepare("SELECT w.balance FROM wallets w JOIN users u ON u.id=w.user_id WHERE u.username=?").get(u).balance;

(async () => {
  for (let i = 0; i < 120; i += 1) { try { await fetch(BASE + "/health"); break; } catch { await new Promise((r) => setTimeout(r, 250)); } }
  ro = new Database(dbPath, { readonly: true });
  const login = async (u, p, admin = true) => call("POST", admin ? "/api/login-admin" : "/api/login", null, { username: u, password: p });
  const token = async (u, p, admin = true) => {
    const r = await login(u, p, admin);
    assert.ok(r.data?.token, `login ${u}: ${r.status} ${JSON.stringify(r.json)}`);
    return r.data.token;
  };
  const passFor = new Map();
  const create = async (tok, b) => {
    const r = await call("POST", "/api/admin/client-onboarding", tok, { fullName: b.userName, password: PW, confirmPassword: PW, transactionCode: passFor.get(tok), ...b });
    expectOk(r, "create " + b.userName);
    return r.data.userId;
  };
  const sa = await token(...SA); passFor.set(sa, SA[1]);
  const admAId = await create(sa, { userName: "adma", partnershipType: "admin" });
  await create(sa, { userName: "admb", partnershipType: "admin" });
  expectOk(await call("POST", "/api/user-account-balance", sa, { userId: admAId, balanceUpdateType: "D", amount: 50000, transactionPassword: SA[1] }), "fund adma");
  const admA = await token("adma", PW); passFor.set(admA, PW);
  const admB = await token("admb", PW); passFor.set(admB, PW);

  // Admin creates Admin (coins come from the creating Admin, nothing is minted)
  const admA2Id = await create(admA, { userName: "adma2", partnershipType: "admin", creditAmount: 5000 });
  assert.equal(bal("adma"), 45000);
  assert.equal(bal("adma2"), 5000);
  const admA2 = await token("adma2", PW); passFor.set(admA2, PW);
  const u2Id = await create(admA2, { userName: "user2", partnershipType: "client", creditAmount: 100 });

  // Several Masters share one user's commission
  const m1 = await create(admA, { userName: "mast1", partnershipType: "master" });
  const m2 = await create(admA, { userName: "mast2", partnershipType: "master" });
  let r = await call("POST", "/api/admin/client-onboarding", admA, { userName: "toomuch", fullName: "x", password: PW, confirmPassword: PW, transactionCode: PW, partnershipType: "client", partnerships: [{ partnerId: m1, sharePercentage: 60 }, { partnerId: m2, sharePercentage: 50 }] });
  assert.equal(r.status, 400, "shares over 100% rejected: " + JSON.stringify(r.json));
  const u1Id = await create(admA, { userName: "user1", partnershipType: "client", creditAmount: 1000, partnerships: [{ partnerId: m1, sharePercentage: 30 }, { partnerId: m2, sharePercentage: 20 }] });
  r = await call("GET", "/api/get-user-list", admA);
  const u1Row = r.data.items.find((u) => u.username === "user1");
  assert.deepEqual(u1Row.shareholders.map((s) => [s.username, s.sharePercentage]).sort(), [["mast1", 30], ["mast2", 20]]);

  // Username link = drill into that account's downline; visibility rules
  r = await call("GET", "/api/get-user-list?username=adma2", admA);
  expectOk(r, "adma opens adma2");
  assert.deepEqual(r.data.items.map((u) => u.username), ["user2"]);
  assert.deepEqual(r.data.breadcrumb.map((b) => b.username), ["adma", "adma2"]);
  r = await call("GET", "/api/get-user-list?username=adma2", sa);
  expectOk(r, "super admin opens anything");
  assert.deepEqual(r.data.breadcrumb.map((b) => b.username), [SA[0], "adma", "adma2"]);
  for (const target of ["adma", "adma2", "user1", "mast1"]) {
    assert.equal((await call("GET", `/api/get-user-list?username=${target}`, admB)).status, 403, `admb cannot open ${target}`);
  }
  assert.equal((await call("GET", "/api/get-user-list?username=adma", admA2)).status, 403, "cannot open your upline");
  r = await call("GET", "/api/get-user-list", admB);
  assert.equal(r.data.items.length, 0, "admb sees no other admin's accounts");

  // ---- Actions on a direct child (user1) with the dialogs' payloads ----
  const D = (userId, amount, tp = PW) => call("POST", "/api/user-account-balance", admA, { amount, narration: "test", transactionPassword: tp, userId, parentUserId: admAId, balanceUpdateType: "D" });
  expectOk(await D(u1Id, 200), "D deposit");
  assert.equal((await D(u1Id, 200, "wrong")).status, 400, "D wrong txn password");
  expectOk(await call("POST", "/api/user-account-balance", admA, { amount: 50, narration: "w", transactionPassword: PW, userId: u1Id, parentUserId: admAId, balanceUpdateType: "W" }), "W withdraw");
  assert.equal(bal("user1"), 1150);
  expectOk(await call("POST", "/api/update-user-wallet", admA, { amount: 700, transactionPassword: PW, username: "user1", walletUpdateType: "EXP" }), "L exposure limit");
  expectOk(await call("POST", "/api/update-user-wallet", admA, { amount: 1500, transactionPassword: PW, username: "user1", walletUpdateType: "CRD" }), "C credit reference");
  r = await call("GET", "/api/get-user-list", admA);
  const row = r.data.items.find((u) => u.username === "user1");
  assert.equal(row.creditRefrences, 1500);
  assert.equal(row.exposerLimit, 700);
  assert.equal(bal("user1"), 1150, "limits never move coins");

  assert.equal((await call("POST", "/api/update-user", null, { password: "hack@1", confirmPassword: "hack@1", username: "user1" })).status, 401, "P needs login");
  assert.equal((await call("POST", "/api/update-user", admA, { password: "new@123", confirmPassword: "new@123", transactionPassword: "wrong", username: "user1" })).status, 400);
  expectOk(await call("POST", "/api/update-user", admA, { password: "new@123", confirmPassword: "new@123", transactionPassword: PW, username: "user1" }), "P password");
  const u1 = await token("user1", "new@123", false);
  assert.equal((await call("POST", "/api/update-user", admB, { password: "x@1234", confirmPassword: "x@1234", transactionPassword: PW, username: "user1" })).status, 403, "other admin cannot");
  expectOk(await call("POST", "/api/update-password", u1, { username: "user1", password: "own@123", confirmPassword: "own@123" }), "player changes own password");

  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: false, isUserBetActive: false, transactionPassword: PW, username: "user1" }), "S deactivate");
  assert.equal((await login("user1", "own@123", false)).status, 403, "deactivated user cannot log in");
  assert.equal((await call("GET", "/api/get-user-balance", u1)).status, 401, "deactivated user's session stops");
  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: true, isUserBetActive: false, transactionPassword: PW, username: "user1" }), "S reactivate");
  const u1b = await token("user1", "own@123", false);
  assert.equal((await call("POST", "/api/update-user-status", u1b, { isUserActive: true, isUserBetActive: false, username: "user1" })).status, 403, "player cannot unlock self");
  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: true, isUserBetActive: true, username: "user1", single: true }), "inline B lock");
  r = await call("GET", "/api/get-user-list", admA);
  assert.equal(r.data.items.find((u) => u.username === "user1").betLock, true);
  expectOk(await call("POST", "/api/users-lock", admA, { userIds: [u1Id], betLock: false }), "bulk unlock");
  r = await call("POST", "/api/users-lock", admA, { userIds: [admAId], isActive: false });
  assert.equal(r.data.total, 0, "cannot lock yourself");

  expectOk(await call("POST", "/api/save-general-setting", admA, { userId: u1Id, userSetting: { 0: { minBet: 10, maxBet: 500, delay: 0 }, 1: { minBet: 20, maxBet: 800, delay: 0 } }, transactionPassword: PW }), "GS settings");
  const lim = ro.prepare("SELECT min_bet,max_bet FROM users WHERE id=?").get(u1Id);
  assert.deepEqual([lim.min_bet, lim.max_bet], [10, 800], "general settings apply to bet limits");
  assert.equal((await call("POST", "/api/save-general-setting", admA, { userId: u1Id, userSetting: { 0: { minBet: 1, maxBet: 2 } }, transactionPassword: "bad" })).status, 400);
  expectOk(await call("POST", "/api/reset-transaction-password", admA, { userId: u1Id, transactionPassword: "7777" }), "reset txn password");
  expectOk(await call("GET", "/api/get-user-detail?username=user1", admA), "user detail");
  expectOk(await call("GET", "/api/get-parent-user-detail?username=user1", admA), "parent detail");
  expectOk(await call("GET", "/api/get-user-book", admA), "user book");

  // ---- Actions on a grandchild (user2 under adma2) ----
  expectOk(await call("POST", "/api/update-user-wallet", admA, { amount: 300, transactionPassword: PW, username: "user2", walletUpdateType: "CRD" }), "C on grandchild");
  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: true, isUserBetActive: true, transactionPassword: PW, username: "user2" }), "S on grandchild");
  r = await call("POST", "/api/user-account-balance", admA, { amount: 10, narration: "x", transactionPassword: PW, userId: u2Id, balanceUpdateType: "D" });
  assert.equal(r.status, 403);
  assert.match(r.json.message, /adma2/, "tells who the parent is");

  // Deactivating an Admin stops its whole downline
  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: false, isUserBetActive: false, transactionPassword: PW, username: "adma2" }), "deactivate adma2");
  assert.equal((await login("user2", PW, false)).status, 403, "downline of a deactivated admin is blocked");
  assert.equal((await login("adma2", PW)).status, 403);
  expectOk(await call("POST", "/api/update-user-status", admA, { isUserActive: true, isUserBetActive: false, transactionPassword: PW, username: "adma2" }), "reactivate adma2");
  assert.ok((await login("user2", PW, false)).data?.token, "downline works again");

  console.log(JSON.stringify({ ok: true, checks: "admin->admin, multi masters, drill-down visibility, D W L C P S GS lock reset detail book, grandchild rules, deactivation chain" }));
})()
  .catch((e) => { console.error(e); console.error("---- server log tail ----\n" + serverLog.slice(-2500)); process.exitCode = 1; })
  .finally(() => { try { ro?.close(); } catch {} server.kill(); setTimeout(() => { try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {} }, 500); });
