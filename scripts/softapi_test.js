"use strict";

// World Casino API (SoftAPI) integration: catalog sync, encrypted launch with the
// player's balance (1000 coins = 1 USD), one open game per player, and settle
// callbacks (auth key, plain + encrypted bodies, idempotency by serial_number).
// The provider is a local mock server; nothing is sent to the real API.
const assert = require("assert/strict");
const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const { createSoftApi } = require("../lib/softapi");

const ROOT = path.join(__dirname, "..");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "king777-softapi-"));
const dbPath = path.join(tmpDir, "site.db");
const PORT = 40000 + Math.floor(Math.random() * 20000);
const MOCK_PORT = PORT + 1;
const BASE = `http://127.0.0.1:${PORT}`;
const SA = ["swcowner", "owner@123"];
const PW = "pass@123";
const TOKEN = "test-token-0001";
const SECRET = "0123456789abcdef0123456789abcdef";
const PUBLIC = "https://casino.test";

// ---- mock provider --------------------------------------------------------
const launches = [];
const mockGames = Array.from({ length: 60 }, (_, i) => ({
  game_id: 700 + i,
  game_uid: String(700 + i),
  brand_id: 12,
  name: i === 0 ? "Aviator" : `Game ${i}`,
  provider: i % 2 ? "Pragmatic Play" : "Spribe",
  category: i % 3 ? "Slot" : "Crash",
  logo: i === 59 ? "https://softapi2.shop/images/index.png" : `https://img.test/${i}.png`,
  currency_supported: i !== 58,
}));
// Sportsbooks: per-game art is missing/broken; the brand logo should be used.
mockGames.push(
  { game_id: 11539, game_uid: "11539", brand_id: 141, name: "9Wicket", provider: "9wickets", category: "Sports", logo: "https://igamingapis.com/img/11539.png/images/index.png", currency_supported: true },
  { game_id: 7463, game_uid: "7463", brand_id: 126, name: "SBO Sportsbook", provider: "SBO", category: "Sports", logo: "", currency_supported: true }
);
const mockProviders = [
  { brand_id: 141, name: "9wickets", logo: "https://logo.test/9w.png", currency_supported: true },
  { brand_id: 126, name: "SBO", logo: "https://logo.test/sbo.png", currency_supported: true },
];
const decrypt = (b64) => {
  const d = crypto.createDecipheriv("aes-256-ecb", Buffer.from(SECRET), null);
  return JSON.parse(Buffer.concat([d.update(Buffer.from(b64, "base64")), d.final()]).toString("utf8"));
};
const mock = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const send = (obj) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(obj));
  };
  if (req.method === "GET") {
    if (url.searchParams.get("token") !== TOKEN) return send({ code: 401, msg: "Invalid token" });
    if (url.pathname.endsWith("/games")) return send({ code: 0, msg: "Success", data: { total: mockGames.length, games: mockGames } });
    if (url.pathname.endsWith("/providers")) return send({ code: 0, msg: "Success", data: { count: mockProviders.length, providers: mockProviders } });
    if (url.pathname.endsWith("/ggr-balance")) return send({ code: 0, msg: "Success", data: { wallet: 12 } });
    return send({ code: 404, msg: "not found" });
  }
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    const outer = JSON.parse(body);
    const plain = decrypt(outer.payload);
    launches.push({ outerToken: outer.token, ...plain });
    if (plain.balance === "-0") return send({ code: 0, msg: "Session closed", data: {} });
    if (plain.game_uid === "799") return send({ code: 1, msg: "Low GGR Balance", data: { url: "https://err" } });
    return send({ code: 0, msg: "Game launched successfully", data: { url: `https://play.test/${plain.game_uid}?u=${plain.user_id}` } });
  });
});

