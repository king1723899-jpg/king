"use strict";

// End-to-end: bets -> result declaration -> every report, rollback, voiding,
// casino rollback rules and snapshot blocking. Expected figures are hand-computed.
const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const Database = require("better-sqlite3");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-rep-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["repowner", "owner@123"];
const MATCH_ID = 88001;
const MID = "88001000";

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env, PORT: String(PORT), HOST: "127.0.0.1", NODE_ENV: "test", SQLITE_DB_PATH: dbPath, MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0], DEFAULT_LOGIN_PASSWORD: SA[1], ADMIN_INITIAL_BALANCE: "0", DEMO_USERS_COUNT: "0", ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000", AUTH_RATE_LIMIT_MAX: "100000", JWT_SECRET: "rep-a", JWT_REFRESH_SECRET: "rep-b",
    SPORTS_COMMISSION_PERCENT: "1", BET_ALLOW_UNFED_ODDS: "", CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP: "",
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
let rw;
const W = (u) => rw.prepare("SELECT w.balance,w.exposer FROM wallets w JOIN users u ON u.id=w.user_id WHERE u.username=?").get(u);
const bal = (u) => W(u).balance;
const total = () => Math.round(rw.prepare("SELECT SUM(balance) s FROM wallets").get().s * 100) / 100 + 0;
const r2 = (n) => Math.round(n * 100) / 100 + 0;
const feedMarket = () => {
  const section = [
    { sid: 501, gstatus: "ACTIVE", nat: "Lions", odds: [{ otype: "back", odds: 2.5 }, { otype: "lay", odds: 2.52 }] },
    { sid: 502, gstatus: "ACTIVE", nat: "Tigers", odds: [{ otype: "back", odds: 1.6 }, { otype: "lay", odds: 1.62 }] },
  ];
  const now = new Date().toISOString();
  rw.prepare(`INSERT OR REPLACE INTO matches (match_id,sport_id,name,status,section_json,external_json,created_at,updated_at,odds_updated_at) VALUES (?,4,'Lions v Tigers','OPEN',?,?,?,?,?)`)
    .run(MATCH_ID, JSON.stringify(section), JSON.stringify({ mid: MID, mname: "MATCH_ODDS", section }), now, now, now);
};

