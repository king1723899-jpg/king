"use strict";

// FA101 sports feed: home list, match page markets, live odds polling, server-side
// bet pricing (exchange + bookmaker rates), and auto-settlement from results
// (winner and void). FA101 is a local mock; its sockets are refused, so the
// server falls back to REST, which is what is exercised here.
const assert = require("assert/strict");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-fa101-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const MOCK_PORT = PORT + 1;
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["fatowner", "owner@123"];
const PW = "pass@123";
const TOKEN = "fa101_test_token";

// ---- mock FA101 -----------------------------------------------------------
const EV = "36000001";
const LOCKED = "36000002";
const ladder = (prices) => prices.map((price) => ({ price, size: 500 }));
const event = (id, { betLock = false } = {}) => ({
  status: "ok",
  event: { event_id: id, name: `Team A v Team B ${id}`, sport: "Cricket", league: "Test League", start: "2026-11-20T08:00:00Z", in_play: true },
  tv_url: `https://feed.test/tv/${id}`,
  scorecard_url: `https://feed.test/score/${id}`,
  markets: {
    match_odds: [
      {
        market_id: "1.100", name: "Match Odds", market_group: "match_odds", status: "OPEN", bet_lock: betLock,
        runners: [
          { runner_id: "501", name: "Team A", status: "ACTIVE", back: ladder([2.0, 1.98]), lay: ladder([2.04, 2.06]) },
          { runner_id: "502", name: "Team B", status: "ACTIVE", back: ladder([1.9]), lay: ladder([1.94]) },
        ],
      },
    ],
    bookmaker: [
      {
        market_id: "900", name: "Bookmaker", market_group: "bookmaker", status: "OPEN", bet_lock: false,
        runners: [
          { runner_id: "601", name: "Team A", status: "ACTIVE", back: [{ price: 64, size: 1000 }, { price: 0, size: 0 }], lay: [{ price: 68, size: 1000 }] },
          { runner_id: "602", name: "Team B", status: "ACTIVE", back: [{ price: 140, size: 1000 }], lay: [{ price: 150, size: 1000 }] },
        ],
      },
      { market_id: "901", name: "Special Maker", market_group: "bookmaker", status: "INACTIVE", runners: [] },
    ],
    fancy: [{ market_id: "1.200", name: "6 Over Runs", status: "OPEN", runners: [] }],
  },
});
const home = {
  status: "ok",
  sports: [
    {
      id: "4",
      name: "Cricket",
      leagues: [
        {
          name: "Test League",
          events: [
            { event_id: EV, name: `Team A v Team B ${EV}`, start: "2026-11-20T08:00:00Z", in_play: true, has_bookmaker: true, tv_url: "x", status: "OPEN", odds: [{ name: "Team A", back: 2, lay: 2.04 }, { name: "Team B", back: 1.9, lay: 1.94 }] },
            { event_id: LOCKED, name: `Team A v Team B ${LOCKED}`, start: "2026-11-20T09:00:00Z", in_play: false, status: "OPEN", odds: [] },
            { event_id: "76555526-e", name: "Lucky id is skipped", start: "2026-11-20T09:00:00Z", in_play: true, odds: [] },
          ],
        },
      ],
    },
    { id: "1", name: "Soccer", leagues: [] },
  ],
};
let results = [];
const requests = [];
const mock = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  requests.push(url.pathname);
  const send = (code, obj) => {
    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(JSON.stringify(obj));
  };
  if (req.headers["x-api-key"] !== TOKEN) return send(401, { status: "error", message: "missing token" });
  if (url.pathname === "/v1/home") return send(200, home);
  const m = url.pathname.match(/^\/v1\/event\/(.+)$/);
  if (m) return m[1] === EV || m[1] === LOCKED ? send(200, event(m[1], { betLock: m[1] === LOCKED })) : send(200, { status: "error", message: "not found" });
  if (url.pathname === "/v1/results") {
    const ids = String(url.searchParams.get("ids") || "").split(",");
    return send(200, { status: "ok", results: results.filter((r) => ids.includes(r.event.event_id)) });
  }
  return send(404, { status: "error", message: "unknown" });
});

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env, PORT: String(PORT), HOST: "127.0.0.1", NODE_ENV: "test", SQLITE_DB_PATH: dbPath, MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0], DEFAULT_LOGIN_PASSWORD: SA[1], ADMIN_INITIAL_BALANCE: "0", DEMO_USERS_COUNT: "0", ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000", AUTH_RATE_LIMIT_MAX: "100000", JWT_SECRET: "fat-a", JWT_REFRESH_SECRET: "fat-b",
    SOFTAPI_ENABLED: "false", SOFTAPI_DISABLE_AUTO_SYNC: "1",
    FA101_ENABLED: "true", FA101_TOKEN: TOKEN, FA101_BASE_URL: `http://127.0.0.1:${MOCK_PORT}`, FA101_AUTO_SETTLE: "true", FA101_MAX_ODDS_AGE_SECONDS: "60",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));
