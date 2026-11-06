"use strict";

// Regression tests for the access fixes found in manual QA: per-account stake
// buttons that need a login, password changes ending old sessions, bet-lock
// visibility, upline balances hidden in the coin ledger, retired WhatsApp API.
const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-acc-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["accowner", "owner@123"];
const PW = "pass@123";

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env, PORT: String(PORT), HOST: "127.0.0.1", NODE_ENV: "test", SQLITE_DB_PATH: dbPath, MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0], DEFAULT_LOGIN_PASSWORD: SA[1], ADMIN_INITIAL_BALANCE: "0", DEMO_USERS_COUNT: "0", ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000", AUTH_RATE_LIMIT_MAX: "100000", JWT_SECRET: "acc-a", JWT_REFRESH_SECRET: "acc-b",
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
const expectOk = (r, label) => assert.ok(r.status === 200 && !r.json.error, `${label}: ${r.status} ${JSON.stringify(r.json).slice(0, 200)}`);

(async () => {
  for (let i = 0; i < 120; i += 1) { try { await fetch(BASE + "/health"); break; } catch { await new Promise((r) => setTimeout(r, 250)); } }
  const token = async (u, p, admin = true) => {
    const r = await call("POST", admin ? "/api/login-admin" : "/api/login", null, { username: u, password: p });
    assert.ok(r.data?.token, `login ${u}: ${r.status} ${JSON.stringify(r.json)}`);
    return r.data.token;
  };
  const sa = await token(...SA);
  const create = async (tok, tp, b) => {
    const r = await call("POST", "/api/admin/client-onboarding", tok, { fullName: b.userName, password: PW, confirmPassword: PW, transactionCode: tp, ...b });
    expectOk(r, "create " + b.userName);
    return r.data.userId;
  };
  const admId = await create(sa, SA[1], { userName: "accadm", partnershipType: "admin" });
  expectOk(await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 10000, transactionPassword: SA[1] }), "fund admin");
  const adm = await token("accadm", PW);
  const u1Id = await create(adm, PW, { userName: "accu1", partnershipType: "client", creditAmount: 100 });
  const u2Id = await create(adm, PW, { userName: "accu2", partnershipType: "client", creditAmount: 100 });
  let u1 = await token("accu1", PW, false);
  const u2 = await token("accu2", PW, false);

  // 1) Stake buttons: login required, per account, page shape, validation
  assert.equal((await call("POST", "/api/save-user-stake", null, { value1: 1 })).status, 401, "saving stakes needs a login");
  let r = await call("GET", "/api/get-user-stake", u1);
  expectOk(r, "get stakes");
  assert.equal(r.data.userStake.value1, 500, "defaults returned as userStake");
  assert.ok(Array.isArray(r.data.stakes), "legacy stakes list still present");
  expectOk(await call("POST", "/api/save-user-stake", u1, { name1: "1K", value1: 1000, name2: "2K", value2: "2000" }), "save stakes");
  r = await call("GET", "/api/get-user-stake", u1);
  assert.equal(r.data.userStake.name1, "1K");
  assert.equal(r.data.userStake.value2, 2000);
  assert.equal(r.data.stakes[0], 1000);
  r = await call("GET", "/api/get-user-stake", u2);
  assert.equal(r.data.userStake.value1, 500, "another player's buttons are unchanged");
  r = await call("POST", "/api/save-user-stake", u1, { value3: -5, name4: "" });
  assert.equal(r.status, 400, "invalid values rejected");
  assert.ok(r.json.errors.value3 && r.json.errors.name4);
  expectOk(await call("POST", "/api/save-user-stake", u1, { stakes: [10, 20] }), "legacy stakes array");
  assert.equal((await call("GET", "/api/get-user-stake", u1)).data.userStake.value2, 20);

  // 2) Password changes end existing sessions
  expectOk(await call("POST", "/api/update-user", adm, { password: "new@123", confirmPassword: "new@123", transactionPassword: PW, username: "accu1" }), "admin resets password");
  assert.equal((await call("GET", "/api/get-user-balance", u1)).status, 401, "old session ends after admin reset");
  u1 = await token("accu1", "new@123", false);
  expectOk(await call("GET", "/api/get-user-balance", u1), "new login works");
  expectOk(await call("POST", "/api/update-password", u1, { username: "accu1", password: "own@123", confirmPassword: "own@123" }), "own change");
  assert.equal((await call("GET", "/api/get-user-balance", u1)).status, 401, "old session ends after own change");
  u1 = await token("accu1", "own@123", false);

  // 3) Match bet locks: login required, per-user entries only where visible
  expectOk(await call("POST", "/api/bet-lock", adm, { matchId: 901, marketType: "M", isLocked: true, userId: u1Id }), "lock u1");
  expectOk(await call("POST", "/api/bet-lock", adm, { matchId: 901, marketType: "M", isLocked: true, userId: u2Id }), "lock u2");
  assert.equal((await call("GET", "/api/match-bet-locks/901", null)).status, 401, "bet locks need a login");
  r = await call("GET", "/api/match-bet-locks/901", u1);
  expectOk(r, "player reads locks");
  assert.deepEqual(Object.keys(r.data.users), [u1Id], "player sees only their own lock");
  assert.equal(r.data.users[u1Id].M, true);
  r = await call("GET", "/api/match-bet-locks/901", adm);
  assert.deepEqual(Object.keys(r.data.users).sort(), [u1Id, u2Id].sort(), "admin sees downline locks");

  // 4) Coin ledger hides balances of upline accounts
  r = await call("GET", "/api/admin/coin-ledger", u2);
  expectOk(r, "player ledger");
  const credit = r.data.items.find((i) => i.toUserId === u2Id);
  assert.ok(credit, "player sees own opening credit");
  assert.equal(credit.fromBalanceAfter, null, "admin balance hidden from player");
  assert.equal(credit.toBalanceAfter, 100, "own balance shown");
  r = await call("GET", "/api/admin/coin-ledger", adm);
  const fund = r.data.items.find((i) => i.toUserId === admId && i.amount === 10000);
  assert.ok(fund, "admin sees own funding");
  assert.equal(fund.fromBalanceAfter, null, "Super Admin balance hidden from admin");
  assert.ok(r.data.items.some((i) => i.toUserId === u2Id && i.fromBalanceAfter !== null), "admin sees own balance on transfers it made");
  r = await call("GET", "/api/admin/coin-ledger", sa);
  assert.ok(r.data.items.every((i) => i.fromBalanceAfter !== null && i.toBalanceAfter !== null), "Super Admin sees every balance");

  // 4b) Dashboard / Analysis: an Admin funding its own clients is not counted
  // again as a deposit on Super Admin's dashboard. SA put 10000 into accadm;
  // accadm gave 100 + 100 opening coins to its two clients.
  const today = new Date().toISOString().slice(0, 10);
  r = await call("GET", "/api/admin/dashboard?from=2000-01-01", sa);
  assert.equal(r.data.deposit, 10000, "SA dashboard counts only coins SA put into its downline");
  r = await call("GET", `/api/admin/dashboard?from=${today}&to=${today}`, sa);
  assert.equal(r.data.deposit, 10000, "date-only 'to' covers the whole day");
  r = await call("GET", "/api/get-analysis-data", sa);
  assert.equal(r.data.totalDeposit, 10000, "SA analysis total not double-counted");
  assert.equal(r.data.users.find((x) => x.username === "accu2").totalDeposit, 100, "per-user row still shows what the user received");
  r = await call("GET", "/api/admin/dashboard?from=2000-01-01", adm);
  assert.equal(r.data.deposit, 200, "Admin dashboard counts its own transfers to clients");
  expectOk(await call("POST", "/api/user-account-balance", adm, { userId: u2Id, balanceUpdateType: "W", amount: 40, transactionPassword: PW }), "admin withdraws from client");
  assert.equal((await call("GET", "/api/admin/dashboard?from=2000-01-01", adm)).data.withdrawal, 40);
  assert.equal((await call("GET", "/api/admin/dashboard?from=2000-01-01", sa)).data.withdrawal, 0, "internal withdraw not on SA dashboard");

  // 4c) Banking model: head office funds branches; only the branch moves coins
  // to its own customers. Super Admin cannot deposit/withdraw on accu2 (whose
  // branch is accadm), and nothing moves when it tries.
  const ledgerCount = async () => (await call("GET", "/api/admin/coin-ledger?limit=500", sa)).data.total;
  const n0 = await ledgerCount();
  for (const t of ["D", "W"]) {
    r = await call("POST", "/api/user-account-balance", sa, { userId: u2Id, balanceUpdateType: t, amount: 10, narration: "ho", transactionPassword: SA[1] });
    assert.equal(r.status, 403, `SA ${t} on a branch customer is refused`);
    assert.match(r.json.message, /accadm/, "tells SA which branch to ask");
  }
  assert.equal(await ledgerCount(), n0, "no coins moved");
  expectOk(await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 5, narration: "ho", transactionPassword: SA[1] }), "SA still funds its branch");
  const u2r = await token("accu2", PW, false);
  expectOk(await call("POST", "/api/add-deposit-withdraw", u2r, { type: "deposit", amount: 25 }), "customer asks for coins");
  const reqRow = (await call("GET", "/api/get-deposit-withdraw-list?type=deposit", adm)).data;
  const pending = (Array.isArray(reqRow) ? reqRow : reqRow?.items || []).find((x) => Number(x.amount) === 25);
  assert.ok(pending, "branch sees its customer's request");
  r = await call("POST", "/api/update-deposit-withdraw-status", sa, { id: pending.id || pending._id, status: "approved" });
  assert.equal(r.status, 403, "SA cannot approve a branch customer's request");
  assert.match(r.json.message, /accadm/);
  expectOk(await call("POST", "/api/update-deposit-withdraw-status", adm, { id: pending.id || pending._id, status: "approved" }), "branch approves it");

  // 5) Retired WhatsApp endpoint no longer claims success
  assert.equal((await call("POST", "/api/send-whatsapp-message", null, {})).status, 410);

  console.log(JSON.stringify({ ok: true, checks: "stake buttons, password session revoke, bet-lock visibility, ledger balance privacy, whatsapp retired" }));
})()
  .catch((e) => { console.error(e); console.error("---- server log tail ----\n" + serverLog.slice(-2500)); process.exitCode = 1; })
  .finally(() => { server.kill(); setTimeout(() => { try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {} }, 500); });
