"use strict";
/**
 * World Casino API (iGamingAPI "SoftAPI") client.
 *
 * Docs: provider dashboard -> API Docs. Summary of the contract:
 *  - Launch: POST {apiUrl} with {token, payload}, payload = Base64(AES-256-ECB(JSON, secret), PKCS7).
 *    The plaintext carries user_id (integer), balance (player's start balance in play currency),
 *    game_uid, token, timestamp (ms, +-60s), return, callback, currency_code, language.
 *    balance "-0" closes the player's session for that game.
 *  - Lists: GET {apiUrl}/providers|games|ggr-balance?token=... (no encryption).
 *  - Callback: after every round SoftAPI POSTs {serial_number, member_account, bet_amount,
 *    win_amount, credit_amount, game_uid, game_round, ...} to our callback URL, optionally wrapped
 *    as {payload: Base64(AES(JSON))} when encryption is enabled on the account.
 *
 * Settings come from env vars first, then data_store/softapi_settings.json (gitignored, never commit it).
 */
const fs = require("fs");
const crypto = require("crypto");

const DEFAULTS = Object.freeze({
  enabled: true,
  apiUrl: "https://world-casino-api.com/api/v1",
  token: "",
  secret: "",
  playCurrency: "USD",
  // 1000 site coins = 1 unit of play currency (USD).
  coinsPerUnit: 1000,
  language: "en",
  // Public https origin of this site. Used to build the callback URL, never taken from the request.
  publicBaseUrl: "",
  // Where the provider sends players when they leave a game. Defaults to {publicBaseUrl}/casino.
  returnUrl: "",
  requestTimeoutMs: 30000,
  // Re-download the game list when the stored copy is older than this.
  catalogMaxAgeHours: 24,
});

const ENV_KEYS = {
  enabled: "SOFTAPI_ENABLED",
  apiUrl: "SOFTAPI_API_URL",
  token: "SOFTAPI_TOKEN",
  secret: "SOFTAPI_SECRET",
  playCurrency: "SOFTAPI_PLAY_CURRENCY",
  coinsPerUnit: "SOFTAPI_COINS_PER_UNIT",
  language: "SOFTAPI_LANGUAGE",
  publicBaseUrl: "SOFTAPI_PUBLIC_BASE_URL",
  returnUrl: "SOFTAPI_RETURN_URL",
};

const trimSlash = (v) => String(v || "").trim().replace(/\/+$/, "");
const boolish = (v) => ["1", "true", "yes", "on"].includes(String(v).trim().toLowerCase());

