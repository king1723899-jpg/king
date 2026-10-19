"use strict";

// Regression tests for the money-safety fixes: casino callback auth, bet
// identity/price/balance checks, bet cancellation, payment settings,
// registration codes and token-only identity.
const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const Database = require("better-sqlite3");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-sec-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["secowner", "owner@123"];
const MATCH_ID = 77001;
const MID = "77001000";

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env,
    PORT: String(PORT),
    HOST: "127.0.0.1",
    NODE_ENV: "test",
    SQLITE_DB_PATH: dbPath,
    MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0],
    DEFAULT_LOGIN_PASSWORD: SA[1],
    ADMIN_INITIAL_BALANCE: "0",
    DEMO_USERS_COUNT: "0",
    ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000",
    AUTH_RATE_LIMIT_MAX: "100000",
    JWT_SECRET: "sec-a",
    JWT_REFRESH_SECRET: "sec-b",
    CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP: "",
    PROVIDER_CALLBACK_IPS: "",
    BET_ALLOW_UNFED_ODDS: "",
    BET_ODDS_MAX_AGE_SECONDS: "30",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));

const call = async (method, url, token, body, { raw = false } = {}) => {
  const res = await fetch(BASE + url, {
    method,
    headers: { "Content-Type": raw ? "text/plain" : "application/json", ...(token ? { Authorization: "Bearer " + token } : {}) },
    body: body === undefined ? undefined : raw ? body : JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, data: json.data };
};
const ok = (r) => r.status === 200 && !r.json.error;

let rw;
const wallet = (username) => rw.prepare("SELECT w.balance,w.exposer FROM wallets w JOIN users u ON u.id=w.user_id WHERE u.username=?").get(username);
const setMarket = ({ status = "OPEN", fedAgoMs = 0, back = 2.5, lay = 2.6, gstatus = "ACTIVE", fed = true } = {}) => {
  const section = [
    { sid: 501, gstatus, nat: "Team A", odds: [{ otype: "back", odds: back }, { otype: "lay", odds: lay }] },
    { sid: 502, gstatus, nat: "Team B", odds: [{ otype: "back", odds: 1.6 }, { otype: "lay", odds: 1.62 }] },
  ];
  const now = new Date().toISOString();
  rw.prepare(
    `INSERT OR REPLACE INTO matches (match_id,sport_id,name,status,section_json,external_json,created_at,updated_at,odds_updated_at)
     VALUES (?,4,'A v B',?,?,?,?,?,?)`
  ).run(MATCH_ID, status, JSON.stringify(section), JSON.stringify({ mid: MID, mname: "MATCH_ODDS", section }), now, now, fed ? new Date(Date.now() - fedAgoMs).toISOString() : null);
};

(async () => {
  for (let i = 0; i < 120; i += 1) {
    try { await fetch(BASE + "/health"); break; } catch { await new Promise((r) => setTimeout(r, 250)); }
  }
  rw = new Database(dbPath);
  rw.pragma("busy_timeout = 5000");
  const login = async (u, p, admin = true) => (await call("POST", admin ? "/api/login-admin" : "/api/login", null, { username: u, password: p })).data.token;
  const sa = await login(...SA);
  const create = (tok, txn, b) => call("POST", "/api/admin/client-onboarding", tok, { fullName: b.userName, password: "pass@123", confirmPassword: "pass@123", transactionCode: txn, ...b });
  const admId = (await create(sa, SA[1], { userName: "adm1", partnershipType: "admin" })).data.userId;
  await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 100000, transactionPassword: SA[1] });
  const adm = await login("adm1", "pass@123");
  const usrId = (await create(adm, "pass@123", { userName: "usr1", partnershipType: "client", creditAmount: 1000 })).data.userId;
  const usr = await login("usr1", "pass@123", false);

  // #1 unauthenticated casino callback cannot move coins
  const before = wallet("usr1").balance;
  for (const body of [
    JSON.stringify({ user_id: "usr1", game_code: "g", serial_number: "s1", bet_amount: 0, win_amount: 50000 }),
    JSON.stringify({ user_id: "usr1", game_code: "g", serial_number: "s2", action: "credit", amount: 50000 }),
  ]) {
    await call("POST", "/call.php", null, body, { raw: true });
    await call("POST", "/api/call.php", null, JSON.parse(body));
  }
  await call("POST", "/call.php", null, JSON.stringify({ user_id: "usr1", game_code: "g", serial_number: "s3", win_amount: 50000 }), { raw: true });
  assert.equal(wallet("usr1").balance, before, "#1 unauthenticated callback must not credit");
  // An authenticated provider callback still works.
  const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, "data_store/provider_api_settings.json"), "utf8"));
  const authed = await call("POST", "/api/call.php", null, { user_id: "usr1", game_code: "g", serial_number: "auth-1", action: "debit", amount: 10, agent: cfg.providerAgent, token: cfg.providerToken });
  assert.equal(wallet("usr1").balance, before - 10, "#1 authenticated callback debits: " + JSON.stringify(authed.json));
  await call("POST", "/api/call.php", null, { user_id: "usr1", game_code: "g", serial_number: "auth-2", action: "credit", amount: 10, agent: cfg.providerAgent, token: cfg.providerToken });
  assert.equal(wallet("usr1").balance, before, "#1 authenticated callback credits");

  // #8 no identity without a token
  for (const [m, u] of [["GET", "/api/get-user-balance"], ["GET", "/api/user-info"], ["POST", "/api/account-statement-list"]]) {
    const r = await call(m, u, null, m === "POST" ? { userId: usrId } : undefined);
    assert.ok(!ok(r), `#8 ${u} must require login, got ${r.status}`);
  }
  assert.ok(ok(await call("GET", "/api/get-user-balance", usr)), "#8 logged-in balance still works");

  // #2 bets need a player token
  const bet = (tok, b) => call("POST", "/api/placebet", tok, { matchId: MATCH_ID, marketId: MID, selectionId: 501, ...b });
  setMarket();
  let r = await bet(null, { userId: usrId, stack: 100, odds: 2.5, isBack: true });
  assert.equal(r.status, 401, "#2 no token -> 401");
  r = await bet(adm, { stack: 100, odds: 2.5, isBack: true });
  assert.equal(r.status, 403, "#2 admins cannot bet");

  // #3 server-side price
  r = await bet(usr, { stack: 100, odds: 1000, isBack: true });
  assert.equal(r.status, 409, "#3 inflated back odds rejected");
  r = await bet(usr, { stack: 100, odds: 2, isBack: false });
  assert.equal(r.status, 409, "#3 lay below market rejected");
  r = await bet(usr, { matchId: 999999, stack: 100, odds: 2, isBack: true });
  assert.equal(r.status, 404, "#3 unknown match rejected");
  r = await bet(usr, { marketId: "nope", stack: 100, odds: 2.5, isBack: true });
  assert.equal(r.status, 400, "#3 unknown market rejected");
  r = await bet(usr, { selectionId: 999, stack: 100, odds: 2.5, isBack: true });
  assert.equal(r.status, 400, "#3 unknown selection rejected");
  setMarket({ status: "SUSPENDED" });
  assert.equal((await bet(usr, { stack: 100, odds: 2.5, isBack: true })).status, 400, "#3 suspended market");
  setMarket({ gstatus: "SUSPENDED" });
  assert.equal((await bet(usr, { stack: 100, odds: 2.5, isBack: true })).status, 400, "#3 suspended selection");
  setMarket({ fed: false });
  assert.equal((await bet(usr, { stack: 100, odds: 2.5, isBack: true })).status, 503, "#3 market without live feed");
  setMarket({ fedAgoMs: 60000 });
  assert.equal((await bet(usr, { stack: 100, odds: 2.5, isBack: true })).status, 503, "#3 stale odds");
  setMarket();
  r = await bet(usr, { stack: 100, odds: 2.4, isBack: true });
  assert.ok(ok(r), "#3 back at a worse price than market is accepted: " + JSON.stringify(r.json));
  const goodBetId = r.data.bet.id;
  assert.equal(rw.prepare("SELECT current_market_odds FROM bets WHERE id=?").get(goodBetId).current_market_odds, 2.5);

  // #4 available balance (balance 1000, 100 already at risk)
  assert.deepEqual(wallet("usr1"), { balance: 1000, exposer: 100 });
  r = await bet(usr, { stack: 901, odds: 2.5, isBack: true });
  assert.equal(r.status, 400, "#4 stake above available rejected");
  r = await bet(usr, { stack: 600, odds: 2.6, isBack: false });
  assert.equal(r.status, 400, "#4 lay liability 960 above available 900 rejected");
  r = await bet(usr, { stack: 500, odds: 2.6, isBack: false });
  assert.ok(ok(r), "#4 lay liability 800 within available accepted");
  assert.equal(wallet("usr1").exposer, 900, "#4 lay locks its liability (500 x 1.6 = 800)");
  const results = await Promise.all(Array.from({ length: 10 }, () => bet(usr, { stack: 30, odds: 2.5, isBack: true })));
  assert.equal(results.filter(ok).length, 3, "#4 concurrent bets cannot overspend (100 available / 30)");
  assert.equal(wallet("usr1").exposer, 990);

  // #5 players cannot cancel bets; admins void open bets and release exposure
  r = await call("DELETE", "/api/delete-current-bet/" + goodBetId, usr);
  assert.equal(r.status, 403, "#5 player cancel blocked");
  r = await call("DELETE", "/api/delete-current-bet/" + goodBetId, adm);
  assert.equal(r.status, 403, "#5 admin cannot void (could cancel a winning bet)");
  r = await call("DELETE", "/api/delete-current-bet/" + goodBetId, sa);
  assert.ok(ok(r), "#5 super admin can void open bet");
  assert.equal(wallet("usr1").exposer, 890, "#5 voiding releases exposure");
  r = await call("DELETE", "/api/delete-current-bet/" + goodBetId, sa);
  assert.equal(r.status, 404);

  // #6 payment settings
  for (const [m, u, b] of [
    ["GET", "/api/get-payment-list"], ["GET", "/api/payment-list"], ["GET", "/api/payment2-settings"],
    ["POST", "/api/save-payment-list", { settingList: [{ option1: { upiId: "x@upi" } }] }],
    ["POST", "/api/payment2-settings", { option: "option1", optionData: { upiId: "attacker@upi" } }],
  ]) {
    assert.ok(!ok(await call(m, u, null, b)), `#6 ${m} ${u} requires login`);
  }
  assert.equal((await call("POST", "/api/payment2-settings", adm, { option: "option1", optionData: { upiId: "attacker@upi" }, transactionPassword: "pass@123" })).status, 403, "#6 admin cannot change payment");
  assert.equal((await call("POST", "/api/payment2-settings", sa, { option: "option1", optionData: { upiId: "real@upi" }, transactionPassword: "wrong" })).status, 400, "#6 wrong txn password");
  r = await call("POST", "/api/payment2-settings", sa, { option: "option1", optionData: { upiId: "real@upi" }, transactionPassword: SA[1] });
  assert.ok(ok(r), "#6 super admin saves payment");
  r = await call("GET", "/api/payment2-settings", usr);
  assert.equal(r.data.paymentSettings.option1.upiId, "real@upi", "#6 players read payment details");
  assert.ok(!JSON.stringify(r.json).includes("transactionPassword"), "#6 no password leaked");

  // #7 registration codes
  assert.ok(!ok(await call("GET", "/api/get-registration-code", null)), "#7 read requires login");
  assert.ok(!ok(await call("POST", "/api/create-registration-code", null, { code: "HACK1" })), "#7 create requires login");
  assert.equal((await call("POST", "/api/create-registration-code", adm, { code: "HACK2" })).status, 403, "#7 admin cannot create");
  assert.ok(ok(await call("POST", "/api/create-registration-code", sa, { code: "OWNER1" })), "#7 super admin can create");
  assert.equal(rw.prepare("SELECT COUNT(*) c FROM registration_codes WHERE code LIKE 'HACK%'").get().c, 0);

  // #24 site-wide jobs and configuration
  const ownerEndpoints = [
    ["POST", "/api/save-setting-list", { settingList: [{ hacked: true }] }],
    ["POST", "/api/sync-snapshot-data"], ["GET", "/api/sync-snapshot-data"], ["POST", "/api/sync-sqlite-to-mysql"],
    ["GET", "/api/game-api-config-status"], ["POST", "/api/sync-game-api-catalog"], ["POST", "/api/import-provider-local-catalog"],
    ["GET", "/api/provider-api-status"],
  ];
  for (const [m, u, b] of ownerEndpoints) {
    assert.equal((await call(m, u, null, b)).status, 401, `#24 ${m} ${u} needs login`);
    assert.equal((await call(m, u, adm, b)).status, 403, `#24 ${m} ${u} is Super Admin only`);
  }
  assert.ok(ok(await call("GET", "/api/provider-api-status", sa)), "#24 super admin still allowed");
  assert.ok(!JSON.stringify(rw.prepare("SELECT value_json FROM settings WHERE key='setting.list'").get() || {}).includes("hacked"), "#24 settings unchanged");
  assert.ok(ok(await call("GET", "/api/get-setting-list", usr)), "#24 settings stay readable");
  assert.equal((await call("GET", "/api/match-betting-users", null)).status, 401);
  assert.equal((await call("GET", "/api/match-betting-users", usr)).status, 403);
  assert.ok(ok(await call("GET", "/api/match-betting-users", adm)));

  console.log(JSON.stringify({ ok: true, checks: "callback, identity, bet auth, pricing, balance, cancel, payments, registration, admin jobs" }));
})()
  .catch((e) => {
    console.error(e);
    console.error("---- server log tail ----\n" + serverLog.slice(-2500));
    process.exitCode = 1;
  })
  .finally(() => {
    try { rw?.close(); } catch {}
    server.kill();
    setTimeout(() => { try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {} }, 500);
  });