const call = async (method, url, token, body) => {
  const res = await fetch(BASE + url, {
    method,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: "Bearer " + token } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  let json = {};
  try {
    json = JSON.parse(text);
  } catch {}
  return { status: res.status, json, data: json.data, text };
};
const expectOk = (r, label) => assert.ok(r.status === 200 && !r.json.error, `${label}: ${r.status} ${JSON.stringify(r.json).slice(0, 300)}`);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await new Promise((r) => mock.listen(MOCK_PORT, "127.0.0.1", r));
  for (let i = 0; i < 120; i += 1) { try { await fetch(BASE + "/health"); break; } catch { await wait(250); } }
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
  const admId = await create(sa, SA[1], { userName: "fatadm", partnershipType: "admin" });
  expectOk(await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 20000, transactionPassword: SA[1] }), "fund admin");
  const adm = await token("fatadm", PW);
  await create(adm, PW, { userName: "fatu1", partnershipType: "client", creditAmount: 5000 });
  const u1 = await token("fatu1", PW, false);
  const wallet = async () => (await call("GET", "/api/get-user-balance", u1)).data;

  // 1) Home list comes from the feed; Lucky-style ids are left out.
  let list = [];
  for (let i = 0; i < 40 && !list.length; i += 1) {
    list = (await call("GET", "/api/home/4", u1)).json.data || [];
    if (!list.some((m) => String(m.gmid) === EV)) { list = []; await wait(250); }
  }
  assert.ok(list.some((m) => String(m.gmid) === EV), "feed event listed: " + JSON.stringify(list).slice(0, 300));
  assert.ok(!list.some((m) => String(m.gmid).includes("76555526")), "non-numeric id skipped");
  const row = list.find((m) => String(m.gmid) === EV);
  assert.equal(row.inplay, true);
  assert.deepEqual(row.externalData.section.map((s) => [s.sno, s.nat]), [[1, "Team A"], [3, "Team B"]], "home odds in sno slots");
  assert.equal((await call("GET", "/api/home/1", u1)).json.data.length, 0, "sport filter");

  // 2) Match page: match row, markets (inactive bookmaker and fancy left out), odds poll.
  let r = await call("GET", `/api/get-match-by-id?matchId=${EV}`, u1);
  expectOk(r, "match by id");
  assert.equal(String(r.data.match.matchId), EV);
  r = await call("GET", `/api/get-market-list?matchId=${EV}`, u1);
  expectOk(r, "market list");
  assert.deepEqual(r.data.markets.map((m) => [m.marketId, m.gtype, m.oddsType]), [["1.100", "match", "berFair"], ["900", "match1", "bookMaker"]]);
  r = await call("GET", `/api/sessions-data?MatchID=${EV}`, u1);
  assert.equal(r.status, 200);
  const bm = r.json.data.find((m) => m.marketId === "900");
  assert.deepEqual(bm.runners[0].back.map((o) => o.price1), ["64"], "zero bookmaker prices dropped, rate kept");
  // The match screen wants back prices worst..best (best shown next to LAY).
  assert.deepEqual(r.json.data[0].runners[0].back.map((o) => o.price), [1.98, 2]);
  assert.deepEqual(r.json.data[0].runners[0].lay.map((o) => o.price), [2.04, 2.06], "match odds lay best first");
  r = await call("GET", `/api/get-match-by-id?matchId=${EV}`, u1);
  assert.equal(r.data.match.inPlayMaxLimit, 100000, "header max falls back to the default when the feed has none");
  r = await call("GET", "/api/api/fancy-data?MatchID=" + EV, u1);
  assert.equal(r.status, 200, "doubled fancy-data path answers");
  r = await call("GET", `/api/sessions-data/market/1.100/${EV}`, u1);
  assert.deepEqual(r.json.data.map((m) => m.marketId), ["1.100"], "single-market refresh");
  r = await call("GET", "/signup");
  assert.ok(r.status === 200 && /Sign up/i.test(r.text) && !/wa\.link\/ambani/.test(r.text), "signup page");
  r = await call("GET", `/api/sessions-data?MatchID=${EV}`, u1);
  r = await call("GET", `/api/scorecard-data?gmid=${EV}&sid=4`, u1);
  assert.equal(r.json.data.scoreUrl, `http://127.0.0.1:${MOCK_PORT}/score/${EV}`);
  r = await call("GET", `/stream/test.html?gmid=${EV}&sid=4`);
  assert.ok(r.text.includes(`/tv/${EV}`) && !r.text.includes(TOKEN), "TV page frames the public TV url, no token");
  r = await call("GET", `/api/sessions-data?MatchID=${EV}`, u1);
  assert.ok(!r.text.includes(TOKEN), "token never sent to browsers");

  // 3) Bets are priced by the server.
  const bet = (b) => call("POST", "/api/placebet", u1, { matchId: Number(EV), stack: 100, isBack: true, ...b });
  r = await bet({ marketId: "1.100", selectionId: 501, odds: 2.2 });
  assert.equal(r.status, 409, "back above the market is refused: " + JSON.stringify(r.json));
  r = await bet({ marketId: "1.100", selectionId: 501, odds: 2.0, gtype: "match" });
  expectOk(r, "back bet at market");
  r = await bet({ marketId: "1.100", selectionId: 999, odds: 1.5 });
  assert.equal(r.status, 400, "unknown runner");
  r = await bet({ marketId: "901", selectionId: 601, odds: 50 });
  assert.equal(r.status, 400, "inactive market");
  r = await bet({ marketId: "900", selectionId: 601, odds: 68, isBack: false, gtype: "match1", oddsType: "BM" });
  expectOk(r, "bookmaker lay at rate 68");
  assert.equal(r.data.bet.odds, 1.68, "bookmaker rate stored as decimal odds");
  r = await bet({ marketId: "900", selectionId: 601, odds: 60, isBack: false, gtype: "match1" });
  assert.equal(r.status, 409, "lay below the bookmaker rate refused");
  r = await bet({ marketId: "1.200", selectionId: 1, odds: 100, gtype: "fancy" });
  assert.equal(r.status, 400, "fancy stays closed");
  await call("GET", `/api/get-match-by-id?matchId=${LOCKED}`, u1).catch(() => {});
  await call("GET", `/api/get-market-list?matchId=${LOCKED}`, u1);
  r = await call("POST", "/api/placebet", u1, { matchId: Number(LOCKED), marketId: "1.100", selectionId: 501, odds: 2.0, stack: 100, isBack: true });
  assert.equal(r.status, 400, "bet_lock market refused: " + JSON.stringify(r.json));
  let w = await wallet();
  assert.equal(Number(w.exposer ?? w.exposure), 168, "exposure: 100 back + 68 bookmaker lay liability: " + JSON.stringify(w));

  // 4) Auto-settlement: pending does nothing, then winner pays and void returns.
  results = [{ status: "ok", event: { event_id: EV }, settled: false, markets: [{ market_id: "1.100", result: "PENDING" }, { market_id: "900", result: "PENDING" }] }];
  assert.equal((await call("POST", "/api/admin/fa101/settle-now", adm)).status, 403, "only Super Admin");
  expectOk(await call("POST", "/api/admin/fa101/settle-now", sa), "settle run (pending)");
  w = await wallet();
  assert.equal(Number(w.exposer ?? w.exposure), 168, "pending leaves bets open");
  results = [{
    status: "ok", event: { event_id: EV }, settled: true,
    markets: [
      { market_id: "1.100", group: "match_odds", result: "SETTLED", winner: { runner_id: "501", name: "Team A" }, runners: [{ runner_id: "501", result: "WINNER" }, { runner_id: "502", result: "LOSER" }] },
      { market_id: "900", group: "bookmaker", result: "VOID" },
    ],
  }];
  r = await call("POST", "/api/admin/fa101/settle-now", sa);
  expectOk(r, "settle run");
  assert.equal(r.data.declared, 1);
  assert.equal(r.data.voided, 1);
  w = await wallet();
  assert.equal(Number(w.exposer ?? w.exposure), 0, "all exposure released");
  assert.equal(Number(w.balance), 5099, "back 100 @ 2.0 won 100 less 1% commission; void returned the lay");
  expectOk(await call("POST", "/api/admin/fa101/settle-now", sa), "second run is a no-op");
  assert.equal(Number((await wallet()).balance), 5099, "no double settlement");

  r = await call("GET", "/api/admin/fa101/status", sa);
  expectOk(r, "status");
  assert.equal(r.data.active, true);
  assert.ok(!JSON.stringify(r.json).includes(TOKEN), "status hides the token");

  console.log("fa101_test: all checks passed");
})()
  .catch((e) => {
    console.error(e);
    console.error("---- server log ----\n" + serverLog.slice(-4000));
    process.exitCode = 1;
  })
  .finally(() => {
    server.kill();
    mock.close();
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  });
