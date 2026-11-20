"use strict";

// FA101 read-only sports feed (Betfair base): matches, odds, TV, scorecard, results.
// Login, wallet and bet placement stay on this site; nothing is ever sent to FA101
// except the token. The token stays on the server: browsers only see the public
// TV and score pages.
//
// Data flow: one WebSocket for the home list (all sports), plus one WebSocket per
// event someone is looking at. REST is only used to fill a cache that a socket
// has not filled yet, and for results, so the trial quota lasts.

const fs = require("fs");

const DEFAULTS = {
  enabled: true,
  token: "",
  baseUrl: "https://api.fa101.site",
  autoSettle: true,
  // Bets need an event update from the feed no older than this.
  maxOddsAgeSeconds: 15,
  // Close an event socket when nobody has looked at the event for this long.
  eventIdleSeconds: 60,
  maxEventSockets: 40,
};

const createFa101 = ({ settingsPath, log = console } = {}) => {
  const readConfig = () => {
    let file = {};
    try {
      if (settingsPath && fs.existsSync(settingsPath)) file = JSON.parse(fs.readFileSync(settingsPath, "utf8")) || {};
    } catch (e) {
      log.warn?.(`[fa101] settings file unreadable: ${e.message}`);
    }
    const env = process.env;
    const pick = (envKey, fileKey) => (env[envKey] !== undefined && env[envKey] !== "" ? env[envKey] : file[fileKey]);
    const bool = (v, d) => (v === undefined || v === null || v === "" ? d : v === true || /^(1|true|yes|on)$/i.test(String(v)));
    const num = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : d);
    return {
      enabled: bool(pick("FA101_ENABLED", "enabled"), DEFAULTS.enabled),
      token: String(pick("FA101_TOKEN", "token") || "").trim(),
      baseUrl: String(pick("FA101_BASE_URL", "baseUrl") || DEFAULTS.baseUrl).trim().replace(/\/+$/, ""),
      autoSettle: bool(pick("FA101_AUTO_SETTLE", "autoSettle"), DEFAULTS.autoSettle),
      maxOddsAgeSeconds: num(pick("FA101_MAX_ODDS_AGE_SECONDS", "maxOddsAgeSeconds"), DEFAULTS.maxOddsAgeSeconds),
      eventIdleSeconds: num(file.eventIdleSeconds, DEFAULTS.eventIdleSeconds),
      maxEventSockets: num(file.maxEventSockets, DEFAULTS.maxEventSockets),
    };
  };
  const isActive = () => {
    const c = readConfig();
    // https only; plain http is allowed for a local mock in tests.
    return !!(c.enabled && c.token && (/^https:\/\//i.test(c.baseUrl) || /^http:\/\/127\.0\.0\.1[:/]/i.test(c.baseUrl)));
  };
  const wsBase = () => readConfig().baseUrl.replace(/^http/i, "ws");

  // ---- REST ---------------------------------------------------------------
  let restCalls = 0;
  const get = async (pathAndQuery, { timeoutMs = 15000 } = {}) => {
    const cfg = readConfig();
    if (!cfg.token) throw new Error("FA101 token missing");
    restCalls += 1;
    const resp = await fetch(`${cfg.baseUrl}${pathAndQuery}`, {
      headers: { "X-API-KEY": cfg.token, Accept: "application/json" },
      signal: AbortSignal.timeout(timeoutMs),
    });
    const text = await resp.text();
    if (text.trim().startsWith("<")) throw new Error(`FA101 ${resp.status}: not a JSON response`);
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      throw new Error(`FA101 ${resp.status}: invalid JSON`);
    }
    if (!resp.ok || body?.status === "error") {
      const err = new Error(`FA101 ${resp.status}: ${body?.message || "error"}`);
      err.status = resp.status;
      throw err;
    }
    return body;
  };

  // ---- Caches -------------------------------------------------------------
  const home = { at: 0, sports: [] };
  const events = new Map(); // id -> { at, data, wantedAt, ws, retry }
  const listeners = { home: new Set(), event: new Set() };
  const emit = (kind, ...args) => {
    for (const fn of listeners[kind]) {
      try {
        fn(...args);
      } catch (e) {
        log.error?.(`[fa101] ${kind} listener failed: ${e?.message || e}`);
      }
    }
  };

  // Socket pushes may leave out market groups (fancy, other); keep the last copy.
  const mergeEvent = (prev, next) => {
    if (!prev) return next;
    const markets = { ...(prev.markets || {}) };
    for (const [group, list] of Object.entries(next.markets || {})) markets[group] = list;
    return { ...prev, ...next, markets, scorecard_url: next.scorecard_url || prev.scorecard_url, tv_url: next.tv_url || prev.tv_url };
  };
  const applyHome = (body) => {
    if (!Array.isArray(body?.sports)) return;
    home.at = Date.now();
    home.sports = body.sports;
    emit("home", home.sports);
  };
  const applyEvent = (id, body) => {
    if (!body?.event || !body.markets) return;
    const key = String(body.event.event_id || id);
    const slot = events.get(key) || { wantedAt: 0 };
    slot.data = mergeEvent(slot.data, body);
    slot.at = Date.now();
    events.set(key, slot);
    emit("event", key, slot.data);
  };

  // ---- Sockets ------------------------------------------------------------
  const openSocket = (query, onData, onState) => {
    const cfg = readConfig();
    const ws = new WebSocket(`${wsBase()}/ws?token=${encodeURIComponent(cfg.token)}${query}`);
    ws.onmessage = (e) => {
      let body;
      try {
        body = JSON.parse(String(e.data));
      } catch {
        return;
      }
      if (body?.status === "ok" && (body.sports || body.event)) onData(body);
    };
    ws.onclose = () => onState("closed");
    ws.onerror = () => {};
    return ws;
  };

  let homeWs = null;
  let homeRetryMs = 2000;
  let homeTimer = null;
  let stopped = true;
  const connectHome = () => {
    if (stopped || !isActive()) return;
    homeWs = openSocket(
      "",
      (body) => {
        homeRetryMs = 2000;
        applyHome(body);
      },
      () => {
        homeWs = null;
        if (stopped) return;
        homeTimer = setTimeout(connectHome, homeRetryMs);
        homeTimer.unref?.();
        homeRetryMs = Math.min(homeRetryMs * 2, 60000);
      }
    );
  };

  const connectEvent = (key) => {
    const slot = events.get(key);
    if (!slot || slot.ws || stopped) return;
    slot.ws = openSocket(
      `&event=${encodeURIComponent(key)}`,
      (body) => applyEvent(key, body),
      () => {
        const s = events.get(key);
        if (!s) return;
        s.ws = null;
        // Reconnect only while someone is still watching.
        if (!stopped && Date.now() - s.wantedAt < readConfig().eventIdleSeconds * 1000) {
          s.retry = setTimeout(() => connectEvent(key), 3000);
          s.retry.unref?.();
        }
      }
    );
  };

  // Mark an event as watched: keeps (or opens) its socket.
  const watchEvent = (id) => {
    const key = String(id || "").trim();
    if (!key || !isActive()) return;
    const slot = events.get(key) || { at: 0, data: null };
    slot.wantedAt = Date.now();
    events.set(key, slot);
    if (!slot.ws) {
      const open = [...events.values()].filter((s) => s.ws).length;
      if (open < readConfig().maxEventSockets) connectEvent(key);
    }
  };

  // Event data, from cache when fresh enough, otherwise one REST call.
  const pending = new Map();
  const loadEvent = async (id, { maxAgeMs = 20000 } = {}) => {
    const key = String(id || "").trim();
    watchEvent(key);
    const slot = events.get(key);
    if (slot?.data && Date.now() - slot.at <= maxAgeMs) return slot.data;
    if (!pending.has(key)) {
      pending.set(
        key,
        get(`/v1/event/${encodeURIComponent(key)}`)
          .then((body) => {
            applyEvent(key, body);
            return events.get(key)?.data || null;
          })
          .finally(() => pending.delete(key))
      );
    }
    try {
      return await pending.get(key);
    } catch (e) {
      if (slot?.data) return slot.data;
      throw e;
    }
  };
  const cachedEvent = (id) => events.get(String(id))?.data || null;
  const eventAgeMs = (id) => {
    const slot = events.get(String(id));
    return slot?.at ? Date.now() - slot.at : Infinity;
  };

  let sweepTimer = null;
  let homePollTimer = null;
  const sweep = () => {
    const idleMs = readConfig().eventIdleSeconds * 1000;
    for (const [key, slot] of events) {
      if (Date.now() - slot.wantedAt <= idleMs) continue;
      if (slot.ws) {
        try {
          slot.ws.close();
        } catch {}
        slot.ws = null;
      }
      clearTimeout(slot.retry);
      // Drop cached data after 10 idle minutes.
      if (Date.now() - slot.wantedAt > 10 * 60 * 1000) events.delete(key);
    }
  };
  // REST fallback for the home list when the socket has been quiet for a while.
  const homePoll = async () => {
    if (stopped || !isActive() || Date.now() - home.at < 45000) return;
    try {
      applyHome(await get("/v1/home"));
    } catch (e) {
      log.warn?.(`[fa101] home refresh failed: ${e.message}`);
    }
  };

  const start = () => {
    if (!stopped || !isActive()) return false;
    stopped = false;
    connectHome();
    homePoll();
    sweepTimer = setInterval(sweep, 15000);
    sweepTimer.unref?.();
    homePollTimer = setInterval(homePoll, 30000);
    homePollTimer.unref?.();
    return true;
  };
  const stop = () => {
    stopped = true;
    clearTimeout(homeTimer);
    clearInterval(sweepTimer);
    clearInterval(homePollTimer);
    try {
      homeWs?.close();
    } catch {}
    for (const slot of events.values()) {
      clearTimeout(slot.retry);
      try {
        slot.ws?.close();
      } catch {}
      slot.ws = null;
    }
  };

  const fetchResults = async (ids) => {
    const list = [...new Set((ids || []).map((x) => String(x).trim()).filter(Boolean))];
    if (!list.length) return {};
    const body = await get(`/v1/results?ids=${list.map(encodeURIComponent).join(",")}`);
    // Bulk shape: { results: [ { event: { event_id }, settled, markets: [...] } ] }.
    const out = {};
    const r = body?.results ?? null;
    if (Array.isArray(r)) {
      for (const item of r) {
        const key = String(item?.event?.event_id ?? item?.event_id ?? "");
        if (key && Array.isArray(item?.markets)) out[key] = item;
      }
    } else if (list.length === 1 && Array.isArray(body?.markets)) out[list[0]] = body;
    return out;
  };

  return {
    readConfig,
    isActive,
    start,
    stop,
    get,
    watchEvent,
    loadEvent,
    cachedEvent,
    eventAgeMs,
    fetchResults,
    homeSports: () => home.sports,
    homeAgeMs: () => (home.at ? Date.now() - home.at : Infinity),
    onHome: (fn) => listeners.home.add(fn),
    onEvent: (fn) => listeners.event.add(fn),
    status: () => ({
      active: isActive(),
      homeAgeSeconds: home.at ? Math.round((Date.now() - home.at) / 1000) : null,
      homeSocket: !!homeWs && homeWs.readyState === 1,
      events: [...events.entries()].map(([id, s]) => ({ id, socket: !!s.ws && s.ws.readyState === 1, ageSeconds: s.at ? Math.round((Date.now() - s.at) / 1000) : null })),
      restCalls,
    }),
    _applyHome: applyHome,
    _applyEvent: applyEvent,
  };
};

module.exports = { createFa101 };