const server = spawn(process.execPath, ["server.js"], {
  cwd: ROOT,
  env: {
    ...process.env, PORT: String(PORT), HOST: "127.0.0.1", NODE_ENV: "test", SQLITE_DB_PATH: dbPath, MYSQL_SYNC_ENABLED: "false",
    DEFAULT_LOGIN_USERNAME: SA[0], DEFAULT_LOGIN_PASSWORD: SA[1], ADMIN_INITIAL_BALANCE: "0", DEMO_USERS_COUNT: "0", ENABLE_TEST_ACCOUNTS: "false",
    API_RATE_LIMIT_MAX: "100000", AUTH_RATE_LIMIT_MAX: "100000", JWT_SECRET: "swc-a", JWT_REFRESH_SECRET: "swc-b",
    SOFTAPI_ENABLED: "true", SOFTAPI_API_URL: `http://127.0.0.1:${MOCK_PORT}/api/v1`, SOFTAPI_TOKEN: TOKEN, SOFTAPI_SECRET: SECRET,
    SOFTAPI_PUBLIC_BASE_URL: PUBLIC, SOFTAPI_COINS_PER_UNIT: "1000", SOFTAPI_PLAY_CURRENCY: "USD", SOFTAPI_DISABLE_AUTO_SYNC: "1",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d));
server.stderr.on("data", (d) => (serverLog += d));
const call = async (method, url, token, body, raw = false) => {
  const res = await fetch(BASE + url, {
    method,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: "Bearer " + token } : {}) },
    body: body === undefined ? undefined : raw ? body : JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, data: json.data };
};
const expectOk = (r, label) => assert.ok(r.status === 200 && !r.json.error, `${label}: ${r.status} ${JSON.stringify(r.json).slice(0, 300)}`);