(async () => {
  for (let i = 0; i < 120; i += 1) { try { await fetch(BASE + "/health"); break; } catch { await new Promise((r) => setTimeout(r, 250)); } }
  rw = new Database(dbPath);
  rw.pragma("busy_timeout = 5000");
  const login = async (u, p, admin = true) => {
    const res = await call("POST", admin ? "/api/login-admin" : "/api/login", null, { username: u, password: p });
    assert.ok(res.data?.token, `login ${u}: ${res.status} ${JSON.stringify(res.json).slice(0, 200)}`);
    return res.data.token;
  };
  const sa = await login(...SA);
  const create = (tok, txn, b) => call("POST", "/api/admin/client-onboarding", tok, { fullName: b.userName, password: "pass@123", confirmPassword: "pass@123", transactionCode: txn, ...b });
  const admId = (await create(sa, SA[1], { userName: "adm", partnershipType: "admin" })).data.userId;
  await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 100000, transactionPassword: SA[1] });
  const adm = await login("adm", "pass@123");
  const mstRes = await create(adm, "pass@123", { userName: "mst", partnershipType: "master", creditAmount: 10000 });
  assert.ok(ok(mstRes), "create master: " + JSON.stringify(mstRes.json));
  const mstId = mstRes.data.userId;
  const p1Res = await create(adm, "pass@123", { userName: "ply1", partnershipType: "client", creditAmount: 1000, partnerships: [{ partnerId: mstId, sharePercentage: 40 }] });
  assert.ok(ok(p1Res), "create p1: " + JSON.stringify(p1Res.json));
  const p1Id = p1Res.data.userId;
  const mst = await login("mst", "pass@123");
  await create(mst, "pass@123", { userName: "ply2", partnershipType: "client", creditAmount: 1000 });
  const p1 = await login("ply1", "pass@123", false);
  const p2 = await login("ply2", "pass@123", false);
  const T0 = total();
  feedMarket();
  const bet = (tok, b) => call("POST", "/api/placebet", tok, { matchId: MATCH_ID, marketId: MID, ...b });
  assert.ok(ok(await bet(p1, { selectionId: 501, odds: 2.5, stack: 100, isBack: true })));
  assert.ok(ok(await bet(p1, { selectionId: 502, odds: 1.62, stack: 100, isBack: false })));
  assert.ok(ok(await bet(p2, { selectionId: 502, odds: 1.6, stack: 200, isBack: true })));
  assert.equal(r2(W("ply1").exposer), 162, "back 100 + lay liability 62");
  assert.equal((await bet(p1, { selectionId: 501, odds: 2.5, stack: 10, isBack: true, bet_on: "FANCY" })).status, 400, "fancy refused");
  const preDeclare = { adm: bal("adm"), mst: bal("mst"), p1: bal("ply1"), p2: bal("ply2"), e1: W("ply1").exposer, e2: W("ply2").exposer };

  // Market analysis / book before the result (players' net if each runner wins)
  let r = await call("GET", "/api/get-market-analysis", adm);
  assert.equal(r.data.length, 1);
  const book = r.data[0].matchWiseMarket;
  // 501 wins: p1 back +150, p1 lay(502) +100, p2 back(502) -200 => +50
  // 502 wins: p1 back -100, p1 lay -62, p2 back +120 => -42
  assert.equal(book[`${MID}_501`], 50);
  assert.equal(book[`${MID}_502`], -42);
  assert.equal(r.data[0].betCount, 3);
  assert.deepEqual((await call("GET", `/api/adminprofitlossList?matchId=${MATCH_ID}`, adm)).data, book);
  r = await call("GET", "/api/get-market-analysis", mst);
  assert.equal(r.data[0].betCount, 1, "master sees only its own downline");

  // Undeclared list: one row per market with runners
  assert.equal((await call("GET", "/api/undeclared-bets", adm)).status, 403, "only super admin declares");
  r = await call("GET", "/api/undeclared-bets", sa);
  assert.equal(r.data.length, 1);
  assert.deepEqual(r.data[0].runners.map((x) => x.selectionId).sort(), ["501", "502"]);
  assert.equal(r.data[0].matchName, "Lions v Tigers");

  // Declare: Lions (501) win
  assert.equal((await call("GET", `/api/result-market?marketId=${MID}&matchId=${MATCH_ID}&selectionId=501`, adm)).status, 403);
  r = await call("GET", `/api/result-market?marketId=${MID}&matchId=${MATCH_ID}&selectionId=501`, sa);
  assert.ok(ok(r), JSON.stringify(r.json));
  // p1 back win: +150 -1 = 149 (mst 40% 59.6, adm 89.4); p1 lay win: +100 -1 = 99 (mst 39.6, adm 59.4)
  // p2 back loss: -200 -2 = -202, all to its parent mst
  assert.equal(r2(bal("ply1") - preDeclare.p1), 248);
  assert.equal(r2(bal("ply2") - preDeclare.p2), -202);
  assert.equal(r2(bal("mst") - preDeclare.mst), 102.8);
  assert.equal(r2(bal("adm") - preDeclare.adm), -148.8);
  assert.equal(W("ply1").exposer, 0);
  assert.equal(W("ply2").exposer, 0);
  assert.equal(total(), T0, "settlement conserves coins");
  assert.equal((await call("GET", `/api/result-market?marketId=${MID}&matchId=${MATCH_ID}&selectionId=502`, sa)).status, 400, "cannot declare twice");
  assert.equal((await bet(p1, { selectionId: 501, odds: 2.5, stack: 10, isBack: true })).status, 400, "no bets after result");
  assert.equal((await call("GET", "/api/undeclared-bets", sa)).data.length, 0);

  // Reports after settlement
  const today = new Date().toISOString().slice(0, 10);
  r = await call("POST", "/api/account-statement-list?page=0", p1, { startDate: "2000-01-01", endDate: today, reportType: "ALL" });
  const items = r.data.items;
  assert.equal(r2(r.data.openingBalance + items.reduce((a, i) => a + i.amount, 0)), bal("ply1"), "statement closes at current balance");
  assert.equal(items.filter((i) => i.type === "game").length, 2, "one line per settled bet");
  assert.equal(items.find((i) => i.type === "chip").amount, 1000, "opening coins line");
  r = await call("POST", "/api/account-statement-list?page=0", p1, { startDate: today, endDate: today, reportType: "game" });
  assert.equal(r2(r.data.items.reduce((a, i) => a + i.amount, 0)), 248);
  assert.equal(r.data.openingBalance, 0, "account was created today, so balance before today is 0");
  assert.equal((await call("POST", "/api/account-statement-list", p2, { userId: p1Id })).status, 403, "player cannot read another statement");
  r = await call("POST", "/api/account-statement-list", adm, { userId: p1Id, startDate: "2000-01-01", endDate: today });
  assert.ok(ok(r), "admin reads downline statement");

  r = await call("POST", "/api/profit-loss?page=1", p1, { startDate: today, endDate: today });
  assert.equal(r.data.items.length, 1);
  assert.equal(r.data.items[0].total, 248);
  assert.equal(r.data.items[0].sportId, 4);
  r = await call("POST", "/api/profit-loss?page=1", adm, { startDate: today, endDate: today });
  assert.equal(r.data.total, -148.8, "admin P/L is its share");

  r = await call("GET", "/api/get-user-list", adm);
  const p1Row = r.data.items.find((u) => u.username === "ply1");
  assert.equal(p1Row.balance.profitLoss, 248, "client list P/L");
  assert.equal(p1Row.creditRefrences, 1000, "credit reference = opening coins set by the parent, not the live balance");
  assert.notEqual(p1Row.creditRefrences, p1Row.balance.balance);

  r = await call("GET", "/api/get-user-book", adm);
  const below = bal("mst") + bal("ply1") + bal("ply2");
  assert.equal(r.data.downlineob, r2(below));
  assert.equal(r.data.totalmasterb, r2(below + bal("adm")));
  assert.equal(r.data.downpl, r2(248 + 102.8 - 202));
  assert.equal(r.data.mypl, -148.8);
  assert.equal(r.data.available, bal("adm"));

  r = await call("GET", "/api/admin/dashboard?from=2000-01-01", adm);
  // p2's 1000 came from mst (already inside adm's downline), so it is not counted again.
  assert.equal(r.data.deposit, 11000, "coins entering downline: mst 10000 + p1 1000");
  assert.equal(r.data.withdrawal, 0);
  assert.equal(r.data.commission, 4, "1 + 1 + 2 commission");
  assert.equal(r.data.pnl, 46, "players' net: p1 +248, p2 -202");

  r = await call("GET", "/api/get-analysis-data", adm);
  const a1 = r.data.users.find((u) => u.username === "ply1");
  assert.equal(a1.totalProfit, 248);
  assert.equal(a1.totalDeposit, 1000);
  assert.equal(r.data.users.find((u) => u.username === "ply2").totalLoss, 202);
  r = await call("GET", `/api/get-user-details/${p1Id}?type=all`, adm);
  assert.equal(r.data.bets.length, 2);

  // Rollback restores everything exactly, then a different result works
  assert.equal((await call("GET", `/api/rollback-result-market-wise?marketId=${MID}&matchId=${MATCH_ID}`, adm)).status, 403);
  assert.ok(ok(await call("GET", `/api/rollback-result-market-wise?marketId=${MID}&matchId=${MATCH_ID}`, sa)));
  assert.deepEqual({ adm: bal("adm"), mst: bal("mst"), p1: bal("ply1"), p2: bal("ply2"), e1: W("ply1").exposer, e2: W("ply2").exposer }, preDeclare);
  r = await call("GET", "/api/get-user-list", adm);
  assert.equal(r.data.items.find((u) => u.username === "ply1").balance.profitLoss, 0, "P/L back to 0 after rollback");
  assert.ok(ok(await call("GET", `/api/result-market?marketId=${MID}&matchId=${MATCH_ID}&selectionId=502`, sa)));
  // 502 wins: p1 back -101, p1 lay -62 -1 = -63, p2 back +120 -2 = +118
  assert.equal(r2(bal("ply1") - preDeclare.p1), -164);
  assert.equal(r2(bal("ply2") - preDeclare.p2), 118);
  assert.equal(total(), T0);
  assert.ok(ok(await call("GET", `/api/rollback-result-market-wise?marketId=${MID}&matchId=${MATCH_ID}`, sa)));

  // Voiding open bets: super admin only, exposure released, coins untouched
  assert.equal((await call("DELETE", `/api/bets-by-market?marketId=${MID}&matchId=${MATCH_ID}`, adm)).status, 403);
  r = await call("DELETE", `/api/bets-by-market?marketId=${MID}&matchId=${MATCH_ID}`, sa);
  assert.equal(r.data.deleted, 3);
  assert.equal(W("ply1").exposer, 0);
  assert.equal(W("ply2").exposer, 0);
  assert.equal(bal("ply1"), preDeclare.p1);
  assert.equal(total(), T0);

  // Casino rollback rules (authenticated provider)
  const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, "data_store/provider_api_settings.json"), "utf8"));
  const cb = (b) => call("POST", "/api/call.php", null, { user_id: "ply1", game_code: "g1", agent: cfg.providerAgent, token: cfg.providerToken, ...b });
  const c0 = bal("ply1");
  await cb({ serial_number: "d1", action: "debit", amount: 50 });
  assert.equal(bal("ply1"), c0 - 50);
  await cb({ serial_number: "rb1", action: "rollback", referenceTxnId: "d1", amount: 80 });
  assert.equal(bal("ply1"), c0 - 50, "rollback larger than original refused");
  await cb({ serial_number: "rb2", action: "rollback", referenceTxnId: "d1" });
  const afterFirst = bal("ply1");
  await cb({ serial_number: "rb3", action: "rollback", referenceTxnId: "d1" });
  assert.equal(bal("ply1"), afterFirst, "second rollback of the same debit refused");
  assert.equal(afterFirst, c0, "first rollback refunded exactly the debit");
  // Casino cannot spend coins locked in sports bets
  feedMarket();
  rw.prepare("DELETE FROM market_results").run();
  assert.ok(ok(await bet(p1, { selectionId: 501, odds: 2.5, stack: bal("ply1"), isBack: true })), "lock whole balance");
  await cb({ serial_number: "d2", action: "debit", amount: 1 });
  assert.equal(bal("ply1"), c0, "casino debit blocked by sports exposure");
  r = await call("GET", "/api/profit-loss", p1);
  assert.ok(ok(r));

  // Snapshot fallback never serves fake money/report data
  for (const u of ["/api/admin/report/currentbets", "/api/admin/userlist", "/api/admin/m_p/game/userbook", "/api/admin/h_p/bal"]) {
    const x = await call("GET", u, sa);
    assert.ok(!ok(x) || !JSON.stringify(x.json).includes("6870a6e4"), `${u} must not serve snapshot data`);
  }
  assert.equal((await call("GET", "/api/admin/report/currentbets", sa)).status, 404);

  console.log(JSON.stringify({ ok: true, checks: "book, declare, settle maths, statement, P/L, client list, user book, dashboard, analysis, rollback, void, casino, snapshots" }));
})()
  .catch((e) => { console.error(e); console.error("---- server log tail ----\n" + serverLog.slice(-2500)); process.exitCode = 1; })
  .finally(() => { try { rw?.close(); } catch {} server.kill(); setTimeout(() => { try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {} }, 500); });