const createSoftApi = ({ settingsPath }) => {
  let cache = { at: 0, value: null };

  const readConfig = () => {
    const now = Date.now();
    if (cache.value && now - cache.at < 3000) return cache.value;
    let fileCfg = {};
    try {
      if (settingsPath && fs.existsSync(settingsPath)) {
        const parsed = JSON.parse(fs.readFileSync(settingsPath, "utf8"));
        if (parsed && typeof parsed === "object") fileCfg = parsed;
      }
    } catch (e) {
      console.error("[softapi] cannot read settings file:", e?.message || e);
    }
    const cfg = { ...DEFAULTS, ...fileCfg };
    for (const [key, envName] of Object.entries(ENV_KEYS)) {
      const raw = process.env[envName];
      if (raw === undefined || raw === "") continue;
      cfg[key] = key === "enabled" ? boolish(raw) : raw;
    }
    cfg.enabled = cfg.enabled === true || boolish(cfg.enabled);
    cfg.apiUrl = trimSlash(cfg.apiUrl) || DEFAULTS.apiUrl;
    cfg.token = String(cfg.token || "").trim();
    cfg.secret = String(cfg.secret || "").trim();
    cfg.playCurrency = String(cfg.playCurrency || "USD").trim().toUpperCase();
    cfg.coinsPerUnit = Number(cfg.coinsPerUnit) > 0 ? Number(cfg.coinsPerUnit) : DEFAULTS.coinsPerUnit;
    cfg.language = String(cfg.language || "en").trim();
    cfg.publicBaseUrl = trimSlash(cfg.publicBaseUrl);
    cfg.returnUrl = String(cfg.returnUrl || "").trim() || (cfg.publicBaseUrl ? `${cfg.publicBaseUrl}/casino` : "");
    cfg.requestTimeoutMs = Math.max(5000, Number(cfg.requestTimeoutMs) || DEFAULTS.requestTimeoutMs);
    cfg.catalogMaxAgeHours = Math.max(1, Number(cfg.catalogMaxAgeHours) || DEFAULTS.catalogMaxAgeHours);
    cache = { at: now, value: cfg };
    return cfg;
  };

  const isActive = (cfg = readConfig()) =>
    !!cfg.enabled && !!cfg.token && cfg.secret.length === 32 && /^https:\/\//i.test(cfg.publicBaseUrl);

  const configProblems = (cfg = readConfig()) => {
    const out = [];
    if (!cfg.enabled) out.push("disabled");
    if (!cfg.token) out.push("token missing");
    if (cfg.secret.length !== 32) out.push("secret must be exactly 32 characters");
    if (!/^https:\/\//i.test(cfg.publicBaseUrl)) out.push("publicBaseUrl must be the site's https origin");
    return out;
  };

  // ---- crypto -------------------------------------------------------------
  const encrypt = (obj, secret) => {
    const json = Buffer.from(typeof obj === "string" ? obj : JSON.stringify(obj), "utf8");
    const cipher = crypto.createCipheriv("aes-256-ecb", Buffer.from(secret, "utf8"), null);
    // Node's default padding is PKCS7, identical to the manual padding in the provider's examples.
    return Buffer.concat([cipher.update(json), cipher.final()]).toString("base64");
  };
  const decrypt = (b64, secret) => {
    const decipher = crypto.createDecipheriv("aes-256-ecb", Buffer.from(secret, "utf8"), null);
    return Buffer.concat([decipher.update(Buffer.from(String(b64 || ""), "base64")), decipher.final()]).toString("utf8");
  };

  // The callback URL carries a key derived from the secret. SoftAPI receives it inside the
  // encrypted launch payload, so players never see it; a notify without it is rejected.
  const callbackKey = (cfg = readConfig()) =>
    crypto.createHmac("sha256", cfg.secret).update("king777-softapi-callback-v1").digest("hex").slice(0, 40);
  const callbackPath = "/api/softapi/notify";
  const callbackUrl = (cfg = readConfig()) => `${cfg.publicBaseUrl}${callbackPath}/${callbackKey(cfg)}`;
  const isValidCallbackKey = (key, cfg = readConfig()) => {
    const want = Buffer.from(callbackKey(cfg));
    const got = Buffer.from(String(key || ""));
    return got.length === want.length && crypto.timingSafeEqual(got, want);
  };

  // ---- money --------------------------------------------------------------
  const round2 = (n) => Math.round((Number(n) || 0) * 100) / 100;
  const coinsToUnits = (coins, cfg = readConfig()) => Math.floor(((Number(coins) || 0) / cfg.coinsPerUnit) * 100) / 100;
  const unitsToCoins = (units, cfg = readConfig()) => round2((Number(units) || 0) * cfg.coinsPerUnit);

  // ---- HTTP ---------------------------------------------------------------
  const httpJson = async (url, init, cfg) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), cfg.requestTimeoutMs);
    try {
      const resp = await fetch(url, { ...init, signal: ctrl.signal });
      const text = await resp.text();
      let json = null;
      try {
        json = JSON.parse(text);
      } catch {}
      return { status: resp.status, json, text };
    } finally {
      clearTimeout(timer);
    }
  };
  const getList = async (path, params = {}) => {
    const cfg = readConfig();
    const qs = new URLSearchParams({ token: cfg.token, ...params });
    const out = await httpJson(`${cfg.apiUrl}/${path}?${qs}`, { method: "GET", headers: { Accept: "application/json" } }, cfg);
    if (!out.json || Number(out.json.code) !== 0) {
      const msg = out.json?.msg || `HTTP ${out.status}`;
      throw new Error(`SoftAPI ${path} failed: ${msg}`);
    }
    return out.json.data || {};
  };

  const fetchGames = async () => {
    const data = await getList("games", { currency_supported: "1" });
    return Array.isArray(data.games) ? data.games : [];
  };
  const fetchProviders = async () => {
    const data = await getList("providers", { currency_supported: "1" });
    return Array.isArray(data.providers) ? data.providers : [];
  };
  const fetchGgrBalance = async () => {
    const data = await getList("ggr-balance");
    return Number(data.wallet);
  };

  /**
   * Launch a game. balanceUnits is the player's spendable balance in play currency,
   * or the string "-0" to close the session for that game.
   */
  const launch = async ({ extUserId, balanceUnits, gameUid }) => {
    const cfg = readConfig();
    const plain = {
      user_id: String(extUserId),
      balance: balanceUnits === "-0" ? "-0" : round2(balanceUnits).toFixed(2),
      game_uid: String(gameUid),
      token: cfg.token,
      timestamp: Date.now(),
      return: cfg.returnUrl,
      callback: callbackUrl(cfg),
      currency_code: cfg.playCurrency,
      language: cfg.language,
    };
    const body = JSON.stringify({ token: cfg.token, payload: encrypt(plain, cfg.secret) });
    let out;
    try {
      out = await httpJson(
        cfg.apiUrl,
        { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body },
        cfg
      );
    } catch (e) {
      return { ok: false, code: -1, msg: e?.name === "AbortError" ? "Provider timeout" : String(e?.message || e) };
    }
    const json = out.json || {};
    const code = Number(json.code);
    const url = String(json?.data?.url || "").trim();
    if (code === 0 && /^https?:\/\//i.test(url)) return { ok: true, url, msg: String(json.msg || "") };
    if (code === 0 && balanceUnits === "-0") return { ok: true, url: "", msg: String(json.msg || "Session closed") };
    return { ok: false, code: Number.isFinite(code) ? code : out.status, msg: String(json.msg || out.text || `HTTP ${out.status}`).slice(0, 300) };
  };

  /** Turn a raw callback body (plain or {payload}) into a notify object, or null. */
  const parseNotify = (body) => {
    const cfg = readConfig();
    let raw = body;
    if (typeof raw === "string") {
      try {
        raw = JSON.parse(raw);
      } catch {
        return { notify: null, encrypted: false, error: "Body is not JSON" };
      }
    }
    if (!raw || typeof raw !== "object") return { notify: null, encrypted: false, error: "Empty body" };
    if (typeof raw.payload === "string" && raw.payload) {
      try {
        const n = JSON.parse(decrypt(raw.payload, cfg.secret));
        return { notify: n && typeof n === "object" ? n : null, encrypted: true, error: "" };
      } catch {
        return { notify: null, encrypted: true, error: "Payload decrypt failed" };
      }
    }
    return { notify: raw, encrypted: false, error: "" };
  };

  return {
    readConfig,
    isActive,
    configProblems,
    encrypt,
    decrypt,
    callbackPath,
    callbackUrl,
    isValidCallbackKey,
    coinsToUnits,
    unitsToCoins,
    round2,
    fetchGames,
    fetchProviders,
    fetchGgrBalance,
    launch,
    parseNotify,
  };
};

module.exports = { createSoftApi };
