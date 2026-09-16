#!/usr/bin/env node

/*
  Admin QA checklist runner
  Usage:
    node scripts/admin_qa_check.js

  Optional env:
    QA_BASE_URL=http://localhost:3000
    QA_ADMIN_USER=kingadmin
    QA_ADMIN_PASS=kingadmin
    QA_TIMEOUT_MS=12000
    QA_INSECURE_TLS=1
*/

const BASE_URL = String(process.env.QA_BASE_URL || "http://localhost:3000")
  .trim()
  .replace(/\/+$/, "");
const ADMIN_USER = String(process.env.QA_ADMIN_USER || "kingadmin").trim();
const ADMIN_PASS = String(process.env.QA_ADMIN_PASS || "kingadmin").trim();
const TIMEOUT_MS = Number(process.env.QA_TIMEOUT_MS || 12000);
const INSECURE_TLS = String(process.env.QA_INSECURE_TLS || "").trim() === "1";

if (INSECURE_TLS) process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const joinUrl = (path) => `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const headers = { ...(options.headers || {}) };
    let body = options.body;
    if (body && typeof body === "object" && !(body instanceof Buffer)) {
      headers["content-type"] = headers["content-type"] || "application/json";
      body = JSON.stringify(body);
    }
    const res = await fetch(joinUrl(path), {
      method: options.method || "GET",
      headers,
      body,
      redirect: options.redirect || "manual",
      signal: controller.signal,
    });
    const text = await res.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {}
    return { ok: res.ok, status: res.status, headers: res.headers, text, json };
  } catch (error) {
    return { ok: false, status: 0, error: error?.message || String(error), text: "", json: null };
  } finally {
    clearTimeout(timeout);
  }
}

function pass(result, reason = "") {
  return { pass: true, reason, result };
}

function fail(result, reason = "") {
  return { pass: false, reason, result };
}

async function run() {
  const checks = [];
  const add = (name, data) => checks.push({ name, ...data });

  const pagePaths = [
    "/",
    "/admin/login",
    "/admin",
    "/admin/list-clients",
    "/admin/add-user",
    "/list-clients",
    "/add-user",
  ];
  for (const path of pagePaths) {
    const r = await request(path, { method: "GET" });
    const allowed = new Set([200, 301, 302]);
    if (allowed.has(r.status)) {
      add(`PAGE ${path}`, pass(r, `status ${r.status}`));
    } else {
      add(`PAGE ${path}`, fail(r, `unexpected status ${r.status}`));
    }
    await sleep(20);
  }

  const loginRes = await request("/api/login-admin", {
    method: "POST",
    body: { username: ADMIN_USER, password: ADMIN_PASS, admin: true },
    redirect: "follow",
  });

  let token = "";
  if (loginRes.status === 200 && loginRes.json?.data?.token) {
    token = String(loginRes.json.data.token);
    add("API /api/login-admin", pass(loginRes, "admin login ok"));
  } else {
    add(
      "API /api/login-admin",
      fail(
        loginRes,
        `login failed (status ${loginRes.status}) - message: ${
          loginRes.json?.message || loginRes.error || "unknown"
        }`
      )
    );
  }

  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
  const checkApi = async (name, path, method = "GET", body = null, validator = null) => {
    const r = await request(path, { method, headers: authHeaders, body, redirect: "follow" });
    if (validator) {
      const v = validator(r);
      add(name, v);
      return r;
    }
    if (r.status >= 200 && r.status < 400) {
      add(name, pass(r, `status ${r.status}`));
    } else {
      add(name, fail(r, `status ${r.status}`));
    }
    return r;
  };

  await checkApi("API /api/health", "/health");
  await checkApi(
    "API /api/user-info",
    "/api/user-info",
    "GET",
    null,
    (r) => {
      const user = r.json?.data?.user;
      if (r.status === 200 && user?.username && user?.role) return pass(r, "profile user payload present");
      return fail(r, `expected authenticated profile user, got status ${r.status}`);
    }
  );
  const userListRes = await checkApi(
    "API /api/get-user-list",
    "/api/get-user-list?page=1&limit=20",
    "GET",
    null,
    (r) => {
      const hasItems = Array.isArray(r.json?.data?.items);
      if (r.status === 200 && hasItems) return pass(r, "items array present");
      return fail(r, `expected paginated data.items, got status ${r.status}`);
    }
  );

  await checkApi(
    "API /api/get-user-list-suggestion",
    "/api/get-user-list-suggestion",
    "POST",
    { username: "" }
  );
  await checkApi("API /api/get-setting-list", "/api/get-setting-list");
  await checkApi("API /api/get-payment-list", "/api/get-payment-list");
  await checkApi("API /api/payment2-settings", "/api/payment2-settings");
  await checkApi("API /api/get-sport-list", "/api/get-sport-list?filter=topbar");
  await checkApi("API /api/get-match-list", "/api/get-match-list?sportId=4");
  await checkApi("API /api/get-casino-int-games", "/api/get-casino-int-games?provider=&type=");
  await checkApi("API /api/get-casino-homepage-categories", "/api/get-casino-homepage-categories");
  await checkApi("API /api/get-analysis-data", "/api/get-analysis-data");
  await checkApi("API /api/get-bank-and-upi-list", "/api/get-bank-and-upi-list");
  await checkApi("API /api/get-deposit-withdraw-list(deposit)", "/api/get-deposit-withdraw-list?type=deposit");
  await checkApi("API /api/get-deposit-withdraw-list(withdraw)", "/api/get-deposit-withdraw-list?type=withdraw");
  await checkApi("API /api/userMessage", "/api/userMessage");
  await checkApi("API /api/admin/userlist", "/api/admin/userlist");
  await checkApi("API /api/admin/userlist.html", "/api/admin/userlist.html");
  await checkApi(
    "API /api/get-user-book",
    "/api/get-user-book",
    "GET",
    null,
    (r) => {
      if (r.status === 200 && r.json?.data && typeof r.json.data === "object" && !Array.isArray(r.json.data)) {
        return pass(r, "user book object present");
      }
      return fail(r, `expected user book object, got status ${r.status}`);
    }
  );
  await checkApi("API /api/get-child-user-list", "/api/get-child-user-list?matchId=0");
  await checkApi("API /api/undeclared-bets", "/api/undeclared-bets");
  await checkApi(
    "API B2C login rejection",
    "/api/login-admin",
    "POST",
    { username: ADMIN_USER, password: ADMIN_PASS, platform: "b2c" },
    (r) => (r.status === 403 ? pass(r, "B2C rejected") : fail(r, `expected 403, got ${r.status}`))
  );

  const sampleUser = userListRes?.json?.data?.items?.find((u) => !!u?.username)?.username || "";
  if (sampleUser) {
    await checkApi(
      "API /api/get-user-detail",
      `/api/get-user-detail?username=${encodeURIComponent(sampleUser)}`
    );
    await checkApi(
      "API /api/get-parent-user-detail",
      `/api/get-parent-user-detail?username=${encodeURIComponent(sampleUser)}`,
      "GET",
      null,
      (r) => {
        const parentBalance = r.json?.data?.[0]?.parentBalance;
        if (r.status === 200 && parentBalance && Number.isFinite(Number(parentBalance.balance))) {
          return pass(r, "parent balance available for deposit validation");
        }
        return fail(r, `expected parentBalance.balance for deposit validation, got status ${r.status}`);
      }
    );
  } else {
    add("API user detail checks", fail({}, "no sample user from /api/get-user-list"));
  }

  await checkApi(
    "API /api/get-cas-casino-play-url (unknown game)",
    "/api/get-cas-casino-play-url",
    "POST",
    { gameCode: "UNKNOWN_GAME_QA_CHECK" },
    (r) => {
      if (r.status === 500 && String(r.json?.message || "").toLowerCase().includes("not available")) {
        return pass(r, "proper not-available behavior");
      }
      if (r.status === 200) return pass(r, "provider URL configured");
      return fail(r, `unexpected status ${r.status}`);
    }
  );

  const failed = checks.filter((c) => !c.pass);
  const compactResult = (r) => {
    const message = r?.json?.message || r?.error || "";
    const data = r?.json?.data;
    const dataShape = Array.isArray(data)
      ? `array(${data.length})`
      : data && typeof data === "object"
        ? `object(${Object.keys(data).slice(0, 8).join(",")})`
        : typeof data;
    return {
      status: r?.status || 0,
      message,
      dataShape,
      textPreview: String(r?.text || "").slice(0, 140),
    };
  };

  const summary = {
    baseUrl: BASE_URL,
    total: checks.length,
    passed: checks.length - failed.length,
    failed: failed.length,
    failures: failed.map((f) => ({
      name: f.name,
      reason: f.reason,
      status: f.result?.status || 0,
      message: f.result?.json?.message || f.result?.error || "",
    })),
  };

  const compactChecks = checks.map((c) => ({
    name: c.name,
    pass: c.pass,
    reason: c.reason,
    result: compactResult(c.result),
  }));

  console.log(JSON.stringify({ summary, checks: compactChecks }, null, 2));
  process.exit(failed.length ? 1 : 0);
}

run().catch((e) => {
  console.error(JSON.stringify({ fatal: e?.message || String(e) }, null, 2));
  process.exit(1);
});