(async () => {
  await new Promise((r) => mock.listen(MOCK_PORT, "127.0.0.1", r));
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
  const admId = await create(sa, SA[1], { userName: "swcadm", partnershipType: "admin" });
  expectOk(await call("POST", "/api/user-account-balance", sa, { userId: admId, balanceUpdateType: "D", amount: 20000, transactionPassword: SA[1] }), "fund admin");
  const adm = await token("swcadm", PW);
  await create(adm, PW, { userName: "swcu1", partnershipType: "client", creditAmount: 5000 });
  const u1 = await token("swcu1", PW, false);
  const balance = async () => Number((await call("GET", "/api/get-user-balance", u1)).data?.balance);
  assert.equal(await balance(), 5000, "player starts with 5000 coins");

  // 1) Catalog sync replaces casino_games with the provider list.
  assert.equal((await call("POST", "/api/admin/softapi/sync-games", adm)).status, 403, "only Super Admin can sync");
  let r = await call("POST", "/api/admin/softapi/sync-games", sa);
  expectOk(r, "sync games");
  assert.equal(r.data.gameCount, 61, "unsupported-currency game skipped");
  r = await call("GET", "/api/get-casino-games?limit=all", u1);
  const ids = r.data.map((g) => String(g.identifier));
  assert.ok(ids.includes("700") && !ids.includes("758"), "games listed by SoftAPI game_uid");
  assert.ok(!ids.includes("759"), "placeholder-logo game hidden");
  r = await call("GET", "/api/admin/softapi/status", sa);
  expectOk(r, "status");
  assert.equal(r.data.active, true);
  assert.equal(r.data.ggrWallet, 12);

  // 2) Launch sends the encrypted payload with the balance in USD.
  r = await call("POST", "/api/get-cas-casino-play-url", u1, { gameCode: "700" });
  expectOk(r, "launch 700");
  assert.match(r.data.url, /^https:\/\/play\.test\/700\?u=1\d{5}$/);
  let l = launches.at(-1);
  assert.equal(l.outerToken, TOKEN);
  assert.equal(l.token, TOKEN);
  assert.equal(l.balance, "5.00", "5000 coins = 5.00 USD");
  assert.equal(l.currency_code, "USD");
  assert.ok(/^\d+$/.test(l.user_id), "integer player id");
  assert.ok(Math.abs(l.timestamp - Date.now()) < 60000, "fresh timestamp");
  const softapi = createSoftApi({ settingsPath: path.join(tmpDir, "none.json") });
  process.env.SOFTAPI_SECRET = SECRET;
  process.env.SOFTAPI_PUBLIC_BASE_URL = PUBLIC;
  process.env.SOFTAPI_TOKEN = TOKEN;
  const expectedCallback = softapi.callbackUrl();
  assert.equal(l.callback, expectedCallback, "callback URL carries the derived key");
  const member = l.user_id;
  const notifyPath = expectedCallback.slice(PUBLIC.length);

  // GetGameUrl.php alias goes through the same launch.
  r = await call("POST", "/GetGameUrl.php", u1, { gameCode: "700" });
  assert.equal(r.json.code, 0, "GetGameUrl.php launch");

  // 3) Opening another game closes the previous session first.
  const before = launches.length;
  expectOk(await call("POST", "/api/get-cas-casino-play-url", u1, { identifier: "701" }), "launch 701");
  assert.equal(launches.length, before + 2);
  assert.deepEqual([launches[before].game_uid, launches[before].balance], ["700", "-0"], "old game closed with -0");
  assert.equal(launches[before + 1].game_uid, "701");

  // Provider-side failures are not shown to players verbatim.
  r = await call("POST", "/api/get-cas-casino-play-url", u1, { gameCode: "799" });
  assert.ok(r.json.error, "low GGR launch fails");
  assert.ok(!/ggr/i.test(r.json.message), "GGR detail hidden from player");

  // Admin accounts cannot launch casino games.
  r = await call("POST", "/api/get-cas-casino-play-url", adm, { gameCode: "700" });
  assert.ok(r.json.error, "admin launch refused");

  // 4) Settle callbacks.
  const notify = (body, p = notifyPath) => call("POST", p, null, body);
  assert.equal((await notify({ serial_number: "s1", member_account: member, bet_amount: 1, win_amount: 0 }, "/api/softapi/notify/wrongkey")).status, 401, "bad key rejected");
  assert.equal(await balance(), 5000);

  r = await notify({ serial_number: "s1", member_account: member, game_uid: "701", game_round: "r1", bet_amount: 0.5, win_amount: 0.2, credit_amount: 4.7 });
  expectOk(r, "settle s1");
  assert.equal(r.json.code, 0);
  assert.equal(await balance(), 4700, "bet 0.5 USD, win 0.2 USD = -300 coins");
  r = await notify({ serial_number: "s1", member_account: member, game_uid: "701", bet_amount: 0.5, win_amount: 0.2 });
  expectOk(r, "duplicate s1");
  assert.match(r.json.msg, /duplicate/);
  assert.equal(await balance(), 4700, "duplicate notify changes nothing");

  const enc = { payload: softapi.encrypt({ serial_number: "s2", member_account: Number(member), game_uid: "701", bet_amount: 1, win_amount: 3.25 }, SECRET), timestamp: Date.now() };
  expectOk(await notify(enc), "encrypted settle s2");
  assert.equal(await balance(), 6950, "bet 1, win 3.25 = +2250 coins");

  assert.equal((await notify({ payload: "bm90IHZhbGlk" })).status, 400, "undecryptable payload rejected");
  assert.equal((await notify({ serial_number: "s3", member_account: "999999", bet_amount: 1 })).status, 404, "unknown player");
  assert.equal((await notify({ member_account: member, bet_amount: 1 })).status, 400, "serial_number required");
  // text/plain body is accepted too.
  r = await call("POST", notifyPath, null, JSON.stringify({ serial_number: "s4", member_account: member, bet_amount: 0.05, win_amount: 0 }), true);
  expectOk(r, "settle s4");
  assert.equal(await balance(), 6900);

  // Session events without bet/win are acknowledged and move nothing.
  r = await notify({ type: "session_start", member_account: member, session_id: 123 });
  expectOk(r, "session_start notify");
  assert.equal(await balance(), 6900);

  // 5) Rounds show in the casino bet history.
  r = await call("GET", "/api/casino-bet-history?limit=50", u1);
  expectOk(r, "bet history");
  const items = r.data.items || r.data.docs || r.data.list || r.data;
  const rows = (Array.isArray(items) ? items : []).filter((x) => x.providerName === "SoftAPI");
  assert.equal(rows.length, 5, "s1 bet+win, s2 bet+win, s4 bet: " + JSON.stringify(r.json).slice(0, 600));

  // 6) Sportsbook tab: nav entry right after Casino, list in fixed order with brand logos.
  r = await call("GET", "/api/get-sport-list", u1);
  const sportIds = r.data.map((x) => Number(x.sportId));
  assert.ok(sportIds.includes(556), "Sportsbook in sport list");
  if (sportIds.includes(555)) assert.equal(sportIds.indexOf(556), sportIds.indexOf(555) + 1, "Sportsbook right after Casino");
  r = await call("GET", "/api/get-casino-int-games?type=sportsbook&limit=all", u1);
  const books = r.json.result || r.data?.result || [];
  assert.deepEqual(books.map((g) => String(g.identifier)), ["11539", "7463"], "only sportsbooks, in fixed order");
  assert.equal(books[0].game_name, "9Wicket Exchange");
  assert.equal(books[0].image_url, "https://logo.test/9w.png", "brand logo replaces broken art");
  assert.equal(books[1].image_url, "https://logo.test/sbo.png");
  expectOk(await call("POST", "/api/get-cas-casino-play-url", u1, { gameCode: "11539" }), "launch 9Wicket");
  assert.equal(launches.at(-1).game_uid, "11539");

  console.log("softapi_test: all checks passed");
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
