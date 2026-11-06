const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Database = require("better-sqlite3");
const CryptoJS = require("crypto-js");
const { validatePartnershipEntries, validateBetAmount } = require("./lib/sprint2");
const { createSettlementEngine } = require("./lib/settlement");
const { createCoinEngine, CoinError } = require("./lib/coins");

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: Math.max(256 * 1024, Number(process.env.UPLOAD_MAX_FILE_BYTES || 2 * 1024 * 1024)),
    files: Math.max(1, Number(process.env.UPLOAD_MAX_FILES || 4)),
    fields: Math.max(10, Number(process.env.UPLOAD_MAX_FIELDS || 200)),
    fieldSize: Math.max(16 * 1024, Number(process.env.UPLOAD_MAX_FIELD_BYTES || 256 * 1024)),
  },
});

const PORT = Number(process.env.PORT || 3000);
const HOST = String(process.env.HOST || "0.0.0.0").trim();
const ROOT = __dirname;
const pickExistingPath = (candidates, fallback) => {
  for (const p of candidates) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch {}
  }
  return fallback;
};
const DB_DIR = pickExistingPath(
  [path.join(ROOT, "data_store"), path.join(ROOT, "database")],
  path.join(ROOT, "data_store")
);
const DB_PATH = process.env.SQLITE_DB_PATH ? path.resolve(process.env.SQLITE_DB_PATH) : path.join(DB_DIR, "site.db");
const SCHEMA_PATH = path.join(DB_DIR, "schema.sql");
const CASINO_PLAY_MAP_PATH = path.join(DB_DIR, "casino_play_urls.json");
const GAME_API_SETTINGS_PATH = path.join(DB_DIR, "game_api_settings.json");
const GAME_API_CATALOG_CACHE_PATH = path.join(DB_DIR, "game_api_catalog_cache.json");
const PROVIDER_API_SETTINGS_PATH = path.join(DB_DIR, "provider_api_settings.json");
const PROVIDER_GAME_CODE_OVERRIDES_PATH = path.join(DB_DIR, "provider_game_code_overrides.json");
const CASINO_GAME_HEALTH_PATH = path.join(DB_DIR, "casino_game_health.json");
const CASINO_GAME_CONTROL_PATH = path.join(DB_DIR, "casino_game_controls.json");
const SNAPSHOT_ROOT = pickExistingPath(
  [path.join(ROOT, "api_data")],
  path.join(ROOT, "api_data")
);
const PROVIDER_LOCAL_CATALOG_DIRS = [
  path.join(SNAPSHOT_ROOT, "provider_agent_files", "Chub94"),
  path.join(DB_DIR, "provider_game_lists"),
];
const SNAPSHOT_API = path.join(SNAPSHOT_ROOT, "api");
const ADMIN_DIR = pickExistingPath(
  [path.join(ROOT, "admin_panel"), path.join(ROOT, "admin")],
  path.join(ROOT, "admin_panel")
);
const UPLOADS_DIR = path.join(ROOT, "uploads");

const JWT_SECRET = process.env.JWT_SECRET || "king777_local_access_secret";
const JWT_REFRESH = process.env.JWT_REFRESH_SECRET || "king777_local_refresh_secret";
const CASINO_PLAY_URL_TEMPLATE = String(process.env.CASINO_PLAY_URL_TEMPLATE || "").trim();
const ENCRYPTION_KEY_CANDIDATES = [
  process.env.ENCRYPTION_KEY,
  process.env.REACT_APP_ENCRYPTION_KEY,
  "UysThsnGhsnYsnsy6962787GHyyj8788w5",
  "king777-secret-encryption-key-2024-secure-betting-platform",
]
  .map((v) => String(v || "").trim())
  .filter(Boolean);
const SIGNING_KEY_CANDIDATES = [
  process.env.SIGNING_KEY,
  process.env.REACT_APP_SIGNING_KEY,
  "WEfytw85677FGHvsbntGHFHG647286dhgRTYb67",
  "king777-secret-signing-key-2024-hmac-verification",
]
  .map((v) => String(v || "").trim())
  .filter(Boolean);
const ENCRYPTION_KEY = ENCRYPTION_KEY_CANDIDATES[0] || "UysThsnGhsnYsnsy6962787GHyyj8788w5";
const SIGNING_KEY = SIGNING_KEY_CANDIDATES[0] || "WEfytw85677FGHvsbntGHFHG647286dhgRTYb67";
const DEFAULT_LOGIN_USERNAME = process.env.DEFAULT_LOGIN_USERNAME || "king007";
const DEFAULT_LOGIN_PASSWORD = process.env.DEFAULT_LOGIN_PASSWORD || "1234";
const DEFAULT_REGISTRATION_CODE = process.env.DEFAULT_REGISTRATION_CODE || "KING777WINN";
const CASINO_UNAVAILABLE_MESSAGE = "This is not currently available";

const boolTrue = new Set(["1", "true", "yes", "on"]);
const envBool = (v) => boolTrue.has(String(v || "").trim().toLowerCase());
const envNum = (v, fallback) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};
const API_BODY_LIMIT = String(process.env.API_BODY_LIMIT || "2mb").trim() || "2mb";
const API_MAX_INFLIGHT = Math.max(50, envNum(process.env.API_MAX_INFLIGHT, 800));
const API_RATE_LIMIT_WINDOW_MS = Math.max(2000, envNum(process.env.API_RATE_LIMIT_WINDOW_MS, 10000));
const API_RATE_LIMIT_MAX = Math.max(60, envNum(process.env.API_RATE_LIMIT_MAX, 300));
const AUTH_RATE_LIMIT_WINDOW_MS = Math.max(5000, envNum(process.env.AUTH_RATE_LIMIT_WINDOW_MS, 60000));
const AUTH_RATE_LIMIT_MAX = Math.max(5, envNum(process.env.AUTH_RATE_LIMIT_MAX, 20));
const SNAPSHOT_CACHE_TTL_MS = Math.max(1000, envNum(process.env.SNAPSHOT_CACHE_TTL_MS, 5000));
const CASINO_MERGED_CACHE_TTL_MS = Math.max(1000, envNum(process.env.CASINO_MERGED_CACHE_TTL_MS, 5000));
const CASINO_GAME_HEALTH_CACHE_TTL_MS = Math.max(1000, envNum(process.env.CASINO_GAME_HEALTH_CACHE_TTL_MS, 3000));
const CASINO_FAILED_GAME_HIDE_MINUTES = Math.max(5, envNum(process.env.CASINO_FAILED_GAME_HIDE_MINUTES, 180));
const CASINO_FAILED_GAME_MIN_FAILS = Math.max(1, envNum(process.env.CASINO_FAILED_GAME_MIN_FAILS, 1));
const CASINO_HIDE_FAILED_GAMES =
  process.env.CASINO_HIDE_FAILED_GAMES === undefined ? true : envBool(process.env.CASINO_HIDE_FAILED_GAMES);
const CASINO_REQUIRE_WORKING_GAMES =
  process.env.CASINO_REQUIRE_WORKING_GAMES === undefined ? true : envBool(process.env.CASINO_REQUIRE_WORKING_GAMES);
const CASINO_WORKING_EVIDENCE_MAX_AGE_HOURS = Math.max(
  1,
  envNum(process.env.CASINO_WORKING_EVIDENCE_MAX_AGE_HOURS, 24)
);
const CASINO_WORKING_EVIDENCE_TRUST_STATIC_MAP =
  process.env.CASINO_WORKING_EVIDENCE_TRUST_STATIC_MAP === undefined
    ? false
    : envBool(process.env.CASINO_WORKING_EVIDENCE_TRUST_STATIC_MAP);
const CASINO_WORKING_ONLY_STRICT =
  process.env.CASINO_WORKING_ONLY_STRICT === undefined ? false : envBool(process.env.CASINO_WORKING_ONLY_STRICT);
const CASINO_FRONTLINE_WORKING_COUNT = Math.max(5, Math.min(50, envNum(process.env.CASINO_FRONTLINE_WORKING_COUNT, 20)));
const CASINO_HIDE_PLACEHOLDER_IMAGES = true;
const CASINO_LAUNCH_TIMEOUT_MS = Math.max(2500, Math.min(15000, envNum(process.env.CASINO_LAUNCH_TIMEOUT_MS, 5000)));
const CASINO_LAUNCH_MAX_ATTEMPTS = Math.max(1, Math.min(2, envNum(process.env.CASINO_LAUNCH_MAX_ATTEMPTS, 1)));
const CASINO_SNAPSHOT_REFRESH_CHECK_MS = Math.max(
  10000,
  envNum(process.env.CASINO_SNAPSHOT_REFRESH_CHECK_MS, 60000)
);
const DESCENDANT_CACHE_TTL_MS = Math.max(1000, envNum(process.env.DESCENDANT_CACHE_TTL_MS, 5000));
const USER_LIST_CACHE_TTL_MS = Math.max(500, envNum(process.env.USER_LIST_CACHE_TTL_MS, 3000));
const SETTINGS_FILE_CACHE_TTL_MS = Math.max(500, envNum(process.env.SETTINGS_FILE_CACHE_TTL_MS, 3000));
const LOCAL_IMAGE_EXISTS_CACHE_TTL_MS = Math.max(
  1000,
  envNum(process.env.LOCAL_IMAGE_EXISTS_CACHE_TTL_MS, 5 * 60 * 1000)
);
const STATIC_CACHE_SECONDS = Math.max(60, envNum(process.env.STATIC_CACHE_SECONDS, 86400));
const SNAPSHOT_STATIC_CACHE_SECONDS = Math.max(60, Math.min(STATIC_CACHE_SECONDS, 3600));
const SERVER_REQUEST_TIMEOUT_MS = Math.max(10000, envNum(process.env.SERVER_REQUEST_TIMEOUT_MS, 45000));
const SERVER_KEEP_ALIVE_TIMEOUT_MS = Math.max(5000, envNum(process.env.SERVER_KEEP_ALIVE_TIMEOUT_MS, 65000));
const SERVER_HEADERS_TIMEOUT_MS = Math.max(
  SERVER_KEEP_ALIVE_TIMEOUT_MS + 1000,
  envNum(process.env.SERVER_HEADERS_TIMEOUT_MS, SERVER_KEEP_ALIVE_TIMEOUT_MS + 5000)
);
const SERVER_MAX_REQUESTS_PER_SOCKET = Math.max(50, envNum(process.env.SERVER_MAX_REQUESTS_PER_SOCKET, 200));
// Provider wallet callbacks move real money, so they must authenticate.
// Unauthenticated /call.php is only accepted from PROVIDER_CALLBACK_IPS, or
// everywhere if CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP=true (unsafe, testing only).
const CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP = envBool(process.env.CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP);
const PROVIDER_CALLBACK_IPS = new Set(
  String(process.env.PROVIDER_CALLBACK_IPS || "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean)
);

const DEMO_USERS_COUNT = Math.max(0, envNum(process.env.DEMO_USERS_COUNT, 0));
const DEMO_INITIAL_BALANCE = Math.max(0, envNum(process.env.DEMO_INITIAL_BALANCE, 500000));
const DEMO_PASSWORD = process.env.DEMO_PASSWORD || "demo@123";
const ENABLE_TEST_ACCOUNTS = envBool(process.env.ENABLE_TEST_ACCOUNTS);
const TEST_ACCOUNT_PASSWORD = process.env.TEST_ACCOUNT_PASSWORD || "test@123";
const ADMIN_INITIAL_BALANCE = Math.max(0, envNum(process.env.ADMIN_INITIAL_BALANCE, 10000));
const DEFAULT_USER_OPENING_BALANCE = Math.max(0, envNum(process.env.DEFAULT_USER_OPENING_BALANCE, 0));
const PLATFORM_MODE = String(process.env.PLATFORM_MODE || "b2b").trim().toLowerCase();
const UPLINE_COMMISSION_PERCENT = 1;
const OWNER_UNLIMITED_COINS =
  process.env.OWNER_UNLIMITED_COINS === undefined
    ? true
    : envBool(process.env.OWNER_UNLIMITED_COINS);

// Account hierarchy: Super Admin -> Admin -> Master -> User.
// Legacy roles (super_master, sub_super_master, sub_admin, agent...) are Masters.
const LEGACY_MASTER_ROLE_NAMES = [
  "master", "master_account", "master account", "sub_admin", "subadmin", "agent", "dl",
  "super master", "super-master", "super_master", "supermaster",
  "sub super master", "sub-super-master", "sub_super_master", "subsupermaster",
];
const OWNER_ROLE_SET = new Set(["super_admin"]);
const PANEL_ROLE_DEPTH = {
  super_admin: 0,
  admin: 1,
  master: 2,
  user: 3,
};
// Which account types each role may create.
const CREATABLE_ROLES = {
  super_admin: ["admin", "master", "user"],
  admin: ["admin", "master", "user"],
  master: ["user"],
  user: [],
};
const normalizePanelRole = (value, fallback = "user") => {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return fallback;
  if (["owner", "super_admin", "superadmin", "sadmin", "smdl"].includes(raw)) return "super_admin";
  if (["admin", "mdl", "master_agent", "masteragent"].includes(raw)) return "admin";
  if (LEGACY_MASTER_ROLE_NAMES.includes(raw)) return "master";
  if (["user", "client", "player"].includes(raw)) return "user";
  return fallback;
};
const isOwnerPanelRole = (value) => OWNER_ROLE_SET.has(normalizePanelRole(value, "user"));
const panelRoleDepth = (value) => PANEL_ROLE_DEPTH[normalizePanelRole(value, "user")] ?? PANEL_ROLE_DEPTH.user;
const canRoleCreateRole = (actorRole, childRole) => {
  const actor = normalizePanelRole(actorRole, "user");
  const child = normalizePanelRole(childRole, "user");
  return (CREATABLE_ROLES[actor] || []).includes(child);
};
const roleForAdminPanelUi = (value) => {
  const normalized = normalizePanelRole(value, "user");
  return normalized;
};

const ADMIN_FEATURE_CATALOG = [
  { key: "home", label: "Home", group: "Main Menu" },
  { key: "users", label: "Users", group: "Main Menu" },
  { key: "market_analysis", label: "Market Analysis", group: "Main Menu" },
  { key: "payment_details", label: "Payment Details", group: "Main Menu" },
  { key: "result_declaration", label: "Result Declaration", group: "Main Menu" },
  { key: "admin_pl", label: "Admin P&L", group: "Main Menu" },
  { key: "reports", label: "Reports", group: "Main Menu" },
  { key: "transactions", label: "Transactions", group: "Main Menu" },
  { key: "live_casino", label: "Live Casino", group: "Main Menu" },
  { key: "settings", label: "Settings", group: "Main Menu" },
  { key: "rules", label: "Rules", group: "Bottom Menu" },
  { key: "terms", label: "T & C", group: "Bottom Menu" },
  { key: "change_password", label: "Change Password", group: "Bottom Menu" },
];
const ADMIN_FEATURE_KEY_SET = new Set(ADMIN_FEATURE_CATALOG.map((item) => item.key));
const ADMIN_FEATURE_DEFAULTS = Object.freeze(
  ADMIN_FEATURE_CATALOG.reduce((acc, item) => {
    acc[item.key] = false;
    return acc;
  }, {})
);
const ADMIN_FEATURE_ALL_ENABLED = Object.freeze(
  ADMIN_FEATURE_CATALOG.reduce((acc, item) => {
    acc[item.key] = true;
    return acc;
  }, {})
);
const ADD_ADMIN_DISABLED_MESSAGE = "Add Admin feature has been removed. Create accounts from Users -> Add Account.";
const pathStartsWithAny = (value, prefixes = []) => {
  const pathValue = String(value || "");
  return prefixes.some((prefix) => pathValue.startsWith(prefix));
};
const resolveAdminPanelFeature = (pathname) => {
  const pathValue = String(pathname || "").toLowerCase();
  if (!pathValue.startsWith("/admin")) return "";
  const inAdmin = pathValue.replace(/^\/admin/, "") || "/";
  if (inAdmin === "/" || inAdmin === "" || inAdmin.startsWith("/dashbaord")) return "home";
  if (pathStartsWithAny(inAdmin, ["/list-clients", "/add-user"])) return "users";
  if (inAdmin.startsWith("/market-analysis")) return "market_analysis";
  if (inAdmin.startsWith("/payment-method")) return "payment_details";
  if (inAdmin.startsWith("/undeclared-bets")) return "result_declaration";
  if (inAdmin.startsWith("/analysis-pl")) return "admin_pl";
  if (
    pathStartsWithAny(inAdmin, ["/accountstatement", "/unsettledbet", "/game-reports", "/profitloss", "/adminprofitloss"])
  ) {
    return "reports";
  }
  if (pathStartsWithAny(inAdmin, ["/depositstatement", "/withdrawstatement"])) return "transactions";
  if (pathStartsWithAny(inAdmin, ["/casino/"])) return "live_casino";
  if (inAdmin.startsWith("/rules")) return "rules";
  if (inAdmin.startsWith("/terms")) return "terms";
  if (inAdmin.startsWith("/change-password")) return "change_password";
  if (
    pathStartsWithAny(inAdmin, [
      "/sports-list",
      "/messages",
      "/series-settings",
      "/casino-list",
      "/unsettledbet/undeclared",
    ])
  ) {
    return "settings";
  }
  if (inAdmin.startsWith("/add-admin")) return "settings";
  return "";
};
const resolveAdminApiFeature = (pathname) => {
  const pathValue = String(pathname || "").toLowerCase();
  if (!pathValue.startsWith("/api/")) return "";

  if (
    pathStartsWithAny(pathValue, [
      "/api/register",
      "/api/register2",
      "/api/update-password",
      "/api/update-user",
      "/api/add-transaction-password",
      "/api/update-user-status",
      "/api/user-account-balance",
      "/api/update-user-wallet",
      "/api/get-user-list",
      "/api/get-user-list-suggestion",
      "/api/get-user-detail",
      "/api/get-parent-user-detail",
      "/api/get-user-book",
      "/api/get-user-details/",
      "/api/search-users",
      "/api/admin/userlist",
      "/api/admin/client-onboarding",
      "/api/get-child-user-list",
      "/api/users-lock",
    ])
  ) {
    return "users";
  }
  if (
    pathStartsWithAny(pathValue, [
      "/api/get-market-analysis",
      "/api/get-analysis-data",
      "/api/get-sport-list",
      "/api/get-match-list",
      "/api/get-match-list-suggestion",
      "/api/get-match-by-id",
      "/api/get-market-list",
      "/api/get-fancy-list",
      "/api/fancy-data",
      "/api/match-details",
      "/api/score",
      "/api/scorecard-data",
      "/api/home/",
      "/api/live-sports",
      "/api/get-series",
      "/api/get-matches",
    ])
  ) {
    return "market_analysis";
  }
  if (
    pathStartsWithAny(pathValue, [
      "/api/add-bank-account",
      "/api/add-upi",
      "/api/delete-upi-bank",
      "/api/get-bank-and-upi-list",
      "/api/get-payment-list",
      "/api/payment-list",
      "/api/save-payment-list",
      "/api/payment2-settings",
      "/api/get-setting-list",
      "/api/setting-list",
      "/api/save-setting-list",
    ])
  ) {
    return "payment_details";
  }
  if (pathStartsWithAny(pathValue, ["/api/undeclared-bets", "/api/done-results/"])) return "result_declaration";
  if (pathStartsWithAny(pathValue, ["/api/adminprofitlosslist", "/api/profit-loss", "/api/get-exposer-event"])) return "admin_pl";
  if (
    pathStartsWithAny(pathValue, [
      "/api/account-statement-list",
      "/api/alluserbetlist",
      "/api/bets",
      "/api/get-bet-list-by-ids",
      "/api/delete-current-bet/",
      "/api/bets-by-market",
      "/api/match-betting-users",
      "/api/get-user-balance",
      "/api/get-user-stake",
      "/api/save-user-stake",
    ])
  ) {
    return "reports";
  }
  if (
    pathStartsWithAny(pathValue, [
      "/api/add-deposit-withdraw",
      "/api/get-deposit-withdraw-list",
      "/api/update-deposit-withdraw-status",
      "/api/depositstatement",
      "/api/withdrawstatement",
    ])
  ) {
    return "transactions";
  }
  if (
    pathStartsWithAny(pathValue, [
      "/api/get-casino-games",
      "/api/get-casino-homepage-categories",
      "/api/get-casino-int-games",
      "/api/search-casino-games",
      "/api/get-casino-by-homepage/",
      "/api/get-casino-data-by-id/",
      "/api/get-casino-market/",
      "/api/get-cas-casino-play-url",
      "/api/casino-bet-history",
      "/api/casino-account-statement",
      "/api/disable-casino-games",
      "/api/provider-api-status",
      "/api/zplay/events/matchdetails/",
      "/api/diamond/score",
    ])
  ) {
    return "live_casino";
  }
  if (
    pathStartsWithAny(pathValue, [
      "/api/create-registration-code",
      "/api/get-registration-code",
      "/api/sync-snapshot-data",
      "/api/sync-sqlite-to-mysql",
      "/api/sync-game-api-catalog",
      "/api/import-provider-local-catalog",
      "/api/game-api-config-status",
      "/api/usermessage",
      "/api/usermessage.json",
      "/api/send-whatsapp-message",
      "/api/bet-lock",
      "/api/bet-lock-granular",
      "/api/match-bet-locks/",
      "/api/delete-bets",
    ])
  ) {
    return "settings";
  }
  return "";
};

const OTP_LENGTH = Math.max(4, Math.min(8, envNum(process.env.OTP_LENGTH, 6)));
const OTP_EXPIRY_SECONDS = Math.max(60, envNum(process.env.OTP_EXPIRY_SECONDS, 300));
const OTP_MAX_ATTEMPTS = Math.max(3, envNum(process.env.OTP_MAX_ATTEMPTS, 5));
const OTP_REQUIRE_SMS_DELIVERY = envBool(process.env.OTP_REQUIRE_SMS_DELIVERY);
const OTP_DEBUG_INCLUDE_CODE = envBool(process.env.OTP_DEBUG_INCLUDE_CODE);
const OTP_ENFORCE_SERVER_VERIFICATION = !envBool(process.env.OTP_DISABLE_SERVER_VERIFY);
const SIGNUP_REQUIRE_OTP = envBool(process.env.SIGNUP_REQUIRE_OTP);

const OTP_SMS_PROVIDER = String(process.env.OTP_SMS_PROVIDER || "none").trim().toLowerCase();
const OTP_SMS_TEMPLATE =
  String(process.env.OTP_SMS_TEMPLATE || "Your OTP for King777 is {otp}.").trim();
const OTP_SMS_API_URL = String(process.env.OTP_SMS_API_URL || "").trim();
const OTP_SMS_API_TOKEN = String(process.env.OTP_SMS_API_TOKEN || "").trim();
const OTP_SMS_API_HEADERS_JSON = String(process.env.OTP_SMS_API_HEADERS_JSON || "").trim();

const TWILIO_ACCOUNT_SID = String(process.env.TWILIO_ACCOUNT_SID || "").trim();
const TWILIO_AUTH_TOKEN = String(process.env.TWILIO_AUTH_TOKEN || "").trim();
const TWILIO_FROM_NUMBER = String(process.env.TWILIO_FROM_NUMBER || "").trim();

const MYSQL_SYNC_ENABLED = envBool(process.env.MYSQL_SYNC_ENABLED);
const MYSQL_HOST = String(process.env.MYSQL_HOST || "").trim();
const MYSQL_PORT = envNum(process.env.MYSQL_PORT, 3306);
const MYSQL_USER = String(process.env.MYSQL_USER || "").trim();
const MYSQL_PASSWORD = String(process.env.MYSQL_PASSWORD || "");
const MYSQL_DATABASE = String(process.env.MYSQL_DATABASE || "").trim();
const MYSQL_POOL_SIZE = Math.max(1, envNum(process.env.MYSQL_POOL_SIZE, 5));

const STAKE_SIMPLE = { minStake: 100, maxStake: 100000, stakes: [100, 500, 1000, 5000, 10000] };
const STAKE_DETAIL = {
  __v: 0,
  name1: "500",
  name2: "1000",
  name3: "2000",
  name4: "3000",
  name5: "5000",
  name6: "10000",
  name7: "20000",
  name8: "30000",
  name9: "50000",
  name10: "100000",
  value1: 500,
  value2: 1000,
  value3: 2000,
  value4: 3000,
  value5: 5000,
  value6: 10000,
  value7: 20000,
  value8: 30000,
  value9: 50000,
  value10: 100000,
};

const nowIso = () => new Date().toISOString();
const toNum = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};
const id = (p = "") => p + crypto.randomUUID().replace(/-/g, "");
const hashPass = (p) => crypto.createHash("sha256").update(String(p || "")).digest("hex");
const verifyPass = (input, stored) => stored === input || stored === hashPass(input);
const safeParse = (text, fallback = null) => {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
};
const asPlainObject = (value, fallback = {}) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  return fallback;
};
const parseMaybeJsonObject = (value, fallback = {}) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const parsed = safeParse(text, null);
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
  return fallback;
};
const sanitizeUploadSegment = (value, fallback = "misc") => {
  const cleaned = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "");
  return cleaned || fallback;
};
const sanitizeUploadToken = (value, fallback = "file") => {
  const cleaned = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "");
  return cleaned || fallback;
};
const UPLOAD_MIME_EXT = Object.freeze({
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "application/pdf": ".pdf",
});
const resolveUploadExtension = (file) => {
  const rawExt = String(path.extname(String(file?.originalname || "")) || "")
    .trim()
    .toLowerCase();
  if (/^\.[a-z0-9]{1,10}$/.test(rawExt)) return rawExt;
  const mime = String(file?.mimetype || "").trim().toLowerCase();
  return UPLOAD_MIME_EXT[mime] || ".bin";
};
const saveUploadedFileToLocal = (file, { subdir = "misc", prefix = "upload" } = {}) => {
  if (!file || !Buffer.isBuffer(file.buffer) || file.buffer.length <= 0) return "";
  const cleanSubdir = sanitizeUploadSegment(subdir, "misc");
  const cleanPrefix = sanitizeUploadToken(prefix, "upload");
  const ext = resolveUploadExtension(file);
  const dir = path.join(UPLOADS_DIR, cleanSubdir);
  fs.mkdirSync(dir, { recursive: true });
  const name = `${cleanPrefix}_${Date.now()}_${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}${ext}`;
  const absPath = path.join(dir, name);
  fs.writeFileSync(absPath, file.buffer);
  return path.posix.join("uploads", cleanSubdir, name);
};
const PAYMENT_OPTION_KEY_SET = new Set(["option1", "option2", "option3"]);
const normalizePaymentOptionKey = (value) => {
  const key = String(value || "").trim().toLowerCase();
  return PAYMENT_OPTION_KEY_SET.has(key) ? key : "";
};
const normalizePaymentOptionData = (value) => {
  const src = asPlainObject(value, {});
  const out = {};
  for (const [key, rawValue] of Object.entries(src)) {
    if (rawValue === null || rawValue === undefined) continue;
    if (typeof rawValue === "string") {
      out[key] = rawValue.trim();
      continue;
    }
    if (typeof rawValue === "number" || typeof rawValue === "boolean") {
      out[key] = String(rawValue);
      continue;
    }
    if (rawValue && typeof rawValue === "object" && !Array.isArray(rawValue)) {
      out[key] = rawValue;
    }
  }
  return out;
};
const normalizePaymentSettingsV2 = (raw) => {
  const source = asPlainObject(raw, {});
  if (source.paymentSettings && typeof source.paymentSettings === "object") {
    return normalizePaymentSettingsV2(source.paymentSettings);
  }
  if (source.option && source.optionData) {
    const optionKey = normalizePaymentOptionKey(source.option);
    const out = {};
    if (optionKey) out[optionKey] = normalizePaymentOptionData(source.optionData);
    if (source.transactionPassword !== undefined) {
      out.transactionPassword = String(source.transactionPassword || "").trim();
    }
    if (source.updatedAt) out.updatedAt = String(source.updatedAt);
    return out;
  }
  const out = {};
  for (const optionKey of PAYMENT_OPTION_KEY_SET) {
    if (source[optionKey] && typeof source[optionKey] === "object") {
      out[optionKey] = normalizePaymentOptionData(source[optionKey]);
    }
  }
  if (source.transactionPassword !== undefined) {
    out.transactionPassword = String(source.transactionPassword || "").trim();
  }
  if (source.updatedAt) out.updatedAt = String(source.updatedAt);
  return out;
};
const hasPaymentOptionsConfigured = (value) =>
  [...PAYMENT_OPTION_KEY_SET].some((key) => value && value[key] && typeof value[key] === "object");
const parseBankDetailPayload = (value) => parseMaybeJsonObject(value, {});
const normalizeDepositMeta = (row) => {
  const parsed = parseMaybeJsonObject(row?.data_json, {});
  const bankDetail = parseBankDetailPayload(parsed.bankDetail);
  const accountType = String(parsed.accountType || "").trim().toLowerCase();
  const bankName = String(parsed.bankName || bankDetail.bankName || "").trim();
  const accountNumber = String(
    parsed.accountNumber ||
      parsed.bankAccountNumber ||
      bankDetail.accountNumber ||
      bankDetail.bankAccountNumber ||
      ""
  ).trim();
  const ifscCode = String(parsed.ifscCode || bankDetail.ifscCode || "").trim();
  const upiId = String(parsed.upiId || bankDetail.upiId || "").trim();
  const accountHolderName = String(parsed.accountHolderName || bankDetail.accountHolderName || "").trim();
  const whatsappNumber = String(parsed.whatsappNumber || bankDetail.whatsappNumber || "").trim();
  const walletAddress = String(parsed.walletAddress || bankDetail.walletAddress || "").trim();
  const imagePath = String(parsed.imagePath || parsed.imageUrl || parsed.uploadedImage || "").trim();
  const normalizedBankDetail = { ...bankDetail };
  if (accountHolderName && !normalizedBankDetail.accountHolderName) normalizedBankDetail.accountHolderName = accountHolderName;
  if (bankName && !normalizedBankDetail.bankName) normalizedBankDetail.bankName = bankName;
  if (accountNumber && !normalizedBankDetail.accountNumber) normalizedBankDetail.accountNumber = accountNumber;
  if (ifscCode && !normalizedBankDetail.ifscCode) normalizedBankDetail.ifscCode = ifscCode;
  if (upiId && !normalizedBankDetail.upiId) normalizedBankDetail.upiId = upiId;
  if (whatsappNumber && !normalizedBankDetail.whatsappNumber) normalizedBankDetail.whatsappNumber = whatsappNumber;
  if (walletAddress && !normalizedBankDetail.walletAddress) normalizedBankDetail.walletAddress = walletAddress;
  return {
    accountType,
    bankDetail: normalizedBankDetail,
    bankName,
    accountNumber,
    ifscCode,
    upiId,
    accountHolderName,
    whatsappNumber,
    walletAddress,
    utrno: String(parsed.utrno || "").trim(),
    paymentType: String(parsed.paymentType || parsed.transferType || parsed.paymentMode || "").trim(),
    imageUrl: imagePath,
    imagePath,
    uploadedImage: imagePath,
  };
};
const mapDepositRowForApi = (row) => {
  const meta = normalizeDepositMeta(row);
  return {
    _id: row?.id,
    id: row?.id,
    userId: row?.user_id,
    username: row?.username || "",
    amount: toNum(row?.amount, 0),
    status: row?.status || "pending",
    type: row?.type || "",
    remark: row?.remark || "",
    createdAt: row?.created_at || null,
    updatedAt: row?.updated_at || null,
    accountType: meta.accountType,
    bankDetail: meta.bankDetail,
    bankName: meta.bankName,
    accountNumber: meta.accountNumber,
    ifscCode: meta.ifscCode,
    upiId: meta.upiId,
    accountHolderName: meta.accountHolderName,
    whatsappNumber: meta.whatsappNumber,
    walletAddress: meta.walletAddress,
    utrno: meta.utrno,
    paymentType: meta.paymentType,
    imageUrl: meta.imageUrl,
    imagePath: meta.imagePath,
    uploadedImage: meta.uploadedImage,
  };
};
const env = (message = "", data = {}, error = false, code = 200, changePassAndTxn = false) => ({
  message,
  error,
  code,
  data,
  changePassAndTxn,
});
const makeTtlCache = ({ ttlMs = 5000, maxEntries = 500 } = {}) => {
  const cache = new Map();
  const baseTtlMs = Math.max(250, toNum(ttlMs, 5000));
  const hardLimit = Math.max(20, toNum(maxEntries, 500));
  const cleanup = (now = Date.now()) => {
    for (const [key, entry] of cache) {
      if (!entry || entry.expiresAt <= now) cache.delete(key);
    }
    while (cache.size > hardLimit) {
      const oldest = cache.keys().next().value;
      if (!oldest) break;
      cache.delete(oldest);
    }
  };
  return {
    get(key) {
      const entry = cache.get(key);
      if (!entry) return undefined;
      if (entry.expiresAt <= Date.now()) {
        cache.delete(key);
        return undefined;
      }
      return entry.value;
    },
    set(key, value, ttlOverrideMs = null) {
      const ttl = Math.max(250, toNum(ttlOverrideMs, baseTtlMs));
      cache.set(key, { value, expiresAt: Date.now() + ttl });
      cleanup();
      return value;
    },
    delete(key) {
      cache.delete(key);
    },
    clear() {
      cache.clear();
    },
    sweep() {
      cleanup();
    },
    size() {
      cleanup();
      return cache.size;
    },
  };
};

let mysqlPool = null;
if (MYSQL_SYNC_ENABLED && MYSQL_HOST && MYSQL_USER && MYSQL_DATABASE) {
  try {
    // Optional mysql mirror for cPanel/phpMyAdmin data visibility.
    const mysql = require("mysql2/promise");
    mysqlPool = mysql.createPool({
      host: MYSQL_HOST,
      port: MYSQL_PORT,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: MYSQL_POOL_SIZE,
      queueLimit: 0,
      charset: "utf8mb4",
    });
    console.log("[mysql-sync] enabled");
  } catch (e) {
    console.error("[mysql-sync] disabled:", e?.message || e);
  }
}
const mysqlExec = async (sql, params = []) => {
  if (!mysqlPool) return null;
  try {
    const [result] = await mysqlPool.execute(sql, params);
    return result;
  } catch (e) {
    console.error("[mysql-sync] query failed:", e?.message || e);
    return null;
  }
};

if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.pragma("synchronous = NORMAL");
db.pragma("temp_store = MEMORY");
db.pragma("cache_size = -20000");
db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 5000");

if (fs.existsSync(SCHEMA_PATH)) db.exec(fs.readFileSync(SCHEMA_PATH, "utf8"));
db.exec(`
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS bank_accounts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL,
  data_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS user_profiles (
  user_id TEXT PRIMARY KEY,
  data_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS admin_feature_permissions (
  user_id TEXT PRIMARY KEY,
  permissions_json TEXT NOT NULL,
  created_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS registration_codes (
  code TEXT PRIMARY KEY,
  description TEXT,
  is_active INTEGER NOT NULL DEFAULT 1,
  max_uses INTEGER,
  used_count INTEGER NOT NULL DEFAULT 0,
  last_used_by TEXT,
  created_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS admin_client_general (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  city TEXT,
  mobile_number TEXT,
  credit_amount REAL NOT NULL DEFAULT 0,
  created_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS admin_client_partnership (
  id TEXT PRIMARY KEY,
  general_id TEXT NOT NULL UNIQUE,
  partnership_type TEXT NOT NULL,
  remark TEXT,
  transaction_code TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS casino_provider_player_map (
  external_user_id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  username TEXT,
  provider_name TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  last_launch_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS casino_provider_transactions (
  id TEXT PRIMARY KEY,
  txn_key TEXT NOT NULL UNIQUE,
  provider_txn_id TEXT,
  provider_round_id TEXT,
  related_txn_key TEXT,
  user_id TEXT NOT NULL,
  external_user_id TEXT NOT NULL,
  username TEXT,
  action TEXT NOT NULL,
  amount REAL NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'success',
  before_balance REAL NOT NULL DEFAULT 0,
  after_balance REAL NOT NULL DEFAULT 0,
  game_code TEXT,
  vendor_code TEXT,
  provider_name TEXT,
  request_ip TEXT,
  request_json TEXT,
  response_json TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_users_parent_id ON users(parent_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_admin_feature_permissions_created_by ON admin_feature_permissions(created_by);
CREATE INDEX IF NOT EXISTS idx_matches_sport ON matches(sport_id);
CREATE INDEX IF NOT EXISTS idx_bets_user_match ON bets(user_id, match_id);
CREATE INDEX IF NOT EXISTS idx_registration_codes_active ON registration_codes(is_active);
CREATE INDEX IF NOT EXISTS idx_admin_client_general_created_at ON admin_client_general(created_at);
CREATE INDEX IF NOT EXISTS idx_admin_client_partnership_general_id ON admin_client_partnership(general_id);
CREATE INDEX IF NOT EXISTS idx_casino_provider_player_map_user_id ON casino_provider_player_map(user_id);
CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_user_id ON casino_provider_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_created_at ON casino_provider_transactions(created_at);
CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_provider_txn_id ON casino_provider_transactions(provider_txn_id);
CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_round_id ON casino_provider_transactions(provider_round_id);
`);
const ensureTableColumn = (tableName, columnName, sqlType) => {
  try {
    const columns = db.prepare(`PRAGMA table_info(${tableName})`).all();
    const hasColumn = columns.some((col) => String(col?.name || "").toLowerCase() === String(columnName || "").toLowerCase());
    if (!hasColumn) {
      db.exec(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${sqlType}`);
    }
  } catch (e) {
    console.warn(`[db-migrate] unable to ensure ${tableName}.${columnName}:`, e?.message || e);
  }
};
ensureTableColumn("deposits", "data_json", "TEXT");
ensureTableColumn("users", "upline_commission", "REAL NOT NULL DEFAULT 0");
ensureTableColumn("users", "min_bet", "REAL NOT NULL DEFAULT 0");
ensureTableColumn("users", "max_bet", "REAL NOT NULL DEFAULT 0");
ensureTableColumn("users", "credit_limit", "REAL NOT NULL DEFAULT 0");
ensureTableColumn("users", "partnership_remaining", "REAL NOT NULL DEFAULT 100");
ensureTableColumn("bets", "settlement_result", "TEXT");
ensureTableColumn("bets", "settlement_net", "REAL");
ensureTableColumn("bets", "settled_at", "TEXT");
// Written only by a live odds feed. Snapshot imports leave it untouched, so
// stale scraped prices can never be bet on.
ensureTableColumn("matches", "odds_updated_at", "TEXT");
db.exec(`
CREATE TABLE IF NOT EXISTS user_partnerships (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  partner_id TEXT NOT NULL,
  share_percentage REAL NOT NULL CHECK (share_percentage >= 0 AND share_percentage <= 100),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id, partner_id)
);
CREATE INDEX IF NOT EXISTS idx_user_partnerships_user_id ON user_partnerships(user_id);
CREATE INDEX IF NOT EXISTS idx_user_partnerships_partner_id ON user_partnerships(partner_id);
`);
// One-time, idempotent migration to the 4-role model and single Master share.
(() => {
  const legacy = db
    .prepare("UPDATE users SET role='master' WHERE lower(role) IN ('sub_admin','super_master','sub_super_master','subadmin','agent')")
    .run().changes;
  db.prepare(
    "UPDATE users SET level=CASE lower(role) WHEN 'super_admin' THEN 1 WHEN 'admin' THEN 2 WHEN 'master' THEN 3 ELSE 4 END WHERE level IS NOT CASE lower(role) WHEN 'super_admin' THEN 1 WHEN 'admin' THEN 2 WHEN 'master' THEN 3 ELSE 4 END"
  ).run();
  const nonMaster = db
    .prepare("DELETE FROM user_partnerships WHERE partner_id NOT IN (SELECT id FROM users WHERE role='master') OR user_id NOT IN (SELECT id FROM users WHERE role='user') OR share_percentage<=0")
    .run().changes;
  const extra = 0;
  db.prepare(
    "UPDATE users SET partnership_remaining=round(100-COALESCE((SELECT SUM(share_percentage) FROM user_partnerships up WHERE up.user_id=users.id),0),2)"
  ).run();
  if (legacy || nonMaster || extra) {
    console.log(`[role-migrate] legacy roles->master: ${legacy}, partnerships removed: ${nonMaster + extra}`);
  }
})();
// All coin movements between accounts go through this engine (see lib/coins.js).
// Super Admin is the coin source: with OWNER_UNLIMITED_COINS its wallet may go
// negative, and that negative balance equals the coins issued to the network.
const coinEngine = createCoinEngine({
  db,
  makeId: id,
  isUnlimitedSource: (user) => OWNER_UNLIMITED_COINS && isOwnerPanelRole(user?.role),
});
// Sports settlement (lib/settlement.js). Commission is a % of stake, shared
// between the player's Master (by Master share %) and parent.
const SPORTS_COMMISSION_PERCENT = Math.min(100, Math.max(0, envNum(process.env.SPORTS_COMMISSION_PERCENT, 1)));
const settlementEngine = createSettlementEngine({ db, coinEngine, makeId: id, commissionPercent: SPORTS_COMMISSION_PERCENT });

const setSetting = (key, value) => {
  const result = db
    .prepare(
      "INSERT INTO settings (key,value_json,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value_json=excluded.value_json,updated_at=excluded.updated_at"
    )
    .run(key, JSON.stringify(value), nowIso());
  syncSettingToMysql(key, value).catch(() => {});
  return result;
};
const getSetting = (key, fallback = null) => {
  const row = db.prepare("SELECT value_json FROM settings WHERE key=?").get(key);
  return row ? safeParse(row.value_json, fallback) : fallback;
};
const normalizeCode = (v) => String(v || "").trim().toUpperCase();
const normalizeObjectKey = (v) => String(v || "").trim().toUpperCase();
const sanitizeCasinoPlayUrl = (v) => {
  const value = String(v || "").trim();
  return /^https?:\/\//i.test(value) ? value : "";
};
const providerGameCodeOverridesFileCache = {
  loadedAt: 0,
  value: {},
};
const normalizeProviderGameCodeOverrides = (raw) => {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out = {};
  for (const [key, value] of Object.entries(raw)) {
    const normalizedKey = normalizeObjectKey(key);
    if (!normalizedKey) continue;
    const values = Array.isArray(value) ? value : [value];
    const cleaned = values
      .map((x) => String(x || "").trim())
      .filter(Boolean)
      .slice(0, 20);
    if (cleaned.length) out[normalizedKey] = cleaned;
  }
  return out;
};
const readProviderGameCodeOverrides = () => {
  ensureJsonFile(PROVIDER_GAME_CODE_OVERRIDES_PATH, {});
  const now = Date.now();
  if (
    providerGameCodeOverridesFileCache.loadedAt &&
    now - providerGameCodeOverridesFileCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS
  ) {
    return providerGameCodeOverridesFileCache.value;
  }
  const parsed = readJsonFile(PROVIDER_GAME_CODE_OVERRIDES_PATH, {});
  const normalized = normalizeProviderGameCodeOverrides(parsed);
  providerGameCodeOverridesFileCache.loadedAt = now;
  providerGameCodeOverridesFileCache.value = normalized;
  return normalized;
};
const resolveProviderGameCodeCandidates = (...values) => {
  const overrides = readProviderGameCodeOverrides();
  const out = [];
  const seen = new Set();
  const push = (input) => {
    const text = String(input || "").trim();
    if (!text) return;
    if (seen.has(text)) return;
    seen.add(text);
    out.push(text);
  };
  for (const raw of values.flat()) {
    const code = String(raw || "").trim();
    if (!code) continue;
    push(code);
    const lower = code.toLowerCase();
    const upper = code.toUpperCase();
    if (lower !== code) push(lower);
    if (upper !== code) push(upper);
    const mapped = overrides[normalizeObjectKey(code)] || [];
    for (const mappedCode of mapped) {
      push(mappedCode);
      const mappedLower = String(mappedCode).toLowerCase();
      const mappedUpper = String(mappedCode).toUpperCase();
      if (mappedLower !== mappedCode) push(mappedLower);
      if (mappedUpper !== mappedCode) push(mappedUpper);
    }
  }
  return out;
};
const DEFAULT_CASINO_GAME_IMAGE = "/icon/casino.png";
const CASINO_PROVIDER_ALIAS_GROUPS = Object.freeze([
  ["playtech", ["playtech"]],
  ["epicwin", ["epicwin", "epic win"]],
  ["redtiger", ["redtiger", "red tiger"]],
  ["tadagaming", ["tadagaming", "tada gaming", "tada"]],
  ["microgaming", ["microgaming", "micro gaming", "mg"]],
  ["ygrgaming", ["ygrgaming", "ygr gaming", "ygr"]],
  ["netentasia", ["netentasia", "netent asia", "netent"]],
  ["habanero", ["habanero"]],
  ["bng", ["bng", "bgaming", "b-gaming"]],
]);
const firstNonEmpty = (...values) => {
  for (const value of values) {
    const text = String(value ?? "").trim();
    if (text) return text;
  }
  return "";
};
const normalizeCompactToken = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
const CASINO_PROVIDER_ALIAS_LOOKUP = (() => {
  const map = new Map();
  for (const [canonical, aliases] of CASINO_PROVIDER_ALIAS_GROUPS) {
    const canonKey = normalizeCompactToken(canonical);
    if (!canonKey) continue;
    map.set(canonKey, canonKey);
    for (const alias of aliases) {
      const aliasKey = normalizeCompactToken(alias);
      if (!aliasKey) continue;
      map.set(aliasKey, canonKey);
    }
  }
  return map;
})();
const resolveCasinoProviderFilterKey = (value) => {
  const token = normalizeCompactToken(value);
  if (!token) return "";
  return CASINO_PROVIDER_ALIAS_LOOKUP.get(token) || token;
};
const getCasinoGameProviderKeys = (game) => {
  const keys = new Set();
  const push = (value) => {
    const token = resolveCasinoProviderFilterKey(value);
    if (token) keys.add(token);
  };
  push(game?.provider_id);
  push(game?.provider);
  return keys;
};
const gameMatchesProviderFilter = (game, providerFilterValue) => {
  const wanted = resolveCasinoProviderFilterKey(providerFilterValue);
  if (!wanted) return true;
  const keys = getCasinoGameProviderKeys(game);
  return keys.has(wanted);
};
const localImageExistsCache = new Map();
const isRemoteAssetPath = (value) => {
  const text = String(value || "").trim();
  return /^(https?:)?\/\//i.test(text) || /^data:/i.test(text);
};
const normalizeLocalAssetPath = (value) => {
  let text = String(value || "").trim();
  if (!text) return "";
  if (isRemoteAssetPath(text)) return text;
  text = text.replace(/\\/g, "/");
  if (!text.startsWith("/")) text = `/${text.replace(/^\/+/, "")}`;
  text = text.split("#")[0] || text;
  text = text.split("?")[0] || text;
  return text;
};
const localImageExists = (assetPath) => {
  const normalized = normalizeLocalAssetPath(assetPath);
  if (!normalized || isRemoteAssetPath(normalized)) return true;
  const now = Date.now();
  const cached = localImageExistsCache.get(normalized);
  if (cached && now - toNum(cached.checkedAt, 0) < LOCAL_IMAGE_EXISTS_CACHE_TTL_MS) {
    return !!cached.exists;
  }
  const fullPath = path.join(ROOT, normalized.replace(/^\/+/, ""));
  let exists = false;
  try {
    exists = fs.existsSync(fullPath);
  } catch {
    exists = false;
  }
  localImageExistsCache.set(normalized, { exists, checkedAt: now });
  if (localImageExistsCache.size > 8000) {
    const oldestKey = localImageExistsCache.keys().next().value;
    if (oldestKey) localImageExistsCache.delete(oldestKey);
  }
  return exists;
};
const pickCasinoGameImage = (...values) => {
  const candidate = firstNonEmpty(...values);
  const normalized = normalizeLocalAssetPath(candidate);
  if (!normalized) return DEFAULT_CASINO_GAME_IMAGE;
  if (isRemoteAssetPath(normalized)) return normalized;
  return localImageExists(normalized) ? normalized : DEFAULT_CASINO_GAME_IMAGE;
};
const CASINO_GENERIC_IMAGE_PATHS = new Set(
  [
    DEFAULT_CASINO_GAME_IMAGE,
    "/icon/casino.png",
  ].map((value) => normalizeLocalAssetPath(value).toLowerCase())
);
const isCasinoPlaceholderImage = (value) => {
  const normalized = normalizeLocalAssetPath(value).toLowerCase();
  if (!normalized) return true;
  if (CASINO_GENERIC_IMAGE_PATHS.has(normalized)) return true;
  return false;
};
const parseIsoToMs = (value) => {
  const ms = Date.parse(String(value || ""));
  return Number.isFinite(ms) ? ms : 0;
};
const readJsonFile = (file, fallback) => {
  if (!fs.existsSync(file)) return fallback;
  try {
    const parsed = safeParse(fs.readFileSync(file, "utf8"), fallback);
    return parsed === undefined ? fallback : parsed;
  } catch {
    return fallback;
  }
};
const writeJsonFile = (file, data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
};
const runTimedRequest = async ({ url, method = "GET", headers = {}, body = null, timeoutMs = 20000 }) => {
  const cleanMethod = String(method || "GET").toUpperCase();
  const reqInit = { method: cleanMethod, headers: { ...(headers || {}) } };
  if (cleanMethod !== "GET" && cleanMethod !== "HEAD" && body !== null && body !== undefined) {
    reqInit.body = typeof body === "string" ? body : JSON.stringify(body);
    if (!reqInit.headers["Content-Type"] && !reqInit.headers["content-type"]) {
      reqInit.headers["Content-Type"] = "application/json";
    }
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Math.max(3000, toNum(timeoutMs, 20000)));
  try {
    const resp = await fetch(url, { ...reqInit, signal: controller.signal });
    const text = await resp.text();
    return {
      ok: resp.ok,
      status: toNum(resp.status, 0),
      text: String(text || ""),
      payload: safeParse(text, null),
    };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      text: "",
      payload: null,
      message: e?.message || "request failed",
    };
  } finally {
    clearTimeout(timeout);
  }
};
const defaultGameApiSettings = () => ({
  enabled: false,
  // If this is set to a valid URL, all games can open via this single URL.
  singleLaunchUrl: "",
  // Optional template URL: supports {gameCode}, {encodedGameCode}, {baseUrl}
  launchUrlTemplate: "",
  baseUrl: "",
  gameCodeParam: "gameCode",
  providerName: "APIKIT",
  // Optional remote catalog sync
  catalogSyncEnabled: false,
  autoSyncOnRequest: true,
  cacheTtlSeconds: 180,
  requestTimeoutMs: 20000,
  catalogUrl: "",
  requestMethod: "GET",
  requestHeaders: {},
  requestBody: null,
  responseDataPath: "",
  gameCodeKey: "gameCode",
  gameNameKey: "gameName",
  gameImageKey: "image",
  gameProviderKey: "provider",
  homepageCode: 12,
});
const ensureJsonFile = (file, seed) => {
  if (fs.existsSync(file)) return;
  try {
    fs.writeFileSync(file, JSON.stringify(seed, null, 2), "utf8");
  } catch {}
};
const parseObject = (raw, fallback = {}) => {
  if (!raw) return fallback;
  const parsed = safeParse(raw, fallback);
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : fallback;
};
const getByPath = (input, pathText = "") => {
  const pathParts = String(pathText || "")
    .split(".")
    .map((x) => x.trim())
    .filter(Boolean);
  if (!pathParts.length) return input;
  let current = input;
  for (const key of pathParts) {
    if (!current || typeof current !== "object") return undefined;
    current = current[key];
  }
  return current;
};
const arrayFromUnknown = (value) => {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    if (Array.isArray(value.data)) return value.data;
    if (Array.isArray(value.result)) return value.result;
    if (Array.isArray(value.games)) return value.games;
    if (Array.isArray(value.docs)) return value.docs;
    if (Array.isArray(value.items)) return value.items;
  }
  return [];
};
const cloneGameApiSettings = (settings) => ({
  ...settings,
  requestHeaders: parseObject(settings?.requestHeaders, {}),
});
const normalizeGameApiSettings = (parsed) => {
  const merged = { ...defaultGameApiSettings(), ...(parsed && typeof parsed === "object" ? parsed : {}) };
  merged.enabled = !!merged.enabled;
  merged.singleLaunchUrl = sanitizeCasinoPlayUrl(merged.singleLaunchUrl);
  merged.baseUrl = sanitizeCasinoPlayUrl(merged.baseUrl);
  merged.launchUrlTemplate = String(merged.launchUrlTemplate || "").trim();
  merged.catalogUrl = sanitizeCasinoPlayUrl(merged.catalogUrl);
  merged.catalogSyncEnabled = !!merged.catalogSyncEnabled;
  merged.autoSyncOnRequest = merged.autoSyncOnRequest !== false;
  merged.cacheTtlSeconds = Math.max(30, toNum(merged.cacheTtlSeconds, 180));
  merged.requestTimeoutMs = Math.max(3000, toNum(merged.requestTimeoutMs, 20000));
  merged.requestMethod = String(merged.requestMethod || "GET").toUpperCase();
  merged.requestHeaders = parseObject(merged.requestHeaders, {});
  merged.requestBody = merged.requestBody === undefined ? null : merged.requestBody;
  merged.responseDataPath = String(merged.responseDataPath || "").trim();
  merged.gameCodeParam = String(merged.gameCodeParam || "gameCode").trim();
  merged.gameCodeKey = String(merged.gameCodeKey || "gameCode").trim();
  merged.gameNameKey = String(merged.gameNameKey || "gameName").trim();
  merged.gameImageKey = String(merged.gameImageKey || "image").trim();
  merged.gameProviderKey = String(merged.gameProviderKey || "provider").trim();
  merged.providerName = String(merged.providerName || "APIKIT").trim();
  merged.homepageCode = Math.max(1, toNum(merged.homepageCode, 12));
  return merged;
};
const gameApiSettingsFileCache = {
  loadedAt: 0,
  value: normalizeGameApiSettings(defaultGameApiSettings()),
};
const readGameApiSettings = () => {
  ensureJsonFile(GAME_API_SETTINGS_PATH, defaultGameApiSettings());
  const now = Date.now();
  if (gameApiSettingsFileCache.loadedAt && now - gameApiSettingsFileCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS) {
    return cloneGameApiSettings(gameApiSettingsFileCache.value);
  }
  try {
    const parsed = safeParse(fs.readFileSync(GAME_API_SETTINGS_PATH, "utf8"), {});
    const normalized = normalizeGameApiSettings(parsed);
    gameApiSettingsFileCache.loadedAt = now;
    gameApiSettingsFileCache.value = normalized;
    return cloneGameApiSettings(normalized);
  } catch {
    const fallback = normalizeGameApiSettings(defaultGameApiSettings());
    gameApiSettingsFileCache.loadedAt = now;
    gameApiSettingsFileCache.value = fallback;
    return cloneGameApiSettings(fallback);
  }
};
const gameApiActive = (cfg) =>
  !!cfg &&
  (cfg.enabled || !!cfg.singleLaunchUrl || !!cfg.launchUrlTemplate || (!!cfg.baseUrl && !!cfg.gameCodeParam));
const resolveByGameApiSettings = (gameCode) => {
  const cfg = readGameApiSettings();
  if (!gameApiActive(cfg)) return "";
  const normalized = normalizeObjectKey(gameCode);
  if (!normalized) return "";

  if (cfg.singleLaunchUrl) return cfg.singleLaunchUrl;

  if (cfg.launchUrlTemplate) {
    const out = String(cfg.launchUrlTemplate)
      .replace(/\{gameCode\}/g, normalized)
      .replace(/\{encodedGameCode\}/g, encodeURIComponent(normalized))
      .replace(/\{baseUrl\}/g, cfg.baseUrl || "");
    return sanitizeCasinoPlayUrl(out);
  }

  if (cfg.baseUrl) {
    const glue = cfg.baseUrl.includes("?") ? "&" : "?";
    return sanitizeCasinoPlayUrl(
      `${cfg.baseUrl}${glue}${encodeURIComponent(cfg.gameCodeParam || "gameCode")}=${encodeURIComponent(normalized)}`
    );
  }
  return "";
};
const normalizeCatalogCacheEnvelope = (input) => {
  if (Array.isArray(input)) {
    return { syncedAt: null, source: "", games: input };
  }
  if (input && typeof input === "object") {
    const games = Array.isArray(input.games) ? input.games : arrayFromUnknown(input);
    return {
      syncedAt: input.syncedAt ? String(input.syncedAt) : null,
      source: String(input.source || ""),
      games: Array.isArray(games) ? games : [],
    };
  }
  return { syncedAt: null, source: "", games: [] };
};
let casinoCatalogVersion = 1;
const bumpCasinoCatalogVersion = () => {
  casinoCatalogVersion += 1;
};
const gameApiCatalogEnvelopeCache = {
  loadedAt: 0,
  value: normalizeCatalogCacheEnvelope([]),
};
const readGameApiCatalogCacheEnvelope = () => {
  const now = Date.now();
  if (gameApiCatalogEnvelopeCache.loadedAt && now - gameApiCatalogEnvelopeCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS) {
    return gameApiCatalogEnvelopeCache.value;
  }
  const envelope = normalizeCatalogCacheEnvelope(readJsonFile(GAME_API_CATALOG_CACHE_PATH, []));
  gameApiCatalogEnvelopeCache.loadedAt = now;
  gameApiCatalogEnvelopeCache.value = envelope;
  return envelope;
};
const writeGameApiCatalogCacheEnvelope = (games, meta = {}) => {
  const payload = {
    syncedAt: String(meta.syncedAt || nowIso()),
    source: String(meta.source || ""),
    games: Array.isArray(games) ? games : [],
  };
  writeJsonFile(GAME_API_CATALOG_CACHE_PATH, payload);
  gameApiCatalogEnvelopeCache.loadedAt = Date.now();
  gameApiCatalogEnvelopeCache.value = payload;
  bumpCasinoCatalogVersion();
  return payload;
};
const readGameApiCatalogCache = () => readGameApiCatalogCacheEnvelope().games;
let gameCatalogSyncPromise = null;
const ensureGameApiCatalogFresh = async ({ force = false } = {}) => {
  const cfg = readGameApiSettings();
  if (!cfg.catalogSyncEnabled || !cfg.catalogUrl) {
    return { success: false, skipped: true, reason: "catalog sync not configured" };
  }
  if (!force && !cfg.autoSyncOnRequest) {
    return { success: false, skipped: true, reason: "auto sync disabled" };
  }
  const cache = readGameApiCatalogCacheEnvelope();
  const cacheMs = parseIsoToMs(cache.syncedAt);
  const ttlMs = Math.max(30, toNum(cfg.cacheTtlSeconds, 180)) * 1000;
  const isStale = !cacheMs || Date.now() - cacheMs >= ttlMs || !cache.games.length;
  if (!force && !isStale) {
    return { success: true, skipped: true, reason: "cache fresh", count: cache.games.length };
  }
  if (gameCatalogSyncPromise) return gameCatalogSyncPromise;
  gameCatalogSyncPromise = (async () => {
    try {
      return await syncGameApiCatalog();
    } finally {
      gameCatalogSyncPromise = null;
    }
  })();
  return gameCatalogSyncPromise;
};
const defaultProviderApiSettings = () => ({
  enabled: true,
  apiUrl: String(process.env.PROVIDER_LAUNCH_API_URL || "https://oxentech.asia/api/devtools.php").trim(),
  apiToken: String(process.env.PROVIDER_TOKEN || "72e53554fbe46f0be77e51451a71c32f73261e477952587e2470b105df4ea3fc").trim(),
  secretKey: String(process.env.PROVIDER_SECRET || "772a385d0636dbc963606729c1a0b75b68777f7b202708c9e2d053d1c71496af").trim(),
  authMode: String(process.env.PROVIDER_AUTH_MODE || "agent_sign").trim().toLowerCase(),
  providerAgent: String(process.env.PROVIDER_AGENT || "MR_Ko3578").trim(),
  providerToken: String(process.env.PROVIDER_TOKEN || "72e53554fbe46f0be77e51451a71c32f73261e477952587e2470b105df4ea3fc").trim(),
  providerSecret: String(process.env.PROVIDER_SECRET || "772a385d0636dbc963606729c1a0b75b68777f7b202708c9e2d053d1c71496af").trim(),
  signatureAlgorithm: "sha256",
  signatureUppercase: false,
  authHeaderName: "Authorization",
  authHeaderPrefix: "Bearer ",
  bearerToken: "",
  refreshEnabled: false,
  refreshUrl: "",
  refreshMethod: "POST",
  refreshHeaders: {},
  refreshBody: null,
  refreshTokenPath: "data.token",
  resellerPrefix: "",
  appendPrefixToUserId: false,
  returnUrl: "",
  defaultLanguage: 1,
  defaultPhoneType: 1,
  defaultVendorCode: 18,
  requestTimeoutMs: 30000,
});
const cloneProviderApiSettings = (settings) => ({
  ...settings,
  refreshHeaders: parseObject(settings?.refreshHeaders, {}),
});
const normalizeProviderApiSettings = (parsed) => {
  const merged = { ...defaultProviderApiSettings(), ...(parsed && typeof parsed === "object" ? parsed : {}) };
  merged.enabled = !!merged.enabled;
  merged.apiUrl = sanitizeCasinoPlayUrl(merged.apiUrl);
  merged.apiToken = String(merged.apiToken || "").trim();
  merged.secretKey = String(merged.secretKey || "").trim();
  merged.providerAgent = String(merged.providerAgent || process.env.PROVIDER_AGENT || "").trim();
  merged.providerToken = String(merged.providerToken || process.env.PROVIDER_TOKEN || "").trim();
  merged.providerSecret = String(merged.providerSecret || process.env.PROVIDER_SECRET || "").trim();
  if (!merged.apiToken && merged.providerToken) merged.apiToken = merged.providerToken;
  if (!merged.secretKey && merged.providerSecret) merged.secretKey = merged.providerSecret;
  const mode = String(merged.authMode || process.env.PROVIDER_AUTH_MODE || "legacy_keys")
    .trim()
    .toLowerCase();
  merged.authMode = new Set(["legacy_keys", "bearer", "agent_sign"]).has(mode) ? mode : "legacy_keys";
  const signatureAlgorithm = String(merged.signatureAlgorithm || "sha256").trim().toLowerCase();
  merged.signatureAlgorithm = ["sha256", "sha512", "sha1", "md5"].includes(signatureAlgorithm)
    ? signatureAlgorithm
    : "sha256";
  merged.signatureUppercase = !!merged.signatureUppercase;
  merged.authHeaderName = String(merged.authHeaderName || "Authorization").trim() || "Authorization";
  merged.authHeaderPrefix = String(merged.authHeaderPrefix || "Bearer ").trim() || "Bearer";
  merged.bearerToken = String(merged.bearerToken || "").trim();
  merged.refreshEnabled = !!merged.refreshEnabled;
  merged.refreshUrl = sanitizeCasinoPlayUrl(merged.refreshUrl);
  merged.refreshMethod = String(merged.refreshMethod || "POST").toUpperCase();
  merged.refreshHeaders = parseObject(merged.refreshHeaders, {});
  merged.refreshBody = merged.refreshBody === undefined ? null : merged.refreshBody;
  merged.refreshTokenPath = String(merged.refreshTokenPath || "data.token").trim();
  merged.resellerPrefix = String(merged.resellerPrefix || "").trim();
  merged.appendPrefixToUserId = !!merged.appendPrefixToUserId;
  merged.returnUrl = sanitizeCasinoPlayUrl(merged.returnUrl);
  merged.defaultLanguage = Math.max(0, toNum(merged.defaultLanguage, 1));
  merged.defaultPhoneType = Math.max(0, toNum(merged.defaultPhoneType, 1));
  merged.defaultVendorCode = Math.max(0, toNum(merged.defaultVendorCode, 18));
  merged.requestTimeoutMs = Math.max(5000, toNum(merged.requestTimeoutMs, 30000));
  return merged;
};
const providerApiSettingsFileCache = {
  loadedAt: 0,
  value: normalizeProviderApiSettings(defaultProviderApiSettings()),
};
const readProviderApiSettings = () => {
  ensureJsonFile(PROVIDER_API_SETTINGS_PATH, defaultProviderApiSettings());
  const now = Date.now();
  if (providerApiSettingsFileCache.loadedAt && now - providerApiSettingsFileCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS) {
    return cloneProviderApiSettings(providerApiSettingsFileCache.value);
  }
  try {
    const parsed = safeParse(fs.readFileSync(PROVIDER_API_SETTINGS_PATH, "utf8"), {});
    const normalized = normalizeProviderApiSettings(parsed);
    providerApiSettingsFileCache.loadedAt = now;
    providerApiSettingsFileCache.value = normalized;
    return cloneProviderApiSettings(normalized);
  } catch {
    const fallback = normalizeProviderApiSettings(defaultProviderApiSettings());
    providerApiSettingsFileCache.loadedAt = now;
    providerApiSettingsFileCache.value = fallback;
    return cloneProviderApiSettings(fallback);
  }
};
const providerApiActive = (cfg) =>
  !!cfg &&
  !!cfg.enabled &&
  !!cfg.apiUrl &&
  (cfg.authMode === "bearer"
    ? !!cfg.bearerToken || (!!cfg.refreshEnabled && !!cfg.refreshUrl)
    : cfg.authMode === "agent_sign"
      ? !!cfg.providerAgent && !!cfg.providerToken && !!cfg.providerSecret
      : !!cfg.apiToken && !!cfg.secretKey);
const VENDOR_CODE_ALIASES = {
  "100hp": 18,
  "100-hp": 18,
  "100 hp": 18,
  cq9: 2,
  microgaming: 4,
  mg: 4,
  jdb: 6,
  km: 9,
  ag: 12,
  ag_playace: 12,
  evo: 17,
  evolutionlive: 17,
  jili: 18,
  spribe: 20,
  v8: 21,
  v8card: 21,
  pg: 22,
  pgsoft: 22,
  inout: 87,
};
const resolveVendorCode = (value) => {
  const n = toNum(value, 0);
  if (n > 0) return n;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return 0;
  if (VENDOR_CODE_ALIASES[text]) return VENDOR_CODE_ALIASES[text];
  const digits = text.match(/\d+/);
  return digits ? toNum(digits[0], 0) : 0;
};
const resolveVendorCodeForGame = (gameCode, explicitValue) => {
  const direct = resolveVendorCode(explicitValue);
  if (direct > 0) return direct;
  const raw = String(gameCode || "").trim();
  if (!raw) return 0;
  const normalized = normalizeObjectKey(raw);
  const row = db
    .prepare("SELECT provider_id,provider FROM casino_games WHERE identifier=? OR identifier=? OR id=? OR id=? LIMIT 1")
    .get(raw, normalized, raw, normalized);
  const fromDb = resolveVendorCode(row?.provider_id || row?.provider);
  if (fromDb > 0) return fromDb;
  const cacheRow = readGameApiCatalogCache().find(
    (x) => normalizeObjectKey(x?.identifier || x?.id || x?.gameCode) === normalized
  );
  return resolveVendorCode(cacheRow?.provider_id || cacheRow?.provider);
};
const providerAuthHeaders = (cfg) => {
  if (cfg.authMode === "bearer") {
    if (!cfg.bearerToken) return {};
    return {
      [cfg.authHeaderName || "Authorization"]: `${cfg.authHeaderPrefix || "Bearer"} ${cfg.bearerToken}`.trim(),
    };
  }
  if (cfg.authMode === "agent_sign") return {};
  return {
    "X-API-Token": cfg.apiToken,
    "X-Secret-Key": cfg.secretKey,
  };
};
const hashProviderSignature = (input, algorithm = "sha256", uppercase = false) => {
  const text = String(input || "");
  const algo = String(algorithm || "sha256").trim().toLowerCase() || "sha256";
  let digest = "";
  try {
    digest = crypto.createHash(algo).update(text, "utf8").digest("hex");
  } catch {
    digest = crypto.createHash("sha256").update(text, "utf8").digest("hex");
  }
  return uppercase ? digest.toUpperCase() : digest;
};
const sanitizeProviderAccountId = (value, maxLength = 32) => {
  const raw = String(value || "").trim();
  const safeLen = Math.max(8, toNum(maxLength, 32));
  if (!raw) return "";
  const alnum = raw.replace(/[^a-zA-Z0-9]/g, "");
  if (alnum) return alnum.slice(0, safeLen);
  const digest = crypto.createHash("sha1").update(raw, "utf8").digest("hex");
  return `U${digest.slice(0, Math.max(1, safeLen - 1))}`;
};
const saveProviderApiSettings = (settings) => {
  const next = { ...(settings || {}) };
  writeJsonFile(PROVIDER_API_SETTINGS_PATH, next);
  providerApiSettingsFileCache.loadedAt = 0;
  return readProviderApiSettings();
};
const refreshProviderAuthToken = async () => {
  const cfg = readProviderApiSettings();
  if (cfg.authMode !== "bearer") return { ok: false, message: "Auth mode is not bearer" };
  if (!cfg.refreshEnabled || !cfg.refreshUrl) {
    return { ok: false, message: "Bearer refresh is not configured" };
  }
  const refreshResp = await runTimedRequest({
    url: cfg.refreshUrl,
    method: cfg.refreshMethod || "POST",
    headers: parseObject(cfg.refreshHeaders, {}),
    body: cfg.refreshBody,
    timeoutMs: cfg.requestTimeoutMs || 30000,
  });
  if (!refreshResp.ok) {
    return {
      ok: false,
      message: refreshResp.message || `Token refresh failed (${refreshResp.status || 0})`,
      status: refreshResp.status || 0,
      raw: String(refreshResp.text || "").slice(0, 400),
    };
  }
  const tokenCandidate =
    getByPath(refreshResp.payload, cfg.refreshTokenPath || "data.token") ||
    refreshResp.payload?.token ||
    refreshResp.payload?.accessToken ||
    refreshResp.payload?.data?.token ||
    refreshResp.payload?.data?.accessToken;
  const refreshedToken = String(tokenCandidate || "").trim();
  if (!refreshedToken) {
    return { ok: false, message: "Token refresh response does not include token" };
  }
  const prev = readJsonFile(PROVIDER_API_SETTINGS_PATH, {});
  saveProviderApiSettings({
    ...prev,
    bearerToken: refreshedToken,
    lastTokenRefreshAt: nowIso(),
  });
  return { ok: true, token: refreshedToken };
};
const extractProviderLaunchUrl = (payload) => {
  const candidates = [
    payload?.data?.url,
    payload?.data?.launchUrl,
    payload?.data?.gameUrl,
    payload?.url,
    payload?.launchUrl,
    payload?.gameUrl,
  ];
  for (const candidate of candidates) {
    const clean = sanitizeCasinoPlayUrl(candidate);
    if (clean) return clean;
  }
  return "";
};
const requestProviderLaunchUrl = async ({
  userId,
  username,
  balance,
  gameCode,
  vendorCode,
  language,
  phonetype,
  timestamp,
  random,
}) => {
  const cfg = readProviderApiSettings();
  if (!providerApiActive(cfg)) {
    return { ok: false, message: "Provider API config is disabled or incomplete" };
  }
  const uid = String(userId || "").trim();
  const uname = String(username || "").trim();
  const gameCodeRaw = String(gameCode || "").trim();
  if ((!uid && !uname) || !gameCodeRaw) {
    return { ok: false, message: "userId and gameCode are required" };
  }
  const vendor = Math.max(1, toNum(vendorCode, cfg.defaultVendorCode || 18));
  const externalUserCandidates = buildProviderExternalUserCandidates({
    userId: uid,
    username: uname,
    cfg,
  });
  if (!externalUserCandidates.length) {
    return { ok: false, message: "Player account is invalid" };
  }
  let externalUserId = String(externalUserCandidates[0] || "").trim();
  const launchTimestamp = Math.max(1, toNum(timestamp, Date.now()));
  const launchRandom =
    String(random || crypto.randomUUID().replace(/-/g, "").slice(0, 20)).trim() ||
    crypto.randomUUID().replace(/-/g, "").slice(0, 20);
  const buildPayloadSet = (targetExternalUserId, targetVendorCode = vendor) => {
    const safeExternalUserId = sanitizeProviderAccountId(targetExternalUserId, 32);
    const safeVendorCode = Math.max(1, toNum(targetVendorCode, vendor));
    const signedPayload = {
      agent: cfg.providerAgent,
      token: cfg.providerToken,
      playerId: safeExternalUserId,
      vendorCode: safeVendorCode,
      gameCode: gameCodeRaw,
      timestamp: launchTimestamp,
      random: launchRandom,
      sign: hashProviderSignature(
        `${cfg.providerAgent}${safeExternalUserId}${gameCodeRaw}${safeVendorCode}${launchTimestamp}${launchRandom}${cfg.providerSecret}`,
        cfg.signatureAlgorithm || "sha256",
        !!cfg.signatureUppercase
      ),
    };
    const legacyPayload = {
      userId: safeExternalUserId,
      gameCode: gameCodeRaw,
      vendorCode: safeVendorCode,
      userBalance: Math.max(0, toNum(balance, 0)),
      language: Math.max(0, toNum(language, cfg.defaultLanguage || 1)),
      phonetype: Math.max(0, toNum(phonetype, cfg.defaultPhoneType || 1)),
      returnUrl: cfg.returnUrl || "",
    };
    return {
      externalUserId: safeExternalUserId,
      signedPayload,
      legacyPayload,
      primaryPayload: cfg.authMode === "agent_sign" ? signedPayload : legacyPayload,
    };
  };
  let payloadSet = buildPayloadSet(externalUserId, vendor);
  let primaryPayload = payloadSet.primaryPayload;
  const launchTimeoutMs = Math.max(
    2500,
    Math.min(15000, toNum(cfg.requestTimeoutMs, CASINO_LAUNCH_TIMEOUT_MS))
  );

  const callProvider = async (body, headers) => {
    let lastResp = null;
    const maxAttempts = CASINO_LAUNCH_MAX_ATTEMPTS;
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      const resp = await runTimedRequest({
        url: cfg.apiUrl,
        method: "POST",
        headers: { "Content-Type": "application/json", ...(headers || {}) },
        body,
        timeoutMs: launchTimeoutMs,
      });
      lastResp = resp;
      const status = toNum(resp?.status, 0);
      const retryableStatus = status === 429 || status >= 500;
      if (!retryableStatus || attempt >= maxAttempts - 1) return resp;
      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
    return lastResp || { ok: false, status: 0, text: "", payload: null, message: "request failed" };
  };

  let effectiveCfg = cfg;
  let launchResp = await callProvider(primaryPayload, providerAuthHeaders(effectiveCfg));
  let tokenRefreshed = false;
  let effectiveVendor = vendor;

  if (
    (launchResp.status === 401 || launchResp.status === 403) &&
    effectiveCfg.authMode === "bearer" &&
    effectiveCfg.refreshEnabled
  ) {
    const refreshed = await refreshProviderAuthToken();
    if (refreshed.ok) {
      tokenRefreshed = true;
      effectiveCfg = readProviderApiSettings();
      launchResp = await callProvider(primaryPayload, providerAuthHeaders(effectiveCfg));
    }
  }

  // Compatibility fallback: if provider explicitly asks for legacy X-API-Token/X-Secret-Key
  // while configured in agent_sign mode, retry once with legacy headers + legacy payload.
  if (!launchResp.ok && effectiveCfg.authMode === "agent_sign") {
    const errText = String(
      launchResp.payload?.msg || launchResp.payload?.message || launchResp.payload?.error || launchResp.text || ""
    )
      .trim()
      .toLowerCase();
    const wantsLegacyHeaders =
      errText.includes("x-api-token") ||
      errText.includes("x-secret-key") ||
      errText.includes("authentication headers required");
    if (wantsLegacyHeaders) {
      const fallbackApiToken = String(effectiveCfg.apiToken || effectiveCfg.providerToken || "").trim();
      const fallbackSecretKey = String(effectiveCfg.secretKey || effectiveCfg.providerSecret || "").trim();
      if (fallbackApiToken && fallbackSecretKey) {
        launchResp = await callProvider(payloadSet.legacyPayload, {
          "X-API-Token": fallbackApiToken,
          "X-Secret-Key": fallbackSecretKey,
        });
      }
    }
  }

  // Vendor fallback: if provider rejects vendor code, retry once with defaultVendorCode.
  if (!launchResp.ok) {
    const errText = String(
      launchResp.payload?.msg || launchResp.payload?.message || launchResp.payload?.error || launchResp.text || ""
    )
      .trim()
      .toLowerCase();
    const vendorRejected =
      errText.includes("unknown or unconfigured game provider") ||
      errText.includes("verify vendorcode") ||
      errText.includes("vendor code") ||
      errText.includes("vendorcode");
    const fallbackVendor = Math.max(1, toNum(cfg.defaultVendorCode, 18));
    if (vendorRejected && fallbackVendor !== vendor) {
      payloadSet = buildPayloadSet(externalUserId, fallbackVendor);
      const retryPayload = payloadSet.primaryPayload;
      launchResp = await callProvider(retryPayload, providerAuthHeaders(effectiveCfg));
      effectiveVendor = fallbackVendor;
    }
  }

  if (!launchResp.ok && externalUserCandidates.length > 1) {
    const accountErrText = String(
      launchResp.payload?.msg || launchResp.payload?.message || launchResp.payload?.error || launchResp.text || ""
    )
      .trim()
      .toLowerCase();
    const accountRejected =
      accountErrText.includes("player account") ||
      accountErrText.includes("limited to a-z") ||
      accountErrText.includes("invalid account");
    if (accountRejected) {
      for (const candidate of externalUserCandidates.slice(1)) {
        const nextExternalUserId = sanitizeProviderAccountId(candidate, 32);
        if (!nextExternalUserId || nextExternalUserId === externalUserId) continue;

        externalUserId = nextExternalUserId;
        payloadSet = buildPayloadSet(externalUserId, effectiveVendor);
        let candidateResp = await callProvider(payloadSet.primaryPayload, providerAuthHeaders(effectiveCfg));

        if (!candidateResp.ok && effectiveCfg.authMode === "agent_sign") {
          const errText = String(
            candidateResp.payload?.msg ||
            candidateResp.payload?.message ||
            candidateResp.payload?.error ||
            candidateResp.text ||
            ""
          )
            .trim()
            .toLowerCase();
          const wantsLegacyHeaders =
            errText.includes("x-api-token") ||
            errText.includes("x-secret-key") ||
            errText.includes("authentication headers required");
          if (wantsLegacyHeaders) {
            const fallbackApiToken = String(effectiveCfg.apiToken || effectiveCfg.providerToken || "").trim();
            const fallbackSecretKey = String(effectiveCfg.secretKey || effectiveCfg.providerSecret || "").trim();
            if (fallbackApiToken && fallbackSecretKey) {
              candidateResp = await callProvider(payloadSet.legacyPayload, {
                "X-API-Token": fallbackApiToken,
                "X-Secret-Key": fallbackSecretKey,
              });
            }
          }
        }

        launchResp = candidateResp;
        const parsedCandidate =
          candidateResp.payload && typeof candidateResp.payload === "object" ? candidateResp.payload : {};
        const candidateUrl = extractProviderLaunchUrl(parsedCandidate);
        const candidateCode = toNum(parsedCandidate?.code, 0);
        const candidateLooksSuccess = parsedCandidate?.code === undefined || candidateCode === 0;
        if (candidateResp.ok && candidateUrl && candidateLooksSuccess) {
          break;
        }
      }
    }
  }

  const parsed = launchResp.payload && typeof launchResp.payload === "object" ? launchResp.payload : {};  const providerUrl = extractProviderLaunchUrl(parsed);
  const upstreamCode = toNum(parsed?.code, 0);
  const codeLooksSuccess = parsed?.code === undefined || upstreamCode === 0;
  if (launchResp.ok && providerUrl && codeLooksSuccess) {
    return {
      ok: true,
      url: providerUrl,
      meta: {
        providerCode: effectiveVendor,
        externalUserId,
        upstreamCode,
        tokenRefreshed,
      },
    };
  }

  const status = launchResp.status || 0;
  const isAuthFailure = status === 401 || status === 403;
  const parsedMessage =
    String(
      parsed?.msg ||
      parsed?.message ||
      parsed?.error ||
      (isAuthFailure ? "Provider session expired. Please refresh credentials/token." : "")
    ).trim();
  return {
    ok: false,
    message: parsedMessage || `Provider launch failed (${status || "request"})`,
    status,
    raw: String(launchResp.text || "").slice(0, 400),
    code: parsed?.code,
    tokenRefreshed,
  };
};
const CASINO_LAUNCH_URL_CACHE_TTL_MS = Math.max(2000, toNum(process.env.CASINO_LAUNCH_URL_CACHE_TTL_MS, 12000));
const CASINO_LAUNCH_INFLIGHT_TTL_MS = Math.max(2000, toNum(process.env.CASINO_LAUNCH_INFLIGHT_TTL_MS, 15000));
const casinoLaunchUrlCache = new Map();
const casinoLaunchInFlight = new Map();
const buildCasinoLaunchKey = ({ userId, gameCode, vendorCode }) => {
  const uid = String(userId || "").trim();
  const code = normalizeObjectKey(gameCode);
  const vendor = Math.max(1, toNum(vendorCode, 18));
  return `${uid}::${code}::${vendor}`;
};
const pruneCasinoLaunchCaches = () => {
  const now = Date.now();
  for (const [key, row] of casinoLaunchUrlCache.entries()) {
    if (!row || toNum(row.expiresAt, 0) <= now) casinoLaunchUrlCache.delete(key);
  }
  for (const [key, row] of casinoLaunchInFlight.entries()) {
    if (!row || toNum(row.expiresAt, 0) <= now) casinoLaunchInFlight.delete(key);
  }
};
const getCachedCasinoLaunchUrl = (cacheKey) => {
  const row = casinoLaunchUrlCache.get(cacheKey);
  if (!row) return "";
  if (toNum(row.expiresAt, 0) <= Date.now()) {
    casinoLaunchUrlCache.delete(cacheKey);
    return "";
  }
  return sanitizeCasinoPlayUrl(row.url);
};
const setCachedCasinoLaunchUrl = (cacheKey, url) => {
  const cleanUrl = sanitizeCasinoPlayUrl(url);
  if (!cacheKey || !cleanUrl) return;
  casinoLaunchUrlCache.set(cacheKey, {
    url: cleanUrl,
    expiresAt: Date.now() + CASINO_LAUNCH_URL_CACHE_TTL_MS,
  });
  if (casinoLaunchUrlCache.size > 2000) pruneCasinoLaunchCaches();
};
const getOrCreateCasinoLaunchInFlight = async (cacheKey, createPromise) => {
  const now = Date.now();
  const existing = casinoLaunchInFlight.get(cacheKey);
  if (existing && toNum(existing.expiresAt, 0) > now && existing.promise) {
    return existing.promise;
  }
  const promise = Promise.resolve()
    .then(createPromise)
    .finally(() => {
      const current = casinoLaunchInFlight.get(cacheKey);
      if (current && current.promise === promise) casinoLaunchInFlight.delete(cacheKey);
    });
  casinoLaunchInFlight.set(cacheKey, {
    promise,
    expiresAt: now + CASINO_LAUNCH_INFLIGHT_TTL_MS,
  });
  if (casinoLaunchInFlight.size > 2000) pruneCasinoLaunchCaches();
  return promise;
};
const arrayFromCatalogJson = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  if (Array.isArray(payload.gameLists)) return payload.gameLists;
  if (Array.isArray(payload.games)) return payload.games;
  if (Array.isArray(payload.data)) return payload.data;
  return [];
};
const normalizeProviderCatalogItem = (raw, fileVendor, idx = 0) => {
  if (!raw || typeof raw !== "object") return null;
  const gameCode = String(raw.gameID || raw.gameCode || raw.code || raw.identifier || raw.id || "").trim();
  if (!gameCode) return null;
  const gameName = String(raw.gameNameEn || raw.gameName || raw.name || raw.title || gameCode).trim();
  const imageUrl = String(raw.image || raw.imageUrl || raw.img || raw.icon || raw.image_url || "").trim();
  const provider = String(raw.provider || fileVendor || "APIKIT").trim();
  const providerId = String(raw.vendorCode || raw.provider_id || provider).trim();
  return {
    id: `pc_${normalizeObjectKey(gameCode)}_${idx}`,
    identifier: normalizeObjectKey(gameCode),
    provider_id: providerId || provider,
    provider: provider || providerId,
    game_name: gameName || gameCode,
    image_url: imageUrl,
    live_category: "API",
    slot_category: "API",
    homepage_code: Math.max(1, toNum(raw.homepage_code, 12)),
  };
};
const readProviderLocalCatalogGames = () => {
  const items = [];
  for (const dir of PROVIDER_LOCAL_CATALOG_DIRS) {
    let files = [];
    try {
      files = fs
        .readdirSync(dir)
        .filter((f) => f.toLowerCase().endsWith(".json"))
        .map((f) => path.join(dir, f));
    } catch {
      files = [];
    }
    for (const file of files) {
      const fileVendor = path.basename(file, path.extname(file)).toLowerCase();
      try {
        const parsed = safeParse(fs.readFileSync(file, "utf8"), null);
        const list = arrayFromCatalogJson(parsed);
        list.forEach((entry, idx) => {
          const normalized = normalizeProviderCatalogItem(entry, fileVendor, idx);
          if (normalized) items.push(normalized);
        });
      } catch {}
    }
  }
  return mergeGamesByIdentifier(items, []);
};
const importProviderLocalCatalogToDb = () => {
  const games = readProviderLocalCatalogGames();
  let imported = 0;
  const upsertCasinoGameStmt = db.prepare(
    "INSERT INTO casino_games (id,identifier,provider_id,provider,game_name,image_url,live_category,slot_category,homepage_code) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(identifier) DO UPDATE SET provider_id=excluded.provider_id,provider=excluded.provider,game_name=excluded.game_name,image_url=excluded.image_url,live_category=excluded.live_category,slot_category=excluded.slot_category,homepage_code=excluded.homepage_code"
  );
  const importTxn = db.transaction((rows) => {
    for (const g of rows) {
      upsertCasinoGameStmt.run(
        String(g.id || id("cg_")),
        String(g.identifier || ""),
        String(g.provider_id || ""),
        String(g.provider || ""),
        String(g.game_name || ""),
        String(g.image_url || ""),
        String(g.live_category || ""),
        String(g.slot_category || ""),
        Math.max(1, toNum(g.homepage_code, 12))
      );
      imported += 1;
    }
  });
  try {
    importTxn(games);
  } catch {}
  if (imported > 0) bumpCasinoCatalogVersion();
  return { imported, total: games.length, dirs: PROVIDER_LOCAL_CATALOG_DIRS };
};
const normalizeApiGameItem = (raw, index = 0, cfg = defaultGameApiSettings()) => {
  if (!raw || typeof raw !== "object") return null;
  const code = normalizeObjectKey(raw?.[cfg.gameCodeKey] ?? raw?.gameCode ?? raw?.identifier ?? raw?.id);
  if (!code) return null;
  const name = String(raw?.[cfg.gameNameKey] ?? raw?.gameName ?? raw?.name ?? code).trim();
  const image = String(raw?.[cfg.gameImageKey] ?? raw?.image ?? raw?.image_url ?? "").trim();
  const provider = String((raw?.[cfg.gameProviderKey] ?? raw?.provider ?? cfg.providerName) || "APIKIT").trim();
  return normalizeCasinoGameRecord({
    _id: `api_${code}_${index}`,
    id: `api_${code}_${index}`,
    identifier: code,
    provider_id: provider || "APIKIT",
    provider: provider || "APIKIT",
    game_name: name || code,
    image_url: image,
    game_images: image,
    live_category: "API",
    slot_category: "API",
    homepage_code: Math.max(1, toNum(raw?.homepage_code, cfg.homepageCode || 12)),
  });
};
const normalizeCasinoGameRecord = (raw, index = 0) => {
  if (!raw || typeof raw !== "object") return null;
  const identifier = normalizeObjectKey(raw.identifier || raw.gameCode || raw.id || raw._id || "");
  if (!identifier) return null;
  const gameId = firstNonEmpty(raw._id, raw.id, `cg_${identifier}_${index}`);
  const imageUrl = pickCasinoGameImage(raw.image_url, raw.game_images, raw.image);
  const liveCategory = firstNonEmpty(raw.live_category, raw.category, "API");
  return {
    _id: gameId,
    id: gameId,
    identifier,
    provider_id: firstNonEmpty(raw.provider_id, raw.provider, "APIKIT"),
    provider: firstNonEmpty(raw.provider, raw.provider_id, "APIKIT"),
    game_name: firstNonEmpty(raw.game_name, raw.name, raw.title, identifier),
    image_url: imageUrl,
    game_images: pickCasinoGameImage(raw.game_images, imageUrl, raw.image_url, raw.image),
    live_category: liveCategory,
    slot_category: firstNonEmpty(raw.slot_category, raw.category, liveCategory, "API"),
    homepage_code: Math.max(1, toNum(raw.homepage_code, 12)),
  };
};
const mergeGamesByIdentifier = (primary, secondary) => {
  const map = new Map();
  for (const [index, item] of (Array.isArray(secondary) ? secondary : []).entries()) {
    const normalized = normalizeCasinoGameRecord(item, index);
    if (!normalized) continue;
    map.set(normalized.identifier, normalized);
  }
  for (const [index, item] of (Array.isArray(primary) ? primary : []).entries()) {
    const normalized = normalizeCasinoGameRecord(item, index);
    if (!normalized) continue;
    const prev = map.get(normalized.identifier);
    if (!prev) {
      map.set(normalized.identifier, normalized);
      continue;
    }
    map.set(normalized.identifier, {
      ...prev,
      ...normalized,
      provider_id: firstNonEmpty(normalized.provider_id, prev.provider_id, "APIKIT"),
      provider: firstNonEmpty(normalized.provider, prev.provider, "APIKIT"),
      game_name: firstNonEmpty(normalized.game_name, prev.game_name, normalized.identifier),
      image_url: pickCasinoGameImage(normalized.image_url, normalized.game_images, prev.image_url, prev.game_images),
      game_images: pickCasinoGameImage(
        normalized.game_images,
        normalized.image_url,
        prev.game_images,
        prev.image_url
      ),
      live_category: firstNonEmpty(normalized.live_category, prev.live_category, "API"),
      slot_category: firstNonEmpty(normalized.slot_category, prev.slot_category, normalized.live_category, "API"),
      homepage_code: Math.max(1, toNum(normalized.homepage_code, prev.homepage_code || 12)),
    });
  }
  return Array.from(map.values()).sort((a, b) =>
    String(a?.game_name || a?.identifier || "").localeCompare(String(b?.game_name || b?.identifier || ""))
  );
};
const syncGameApiCatalog = async () => {
  const cfg = readGameApiSettings();
  if (!cfg.catalogSyncEnabled) return { success: false, message: "catalogSyncEnabled is false", count: 0 };
  if (!cfg.catalogUrl) return { success: false, message: "catalogUrl missing", count: 0 };

  const requestResult = await runTimedRequest({
    url: cfg.catalogUrl,
    method: cfg.requestMethod || "GET",
    headers: parseObject(cfg.requestHeaders, {}),
    body: cfg.requestBody,
    timeoutMs: cfg.requestTimeoutMs || 20000,
  });
  if (!requestResult.ok) {
    const status = requestResult.status || 0;
    const isAuthFailure = status === 401 || status === 403;
    return {
      success: false,
      message: requestResult.message || (isAuthFailure ? `catalog auth failed (${status})` : `catalog fetch failed (${status})`),
      status,
      count: 0,
      raw: String(requestResult.text || "").slice(0, 400),
    };
  }

  const payload = requestResult.payload;
  if (!payload || typeof payload !== "object") {
    return { success: false, message: "catalog response is not valid JSON", count: 0 };
  }

  const scoped = cfg.responseDataPath ? getByPath(payload, cfg.responseDataPath) : payload;
  const rawList = arrayFromUnknown(scoped);
  const normalized = rawList
    .map((x, i) => normalizeApiGameItem(x, i, cfg))
    .filter(Boolean);
  if (!normalized.length) {
    const cache = readGameApiCatalogCacheEnvelope();
    return {
      success: false,
      message: "catalog response contains no valid games",
      count: 0,
      retainedCount: cache.games.length,
      empty: true,
    };
  }

  const cache = writeGameApiCatalogCacheEnvelope(normalized, {
    source: cfg.catalogUrl,
    syncedAt: nowIso(),
  });
  return {
    success: true,
    message: "catalog synced",
    count: normalized.length,
    syncedAt: cache.syncedAt,
  };
};
const casinoPlayMapFileCache = {
  loadedAt: 0,
  value: {},
};
const readCasinoPlayMap = () => {
  const now = Date.now();
  if (casinoPlayMapFileCache.loadedAt && now - casinoPlayMapFileCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS) {
    return casinoPlayMapFileCache.value;
  }
  let map = {};
  if (fs.existsSync(CASINO_PLAY_MAP_PATH)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(CASINO_PLAY_MAP_PATH, "utf8"));
      map = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      map = {};
    }
  }
  casinoPlayMapFileCache.loadedAt = now;
  casinoPlayMapFileCache.value = map;
  return map;
};
const resolveCasinoPlayUrl = (gameCode) => {
  const normalized = normalizeObjectKey(gameCode);
  if (!normalized) return "";

  const mapping = readCasinoPlayMap();
  const direct = mapping[normalized] ?? mapping[String(gameCode || "").trim()];
  const mapped = sanitizeCasinoPlayUrl(direct);
  if (mapped) return mapped;

  const fromGameApiConfig = resolveByGameApiSettings(normalized);
  if (fromGameApiConfig) return fromGameApiConfig;

  if (CASINO_PLAY_URL_TEMPLATE) {
    const urlFromTemplate = CASINO_PLAY_URL_TEMPLATE.replace(/\{gameCode\}/g, encodeURIComponent(normalized));
    return sanitizeCasinoPlayUrl(urlFromTemplate);
  }

  return "";
};
const normalizeCasinoGameHealthEntry = (raw = {}) => {
  const out = raw && typeof raw === "object" ? raw : {};
  const successCount = Math.max(0, toNum(out.successCount, 0));
  const failCount = Math.max(0, toNum(out.failCount, 0));
  const lastOkAtRaw = String(out.lastOkAt || "").trim();
  const lastFailAtRaw = String(out.lastFailAt || "").trim();
  const hiddenUntilRaw = String(out.hiddenUntil || "").trim();
  return {
    successCount,
    failCount,
    lastOkAt: parseIsoToMs(lastOkAtRaw) ? lastOkAtRaw : null,
    lastFailAt: parseIsoToMs(lastFailAtRaw) ? lastFailAtRaw : null,
    hiddenUntil: parseIsoToMs(hiddenUntilRaw) ? hiddenUntilRaw : null,
    lastError: String(out.lastError || "").trim().slice(0, 300),
  };
};
const normalizeCasinoGameHealthStore = (raw) => {
  const src = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const byCodeRaw = src.byCode && typeof src.byCode === "object" && !Array.isArray(src.byCode) ? src.byCode : {};
  const byCode = {};
  for (const [code, row] of Object.entries(byCodeRaw)) {
    const normalizedCode = normalizeObjectKey(code);
    if (!normalizedCode) continue;
    byCode[normalizedCode] = normalizeCasinoGameHealthEntry(row);
  }
  const updatedAtRaw = String(src.updatedAt || "").trim();
  return {
    updatedAt: parseIsoToMs(updatedAtRaw) ? updatedAtRaw : null,
    byCode,
  };
};
const casinoGameHealthFileCache = {
  loadedAt: 0,
  value: normalizeCasinoGameHealthStore({}),
};
const readCasinoGameHealthStore = () => {
  ensureJsonFile(CASINO_GAME_HEALTH_PATH, { updatedAt: null, byCode: {} });
  const now = Date.now();
  if (casinoGameHealthFileCache.loadedAt && now - casinoGameHealthFileCache.loadedAt < CASINO_GAME_HEALTH_CACHE_TTL_MS) {
    return casinoGameHealthFileCache.value;
  }
  const parsed = readJsonFile(CASINO_GAME_HEALTH_PATH, { updatedAt: null, byCode: {} });
  const normalized = normalizeCasinoGameHealthStore(parsed);
  casinoGameHealthFileCache.loadedAt = now;
  casinoGameHealthFileCache.value = normalized;
  return normalized;
};
const writeCasinoGameHealthStore = (nextStore) => {
  const normalized = normalizeCasinoGameHealthStore(nextStore);
  writeJsonFile(CASINO_GAME_HEALTH_PATH, normalized);
  casinoGameHealthFileCache.loadedAt = Date.now();
  casinoGameHealthFileCache.value = normalized;
  return normalized;
};
const normalizeCasinoGameControlEntry = (raw = {}) => {
  const src = raw && typeof raw === "object" ? raw : {};
  const updatedAtRaw = String(src.updatedAt || "").trim();
  return {
    disabled: !!src.disabled,
    reason: String(src.reason || "").trim().slice(0, 200),
    updatedAt: parseIsoToMs(updatedAtRaw) ? updatedAtRaw : null,
  };
};
const normalizeCasinoGameControlStore = (raw) => {
  const src = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const byCodeRaw = src.byCode && typeof src.byCode === "object" && !Array.isArray(src.byCode) ? src.byCode : {};
  const byCode = {};
  for (const [code, row] of Object.entries(byCodeRaw)) {
    const normalizedCode = normalizeObjectKey(code);
    if (!normalizedCode) continue;
    const normalized = normalizeCasinoGameControlEntry(row);
    if (!normalized.disabled) continue;
    byCode[normalizedCode] = normalized;
  }
  const updatedAtRaw = String(src.updatedAt || "").trim();
  return {
    updatedAt: parseIsoToMs(updatedAtRaw) ? updatedAtRaw : null,
    byCode,
  };
};
const casinoGameControlFileCache = {
  loadedAt: 0,
  value: normalizeCasinoGameControlStore({}),
};
const readCasinoGameControlStore = () => {
  ensureJsonFile(CASINO_GAME_CONTROL_PATH, { updatedAt: null, byCode: {} });
  const now = Date.now();
  if (casinoGameControlFileCache.loadedAt && now - casinoGameControlFileCache.loadedAt < SETTINGS_FILE_CACHE_TTL_MS) {
    return casinoGameControlFileCache.value;
  }
  const parsed = readJsonFile(CASINO_GAME_CONTROL_PATH, { updatedAt: null, byCode: {} });
  const normalized = normalizeCasinoGameControlStore(parsed);
  casinoGameControlFileCache.loadedAt = now;
  casinoGameControlFileCache.value = normalized;
  return normalized;
};
const writeCasinoGameControlStore = (nextStore) => {
  const normalized = normalizeCasinoGameControlStore(nextStore);
  writeJsonFile(CASINO_GAME_CONTROL_PATH, normalized);
  casinoGameControlFileCache.loadedAt = Date.now();
  casinoGameControlFileCache.value = normalized;
  return normalized;
};
const updateCasinoGameManualDisableState = (gameCode, disabled, reason = "") => {
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return false;
  const store = readCasinoGameControlStore();
  const nextByCode = { ...(store.byCode || {}) };
  if (disabled) {
    nextByCode[normalizedCode] = {
      disabled: true,
      reason: String(reason || "").trim().slice(0, 200),
      updatedAt: nowIso(),
    };
  } else {
    delete nextByCode[normalizedCode];
  }
  writeCasinoGameControlStore({
    ...store,
    updatedAt: nowIso(),
    byCode: nextByCode,
  });
  return true;
};
const looksLikeGameUnavailableError = (message) => {
  const text = String(message || "").trim().toLowerCase();
  if (!text) return false;
  if (
    text.includes("authentication") ||
    text.includes("x-api-token") ||
    text.includes("x-secret-key") ||
    text.includes("token") ||
    text.includes("session expired") ||
    text.includes("unauthorized") ||
    text.includes("forbidden") ||
    text.includes("player account") ||
    text.includes("limited to a-z")
  ) {
    return false;
  }
  if (
    text.includes("not currently available") ||
    text.includes("game is currently not available") ||
    text.includes("unknown or unconfigured game provider") ||
    text.includes("verify vendorcode") ||
    text.includes("vendor code") ||
    text.includes("game not found") ||
    text.includes("invalid game") ||
    text.includes("no launch url")
  ) {
    return true;
  }
  return false;
};
const hideFailedCasinoGame = (gameCode, message = "") => {
  if (!CASINO_HIDE_FAILED_GAMES) return;
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return;
  const store = readCasinoGameHealthStore();
  const row = normalizeCasinoGameHealthEntry(store.byCode[normalizedCode] || {});
  row.failCount = Math.max(0, toNum(row.failCount, 0)) + 1;
  row.lastFailAt = nowIso();
  if (message) row.lastError = String(message).trim().slice(0, 300);
  if (row.failCount >= CASINO_FAILED_GAME_MIN_FAILS) {
    row.hiddenUntil = new Date(Date.now() + CASINO_FAILED_GAME_HIDE_MINUTES * 60 * 1000).toISOString();
  }
  const next = {
    ...store,
    updatedAt: nowIso(),
    byCode: {
      ...(store.byCode || {}),
      [normalizedCode]: row,
    },
  };
  writeCasinoGameHealthStore(next);
};
const markCasinoGameWorking = (gameCode) => {
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return;
  const store = readCasinoGameHealthStore();
  const row = normalizeCasinoGameHealthEntry(store.byCode[normalizedCode] || {});
  row.successCount = Math.max(0, toNum(row.successCount, 0)) + 1;
  row.lastOkAt = nowIso();
  row.hiddenUntil = null;
  row.lastError = "";
  row.failCount = 0;
  const next = {
    ...store,
    updatedAt: nowIso(),
    byCode: {
      ...(store.byCode || {}),
      [normalizedCode]: row,
    },
  };
  writeCasinoGameHealthStore(next);
};
const isCasinoGameHiddenByHealth = (gameCode, healthStore = null) => {
  if (!CASINO_HIDE_FAILED_GAMES) return false;
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return false;
  const store = healthStore || readCasinoGameHealthStore();
  const row = store.byCode?.[normalizedCode];
  if (!row) return false;
  const hiddenUntilMs = parseIsoToMs(row.hiddenUntil);
  return !!hiddenUntilMs && hiddenUntilMs > Date.now();
};
const isCasinoGameManuallyDisabled = (gameCode, controlStore = null) => {
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return false;
  const store = controlStore || readCasinoGameControlStore();
  const row = store.byCode?.[normalizedCode];
  return !!row?.disabled;
};
const hasDirectCasinoPlayMapUrl = (gameCode, playMap = null) => {
  const normalized = normalizeObjectKey(gameCode);
  if (!normalized) return false;
  const mapping = playMap || readCasinoPlayMap();
  const direct = mapping[normalized] ?? mapping[String(gameCode || "").trim()];
  return !!sanitizeCasinoPlayUrl(direct);
};
const hasCasinoGameWorkingEvidence = (gameCode, { healthStore = null, playMap = null } = {}) => {
  const normalizedCode = normalizeObjectKey(gameCode);
  if (!normalizedCode) return false;
  if (CASINO_WORKING_EVIDENCE_TRUST_STATIC_MAP && hasDirectCasinoPlayMapUrl(normalizedCode, playMap)) return true;
  const row = (healthStore || readCasinoGameHealthStore()).byCode?.[normalizedCode];
  if (!row) return false;
  const successCount = Math.max(0, toNum(row.successCount, 0));
  if (successCount <= 0) return false;
  const maxAgeMs = CASINO_WORKING_EVIDENCE_MAX_AGE_HOURS * 60 * 60 * 1000;
  if (!maxAgeMs) return true;
  const lastOkMs = parseIsoToMs(row.lastOkAt);
  if (!lastOkMs) return true;
  return Date.now() - lastOkMs <= maxAgeMs;
};
const casinoProviderWorkingCodeCache = {
  loadedAt: 0,
  byCodeLastAt: new Map(),
};
const readProviderWorkingCodeEvidence = () => {
  const now = Date.now();
  if (
    casinoProviderWorkingCodeCache.loadedAt &&
    now - casinoProviderWorkingCodeCache.loadedAt < CASINO_GAME_HEALTH_CACHE_TTL_MS
  ) {
    return casinoProviderWorkingCodeCache.byCodeLastAt;
  }
  const map = new Map();
  try {
    const rows = db
      .prepare(
        `SELECT lower(trim(game_code)) AS code, MAX(coalesce(updated_at, created_at)) AS last_at
         FROM casino_provider_transactions
         WHERE lower(status)='success' AND trim(coalesce(game_code,'')) <> ''
         GROUP BY lower(trim(game_code))
         ORDER BY datetime(last_at) DESC
         LIMIT 5000`
      )
      .all();
    for (const row of rows) {
      const code = normalizeObjectKey(row?.code || "");
      if (!code) continue;
      const lastAtMs = parseIsoToMs(row?.last_at);
      const prev = toNum(map.get(code), 0);
      if (lastAtMs > prev) map.set(code, lastAtMs);
    }
  } catch {}
  casinoProviderWorkingCodeCache.loadedAt = now;
  casinoProviderWorkingCodeCache.byCodeLastAt = map;
  return map;
};
const prioritizeCasinoRowsByWorkingEvidence = (rows = [], desiredFrontCount = CASINO_FRONTLINE_WORKING_COUNT) => {
  const source = Array.isArray(rows) ? rows : [];
  if (source.length <= 1) return source;
  const targetFrontCount = Math.max(1, toNum(desiredFrontCount, CASINO_FRONTLINE_WORKING_COUNT));
  const healthStore = readCasinoGameHealthStore();
  const playMap = readCasinoPlayMap();
  const providerEvidence = readProviderWorkingCodeEvidence();
  const ranked = source.map((row, index) => {
    const code = normalizeObjectKey(row?.identifier || row?._id || row?.id || row?.gameCode || "");
    const byHealth = hasCasinoGameWorkingEvidence(code, { healthStore, playMap });
    const healthLastOkMs = parseIsoToMs(healthStore.byCode?.[code]?.lastOkAt);
    const providerLastMs = toNum(providerEvidence.get(code), 0);
    const proven = byHealth || providerLastMs > 0;
    const evidenceMs = Math.max(healthLastOkMs, providerLastMs);
    return { row, index, proven, evidenceMs };
  });
  ranked.sort((a, b) => {
    if (a.proven !== b.proven) return a.proven ? -1 : 1;
    if (a.evidenceMs !== b.evidenceMs) return b.evidenceMs - a.evidenceMs;
    return a.index - b.index;
  });
  if (ranked.filter((x) => x.proven).length >= targetFrontCount) {
    const proven = ranked.filter((x) => x.proven);
    const rest = ranked.filter((x) => !x.proven);
    return [...proven, ...rest].map((x) => x.row);
  }
  return ranked.map((x) => x.row);
};
const countCasinoFrontlineWorkingRows = (rows = [], frontCount = CASINO_FRONTLINE_WORKING_COUNT) => {
  const source = Array.isArray(rows) ? rows.slice(0, Math.max(1, toNum(frontCount, CASINO_FRONTLINE_WORKING_COUNT))) : [];
  if (!source.length) return 0;
  const healthStore = readCasinoGameHealthStore();
  const playMap = readCasinoPlayMap();
  const providerEvidence = readProviderWorkingCodeEvidence();
  let count = 0;
  for (const row of source) {
    const code = normalizeObjectKey(row?.identifier || row?._id || row?.id || row?.gameCode || "");
    if (!code) continue;
    const byHealth = hasCasinoGameWorkingEvidence(code, { healthStore, playMap });
    const byProvider = toNum(providerEvidence.get(code), 0) > 0;
    if (byHealth || byProvider) count += 1;
  }
  return count;
};
const casinoWorkingWarmupInFlight = new Map();
const warmCasinoWorkingEvidenceForUser = async ({
  user,
  targetCount = CASINO_FRONTLINE_WORKING_COUNT,
  maxAttempts = 80,
} = {}) => {
  if (!user?.id || !providerApiActive(readProviderApiSettings())) {
    return { ok: false, reason: "missing_user_or_provider_config", tested: 0, newlyWorking: 0, knownWorking: 0 };
  }
  const desired = Math.max(1, Math.min(80, toNum(targetCount, CASINO_FRONTLINE_WORKING_COUNT)));
  const maxTry = Math.max(desired, Math.min(400, toNum(maxAttempts, 80)));
  const cacheKey = `${String(user.id)}::${desired}`;
  const existing = casinoWorkingWarmupInFlight.get(cacheKey);
  if (existing) return existing;

  const promise = (async () => {
    const wallet = ensureWallet(user.id);
    const controlStore = readCasinoGameControlStore();
    const healthStore = readCasinoGameHealthStore();
    const playMap = readCasinoPlayMap();
    const providerEvidence = readProviderWorkingCodeEvidence();
    const candidateRows = readMergedCasinoGames()
      .map((row) => ({
        identifier: String(row?.identifier || row?._id || row?.id || row?.gameCode || "").trim(),
        provider_id: row?.provider_id,
        provider: row?.provider,
        image_url: pickCasinoGameImage(row?.image_url, row?.game_images, row?.image),
      }))
      .filter((row) => {
        const code = normalizeObjectKey(row.identifier);
        if (!code) return false;
        if (isCasinoGameManuallyDisabled(code, controlStore)) return false;
        if (CASINO_HIDE_FAILED_GAMES && isCasinoGameHiddenByHealth(code, healthStore)) return false;
        if (CASINO_HIDE_PLACEHOLDER_IMAGES && isCasinoPlaceholderImage(row.image_url)) return false;
        return true;
      });

    const rankedCandidates = prioritizeCasinoRowsByWorkingEvidence(candidateRows, desired);
    const knownWorkingCodes = new Set();
    for (const row of rankedCandidates) {
      const code = normalizeObjectKey(row?.identifier || "");
      if (!code) continue;
      const byHealth = hasCasinoGameWorkingEvidence(code, { healthStore, playMap });
      const byProvider = toNum(providerEvidence.get(code), 0) > 0;
      if (byHealth || byProvider) knownWorkingCodes.add(code);
    }
    let tested = 0;
    let newlyWorking = 0;
    for (const row of rankedCandidates) {
      if (knownWorkingCodes.size >= desired || tested >= maxTry) break;
      const code = normalizeObjectKey(row?.identifier || "");
      if (!code || knownWorkingCodes.has(code)) continue;
      tested += 1;
      const vendorCode = resolveVendorCodeForGame(code, row?.provider_id || row?.provider || "");
      const probe = await requestProviderLaunchUrl({
        userId: user.id,
        username: user.username,
        balance: toNum(wallet.balance, 0),
        gameCode: code,
        vendorCode,
        language: 1,
        phonetype: 1,
        timestamp: Date.now(),
        random: crypto.randomUUID().replace(/-/g, "").slice(0, 20),
      });
      if (probe?.ok && probe?.url) {
        markCasinoGameWorking(code);
        knownWorkingCodes.add(code);
        newlyWorking += 1;
        continue;
      }
      const failMessage = String(probe?.message || "").trim();
      if (looksLikeGameUnavailableError(failMessage)) {
        hideFailedCasinoGame(code, failMessage);
      }
    }
    return {
      ok: true,
      userId: user.id,
      targetCount: desired,
      knownWorking: knownWorkingCodes.size,
      newlyWorking,
      tested,
      reachedTarget: knownWorkingCodes.size >= desired,
    };
  })().finally(() => {
    casinoWorkingWarmupInFlight.delete(cacheKey);
  });

  casinoWorkingWarmupInFlight.set(cacheKey, promise);
  return promise;
};
const dedupeCasinoRowsForDisplay = (rows = []) => {
  const source = Array.isArray(rows) ? rows : [];
  const seenByIdentifier = new Set();
  const seenProviderImage = new Set();
  const out = [];
  for (const game of source) {
    const code = normalizeObjectKey(game?.identifier || game?._id || game?.id || game?.gameCode || "");
    if (!code || seenByIdentifier.has(code)) continue;
    seenByIdentifier.add(code);
    const providerKey = resolveCasinoProviderFilterKey(game?.provider_id || game?.provider || "");
    const image = pickCasinoGameImage(game?.image_url, game?.game_images, game?.image);
    const imageKey = normalizeLocalAssetPath(image).toLowerCase();
    if (providerKey && imageKey) {
      const providerImageKey = `${providerKey}|${imageKey}`;
      if (seenProviderImage.has(providerImageKey)) continue;
      seenProviderImage.add(providerImageKey);
    }
    out.push(game);
  }
  return out;
};
const filterCasinoGamesForDisplay = (rows = []) => {
  const source = Array.isArray(rows) ? rows : [];
  const healthStore = readCasinoGameHealthStore();
  const controlStore = readCasinoGameControlStore();
  const playMap = readCasinoPlayMap();
  const filtered = source.filter((game) => {
    const code = normalizeObjectKey(game?.identifier || game?._id || game?.id || game?.gameCode || "");
    if (!code) return false;
    if (isCasinoGameManuallyDisabled(code, controlStore)) return false;
    if (CASINO_HIDE_FAILED_GAMES && isCasinoGameHiddenByHealth(code, healthStore)) return false;
    if (CASINO_HIDE_PLACEHOLDER_IMAGES) {
      const image = pickCasinoGameImage(game?.image_url, game?.game_images, game?.image);
      if (isCasinoPlaceholderImage(image)) return false;
    }
    return true;
  });
  if (!CASINO_REQUIRE_WORKING_GAMES) {
    return dedupeCasinoRowsForDisplay(filtered);
  }
  const workingOnly = filtered.filter((game) => {
    const code = normalizeObjectKey(game?.identifier || game?._id || game?.id || game?.gameCode || "");
    if (!code) return false;
    return hasCasinoGameWorkingEvidence(code, { healthStore, playMap });
  });
  if (workingOnly.length > 0 || CASINO_WORKING_ONLY_STRICT) {
    return dedupeCasinoRowsForDisplay(workingOnly);
  }
  return dedupeCasinoRowsForDisplay(filtered);
};
const filterCasinoRowsByProvider = (rows = [], providerFilterValue = "") => {
  const source = Array.isArray(rows) ? rows : [];
  const wanted = resolveCasinoProviderFilterKey(providerFilterValue);
  const wantedRaw = normalizeCompactToken(providerFilterValue);
  if (!wanted && !wantedRaw) return source;
  const strict = source.filter((game) => gameMatchesProviderFilter(game, providerFilterValue));
  if (strict.length) return strict;
  if (!wantedRaw) return strict;
  return source.filter((game) => {
    const tokens = [game?.provider_id, game?.provider].map((value) => normalizeCompactToken(value)).filter(Boolean);
    return tokens.some((token) => token.includes(wantedRaw) || wantedRaw.includes(token));
  });
};

const parseJsonObject = (raw, fallback = {}) => {
  if (!raw) return fallback;
  const parsed = safeParse(raw, fallback);
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : fallback;
};
const otpMessage = (code) => OTP_SMS_TEMPLATE.replace(/\{otp\}/g, String(code || ""));
const otpCode = () => String(Math.floor(Math.random() * Math.pow(10, OTP_LENGTH))).padStart(OTP_LENGTH, "0");
const normalizePhone = (countryCode, mobile) => {
  const ccRaw = String(countryCode || "").trim();
  const ccDigits = ccRaw.replace(/[^\d]/g, "");
  const mobileDigits = String(mobile || "").replace(/[^\d]/g, "");
  if (!mobileDigits) return "";
  const cc = ccDigits ? `+${ccDigits}` : "";
  return `${cc}${mobileDigits}`;
};
const sendOtpSms = async ({ countryCode, mobile, code }) => {
  const to = normalizePhone(countryCode, mobile);
  if (!to) return { delivered: false, error: "Invalid mobile number" };

  if (OTP_SMS_PROVIDER === "twilio") {
    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER) {
      return { delivered: false, error: "Twilio config missing" };
    }
    const form = new URLSearchParams();
    form.set("To", to);
    form.set("From", TWILIO_FROM_NUMBER);
    form.set("Body", otpMessage(code));
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64");
    const resp = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });
    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return { delivered: false, error: payload?.message || `Twilio send failed (${resp.status})` };
    }
    return { delivered: true, provider: "twilio", messageId: payload?.sid || null };
  }

  if (OTP_SMS_API_URL) {
    const headers = {
      "Content-Type": "application/json",
      ...parseJsonObject(OTP_SMS_API_HEADERS_JSON, {}),
    };
    if (OTP_SMS_API_TOKEN && !headers.Authorization) headers.Authorization = `Bearer ${OTP_SMS_API_TOKEN}`;

    const body = {
      to,
      mobile: String(mobile || "").replace(/[^\d]/g, ""),
      countryCode: String(countryCode || "").trim(),
      otp: String(code || ""),
      message: otpMessage(code),
    };
    const resp = await fetch(OTP_SMS_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return { delivered: false, error: payload?.message || `SMS gateway failed (${resp.status})` };
    }
    return {
      delivered: true,
      provider: OTP_SMS_PROVIDER || "generic",
      messageId: payload?.sid || payload?.messageId || payload?.id || null,
    };
  }

  return { delivered: false, error: "No OTP SMS gateway configured" };
};

const syncOtpToMysql = async ({ phone, code, attempts, verified, expiresAt, createdAt, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO otp_codes (phone,code,attempts,verified,expires_at,created_at,updated_at)
     VALUES (?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       code=VALUES(code),
       attempts=VALUES(attempts),
       verified=VALUES(verified),
       expires_at=VALUES(expires_at),
       updated_at=VALUES(updated_at)`,
    [phone, code, attempts, verified, expiresAt, createdAt, updatedAt]
  );
};
const syncUserToMysql = async ({ id, username, password, role, level, parentId, sessionId, createdAt, updatedAt, minBet = 0, maxBet = 0, creditLimit = 0, partnershipRemaining = 100 }) => {
  await mysqlExec(
    `INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at,min_bet,max_bet,credit_limit,partnership_remaining)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       password=VALUES(password),
       role=VALUES(role),
       level=VALUES(level),
       parent_id=VALUES(parent_id),
       session_id=VALUES(session_id),
       min_bet=VALUES(min_bet),
       max_bet=VALUES(max_bet),
       credit_limit=VALUES(credit_limit),
       partnership_remaining=VALUES(partnership_remaining),
       updated_at=VALUES(updated_at)`,
    [id, username, password, role, level, parentId, sessionId, createdAt, updatedAt, minBet, maxBet, creditLimit, partnershipRemaining]
  );
};
const syncUserPartnershipsToMysql = async ({ userId, partnerships = [] }) => {
  if (!mysqlPool) return;
  await mysqlExec("DELETE FROM user_partnerships WHERE user_id=?", [userId]);
  const insert = `INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage,created_at,updated_at) VALUES (?,?,?,?,?,?)`;
  const now = nowIso();
  for (const partnership of partnerships) {
    await mysqlExec(insert, [partnership.id || id("up_"), userId, partnership.partnerId, partnership.sharePercentage, partnership.createdAt || now, partnership.updatedAt || now]);
  }
};
const syncUserProfileToMysql = async ({ userId, dataJson, createdAt, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO user_profiles (user_id,data_json,created_at,updated_at)
     VALUES (?,?,?,?)
     ON DUPLICATE KEY UPDATE
       data_json=VALUES(data_json),
       updated_at=VALUES(updated_at)`,
    [userId, dataJson, createdAt, updatedAt]
  );
};
const syncAdminFeaturePermissionsToMysql = async ({ userId, permissionsJson, createdBy, createdAt, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO admin_feature_permissions (user_id,permissions_json,created_by,created_at,updated_at)
     VALUES (?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       permissions_json=VALUES(permissions_json),
       updated_at=VALUES(updated_at)` ,
    [userId, permissionsJson, createdBy || null, createdAt, updatedAt]
  );
};
const syncWalletToMysql = async ({ userId, balance, exposer, casinoExposer, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at)
     VALUES (?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       balance=VALUES(balance),
       exposer=VALUES(exposer),
       casino_exposer=VALUES(casino_exposer),
       updated_at=VALUES(updated_at)`,
    [userId, balance, exposer, casinoExposer, updatedAt]
  );
};
const syncSessionToMysql = async ({ token, refreshToken, userId, createdAt, expiresAt }) => {
  await mysqlExec(
    `INSERT INTO sessions (token,refresh_token,user_id,created_at,expires_at)
     VALUES (?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       refresh_token=VALUES(refresh_token),
       user_id=VALUES(user_id),
       created_at=VALUES(created_at),
       expires_at=VALUES(expires_at)`,
    [token, refreshToken, userId, createdAt, expiresAt]
  );
};
const syncRegistrationCodeUsageToMysql = async ({ code, usedBy }) => {
  await mysqlExec(
    `UPDATE registration_codes
     SET used_count = used_count + 1,
         last_used_by = ?,
         updated_at = ?
     WHERE code = ?`,
    [usedBy || null, nowIso(), code]
  );
};
const syncSettingToMysql = async (key, value) => {
  await mysqlExec(
    `INSERT INTO settings (\`key\`,value_json,updated_at)
     VALUES (?,?,?)
     ON DUPLICATE KEY UPDATE
       value_json=VALUES(value_json),
       updated_at=VALUES(updated_at)`,
    [key, JSON.stringify(value), nowIso()]
  );
};
const syncBankAccountToMysql = async ({ id, userId, type, dataJson, createdAt, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO bank_accounts (id,user_id,type,data_json,created_at,updated_at)
     VALUES (?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       user_id=VALUES(user_id),
       type=VALUES(type),
       data_json=VALUES(data_json),
       updated_at=VALUES(updated_at)`,
    [id, userId, type, dataJson, createdAt, updatedAt]
  );
};
const deleteBankAccountFromMysql = async (id) => {
  await mysqlExec("DELETE FROM bank_accounts WHERE id=?", [id]);
};
const syncDepositToMysql = async ({ id, userId, type, amount, status, remark, dataJson = "", createdAt, updatedAt }) => {
  if (!mysqlPool) return null;
  const payloadJson = String(dataJson || "");
  if (payloadJson) {
    const withJson = await mysqlExec(
      `INSERT INTO deposits (id,user_id,type,amount,status,remark,data_json,created_at,updated_at)
       VALUES (?,?,?,?,?,?,?,?,?)
       ON DUPLICATE KEY UPDATE
         status=VALUES(status),
         remark=VALUES(remark),
         data_json=VALUES(data_json),
         updated_at=VALUES(updated_at)`,
      [id, userId, type, amount, status, remark, payloadJson, createdAt, updatedAt]
    );
    if (withJson !== null) return withJson;
  }
  return mysqlExec(
    `INSERT INTO deposits (id,user_id,type,amount,status,remark,created_at,updated_at)
     VALUES (?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       status=VALUES(status),
       remark=VALUES(remark),
       updated_at=VALUES(updated_at)`,
    [id, userId, type, amount, status, remark, createdAt, updatedAt]
  );
};
const syncBetToMysql = async ({
  id,
  userId,
  matchId,
  marketId,
  selectionId,
  selectionName,
  odds,
  volume,
  stack,
  pnl,
  exposure,
  marketName,
  isBack,
  eventId,
  type,
  currentMarketOdds,
  ipAddress,
  matchName,
  betOn,
  gtype,
  oddsType,
  status,
  createdAt,
}) => {
  await mysqlExec(
    `INSERT INTO bets (id,user_id,match_id,market_id,selection_id,selection_name,odds,volume,stack,pnl,exposure,market_name,is_back,event_id,type,current_market_odds,ip_address,match_name,bet_on,gtype,odds_type,status,created_at)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       pnl=VALUES(pnl),
       exposure=VALUES(exposure),
       status=VALUES(status)`,
    [
      id,
      userId,
      matchId,
      marketId,
      selectionId,
      selectionName,
      odds,
      volume,
      stack,
      pnl,
      exposure,
      marketName,
      isBack,
      eventId,
      type,
      currentMarketOdds,
      ipAddress,
      matchName,
      betOn,
      gtype,
      oddsType,
      status,
      createdAt,
    ]
  );
};
const deleteBetFromMysql = async (betId) => {
  await mysqlExec("DELETE FROM bets WHERE id=?", [betId]);
};
const syncSportToMysql = async ({ sportId, name, isActive, updatedAt }) => {
  await mysqlExec(
    `INSERT INTO sports (sport_id,name,is_active,updated_at)
     VALUES (?,?,?,?)
     ON DUPLICATE KEY UPDATE
       name=VALUES(name),
       is_active=VALUES(is_active),
       updated_at=VALUES(updated_at)`,
    [sportId, name, isActive ? 1 : 0, updatedAt]
  );
};
const syncMatchToMysql = async ({
  matchId,
  sportId,
  name,
  competitionId,
  competitionName,
  matchDatetime,
  inPlay,
  hasBookmaker,
  hasFancy,
  hasFancy1,
  hasTv,
  status,
  sectionJson,
  externalJson,
  createdAt,
  updatedAt,
}) => {
  await mysqlExec(
    `INSERT INTO matches (match_id,sport_id,name,competition_id,competition_name,match_datetime,in_play,has_bookmaker,has_fancy,has_fancy1,has_tv,status,section_json,external_json,created_at,updated_at)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       sport_id=VALUES(sport_id),
       name=VALUES(name),
       competition_id=VALUES(competition_id),
       competition_name=VALUES(competition_name),
       match_datetime=VALUES(match_datetime),
       in_play=VALUES(in_play),
       has_bookmaker=VALUES(has_bookmaker),
       has_fancy=VALUES(has_fancy),
       has_fancy1=VALUES(has_fancy1),
       has_tv=VALUES(has_tv),
       status=VALUES(status),
       section_json=VALUES(section_json),
       external_json=VALUES(external_json),
       updated_at=VALUES(updated_at)`,
    [
      matchId,
      sportId,
      name,
      competitionId,
      competitionName,
      matchDatetime,
      inPlay ? 1 : 0,
      hasBookmaker ? 1 : 0,
      hasFancy ? 1 : 0,
      hasFancy1 ? 1 : 0,
      hasTv ? 1 : 0,
      status,
      sectionJson,
      externalJson,
      createdAt,
      updatedAt,
    ]
  );
};
const syncCasinoGameToMysql = async ({
  id,
  identifier,
  providerId,
  provider,
  gameName,
  imageUrl,
  liveCategory,
  slotCategory,
  homepageCode,
}) => {
  await mysqlExec(
    `INSERT INTO casino_games (id,identifier,provider_id,provider,game_name,image_url,live_category,slot_category,homepage_code)
     VALUES (?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       provider_id=VALUES(provider_id),
       provider=VALUES(provider),
       game_name=VALUES(game_name),
       image_url=VALUES(image_url),
       live_category=VALUES(live_category),
       slot_category=VALUES(slot_category),
       homepage_code=VALUES(homepage_code)`,
    [
      id,
      identifier,
      providerId,
      provider,
      gameName,
      imageUrl,
      liveCategory,
      slotCategory,
      homepageCode,
    ]
  );
};
const syncAllSqliteDataToMysql = async () => {
  if (!mysqlPool) return { enabled: false };

  const counters = {
    users: 0,
    wallets: 0,
    sessions: 0,
    otpCodes: 0,
    registrationCodes: 0,
    userProfiles: 0,
    adminFeaturePermissions: 0,
    bankAccounts: 0,
    deposits: 0,
    bets: 0,
    sports: 0,
    matches: 0,
    casinoGames: 0,
  };

  const users = db
    .prepare("SELECT id,username,password,role,level,parent_id,session_id,created_at,updated_at,min_bet,max_bet,credit_limit,partnership_remaining FROM users")
    .all();
  for (const u of users) {
    await syncUserToMysql({
      id: u.id,
      username: u.username,
      password: u.password,
      role: u.role,
      level: toNum(u.level, 1),
      parentId: u.parent_id,
      sessionId: toNum(u.session_id, Date.now()),
      createdAt: u.created_at || nowIso(),
      updatedAt: u.updated_at || nowIso(),
      minBet: toNum(u.min_bet, 0),
      maxBet: toNum(u.max_bet, 0),
      creditLimit: toNum(u.credit_limit, 0),
      partnershipRemaining: toNum(u.partnership_remaining, 100),
    });
    await syncUserPartnershipsToMysql({
      userId: u.id,
      partnerships: db.prepare("SELECT id,partner_id AS partnerId,share_percentage AS sharePercentage,created_at AS createdAt,updated_at AS updatedAt FROM user_partnerships WHERE user_id=?").all(u.id),
    });
    counters.users += 1;
  }

  const wallets = db.prepare("SELECT user_id,balance,exposer,casino_exposer,updated_at FROM wallets").all();
  for (const w of wallets) {
    await syncWalletToMysql({
      userId: w.user_id,
      balance: toNum(w.balance, 0),
      exposer: toNum(w.exposer, 0),
      casinoExposer: toNum(w.casino_exposer, 0),
      updatedAt: w.updated_at || nowIso(),
    });
    counters.wallets += 1;
  }

  const sessions = db.prepare("SELECT token,refresh_token,user_id,created_at,expires_at FROM sessions").all();
  for (const s of sessions) {
    await syncSessionToMysql({
      token: s.token,
      refreshToken: s.refresh_token,
      userId: s.user_id,
      createdAt: s.created_at || nowIso(),
      expiresAt: toNum(s.expires_at, Date.now() + 24 * 60 * 60 * 1000),
    });
    counters.sessions += 1;
  }

  const otpCodes = db.prepare("SELECT phone,code,attempts,verified,expires_at,created_at FROM otp_codes").all();
  for (const o of otpCodes) {
    await syncOtpToMysql({
      phone: o.phone,
      code: o.code,
      attempts: toNum(o.attempts, 0),
      verified: toNum(o.verified, 0),
      expiresAt: toNum(o.expires_at, 0),
      createdAt: o.created_at || nowIso(),
      updatedAt: nowIso(),
    });
    counters.otpCodes += 1;
  }

  const registrationCodes = db
    .prepare("SELECT code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at FROM registration_codes")
    .all();
  for (const r of registrationCodes) {
    await mysqlExec(
      `INSERT INTO registration_codes (code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at)
       VALUES (?,?,?,?,?,?,?,?,?)
       ON DUPLICATE KEY UPDATE
         description=VALUES(description),
         is_active=VALUES(is_active),
         max_uses=VALUES(max_uses),
         used_count=VALUES(used_count),
         last_used_by=VALUES(last_used_by),
         created_by=VALUES(created_by),
         updated_at=VALUES(updated_at)`,
      [
        r.code,
        r.description || "",
        toNum(r.is_active, 1),
        r.max_uses,
        toNum(r.used_count, 0),
        r.last_used_by,
        r.created_by,
        r.created_at || nowIso(),
        r.updated_at || nowIso(),
      ]
    );
    counters.registrationCodes += 1;
  }

  const profiles = db.prepare("SELECT user_id,data_json,created_at,updated_at FROM user_profiles").all();
  for (const p of profiles) {
    await syncUserProfileToMysql({
      userId: p.user_id,
      dataJson: p.data_json || "{}",
      createdAt: p.created_at || nowIso(),
      updatedAt: p.updated_at || nowIso(),
    });
    counters.userProfiles += 1;
  }

  const featurePermissions = db
    .prepare("SELECT user_id,permissions_json,created_by,created_at,updated_at FROM admin_feature_permissions")
    .all();
  for (const item of featurePermissions) {
    await syncAdminFeaturePermissionsToMysql({
      userId: item.user_id,
      permissionsJson: item.permissions_json || "{}",
      createdBy: item.created_by || null,
      createdAt: item.created_at || nowIso(),
      updatedAt: item.updated_at || nowIso(),
    });
    counters.adminFeaturePermissions += 1;
  }

  const bankAccounts = db.prepare("SELECT id,user_id,type,data_json,created_at,updated_at FROM bank_accounts").all();
  for (const b of bankAccounts) {
    await syncBankAccountToMysql({
      id: b.id,
      userId: b.user_id,
      type: b.type,
      dataJson: b.data_json || "{}",
      createdAt: b.created_at || nowIso(),
      updatedAt: b.updated_at || nowIso(),
    });
    counters.bankAccounts += 1;
  }

  const deposits = db.prepare("SELECT id,user_id,type,amount,status,remark,data_json,created_at,updated_at FROM deposits").all();
  for (const d of deposits) {
    await syncDepositToMysql({
      id: d.id,
      userId: d.user_id,
      type: d.type,
      amount: toNum(d.amount, 0),
      status: d.status || "pending",
      remark: d.remark || "",
      dataJson: d.data_json || "",
      createdAt: d.created_at || nowIso(),
      updatedAt: d.updated_at || nowIso(),
    });
    counters.deposits += 1;
  }

  const bets = db
    .prepare(
      "SELECT id,user_id,match_id,market_id,selection_id,selection_name,odds,volume,stack,pnl,exposure,market_name,is_back,event_id,type,current_market_odds,ip_address,match_name,bet_on,gtype,odds_type,status,created_at FROM bets"
    )
    .all();
  for (const b of bets) {
    await syncBetToMysql({
      id: b.id,
      userId: b.user_id,
      matchId: toNum(b.match_id, 0),
      marketId: b.market_id,
      selectionId: toNum(b.selection_id, 0),
      selectionName: b.selection_name,
      odds: toNum(b.odds, 0),
      volume: toNum(b.volume, 0),
      stack: toNum(b.stack, 0),
      pnl: toNum(b.pnl, 0),
      exposure: toNum(b.exposure, 0),
      marketName: b.market_name,
      isBack: toNum(b.is_back, 1),
      eventId: toNum(b.event_id, 0),
      type: b.type || "match",
      currentMarketOdds: toNum(b.current_market_odds, 0),
      ipAddress: b.ip_address || "",
      matchName: b.match_name || "",
      betOn: b.bet_on || "MATCH_ODDS",
      gtype: b.gtype || "match",
      oddsType: b.odds_type || "",
      status: b.status || "unsettled",
      createdAt: b.created_at || nowIso(),
    });
    counters.bets += 1;
  }

  const sports = db.prepare("SELECT sport_id,name,is_active,updated_at FROM sports").all();
  for (const s of sports) {
    await syncSportToMysql({
      sportId: toNum(s.sport_id, 0),
      name: s.name || `Sport ${s.sport_id}`,
      isActive: toNum(s.is_active, 1) === 1,
      updatedAt: s.updated_at || nowIso(),
    });
    counters.sports += 1;
  }

  const matches = db
    .prepare(
      "SELECT match_id,sport_id,name,competition_id,competition_name,match_datetime,in_play,has_bookmaker,has_fancy,has_fancy1,has_tv,status,section_json,external_json,created_at,updated_at FROM matches"
    )
    .all();
  for (const m of matches) {
    await syncMatchToMysql({
      matchId: toNum(m.match_id, 0),
      sportId: toNum(m.sport_id, 0),
      name: m.name || `Match ${m.match_id}`,
      competitionId: toNum(m.competition_id, 0) || null,
      competitionName: m.competition_name || "",
      matchDatetime: m.match_datetime || nowIso(),
      inPlay: toNum(m.in_play, 0) === 1,
      hasBookmaker: toNum(m.has_bookmaker, 0) === 1,
      hasFancy: toNum(m.has_fancy, 0) === 1,
      hasFancy1: toNum(m.has_fancy1, 0) === 1,
      hasTv: toNum(m.has_tv, 0) === 1,
      status: m.status || "OPEN",
      sectionJson: m.section_json || "[]",
      externalJson: m.external_json || "{}",
      createdAt: m.created_at || nowIso(),
      updatedAt: m.updated_at || nowIso(),
    });
    counters.matches += 1;
  }

  const casinoGames = db
    .prepare("SELECT id,identifier,provider_id,provider,game_name,image_url,live_category,slot_category,homepage_code FROM casino_games")
    .all();
  for (const g of casinoGames) {
    await syncCasinoGameToMysql({
      id: g.id,
      identifier: g.identifier || g.id,
      providerId: g.provider_id || "",
      provider: g.provider || "",
      gameName: g.game_name || "Game",
      imageUrl: g.image_url || "",
      liveCategory: g.live_category || "",
      slotCategory: g.slot_category || "",
      homepageCode: toNum(g.homepage_code, 1),
    });
    counters.casinoGames += 1;
  }

  return { enabled: true, ...counters };
};

const readJsonLike = (file) => {
  const txt = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").trim();
  const parsed = safeParse(txt, null);
  if (parsed !== null) return parsed;
  const cleaned = txt.replace(/[\u0000-\u001F]/g, " ");
  const parsedClean = safeParse(cleaned, null);
  return parsedClean !== null ? parsedClean : txt;
};
const snapshotLookupCache = makeTtlCache({ ttlMs: SNAPSHOT_CACHE_TTL_MS, maxEntries: 1200 });
const snapshotRootIndexCache = {
  loadedAt: 0,
  files: [],
};
const getSnapshotRootIndex = () => {
  const now = Date.now();
  if (snapshotRootIndexCache.loadedAt && now - snapshotRootIndexCache.loadedAt < SNAPSHOT_CACHE_TTL_MS) {
    return snapshotRootIndexCache.files;
  }
  let files = [];
  try {
    files = fs
      .readdirSync(SNAPSHOT_API)
      .map((name) => {
        const file = path.join(SNAPSHOT_API, name);
        let size = 0;
        try {
          size = toNum(fs.statSync(file).size, 0);
        } catch {}
        return { name, file, size };
      })
      .sort((a, b) => b.size - a.size);
  } catch {
    files = [];
  }
  snapshotRootIndexCache.loadedAt = now;
  snapshotRootIndexCache.files = files;
  return files;
};

const loadSnapshot = (endpoint) => {
  if (!fs.existsSync(SNAPSHOT_API)) return null;
  const clean = String(endpoint || "").replace(/^\/+|\/+$/g, "");
  if (!clean) return null;
  const cacheKey = clean.toLowerCase();
  const cached = snapshotLookupCache.get(cacheKey);
  if (cached !== undefined) return cached;

  const candidates = [];
  candidates.push(path.join(SNAPSHOT_API, clean));
  if (!clean.endsWith(".json")) candidates.push(path.join(SNAPSHOT_API, `${clean}.json`));
  if (!clean.endsWith(".html")) candidates.push(path.join(SNAPSHOT_API, `${clean}.html`));
  const parts = clean.split("/");
  if (parts.length > 1) {
    const dir = path.join(SNAPSHOT_API, parts[0]);
    const leaf = parts.slice(1).join("/");
    candidates.push(path.join(dir, `${leaf}.json`));
    candidates.push(path.join(dir, `${leaf}.html`));
    candidates.push(path.join(dir, "undefined.html"));
  }
  const base = clean.replace(/\.(json|html)$/i, "");
  const rooted = getSnapshotRootIndex()
    .filter((entry) => entry.name.startsWith(base) && (entry.name.endsWith(".html") || entry.name.endsWith(".json")))
    .map((entry) => entry.file);
  candidates.push(...rooted);
  const existing = [...new Set(candidates.filter((f) => fs.existsSync(f)))];
  if (!existing.length) {
    snapshotLookupCache.set(cacheKey, null);
    return null;
  }
  existing.sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  const snap = readJsonLike(existing[0]);
  snapshotLookupCache.set(cacheKey, snap);
  return snap;
};

const toBool = (v) => v === true || v === 1 || v === "1" || String(v).toLowerCase() === "true";
const normDate = (v) => {
  const d = new Date(v);
  return Number.isFinite(d.getTime()) ? d.toISOString() : nowIso();
};
const normalizeSnapshotMatch = (raw, fallbackSportId = 0) => {
  if (!raw || typeof raw !== "object") return null;
  const ext = raw.externalData && typeof raw.externalData === "object" ? raw.externalData : {};
  const matchId = toNum(raw.matchId || raw.eventid || raw.gmid || ext.gmid, 0);
  if (!matchId) return null;

  const sportId = toNum(raw.sportId || raw.etid || ext.etid, fallbackSportId);
  const name = raw.name || raw.ename || ext.ename || `Match ${matchId}`;
  const cid = toNum(raw.competitionId || raw.cid || ext.cid, 0);
  const cname = raw.competitionName || raw.cname || ext.cname || "";
  const stime = raw.matchDateTime || raw.openDate || raw.stime || ext.stime || nowIso();
  const inPlay = toBool(raw.inPlay ?? raw.inplay ?? raw.iplay ?? ext.iplay);
  const bm = toBool(raw.isBookMaker ?? raw.hasBookmaker ?? raw.bm ?? ext.bm);
  const f = toBool(raw.isFancy ?? raw.hasFancy ?? raw.f ?? ext.f);
  const f1 = toBool(raw.hasFancy1 ?? raw.f1 ?? ext.f1);
  const tv = toBool(raw.hasTV ?? raw.tv ?? ext.tv);
  const status = raw.status || ext.status || "OPEN";
  const section = Array.isArray(raw.section) ? raw.section : Array.isArray(ext.section) ? ext.section : [];
  const mid = String(raw.mid || ext.mid || `${matchId}0001`);
  const mname = raw.mname || ext.mname || "MATCH_ODDS";
  const gtype = raw.gtype || ext.gtype || "match";

  const externalData = {
    ...ext,
    gmid: toNum(ext.gmid, matchId),
    ename: ext.ename || name,
    etid: toNum(ext.etid, sportId),
    cid: toNum(ext.cid, cid),
    cname: ext.cname || cname,
    iplay: toBool(ext.iplay ?? inPlay),
    stime: ext.stime || stime,
    tv: toBool(ext.tv ?? tv),
    bm: toBool(ext.bm ?? bm),
    f: toBool(ext.f ?? f),
    f1: toBool(ext.f1 ?? f1),
    status: ext.status || status,
    mid,
    mname,
    gtype,
    section,
  };

  return {
    ...raw,
    _id: String(raw._id || matchId),
    id: String(raw.id || raw._id || matchId),
    matchId,
    gmid: toNum(raw.gmid, matchId),
    sportId,
    etid: toNum(raw.etid, sportId),
    name,
    ename: raw.ename || name,
    cid,
    competitionId: cid,
    cname,
    competitionName: cname,
    matchDateTime: normDate(stime),
    openDate: raw.openDate || stime,
    stime: raw.stime || stime,
    inPlay,
    inplay: toBool(raw.inplay ?? inPlay),
    iplay: toBool(raw.iplay ?? inPlay),
    active: raw.active === undefined ? true : toBool(raw.active),
    bm,
    isBookMaker: toBool(raw.isBookMaker ?? bm),
    hasBookmaker: toBool(raw.hasBookmaker ?? bm),
    f,
    isFancy: toBool(raw.isFancy ?? f),
    hasFancy: toBool(raw.hasFancy ?? f),
    f1,
    hasFancy1: toBool(raw.hasFancy1 ?? f1),
    tv,
    hasTV: toBool(raw.hasTV ?? tv),
    status,
    section,
    mid,
    mname,
    gtype,
    externalData,
  };
};

const snapshotMatchCache = {
  loaded: false,
  byId: new Map(),
  all: [],
  stakes: new Map(),
};
const scoreMatch = (m) => {
  const sec = Array.isArray(m?.section) ? m.section.length : 0;
  const exSec = Array.isArray(m?.externalData?.section) ? m.externalData.section.length : 0;
  return sec * 100 + exSec * 50 + (m?.mid ? 10 : 0);
};
const addSnapshotMatchToCache = (raw, stake = null, fallbackSportId = 0) => {
  const m = normalizeSnapshotMatch(raw, fallbackSportId);
  if (!m) return;
  const k = m.matchId;
  const prev = snapshotMatchCache.byId.get(k);
  if (!prev || scoreMatch(m) >= scoreMatch(prev)) snapshotMatchCache.byId.set(k, m);
  if (stake && typeof stake === "object") snapshotMatchCache.stakes.set(k, stake);
};
const buildSnapshotMatchCache = () => {
  if (snapshotMatchCache.loaded) return snapshotMatchCache;
  snapshotMatchCache.loaded = true;
  if (!fs.existsSync(SNAPSHOT_API)) return snapshotMatchCache;

  const rootFiles = fs.readdirSync(SNAPSHOT_API);
  const matchByIdFiles = rootFiles
    .filter((n) => /^get-match-by-id( \(\d+\))?\.html$/i.test(n))
    .map((n) => path.join(SNAPSHOT_API, n))
    .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  for (const file of matchByIdFiles) {
    const payload = readJsonLike(file);
    addSnapshotMatchToCache(payload?.data?.match, payload?.data?.stake || null);
  }

  const matchListFiles = rootFiles
    .filter((n) => /^get-match-list( \(\d+\))?\.html$/i.test(n))
    .map((n) => path.join(SNAPSHOT_API, n))
    .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  for (const file of matchListFiles) {
    const payload = readJsonLike(file);
    const list = Array.isArray(payload?.data) ? payload.data : [];
    for (const item of list) addSnapshotMatchToCache(item);
  }

  const homeDir = path.join(SNAPSHOT_API, "home");
  if (fs.existsSync(homeDir)) {
    const homeFiles = fs
      .readdirSync(homeDir)
      .filter((n) => n.endsWith(".html"))
      .map((n) => path.join(homeDir, n));
    for (const file of homeFiles) {
      const sid = toNum(path.basename(file).replace(/\.(html|json)$/i, ""), 0);
      const payload = readJsonLike(file);
      const list = Array.isArray(payload?.data) ? payload.data : [];
      for (const item of list) addSnapshotMatchToCache(item, null, sid);
    }
  }

  snapshotMatchCache.all = Array.from(snapshotMatchCache.byId.values()).sort((a, b) => {
    const aT = new Date(a.matchDateTime || a.stime || a.openDate || 0).getTime();
    const bT = new Date(b.matchDateTime || b.stime || b.openDate || 0).getTime();
    return aT - bT;
  });

  return snapshotMatchCache;
};
const getSnapshotMatches = (sportId = 0, limit = 0) => {
  const cache = buildSnapshotMatchCache();
  let rows = cache.all;
  if (sportId > 0) rows = rows.filter((m) => toNum(m.sportId || m.etid, 0) === sportId);
  if (limit > 0) rows = rows.slice(0, limit);
  return rows;
};
const getSnapshotMatchById = (matchId) => buildSnapshotMatchCache().byId.get(toNum(matchId, 0)) || null;
const getSnapshotStakeByMatchId = (matchId) =>
  buildSnapshotMatchCache().stakes.get(toNum(matchId, 0)) || STAKE_DETAIL;
const mapToHomeMatch = (m, sportId) => {
  const eventid = toNum(m.eventid || m.matchId || m.gmid || m.externalData?.gmid, 0);
  return {
  eventid,
  gmid: eventid,
  name: m.name || m.ename || `Match ${m.matchId}`,
  openDate: m.openDate || m.stime || m.matchDateTime || nowIso(),
  active: m.active !== false,
  inplay: toBool(m.inplay ?? m.iplay ?? m.inPlay),
  sportId: toNum(sportId || m.sportId || m.etid, 0),
  competitionId: toNum(m.competitionId || m.cid, 0),
  competitionName: m.competitionName || m.cname || "",
  hasBookmaker: toBool(m.hasBookmaker ?? m.isBookMaker ?? m.bm),
  hasFancy: toBool(m.hasFancy ?? m.isFancy ?? m.f),
  hasFancy1: toBool(m.hasFancy1 ?? m.f1),
  hasTV: toBool(m.hasTV ?? m.tv),
  status: m.status || "OPEN",
  externalData: m.externalData || {
    gmid: m.matchId,
    ename: m.name || m.ename || "",
    etid: toNum(sportId || m.sportId || m.etid, 0),
    cid: toNum(m.competitionId || m.cid, 0),
    cname: m.competitionName || m.cname || "",
    iplay: toBool(m.inplay ?? m.iplay ?? m.inPlay),
    stime: m.openDate || m.stime || m.matchDateTime || nowIso(),
    tv: toBool(m.hasTV ?? m.tv),
    bm: toBool(m.hasBookmaker ?? m.isBookMaker ?? m.bm),
    f: toBool(m.hasFancy ?? m.isFancy ?? m.f),
    f1: toBool(m.hasFancy1 ?? m.f1),
    status: m.status || "OPEN",
    mid: m.mid || `${m.matchId}0001`,
    mname: m.mname || "MATCH_ODDS",
    gtype: m.gtype || "match",
    section: Array.isArray(m.section) ? m.section : [],
  },
};
};

const seedUsers = () => {
  const created = nowIso();
  const sessionId = Date.now();
  const passwordHash = hashPass(DEFAULT_LOGIN_PASSWORD);
  // The env password only seeds a fresh install; set RESET_SUPER_ADMIN_PASSWORD=true to force it.
  const resetPassword = envBool(process.env.RESET_SUPER_ADMIN_PASSWORD);
  const upsertByUsername = db.prepare(
    `INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(username) DO UPDATE SET ${resetPassword ? "password=excluded.password,session_id=excluded.session_id," : ""}role=excluded.role,level=excluded.level,parent_id=excluded.parent_id,updated_at=excluded.updated_at`
  );
  upsertByUsername.run(
    `admin_${DEFAULT_LOGIN_USERNAME}`,
    DEFAULT_LOGIN_USERNAME,
    passwordHash,
    "super_admin",
    1,
    null,
    sessionId,
    created,
    created
  );
  const account = db.prepare("SELECT id FROM users WHERE username=?").get(DEFAULT_LOGIN_USERNAME);
  if (account?.id) {
    const seededAccount = db.prepare("SELECT password FROM users WHERE id=?").get(account.id);
    syncUserToMysql({
      id: account.id,
      username: DEFAULT_LOGIN_USERNAME,
      password: seededAccount?.password || passwordHash,
      role: "super_admin",
      level: 1,
      parentId: null,
      sessionId,
      createdAt: created,
      updatedAt: created,
    }).catch(() => {});
    const hasWallet = db.prepare("SELECT 1 FROM wallets WHERE user_id=?").get(account.id);
    if (!hasWallet) {
      db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)").run(
        account.id,
        ADMIN_INITIAL_BALANCE,
        0,
        0,
        created
      );
    }
    syncWalletToMysql({
      userId: account.id,
      balance: toNum(db.prepare("SELECT balance FROM wallets WHERE user_id=?").get(account.id)?.balance, 0),
      exposer: 0,
      casinoExposer: 0,
      updatedAt: created,
    }).catch(() => {});
  }
  setSetting("stake.default", { simple: STAKE_SIMPLE, detail: STAKE_DETAIL });
};
const seedDemoUsers = () => {
  if (DEMO_USERS_COUNT === 0) return;
  const created = nowIso();
  const passwordHash = hashPass(DEMO_PASSWORD);
  const insertUser = db.prepare(
    "INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?)"
  );
  const updateUser = db.prepare("UPDATE users SET password=?,role=?,level=?,parent_id=?,updated_at=? WHERE id=?");
  const hasWalletStmt = db.prepare("SELECT 1 FROM wallets WHERE user_id=?");
  const insertWallet = db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)");

  for (let i = 1; i <= DEMO_USERS_COUNT; i += 1) {
    const username = `demo${String(i).padStart(3, "0")}`;
    const existing = db.prepare("SELECT id FROM users WHERE username=?").get(username);
    const userId = existing?.id || `demo_${String(i).padStart(3, "0")}`;
    const sessionId = Date.now() + i;

    if (!existing) {
      insertUser.run(userId, username, passwordHash, "user", 1, null, sessionId, created, created);
    } else {
      updateUser.run(passwordHash, "user", 1, null, nowIso(), userId);
    }

    if (!hasWalletStmt.get(userId)) {
      insertWallet.run(userId, DEMO_INITIAL_BALANCE, 0, 0, created);
    }

    syncUserToMysql({
      id: userId,
      username,
      password: passwordHash,
      role: "user",
      level: 1,
      parentId: null,
      sessionId,
      createdAt: created,
      updatedAt: created,
    }).catch(() => {});

    syncWalletToMysql({
      userId,
      balance: DEMO_INITIAL_BALANCE,
      exposer: 0,
      casinoExposer: 0,
      updatedAt: created,
    }).catch(() => {});
  }
};
const seedTestAccounts = () => {
  if (!ENABLE_TEST_ACCOUNTS) return;
  const created = nowIso();
  const passwordHash = hashPass(TEST_ACCOUNT_PASSWORD);
  const accounts = [
    { id: "test_admin_001", username: "testadmin001", role: "admin", level: 2, parentId: `admin_${DEFAULT_LOGIN_USERNAME}`, balance: 0 },
    { id: "test_master_001", username: "testmaster001", role: "master", level: 3, parentId: "test_admin_001", balance: 0 },
  ];
  const insertUser = db.prepare(
    "INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(username) DO UPDATE SET password=excluded.password,role=excluded.role,level=excluded.level,parent_id=excluded.parent_id,updated_at=excluded.updated_at"
  );
  const ensureWalletStmt = db.prepare("INSERT OR IGNORE INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)");
  const transaction = db.transaction(() => {
    for (const account of accounts) {
      insertUser.run(account.id, account.username, passwordHash, account.role, account.level, account.parentId, Date.now() + account.level, created, created);
      ensureWalletStmt.run(account.id, account.balance, 0, 0, created);
    }
  });
  transaction();
  for (const account of accounts) {
    syncUserToMysql({
      id: account.id,
      username: account.username,
      password: passwordHash,
      role: account.role,
      level: account.level,
      parentId: account.parentId,
      sessionId: Date.now() + account.level,
      createdAt: created,
      updatedAt: created,
    }).catch(() => {});
  }
};
const seedRegistrationCode = () => {
  const code = normalizeCode(DEFAULT_REGISTRATION_CODE);
  if (!code) return;
  db.prepare(
    "INSERT INTO registration_codes (code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(code) DO UPDATE SET is_active=excluded.is_active,updated_at=excluded.updated_at"
  ).run(code, "Default registration code", 1, null, 0, null, DEFAULT_LOGIN_USERNAME, nowIso(), nowIso());
  mysqlExec(
    `INSERT INTO registration_codes (code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at)
     VALUES (?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       description=VALUES(description),
       is_active=VALUES(is_active),
       max_uses=VALUES(max_uses),
       updated_at=VALUES(updated_at)`,
    [code, "Default registration code", 1, null, 0, null, DEFAULT_LOGIN_USERNAME, nowIso(), nowIso()]
  ).catch(() => {});
  setSetting("registration.defaultCode", { code });
};

const seedSports = () => {
  if (db.prepare("SELECT COUNT(*) c FROM sports").get().c > 0) return;
  let sports = loadSnapshot("get-sport-list")?.data;
  if (!Array.isArray(sports)) {
    sports = [
      { sportId: 888, name: "Home", isActive: true },
      { sportId: 555, name: "Casino", isActive: true },
      { sportId: 4, name: "Cricket", isActive: true },
      { sportId: 1, name: "Football", isActive: true },
      { sportId: 2, name: "Tennis", isActive: true },
    ];
  }
  const stmt = db.prepare("INSERT OR REPLACE INTO sports (sport_id,name,is_active,updated_at) VALUES (?,?,?,?)");
  const now = nowIso();
  for (const s of sports) {
    const sportId = toNum(s.sportId, 0);
    const name = s.name || "Sport";
    stmt.run(sportId, name, s.isActive === false ? 0 : 1, now);
    syncSportToMysql({
      sportId,
      name,
      isActive: true,
      updatedAt: now,
    }).catch(() => {});
  }
};

const seedMatches = () => {
  if (db.prepare("SELECT COUNT(*) c FROM matches").get().c > 0 || !fs.existsSync(SNAPSHOT_API)) return;
  const files = fs
    .readdirSync(SNAPSHOT_API)
    .filter((n) => /^get-match-list( \(\d+\))?\.html$/i.test(n))
    .map((n) => path.join(SNAPSHOT_API, n))
    .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  if (!files.length) {
    db.prepare(
      "INSERT OR REPLACE INTO matches (match_id,sport_id,name,competition_id,competition_name,match_datetime,in_play,has_bookmaker,has_fancy,has_fancy1,has_tv,status,section_json,external_json,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    ).run(
      55392832,
      4,
      "Local Demo Match",
      1001,
      "Demo League",
      new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      1,
      1,
      1,
      1,
      0,
      "ACTIVE",
      JSON.stringify([
        { sid: 641320, sno: 1, gstatus: "ACTIVE", nat: "Team A", odds: [{ odds: 2.1, otype: "back", oname: "back1", size: 10000 }, { odds: 2.2, otype: "lay", oname: "lay1", size: 10000 }] },
        { sid: 71891, sno: 2, gstatus: "ACTIVE", nat: "Team B", odds: [{ odds: 1.9, otype: "back", oname: "back1", size: 10000 }, { odds: 2.0, otype: "lay", oname: "lay1", size: 10000 }] },
      ]),
      JSON.stringify({ matchId: 55392832, sportId: 4, name: "Local Demo Match", mname: "MATCH_ODDS" }),
      nowIso(),
      nowIso()
    );
    syncMatchToMysql({
      matchId: 55392832,
      sportId: 4,
      name: "Local Demo Match",
      competitionId: 1001,
      competitionName: "Demo League",
      matchDatetime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      inPlay: true,
      hasBookmaker: true,
      hasFancy: true,
      hasFancy1: true,
      hasTv: false,
      status: "ACTIVE",
      sectionJson: JSON.stringify([
        {
          sid: 641320,
          sno: 1,
          gstatus: "ACTIVE",
          nat: "Team A",
          odds: [
            { odds: 2.1, otype: "back", oname: "back1", size: 10000 },
            { odds: 2.2, otype: "lay", oname: "lay1", size: 10000 },
          ],
        },
        {
          sid: 71891,
          sno: 2,
          gstatus: "ACTIVE",
          nat: "Team B",
          odds: [
            { odds: 1.9, otype: "back", oname: "back1", size: 10000 },
            { odds: 2.0, otype: "lay", oname: "lay1", size: 10000 },
          ],
        },
      ]),
      externalJson: JSON.stringify({
        matchId: 55392832,
        sportId: 4,
        name: "Local Demo Match",
        mname: "MATCH_ODDS",
      }),
      createdAt: nowIso(),
      updatedAt: nowIso(),
    }).catch(() => {});
    return;
  }
  let list = readJsonLike(files[0])?.data;
  if (!Array.isArray(list)) {
    list = [
      {
        matchId: 55392832,
        sportId: 4,
        name: "Local Demo Match",
        cid: 1001,
        cname: "Demo League",
        matchDateTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        inPlay: true,
        isBookMaker: true,
        isFancy: true,
        f1: true,
        status: "ACTIVE",
        section: [
          { sid: 641320, sno: 1, gstatus: "ACTIVE", nat: "Team A", odds: [{ odds: 2.1, otype: "back", oname: "back1", size: 10000 }, { odds: 2.2, otype: "lay", oname: "lay1", size: 10000 }] },
          { sid: 71891, sno: 2, gstatus: "ACTIVE", nat: "Team B", odds: [{ odds: 1.9, otype: "back", oname: "back1", size: 10000 }, { odds: 2.0, otype: "lay", oname: "lay1", size: 10000 }] },
        ],
      },
    ];
  }
  const stmt = db.prepare(
    "INSERT OR REPLACE INTO matches (match_id,sport_id,name,competition_id,competition_name,match_datetime,in_play,has_bookmaker,has_fancy,has_fancy1,has_tv,status,section_json,external_json,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  );
  for (const m of list) {
    const mid = toNum(m.matchId || m.gmid || m.mid, 0);
    if (!mid) continue;
    stmt.run(
      mid,
      toNum(m.sportId || m.etid, 0),
      m.name || m.ename || `Match ${mid}`,
      toNum(m.cid, 0) || null,
      m.cname || "",
      m.matchDateTime || m.stime || nowIso(),
      m.inPlay || m.iplay ? 1 : 0,
      m.isBookMaker || m.bm ? 1 : 0,
      m.isFancy || m.f ? 1 : 0,
      m.f1 ? 1 : 0,
      m.tv ? 1 : 0,
      m.status || "ACTIVE",
      JSON.stringify(m.section || m.externalData?.section || []),
      JSON.stringify(m),
      m.createdAt || nowIso(),
      m.updatedAt || nowIso()
    );
    syncMatchToMysql({
      matchId: mid,
      sportId: toNum(m.sportId || m.etid, 0),
      name: m.name || m.ename || `Match ${mid}`,
      competitionId: toNum(m.cid, 0) || null,
      competitionName: m.cname || "",
      matchDatetime: m.matchDateTime || m.stime || nowIso(),
      inPlay: !!(m.inPlay || m.iplay),
      hasBookmaker: !!(m.isBookMaker || m.bm),
      hasFancy: !!(m.isFancy || m.f),
      hasFancy1: !!m.f1,
      hasTv: !!m.tv,
      status: m.status || "ACTIVE",
      sectionJson: JSON.stringify(m.section || m.externalData?.section || []),
      externalJson: JSON.stringify(m),
      createdAt: m.createdAt || nowIso(),
      updatedAt: m.updatedAt || nowIso(),
    }).catch(() => {});
  }
};

const extractSnapshotCasinoList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  if (Array.isArray(payload.result)) return payload.result;
  if (Array.isArray(payload.data)) return payload.data;
  if (Array.isArray(payload.games)) return payload.games;
  if (Array.isArray(payload.docs)) return payload.docs;
  return [];
};

const buildHomepageCodeMapFromSnapshots = () => {
  const map = new Map();
  const homepageDir = path.join(SNAPSHOT_API, "get-casino-by-homepage");
  if (!fs.existsSync(homepageDir)) return map;

  let files = [];
  try {
    files = fs
      .readdirSync(homepageDir)
      .filter((name) => /\.(html|json)$/i.test(name))
      .map((name) => path.join(homepageDir, name));
  } catch {
    files = [];
  }

  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const fileCodeMatch = String(fileName).match(/^(\d+)/);
    const fileCode = toNum(fileCodeMatch?.[1], 0);
    const payload = readJsonLike(filePath);
    const list = extractSnapshotCasinoList(payload);
    if (!list.length) continue;

    for (const item of list) {
      const identifier = normalizeObjectKey(item?.identifier || item?._id || item?.id || item?.gameCode || "");
      if (!identifier || map.has(identifier)) continue;
      const rowCode = Math.max(0, toNum(item?.homepage_code, fileCode));
      if (rowCode > 0) map.set(identifier, rowCode);
    }
  }

  return map;
};

const readSnapshotCasinoGames = () => {
  if (!fs.existsSync(SNAPSHOT_API)) {
    return { games: [], fileCount: 0, homepageMapped: 0 };
  }

  let files = [];
  try {
    files = fs
      .readdirSync(SNAPSHOT_API)
      .filter((name) => /^get-casino-int-games( \(\d+\))?\.(html|json)$/i.test(name))
      .map((name) => path.join(SNAPSHOT_API, name));
  } catch {
    files = [];
  }

  if (!files.length) {
    return { games: [], fileCount: 0, homepageMapped: 0 };
  }

  const homepageMap = buildHomepageCodeMapFromSnapshots();
  const rows = [];
  let index = 0;

  for (const filePath of files) {
    const payload = readJsonLike(filePath);
    const list = extractSnapshotCasinoList(payload);
    if (!list.length) continue;

    for (const item of list) {
      const identifier = normalizeObjectKey(item?.identifier || item?._id || item?.id || item?.gameCode || "");
      const homepageCode = Math.max(
        1,
        toNum(
          item?.homepage_code,
          identifier ? toNum(homepageMap.get(identifier), 12) || 12 : 12
        )
      );
      const normalized = normalizeCasinoGameRecord(
        {
          ...item,
          homepage_code: homepageCode,
        },
        index++
      );
      if (normalized) rows.push(normalized);
    }
  }

  return {
    games: mergeGamesByIdentifier(rows, []),
    fileCount: files.length,
    homepageMapped: homepageMap.size,
  };
};

const casinoSnapshotRefreshState = {
  lastCheckedAt: 0,
  lastFingerprint: "",
  running: false,
};

const listCasinoSnapshotSourceFiles = () => {
  if (!fs.existsSync(SNAPSHOT_API)) return [];
  const out = [];
  try {
    const mainFiles = fs
      .readdirSync(SNAPSHOT_API)
      .filter((name) => /^get-casino-int-games( \(\d+\))?\.(html|json)$/i.test(name))
      .map((name) => path.join(SNAPSHOT_API, name));
    out.push(...mainFiles);
  } catch {}

  const homepageDir = path.join(SNAPSHOT_API, "get-casino-by-homepage");
  if (fs.existsSync(homepageDir)) {
    try {
      const homepageFiles = fs
        .readdirSync(homepageDir)
        .filter((name) => /^\d+\.(html|json)$/i.test(name))
        .map((name) => path.join(homepageDir, name));
      out.push(...homepageFiles);
    } catch {}
  }

  return out;
};

const getCasinoSnapshotFingerprint = () => {
  const files = listCasinoSnapshotSourceFiles();
  if (!files.length) return { key: "", fileCount: 0, newestMs: 0, totalSize: 0 };
  let newestMs = 0;
  let totalSize = 0;
  for (const filePath of files) {
    try {
      const stat = fs.statSync(filePath);
      const mtimeMs = toNum(stat?.mtimeMs, 0);
      if (mtimeMs > newestMs) newestMs = mtimeMs;
      totalSize += Math.max(0, toNum(stat?.size, 0));
    } catch {}
  }
  return {
    key: `${files.length}:${newestMs}:${totalSize}`,
    fileCount: files.length,
    newestMs,
    totalSize,
  };
};

const markCasinoSnapshotFingerprint = () => {
  const fingerprint = getCasinoSnapshotFingerprint();
  if (fingerprint.key) {
    casinoSnapshotRefreshState.lastFingerprint = fingerprint.key;
  }
  return fingerprint;
};

const ensureCasinoSnapshotAutoRefresh = () => {
  const now = Date.now();
  if (casinoSnapshotRefreshState.running) return;
  if (
    casinoSnapshotRefreshState.lastCheckedAt &&
    now - casinoSnapshotRefreshState.lastCheckedAt < CASINO_SNAPSHOT_REFRESH_CHECK_MS
  ) {
    return;
  }
  casinoSnapshotRefreshState.lastCheckedAt = now;

  const fingerprint = getCasinoSnapshotFingerprint();
  if (!fingerprint.key) return;
  if (!casinoSnapshotRefreshState.lastFingerprint) {
    casinoSnapshotRefreshState.lastFingerprint = fingerprint.key;
    return;
  }
  if (fingerprint.key === casinoSnapshotRefreshState.lastFingerprint) return;

  casinoSnapshotRefreshState.running = true;
  try {
    syncCasinoFromSnapshots();
  } catch (e) {
    console.error("casino snapshot auto refresh failed:", e?.message || e);
  } finally {
    casinoSnapshotRefreshState.running = false;
    casinoSnapshotRefreshState.lastFingerprint = fingerprint.key;
  }
};
const syncCasinoFromSnapshots = () => {
  const snapshot = readSnapshotCasinoGames();
  const games = Array.isArray(snapshot?.games) ? snapshot.games : [];
  if (!games.length) {
    markCasinoSnapshotFingerprint();
    return {
      casinoGamesSynced: 0,
      casinoSnapshotFiles: toNum(snapshot?.fileCount, 0),
      homepageMapped: toNum(snapshot?.homepageMapped, 0),
    };
  }

  let synced = 0;
  const stmt = db.prepare(
    "INSERT INTO casino_games (id,identifier,provider_id,provider,game_name,image_url,live_category,slot_category,homepage_code) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(identifier) DO UPDATE SET provider_id=excluded.provider_id,provider=excluded.provider,game_name=excluded.game_name,image_url=excluded.image_url,live_category=excluded.live_category,slot_category=excluded.slot_category,homepage_code=excluded.homepage_code"
  );
  const tx = db.transaction((rows) => {
    for (const g of rows) {
      const identifier = normalizeObjectKey(g?.identifier || g?.id || g?._id || "");
      if (!identifier) continue;
      const gid = `cg_${identifier.toLowerCase()}`;
      stmt.run(
        gid,
        identifier,
        String(g.provider_id || ""),
        String(g.provider || ""),
        String(g.game_name || "Game"),
        pickCasinoGameImage(g.image_url, g.game_images, g.image),
        String(g.live_category || ""),
        String(g.slot_category || ""),
        Math.max(1, toNum(g.homepage_code, 12))
      );
      synced += 1;

      syncCasinoGameToMysql({
        id: gid,
        identifier,
        providerId: String(g.provider_id || ""),
        provider: String(g.provider || ""),
        gameName: String(g.game_name || "Game"),
        imageUrl: pickCasinoGameImage(g.image_url, g.game_images, g.image),
        liveCategory: String(g.live_category || ""),
        slotCategory: String(g.slot_category || ""),
        homepageCode: Math.max(1, toNum(g.homepage_code, 12)),
      }).catch(() => {});
    }
  });

  try {
    tx(games);
  } catch (e) {
    console.error("casino snapshot sync failed:", e?.message || e);
  }

  if (synced > 0) bumpCasinoCatalogVersion();
  markCasinoSnapshotFingerprint();
  return {
    casinoGamesSynced: synced,
    casinoSnapshotFiles: toNum(snapshot?.fileCount, 0),
    homepageMapped: toNum(snapshot?.homepageMapped, 0),
  };
};

const seedCasino = () => {
  if (db.prepare("SELECT COUNT(*) c FROM casino_games").get().c > 0) return;
  const out = syncCasinoFromSnapshots();
  if (toNum(out?.casinoGamesSynced, 0) > 0) return;

  const games = loadSnapshot("get-casino-int-games")?.result;
  if (!Array.isArray(games)) return;
  const stmt = db.prepare(
    "INSERT OR REPLACE INTO casino_games (id,identifier,provider_id,provider,game_name,image_url,live_category,slot_category,homepage_code) VALUES (?,?,?,?,?,?,?,?,?)"
  );
  for (const g of games) {
    const identifier = normalizeObjectKey(g?.identifier || g?._id || "");
    if (!identifier) continue;
    const gid = `cg_${identifier.toLowerCase()}`;
    stmt.run(
      gid,
      identifier,
      g.provider_id || "",
      g.provider || "",
      g.game_name || "Game",
      pickCasinoGameImage(g.image_url, g.game_images, g.image),
      g.live_category || "",
      g.slot_category || "",
      toNum(g.homepage_code, 1) || 1
    );
    syncCasinoGameToMysql({
      id: gid,
      identifier,
      providerId: g.provider_id || "",
      provider: g.provider || "",
      gameName: g.game_name || "Game",
      imageUrl: pickCasinoGameImage(g.image_url, g.game_images, g.image),
      liveCategory: g.live_category || "",
      slotCategory: g.slot_category || "",
      homepageCode: toNum(g.homepage_code, 1) || 1,
    }).catch(() => {});
  }
};

const syncSportsFromSnapshot = () => {
  const sports = loadSnapshot("get-sport-list")?.data;
  if (!Array.isArray(sports) || !sports.length) return 0;
  const stmt = db.prepare("INSERT OR REPLACE INTO sports (sport_id,name,is_active,updated_at) VALUES (?,?,?,?)");
  const now = nowIso();
  let count = 0;
  for (const s of sports) {
    const sportId = toNum(s?.sportId, 0);
    if (!sportId) continue;
    stmt.run(sportId, s?.name || `Sport ${sportId}`, s?.isActive === false ? 0 : 1, now);
    syncSportToMysql({
      sportId,
      name: s?.name || `Sport ${sportId}`,
      isActive: s?.isActive !== false,
      updatedAt: now,
    }).catch(() => {});
    count += 1;
  }
  return count;
};

const syncMatchesFromSnapshot = () => {
  const matches = getSnapshotMatches(0, 0);
  if (!Array.isArray(matches) || !matches.length) return 0;
  const stmt = db.prepare(
    "INSERT OR REPLACE INTO matches (match_id,sport_id,name,competition_id,competition_name,match_datetime,in_play,has_bookmaker,has_fancy,has_fancy1,has_tv,status,section_json,external_json,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  );
  let count = 0;
  for (const m of matches) {
    const matchId = toNum(m?.matchId || m?.gmid, 0);
    if (!matchId) continue;
    const sportId = toNum(m?.sportId || m?.etid, 0);
    stmt.run(
      matchId,
      sportId,
      m?.name || m?.ename || `Match ${matchId}`,
      toNum(m?.competitionId || m?.cid, 0) || null,
      m?.competitionName || m?.cname || "",
      m?.matchDateTime || m?.openDate || m?.stime || nowIso(),
      toBool(m?.inPlay ?? m?.inplay ?? m?.iplay) ? 1 : 0,
      toBool(m?.isBookMaker ?? m?.hasBookmaker ?? m?.bm) ? 1 : 0,
      toBool(m?.isFancy ?? m?.hasFancy ?? m?.f) ? 1 : 0,
      toBool(m?.hasFancy1 ?? m?.f1) ? 1 : 0,
      toBool(m?.hasTV ?? m?.tv) ? 1 : 0,
      m?.status || "OPEN",
      JSON.stringify(Array.isArray(m?.section) ? m.section : []),
      JSON.stringify(m),
      m?.createdAt || nowIso(),
      m?.updatedAt || nowIso()
    );
    syncMatchToMysql({
      matchId,
      sportId,
      name: m?.name || m?.ename || `Match ${matchId}`,
      competitionId: toNum(m?.competitionId || m?.cid, 0) || null,
      competitionName: m?.competitionName || m?.cname || "",
      matchDatetime: m?.matchDateTime || m?.openDate || m?.stime || nowIso(),
      inPlay: toBool(m?.inPlay ?? m?.inplay ?? m?.iplay),
      hasBookmaker: toBool(m?.isBookMaker ?? m?.hasBookmaker ?? m?.bm),
      hasFancy: toBool(m?.isFancy ?? m?.hasFancy ?? m?.f),
      hasFancy1: toBool(m?.hasFancy1 ?? m?.f1),
      hasTv: toBool(m?.hasTV ?? m?.tv),
      status: m?.status || "OPEN",
      sectionJson: JSON.stringify(Array.isArray(m?.section) ? m.section : []),
      externalJson: JSON.stringify(m),
      createdAt: m?.createdAt || nowIso(),
      updatedAt: m?.updatedAt || nowIso(),
    }).catch(() => {});
    count += 1;
  }
  return count;
};

const syncSnapshotToDb = () => {
  const sportsSynced = syncSportsFromSnapshot();
  const matchesSynced = syncMatchesFromSnapshot();
  const casinoSync = syncCasinoFromSnapshots();
  return { sportsSynced, matchesSynced, ...casinoSync };
};

seedUsers();
seedDemoUsers();
seedTestAccounts();
seedRegistrationCode();
seedSports();
seedMatches();
seedCasino();
try {
  syncSnapshotToDb();
} catch (e) {
  console.error("snapshot sync failed:", e?.message || e);
}
try {
  const providerImport = importProviderLocalCatalogToDb();
  if (providerImport?.imported) {
    console.log("[provider-catalog] imported", providerImport.imported);
  }
} catch (e) {
  console.error("[provider-catalog] import failed:", e?.message || e);
}
syncAllSqliteDataToMysql()
  .then((out) => {
    if (out?.enabled) console.log("[mysql-sync] sqlite mirror synced", out);
  })
  .catch((e) => console.error("[mysql-sync] sqlite mirror failed:", e?.message || e));

app.disable("x-powered-by");
app.set("trust proxy", 1);
const authRateLimitPrefixes = ["/api/login", "/api/login-admin", "/api/send-otp", "/api/verify-otp"];
const rateLimitBuckets = new Map();
const consumeRateLimit = (key, maxHits, windowMs) => {
  const now = Date.now();
  let bucket = rateLimitBuckets.get(key);
  if (!bucket || now - bucket.windowStart >= windowMs) {
    bucket = { windowStart: now, hits: 0 };
  }
  bucket.hits += 1;
  rateLimitBuckets.set(key, bucket);
  if (bucket.hits <= maxHits) return { ok: true, retryAfterSeconds: 0 };
  const retryAfterSeconds = Math.max(1, Math.ceil((bucket.windowStart + windowMs - now) / 1000));
  return { ok: false, retryAfterSeconds };
};
setInterval(() => {
  const now = Date.now();
  const maxWindow = Math.max(API_RATE_LIMIT_WINDOW_MS, AUTH_RATE_LIMIT_WINDOW_MS);
  for (const [key, bucket] of rateLimitBuckets) {
    if (!bucket || now - toNum(bucket.windowStart, 0) >= maxWindow) rateLimitBuckets.delete(key);
  }
}, 30000).unref();
const getClientIp = (req) => {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }
  return String(req.ip || req.socket?.remoteAddress || "unknown");
};
let inflightApiRequests = 0;
app.use("/api", (req, res, next) => {
  if (inflightApiRequests >= API_MAX_INFLIGHT) {
    return res.status(503).json(env("Server is busy, please retry in a moment.", { code: "SERVER_BUSY" }, true, 503));
  }
  inflightApiRequests += 1;
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    inflightApiRequests = Math.max(0, inflightApiRequests - 1);
  };
  res.on("finish", release);
  res.on("close", release);
  return next();
});
app.use("/api", (req, res, next) => {
  const requestPath = String((req.originalUrl || req.url || "").split("?")[0] || "").toLowerCase();
  const ip = getClientIp(req);
  const isAuthPath = pathStartsWithAny(requestPath, authRateLimitPrefixes);
  const decision = isAuthPath
    ? consumeRateLimit(`auth:${ip}`, AUTH_RATE_LIMIT_MAX, AUTH_RATE_LIMIT_WINDOW_MS)
    : consumeRateLimit(`api:${ip}`, API_RATE_LIMIT_MAX, API_RATE_LIMIT_WINDOW_MS);
  if (!decision.ok) {
    res.setHeader("Retry-After", String(decision.retryAfterSeconds));
    return res.status(429).json(
      env("Too many requests. Please wait and try again.", { retryAfterSeconds: decision.retryAfterSeconds }, true, 429)
    );
  }
  return next();
});
app.use(express.json({ limit: API_BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: API_BODY_LIMIT, parameterLimit: 2000 }));

const getUserByIdStmt = db.prepare("SELECT * FROM users WHERE id=?");
const getUserByUsernameStmt = db.prepare("SELECT * FROM users WHERE username=?");
const getWalletStmt = db.prepare("SELECT * FROM wallets WHERE user_id=?");
const insertWalletStmt = db.prepare(
  "INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)"
);
const getUserById = (uid) => getUserByIdStmt.get(uid);
const getUserByUsername = (u) => getUserByUsernameStmt.get(u);
const getWallet = (uid) => getWalletStmt.get(uid);
const ensureWallet = (uid) => {
  let w = getWallet(uid);
  if (w) return w;
  insertWalletStmt.run(
    uid,
    DEFAULT_USER_OPENING_BALANCE,
    0,
    0,
    nowIso()
  );
  w = getWallet(uid);
  return w;
};
const getUserByUsernameCaseInsensitiveStmt = db.prepare("SELECT * FROM users WHERE lower(username)=lower(?) LIMIT 1");
const providerPlayerMapGetByExternalStmt = db.prepare(
  "SELECT external_user_id,user_id,username,provider_name,created_at,updated_at,last_launch_at FROM casino_provider_player_map WHERE external_user_id=?"
);
const providerPlayerMapListByUserStmt = db.prepare(
  "SELECT external_user_id,last_launch_at,updated_at FROM casino_provider_player_map WHERE user_id=? ORDER BY datetime(last_launch_at) DESC, last_launch_at DESC LIMIT 5"
);
const providerPlayerMapUpsertStmt = db.prepare(
  `INSERT INTO casino_provider_player_map (external_user_id,user_id,username,provider_name,created_at,updated_at,last_launch_at)
   VALUES (?,?,?,?,?,?,?)
   ON CONFLICT(external_user_id) DO UPDATE SET
     user_id=excluded.user_id,
     username=excluded.username,
     provider_name=excluded.provider_name,
     updated_at=excluded.updated_at,
     last_launch_at=excluded.last_launch_at`
);
const providerTxGetByTxnKeyStmt = db.prepare("SELECT * FROM casino_provider_transactions WHERE txn_key=? LIMIT 1");
const providerTxGetByProviderTxnIdStmt = db.prepare(
  "SELECT * FROM casino_provider_transactions WHERE provider_txn_id=? ORDER BY datetime(created_at) DESC, created_at DESC LIMIT 1"
);
const providerTxInsertStmt = db.prepare(
  `INSERT INTO casino_provider_transactions (
     id,txn_key,provider_txn_id,provider_round_id,related_txn_key,user_id,external_user_id,username,action,amount,status,
     before_balance,after_balance,game_code,vendor_code,provider_name,request_ip,request_json,response_json,created_at,updated_at
   ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
);
const providerTxUpdateResponseStmt = db.prepare(
  "UPDATE casino_provider_transactions SET response_json=?,updated_at=? WHERE txn_key=?"
);
const providerTxRecentAllStmt = db.prepare(
  "SELECT * FROM casino_provider_transactions ORDER BY datetime(created_at) DESC, created_at DESC LIMIT ?"
);
const providerTxByUserStmt = db.prepare(
  "SELECT * FROM casino_provider_transactions WHERE user_id=? ORDER BY datetime(created_at) DESC, created_at DESC LIMIT ?"
);
const normalizeMoneyAmount = (value) => {
  const num = toNum(value, 0);
  if (!Number.isFinite(num)) return 0;
  return Math.round(Math.max(0, num) * 10000) / 10000;
};
const normalizeMoneyAmountSigned = (value) => {
  const num = toNum(value, 0);
  if (!Number.isFinite(num)) return 0;
  return Math.round(num * 10000) / 10000;
};
const safeJsonStringify = (value, fallback = "{}") => {
  try {
    return JSON.stringify(value || {});
  } catch {
    return fallback;
  }
};
const resolveHeaderValue = (req, name) => {
  const target = String(name || "").trim().toLowerCase();
  if (!target) return "";
  const entries = Object.entries(req?.headers || {});
  for (const [key, rawValue] of entries) {
    if (String(key || "").trim().toLowerCase() !== target) continue;
    if (Array.isArray(rawValue)) return String(rawValue[0] || "").trim();
    return String(rawValue || "").trim();
  }
  return "";
};
const buildProviderExternalUserCandidates = ({ userId, username, cfg }) => {
  const uid = String(userId || "").trim();
  const uname = String(username || "").trim();
  const resellerPrefix = sanitizeProviderAccountId(cfg?.resellerPrefix || "", 12);
  const out = [];
  const push = (value) => {
    const clean = sanitizeProviderAccountId(value, 32);
    if (!clean || out.includes(clean)) return;
    out.push(clean);
  };

  if (uid) {
    try {
      const mappedRows = providerPlayerMapListByUserStmt.all(uid);
      for (const row of mappedRows || []) {
        push(row?.external_user_id);
      }
    } catch {}
  }

  const primaryBase = sanitizeProviderAccountId(uname || uid, 32);
  const userBase = sanitizeProviderAccountId(uid, 32);
  const nameBase = sanitizeProviderAccountId(uname, 32);

  const addBaseCandidates = (base) => {
    if (!base) return;
    push(base);
    push(String(base).toLowerCase());
    if (resellerPrefix) {
      push(`${resellerPrefix}${base}`);
      push(`${resellerPrefix}${String(base).toLowerCase()}`);
    }
  };

  if (cfg?.appendPrefixToUserId && resellerPrefix) {
    addBaseCandidates(primaryBase);
    addBaseCandidates(nameBase);
    addBaseCandidates(userBase);
  } else {
    addBaseCandidates(primaryBase);
    addBaseCandidates(nameBase);
    addBaseCandidates(userBase);
  }

  if (!out.length && (uid || uname)) {
    const digest = crypto
      .createHash("sha1")
      .update(`${uid}|${uname}|${resellerPrefix}`, "utf8")
      .digest("hex");
    push(`u${digest.slice(0, 31)}`);
  }
  return out.slice(0, 10);
};
const cacheProviderPlayerMapping = ({ externalUserId, userId, username, providerName = "" }) => {
  const external = sanitizeProviderAccountId(externalUserId, 32);
  const uid = String(userId || "").trim();
  if (!external || !uid) return false;
  const now = nowIso();
  const existing = providerPlayerMapGetByExternalStmt.get(external);
  providerPlayerMapUpsertStmt.run(
    external,
    uid,
    String(username || "").trim(),
    String(providerName || existing?.provider_name || "").trim(),
    existing?.created_at || now,
    now,
    now
  );
  return true;
};
const resolveProviderUserFromExternalId = (externalUserIdRaw) => {
  const raw = String(externalUserIdRaw || "").trim();
  const external = sanitizeProviderAccountId(raw, 32);
  if (!external) return null;
  const providerCfg = readProviderApiSettings();
  const resellerPrefixRaw = String(providerCfg?.resellerPrefix || "").trim();
  const resellerPrefix = sanitizeProviderAccountId(resellerPrefixRaw, 12);

  const mapped = providerPlayerMapGetByExternalStmt.get(external);
  if (mapped?.user_id) {
    const mappedUser = getUserById(String(mapped.user_id));
    if (mappedUser) {
      return { user: mappedUser, externalUserId: external, source: "map" };
    }
  }

  const directCandidateSet = new Set();
  const pushDirectCandidate = (value) => {
    const text = String(value || "").trim();
    if (!text) return;
    directCandidateSet.add(text);
    if (text.toLowerCase() !== text) directCandidateSet.add(text.toLowerCase());
  };
  pushDirectCandidate(raw);
  pushDirectCandidate(external);
  if (resellerPrefixRaw) {
    const lowerRaw = raw.toLowerCase();
    const lowerPrefix = resellerPrefixRaw.toLowerCase();
    if (lowerRaw.startsWith(lowerPrefix) && raw.length > resellerPrefixRaw.length) {
      pushDirectCandidate(raw.slice(resellerPrefixRaw.length));
    }
  }
  if (resellerPrefix && external.startsWith(resellerPrefix) && external.length > resellerPrefix.length) {
    pushDirectCandidate(external.slice(resellerPrefix.length));
  }
  const directCandidates = [...directCandidateSet];
  for (const candidate of directCandidates) {
    const byId = getUserById(candidate);
    if (byId) {
      cacheProviderPlayerMapping({
        externalUserId: external,
        userId: byId.id,
        username: byId.username,
      });
      return { user: byId, externalUserId: external, source: "id" };
    }
    const byUsername = getUserByUsername(candidate) || getUserByUsernameCaseInsensitiveStmt.get(candidate);
    if (byUsername) {
      cacheProviderPlayerMapping({
        externalUserId: external,
        userId: byUsername.id,
        username: byUsername.username,
      });
      return { user: byUsername, externalUserId: external, source: "username" };
    }
  }

  const normalizedCandidates = new Set(
    directCandidates
      .map((value) => sanitizeProviderAccountId(value, 32))
      .filter(Boolean)
  );
  normalizedCandidates.add(external);
  const users = db.prepare("SELECT * FROM users ORDER BY datetime(created_at) DESC, created_at DESC").all();
  const matched = users.find((row) => {
    const usernameNorm = sanitizeProviderAccountId(row?.username, 32);
    const idNorm = sanitizeProviderAccountId(row?.id, 32);
    return normalizedCandidates.has(usernameNorm) || normalizedCandidates.has(idNorm);
  });
  if (!matched) return null;
  cacheProviderPlayerMapping({
    externalUserId: external,
    userId: matched.id,
    username: matched.username,
  });
  return { user: matched, externalUserId: external, source: "scan" };
};
const buildProviderTxnKey = ({ action, providerTxnId, externalUserId, providerRoundId, gameCode, amount, nonce }) => {
  const tx = String(providerTxnId || "").trim();
  if (tx) return `tx:${tx.slice(0, 120)}`;
  const digestInput = [
    String(action || "").trim().toLowerCase(),
    String(externalUserId || "").trim(),
    String(providerRoundId || "").trim(),
    String(gameCode || "").trim(),
    String(normalizeMoneyAmount(amount)),
    String(nonce || "").trim(),
  ].join("|");
  return `hash:${crypto.createHash("sha1").update(digestInput, "utf8").digest("hex")}`;
};
const normalizeProviderWalletAction = (value, amount = null) => {
  const actionRaw = String(value || "").trim().toLowerCase().replace(/[\s_]+/g, "-");
  if (["balance", "get-balance", "balance-inquiry", "inquiry", "check-balance"].includes(actionRaw)) return "balance";
  if (["debit", "bet", "deduct", "wager", "place-bet", "withdraw", "spend"].includes(actionRaw)) return "debit";
  if (
    [
      "credit",
      "win",
      "payout",
      "settle",
      "settlement",
      "settlement-result",
      "settlement-winloss",
      "result",
      "award",
      "deposit",
      "refund-win",
    ].includes(actionRaw)
  ) {
    const n = toNum(amount, 0);
    if (n < 0) return "debit";
    if (n > 0) return "credit";
    return "balance";
  }
  if (["rollback", "reverse", "reversal", "cancel", "void", "refund", "rollback-transaction"].includes(actionRaw)) {
    return "rollback";
  }
  if (!actionRaw) {
    return Number.isFinite(toNum(amount, NaN)) && toNum(amount, 0) > 0 ? "debit" : "balance";
  }
  return "unknown";
};
const readProviderWalletField = (reqBody, nestedBody, keys = []) => {
  for (const key of keys) {
    if (nestedBody && nestedBody[key] !== undefined && nestedBody[key] !== null && nestedBody[key] !== "") {
      return nestedBody[key];
    }
    if (reqBody && reqBody[key] !== undefined && reqBody[key] !== null && reqBody[key] !== "") {
      return reqBody[key];
    }
  }
  return undefined;
};
const parseProviderWalletPayload = (req) => {
  const bodyRaw = req?.body && typeof req.body === "object" ? req.body : {};
  const queryRaw = req?.query && typeof req.query === "object" ? req.query : {};
  const queryDataRaw = queryRaw?.data;
  const queryDataParsed =
    queryDataRaw && typeof queryDataRaw === "string"
      ? safeParse(queryDataRaw, null)
      : queryDataRaw && typeof queryDataRaw === "object"
        ? queryDataRaw
        : null;
  const nested = {
    ...(queryDataParsed && typeof queryDataParsed === "object" && !Array.isArray(queryDataParsed) ? queryDataParsed : {}),
    ...(bodyRaw?.data && typeof bodyRaw.data === "object" ? bodyRaw.data : {}),
  };
  const body = {
    ...(queryRaw || {}),
    ...(bodyRaw || {}),
  };

  const betAmountRaw = readProviderWalletField(body, nested, ["bet_amount", "betAmount", "bet"]);
  const winAmountRaw = readProviderWalletField(body, nested, ["win_amount", "winAmount", "win", "payout"]);
  const hasSettlementPayload =
    betAmountRaw !== undefined ||
    winAmountRaw !== undefined;
  const betAmount = normalizeMoneyAmountSigned(betAmountRaw);
  const winAmount = normalizeMoneyAmountSigned(winAmountRaw);
  const settlementNetAmount = Math.round((toNum(winAmount, 0) - toNum(betAmount, 0)) * 10000) / 10000;

  const explicitAmountCandidate = readProviderWalletField(body, nested, [
    "amount",
    "betAmount",
    "creditAmount",
    "debitAmount",
    "changeAmount",
    "transferAmount",
    "value",
    "amount_value",
  ]);
  let amountCandidate = explicitAmountCandidate;
  if (
    (amountCandidate === undefined || amountCandidate === null || amountCandidate === "") &&
    hasSettlementPayload
  ) {
    amountCandidate = settlementNetAmount;
  }
  let amount = normalizeMoneyAmountSigned(amountCandidate);
  const actionRaw = readProviderWalletField(body, nested, [
    "action",
    "type",
    "method",
    "command",
    "event",
    "transactionType",
    "transType",
  ]);
  let action = normalizeProviderWalletAction(actionRaw, amountCandidate);
  if ((action === "unknown" || !String(actionRaw || "").trim()) && hasSettlementPayload) {
    if (settlementNetAmount > 0) {
      action = "credit";
      amount = settlementNetAmount;
    } else if (settlementNetAmount < 0) {
      action = "debit";
      amount = Math.abs(settlementNetAmount);
    } else {
      action = "balance";
      amount = 0;
    }
  }
  if (action === "debit" || action === "credit") {
    amount = Math.abs(normalizeMoneyAmountSigned(amount));
  }

  const externalUserIdRaw = readProviderWalletField(body, nested, [
    "user_id",
    "userid",
    "playerId",
    "userId",
    "uid",
    "account",
    "accountId",
    "memberId",
    "username",
    "player",
  ]);
  const providerTxnId = String(
    readProviderWalletField(body, nested, [
      "serial_number",
      "serialNumber",
      "sn",
      "txnId",
      "transactionId",
      "transId",
      "orderId",
      "betId",
      "referenceId",
      "refId",
      "id",
    ]) || ""
  ).trim();
  const providerRoundId = String(
    readProviderWalletField(body, nested, ["game_round", "gameRound", "roundId", "gameRoundId", "sessionId", "round", "referenceRoundId"]) || ""
  ).trim();
  const rollbackReferenceTxnId = String(
    readProviderWalletField(body, nested, [
      "rollbackTxnId",
      "referenceTxnId",
      "originalTxnId",
      "rollbackOf",
      "refTransactionId",
      "sourceTxnId",
    ]) || ""
  ).trim();
  const gameCode = String(
    readProviderWalletField(body, nested, ["game_code", "gameCode", "gameId", "identifier", "lobby_url", "slug"]) || ""
  ).trim();
  const vendorCode = String(
    readProviderWalletField(body, nested, ["vendor_code", "vendorCode", "providerCode", "provider_id", "provider", "vendor"]) || ""
  ).trim();
  const providerName = String(readProviderWalletField(body, nested, ["providerName", "vendorName", "provider", "vendor"]) || "").trim();
  const currencyCode = String(readProviderWalletField(body, nested, ["currency_code", "currencyCode", "currency"]) || "").trim();
  const requestNonce = String(
    readProviderWalletField(body, nested, ["random", "nonce", "requestId", "traceId", "timestamp", "serial_number"]) || ""
  ).trim();

  return {
    rawBody: body,
    actionRaw: String(actionRaw || "").trim(),
    action,
    amount,
    externalUserIdRaw: String(externalUserIdRaw || "").trim(),
    providerTxnId,
    providerRoundId,
    rollbackReferenceTxnId,
    gameCode,
    vendorCode,
    providerName,
    requestNonce,
    betAmount,
    winAmount,
    netAmount: settlementNetAmount,
    currencyCode,
    hasSettlementPayload,
    agent: String(readProviderWalletField(body, nested, ["agent"]) || "").trim(),
    token: String(readProviderWalletField(body, nested, ["token", "apiToken"]) || "").trim(),
    secretKey: String(readProviderWalletField(body, nested, ["secretKey", "secret", "apiSecret"]) || "").trim(),
  };
};
const verifyProviderWalletAuth = (req, parsedPayload) => {
  const cfg = readProviderApiSettings();
  const expectedApiTokens = new Set(
    [String(cfg.apiToken || "").trim(), String(cfg.providerToken || "").trim()].filter(Boolean)
  );
  const expectedSecretKeys = new Set(
    [String(cfg.secretKey || "").trim(), String(cfg.providerSecret || "").trim()].filter(Boolean)
  );

  const headerApiToken = resolveHeaderValue(req, "x-api-token");
  const headerSecretKey = resolveHeaderValue(req, "x-secret-key");
  if (headerApiToken && headerSecretKey && expectedApiTokens.has(headerApiToken) && expectedSecretKeys.has(headerSecretKey)) {
    return { ok: true, mode: "legacy_headers" };
  }
  const payloadApiToken = String(parsedPayload?.token || "").trim();
  const payloadSecretKey = String(parsedPayload?.secretKey || "").trim();
  if (
    payloadApiToken &&
    payloadSecretKey &&
    expectedApiTokens.has(payloadApiToken) &&
    expectedSecretKeys.has(payloadSecretKey)
  ) {
    return { ok: true, mode: "legacy_payload" };
  }

  const authHeader = resolveHeaderValue(req, "authorization");
  if (authHeader && String(cfg.bearerToken || "").trim()) {
    const expectedBearer = `${String(cfg.authHeaderPrefix || "Bearer").trim()} ${String(cfg.bearerToken).trim()}`.trim();
    if (authHeader.trim() === expectedBearer) {
      return { ok: true, mode: "bearer" };
    }
  }

  const headerAgent = resolveHeaderValue(req, "x-provider-agent") || resolveHeaderValue(req, "x-agent");
  const headerToken = resolveHeaderValue(req, "x-provider-token") || resolveHeaderValue(req, "x-token");
  const expectedAgent = String(cfg.providerAgent || "").trim();
  const expectedToken = String(cfg.providerToken || "").trim();
  const parsedAgent = String(parsedPayload?.agent || "").trim();
  const parsedToken = String(parsedPayload?.token || "").trim();
  if (cfg.providerAgent && cfg.providerToken) {
    const bodyPair = parsedAgent === expectedAgent && parsedToken === expectedToken;
    const headerPair = headerAgent === expectedAgent && headerToken === expectedToken;
    const mixedPairA = parsedAgent === expectedAgent && headerToken === expectedToken;
    const mixedPairB = headerAgent === expectedAgent && parsedToken === expectedToken;
    if (bodyPair || headerPair || mixedPairA || mixedPairB) {
      return { ok: true, mode: "agent_token" };
    }
  }

  return {
    ok: false,
    mode: "none",
    message: "Authentication failed (X-API-Token/X-Secret-Key or provider agent/token required)",
  };
};
const mapCasinoProviderTxRow = (row) => ({
  _id: row?.id || "",
  transactionId: row?.provider_txn_id || row?.txn_key || "",
  txKey: row?.txn_key || "",
  roundId: row?.provider_round_id || "",
  relatedTxKey: row?.related_txn_key || "",
  userId: row?.user_id || "",
  externalUserId: row?.external_user_id || "",
  username: row?.username || "",
  action: row?.action || "",
  amount: toNum(row?.amount, 0),
  status: row?.status || "",
  beforeBalance: toNum(row?.before_balance, 0),
  afterBalance: toNum(row?.after_balance, 0),
  gameCode: row?.game_code || "",
  vendorCode: row?.vendor_code || "",
  providerName: row?.provider_name || "",
  createdAt: row?.created_at || null,
  updatedAt: row?.updated_at || null,
});
const providerRollbackOfStmt = db.prepare(
  "SELECT 1 FROM casino_provider_transactions WHERE lower(action)='rollback' AND lower(status)='success' AND related_txn_key=? LIMIT 1"
);
const applyProviderWalletOperationTx = db.transaction((input) => {
  const now = nowIso();
  const userId = String(input?.user?.id || "").trim();
  if (!userId) {
    return { ok: false, code: 8, msg: "User is required", balance: 0, txRow: null };
  }

  const action = String(input?.action || "balance").trim().toLowerCase();
  const amount = normalizeMoneyAmount(input?.amount);
  const txnKey = String(input?.txnKey || "").trim();
  const providerTxnId = String(input?.providerTxnId || "").trim();
  const providerRoundId = String(input?.providerRoundId || "").trim();

  if (txnKey) {
    const existing = providerTxGetByTxnKeyStmt.get(txnKey);
    if (existing) {
      const duplicateOk = String(existing?.status || "").toLowerCase() === "success";
      return {
        ok: duplicateOk,
        duplicate: true,
        code: duplicateOk ? 0 : 9,
        msg: duplicateOk ? "Success" : "Transaction already failed",
        balance: normalizeMoneyAmount(existing?.after_balance),
        txRow: existing,
      };
    }
  }

  const walletBefore = ensureWallet(userId);
  const beforeBalance = normalizeMoneyAmount(walletBefore?.balance);
  let afterBalance = beforeBalance;
  let status = "success";
  let code = 0;
  let msg = "Success";
  let relatedTxnKey = String(input?.relatedTxnKey || "").trim();

  if (action === "debit") {
    if (amount <= 0) {
      status = "failed";
      code = 6;
      msg = "Invalid amount";
    } else if (normalizeMoneyAmount(beforeBalance - toNum(walletBefore?.exposer, 0)) < amount) {
      // Coins locked in open sports bets cannot be spent in the casino.
      status = "failed";
      code = 9;
      msg = "Insufficient balance";
    } else {
      afterBalance = normalizeMoneyAmount(beforeBalance - amount);
    }
  } else if (action === "credit") {
    if (amount <= 0) {
      status = "failed";
      code = 6;
      msg = "Invalid amount";
    } else {
      afterBalance = normalizeMoneyAmount(beforeBalance + amount);
    }
  } else if (action === "rollback") {
    const refTxnId = String(input?.rollbackReferenceTxnId || "").trim();
    let ref = null;
    if (relatedTxnKey) ref = providerTxGetByTxnKeyStmt.get(relatedTxnKey);
    if (!ref && refTxnId) ref = providerTxGetByProviderTxnIdStmt.get(refTxnId);
    if (!ref) {
      status = "failed";
      code = 7;
      msg = "Reference transaction not found";
    } else {
      relatedTxnKey = String(ref?.txn_key || relatedTxnKey || "").trim();
      const refAmount = normalizeMoneyAmount(ref?.amount);
      const rollbackAmount = amount > 0 ? amount : refAmount;
      if (String(ref?.user_id || "") !== userId) {
        status = "failed";
        code = 7;
        msg = "Reference transaction belongs to another player";
      } else if (String(ref?.status || "").toLowerCase() !== "success") {
        // A failed debit never took coins, so there is nothing to refund.
        status = "failed";
        code = 7;
        msg = "Reference transaction did not succeed";
      } else if (providerRollbackOfStmt.get(relatedTxnKey)) {
        status = "failed";
        code = 7;
        msg = "Transaction already rolled back";
      } else if (rollbackAmount > refAmount + 1e-9) {
        status = "failed";
        code = 6;
        msg = "Rollback amount exceeds the original transaction";
      } else if (rollbackAmount <= 0) {
        status = "failed";
        code = 6;
        msg = "Invalid rollback amount";
      } else if (String(ref?.action || "").toLowerCase() === "debit") {
        afterBalance = normalizeMoneyAmount(beforeBalance + rollbackAmount);
      } else if (String(ref?.action || "").toLowerCase() === "credit") {
        if (beforeBalance < rollbackAmount) {
          status = "failed";
          code = 9;
          msg = "Insufficient balance";
        } else {
          afterBalance = normalizeMoneyAmount(beforeBalance - rollbackAmount);
        }
      } else {
        status = "failed";
        code = 7;
        msg = "Unsupported reference transaction";
      }
    }
  } else if (action === "balance") {
    afterBalance = beforeBalance;
  } else {
    status = "failed";
    code = 6;
    msg = "Unsupported action";
  }

  if (status === "success" && action !== "balance") {
    db.prepare("UPDATE wallets SET balance=?,updated_at=? WHERE user_id=?").run(afterBalance, now, userId);
    syncWalletToMysql({
      userId,
      balance: afterBalance,
      exposer: toNum(walletBefore?.exposer, 0),
      casinoExposer: toNum(walletBefore?.casino_exposer, 0),
      updatedAt: now,
    }).catch(() => {});
  }

  let txRow = null;
  if (txnKey) {
    providerTxInsertStmt.run(
      id("ctx_"),
      txnKey,
      providerTxnId || null,
      providerRoundId || null,
      relatedTxnKey || null,
      userId,
      String(input?.externalUserId || "").trim(),
      String(input?.user?.username || "").trim(),
      action,
      // Store what actually moved (a rollback may omit its amount).
      action === "rollback" && status === "success" ? normalizeMoneyAmount(Math.abs(afterBalance - beforeBalance)) : amount,
      status,
      beforeBalance,
      afterBalance,
      String(input?.gameCode || "").trim() || null,
      String(input?.vendorCode || "").trim() || null,
      String(input?.providerName || "").trim() || null,
      String(input?.requestIp || "").trim() || null,
      String(input?.requestJson || "{}"),
      String(input?.responseJson || "{}"),
      now,
      now
    );
    txRow = providerTxGetByTxnKeyStmt.get(txnKey);
  }

  return {
    ok: status === "success",
    duplicate: false,
    code,
    msg,
    balance: afterBalance,
    txRow,
  };
});
const userView = (u) => ({
  _id: u.id,
  username: u.username,
  sessionId: u.session_id || Date.now(),
  role: u.role,
  level: u.level,
  parentId: u.parent_id,
});
const parseProfileJson = (raw) => {
  const parsed = safeParse(raw, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
};
const boolOrDefault = (value, fallback) => {
  if (value === undefined || value === null || value === "") return fallback;
  return toBool(value);
};
const sanitizeAdminUsername = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
const normalizeMobileNumber = (value) => String(value || "").trim().replace(/[^\d+]/g, "");
const normalizeAdminPartnershipType = (value) => {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return "master";
  const role = normalizePanelRole(raw, "");
  if (role === "user") return "client";
  return role || "other";
};
const panelRoleToPartnershipType = (role) => {
  const normalizedRole = normalizePanelRole(role, "user");
  return normalizedRole === "user" ? "client" : normalizedRole;
};
const partnershipTypeToPanelRole = (partnershipType) => {
  const normalizedType = normalizeAdminPartnershipType(partnershipType);
  if (["super_admin", "admin", "master"].includes(normalizedType)) return normalizedType;
  return "user";
};
const resolveAccountRoleFromInput = (body = {}, actorRole = "user") => {
  const explicitRoleValue = body.role ?? body.accountType ?? body.account_type ?? body.userType ?? body.user_type ?? "";
  const explicitRoleText = String(explicitRoleValue || "").trim();
  const requestedRole = explicitRoleText
    ? normalizePanelRole(explicitRoleText, "user")
    : partnershipTypeToPanelRole(body.partnershipType || body.partnership);
  return normalizePanelRole(requestedRole, "user");
};
const maskTransactionCode = (value) => {
  const clean = String(value || "").trim();
  if (!clean) return "";
  if (clean.length <= 2) return "*".repeat(clean.length);
  return `${clean.slice(0, 1)}${"*".repeat(Math.max(1, clean.length - 2))}${clean.slice(-1)}`;
};
const TRANSACTION_CODE_PREFIX = "enc:v1:";
const encryptTransactionCode = (value) => {
  const clean = String(value || "").trim();
  if (!clean) return "";
  if (clean.startsWith(TRANSACTION_CODE_PREFIX)) return clean;
  return `${TRANSACTION_CODE_PREFIX}${CryptoJS.AES.encrypt(clean, ENCRYPTION_KEY).toString()}`;
};
const decryptTransactionCode = (value) => {
  const stored = String(value || "").trim();
  if (!stored.startsWith(TRANSACTION_CODE_PREFIX)) return stored;
  try {
    return CryptoJS.AES.decrypt(stored.slice(TRANSACTION_CODE_PREFIX.length), ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8) || "";
  } catch {
    return "";
  }
};
const migrateTransactionCodesAtRest = () => {
  const rows = db.prepare("SELECT general_id,transaction_code FROM admin_client_partnership WHERE transaction_code IS NOT NULL AND transaction_code NOT LIKE ?").all(`${TRANSACTION_CODE_PREFIX}%`);
  const update = db.prepare("UPDATE admin_client_partnership SET transaction_code=?,updated_at=? WHERE general_id=?");
  const now = nowIso();
  const migrate = db.transaction(() => {
    for (const row of rows) update.run(encryptTransactionCode(row.transaction_code), now, row.general_id);
  });
  if (rows.length) migrate();
};
migrateTransactionCodesAtRest();
const resolveActionActor = (req) => {
  const actor = reqUser(req);
  if (!actor) return "admin";
  return String(actor.username || actor.id || "admin");
};
const buildAdminClientListItem = (row) => ({
  ...(() => {
    const profile = parseProfileJson(row?.profile_json || "{}");
    return { referenceName: String(profile?.referenceName || "") };
  })(),
  id: row?.id,
  userId: row?.user_id,
  role: String(row?.user_role || "user").toLowerCase(),
  username: row?.username || "",
  fullName: row?.full_name || "",
  city: row?.city || "",
  mobileNumber: row?.mobile_number || "",
  creditAmount: toNum(row?.credit_amount, 0),
  walletBalance: toNum(row?.wallet_balance, toNum(row?.credit_amount, 0)),
  createdBy: row?.created_by || "",
  partnership: {
    type: row?.partnership_type || "agent",
    remark: row?.remark || "",
    transactionCodeMasked: maskTransactionCode(decryptTransactionCode(row?.transaction_code || "")),
  },
  createdAt: row?.created_at || null,
  updatedAt: row?.updated_at || null,
});
// ---- Report helpers ---------------------------------------------------
// Realised P/L = coins won/lost on settled sports bets (ledger) + casino net.
const REPORT_BET_KINDS = ["bet_win", "bet_loss", "bet_rollback"];
const DEPOSIT_KINDS = ["deposit", "deposit_request", "opening_credit", "token_redeem"];
const WITHDRAW_KINDS = ["withdraw", "withdraw_request"];
const sqlList = (items) => items.map((k) => `'${k}'`).join(",");
const CASINO_SIGNED_SQL = `
  SELECT t.id, t.user_id AS uid, t.created_at AS ts, t.game_code, t.provider_name, t.vendor_code, t.provider_round_id, t.action,
    CASE lower(t.action)
      WHEN 'credit' THEN t.amount
      WHEN 'debit' THEN -t.amount
      WHEN 'rollback' THEN CASE lower(r.action) WHEN 'credit' THEN -t.amount ELSE t.amount END
      ELSE 0 END AS v
  FROM casino_provider_transactions t
  LEFT JOIN casino_provider_transactions r ON r.txn_key=t.related_txn_key
  WHERE lower(t.status)='success'`;
const realizedPnlMap = ({ fromIso = null, toIso = null } = {}) => {
  const range = (col) => `${fromIso ? ` AND ${col}>=@from` : ""}${toIso ? ` AND ${col}<=@to` : ""}`;
  const rows = db
    .prepare(
      `SELECT uid, ROUND(SUM(v),2) AS pnl FROM (
         SELECT to_user_id AS uid, amount AS v FROM coin_ledger WHERE kind IN (${sqlList(REPORT_BET_KINDS)})${range("created_at")}
         UNION ALL SELECT from_user_id, -amount FROM coin_ledger WHERE kind IN (${sqlList(REPORT_BET_KINDS)})${range("created_at")}
         UNION ALL SELECT uid, v FROM (${CASINO_SIGNED_SQL}) c WHERE 1=1${range("ts")}
       ) GROUP BY uid`
    )
    .all({ ...(fromIso ? { from: fromIso } : {}), ...(toIso ? { to: toIso } : {}) });
  return new Map(rows.map((r) => [String(r.uid), toNum(r.pnl, 0)]));
};
const realizedPnlForUserStmt = db.prepare(
  `SELECT ROUND(COALESCE(SUM(v),0),2) AS pnl FROM (
     SELECT amount AS v FROM coin_ledger WHERE kind IN (${sqlList(REPORT_BET_KINDS)}) AND to_user_id=@u
     UNION ALL SELECT -amount FROM coin_ledger WHERE kind IN (${sqlList(REPORT_BET_KINDS)}) AND from_user_id=@u
     UNION ALL SELECT v FROM (${CASINO_SIGNED_SQL}) c WHERE uid=@u
   )`
);
const realizedPnlForUser = (userId) => toNum(realizedPnlForUserStmt.get({ u: String(userId) })?.pnl, 0);
const ledgerSumsByUser = ({ kinds, side, fromIso = null, toIso = null }) => {
  const col = side === "to" ? "to_user_id" : "from_user_id";
  const rows = db
    .prepare(
      `SELECT ${col} AS uid, ROUND(SUM(amount),2) AS total FROM coin_ledger WHERE kind IN (${sqlList(kinds)})${fromIso ? " AND created_at>=@from" : ""}${toIso ? " AND created_at<=@to" : ""} GROUP BY ${col}`
    )
    .all({ ...(fromIso ? { from: fromIso } : {}), ...(toIso ? { to: toIso } : {}) });
  return new Map(rows.map((r) => [String(r.uid), toNum(r.total, 0)]));
};
// Coins that crossed into (deposits) or out of (withdrawals) a set of accounts.
// Transfers between two accounts that are both inside the set are internal
// (e.g. an Admin funding its own clients) and are not counted again.
const ledgerBoundaryTotal = ({ insideIds, kinds, side, fromIso = null, toIso = null }) => {
  const rows = db
    .prepare(
      `SELECT from_user_id AS f, to_user_id AS t, ROUND(SUM(amount),2) AS total FROM coin_ledger WHERE kind IN (${sqlList(kinds)})${fromIso ? " AND created_at>=@from" : ""}${toIso ? " AND created_at<=@to" : ""} GROUP BY from_user_id,to_user_id`
    )
    .all({ ...(fromIso ? { from: fromIso } : {}), ...(toIso ? { to: toIso } : {}) });
  let total = 0;
  for (const r of rows) {
    const inside = side === "to" ? String(r.t) : String(r.f);
    const other = side === "to" ? String(r.f) : String(r.t);
    if (insideIds.has(inside) && !insideIds.has(other)) total += toNum(r.total, 0);
  }
  return Math.round(total * 100) / 100;
};
const parseReportDate = (value, endOfDay = false) => {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const ms = Date.parse(raw.length <= 10 ? raw + (endOfDay ? "T23:59:59.999Z" : "T00:00:00.000Z") : raw);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : null;
};
// The account a report is about: a userId/username in the actor's downline, else the actor.
const resolveReportSubject = (req, res, src) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  const authRole = reqAuthRole(req, authUser.role);
  const wantedId = String(src?.userId || src?.user_id || "").trim();
  const wantedName = String(src?.username || "").trim();
  const subject = (wantedId && getUserById(wantedId)) || (wantedName && getUserByUsername(wantedName)) || (wantedId || wantedName ? null : authUser);
  if (!subject) {
    res.status(404).json(env("User not found", {}, true, 404));
    return null;
  }
  if (!canActorAccessTargetUser(authUser, authRole, subject)) {
    res.status(403).json(env("Access denied", {}, true, 403));
    return null;
  }
  return { authUser, authRole, subject };
};
const sportOfMatchStmt = db.prepare("SELECT m.sport_id, m.name FROM matches m WHERE m.match_id=?");
// "If this runner wins" net for players, keyed marketId_selectionId.
const buildOpenBook = (betRows) => {
  const book = {};
  const runnersByMarket = new Map();
  for (const bet of betRows) {
    const key = String(bet.market_id);
    if (!runnersByMarket.has(key)) runnersByMarket.set(key, new Set());
    runnersByMarket.get(key).add(String(bet.selection_id));
    const ext = safeParse(bet.external_json, {}) || {};
    const section = Array.isArray(ext.section) ? ext.section : safeParse(bet.section_json, []) || [];
    section.forEach((r) => r?.sid && runnersByMarket.get(key).add(String(r.sid)));
  }
  for (const bet of betRows) {
    const stake = toNum(bet.stack, 0);
    const profit = Math.round(stake * (toNum(bet.odds, 0) - 1) * 100) / 100;
    const isBack = toNum(bet.is_back, 1) === 1;
    for (const sel of runnersByMarket.get(String(bet.market_id))) {
      const onWinner = sel === String(bet.selection_id);
      const v = isBack ? (onWinner ? profit : -stake) : (onWinner ? -profit : stake);
      const k = `${bet.market_id}_${sel}`;
      book[k] = Math.round((toNum(book[k], 0) + v) * 100) / 100;
    }
  }
  return book;
};
const buildUserListItem = (row) => {
  const profile = parseProfileJson(row?.profile_json || row?.data_json || "{}");
  const status = profile?.status && typeof profile.status === "object" ? profile.status : {};
  const walletBalance = toNum(row?.wallet_balance ?? row?.balance, 0);
  const walletExposer = toNum(row?.wallet_exposer ?? row?.exposer, 0);
  const walletCasinoExposer = toNum(row?.wallet_casino_exposer ?? row?.casino_exposer, 0);
  const isLogin = boolOrDefault(status.isActive ?? profile?.isLogin, true);
  const betLock = boolOrDefault(status.betLock ?? profile?.betLock, false);
  const parentStr = Array.isArray(profile?.parentStr)
    ? profile.parentStr
    : row?.parent_id
      ? [row.parent_id]
      : [];
  const partnership =
    profile?.partnership && typeof profile.partnership === "object" && !Array.isArray(profile.partnership)
      ? profile.partnership
      : {};
  // Credit reference is only what the parent set; it is never the balance.
  const creditRefrencesRaw =
    profile?.creditRefrences !== undefined
      ? profile.creditRefrences
      : profile?.creditReferences !== undefined
        ? profile.creditReferences
        : toNum(row?.credit_limit, 0);
  const exposerLimitRaw =
    profile?.exposerLimit !== undefined
      ? profile.exposerLimit
      : profile?.exposureLimit !== undefined
        ? profile.exposureLimit
        : 0;
  return {
    _id: row?.id,
    username: row?.username,
    role: String(row?.role || "user").toLowerCase(),
    level: toNum(row?.level, 1),
    parentId: row?.parent_id || null,
    minBet: toNum(row?.min_bet ?? profile?.minBet, 0),
    maxBet: toNum(row?.max_bet ?? profile?.maxBet, 0),
    creditLimit: toNum(row?.credit_limit ?? profile?.creditLimit, 0),
    partnershipRemaining: toNum(row?.partnership_remaining ?? profile?.partnership?.remainingPercentage, 100),
    parentStr,
    sessionId: toNum(row?.session_id, Date.now()),
    isLogin,
    betLock,
    creditRefrences: toNum(creditRefrencesRaw, 0),
    exposerLimit: toNum(exposerLimitRaw, 0),
    partnership,
    service:
      profile?.service && typeof profile.service === "object" && !Array.isArray(profile.service)
        ? profile.service
        : {},
    balance: {
      balance: walletBalance,
      exposer: walletExposer,
      casinoexposer: walletCasinoExposer,
      profitLoss: toNum(row?.profit_loss ?? (row?.id ? realizedPnlForUser(row.id) : 0), 0),
    },
    profile,
    createdAt: row?.created_at || row?.createdAt || null,
    updatedAt: row?.updated_at || row?.updatedAt || null,
  };
};
const normalizeStatusFilter = (value) => {
  const raw = String(value ?? "").trim().toLowerCase();
  if (!raw) return null;
  if (["1", "true", "active"].includes(raw)) return true;
  if (["0", "false", "inactive"].includes(raw)) return false;
  return null;
};
const normalizeTypeFilter = (value) => {
  const raw = String(value ?? "").trim().toLowerCase();
  if (!raw || raw === "all") return "";
  return raw;
};
const isClientListBlockedRole = (role) => isOwnerPanelRole(role);
const normalizeSearchTerm = (query = {}) => {
  const username = String(query?.username || "").trim();
  if (username) return username.toLowerCase();
  const search = String(query?.search || "").trim();
  if (search && !["true", "false"].includes(search.toLowerCase())) return search.toLowerCase();
  return "";
};
const buildPaginatedItems = (items, pageRaw, limitRaw) => {
  const limit = Math.min(200, Math.max(1, toNum(limitRaw, 50)));
  const totalDocs = Array.isArray(items) ? items.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
  const page = Math.min(totalPages, Math.max(1, toNum(pageRaw, 1)));
  const start = (page - 1) * limit;
  const sliced = (Array.isArray(items) ? items : []).slice(start, start + limit);
  return {
    docs: sliced,
    items: sliced,
    totalDocs,
    limit,
    totalPages,
    page,
    pagingCounter: totalDocs > 0 ? start + 1 : 0,
    hasPrevPage: page > 1,
    hasNextPage: page < totalPages,
    prevPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    partnership: {},
  };
};
const userRowsSqliteStmt = db.prepare(
  `SELECT
    u.id,
    u.username,
    u.role,
    u.level,
    u.parent_id,
    u.min_bet,
    u.max_bet,
    u.credit_limit,
    u.partnership_remaining,
    u.session_id,
    u.created_at,
    u.updated_at,
    w.balance AS wallet_balance,
    w.exposer AS wallet_exposer,
    w.casino_exposer AS wallet_casino_exposer,
    p.data_json AS profile_json
  FROM users u
  LEFT JOIN wallets w ON w.user_id = u.id
  LEFT JOIN user_profiles p ON p.user_id = u.id
  ORDER BY datetime(u.created_at) DESC`
);
const userListResponseCache = makeTtlCache({ ttlMs: USER_LIST_CACHE_TTL_MS, maxEntries: 120 });
const queryUserRowsSqlite = () => userRowsSqliteStmt.all();
const queryUserRowsMysql = async () => {
  if (!mysqlPool) return [];
  const rows = await mysqlExec(
    `SELECT
      u.id,
      u.username,
      u.role,
      u.level,
      u.parent_id,
      u.session_id,
      u.created_at,
      u.updated_at,
      w.balance AS wallet_balance,
      w.exposer AS wallet_exposer,
      w.casino_exposer AS wallet_casino_exposer,
      p.data_json AS profile_json
    FROM users u
    LEFT JOIN wallets w ON w.user_id = u.id
    LEFT JOIN user_profiles p ON p.user_id = u.id
    ORDER BY u.created_at DESC
    LIMIT 5000`
  );
  return Array.isArray(rows) ? rows : [];
};
const userNameListStmt = db.prepare("SELECT id,username,role FROM users ORDER BY username ASC");
const userListSuggestionCache = makeTtlCache({ ttlMs: USER_LIST_CACHE_TTL_MS, maxEntries: 400 });
const tokenFromReq = (req) => {
  const h = req.headers.authorization || "";
  return h.toLowerCase().startsWith("bearer ") ? h.slice(7).trim() : "";
};
const sessionByTokenStmt = db.prepare("SELECT user_id,expires_at FROM sessions WHERE token=?");
const sessionByRefreshTokenStmt = db.prepare("SELECT user_id,token,expires_at FROM sessions WHERE refresh_token=?");
const deleteSessionByTokenStmt = db.prepare("DELETE FROM sessions WHERE token=?");
const deleteSessionsByUserStmt = db.prepare("DELETE FROM sessions WHERE user_id=?");
const SESSION_EXPIRED_CODE = "SESSION_EXPIRED";
const SESSION_EXPIRED_MESSAGE = "You have been logged out because this account was signed in from another device.";
const validateAuthToken = (token) => {
  const cleanToken = String(token || "").trim();
  if (!cleanToken) return { ok: false, reason: "missing", user: null, payload: null };
  let payload = null;
  try {
    payload = jwt.verify(cleanToken, JWT_SECRET);
  } catch {
    return { ok: false, reason: "invalid", user: null, payload: null };
  }
  const userId = String(payload?.userId || "").trim();
  if (!userId) return { ok: false, reason: "invalid", user: null, payload };
  const user = getUserById(userId);
  if (!user) return { ok: false, reason: "invalid", user: null, payload };
  const sessionRow = sessionByTokenStmt.get(cleanToken);
  if (!sessionRow || String(sessionRow.user_id || "") !== String(user.id)) {
    return { ok: false, reason: "session_expired", user, payload };
  }
  const expiresAt = toNum(sessionRow.expires_at, 0);
  if (expiresAt && expiresAt < Date.now()) {
    deleteSessionByTokenStmt.run(cleanToken);
    return { ok: false, reason: "session_expired", user, payload };
  }
  const tokenSessionId = toNum(payload?.sid || payload?.sessionId, 0);
  const currentSessionId = toNum(user.session_id, 0);
  if (tokenSessionId && currentSessionId && tokenSessionId !== currentSessionId) {
    return { ok: false, reason: "session_expired", user, payload };
  }
  if (!isAccountChainActive(user)) return { ok: false, reason: "inactive", user: null, payload };
  return { ok: true, reason: "ok", user, payload };
};
// An account is usable only if it and every account above it are active.
// Super Admin can never be locked out.
const isAccountChainActive = (user) => {
  let cursor = user;
  for (let guard = 0; cursor && guard < 12; guard += 1) {
    if (isOwnerPanelRole(cursor.role)) return true;
    if (!readUserRuntimeStatusFlags(cursor.id).isActive) return false;
    cursor = cursor.parent_id ? getUserById(String(cursor.parent_id)) : null;
  }
  return true;
};
const getReqAuthState = (req) => {
  if (req && req.__authState) return req.__authState;
  const token = tokenFromReq(req);
  const result = token ? validateAuthToken(token) : { ok: false, reason: "missing", user: null, payload: null };
  if (req) req.__authState = result;
  return result;
};
// Identity comes only from a valid login token; never from the request body.
const reqUser = (req) => {
  const authState = getReqAuthState(req);
  return authState.ok && authState.user ? authState.user : null;
};
const reqAuthUser = (req) => {
  const authState = getReqAuthState(req);
  return authState.ok ? authState.user : null;
};
const reqAuthRole = (req, fallback = "user") => {
  const authState = getReqAuthState(req);
  if (!authState.ok) return normalizePanelRole(fallback, "user");
  return normalizePanelRole(authState?.user?.role || authState?.payload?.role || fallback, "user");
};
const normalizeAdminFeaturePermissions = (input, defaultEnabled = false) => {
  const out = { ...ADMIN_FEATURE_DEFAULTS };
  if (defaultEnabled) {
    for (const key of ADMIN_FEATURE_KEY_SET) out[key] = true;
  }
  if (Array.isArray(input)) {
    for (const value of input) {
      const key = String(value || "").trim().toLowerCase();
      if (ADMIN_FEATURE_KEY_SET.has(key)) out[key] = true;
    }
    return out;
  }
  if (input && typeof input === "object") {
    for (const key of ADMIN_FEATURE_KEY_SET) {
      if (Object.prototype.hasOwnProperty.call(input, key)) out[key] = !!input[key];
    }
  }
  return out;
};
const parseAdminFeaturePermissions = (raw, defaultEnabled = false) => {
  if (raw && typeof raw === "object" && !Array.isArray(raw)) return normalizeAdminFeaturePermissions(raw, defaultEnabled);
  const parsed = safeParse(String(raw || ""), null);
  if (parsed && typeof parsed === "object") return normalizeAdminFeaturePermissions(parsed, defaultEnabled);
  return normalizeAdminFeaturePermissions([], defaultEnabled);
};
const adminFeaturePermissionGetStmt = db.prepare(
  "SELECT user_id,permissions_json,created_by,created_at,updated_at FROM admin_feature_permissions WHERE user_id=?"
);
const adminFeaturePermissionUpsertStmt = db.prepare(
  `INSERT INTO admin_feature_permissions (user_id,permissions_json,created_by,created_at,updated_at)
   VALUES (?,?,?,?,?)
   ON CONFLICT(user_id) DO UPDATE SET
     permissions_json=excluded.permissions_json,
     created_by=COALESCE(admin_feature_permissions.created_by, excluded.created_by),
     created_at=COALESCE(admin_feature_permissions.created_at, excluded.created_at),
     updated_at=excluded.updated_at`
);
const listManagedAdminStmt = db.prepare(
  `SELECT
    u.id,
    u.username,
    u.role,
    u.level,
    u.parent_id,
    u.created_at,
    u.updated_at,
    p.data_json AS profile_json,
    af.permissions_json
  FROM users u
  LEFT JOIN user_profiles p ON p.user_id = u.id
  LEFT JOIN admin_feature_permissions af ON af.user_id = u.id
  WHERE lower(u.role) IN ('super_admin','admin','master')
  ORDER BY datetime(u.created_at) DESC, u.created_at DESC`
);
const getAdminFeaturePermissionsForUser = (user, role) => {
  const normalizedRole = normalizePanelRole(role || user?.role || "user", "user");
  if (isOwnerPanelRole(normalizedRole)) return { ...ADMIN_FEATURE_ALL_ENABLED };
  if (normalizedRole === "user") return { ...ADMIN_FEATURE_DEFAULTS };
  return { ...ADMIN_FEATURE_ALL_ENABLED };
};
const saveAdminFeaturePermissionsForUser = ({ userId, permissions, actorId = null }) => {
  const cleanUserId = String(userId || "").trim();
  if (!cleanUserId) throw new Error("userId is required");
  const now = nowIso();
  const prev = adminFeaturePermissionGetStmt.get(cleanUserId);
  const normalized = normalizeAdminFeaturePermissions(permissions, false);
  const permissionsJson = JSON.stringify(normalized);
  adminFeaturePermissionUpsertStmt.run(
    cleanUserId,
    permissionsJson,
    actorId || prev?.created_by || null,
    prev?.created_at || now,
    now
  );
  syncAdminFeaturePermissionsToMysql({
    userId: cleanUserId,
    permissionsJson,
    createdBy: actorId || prev?.created_by || null,
    createdAt: prev?.created_at || now,
    updatedAt: now,
  }).catch(() => {});
  return normalized;
};
const isAdminFeatureAllowedForUser = (user, role, featureKey) => {
  const key = String(featureKey || "").trim().toLowerCase();
  if (!key || !ADMIN_FEATURE_KEY_SET.has(key)) return true;
  const permissions = getAdminFeaturePermissionsForUser(user, role);
  return !!permissions[key];
};
const getOwnerAuthContext = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  const authRole = reqAuthRole(req, authUser.role);
  if (!isOwnerPanelRole(authRole)) {
    res.status(403).json(env("Only owner can perform this action", {}, true, 403));
    return null;
  }
  return { authUser, authRole };
};
const childUserRowsByParent = db.prepare("SELECT id FROM users WHERE parent_id=?");
const directChildUserIdsCache = makeTtlCache({ ttlMs: DESCENDANT_CACHE_TTL_MS, maxEntries: 3000 });
const descendantUserIdsCache = makeTtlCache({ ttlMs: DESCENDANT_CACHE_TTL_MS, maxEntries: 2000 });
const getDirectChildUserIdSet = (parentUserId) => {
  const parentId = String(parentUserId || "").trim();
  if (!parentId) return new Set();
  const cached = directChildUserIdsCache.get(parentId);
  if (Array.isArray(cached)) return new Set(cached);
  const out = new Set();
  const rows = childUserRowsByParent.all(parentId);
  for (const row of rows) {
    const childId = String(row?.id || "").trim();
    if (!childId) continue;
    out.add(childId);
  }
  directChildUserIdsCache.set(parentId, [...out]);
  return out;
};
const getDescendantUserIdSet = (rootUserId) => {
  const root = String(rootUserId || "").trim();
  if (!root) return new Set();
  const cached = descendantUserIdsCache.get(root);
  if (Array.isArray(cached)) return new Set(cached);
  const out = new Set();
  const queue = [root];
  let guard = 0;
  while (queue.length && guard < 50000) {
    const parentId = queue.shift();
    const children = childUserRowsByParent.all(parentId);
    for (const child of children) {
      const cid = String(child?.id || "").trim();
      if (!cid || out.has(cid)) continue;
      out.add(cid);
      queue.push(cid);
    }
    guard += 1;
  }
  descendantUserIdsCache.set(root, [...out]);
  return out;
};
const getVisibleUserIdsForActor = (actor, actorRole) => {
  if (!actor) return new Set();
  if (isOwnerPanelRole(actorRole)) return null;
  return getDescendantUserIdSet(actor.id);
};
const canActorAccessTargetUser = (actor, actorRole, target) => {
  if (!actor || !target) return false;
  if (String(actor.id) === String(target.id)) return true;
  if (isOwnerPanelRole(actorRole)) return true;
  const visible = getDescendantUserIdSet(actor.id);
  return visible.has(String(target.id));
};
const readUserLimits = (body = {}) => {
  const minBet = toNum(body.minBet ?? body.min_bet, 0);
  const maxBet = toNum(body.maxBet ?? body.max_bet, 0);
  const creditLimit = toNum(body.creditLimit ?? body.creditReference ?? body.credit_reference, 0);
  if (![minBet, maxBet, creditLimit].every(Number.isFinite) || minBet < 0 || maxBet < 0 || creditLimit < 0) {
    throw new Error("Bet limits and credit reference must be non-negative numbers");
  }
  if (maxBet > 0 && maxBet < minBet) throw new Error("maxBet must be greater than or equal to minBet");
  return { minBet, maxBet, creditLimit };
};
const readUserLimitsWithLegacyPayload = (body = {}) => {
  const source = { ...body };
  const settings = body.userSetting && typeof body.userSetting === "object" && !Array.isArray(body.userSetting)
    ? Object.values(body.userSetting)
    : [];
  const legacyMinValues = settings.map((item) => toNum(item?.minBet, 0)).filter((value) => value > 0);
  const legacyMaxValues = settings.map((item) => toNum(item?.maxBet, 0)).filter((value) => value > 0);
  if (source.minBet === undefined && legacyMinValues.length) source.minBet = Math.min(...legacyMinValues);
  if (source.maxBet === undefined && legacyMaxValues.length) source.maxBet = Math.max(...legacyMaxValues);
  if (source.creditLimit === undefined) source.creditLimit = body.exposerLimit ?? body.exposureLimit ?? 0;
  return readUserLimits(source);
};
const saveUserPartnerships = (userId, partnershipInput, actor, actorRole, now) => {
  const validation = validatePartnershipEntries({
    input: partnershipInput,
    getPartner: (partnerId) => getUserById(partnerId),
    canAccessPartner: (partner) => String(partner.id) === String(actor.id) || canActorAccessTargetUser(actor, actorRole, partner),
  });
  const insert = db.prepare(
    "INSERT INTO user_partnerships (id,user_id,partner_id,share_percentage,created_at,updated_at) VALUES (?,?,?,?,?,?)"
  );
  for (const entry of validation.entries) {
    insert.run(id("up_"), userId, entry.partnerId, entry.sharePercentage, now, now);
  }
  db.prepare("UPDATE users SET partnership_remaining=?,updated_at=? WHERE id=?").run(validation.remainingShare, now, userId);
  return validation;
};
const getCreationParentId = (actor, actorRole) => {
  if (actor && normalizePanelRole(actorRole, "user") !== "user") return actor.id;
  return null;
};
const makeTokens = (u, roleOverride = null) => {
  const sessionId = toNum(u?.session_id, Date.now()) || Date.now();
  const payload = { userId: u.id, _id: u.id, username: u.username, role: roleOverride || u.role, sid: sessionId };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
  const refreshToken = jwt.sign({ ...payload, type: "refresh" }, JWT_REFRESH, { expiresIn: "30d" });
  const createdAt = nowIso();
  const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
  deleteSessionsByUserStmt.run(u.id);
  db.prepare("INSERT OR REPLACE INTO sessions (token,refresh_token,user_id,created_at,expires_at) VALUES (?,?,?,?,?)").run(
    token,
    refreshToken,
    u.id,
    createdAt,
    expiresAt
  );
  syncSessionToMysql({
    token,
    refreshToken,
    userId: u.id,
    createdAt,
    expiresAt,
  }).catch(() => {});
  return { token, refreshToken };
};

const mapMatch = (r) => {
  const x = safeParse(r.external_json, {}) || {};
  const section = safeParse(r.section_json, []) || [];
  return {
    ...x,
    _id: x._id || String(r.match_id),
    id: x.id || String(r.match_id),
    matchId: r.match_id,
    sportId: r.sport_id,
    name: x.name || r.name,
    ename: x.ename || r.name,
    cid: x.cid || r.competition_id || 0,
    cname: x.cname || r.competition_name || "",
    matchDateTime: x.matchDateTime || r.match_datetime,
    stime: x.stime || r.match_datetime,
    inPlay: r.in_play === 1,
    iplay: r.in_play === 1,
    bm: r.has_bookmaker === 1,
    isBookMaker: r.has_bookmaker === 1,
    f: r.has_fancy === 1,
    f1: r.has_fancy1 === 1,
    tv: r.has_tv === 1,
    status: r.status,
    section: Array.isArray(x.section) ? x.section : section,
    externalData: x.externalData || { gmid: r.match_id, etid: r.sport_id, section },
  };
};

// Saved snapshots may only stand in for public content (sports, casino lists,
// banners). Never for balances, bets, statements, payments or user lists.
const SNAPSHOT_BLOCKED = /^(account-statement|alluserbetlist|bets|get-bank-and-upi|get-deposit-withdraw|get-payment|payment|get-user-balance|profit-loss|user-info|admin\/(dashboard|userlist|activeuserlist|agentlist|bankuserlist|acccasinolist|acccreateload|favmasterlist|fraud\/|report\/|user\/|treedata|h_p\/bal|h_p\/casino\/book|m_p\/|casino\/gettoken))/i;
const trySnapshot = (req, res, next) => {
  const p = req.path.replace(/^\/api\/?/, "");
  if (SNAPSHOT_BLOCKED.test(p)) return res.status(404).json(env("Not available", {}, true, 404));
  const snap = loadSnapshot(p);
  if (snap === null || snap === undefined) return next();
  if (typeof snap === "string") {
    const t = snap.trim();
    if (t.startsWith("{") || t.startsWith("[")) {
      const o = safeParse(t, null);
      if (o !== null) return res.json(o);
    }
    return res.type("text/html").send(snap);
  }
  return res.json(snap);
};

app.get("/health", (_req, res) => res.json({ ok: true, time: nowIso() }));
const localIpapiResponse = { ip: "127.0.0.1", city: "Localhost", region: "Local", country_name: "Local" };
app.get("/ipapi/json", (_req, res) => res.json(localIpapiResponse));
// Some legacy axios calls become /api/ipapi/json or /api//ipapi/json after URL rewrite.
app.get(/^\/api\/+ipapi\/json\/?$/, (_req, res) => res.json(localIpapiResponse));
// Admin sidebar polls this endpoint after login.
app.get("/api/adminMessage.json", (_req, res) => res.json({ message: "" }));

app.get("/url-rewrite.js", (_req, res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  const js = `(function(){
  function normalize(input){
    try{
      var raw = typeof input==='string' ? input : (input && input.url ? input.url : String(input||''));
      if(!raw) return raw;

      if(raw.indexOf('/ipapi/json')===0){
        return '/ipapi/json';
      }

      // Fast exact-prefix replacements for known legacy domains
      var pairs=[
        ['https://api.ambaniexchange.org/api','/api'],
        ['http://api.ambaniexchange.org/api','/api'],
        ['https://fairpy.ambaniexchange.org/api','/api'],
        ['http://fairpy.ambaniexchange.org/api','/api'],
        ['https://otp.ambaniexchange.org/api/otp','/otp'],
        ['http://otp.ambaniexchange.org/api/otp','/otp'],
        ['https://otp.ambaniexchange.org/api','/otp'],
        ['http://otp.ambaniexchange.org/api','/otp'],
        ['https://super.lotusbook360.live/api','/api'],
        ['http://super.lotusbook360.live/api','/api'],
        ['https://zplay1.in/pb/api/v1','/api/zplay'],
        ['http://zplay1.in/pb/api/v1','/api/zplay'],
        ['https://diamond-api.softgamingapi.com','/api/diamond'],
        ['http://diamond-api.softgamingapi.com','/api/diamond']
      ];
      for(var i=0;i<pairs.length;i++){
        if(raw.indexOf(pairs[i][0])===0){
          return pairs[i][1] + raw.slice(pairs[i][0].length);
        }
      }

      // Generic absolute-URL fallback: any external /api or /otp should route to same-origin.
      var urlObj;
      try{
        urlObj = new URL(raw, window.location.origin);
      }catch(_err){
        return raw;
      }
      if(urlObj.origin !== window.location.origin){
        if(urlObj.pathname.indexOf('/api/')===0){
          return '/api' + urlObj.pathname.slice(4) + urlObj.search + urlObj.hash;
        }
        if(urlObj.pathname === '/api'){
          return '/api' + urlObj.search + urlObj.hash;
        }
        if(urlObj.pathname.indexOf('/otp/')===0){
          return '/otp' + urlObj.pathname.slice(4) + urlObj.search + urlObj.hash;
        }
      }

      return raw;
    }catch(_e){
      return input;
    }
  }

  if(window.fetch){
    var originalFetch = window.fetch.bind(window);
    window.fetch = function(input, init){
      var mapped = normalize(input);
      if(typeof Request!=='undefined' && input instanceof Request){
        return originalFetch(new Request(mapped, input), init);
      }
      return originalFetch(mapped, init);
    };
  }

  if(window.XMLHttpRequest && window.XMLHttpRequest.prototype.open){
    var originalOpen = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function(method, url){
      var args=[method, normalize(url)].concat([].slice.call(arguments,2));
      return originalOpen.apply(this,args);
    };
  }

  function removeLegacyUsersCreateAccountLink(){
    try{
      if(window.location.pathname.indexOf('/admin') !== 0) return;
      var nodes = document.querySelectorAll('a,span');
      for(var i=0;i<nodes.length;i++){
        var node = nodes[i];
        if(!node || !node.textContent) continue;
        var text = node.textContent.replace(/\\s+/g,' ').trim().toLowerCase();
        if(text === 'create account'){
          var row = node.closest ? node.closest('li') : null;
          var rowText = row && row.textContent ? row.textContent.replace(/\\s+/g,' ').trim().toLowerCase() : '';
          if(row && rowText.indexOf('users') !== -1){
            node.remove();
          }
        }else if(text.indexOf('users create account') === 0){
          node.textContent = node.textContent.replace(/create account/i,'').trim();
        }
      }
    }catch(_e){}
  }

  var adminPermissionCache = null;
  var adminPermissionLoaded = false;
  var adminPermissionToken = '';
  var adminPermissionFetchInFlight = false;

  function normalizeText(v){
    return String(v || '').replace(/\\s+/g,' ').trim().toLowerCase();
  }

  function getAdminToken(){
    try{
      return localStorage.getItem('token-admin') || localStorage.getItem('token') || '';
    }catch(_e){
      return '';
    }
  }

  function parseJwtPayload(token){
    try{
      var clean = String(token || '').trim();
      if(!clean) return null;
      var tokenParts = clean.split('.');
      if(tokenParts.length < 2) return null;
      var raw = tokenParts[1].replace(/-/g,'+').replace(/_/g,'/');
      while(raw.length % 4 !== 0) raw += '=';
      var json = atob(raw);
      return JSON.parse(json);
    }catch(_e){
      return null;
    }
  }

  function tokenSuggestsOwner(token){
    var payload = parseJwtPayload(token);
    var role = normalizeText(payload && payload.role);
    return role === 'super_admin';
  }

  function clearAdminPermissionCache(){
    adminPermissionLoaded = false;
    adminPermissionCache = null;
  }

  function removeInjectedAddAdminLinks(){
    try{
      var nodes = document.querySelectorAll('li.codex-add-admin-link');
      for(var i=0;i<nodes.length;i++){
        var node = nodes[i];
        if(node && node.parentNode){
          node.parentNode.removeChild(node);
        }
      }
      var anchors = document.querySelectorAll('a[href]');
      for(var j=0;j<anchors.length;j++){
        var link = anchors[j];
        if(!link) continue;
        var href = String(link.getAttribute('href') || '').toLowerCase();
        var text = normalizeText(link.textContent || '');
        if(href.indexOf('/admin/add-admin') === 0 || href === '/add-admin' || text === 'add admin'){
          var row = link.closest ? link.closest('li') : null;
          if(row && row.parentNode){
            row.parentNode.removeChild(row);
          }else if(link.parentNode){
            link.parentNode.removeChild(link);
          }
        }
      }
    }catch(_e){}
  }

  function routeToFeature(pathname){
    var path = String(pathname || '').toLowerCase();
    if(!path) return '';
    if(path.indexOf('/admin') !== 0){
      path = '/admin' + (path.charAt(0) === '/' ? path : '/' + path);
    }
    if(path === '/admin' || path === '/admin/' || path.indexOf('/admin/dashbaord') === 0) return 'home';
    if(path.indexOf('/admin/list-clients') === 0 || path.indexOf('/admin/add-user') === 0) return 'users';
    if(path.indexOf('/admin/market-analysis') === 0) return 'market_analysis';
    if(path.indexOf('/admin/payment-method') === 0) return 'payment_details';
    if(path.indexOf('/admin/undeclared-bets') === 0) return 'result_declaration';
    if(path.indexOf('/admin/analysis-pl') === 0) return 'admin_pl';
    if(path.indexOf('/admin/accountstatement') === 0 || path.indexOf('/admin/unsettledbet') === 0 || path.indexOf('/admin/game-reports') === 0 || path.indexOf('/admin/profitloss') === 0 || path.indexOf('/admin/adminprofitloss') === 0) return 'reports';
    if(path.indexOf('/admin/depositstatement') === 0 || path.indexOf('/admin/withdrawstatement') === 0) return 'transactions';
    if(path.indexOf('/admin/casino/') === 0) return 'live_casino';
    if(path.indexOf('/admin/sports-list') === 0 || path.indexOf('/admin/messages') === 0 || path.indexOf('/admin/series-settings') === 0 || path.indexOf('/admin/casino-list') === 0) return 'settings';
    if(path.indexOf('/admin/rules') === 0) return 'rules';
    if(path.indexOf('/admin/terms') === 0) return 'terms';
    if(path.indexOf('/admin/change-password') === 0) return 'change_password';
    if(path.indexOf('/admin/add-admin') === 0) return 'settings';
    return '';
  }

  function labelToFeature(label){
    var text = normalizeText(label);
    if(text === 'home') return 'home';
    if(text === 'users') return 'users';
    if(text === 'market analysis') return 'market_analysis';
    if(text === 'payment details') return 'payment_details';
    if(text === 'result declaration') return 'result_declaration';
    if(text === 'admin p&l') return 'admin_pl';
    if(text === 'reports' || text === "account's statement" || text === 'current bets' || text === 'deleted bets' || text === 'game reports' || text === 'profit and loss') return 'reports';
    if(text === 'transactions' || text === 'deposit' || text === 'withdraw') return 'transactions';
    if(text === 'live casino') return 'live_casino';
    if(text === 'settings' || text === 'block markets' || text === 'messages' || text === 'add match list' || text === 'casino list' || text === 'undeclared bets' || text === 'series settings') return 'settings';
    if(text === 'rules') return 'rules';
    if(text === 't & c' || text === 't&c') return 'terms';
    if(text === 'change password') return 'change_password';
    return '';
  }

  function getSidebarNavList(){
    var selectors = [
      '.admin-sidebar .nav-list',
      '.admin-sidebar .sidebar-nav',
      '.admin-sidebar ul.sidebar-nav',
      '.admin-sidebar nav ul',
      '.admin-sidebar ul'
    ];
    for(var i=0;i<selectors.length;i++){
      var node = document.querySelector(selectors[i]);
      if(node && node.querySelector && node.querySelector('li, a')) return node;
    }
    return null;
  }

  function findHomeMenuItem(navList){
    if(!navList) return null;
    var links = navList.querySelectorAll('a, span');
    for(var i=0;i<links.length;i++){
      var text = normalizeText(links[i] && links[i].textContent);
      if(text === 'home'){
        return links[i].closest ? links[i].closest('li') : null;
      }
    }
    return null;
  }

  function ensureAddAdminButton(isOwner){
    removeInjectedAddAdminLinks();
  }

  function featureAllowed(featureKey, permissions, isOwner){
    return true;
  }

  function applySidebarPermissions(permissions, isOwner){
    try{
      var sidebar = document.querySelector('.admin-sidebar');
      if(!sidebar) return;
      ensureAddAdminButton(isOwner);

      var sectionNodes = sidebar.querySelectorAll('.dropdown-section');
      for(var i=0;i<sectionNodes.length;i++){
        var section = sectionNodes[i];
        var headerTextNode = section.querySelector('.dropdown-header span');
        var sectionFeature = labelToFeature(headerTextNode ? headerTextNode.textContent : '');
        section.style.display = featureAllowed(sectionFeature, permissions, isOwner) ? '' : 'none';
      }

      var linkNodes = sidebar.querySelectorAll('a[href]');
      for(var j=0;j<linkNodes.length;j++){
        var link = linkNodes[j];
        var href = link.getAttribute('href') || '';
        var feature = '';
        try{
          var abs = new URL(href, window.location.origin);
          feature = routeToFeature(abs.pathname);
        }catch(_ignore){}
        if(!feature){
          feature = labelToFeature(link.textContent || '');
        }
        if(!feature) continue;
        var show = featureAllowed(feature, permissions, isOwner);
        var row = link.closest ? link.closest('li') : null;
        if(row){
          row.style.display = show ? '' : 'none';
        }else{
          link.style.display = show ? '' : 'none';
        }
      }
    }catch(_e){}
  }

  function firstAllowedAdminPath(permissions, isOwner){
    if(isOwner) return '/admin/dashboard';
    var fallback = [
      ['home','/admin/dashboard'],
      ['users','/admin/list-clients'],
      ['market_analysis','/admin/market-analysis'],
      ['payment_details','/admin/payment-method'],
      ['result_declaration','/admin/undeclared-bets'],
      ['admin_pl','/admin/analysis-pl'],
      ['reports','/admin/accountstatement'],
      ['transactions','/admin/depositstatement'],
      ['live_casino','/admin/casino/all'],
      ['settings','/admin/messages'],
      ['rules','/admin/rules'],
      ['terms','/admin/terms'],
      ['change_password','/admin/change-password']
    ];
    for(var i=0;i<fallback.length;i++){
      if(featureAllowed(fallback[i][0], permissions, false)) return fallback[i][1];
    }
    return '/admin/dashboard';
  }

  function enforceRoutePermission(permissions, isOwner){
    try{
      if(window.location.pathname.indexOf('/admin') !== 0) return;
      if(window.location.pathname.indexOf('/admin/login') === 0) return;
      var feature = routeToFeature(window.location.pathname);
      if(!feature) return;
      if(featureAllowed(feature, permissions, isOwner)) return;
      var nextPath = firstAllowedAdminPath(permissions, isOwner);
      if(nextPath && normalizeText(nextPath) !== normalizeText(window.location.pathname)){
        window.location.replace(nextPath);
      }
    }catch(_e){}
  }

  function applyPermissionsIfReady(){
    if(!adminPermissionLoaded || !adminPermissionCache) return;
    applySidebarPermissions(adminPermissionCache.features || {}, !!adminPermissionCache.isOwner);
    enforceRoutePermission(adminPermissionCache.features || {}, !!adminPermissionCache.isOwner);
  }

  function fetchAdminPermissions(token){
    var authToken = token || getAdminToken();
    if(!authToken) return Promise.resolve(null);
    return fetch('/api/admin/my-permissions', {
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Accept': 'application/json'
      }
    }).then(function(resp){
      return resp.json().catch(function(){ return null; }).then(function(payload){
        if(!resp.ok || !payload || payload.error) return null;
        return payload;
      });
    }).catch(function(){ return null; });
  }

  function refreshAdminPermissions(forceRefresh){
    if(window.location.pathname.indexOf('/admin') !== 0) return;
    if(window.location.pathname.indexOf('/admin/login') === 0) return;
    var token = getAdminToken();
    if(!token){
      adminPermissionToken = '';
      clearAdminPermissionCache();
      removeInjectedAddAdminLinks();
      return;
    }
    if(!forceRefresh && adminPermissionLoaded && adminPermissionCache && adminPermissionToken === token){
      applyPermissionsIfReady();
      return;
    }
    ensureAddAdminButton(tokenSuggestsOwner(token));
    if(adminPermissionFetchInFlight) return;
    adminPermissionFetchInFlight = true;
    fetchAdminPermissions(token).then(function(payload){
      if(!payload || !payload.data){
        if(tokenSuggestsOwner(token)){
          ensureAddAdminButton(true);
        }else if(token !== adminPermissionToken || !adminPermissionLoaded){
          clearAdminPermissionCache();
          removeInjectedAddAdminLinks();
        }
        return;
      }
      adminPermissionToken = token;
      adminPermissionLoaded = true;
      adminPermissionCache = {
        isOwner: !!payload.data.isOwner,
        features: payload.data.features || {}
      };
      applyPermissionsIfReady();
    }).finally(function(){
      adminPermissionFetchInFlight = false;
    });
  }

  function syncAdminPermissionState(){
    if(window.location.pathname.indexOf('/admin') !== 0) return;
    if(window.location.pathname.indexOf('/admin/login') === 0) return;
    var token = getAdminToken();
    if(!token){
      adminPermissionToken = '';
      clearAdminPermissionCache();
      removeInjectedAddAdminLinks();
      return;
    }
    if(token !== adminPermissionToken){
      adminPermissionToken = token;
      clearAdminPermissionCache();
      refreshAdminPermissions(true);
      return;
    }
    if(!adminPermissionLoaded || !adminPermissionCache){
      ensureAddAdminButton(tokenSuggestsOwner(token));
      refreshAdminPermissions();
      return;
    }
    applyPermissionsIfReady();
  }

  function bindRouteWatchers(){
    try{
      var originalPush = history.pushState;
      history.pushState = function(){
        var result = originalPush.apply(history, arguments);
        setTimeout(syncAdminPermissionState, 40);
        return result;
      };
      var originalReplace = history.replaceState;
      history.replaceState = function(){
        var result = originalReplace.apply(history, arguments);
        setTimeout(syncAdminPermissionState, 40);
        return result;
      };
      window.addEventListener('popstate', function(){
        setTimeout(syncAdminPermissionState, 40);
      });
      window.addEventListener('storage', function(evt){
        var key = evt && evt.key ? String(evt.key) : '';
        if(!key || key === 'token-admin' || key === 'token'){
          setTimeout(syncAdminPermissionState, 20);
        }
      });
      document.addEventListener('visibilitychange', function(){
        if(!document.hidden){
          setTimeout(syncAdminPermissionState, 20);
        }
      });
    }catch(_e){}
  }

  function applyKing777Branding(){
    try{
      document.title = 'King777';
      var nodes = document.querySelectorAll('body *');
      for(var i=0;i<nodes.length;i++){
        var node = nodes[i];
        if(!node || node.children.length || !node.nodeValue) continue;
        node.nodeValue = node.nodeValue.replace(/ambaniexchange/gi,'King777').replace(/ambani exchange/gi,'King777').replace(/reddy anna/gi,'King777');
      }
      var branded = document.querySelectorAll('[alt],[title],[placeholder]');
      for(var j=0;j<branded.length;j++){
        var item = branded[j];
        ['alt','title','placeholder'].forEach(function(attr){
          var value = item.getAttribute(attr);
          if(value) item.setAttribute(attr, value.replace(/ambaniexchange/gi,'King777').replace(/ambani exchange/gi,'King777').replace(/reddy anna/gi,'King777'));
        });
      }
    }catch(_e){}
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      removeLegacyUsersCreateAccountLink();
      applyKing777Branding();
      bindRouteWatchers();
      syncAdminPermissionState();
      setTimeout(syncAdminPermissionState, 250);
      setTimeout(syncAdminPermissionState, 900);
    });
  }else{
    removeLegacyUsersCreateAccountLink();
    applyKing777Branding();
    bindRouteWatchers();
    syncAdminPermissionState();
    setTimeout(syncAdminPermissionState, 250);
    setTimeout(syncAdminPermissionState, 900);
  }
  setTimeout(removeLegacyUsersCreateAccountLink, 600);
  setInterval(function(){
    removeLegacyUsersCreateAccountLink();
    applyKing777Branding();
    syncAdminPermissionState();
    applyPermissionsIfReady();
  }, 4000);

})();`;
  let extraClientPatch = "";
  const extraClientPatchPath = path.join(ROOT, "url-rewrite.js");
  try {
    if (fs.existsSync(extraClientPatchPath)) {
      extraClientPatch = String(fs.readFileSync(extraClientPatchPath, "utf8") || "");
    }
  } catch {
    extraClientPatch = "";
  }
  res.type("application/javascript").send(extraClientPatch ? `${js}\n${extraClientPatch}` : js);
});

const ADMIN_FEATURE_SKIP_API_PREFIXES = [
  "/api/login",
  "/api/login-admin",
  "/api/refresh-token",
  "/api/user-info",
  "/api/send-otp",
  "/api/verify-otp",
  "/api/admin/my-permissions",
  "/api/admin/feature-catalog",
  "/api/admin/managed-admins",
  "/api/admin/create-admin-account",
  "/api/admin/update-admin-permissions",
];
const AUTH_SESSION_SKIP_API_PREFIXES = [
  "/api/login",
  "/api/login-admin",
  "/api/refresh-token",
  "/api/register",
  "/api/register2",
  "/api/send-otp",
  "/api/verify-otp",
  "/api/signup-with-otp",
  "/api/update-password",
  "/api/update-user",
  "/api/add-transaction-password",
  "/api/provider/wallet",
  "/api/provider/callback",
  "/api/casino/provider/wallet",
];
app.use("/api", (req, res, next) => {
  const requestPath = String((req.originalUrl || req.url || "").split("?")[0] || "").toLowerCase();
  const token = tokenFromReq(req);
  if (token && !pathStartsWithAny(requestPath, AUTH_SESSION_SKIP_API_PREFIXES)) {
    const authState = getReqAuthState(req);
    if (!authState.ok) {
      if (authState.reason === "session_expired") {
        return res.status(401).json(env(SESSION_EXPIRED_MESSAGE, { code: SESSION_EXPIRED_CODE }, true, 401));
      }
      return res.status(401).json(env("Unauthorized", { code: "UNAUTHORIZED" }, true, 401));
    }
  }
  if (pathStartsWithAny(requestPath, ADMIN_FEATURE_SKIP_API_PREFIXES)) return next();

  const authUser = reqAuthUser(req);
  if (!authUser) return next();
  const authRole = reqAuthRole(req, authUser.role);
  const normalizedRole = normalizePanelRole(authRole, "user");
  if (normalizedRole === "user") return next();
  // Owner/super-master/master/agent must not get feature-gate blocks.
  req.adminFeaturePermissions = { ...ADMIN_FEATURE_ALL_ENABLED };
  return next();
});

const otpKey = (b) => {
  const cc = String(b?.countryCode || "+91")
    .trim()
    .replace(/[^\d+]/g, "");
  const mob = String(b?.mobile || b?.phone || b?.username || "")
    .trim()
    .replace(/[^\d]/g, "");
  return mob ? `${cc}${mob}` : "";
};
const sendOtp = async (req, res) => {
  const body = req.body || {};
  const k = otpKey(req.body || {});
  if (!k) return res.status(400).json({ error: "Mobile number is required." });
  const code = otpCode();
  const expiresAt = Date.now() + OTP_EXPIRY_SECONDS * 1000;
  const now = nowIso();

  let smsResult = { delivered: false, error: "No OTP gateway configured" };
  try {
    smsResult = await sendOtpSms({
      countryCode: body.countryCode || "+91",
      mobile: body.mobile || body.phone || body.username,
      code,
    });
  } catch (e) {
    smsResult = { delivered: false, error: e?.message || "OTP send failed" };
  }

  if (!smsResult.delivered && OTP_REQUIRE_SMS_DELIVERY) {
    return res.status(503).json({ error: smsResult.error || "OTP service unavailable. Please try again." });
  }

  db.prepare(
    "INSERT OR REPLACE INTO otp_codes (phone,code,attempts,verified,expires_at,created_at) VALUES (?,?,0,0,?,?)"
  ).run(k, code, expiresAt, now);

  await syncOtpToMysql({
    phone: k,
    code,
    attempts: 0,
    verified: 0,
    expiresAt,
    createdAt: now,
    updatedAt: now,
  });

  const message = smsResult.delivered ? "OTP sent successfully" : "OTP generated successfully";
  const data = {
    success: true,
    message,
    expiresIn: OTP_EXPIRY_SECONDS,
    delivery: smsResult.delivered ? "sent" : "generated",
  };
  if (OTP_DEBUG_INCLUDE_CODE) data.otp = code;

  return res.json({
    success: true,
    message,
    data,
  });
};
const verifyOtp = async (req, res) => {
  const k = otpKey(req.body || {});
  const code = String(req.body?.code || "").trim();
  if (!k || !code) return res.status(400).json({ error: "Mobile and OTP are required." });
  const row = db.prepare("SELECT * FROM otp_codes WHERE phone=?").get(k);
  if (!row) return res.status(400).json({ error: "No OTP found. Please request a new OTP." });
  if (Date.now() > toNum(row.expires_at, 0)) {
    db.prepare("DELETE FROM otp_codes WHERE phone=?").run(k);
    await syncOtpToMysql({
      phone: k,
      code: String(row.code || ""),
      attempts: toNum(row.attempts, 0),
      verified: toNum(row.verified, 0),
      expiresAt: toNum(row.expires_at, 0),
      createdAt: row.created_at || nowIso(),
      updatedAt: nowIso(),
    });
    return res.status(400).json({ error: "OTP has expired. Please request a new OTP." });
  }
  if (toNum(row.attempts, 0) >= OTP_MAX_ATTEMPTS) {
    return res.status(400).json({ error: "Too many failed attempts. Please request a new OTP." });
  }
  if (String(row.code) !== code) {
    const attempts = toNum(row.attempts, 0) + 1;
    db.prepare("UPDATE otp_codes SET attempts=? WHERE phone=?").run(attempts, k);
    await syncOtpToMysql({
      phone: k,
      code: String(row.code || ""),
      attempts,
      verified: 0,
      expiresAt: toNum(row.expires_at, 0),
      createdAt: row.created_at || nowIso(),
      updatedAt: nowIso(),
    });
    if (attempts >= OTP_MAX_ATTEMPTS) {
      return res.status(400).json({ error: "Too many failed attempts. Please request a new OTP." });
    }
    return res.status(400).json({ error: "Invalid OTP. Please enter correct OTP." });
  }
  db.prepare("UPDATE otp_codes SET verified=1 WHERE phone=?").run(k);
  await syncOtpToMysql({
    phone: k,
    code: String(row.code || ""),
    attempts: toNum(row.attempts, 0),
    verified: 1,
    expiresAt: toNum(row.expires_at, 0),
    createdAt: row.created_at || nowIso(),
    updatedAt: nowIso(),
  });
  return res.json({ success: true, message: "OTP verified successfully", data: { success: true, message: "OTP verified successfully" } });
};
["/api/send-otp", "/otp/send-otp", "/api/otp/send-otp"].forEach((r) => app.post(r, sendOtp));
["/api/verify-otp", "/otp/verify-otp", "/api/otp/verify-otp"].forEach((r) => app.post(r, verifyOtp));

const getRegistrationCodeInput = (body = {}) =>
  normalizeCode(body.registrationCode || body.inviteCode || body.referralCode || body.code) ||
  normalizeCode(DEFAULT_REGISTRATION_CODE);
const validateRegistrationCode = (inputCode) => {
  const code = normalizeCode(inputCode);
  if (!code) return { ok: false, message: "Registration code is required" };
  const row = db.prepare("SELECT * FROM registration_codes WHERE code=? AND is_active=1").get(code);
  if (!row) return { ok: false, message: "Invalid registration code" };
  const maxUses = row.max_uses === null ? null : toNum(row.max_uses, 0);
  const used = toNum(row.used_count, 0);
  if (maxUses !== null && maxUses > 0 && used >= maxUses) {
    return { ok: false, message: "Registration code usage limit reached" };
  }
  return { ok: true, code };
};
const consumeRegistrationCode = (code, userId) => {
  const clean = normalizeCode(code);
  if (!clean) return;
  db.prepare("UPDATE registration_codes SET used_count=used_count+1,last_used_by=?,updated_at=? WHERE code=?").run(
    userId || null,
    nowIso(),
    clean
  );
};

const handleRegister = async (req, res) => {
  if (PLATFORM_MODE !== "b2b" || String(req.body?.platform || req.body?.platformType || "b2b").trim().toLowerCase() === "b2c") {
    return res.status(403).json({ status: false, message: "B2B platform only" });
  }
  const username = String(req.body?.mobile || req.body?.username || "").trim();
  const password = String(req.body?.password || "").trim();
  if (!username || !password) return res.status(400).json({ status: false, message: "Username and password are required" });
  const authActor = reqAuthUser(req);
  const authActorRole = reqAuthRole(req, authActor?.role || "user");
  const requestedRoleRaw = req.body?.role || req.body?.accountType || "user";
  let requestedRole = normalizePanelRole(requestedRoleRaw, "user");
  const isPrivilegedCreate = !!authActor;
  if (!isPrivilegedCreate) requestedRole = "user";
  if (isPrivilegedCreate && !canRoleCreateRole(authActorRole, requestedRole)) {
    return res.status(403).json({ status: false, message: "You do not have permission to create this account type" });
  }

  const regValidation = isPrivilegedCreate
    ? { ok: true, code: null }
    : validateRegistrationCode(getRegistrationCodeInput());
  if (!regValidation.ok) return res.status(400).json({ status: false, message: regValidation.message });

  if (!isPrivilegedCreate && SIGNUP_REQUIRE_OTP && OTP_ENFORCE_SERVER_VERIFICATION) {
    const otpRow = db.prepare("SELECT * FROM otp_codes WHERE phone=?").get(otpKey(req.body || { mobile: username }));
    if (!otpRow || toNum(otpRow.verified, 0) !== 1) {
      return res.status(400).json({ status: false, message: "OTP verification required" });
    }
    if (Date.now() > toNum(otpRow.expires_at, 0)) {
      db.prepare("DELETE FROM otp_codes WHERE phone=?").run(otpKey(req.body || { mobile: username }));
      return res.status(400).json({ status: false, message: "OTP has expired. Please request a new OTP." });
    }
  } else if (!isPrivilegedCreate && SIGNUP_REQUIRE_OTP && !req.body?.otpVerified) {
    return res.status(400).json({ status: false, message: "OTP verification required" });
  }
  if (getUserByUsername(username)) return res.status(409).json({ status: false, message: "User already exists" });
  const now = nowIso();
  const uid = id("u_");
  const sessionId = Date.now();
  const passwordHash = hashPass(password);
  const parentId = getCreationParentId(authActor, authActorRole);
  const accountLevel = Math.max(1, panelRoleDepth(requestedRole) + 1);
  let userLimits;
  try {
    userLimits = readUserLimitsWithLegacyPayload(req.body || {});
  } catch (e) {
    return res.status(400).json({ status: false, message: e.message });
  }
  const legacyPartnership = req.body?.partnership;
  const explicitPartnerships = req.body?.partnerships;
  if (legacyPartnership && !Array.isArray(legacyPartnership) && explicitPartnerships === undefined) {
    return res.status(400).json({ status: false, message: "Sport-level partnership values are unsupported; use partner IDs in the partnership assignment flow" });
  }
  const initialBalance = Math.max(
    0,
    toNum(req.body?.creditRefrences ?? req.body?.creditReferences ?? req.body?.creditAmount, DEFAULT_USER_OPENING_BALANCE)
  );
  const parentWallet = parentId ? ensureWallet(parentId) : null;
  if (parentWallet && initialBalance > toNum(parentWallet.balance, 0)) {
    return res.status(400).json({ status: false, message: "Opening credit exceeds the parent available balance" });
  }
  try {
    db.transaction(() => {
      db.prepare(
        "INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at,upline_commission,min_bet,max_bet,credit_limit,partnership_remaining) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
      ).run(uid, username, passwordHash, requestedRole, accountLevel, parentId, sessionId, now, now, parentId ? UPLINE_COMMISSION_PERCENT : 0, userLimits.minBet, userLimits.maxBet, userLimits.creditLimit, 100);
      if (parentId) {
        db.prepare("UPDATE users SET upline_commission=COALESCE(upline_commission,0)+?,updated_at=? WHERE id=?").run(
          UPLINE_COMMISSION_PERCENT,
          now,
          parentId
        );
      }
      db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)").run(
        uid,
        initialBalance,
        0,
        0,
        now
      );
      if (parentWallet && initialBalance > 0) {
        db.prepare("UPDATE wallets SET balance=balance-?,updated_at=? WHERE user_id=?").run(initialBalance, now, parentId);
      }
      if (authActor && Array.isArray(explicitPartnerships)) {
        saveUserPartnerships(uid, explicitPartnerships, authActor, authActorRole, now);
      }
    })();
  } catch (e) {
    const duplicate = /unique|constraint/i.test(String(e?.message || ""));
    return res.status(duplicate ? 409 : 500).json({ status: false, message: duplicate ? "User already exists" : "Unable to create account" });
  }
  const profile = { ...(req.body || {}) };
  [
    "password",
    "confirmPassword",
    "otp",
    "code",
    "otpVerified",
    "newPassword",
    "transactionPassword",
  ].forEach((k) => delete profile[k]);
  profile.createdBy = authActor?.username || profile.createdBy || null;
  profile.createdById = authActor?.id || profile.createdById || null;
  profile.createdByRole = authActorRole;
  profile.parentAssignedByServer = true;
  profile.systemRole = requestedRole;
  const profileJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    uid,
    profileJson,
    now,
    now
  );
  if (requestedRole !== "user") {
    saveAdminFeaturePermissionsForUser({
      userId: uid,
      permissions: ADMIN_FEATURE_ALL_ENABLED,
      actorId: authActor?.id || null,
    });
  }
  if (parentId) directChildUserIdsCache.delete(String(parentId));
  descendantUserIdsCache.clear(); // every ancestor must see the new account at once
  userListResponseCache.clear();
  userListSuggestionCache.clear();
  if (regValidation.code) consumeRegistrationCode(regValidation.code, uid);
  db.prepare("DELETE FROM otp_codes WHERE phone=?").run(otpKey(req.body || { mobile: username }));

  const syncJobs = [
    syncUserToMysql({
      id: uid,
      username,
      password: passwordHash,
      role: requestedRole,
      level: accountLevel,
      parentId,
      sessionId,
      createdAt: now,
      updatedAt: now,
      minBet: userLimits.minBet,
      maxBet: userLimits.maxBet,
      creditLimit: userLimits.creditLimit,
      partnershipRemaining: 100,
    }),
    syncWalletToMysql({
      userId: uid,
      balance: initialBalance,
      exposer: 0,
      casinoExposer: 0,
      updatedAt: now,
    }),
    syncUserProfileToMysql({
      userId: uid,
      dataJson: profileJson,
      createdAt: now,
      updatedAt: now,
    }),
    syncUserPartnershipsToMysql({
      userId: uid,
      partnerships: db.prepare("SELECT id,partner_id AS partnerId,share_percentage AS sharePercentage,created_at AS createdAt,updated_at AS updatedAt FROM user_partnerships WHERE user_id=?").all(uid),
    }),
  ];
  if (regValidation.code) {
    syncJobs.push(
      syncRegistrationCodeUsageToMysql({
        code: regValidation.code,
        usedBy: uid,
      })
    );
  }
  await Promise.all(syncJobs);

  return res.json({
    status: true,
    message: "Registration successful",
    data: {
      _id: uid,
      username,
      role: requestedRole,
      parentId,
      registrationCode: regValidation.code,
    },
  });
};
const sendLegacyRegistrationRemoved = (_req, res) =>
  res.status(410).json(
    env("Public registration has been removed. Create users from the admin panel.", {
      disabled: true,
      replacement: "/admin/add-user",
    }, true, 410)
  );
app.post("/api/register", sendLegacyRegistrationRemoved);
app.post("/api/register2", sendLegacyRegistrationRemoved);
app.get("/api/admin/masters", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  const rows = db.prepare("SELECT id,username,role,parent_id FROM users WHERE lower(role)='master' ORDER BY username").all();
  const visibleRows = rows.filter((row) => !(visibleIds instanceof Set) || visibleIds.has(String(row.id)));
  return res.json(env("", visibleRows));
});
app.post("/api/admin/masters", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (!canRoleCreateRole(authRole, "master")) return res.status(403).json(env("Only an admin can create a Master Account", {}, true, 403));
  const username = sanitizeAdminUsername(req.body?.username || req.body?.userName);
  const password = String(req.body?.password || "").trim();
  const fullName = String(req.body?.fullName || username).trim();
  if (!/^[a-z0-9._-]{3,32}$/i.test(username) || password.length < 4) {
    return res.status(400).json(env("username and password are required", {}, true, 400));
  }
  if (getUserByUsername(username)) return res.status(409).json(env("User name already exists", {}, true, 409));
  const now = nowIso();
  const userId = id("u_");
  try {
    db.transaction(() => {
      db.prepare("INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at,upline_commission,min_bet,max_bet,credit_limit,partnership_remaining) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)").run(
        userId,
        username,
        hashPass(password),
        "master",
        panelRoleDepth("master") + 1,
        authUser.id,
        Date.now(),
        now,
        now,
        UPLINE_COMMISSION_PERCENT,
        0,
        0,
        0,
        100
      );
      db.prepare("UPDATE users SET upline_commission=COALESCE(upline_commission,0)+?,updated_at=? WHERE id=?").run(UPLINE_COMMISSION_PERCENT, now, authUser.id);
      db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)").run(userId, 0, 0, 0, now);
      db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
        userId,
        JSON.stringify({ fullName, source: "on_the_fly_master", createdById: authUser.id, systemRole: "master" }),
        now,
        now
      );
    })();
    directChildUserIdsCache.delete(String(authUser.id));
    descendantUserIdsCache.clear();
    userListResponseCache.clear();
    return res.status(201).json(env("Master Account created", { userId, username, role: "master", parentId: authUser.id }));
  } catch (e) {
    return res.status(500).json(env(e.message || "Unable to create Master Account", {}, true, 500));
  }
});
app.get("/api/admin/sub-admins", (req, res) => res.redirect(307, "/api/admin/masters"));
app.post("/api/admin/sub-admins", (req, res) => res.redirect(307, "/api/admin/masters"));
db.exec(`
CREATE TABLE IF NOT EXISTS notifications (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  type TEXT NOT NULL DEFAULT 'info',
  is_read INTEGER NOT NULL DEFAULT 0,
  created_by TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id, is_read, created_at);
CREATE TABLE IF NOT EXISTS commission_records (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  from_user_id TEXT,
  bet_id TEXT,
  amount REAL NOT NULL DEFAULT 0,
  note TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_commission_records_user ON commission_records(user_id, created_at);
`);
const addNotification = (userId, title, message, type = "info", createdBy = "") => {
  try {
    if (!userId) return;
    db.prepare("INSERT INTO notifications (id,user_id,title,message,type,is_read,created_by,created_at) VALUES (?,?,?,?,?,0,?,?)").run(
      id("n_"), String(userId), String(title || "").slice(0, 160), String(message || "").slice(0, 500), String(type || "info"), String(createdBy || ""), nowIso()
    );
  } catch {}
};
app.get("/api/admin/notifications", (req, res) => {
  const actor = adminActor(req, res);
  if (!actor) return;
  const items = db
    .prepare("SELECT id,title,message,type,is_read AS isRead,created_at AS createdAt FROM notifications WHERE user_id=? ORDER BY created_at DESC, rowid DESC LIMIT 50")
    .all(String(actor.user.id));
  const unread = db.prepare("SELECT COUNT(*) AS c FROM notifications WHERE user_id=? AND is_read=0").get(String(actor.user.id)).c;
  return res.json(env("", { items, unreadCount: unread, user: { username: actor.user.username, role: actor.role } }));
});
app.post("/api/admin/notifications/read", (req, res) => {
  const actor = adminActor(req, res);
  if (!actor) return;
  const nid = String(req.body?.id || "").trim();
  if (nid) db.prepare("UPDATE notifications SET is_read=1 WHERE id=? AND user_id=?").run(nid, String(actor.user.id));
  else db.prepare("UPDATE notifications SET is_read=1 WHERE user_id=?").run(String(actor.user.id));
  return res.json(env("Notifications updated", {}));
});
app.post("/api/admin/notifications", (req, res) => {
  const actor = adminActor(req, res);
  if (!actor) return;
  const target = getUserByUsername(String(req.body?.username || "").trim());
  const title = String(req.body?.title || "").trim();
  if (!target || !title) return res.status(400).json(env("username and title are required", {}, true, 400));
  if (!canActorAccessTargetUser(actor.user, actor.role, target)) return res.status(403).json(env("Access denied", {}, true, 403));
  addNotification(target.id, title, req.body?.message, "message", actor.user.username);
  return res.status(201).json(env("Notification sent", {}));
});

const DASH_CASINO_PROVIDERS = [
  ["Indian Poker/ Live Casino P&L", /indian ?poker(?! ?(ii|2))|live ?casino/i],
  ["Indian Poker II P&L", /indian ?poker ?(ii|2)|poker ?(ii|2)/i],
  ["Evolution P&L", /evolution/i],
  ["Vivo P&L", /vivo/i],
  ["Betgames P&L", /bet ?games/i],
  ["Casino III P&L", /casino ?(iii|3)/i],
  ["Spribe P&L", /spribe/i],
  ["Mac88 P&L", /mac ?88/i],
  ["Chicken Road P&L", /chicken/i],
  ["Rvgames P&L", /rv ?games/i],
  ["Ezugi P&L", /ezugi/i],
];
const DASH_OTHER_GAME = /sportsbook|virtual|lottery|other|tp/i;
app.get("/api/admin/dashboard", (req, res) => {
  const actor = adminActor(req, res);
  if (!actor) return;
  // A date-only "to" (YYYY-MM-DD) means the end of that day, like other reports.
  const toDate = (v, fallback, endOfDay = false) => {
    const raw = v ? String(v).trim() : "";
    const iso = raw ? parseReportDate(raw, endOfDay) : null;
    return iso ? new Date(iso) : fallback;
  };
  const now = new Date();
  const to = toDate(req.query.to, now, true);
  const from = toDate(req.query.from, new Date(to.getTime() - 7 * 24 * 3600 * 1000));
  const fromIso = from.toISOString();
  const toIso = to.toISOString();
  const visible = getVisibleUserIdsForActor(actor.user, actor.role);
  const users = db.prepare("SELECT id,username,role FROM users").all().filter((u) => String(u.id) !== String(actor.user.id) && (!visible || visible.has(String(u.id))));
  const nameById = new Map(users.map((u) => [String(u.id), u.username]));
  const playerIds = new Set(users.filter((u) => normalizePanelRole(u.role, "user") === "user").map((u) => String(u.id)));
  const roleCounts = {};
  users.forEach((u) => {
    const role = normalizePanelRole(u.role, "user");
    roleCounts[role] = (roleCounts[role] || 0) + 1;
  });
  const bets = db
    .prepare(
      `SELECT b.user_id, b.stack, b.settlement_net, b.market_name, b.gtype, b.type, s.name AS sport_name
       FROM bets b LEFT JOIN matches m ON m.match_id=b.match_id LEFT JOIN sports s ON s.sport_id=m.sport_id
       WHERE COALESCE(b.settled_at,b.created_at)>=? AND COALESCE(b.settled_at,b.created_at)<=?`
    )
    .all(fromIso, toIso)
    .filter((b) => playerIds.has(String(b.user_id)));
  const playerNet = new Map();
  const marketNet = new Map();
  const sportsMap = new Map();
  const othersMap = new Map();
  let sportsbookPnl = 0;
  let betsNet = 0;
  const bump = (map, key, patch) => {
    const cur = map.get(key) || { bets: 0, amount: 0, pnl: 0 };
    cur.bets += 1;
    cur.amount += patch.amount;
    cur.pnl += patch.pnl;
    map.set(key, cur);
  };
  bets.forEach((b) => {
    const net = toNum(b.settlement_net, 0);
    const stack = toNum(b.stack, 0);
    betsNet += net;
    playerNet.set(String(b.user_id), (playerNet.get(String(b.user_id)) || 0) + net);
    const sportName = b.sport_name || "Other";
    const marketKey = sportName + "\u0001" + (b.market_name || "-");
    marketNet.set(marketKey, (marketNet.get(marketKey) || 0) + net);
    const gameType = String(b.gtype || b.type || "");
    if (/sportsbook/i.test(gameType)) sportsbookPnl += net;
    if (DASH_OTHER_GAME.test(gameType)) bump(othersMap, gameType || "Other", { amount: stack, pnl: net });
    else bump(sportsMap, sportName, { amount: stack, pnl: net });
  });
  const casinoRows = db
    .prepare(`SELECT uid AS user_id, v, provider_name, vendor_code FROM (${CASINO_SIGNED_SQL}) WHERE ts>=? AND ts<=?`)
    .all(fromIso, toIso)
    .filter((r) => playerIds.has(String(r.user_id)));
  const casinoNet = new Map(DASH_CASINO_PROVIDERS.map(([label]) => [label, 0]));
  let casinoTotal = 0;
  casinoRows.forEach((r) => {
    const signed = toNum(r.v, 0);
    if (!signed) return;
    const text = String(r.provider_name || "") + " " + String(r.vendor_code || "");
    const hit = DASH_CASINO_PROVIDERS.find(([, re]) => re.test(text));
    const label = hit ? hit[0] : (String(r.provider_name || r.vendor_code || "Other").trim() || "Other") + " P&L";
    casinoNet.set(label, (casinoNet.get(label) || 0) + signed);
    casinoTotal += signed;
    playerNet.set(String(r.user_id), (playerNet.get(String(r.user_id)) || 0) + signed);
  });
  const round = (n) => Math.round(n * 100) / 100;
  const ranked = (entries, mapper) => {
    const rows = entries.filter(([, v]) => v !== 0).map(mapper);
    return {
      winners: rows.filter((r) => r.amount > 0).sort((a, b) => b.amount - a.amount).slice(0, 5),
      losers: rows.filter((r) => r.amount < 0).sort((a, b) => a.amount - b.amount).slice(0, 5),
    };
  };
  const players = ranked([...playerNet.entries()], ([uid, v]) => ({ player: nameById.get(uid) || uid, amount: round(v) }));
  const markets = ranked([...marketNet.entries()], ([k, v]) => {
    const [sport, market] = k.split("\u0001");
    return { sport, market, amount: round(v) };
  });
  // Coins moved into / out of my downline (parent transfers, approved requests,
  // opening coins, tokens). Moves between two downline accounts are internal:
  // an Admin funding its own clients is not a deposit on Super Admin's dashboard.
  const downlineIds = new Set(users.map((u) => String(u.id)));
  const sumType = (t) =>
    t === "deposit"
      ? ledgerBoundaryTotal({ insideIds: downlineIds, kinds: DEPOSIT_KINDS, side: "to", fromIso, toIso })
      : ledgerBoundaryTotal({ insideIds: downlineIds, kinds: WITHDRAW_KINDS, side: "from", fromIso, toIso });
  const commissionRows = db
    .prepare("SELECT user_id,amount FROM commission_records WHERE created_at>=? AND created_at<=?")
    .all(fromIso, toIso)
    .filter((r) => !visible ? true : String(r.user_id) === String(actor.user.id) || visible.has(String(r.user_id)));
  const gameList = (map) => [...map.entries()].map(([name, v]) => ({ name, bets: v.bets, amount: round(v.amount), pnl: round(v.pnl) })).sort((a, b) => a.name.localeCompare(b.name));
  const total = betsNet + casinoTotal;
  return res.json(
    env("", {
      range: { from: fromIso, to: toIso },
      pnl: round(total),
      commission: round(commissionRows.reduce((a, r) => a + toNum(r.amount, 0), 0)),
      deposit: sumType("deposit"),
      withdrawal: sumType("withdraw"),
      totalBets: bets.length,
      sportsbookPnl: round(sportsbookPnl),
      topPlayers: players,
      topMarkets: markets,
      userCount: roleCounts,
      sportsGameplay: gameList(sportsMap),
      othersGameplay: gameList(othersMap),
      casino: [...casinoNet.entries()].map(([name, v]) => ({ name, pnl: round(v) })),
      casinoTotal: round(casinoTotal),
      totalPnl: round(total),
    })
  );
});

// Logged-in admin-panel account (any role above User).
const adminActor = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  const role = normalizePanelRole(reqAuthRole(req, authUser.role), "user");
  if (role === "user") {
    res.status(403).json(env("Admin access required", {}, true, 403));
    return null;
  }
  return { user: authUser, role };
};
app.post("/api/admin/client-onboarding", async (req, res) => {
  if (PLATFORM_MODE !== "b2b" || String(req.body?.platform || req.body?.platformType || "b2b").trim().toLowerCase() === "b2c") {
    return res.status(403).json(env("B2B platform only", {}, true, 403));
  }
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") {
    return res.status(403).json(env("Admin access required", {}, true, 403));
  }

  const body = req.body || {};
  const username = sanitizeAdminUsername(body.userName || body.username || body.user_name || body.mobile);
  const fullName = String(body.fullName || body.full_name || "").trim();
  const password = String(body.password || "").trim();
  const confirmPassword = String(body.confirmPassword || body.confirm_password || "").trim();
  const city = String(body.city || "").trim();
  const mobileNumber = normalizeMobileNumber(body.mobileNumber || body.mobile || body.phone);
  const referenceName = String(body.referenceName || body.reference_name || "").trim();
  const creditInput = body.creditAmount ?? body.credit ?? body.amount;
  let creditAmount = 0;
  if (creditInput !== undefined && creditInput !== null && String(creditInput).trim() !== "" && toNum(creditInput, 0) !== 0) {
    try {
      creditAmount = coinEngine.normalizeAmount(creditInput);
    } catch (e) {
      return sendCoinError(res, e);
    }
  }
  let userLimits;
  const requestedRole = resolveAccountRoleFromInput(body, authRole);
  try {
    // Bet limits only apply to player accounts
    userLimits = readUserLimits(requestedRole === "user" ? body : { ...body, minBet: 0, maxBet: 0, min_bet: 0, max_bet: 0 });
  } catch (e) {
    return res.status(400).json(env(e.message, {}, true, 400));
  }
  if (!canRoleCreateRole(authRole, requestedRole)) {
    return res.status(403).json(env("You do not have permission to create this account type", {}, true, 403));
  }
  const partnershipType = normalizeAdminPartnershipType(
    body.partnershipType || body.partnership || panelRoleToPartnershipType(requestedRole)
  );
  const remark = String(body.remark || "").trim();
  const transactionCode = String(body.transactionCode || body.transaction_code || "").trim();
  const partnershipInput = body.partnerships ?? body.partnerShares ?? body.partnership_share_pool ?? [];
  const hasPartnershipInput = Array.isArray(partnershipInput) && partnershipInput.some((p) => toNum(p?.sharePercentage ?? p?.share_percentage ?? p?.share, 0) > 0);
  if (hasPartnershipInput && requestedRole !== "user") {
    return res.status(400).json(env("A Master commission share can only be set on User accounts", {}, true, 400));
  }
  if (hasPartnershipInput) {
    try {
      validatePartnershipEntries({
        input: partnershipInput,
        getPartner: (partnerId) => getUserById(partnerId),
        canAccessPartner: (partner) => String(partner.id) === String(authUser.id) || canActorAccessTargetUser(authUser, authRole, partner),
      });
    } catch (e) {
      return res.status(400).json(env(e.message, {}, true, 400));
    }
  }

  if (!username) return res.status(400).json(env("User name is required", {}, true, 400));
  if (!/^[a-z0-9._-]{3,32}$/i.test(username)) {
    return res.status(400).json(env("User name must be 3-32 chars and only letters, numbers, ., _, -", {}, true, 400));
  }
  if (!fullName) return res.status(400).json(env("Full name is required", {}, true, 400));
  if (!password) return res.status(400).json(env("Password is required", {}, true, 400));
  if (password.length < 4) return res.status(400).json(env("Password must be at least 4 characters", {}, true, 400));
  if (password !== confirmPassword) return res.status(400).json(env("Confirm password does not match", {}, true, 400));
  if (!transactionCode) return res.status(400).json(env("Transaction password is required", {}, true, 400));
  if (!verifyActorTransactionPassword(authUser, transactionCode)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }

  if (getUserByUsername(username)) return res.status(409).json(env("User name already exists", {}, true, 409));
  const localDup = db.prepare("SELECT 1 FROM admin_client_general WHERE username=? LIMIT 1").get(username);
  if (localDup) return res.status(409).json(env("User name already exists", {}, true, 409));

  const now = nowIso();
  const userId = id("u_");
  const generalId = id("acg_");
  const partnershipId = id("acp_");
  const passwordHash = hashPass(password);
  const sessionId = Date.now();
  const parentId = getCreationParentId(authUser, authRole);
  const accountLevel = Math.max(1, panelRoleDepth(requestedRole) + 1);
  if (!parentId) return res.status(400).json(env("Unable to resolve the parent account", {}, true, 400));
  const openingBalance = creditAmount;
  const actor = String(authUser.username || authUser.id || "admin");
  const profile = {
    fullName,
    referenceName,
    city,
    mobileNumber,
    creditRefrences: creditAmount,
    creditReferences: creditAmount,
    minBet: userLimits.minBet,
    maxBet: userLimits.maxBet,
    creditLimit: userLimits.creditLimit,
    partnership: {
      type: partnershipType,
      remark,
      transactionCodeMasked: maskTransactionCode(transactionCode),
      partners: [],
      remainingPercentage: 100,
    },
    status: {
      isActive: true,
      betLock: false,
    },
    source: "admin_client_onboarding",
    createdBy: actor,
    createdById: authUser.id,
    createdByRole: authRole,
    parentAssignedByServer: true,
    systemRole: requestedRole,
  };
  const profileJson = JSON.stringify(profile);

  try {
    db.transaction(() => {
      db.prepare(
        "INSERT INTO users (id,username,password,role,level,parent_id,session_id,created_at,updated_at,upline_commission,min_bet,max_bet,credit_limit,partnership_remaining) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
      ).run(userId, username, passwordHash, requestedRole, accountLevel, parentId, sessionId, now, now, parentId ? UPLINE_COMMISSION_PERCENT : 0, userLimits.minBet, userLimits.maxBet, userLimits.creditLimit, 100);
      if (parentId) {
        db.prepare("UPDATE users SET upline_commission=COALESCE(upline_commission,0)+?,updated_at=? WHERE id=?").run(
          UPLINE_COMMISSION_PERCENT,
          now,
          parentId
        );
      }
      db.prepare("INSERT INTO wallets (user_id,balance,exposer,casino_exposer,updated_at) VALUES (?,?,?,?,?)").run(
        userId,
        0,
        0,
        0,
        now
      );
      // Opening credit comes out of the parent's wallet.
      if (creditAmount > 0) {
        coinEngine.transfer({
          childId: userId,
          direction: "deposit",
          amount: creditAmount,
          actorId: authUser.id,
          kind: "opening_credit",
          remark: "Opening credit for " + username,
        });
      }
      db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
        userId,
        profileJson,
        now,
        now
      );
      if (requestedRole === "user" && Array.isArray(partnershipInput)) {
        const partnership = saveUserPartnerships(userId, partnershipInput, authUser, authRole, now);
        db.prepare("UPDATE user_profiles SET data_json=?,updated_at=? WHERE user_id=?").run(
          JSON.stringify({ ...profile, partnership: { ...profile.partnership, partners: partnership.entries.map((entry) => ({ partnerId: entry.partnerId, sharePercentage: entry.sharePercentage })), remainingPercentage: partnership.remainingShare } }),
          now,
          userId
        );
      }
      db.prepare(
        "INSERT INTO admin_client_general (id,user_id,username,full_name,password_hash,city,mobile_number,credit_amount,created_by,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
      ).run(
        generalId,
        userId,
        username,
        fullName,
        passwordHash,
        city || null,
        mobileNumber || null,
        creditAmount,
        actor,
        now,
        now
      );
      db.prepare(
        "INSERT INTO admin_client_partnership (id,general_id,partnership_type,remark,transaction_code,created_at,updated_at) VALUES (?,?,?,?,?,?,?)"
      ).run(partnershipId, generalId, partnershipType, remark || null, encryptTransactionCode("verified"), now, now);
      if (requestedRole !== "user") {
        saveAdminFeaturePermissionsForUser({
          userId,
          permissions: ADMIN_FEATURE_ALL_ENABLED,
          actorId: authUser.id,
        });
      }
    })();
  } catch (e) {
    if (e instanceof CoinError) return sendCoinError(res, e);
    const message = String(e?.message || "Unable to save user");
    const duplicate = /unique constraint failed: (users|admin_client_general)/i.test(message);
    return res.status(duplicate ? 409 : 500).json(env(duplicate ? "User already exists" : message, {}, true, duplicate ? 409 : 500));
  }
  if (parentId) directChildUserIdsCache.delete(String(parentId));
  descendantUserIdsCache.clear(); // every ancestor must see the new account at once
  userListResponseCache.clear();
  userListSuggestionCache.clear();

  await Promise.all([
    syncUserToMysql({
      id: userId,
      username,
      password: passwordHash,
      role: requestedRole,
      level: accountLevel,
      parentId,
      sessionId,
      createdAt: now,
      updatedAt: now,
      minBet: userLimits.minBet,
      maxBet: userLimits.maxBet,
      creditLimit: userLimits.creditLimit,
      partnershipRemaining: 100,
    }),
    syncWalletToMysql({
      userId,
      balance: toNum(getWallet(userId)?.balance, 0),
      exposer: 0,
      casinoExposer: 0,
      updatedAt: now,
    }),
    syncUserProfileToMysql({
      userId,
      dataJson: profileJson,
      createdAt: now,
      updatedAt: now,
    }),
    syncUserPartnershipsToMysql({
      userId,
      partnerships: db.prepare("SELECT id,partner_id AS partnerId,share_percentage AS sharePercentage,created_at AS createdAt,updated_at AS updatedAt FROM user_partnerships WHERE user_id=?").all(userId),
    }),
  ]).catch(() => {});
  syncWalletsAfterCoinMove([parentId]);
  addNotification(parentId, "New account created", username + " (" + requestedRole + ") was created with opening balance " + openingBalance, "account", username);

  return res.json(
    env("User saved successfully", {
      id: generalId,
      userId,
      username,
      fullName,
      city,
      mobileNumber,
      creditAmount,
      openingBalance,
      role: requestedRole,
      parentId,
      partnershipType,
      remark,
      transactionCodeMasked: maskTransactionCode(transactionCode),
      createdAt: now,
    })
  );
});
app.get("/api/admin/client-onboarding", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") {
    return res.status(403).json(env("Admin access required", {}, true, 403));
  }
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  const search = String(req.query?.search || "").trim().toLowerCase();
  const rawPartnershipType = String(req.query?.partnershipType || "").trim();
  const partnershipTypeFilter = rawPartnershipType ? normalizeAdminPartnershipType(rawPartnershipType) : "";

  let rows = db
    .prepare(
      `SELECT
        g.id,
        g.user_id,
        g.username,
        g.full_name,
        g.city,
        g.mobile_number,
        g.credit_amount,
        g.created_by,
        g.created_at,
        g.updated_at,
        up.data_json AS profile_json,
        p.partnership_type,
        p.remark,
        p.transaction_code,
        w.balance AS wallet_balance,
        usr.role AS user_role
      FROM admin_client_general g
      LEFT JOIN users usr ON usr.id = g.user_id
      LEFT JOIN admin_client_partnership p ON p.general_id = g.id
      LEFT JOIN user_profiles up ON up.user_id = g.user_id
      LEFT JOIN wallets w ON w.user_id = g.user_id
      ORDER BY datetime(g.created_at) DESC, g.created_at DESC`
    )
    .all()
    .map(buildAdminClientListItem);

  if (visibleIds instanceof Set) {
    rows = rows.filter((row) => visibleIds.has(String(row?.userId || "")));
  }
  if (partnershipTypeFilter) {
    rows = rows.filter((row) => String(row?.partnership?.type || "").toLowerCase() === partnershipTypeFilter);
  }
  if (search) {
    rows = rows.filter((row) => {
      const text = [
        row?.username,
        row?.fullName,
        row?.city,
        row?.mobileNumber,
        row?.partnership?.type,
        row?.partnership?.remark,
      ]
        .map((x) => String(x || "").toLowerCase())
        .join(" ");
      return text.includes(search);
    });
  }

  return res.json(env("", buildPaginatedItems(rows, req.query?.page, req.query?.limit)));
});
const sendAddAdminFeatureRemoved = (res) =>
  res.status(410).json(env(ADD_ADMIN_DISABLED_MESSAGE, { disabled: true }, true, 410));
app.get("/api/admin/feature-catalog", (_req, res) => sendAddAdminFeatureRemoved(res));
app.get("/api/admin/my-permissions", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const normalizedRole = normalizePanelRole(authRole, "user");
  return res.json(
    env("", {
      role: roleForAdminPanelUi(normalizedRole),
      actualRole: normalizedRole,
      isOwner: isOwnerPanelRole(authRole),
      features: getAdminFeaturePermissionsForUser(authUser, authRole),
      catalog: ADMIN_FEATURE_CATALOG,
    })
  );
});
app.get("/api/admin/managed-admins", (_req, res) => sendAddAdminFeatureRemoved(res));
app.post("/api/admin/create-admin-account", (_req, res) => sendAddAdminFeatureRemoved(res));
app.post("/api/admin/update-admin-permissions", (_req, res) => sendAddAdminFeatureRemoved(res));
app.get("/api/get-registration-code", (req, res) => {
  if (!getOwnerAuthContext(req, res)) return;
  const rows = db
    .prepare(
      "SELECT code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at FROM registration_codes WHERE is_active=1 ORDER BY created_at ASC"
    )
    .all()
    .map((r) => ({
      code: r.code,
      description: r.description || "",
      isActive: r.is_active === 1,
      maxUses: r.max_uses,
      usedCount: toNum(r.used_count, 0),
      lastUsedBy: r.last_used_by,
      createdBy: r.created_by,
      createdAt: r.created_at,
      updatedAt: r.updated_at,
    }));
  res.json(env("", rows));
});
app.post("/api/create-registration-code", (req, res) => {
  const ownerCtx = getOwnerAuthContext(req, res);
  if (!ownerCtx) return;
  const code = normalizeCode(req.body?.code);
  if (!code) return res.status(400).json(env("Code is required", {}, true, 400));
  const maxUses = req.body?.maxUses === undefined || req.body?.maxUses === null ? null : toNum(req.body.maxUses, 0);
  db.prepare(
    "INSERT INTO registration_codes (code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(code) DO UPDATE SET description=excluded.description,is_active=excluded.is_active,max_uses=excluded.max_uses,updated_at=excluded.updated_at"
  ).run(
    code,
    String(req.body?.description || ""),
    req.body?.isActive === false ? 0 : 1,
    maxUses,
    0,
    null,
    String(ownerCtx.authUser.username || DEFAULT_LOGIN_USERNAME),
    nowIso(),
    nowIso()
  );
  mysqlExec(
    `INSERT INTO registration_codes (code,description,is_active,max_uses,used_count,last_used_by,created_by,created_at,updated_at)
     VALUES (?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       description=VALUES(description),
       is_active=VALUES(is_active),
       max_uses=VALUES(max_uses),
       updated_at=VALUES(updated_at)`,
    [
      code,
      String(req.body?.description || ""),
      req.body?.isActive === false ? 0 : 1,
      maxUses,
      0,
      null,
      String(ownerCtx.authUser.username || DEFAULT_LOGIN_USERNAME),
      nowIso(),
      nowIso(),
    ]
  ).catch(() => {});
  return res.json(env("Registration code saved", { code, maxUses }));
});

const login = (admin = false) => (req, res) => {
  if (PLATFORM_MODE !== "b2b" || String(req.body?.platform || req.body?.platformType || "b2b").trim().toLowerCase() === "b2c") {
    return res.status(403).json({ message: "B2B platform only" });
  }
  if (!admin && req.body?.isDemo) {
    const demoRows = db
      .prepare("SELECT * FROM users WHERE role='user' AND username LIKE 'demo%' ORDER BY username")
      .all();
    if (!demoRows.length) {
      seedDemoUsers();
    }
    const list = demoRows.length
      ? demoRows
      : db.prepare("SELECT * FROM users WHERE role='user' AND username LIKE 'demo%' ORDER BY username").all();
    if (!list.length) {
      return res.status(500).json({ message: "Demo users unavailable" });
    }
    const picked = list[Math.floor(Math.random() * list.length)];
    const sessionId = Date.now();
    db.prepare("UPDATE users SET session_id=?,updated_at=? WHERE id=?").run(sessionId, nowIso(), picked.id);
    const updated = getUserById(picked.id);
    const { token, refreshToken } = makeTokens(updated, "user");
    return res.json(
      env("Demo login successful", {
        _id: updated.id,
        username: updated.username,
        role: "user",
        token,
        refreshToken,
        sessionId,
        isDemo: true,
        adminFeatures: { ...ADMIN_FEATURE_DEFAULTS },
        user: { ...userView(updated), role: "user", isDemo: true, featurePermissions: { ...ADMIN_FEATURE_DEFAULTS } },
      })
    );
  }

  const username = String(req.body?.username || req.body?.mobile || "").trim();
  const password = String(req.body?.password || "").trim();
  if (!username || !password) return res.status(400).json({ message: "Username and password are required" });
  const u = getUserByUsername(username) || getUserByUsernameCaseInsensitiveStmt.get(username);
  if (!u) return res.status(401).json({ message: "Invalid credentials" });
  if (!verifyPass(password, u.password)) return res.status(401).json({ message: "Invalid credentials" });
  if (!isAccountChainActive(u)) return res.status(403).json({ message: "This account is deactivated. Contact your upline." });

  const normalizedRole = String(u.role || "").trim().toLowerCase();
  const allowedAdminRoles = new Set(["super_admin", "admin", "master", "1", "2", "3"]);
  const isDefaultAdminCredential = username === DEFAULT_LOGIN_USERNAME;
  const canUseAdminLogin = isDefaultAdminCredential || allowedAdminRoles.has(normalizedRole);

  if (admin && !canUseAdminLogin) return res.status(403).json({ message: "Admin access only" });
  if (!admin && canUseAdminLogin) return res.status(403).json({ message: "Admin accounts must sign in at /admin" });

  const effectiveRole = admin
    ? (canUseAdminLogin && normalizedRole ? normalizedRole : "admin")
    : u.role;
  const effectivePanelRole = normalizePanelRole(effectiveRole, "user");
  const sessionId = Date.now();
  db.prepare("UPDATE users SET session_id=?,updated_at=? WHERE id=?").run(sessionId, nowIso(), u.id);
  const updated = getUserById(u.id);
  const actualRole = normalizePanelRole(updated?.role || effectivePanelRole, "user");
  const responseRole = admin ? roleForAdminPanelUi(actualRole) : actualRole;
  const adminFeatures =
    actualRole === "user"
      ? { ...ADMIN_FEATURE_DEFAULTS }
      : getAdminFeaturePermissionsForUser(updated, actualRole);
  const { token, refreshToken } = makeTokens(updated, admin ? responseRole : actualRole);
  return res.json(
    env("Login successful", {
      _id: updated.id,
      username: updated.username,
      role: responseRole,
      actualRole,
      token,
      refreshToken,
      sessionId,
      isOwner: isOwnerPanelRole(actualRole),
      adminFeatures,
      user: { ...userView(updated), role: responseRole, actualRole, featurePermissions: adminFeatures },
    })
  );
};
app.post("/api/login", login(false));
app.post("/api/login-admin", login(true));

app.post("/api/refresh-token", (req, res) => {
  const tk = String(req.body?.token || "").trim();
  if (!tk) return res.status(400).json({ message: "Refresh token is required" });
  try {
    const d = jwt.verify(tk, JWT_REFRESH);
    const u = d?.userId ? getUserById(d.userId) : null;
    if (!u) return res.status(401).json({ message: "Invalid refresh token" });
    const sessionRow = sessionByRefreshTokenStmt.get(tk);
    if (!sessionRow || String(sessionRow.user_id || "") !== String(u.id)) {
      return res.status(401).json(env(SESSION_EXPIRED_MESSAGE, { code: SESSION_EXPIRED_CODE }, true, 401));
    }
    const expiresAt = toNum(sessionRow.expires_at, 0);
    if (expiresAt && expiresAt < Date.now()) {
      deleteSessionByTokenStmt.run(String(sessionRow.token || ""));
      return res.status(401).json(env("Invalid refresh token", { code: "TOKEN_EXPIRED" }, true, 401));
    }
    const t = makeTokens(u);
    return res.json(env("Token refreshed", { newToken: t.token, refreshToken: t.refreshToken }));
  } catch {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
});

app.get("/api/user-info", (req, res) => {
  const u = reqUser(req);
  if (!u) return res.status(401).json(env("No auth token", {}, true, 401));
  const actualRole = normalizePanelRole(u.role, "user");
  const role = roleForAdminPanelUi(actualRole);
  const adminFeatures =
    actualRole === "user" ? { ...ADMIN_FEATURE_DEFAULTS } : getAdminFeaturePermissionsForUser(u, actualRole);
  return res.json(
    env("", {
      user: { ...userView(u), role, actualRole, featurePermissions: adminFeatures },
      isOwner: isOwnerPanelRole(actualRole),
      adminFeatures,
      featureCatalog: ADMIN_FEATURE_CATALOG,
    })
  );
});

app.get("/api/get-user-balance", (req, res) => {
  const u = reqUser(req);
  if (!u) return res.status(401).json(env("No auth token", {}, true, 401));
  const w = ensureWallet(u.id);
  return res.json(env("", { _id: id("w_"), balance: toNum(w.balance, 0), casinoexposer: toNum(w.casino_exposer, 0), exposer: toNum(w.exposer, 0) }));
});

// Stake buttons ("Button Values" page) are per account. Each account saves only
// its own buttons; nobody can change the global defaults through this API.
const STAKE_BUTTON_COUNT = 10;
const STAKE_BUTTON_MAX_VALUE = 1e9;
const stakeSettingKey = (userId) => `stake.user.${userId}`;
const getUserStakeDetail = (userId) => {
  const saved = userId ? getSetting(stakeSettingKey(userId), null) : null;
  return saved && typeof saved === "object" ? { ...STAKE_DETAIL, ...saved } : { ...STAKE_DETAIL };
};
const stakeSimpleFromDetail = (detail) => {
  const stakes = [];
  for (let i = 1; i <= STAKE_BUTTON_COUNT; i += 1) {
    const v = toNum(detail[`value${i}`], 0);
    if (v > 0) stakes.push(v);
  }
  return { minStake: STAKE_SIMPLE.minStake, maxStake: STAKE_SIMPLE.maxStake, stakes: stakes.length ? stakes : STAKE_SIMPLE.stakes };
};
app.get("/api/get-user-stake", (req, res) => {
  const u = reqAuthUser(req);
  const userStake = getUserStakeDetail(u?.id);
  return res.json({ success: true, ...env("", { ...stakeSimpleFromDetail(userStake), userStake }) });
});
app.post("/api/save-user-stake", (req, res) => {
  const u = reqAuthUser(req);
  if (!u) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const body = asPlainObject(req.body, {});
  const detail = getUserStakeDetail(u.id);
  const errors = {};
  // Legacy clients send a plain list of stakes.
  if (Array.isArray(body.stakes)) {
    body.stakes.slice(0, STAKE_BUTTON_COUNT).forEach((v, i) => {
      body[`value${i + 1}`] = v;
      if (body[`name${i + 1}`] === undefined) body[`name${i + 1}`] = String(v);
    });
  }
  for (let i = 1; i <= STAKE_BUTTON_COUNT; i += 1) {
    const nameKey = `name${i}`;
    const valueKey = `value${i}`;
    if (body[nameKey] !== undefined) {
      const name = String(body[nameKey]).trim();
      if (!name || name.length > 20) errors[nameKey] = "Label must be 1-20 characters";
      else detail[nameKey] = name;
    }
    if (body[valueKey] !== undefined) {
      const value = Number(body[valueKey]);
      if (!Number.isFinite(value) || value <= 0 || value > STAKE_BUTTON_MAX_VALUE) errors[valueKey] = "Value must be a positive number";
      else detail[valueKey] = Math.floor(value);
    }
  }
  if (Object.keys(errors).length) return res.status(400).json({ ...env("Invalid button values", {}, true, 400), errors });
  const saved = {};
  for (let i = 1; i <= STAKE_BUTTON_COUNT; i += 1) {
    saved[`name${i}`] = detail[`name${i}`];
    saved[`value${i}`] = detail[`value${i}`];
  }
  setSetting(stakeSettingKey(u.id), saved);
  return res.json(env("Stake saved", { ...stakeSimpleFromDetail(saved), userStake: saved }));
});

const handleUpdatePassword = (req, res) => {
  const username = String(req.body?.mobile || req.body?.username || "").trim();
  const pass = String(req.body?.newPassword || req.body?.password || req.body?.confirmPassword || "").trim();
  if (!username || !pass) return res.status(400).json({ message: "Username/mobile and password are required" });
  const u = getUserByUsername(username);
  if (!u) return res.status(404).json({ message: "User not found" });
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (!canActorAccessTargetUser(authUser, authRole, u)) return res.status(403).json(env("Access denied", {}, true, 403));
  if (pass.length < 4) return res.status(400).json(env("Password must be at least 4 characters", {}, true, 400));
  const confirm = req.body?.confirmPassword;
  if (confirm !== undefined && String(confirm).trim() !== pass) return res.status(400).json(env("Confirm password does not match", {}, true, 400));
  if (String(authUser.id) !== String(u.id) && !verifyActorTransactionPassword(authUser, req.body?.transactionPassword)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }
  const now = nowIso();
  const passwordHash = hashPass(pass);
  // A new password ends every existing login of that account (a stolen session
  // must not survive a reset). The client UI sends the user back to login.
  db.transaction(() => {
    db.prepare("UPDATE users SET password=?,session_id=?,updated_at=? WHERE id=?").run(passwordHash, Date.now(), now, u.id);
    deleteSessionsByUserStmt.run(u.id);
  })();
  const updated = getUserById(u.id);
  syncUserToMysql({
    id: updated.id,
    username: updated.username,
    password: updated.password,
    role: updated.role,
    level: toNum(updated.level, 1),
    parentId: updated.parent_id,
    sessionId: toNum(updated.session_id, Date.now()),
    createdAt: updated.created_at || now,
    updatedAt: updated.updated_at || now,
  }).catch(() => {});
  return res.json(env("Password updated successfully", { username }));
};
app.post("/api/update-password", handleUpdatePassword);
app.post("/api/update-user", handleUpdatePassword);
app.post("/api/admin/update-user-limits", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  const target = getUserById(String(req.body?.userId || req.body?.id || "").trim());
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(authUser, authRole, target)) return res.status(403).json(env("Access denied", {}, true, 403));
  let limits;
  try {
    limits = readUserLimits(req.body || {});
    const now = nowIso();
    const partnershipInput = req.body?.partnerships ?? req.body?.partnerShares ?? req.body?.partnership_share_pool;
    const isUserAccount = normalizePanelRole(target.role, "user") === "user";
    db.transaction(() => {
      let partnership;
      if (partnershipInput !== undefined && isUserAccount) {
        db.prepare("DELETE FROM user_partnerships WHERE user_id=?").run(target.id);
        partnership = saveUserPartnerships(target.id, partnershipInput, authUser, authRole, now);
      } else {
        const entries = db.prepare("SELECT partner_id AS partnerId,share_percentage AS sharePercentage FROM user_partnerships WHERE user_id=?").all(target.id);
        partnership = { entries, remainingShare: Math.round((100 - entries.reduce((a, e) => a + toNum(e.sharePercentage, 0), 0)) * 100) / 100 };
      }
      db.prepare("UPDATE users SET min_bet=?,max_bet=?,credit_limit=?,partnership_remaining=?,updated_at=? WHERE id=?").run(
        limits.minBet,
        limits.maxBet,
        limits.creditLimit,
        partnership.remainingShare,
        now,
        target.id
      );
      const profileRow = db.prepare("SELECT data_json,created_at FROM user_profiles WHERE user_id=?").get(target.id);
      const profile = profileRow ? safeParse(profileRow.data_json, {}) || {} : {};
      profile.minBet = limits.minBet;
      profile.maxBet = limits.maxBet;
      profile.creditLimit = limits.creditLimit;
      profile.partnership = {
        ...(profile.partnership || {}),
        partners: partnership.entries.map((entry) => ({ partnerId: entry.partnerId, sharePercentage: entry.sharePercentage })),
        remainingPercentage: partnership.remainingShare,
      };
      db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
        target.id,
        JSON.stringify(profile),
        profileRow?.created_at || now,
        now
      );
    })();
    userListResponseCache.clear();
    const updatedTarget = getUserById(target.id);
    syncUserToMysql({
      id: updatedTarget.id,
      username: updatedTarget.username,
      password: updatedTarget.password,
      role: updatedTarget.role,
      level: toNum(updatedTarget.level, 1),
      parentId: updatedTarget.parent_id,
      sessionId: toNum(updatedTarget.session_id, Date.now()),
      createdAt: updatedTarget.created_at || now,
      updatedAt: updatedTarget.updated_at || now,
      minBet: limits.minBet,
      maxBet: limits.maxBet,
      creditLimit: limits.creditLimit,
      partnershipRemaining: toNum(updatedTarget.partnership_remaining, 100),
    }).catch(() => {});
    syncUserPartnershipsToMysql({
      userId: target.id,
      partnerships: db.prepare("SELECT id,partner_id AS partnerId,share_percentage AS sharePercentage,created_at AS createdAt,updated_at AS updatedAt FROM user_partnerships WHERE user_id=?").all(target.id),
    }).catch(() => {});
    return res.json(env("User limits and partnership updated", { userId: target.id, ...limits }));
  } catch (e) {
    return res.status(400).json(env(e.message || "Unable to update user limits", {}, true, 400));
  }
});
app.post("/api/add-transaction-password", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const targetUserId = String(req.body?.userId || req.body?.id || "").trim();
  const targetUsername = String(req.body?.username || "").trim();
  const target =
    (targetUserId && getUserById(targetUserId)) ||
    (targetUsername && getUserByUsername(targetUsername)) ||
    authUser;
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  const txPassword = String(req.body?.transactionPassword || req.body?.password || "").trim();
  if (!txPassword) return res.status(400).json(env("transactionPassword is required", {}, true, 400));

  const row = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(target.id);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  profile.transactionPasswordHash = hashPass(txPassword);
  profile.transactionPasswordUpdatedAt = nowIso();

  const now = nowIso();
  const dataJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    target.id,
    dataJson,
    row ? now : now,
    now
  );
  syncUserProfileToMysql({ userId: target.id, dataJson, createdAt: row ? now : now, updatedAt: now }).catch(() => {});
  return res.json(env("Transaction password saved", { success: true }));
});
app.post("/api/reset-transaction-password", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const target =
    getUserById(String(req.body?.userId || req.body?.id || "").trim()) ||
    getUserByUsername(String(req.body?.username || "").trim());
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(authUser, authRole, target)) return res.status(403).json(env("Access denied", {}, true, 403));
  const transactionPassword = String(req.body?.transactionPassword || "").trim();
  if (!transactionPassword) return res.status(400).json(env("transactionPassword is required", {}, true, 400));
  const row = db.prepare("SELECT data_json,created_at FROM user_profiles WHERE user_id=?").get(target.id);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  const now = nowIso();
  profile.transactionPasswordHash = hashPass(transactionPassword);
  profile.transactionPasswordUpdatedAt = now;
  const dataJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    target.id,
    dataJson,
    row?.created_at || now,
    now
  );
  syncUserProfileToMysql({ userId: target.id, dataJson, createdAt: row?.created_at || now, updatedAt: now }).catch(() => {});
  return res.json(env("Transaction password reset successfully", { success: true }));
});
app.post("/api/save-general-setting", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const target = getUserById(String(req.body?.userId || req.body?.id || "").trim());
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(authUser, authRole, target)) return res.status(403).json(env("Access denied", {}, true, 403));
  if (String(target.id) === String(authUser.id)) return res.status(403).json(env("You can only change accounts in your downline", {}, true, 403));
  if (!verifyActorTransactionPassword(authUser, req.body?.transactionPassword)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }
  const userSetting = req.body?.userSetting;
  if (!userSetting || typeof userSetting !== "object" || Array.isArray(userSetting)) {
    return res.status(400).json(env("userSetting is required", {}, true, 400));
  }
  const row = db.prepare("SELECT data_json,created_at FROM user_profiles WHERE user_id=?").get(target.id);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  const now = nowIso();
  profile.userSetting = userSetting;
  // Bet placement enforces users.min_bet / max_bet, so apply the sport limits there.
  let limits;
  try {
    limits = readUserLimitsWithLegacyPayload({ userSetting, creditLimit: toNum(target.credit_limit, 0) });
  } catch (e) {
    return res.status(400).json(env(e.message, {}, true, 400));
  }
  db.prepare("UPDATE users SET min_bet=?,max_bet=?,updated_at=? WHERE id=?").run(limits.minBet, limits.maxBet, nowIso(), target.id);
  profile.minBet = limits.minBet;
  profile.maxBet = limits.maxBet;
  const dataJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    target.id,
    dataJson,
    row?.created_at || now,
    now
  );
  syncUserProfileToMysql({ userId: target.id, dataJson, createdAt: row?.created_at || now, updatedAt: now }).catch(() => {});
  userListResponseCache.clear();
  return res.json(env("General settings saved", { userId: target.id, userSetting }));
});
app.post("/api/update-user-status", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const targetUserId = String(req.body?.userId || req.body?.id || "").trim();
  const targetUsername = String(req.body?.username || "").trim();
  const target = (targetUserId && getUserById(targetUserId)) || (targetUsername && getUserByUsername(targetUsername));
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  if (String(target.id) === String(authUser.id) || !canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("You can only change accounts in your downline", {}, true, 403));
  }
  // The Status dialog confirms with the transaction password; inline lock toggles do not send one.
  if (req.body?.transactionPassword !== undefined && !verifyActorTransactionPassword(authUser, req.body.transactionPassword)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }

  const row = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(target.id);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  const currentStatus = profile?.status && typeof profile.status === "object" ? profile.status : {};
  const nextBetLock = boolOrDefault(req.body?.betLock ?? req.body?.isUserBetActive ?? currentStatus.betLock, false);
  const nextIsActive = boolOrDefault(req.body?.isActive ?? req.body?.isUserActive ?? currentStatus.isActive, true);
  profile.status = {
    betLock: nextBetLock,
    isActive: nextIsActive,
    updatedAt: nowIso(),
  };
  profile.betLock = nextBetLock;
  profile.isLogin = nextIsActive;
  const now = nowIso();
  const dataJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    target.id,
    dataJson,
    row ? now : now,
    now
  );
  syncUserProfileToMysql({ userId: target.id, dataJson, createdAt: row ? now : now, updatedAt: now }).catch(() => {});
  userListResponseCache.clear();
  return res.json(env("User status updated", { success: true, isLogin: nextIsActive, betLock: nextBetLock }));
});
const buildActorVisibleUserIdSet = (authUser, authRole) => {
  if (!authUser) return new Set();
  const visible = getVisibleUserIdsForActor(authUser, authRole);
  if (!(visible instanceof Set)) return null;
  const out = new Set(visible);
  out.add(String(authUser.id || ""));
  return out;
};
const canActorSeeUserId = (authUser, authRole, userId) => {
  const uid = String(userId || "").trim();
  if (!uid || !authUser) return false;
  const visible = buildActorVisibleUserIdSet(authUser, authRole);
  if (visible === null) return true;
  return visible.has(uid);
};
const readUserHierarchyLookup = () => {
  const rows = db.prepare("SELECT id,username,parent_id FROM users").all();
  const byId = new Map();
  for (const row of rows) {
    const idValue = String(row?.id || "").trim();
    if (!idValue) continue;
    byId.set(idValue, {
      id: idValue,
      username: String(row?.username || "").trim(),
      parentId: String(row?.parent_id || "").trim(),
    });
  }
  return { byId };
};
const resolveParentNamesForUser = (userId, hierarchyLookup) => {
  const byId = hierarchyLookup?.byId instanceof Map ? hierarchyLookup.byId : new Map();
  const out = [];
  let guard = 0;
  let current = byId.get(String(userId || "").trim());
  while (current?.parentId && guard < 15) {
    const nextParent = byId.get(String(current.parentId || "").trim());
    if (!nextParent) break;
    out.push(nextParent.username || nextParent.id);
    current = nextParent;
    guard += 1;
  }
  return out;
};
const mapBetRowForReport = (row, hierarchyLookup) => {
  const userId = String(row?.user_id || "").trim();
  const parentNames = resolveParentNamesForUser(userId, hierarchyLookup);
  const marketId = String(row?.market_id || "").trim();
  const selectionId = String(row?.selection_id ?? "").trim();
  const odds = toNum(row?.odds, 0);
  const stack = normalizeMoneyAmount(row?.stack);
  const pnl = normalizeMoneyAmount(row?.pnl);
  return {
    _id: row?.id,
    id: row?.id,
    userId,
    user_id: userId,
    userName: String(row?.username || row?.user_name || "").trim(),
    username: String(row?.username || row?.user_name || "").trim(),
    parentStr: parentNames,
    parentNameStr: parentNames.join(" > "),
    C1: parentNames[0] || "",
    C2: parentNames[1] || "",
    C3: parentNames[2] || "",
    matchId: toNum(row?.match_id, 0),
    marketId,
    selectionId,
    selectionName: String(row?.selection_name || "").trim(),
    odds,
    volume: normalizeMoneyAmount(row?.volume),
    stack,
    pnl,
    profitLoss: pnl,
    exposure: normalizeMoneyAmount(row?.exposure),
    marketName: String(row?.market_name || "").trim(),
    isBack: toNum(row?.is_back, 1) === 1,
    eventId: toNum(row?.event_id, 0),
    type: String(row?.type || "match"),
    currentMarketOdds: toNum(row?.current_market_odds, odds),
    ipAddress: String(row?.ip_address || "").trim(),
    userIp: String(row?.ip_address || "").trim(),
    matchName: String(row?.match_name || row?.db_match_name || "").trim(),
    betOn: String(row?.bet_on || "MATCH_ODDS"),
    bet_on: String(row?.bet_on || "MATCH_ODDS"),
    gtype: String(row?.gtype || "match"),
    oddsType: String(row?.odds_type || ""),
    sportId: toNum(row?.sport_id, 0),
    status: String(row?.status || "unsettled").toLowerCase(),
    createdAt: row?.created_at || null,
  };
};
const normalizeStatusToken = (value) => String(value || "").trim().toLowerCase();
const normalizeBetStatusList = (input, fallback = []) => {
  const values = Array.isArray(input)
    ? input
    : String(input || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  const out = [];
  const push = (status) => {
    const normalized = normalizeStatusToken(status);
    if (!normalized || normalized === "all") return;
    if (!out.includes(normalized)) out.push(normalized);
  };
  for (const raw of values) {
    const token = normalizeStatusToken(raw);
    if (!token || token === "all") continue;
    if (token === "current") {
      push("pending");
      push("unsettled");
      continue;
    }
    if (token === "game" || token === "completed") {
      push("completed");
      push("settled");
      continue;
    }
    push(token);
  }
  if (out.length) return out;
  return Array.isArray(fallback) ? fallback.map(normalizeStatusToken).filter(Boolean) : [];
};
const parseFilterDateMs = (value) => {
  const ms = Date.parse(String(value || "").trim());
  return Number.isFinite(ms) ? ms : 0;
};
const queryBetRowsWithRelations = ({
  matchId = 0,
  userId = "",
  sportId = 0,
  username = "",
  searchText = "",
  statusList = [],
  limit = 0,
} = {}) => {
  const params = [];
  let sql = `
    SELECT
      b.*,
      u.username AS username,
      m.sport_id AS sport_id,
      m.name AS db_match_name
    FROM bets b
    LEFT JOIN users u ON u.id=b.user_id
    LEFT JOIN matches m ON m.match_id=b.match_id
    WHERE 1=1`;
  const matchIdNum = toNum(matchId, 0);
  if (matchIdNum > 0) {
    sql += " AND b.match_id=?";
    params.push(matchIdNum);
  }
  const userIdText = String(userId || "").trim();
  if (userIdText) {
    sql += " AND b.user_id=?";
    params.push(userIdText);
  }
  const sportIdNum = toNum(sportId, 0);
  if (sportIdNum > 0) {
    sql += " AND m.sport_id=?";
    params.push(sportIdNum);
  }
  const usernameText = String(username || "").trim().toLowerCase();
  if (usernameText) {
    sql += " AND lower(u.username) LIKE ?";
    params.push(`%${usernameText}%`);
  }
  const cleanStatuses = normalizeBetStatusList(statusList, []);
  if (cleanStatuses.length) {
    sql += ` AND lower(b.status) IN (${cleanStatuses.map(() => "?").join(",")})`;
    params.push(...cleanStatuses);
  }
  const search = String(searchText || "").trim().toLowerCase();
  if (search) {
    sql += " AND (lower(coalesce(b.match_name,'')) LIKE ? OR lower(coalesce(b.selection_name,'')) LIKE ? OR lower(coalesce(b.market_name,'')) LIKE ?)";
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }
  sql += " ORDER BY datetime(b.created_at) DESC, b.created_at DESC";
  const limitNum = toNum(limit, 0);
  if (limitNum > 0) {
    sql += " LIMIT ?";
    params.push(Math.max(1, Math.min(20000, limitNum)));
  }
  return db.prepare(sql).all(...params);
};
const filterBetRowsByDateRange = (rows, startDate, endDate) => {
  const startMs = parseFilterDateMs(startDate);
  const endRaw = String(endDate || "").trim();
  const endMsBase = parseFilterDateMs(endRaw);
  const endMs = endMsBase
    ? /^\d{4}-\d{2}-\d{2}$/.test(endRaw)
      ? endMsBase + 24 * 60 * 60 * 1000 - 1
      : endMsBase
    : 0;
  if (!startMs && !endMs) return rows;
  return rows.filter((row) => {
    const rowMs = parseFilterDateMs(row?.created_at);
    if (startMs && rowMs && rowMs < startMs) return false;
    if (endMs && rowMs && rowMs > endMs) return false;
    return true;
  });
};
const filterBetRowsByActorVisibility = (rows, authUser, authRole) => {
  const visibleSet = buildActorVisibleUserIdSet(authUser, authRole);
  if (visibleSet === null) return rows;
  return rows.filter((row) => visibleSet.has(String(row?.user_id || "").trim()));
};
const aggregateOddsProfitFromRows = (rows) => {
  const oddsProfit = {};
  for (const row of rows) {
    const marketId = String(row?.market_id || "").trim();
    const selectionId = String(row?.selection_id ?? "").trim();
    if (!marketId || !selectionId) continue;
    const key = `${marketId}_${selectionId}`;
    oddsProfit[key] = normalizeMoneyAmount(toNum(oddsProfit[key], 0) + normalizeMoneyAmount(row?.pnl));
  }
  return oddsProfit;
};
const buildUserBetSummaryFromRows = (rows) => {
  const byUser = new Map();
  for (const row of rows) {
    const userId = String(row?.user_id || "").trim();
    if (!userId) continue;
    const prev = byUser.get(userId) || {
      userId,
      username: String(row?.username || "").trim(),
      betsCount: 0,
      totalStake: 0,
      totalExposure: 0,
      totalPnl: 0,
    };
    prev.betsCount += 1;
    prev.totalStake += normalizeMoneyAmount(row?.stack);
    prev.totalExposure += normalizeMoneyAmount(row?.exposure);
    prev.totalPnl += normalizeMoneyAmount(row?.pnl);
    byUser.set(userId, prev);
  }
  return [...byUser.values()]
    .map((item) => ({
      ...item,
      totalStake: normalizeMoneyAmount(item.totalStake),
      totalExposure: normalizeMoneyAmount(item.totalExposure),
      totalPnl: normalizeMoneyAmount(item.totalPnl),
    }))
    .sort((a, b) => b.totalPnl - a.totalPnl);
};
const buildMarketAnalysisFromRows = (rows) => {
  const byMarket = new Map();
  for (const row of rows) {
    const matchId = toNum(row?.match_id, 0);
    const marketId = String(row?.market_id || "").trim();
    if (!matchId || !marketId) continue;
    const key = `${matchId}::${marketId}`;
    const prev = byMarket.get(key) || {
      _id: key,
      matchId,
      marketId,
      sportId: toNum(row?.sport_id, 0),
      matchName: String(row?.match_name || row?.db_match_name || "").trim(),
      marketName: String(row?.market_name || "").trim(),
      totalBets: 0,
      totalStake: 0,
      totalExposure: 0,
      totalPnl: 0,
      backStake: 0,
      layStake: 0,
      updatedAt: row?.created_at || null,
    };
    const stake = normalizeMoneyAmount(row?.stack);
    prev.totalBets += 1;
    prev.totalStake += stake;
    prev.totalExposure += normalizeMoneyAmount(row?.exposure);
    prev.totalPnl += normalizeMoneyAmount(row?.pnl);
    if (toNum(row?.is_back, 1) === 1) prev.backStake += stake;
    else prev.layStake += stake;
    byMarket.set(key, prev);
  }
  return [...byMarket.values()]
    .map((item) => ({
      ...item,
      totalStake: normalizeMoneyAmount(item.totalStake),
      totalExposure: normalizeMoneyAmount(item.totalExposure),
      totalPnl: normalizeMoneyAmount(item.totalPnl),
      backStake: normalizeMoneyAmount(item.backStake),
      layStake: normalizeMoneyAmount(item.layStake),
    }))
    .sort((a, b) => b.totalStake - a.totalStake);
};
const readMatchBetLockKey = (matchId) => `${"match.bet.locks."}${toNum(matchId, 0)}`;
const normalizeMatchBetLockStore = (raw) => {
  const value = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const normalizeState = (input = {}) => ({
    M: toBool(input?.M),
    B: toBool(input?.B),
    F: toBool(input?.F),
  });
  const usersRaw = value?.users && typeof value.users === "object" && !Array.isArray(value.users) ? value.users : {};
  const users = {};
  for (const [uid, state] of Object.entries(usersRaw)) {
    const cleanUid = String(uid || "").trim();
    if (!cleanUid) continue;
    users[cleanUid] = normalizeState(state);
  }
  return {
    default: normalizeState(value?.default),
    users,
    updatedAt: String(value?.updatedAt || "").trim() || null,
  };
};
const readMatchBetLockStore = (matchId) => normalizeMatchBetLockStore(getSetting(readMatchBetLockKey(matchId), {}));
const saveMatchBetLockStore = (matchId, value) => {
  const normalized = normalizeMatchBetLockStore({
    ...value,
    updatedAt: nowIso(),
  });
  setSetting(readMatchBetLockKey(matchId), normalized);
  return normalized;
};
const resolveMatchUserBetLockState = (store, userId) => {
  const uid = String(userId || "").trim();
  const defaults = store?.default || { M: false, B: false, F: false };
  const userLocks = uid ? store?.users?.[uid] : null;
  return {
    M: userLocks?.M !== undefined ? !!userLocks.M : !!defaults.M,
    B: userLocks?.B !== undefined ? !!userLocks.B : !!defaults.B,
    F: userLocks?.F !== undefined ? !!userLocks.F : !!defaults.F,
  };
};
const normalizeBetLockType = (value) => {
  const raw = String(value || "").trim().toUpperCase();
  if (raw === "B" || raw === "BOOK" || raw === "BOOKMAKER") return "B";
  if (raw === "F" || raw === "FANCY") return "F";
  return "M";
};
const readUserRuntimeStatusFlags = (userId) => {
  const uid = String(userId || "").trim();
  if (!uid) return { isActive: true, betLock: false };
  const row = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(uid);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  const status = profile?.status && typeof profile.status === "object" ? profile.status : {};
  const isActive = boolOrDefault(status.isActive ?? profile?.isLogin, true);
  const betLock = boolOrDefault(status.betLock ?? profile?.betLock, false);
  return { isActive, betLock };
};
app.get("/api/get-exposer-event", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const targetUserId = String(req.query?.userId || "").trim();
  const targetUsername = String(req.query?.username || "").trim();
  const target =
    (targetUserId && getUserById(targetUserId)) ||
    (targetUsername && (getUserByUsername(targetUsername) || getUserByUsernameCaseInsensitiveStmt.get(targetUsername))) ||
    authUser;
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  let rows = queryBetRowsWithRelations({
    userId: target.id,
    statusList: ["pending", "unsettled"],
    limit: 5000,
  });
  if (!rows.length) {
    rows = queryBetRowsWithRelations({
      userId: target.id,
      statusList: [],
      limit: 5000,
    });
  }
  const mapped = buildMarketAnalysisFromRows(rows).map((item) => ({
    _id: item.matchId,
    matchId: item.matchId,
    sportId: item.sportId,
    matchName: item.matchName || `Match ${item.matchId}`,
    marketName: item.marketName || "MATCH_ODDS",
    totalBets: item.totalBets,
    myCount: item.totalBets,
    exposure: item.totalExposure,
  }));
  res.json(env("", mapped));
});

const getUserProfileJson = (userId) => {
  const row = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(String(userId || ""));
  return row ? safeParse(row.data_json, {}) || {} : {};
};
// The acting account confirms money movements with its transaction password,
// or with its login password if no transaction password has been set yet.
const verifyActorTransactionPassword = (actor, input) => {
  const value = String(input || "").trim();
  if (!value) return false;
  const txnHash = String(getUserProfileJson(actor.id).transactionPasswordHash || "");
  if (txnHash) return txnHash === hashPass(value);
  const fresh = getUserById(actor.id);
  return !!fresh && verifyPass(value, String(fresh.password || ""));
};
// Coins move only between a child and its direct parent. The parent operates
// its own children; Super Admin may operate any parent/child pair.
// Banking model: coins move only between an account and its DIRECT parent.
// Head office (Super Admin) funds its branches (direct accounts); only a
// branch can deposit to / withdraw from its own customers. Super Admin can
// still view and manage everyone, but cannot move a branch's coins.
const canActorOperateCoins = (actor, _actorRole, child) => {
  if (!actor || !child || String(actor.id) === String(child.id)) return false;
  return String(child.parent_id || "") === String(actor.id);
};
const syncWalletsAfterCoinMove = (userIds) => {
  for (const userId of [...new Set(userIds.filter(Boolean).map(String))]) {
    const wallet = getWallet(userId);
    if (!wallet) continue;
    syncWalletToMysql({
      userId,
      balance: toNum(wallet.balance, 0),
      exposer: toNum(wallet.exposer, 0),
      casinoExposer: toNum(wallet.casino_exposer, 0),
      updatedAt: wallet.updated_at || nowIso(),
    }).catch(() => {});
  }
  userListResponseCache.clear();
};
const sendCoinError = (res, e, fallback = "Unable to complete the transfer") => {
  const status = e instanceof CoinError ? e.status : 500;
  if (!(e instanceof CoinError)) console.error("[coins]", e);
  return res.status(status).json(env(e instanceof CoinError ? e.message : fallback, {}, true, status));
};
const readIdempotencyKey = (req) =>
  String(req.get("Idempotency-Key") || req.body?.idempotencyKey || req.body?.requestId || "").trim() || null;

app.post("/api/user-account-balance", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  const userId = String(req.body?.userId || req.body?.id || "").trim();
  if (!userId) return res.status(400).json(env("userId is required", {}, true, 400));
  const target = getUserById(userId);
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorOperateCoins(authUser, authRole, target)) {
    return res.status(403).json(env("Coins move only between an account and its direct parent. Ask " + (getUserById(String(target.parent_id || ""))?.username || "the parent") + " to do this.", {}, true, 403));
  }
  const updateType = String(req.body?.balanceUpdateType || "D").trim().toUpperCase();
  if (!["D", "W"].includes(updateType)) return res.status(400).json(env("Invalid balance update type", {}, true, 400));
  if (!verifyActorTransactionPassword(authUser, req.body?.transactionPassword)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }
  try {
    const entry = coinEngine.transfer({
      childId: target.id,
      direction: updateType === "D" ? "deposit" : "withdraw",
      amount: req.body?.amount,
      actorId: authUser.id,
      remark: String(req.body?.remark || req.body?.narration || "").trim(),
      idempotencyKey: readIdempotencyKey(req),
    });
    syncWalletsAfterCoinMove([entry.fromUserId, entry.toUserId]);
    if (!entry.replayed) {
      const verb = updateType === "D" ? "deposited to" : "withdrawn from";
      addNotification(target.id, updateType === "D" ? "Coins deposited" : "Coins withdrawn", entry.amount + " coins " + verb + " your account by " + authUser.username, "wallet", authUser.username);
    }
    const childBalance = updateType === "D" ? entry.toBalanceAfter : entry.fromBalanceAfter;
    const parentBalance = updateType === "D" ? entry.fromBalanceAfter : entry.toBalanceAfter;
    return res.json(env(updateType === "D" ? "Deposit successful" : "Withdraw successful", {
      transactionId: entry.id,
      balance: childBalance,
      parentBalance,
      balanceUpdateType: updateType,
      replayed: entry.replayed,
    }));
  } catch (e) {
    return sendCoinError(res, e);
  }
});

// Coin ledger: every deposit / withdraw between parent and child.
app.get("/api/admin/coin-ledger", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const isOwner = isOwnerPanelRole(authRole);
  const where = [];
  const params = [];
  const username = String(req.query?.username || "").trim();
  if (username) {
    const subject = getUserByUsername(username);
    if (!subject) return res.json(env("", { items: [], total: 0 }));
    if (!canActorAccessTargetUser(authUser, authRole, subject)) return res.status(403).json(env("Access denied", {}, true, 403));
    where.push("(l.from_user_id=? OR l.to_user_id=?)");
    params.push(subject.id, subject.id);
  } else if (!isOwner) {
    // Non-owners see entries that touch themselves or anyone in their downline.
    where.push("(l.from_user_id=? OR l.to_user_id=? OR l.from_user_id IN (SELECT value FROM json_each(?)) OR l.to_user_id IN (SELECT value FROM json_each(?)))");
    const downline = JSON.stringify([...getDescendantUserIdSet(authUser.id)]);
    params.push(authUser.id, authUser.id, downline, downline);
  }
  const from = String(req.query?.from || "").trim();
  const to = String(req.query?.to || "").trim();
  const fromMs = from ? new Date(from).getTime() : null;
  const toMs = to ? new Date(to).getTime() + (to.length <= 10 ? 86399999 : 0) : null;
  if ([fromMs, toMs].some((ms) => ms !== null && !Number.isFinite(ms))) return res.status(400).json(env("Invalid date", {}, true, 400));
  if (fromMs !== null) {
    where.push("l.created_at >= ?");
    params.push(new Date(fromMs).toISOString());
  }
  if (toMs !== null) {
    where.push("l.created_at <= ?");
    params.push(new Date(toMs).toISOString());
  }
  const direction = String(req.query?.direction || "").trim().toLowerCase();
  if (["deposit", "withdraw", "settlement"].includes(direction)) {
    where.push("l.direction=?");
    params.push(direction);
  }
  const limit = Math.min(500, Math.max(1, Math.floor(toNum(req.query?.limit, 100))));
  const page = Math.max(1, Math.floor(toNum(req.query?.page, 1)));
  const whereSql = where.length ? "WHERE " + where.join(" AND ") : "";
  const total = db.prepare(`SELECT COUNT(*) AS c FROM coin_ledger l ${whereSql}`).get(...params).c;
  const rows = db
      .prepare(
        `SELECT l.*, fu.username AS from_username, fu.role AS from_role, tu.username AS to_username, tu.role AS to_role, au.username AS actor_username
         FROM coin_ledger l
         LEFT JOIN users fu ON fu.id=l.from_user_id
         LEFT JOIN users tu ON tu.id=l.to_user_id
         LEFT JOIN users au ON au.id=l.actor_id
         ${whereSql}
         ORDER BY l.created_at DESC, l.rowid DESC
         LIMIT ? OFFSET ?`
      )
      .all(...params, limit, (page - 1) * limit);
  // Balances are shown only for accounts the caller may see (self + downline);
  // an upline account's balance after a transfer is never revealed.
  const balanceVisibleIds = isOwner ? null : new Set([String(authUser.id), ...[...getDescendantUserIdSet(authUser.id)].map(String)]);
  const canSeeBalance = (userId) => !balanceVisibleIds || balanceVisibleIds.has(String(userId || ""));
  const items = rows.map((row) => ({
    ...coinEngine.mapEntry(row),
    ...(canSeeBalance(row.from_user_id) ? {} : { fromBalanceAfter: null }),
    ...(canSeeBalance(row.to_user_id) ? {} : { toBalanceAfter: null }),
    fromUsername: row.from_username || row.from_user_id,
    fromRole: normalizePanelRole(row.from_role, "user"),
    toUsername: row.to_username || row.to_user_id,
    toRole: normalizePanelRole(row.to_role, "user"),
    actorUsername: row.actor_username || "",
  }));
  return res.json(env("", { items, total, page, limit }));
});

// Credit reference and exposure limit only. Balances change exclusively via
// /api/user-account-balance (parent <-> child transfers).
app.post("/api/update-user-wallet", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  if (req.body?.balance !== undefined || req.body?.exposer !== undefined || req.body?.casinoexposer !== undefined) {
    return res.status(400).json(env("Balances cannot be set directly. Use Deposit or Withdraw.", {}, true, 400));
  }
  const requestedUserId = String(req.body?.userId || req.body?.id || "").trim();
  const requestedUsername = String(req.body?.username || req.body?.userName || "").trim();
  if (!requestedUserId && !requestedUsername) return res.status(400).json(env("userId or username is required", {}, true, 400));
  const target = (requestedUserId && getUserById(requestedUserId)) ||
    (requestedUsername && getUserByUsername(requestedUsername));
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (String(target.id) === String(authUser.id) || !canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("You can only change accounts in your downline", {}, true, 403));
  }
  const walletUpdateType = String(req.body?.walletUpdateType || req.body?.type || "").trim().toUpperCase();
  if (!["CRD", "EXP"].includes(walletUpdateType)) return res.status(400).json(env("walletUpdateType must be CRD or EXP", {}, true, 400));
  if (!verifyActorTransactionPassword(authUser, req.body?.transactionPassword)) {
    return res.status(400).json(env("Invalid transaction password", {}, true, 400));
  }
  const amount = toNum(req.body?.amount, NaN);
  if (!Number.isFinite(amount) || amount < 0) return res.status(400).json(env("Amount must be zero or a positive number", {}, true, 400));
  const value = Math.round(amount * 100) / 100;
  const now = nowIso();
  const profileRow = db.prepare("SELECT data_json,created_at FROM user_profiles WHERE user_id=?").get(target.id);
  const profile = profileRow ? safeParse(profileRow.data_json, {}) || {} : {};
  db.transaction(() => {
    if (walletUpdateType === "CRD") {
      profile.creditRefrences = value;
      profile.creditReferences = value;
      db.prepare("UPDATE users SET credit_limit=?,updated_at=? WHERE id=?").run(value, now, target.id);
    } else {
      profile.exposureLimit = value;
    }
    db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
      target.id,
      JSON.stringify(profile),
      profileRow?.created_at || now,
      now
    );
  })();
  userListResponseCache.clear();
  const w = ensureWallet(target.id);
  res.json(env(walletUpdateType === "CRD" ? "Credit reference updated" : "Exposure limit updated", {
    userId: target.id,
    username: target.username,
    balance: toNum(w.balance, 0),
    exposer: toNum(w.exposer, 0),
    casinoexposer: toNum(w.casino_exposer, 0),
    walletUpdateType,
    value,
  }));
});

app.get("/api/get-user-list", async (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);

  const searchTerm = normalizeSearchTerm(req.query || {});
  const typeFilter = normalizeTypeFilter(req.query?.type);
  const statusFilter = normalizeStatusFilter(req.query?.status);
  const page = toNum(req.query?.page, 1);
  const limit = toNum(req.query?.limit, 50);
  const userListCacheKey = `${authUser.id}|${authRole}|${String(req.query?.username || "")}|${String(req.query?.search || "")}|${typeFilter}|${statusFilter === null ? "all" : statusFilter}|${page}|${limit}`;
  const cachedPayload = userListResponseCache.get(userListCacheKey);
  if (cachedPayload) return res.json(env("", cachedPayload));

  let rows = queryUserRowsSqlite();
  if (!rows.length) rows = await queryUserRowsMysql();

  const drillUsername = String(req.query?.username || "").trim().toLowerCase();
  const drillRow = drillUsername ? rows.find((row) => String(row.username || "").toLowerCase() === drillUsername) : null;
  if (drillRow && visibleIds instanceof Set && String(drillRow.id) !== String(authUser.id) && !visibleIds.has(String(drillRow.id))) {
    return res.status(403).json(env("You do not have access to this account", {}, true, 403));
  }
  const parentScopeId = String(drillRow ? drillRow.id : authUser.id);
  const rowById = new Map(rows.map((row) => [String(row.id), row]));
  const breadcrumb = [];
  for (let cursor = drillRow, guard = 0; cursor && guard < 20; guard += 1) {
    breadcrumb.unshift({ id: cursor.id, username: cursor.username, role: String(cursor.role || "").toLowerCase() });
    if (String(cursor.id) === String(authUser.id)) break;
    cursor = rowById.get(String(cursor.parent_id || ""));
  }
  if (!breadcrumb.length || String(breadcrumb[0].id) !== String(authUser.id)) {
    breadcrumb.unshift({ id: authUser.id, username: authUser.username, role: normalizePanelRole(authRole, "user") });
  }

  // Strict tree view: only direct children of the viewed account
  const pnlByUser = realizedPnlMap();
  let items = rows
    .filter((row) => String(row.parent_id || "") === parentScopeId)
    .map((row) => buildUserListItem({ ...row, profit_loss: toNum(pnlByUser.get(String(row.id)), 0) }))
    .filter((u) => !isClientListBlockedRole(u.role));
  if (visibleIds instanceof Set) {
    items = items.filter((u) => visibleIds.has(String(u?._id || "")));
  }
  const shareholderStmt = db.prepare(
    "SELECT up.partner_id AS partnerId, up.share_percentage AS sharePercentage, u.username AS username, u.role AS role FROM user_partnerships up LEFT JOIN users u ON u.id = up.partner_id WHERE up.user_id=?"
  );
  items.forEach((u) => {
    u.shareholders = shareholderStmt.all(u._id).map((s) => ({
      partnerId: s.partnerId,
      username: s.username || s.partnerId,
      role: s.role || "",
      sharePercentage: toNum(s.sharePercentage, 0),
    }));
  });
  const listSearch = String(req.query?.search || "").trim().toLowerCase();
  if (listSearch && !["true", "false"].includes(listSearch)) {
    items = items.filter((u) => String(u.username || "").toLowerCase().includes(listSearch));
  }
  if (typeFilter) items = items.filter((u) => String(u.role || "").toLowerCase() === typeFilter);
  if (statusFilter !== null) {
    items = items.filter((u) => {
      if (isOwnerPanelRole(u.role)) return true;
      return !!u.isLogin === statusFilter;
    });
  }

  const payload = { ...buildPaginatedItems(items, page, limit), breadcrumb };
  userListResponseCache.set(userListCacheKey, payload);
  res.json(env("", payload));
});
app.post("/api/get-user-list-suggestion", async (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);

  const s = String(req.body?.search || req.body?.username || "").toLowerCase();
  const suggestionCacheKey = `${authUser.id}|${authRole}|${s}`;
  const cachedSuggestions = userListSuggestionCache.get(suggestionCacheKey);
  if (cachedSuggestions) return res.json(env("", cachedSuggestions));
  let users = userNameListStmt
    .all()
    .filter((u) => !(visibleIds instanceof Set) || visibleIds.has(String(u?.id || "")))
    .filter((u) => !isClientListBlockedRole(u.role))
    .filter((u) => !s || u.username.toLowerCase().includes(s))
    .slice(0, 20)
    .map((u) => ({ _id: u.id, username: u.username }));
  if (!users.length && mysqlPool) {
    const rows = await mysqlExec("SELECT id,username,role FROM users ORDER BY username ASC LIMIT 200");
    if (Array.isArray(rows)) {
      users = rows
        .filter((u) => !(visibleIds instanceof Set) || visibleIds.has(String(u?.id || "")))
        .filter((u) => !isClientListBlockedRole(u.role))
        .filter((u) => !s || String(u.username || "").toLowerCase().includes(s))
        .slice(0, 20)
        .map((u) => ({ _id: u.id, username: u.username }));
    }
  }
  userListSuggestionCache.set(suggestionCacheKey, users);
  res.json(env("", users));
});
const sendAdminUserlist = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  const search = String(req.query?.search || req.query?.username || "").trim().toLowerCase();
  let rows = queryUserRowsSqlite()
    .filter((row) => !(visibleIds instanceof Set) || visibleIds.has(String(row.id)))
    .filter((row) => !search || String(row.username || "").toLowerCase().includes(search))
    .map(buildUserListItem);
  return res.json(env("", buildPaginatedItems(rows, req.query?.page, req.query?.limit || 50)));
};
app.get("/api/admin/userlist", sendAdminUserlist);
app.get("/api/admin/userlist.html", sendAdminUserlist);
app.get("/api/get-user-detail", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const user = getUserByUsername(String(req.query?.username || ""));
  if (!user) return res.json(env("", null));
  if (!canActorAccessTargetUser(authUser, authRole, user)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  const profileRow = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(user.id);
  const profile = profileRow ? safeParse(profileRow.data_json, {}) : {};
  const { password, ...safeUser } = user;
  return res.json(
    env("", {
      ...safeUser,
      _id: user.id,
      parentId: user.parent_id,
      sessionId: user.session_id || Date.now(),
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      profile,
    })
  );
});
app.get("/api/get-parent-user-detail", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const u = getUserByUsername(String(req.query?.username || ""));
  if (!u) return res.json(env("", []));
  if (!canActorAccessTargetUser(authUser, authRole, u)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }

  const wallet = ensureWallet(u.id);
  const parent = u.parent_id ? getUserById(String(u.parent_id)) : null;
  const parentWallet = parent ? ensureWallet(parent.id) : ensureWallet(authUser.id);
  const profileRow = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(u.id);
  const row = {
    ...u,
    wallet_balance: toNum(wallet.balance, 0),
    wallet_exposer: toNum(wallet.exposer, 0),
    wallet_casino_exposer: toNum(wallet.casino_exposer, 0),
    profile_json: profileRow?.data_json || "{}",
  };
  res.json(env("", [{
    ...buildUserListItem(row),
    parent: {
      _id: parent?.id || authUser.id,
      username: parent?.username || authUser.username,
    },
    parentBalance: {
      balance: toNum(parentWallet.balance, 0),
      exposer: toNum(parentWallet.exposer, 0),
      casinoexposer: toNum(parentWallet.casino_exposer, 0),
    },
  }]));
});
// User Book (all figures are coins, from the logged-in account's point of view):
//  uplevelcr    my credit reference (set by my parent)
//  downlineob   coins held by everyone below me
//  downcr       credit references I gave my direct children
//  totalmasterb my balance + coins below me
//  upperlvell   totalmasterb - my credit reference (position vs my upline)
//  downpl       realised P/L of everyone below me
//  available    my balance - my exposure
//  mypl         my realised P/L (my share of downline bets, commission, own bets)
app.get("/api/get-user-book", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") return res.status(403).json(env("Admin access required", {}, true, 403));
  const rows = queryUserRowsSqlite();
  const pnl = realizedPnlMap();
  const below = isOwnerPanelRole(authRole)
    ? new Set(rows.map((r) => String(r.id)).filter((uid) => uid !== String(authUser.id)))
    : getDescendantUserIdSet(authUser.id);
  const ownRow = rows.find((r) => String(r.id) === String(authUser.id));
  const own = ownRow ? buildUserListItem({ ...ownRow, profit_loss: toNum(pnl.get(String(authUser.id)), 0) }) : null;
  const round2 = (n) => Math.round(n * 100) / 100;
  let downlineob = 0;
  let downcr = 0;
  let downpl = 0;
  for (const row of rows) {
    const uid = String(row.id);
    if (!below.has(uid)) continue;
    downlineob += toNum(row.wallet_balance, 0);
    downpl += toNum(pnl.get(uid), 0);
    if (String(row.parent_id || "") === String(authUser.id)) downcr += toNum(buildUserListItem({ ...row, profit_loss: 0 }).creditRefrences, 0);
  }
  const ownBalance = toNum(own?.balance?.balance, 0);
  const available = ownBalance - toNum(own?.balance?.exposer, 0) - toNum(own?.balance?.casinoexposer, 0);
  const uplevelcr = toNum(own?.creditRefrences, 0);
  const totalmasterb = ownBalance + downlineob;
  return res.json(env("", {
    uplevelcr: round2(uplevelcr),
    downlineob: round2(downlineob),
    downcr: round2(downcr),
    totalmasterb: round2(totalmasterb),
    upperlvell: round2(totalmasterb - uplevelcr),
    downpl: round2(downpl),
    available: round2(available),
    availableB: round2(available),
    avpl: round2(available),
    mypl: round2(toNum(pnl.get(String(authUser.id)), 0)),
  }));
});

// Account statement: every coin movement of one account, oldest first.
// openingBalance is the balance just before startDate, so
// openingBalance + running sum of amounts = balance after each line.
const STATEMENT_NARRATION = {
  deposit: "Deposit",
  withdraw: "Withdraw",
  deposit_request: "Deposit request approved",
  withdraw_request: "Withdraw request approved",
  opening_credit: "Opening coins",
  token_redeem: "Deposit token",
  bet_win: "Bet won",
  bet_loss: "Bet lost",
  bet_rollback: "Result rolled back",
};
const handleAccountStatement = (req, res) => {
  const src = { ...(req.query || {}), ...(req.body || {}) };
  const ctx = resolveReportSubject(req, res, src);
  if (!ctx) return;
  const { subject } = ctx;
  const uid = String(subject.id);
  const fromIso = parseReportDate(src.startDate) || new Date(Date.now() - 7 * 864e5).toISOString();
  const toIso = parseReportDate(src.endDate, true) || new Date().toISOString();
  const reportType = String(src.reportType || src.type || "ALL").toLowerCase();
  const nameOf = new Map(db.prepare("SELECT id,username FROM users").all().map((u) => [String(u.id), u.username]));
  const ledgerRows = db
    .prepare(
      `SELECT l.*, COALESCE(b.id, ob.id) AS bet_id, COALESCE(b.match_name, ob.match_name) AS match_name, COALESCE(b.market_name, ob.market_name) AS market_name
       FROM coin_ledger l
       LEFT JOIN bets b ON l.kind IN ('bet_win','bet_loss') AND b.id=l.ref_id
       LEFT JOIN coin_ledger o ON l.kind='bet_rollback' AND o.id=l.ref_id
       LEFT JOIN bets ob ON ob.id=o.ref_id
       WHERE (l.from_user_id=@u OR l.to_user_id=@u) AND l.created_at>=@from
       ORDER BY l.created_at ASC, l.rowid ASC`
    )
    .all({ u: uid, from: fromIso });
  // One line per bet result / transfer. A bet split between Master and parent
  // writes consecutive ledger entries (possibly a millisecond apart); they are
  // merged. A later rollback or re-settlement of the same bet is a new line.
  const grouped = new Map();
  let lastGameKey = null;
  let groupSeq = 0;
  for (const row of ledgerRows) {
    const signed = String(row.to_user_id) === uid ? toNum(row.amount, 0) : -toNum(row.amount, 0);
    const isGame = REPORT_BET_KINDS.includes(row.kind);
    const gameKey = isGame ? `${row.kind}|${row.bet_id || row.id}` : null;
    if (!isGame || gameKey !== lastGameKey) groupSeq += 1;
    lastGameKey = gameKey;
    const key = isGame ? `${gameKey}|${groupSeq}` : row.id;
    const other = String(row.to_user_id) === uid ? row.from_user_id : row.to_user_id;
    const cur = grouped.get(key) || {
      _id: row.id,
      createdAt: row.created_at,
      amount: 0,
      type: isGame ? "game" : "chip",
      narration: isGame
        ? `${STATEMENT_NARRATION[row.kind]} / ${row.match_name || ""} / ${row.market_name || ""}`.replace(/( \/ )+$/, "")
        : `${STATEMENT_NARRATION[row.kind] || row.kind}${row.remark ? " / " + row.remark : ""}`,
      txnBy: nameOf.get(String(row.actor_id)) || nameOf.get(String(other)) || "",
      allBets: row.bet_id ? [{ betId: row.bet_id }] : [],
    };
    cur.amount = Math.round((cur.amount + signed) * 100) / 100;
    grouped.set(key, cur);
  }
  const casinoRows = db.prepare(`SELECT * FROM (${CASINO_SIGNED_SQL}) WHERE uid=? AND ts>=?`).all(uid, fromIso);
  for (const row of casinoRows) {
    if (!toNum(row.v, 0)) continue;
    grouped.set("c" + row.id, {
      _id: row.id,
      createdAt: row.ts,
      amount: toNum(row.v, 0),
      type: "game",
      narration: `Casino / ${row.provider_name || row.vendor_code || ""} / ${row.game_code || ""} / ${row.action}`,
      txnBy: "casino",
      allBets: [],
    });
  }
  const all = [...grouped.values()].sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  const sinceStart = all.reduce((acc, item) => acc + item.amount, 0);
  const currentBalance = toNum(ensureWallet(uid).balance, 0);
  const openingBalance = Math.round((currentBalance - sinceStart) * 100) / 100;
  const items = all.filter((item) => item.createdAt <= toIso && (reportType === "all" || item.type === reportType)).slice(0, 5000);
  return res.json(env("", { items, openingBalance, totalDocs: items.length, userId: uid, username: subject.username }));
};
app.post("/api/account-statement-list", handleAccountStatement);
app.get("/api/account-statement-list", handleAccountStatement);

// Profit & loss per event/market (sports) and per game (casino) for one account.
const handleProfitLoss = (req, res) => {
  const src = { ...(req.query || {}), ...(req.body || {}) };
  const ctx = resolveReportSubject(req, res, src);
  if (!ctx) return;
  const uid = String(ctx.subject.id);
  const fromIso = parseReportDate(src.startDate) || new Date(Date.now() - 30 * 864e5).toISOString();
  const toIso = parseReportDate(src.endDate, true) || new Date().toISOString();
  const rows = db
    .prepare(
      `SELECT l.amount, l.to_user_id, COALESCE(b.match_id, ob.match_id) AS match_id, COALESCE(b.match_name, ob.match_name) AS match_name,
              COALESCE(b.market_name, ob.market_name) AS market_name, COALESCE(b.market_id, ob.market_id) AS market_id
       FROM coin_ledger l
       LEFT JOIN bets b ON l.kind IN ('bet_win','bet_loss') AND b.id=l.ref_id
       LEFT JOIN coin_ledger o ON l.kind='bet_rollback' AND o.id=l.ref_id
       LEFT JOIN bets ob ON ob.id=o.ref_id
       WHERE l.kind IN (${sqlList(REPORT_BET_KINDS)}) AND (l.from_user_id=@u OR l.to_user_id=@u) AND l.created_at>=@from AND l.created_at<=@to`
    )
    .all({ u: uid, from: fromIso, to: toIso });
  const groups = new Map();
  for (const row of rows) {
    const key = `${row.match_id}|${row.market_id}`;
    const signed = String(row.to_user_id) === uid ? toNum(row.amount, 0) : -toNum(row.amount, 0);
    const g = groups.get(key) || {
      _id: key,
      sportId: toNum(sportOfMatchStmt.get(row.match_id)?.sport_id, 4),
      narration: `${row.match_name || "Match " + row.match_id} / ${row.market_name || ""}`,
      matchId: row.match_id,
      marketId: row.market_id,
      total: 0,
    };
    g.total = Math.round((g.total + signed) * 100) / 100;
    groups.set(key, g);
  }
  for (const row of db.prepare(`SELECT * FROM (${CASINO_SIGNED_SQL}) WHERE uid=? AND ts>=? AND ts<=?`).all(uid, fromIso, toIso)) {
    const key = `casino|${row.provider_name || row.vendor_code}|${row.game_code}`;
    const g = groups.get(key) || { _id: key, sportId: 5000, narration: `${row.provider_name || row.vendor_code || "Casino"} / ${row.game_code || ""}`, total: 0 };
    g.total = Math.round((g.total + toNum(row.v, 0)) * 100) / 100;
    groups.set(key, g);
  }
  const items = [...groups.values()].filter((g) => g.total !== 0);
  const total = Math.round(items.reduce((a, g) => a + g.total, 0) * 100) / 100;
  return res.json(env("", { items, total, totalDocs: items.length, page: 1, totalPages: 1 }));
};
app.post("/api/profit-loss", handleProfitLoss);
app.get("/api/profit-loss", handleProfitLoss);

app.get("/api/get-sport-list", (req, res) => {
  const filter = String(req.query?.filter || "").toLowerCase();
  let sports = db
    .prepare("SELECT sport_id,name,is_active,updated_at FROM sports WHERE is_active=1 ORDER BY sport_id")
    .all()
    .map((r) => ({ _id: `sport_${r.sport_id}`, sportId: r.sport_id, __v: 0, createdAt: r.updated_at, isActive: r.is_active === 1, name: r.name, updatedAt: r.updated_at }));
  const snapshotSports = loadSnapshot("get-sport-list")?.data;
  if (Array.isArray(snapshotSports) && snapshotSports.length) {
    const dbBySportId = new Map(
      sports.map((sport) => [toNum(sport?.sportId, 0), sport]).filter(([sid]) => sid > 0)
    );
    const ordered = [];
    for (const snap of snapshotSports) {
      const sid = toNum(snap?.sportId, 0);
      if (!sid) continue;
      const dbSport = dbBySportId.get(sid);
      if (dbSport) {
        ordered.push({
          ...dbSport,
          name: snap?.name || dbSport.name,
          isActive: snap?.isActive !== undefined ? !!snap.isActive : dbSport.isActive,
        });
        dbBySportId.delete(sid);
      } else {
        ordered.push(snap);
      }
    }
    const rest = [...dbBySportId.values()].sort((a, b) => toNum(a?.sportId, 0) - toNum(b?.sportId, 0));
    sports = [...ordered, ...rest];
  }
  if (filter === "topbar") sports = sports.slice(0, 10);
  res.json(env("", sports));
});

app.get("/api/get-match-list", (req, res) => {
  const sid = req.query?.sportId ? toNum(req.query.sportId, 0) : 0;
  const lim = req.query?.limit ? toNum(req.query.limit, 0) : 0;
  let sql = "SELECT * FROM matches";
  const p = [];
  if (sid > 0) {
    sql += " WHERE sport_id=?";
    p.push(sid);
  }
  sql += " ORDER BY datetime(match_datetime) ASC";
  if (lim > 0) {
    sql += " LIMIT ?";
    p.push(lim);
  }
  let rows = db.prepare(sql).all(...p).map(mapMatch);
  const snapshotMatches = getSnapshotMatches(sid, lim);
  if (snapshotMatches.length > rows.length) rows = snapshotMatches;
  res.json(env("Matches fetched successfully", rows));
});

app.post("/api/get-match-list-suggestion", (req, res) => {
  const s = String(req.body?.search || "").toLowerCase();
  const rows = db
    .prepare("SELECT * FROM matches ORDER BY datetime(match_datetime)")
    .all()
    .map(mapMatch)
    .filter((m) => !s || String(m.name || "").toLowerCase().includes(s))
    .slice(0, 20);
  res.json(env("", rows));
});

app.get("/api/get-match-by-id", (req, res, next) => {
  const matchId = toNum(req.query?.matchId, 0);
  const r = db.prepare("SELECT * FROM matches WHERE match_id=?").get(matchId);
  if (!r) {
    const snapshotMatch = getSnapshotMatchById(matchId);
    if (snapshotMatch) return res.json(env("", { match: snapshotMatch, stake: getSnapshotStakeByMatchId(matchId) }));
    return trySnapshot(req, res, next);
  }
  res.json(env("", { match: mapMatch(r), stake: STAKE_DETAIL }));
});

app.get("/api/get-market-list", (req, res) => {
  const matchId = toNum(req.query?.matchId, 0);
  const r = db.prepare("SELECT * FROM matches WHERE match_id=?").get(matchId);
  let m = r ? mapMatch(r) : getSnapshotMatchById(matchId);
  if (!m) return res.json(env("", { markets: [], stake: null }));
  const mid = String(m.mid || `${m.matchId}0001`);
  const markets = [{ marketId: mid, mid, matchId: m.matchId, marketName: m.mname || "MATCH_ODDS", mname: m.mname || "MATCH_ODDS", gtype: m.gtype || "match", status: m.status || "ACTIVE", section: Array.isArray(m.section) ? m.section : [] }];
  res.json(env("", { markets, stake: r ? STAKE_DETAIL : getSnapshotStakeByMatchId(matchId) }));
});

app.get("/api/get-fancy-list", (_req, res) => res.json({ success: true, msg: "Success", status: 200, data: [], lastUpdatedaAt: nowIso() }));
app.get("/api/fancy-data", (_req, res) => res.json({ message: "Data fetched successfully", error: false, code: 200, data: [] }));
app.get("/api/match-details", (req, res) => res.json({ success: true, data: { gmid: String(req.query?.gmid || ""), sid: toNum(req.query?.sid, 0), oldgmid: String(req.query?.gmid || ""), gtv: String(req.query?.gmid || "") } }));
app.get("/api/score", (_req, res) => res.json({ success: true, data: { score_url: null } }));
app.get("/api/scorecard-data", (req, res) => res.json({ success: true, data: { type: "none", scoreUrl: null, streamingUrl: `https://cloud.turnkeyxgaming.com:9086/sports/diamondoriginaltv?gmid=${String(req.query?.gmid || "")}&sid=${toNum(req.query?.sid, 0)}&token=local`, oldgmid: null, gmid: String(req.query?.gmid || ""), sportId: toNum(req.query?.sid, 0), gtv: null, source: "local", matchData: null } }));
app.get("/api/home/:sportId", (req, res) => {
  const sid = toNum(req.params.sportId, 0);
  const isHomeView = sid === 888 || sid === 88;

  if (isHomeView) {
    const snapshotAll = getSnapshotMatches(0, 200);
    if (snapshotAll.length) {
      const data = snapshotAll.map((m) => mapToHomeMatch(m, toNum(m?.sportId || m?.etid, sid)));
      return res.json({ message: `Live matches for sport ${sid}`, error: false, code: 200, data, changePassAndTxn: false });
    }

    const dbAll = db
      .prepare("SELECT * FROM matches ORDER BY datetime(match_datetime) LIMIT 300")
      .all()
      .map(mapMatch)
      .map((m) => mapToHomeMatch(m, toNum(m?.sportId || m?.etid, sid)));
    return res.json({ message: `Live matches for sport ${sid}`, error: false, code: 200, data: dbAll, changePassAndTxn: false });
  }

  const homeSnapshot = loadSnapshot(`home/${sid}`)?.data;
  if (Array.isArray(homeSnapshot) && homeSnapshot.length) {
    const data = homeSnapshot.map((m) => mapToHomeMatch(m, sid));
    return res.json({ message: `Live matches for sport ${sid}`, error: false, code: 200, data, changePassAndTxn: false });
  }

  const snapshotFallback = getSnapshotMatches(sid, 100);
  if (snapshotFallback.length) {
    const data = snapshotFallback.map((m) => mapToHomeMatch(m, sid));
    return res.json({ message: `Live matches for sport ${sid}`, error: false, code: 200, data, changePassAndTxn: false });
  }

  const dbRows = db.prepare("SELECT * FROM matches WHERE sport_id=? ORDER BY datetime(match_datetime)").all(sid).map(mapMatch);
  const data = dbRows.map((m) => mapToHomeMatch(m, sid));
  return res.json({ message: `Live matches for sport ${sid}`, error: false, code: 200, data, changePassAndTxn: false });
});
app.get("/api/live-sports", (_req, res) => {
  const data = db
    .prepare("SELECT s.sport_id,s.name,COUNT(m.match_id) c FROM sports s LEFT JOIN matches m ON m.sport_id=s.sport_id WHERE s.is_active=1 GROUP BY s.sport_id,s.name ORDER BY s.sport_id")
    .all()
    .map((r) => ({ sportId: r.sport_id, name: r.name, matchCount: toNum(r.c, 0) }));
  res.json(env("", data));
});
app.get("/api/get-series", (_req, res) => res.json(env("", [])));
app.get("/api/get-matches", (_req, res) => res.json(env("", [])));

const decryptPayload = (payload) => {
  const encrypted = String(payload || "").trim();
  if (!encrypted) return null;
  for (const key of ENCRYPTION_KEY_CANDIDATES) {
    try {
      const dec = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
      const parsed = safeParse(dec, null);
      if (parsed && typeof parsed === "object") {
        if (parsed?.data && typeof parsed.data === "object") return parsed.data;
        return parsed;
      }
    } catch {}
  }
  return null;
};
const verifySignature = (payload, userId, signature) => {
  if (!payload || !userId || !signature) return false;
  const now = Math.floor(Date.now() / 1000);
  for (let i = 0; i <= 10; i += 1) {
    for (const key of SIGNING_KEY_CANDIDATES) {
      const sig = CryptoJS.HmacSHA256(`${payload}|${userId}|${now - i}`, key).toString();
      if (sig === signature) return true;
    }
  }
  return false;
};

const normalizeSelectionId = (value) => {
  const numeric = toNum(value, 0);
  if (numeric) return numeric;
  const text = String(value || "").trim();
  return text || null;
};

// ---- Server-side bet pricing -------------------------------------------
// A bet is accepted only on an OPEN market with an ACTIVE selection whose
// price was refreshed by a live odds feed within BET_ODDS_MAX_AGE_SECONDS.
// Back bets need requested odds <= current back price; lay bets need
// requested odds >= current lay price (the player can only take a worse price).
const BET_ODDS_MAX_AGE_SECONDS = Math.max(0, envNum(process.env.BET_ODDS_MAX_AGE_SECONDS, 30));
const BET_ALLOW_UNFED_ODDS = envBool(process.env.BET_ALLOW_UNFED_ODDS);
const betMatchRowStmt = db.prepare("SELECT match_id,name,status,section_json,external_json,odds_updated_at FROM matches WHERE match_id=?");
const declaredMarketStmt = db.prepare("SELECT 1 FROM market_results WHERE match_id=? AND market_id=? AND status='declared' LIMIT 1");
const resolveServerBetQuote = ({ matchId, marketId, selectionId, isBack, requestedOdds }) => {
  const row = betMatchRowStmt.get(matchId);
  if (!row) return { ok: false, status: 404, message: "This market is not available for betting" };
  const ext = safeParse(row.external_json, {}) || {};
  if (!/^(open|active)$/i.test(String(row.status || "").trim())) {
    return { ok: false, message: "Market is " + String(row.status || "closed").toLowerCase() };
  }
  const expectedMarketId = String(ext.mid || `${row.match_id}0001`);
  if (String(marketId) !== expectedMarketId) return { ok: false, message: "Unknown market for this match" };
  if (declaredMarketStmt.get(String(row.match_id), String(marketId))) return { ok: false, message: "Result already declared for this market" };
  if (!BET_ALLOW_UNFED_ODDS) {
    const fedAt = Date.parse(String(row.odds_updated_at || ""));
    if (!Number.isFinite(fedAt)) return { ok: false, status: 503, message: "Live odds are not available for this market" };
    if (BET_ODDS_MAX_AGE_SECONDS && Date.now() - fedAt > BET_ODDS_MAX_AGE_SECONDS * 1000) {
      return { ok: false, status: 503, message: "Odds have changed, please try again" };
    }
  }
  const section = Array.isArray(ext.section) ? ext.section : safeParse(row.section_json, []) || [];
  const runner = section.find((item) => String(item?.sid) === String(selectionId));
  if (!runner) return { ok: false, message: "Unknown selection for this market" };
  if (/suspend|close|ball|inactive/i.test(String(runner.gstatus || ""))) {
    return { ok: false, message: "Selection is suspended" };
  }
  const side = isBack ? "back" : "lay";
  const prices = (Array.isArray(runner.odds) ? runner.odds : [])
    .filter((o) => String(o?.otype || "").toLowerCase() === side && toNum(o?.odds, 0) > 1)
    .map((o) => toNum(o.odds, 0));
  if (!prices.length) return { ok: false, message: "No " + side + " price available" };
  const marketOdds = isBack ? Math.max(...prices) : Math.min(...prices);
  const req = toNum(requestedOdds, 0);
  if (!(req > 1)) return { ok: false, message: "Invalid odds" };
  if (isBack ? req > marketOdds + 1e-9 : req < marketOdds - 1e-9) {
    return { ok: false, status: 409, message: `Odds changed to ${marketOdds}, please try again` };
  }
  return {
    ok: true,
    marketOdds,
    selectionName: String(runner.nat || "").trim(),
    marketName: String(ext.mname || "MATCH_ODDS"),
    matchName: String(row.name || ""),
  };
};
const handlePlaceBet = (req, res) => {
  if (PLATFORM_MODE !== "b2b" || String(req.body?.platform || req.body?.platformType || "b2b").trim().toLowerCase() === "b2c") {
    return res.status(403).json({ error: true, message: "B2B platform only" });
  }
  const u = reqAuthUser(req);
  if (!u) return res.status(401).json({ error: true, message: "Please log in to place a bet" });
  if (normalizePanelRole(reqAuthRole(req, u.role), "user") !== "user") {
    return res.status(403).json({ error: true, message: "Only player accounts can place bets" });
  }
  const userStatusFlags = readUserRuntimeStatusFlags(u.id);
  if (!userStatusFlags.isActive) {
    return res.status(403).json({ error: true, message: "User account is inactive" });
  }
  if (userStatusFlags.betLock) {
    return res.status(423).json({ error: true, message: "Your betting access is locked" });
  }

  const payload = req.body?.payload ? decryptPayload(req.body.payload) : null;
  const b = payload || (req.body?.data && typeof req.body.data === "object" ? req.body.data : req.body || {});
  const stack = toNum(b.stack, 0);
  const odds = toNum(b.odds, 0);
  const matchId = toNum(b.matchId, 0);
  const marketId = String(b.marketId || "");
  const selectionId = normalizeSelectionId(
    b.selectionId ?? b.SelectionId ?? b.selectionID ?? b.sid ?? b.selection
  );
  if (!stack || !odds || !matchId || !marketId || !selectionId) {
    return res.status(400).json({ error: true, message: "Invalid bet payload" });
  }
  const minBet = toNum(u.min_bet, 0);
  const maxBet = toNum(u.max_bet, 0);
  const creditLimit = toNum(u.credit_limit, 0);
  try {
    validateBetAmount({ amount: stack, minBet, maxBet });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
  const betLockType = normalizeBetLockType(
    b.betLockType || b.lockType || b.marketType || b.gtype || b.bet_on || b.marketName
  );
  const matchLockStore = readMatchBetLockStore(matchId);
  const lockState = resolveMatchUserBetLockState(matchLockStore, u.id);
  if (lockState[betLockType]) {
    return res.status(423).json({
      error: true,
      message: "Betting is locked for this market",
      data: {
        matchId,
        lockType: betLockType,
        locks: lockState,
      },
    });
  }

  if (!(stack > 0) || Math.round(stack * 100) / 100 !== stack) {
    return res.status(400).json({ error: true, message: "Stake must be a positive amount with up to 2 decimals" });
  }
  const isBack = typeof b.isBack === "boolean" ? b.isBack : String(b.isBack || "true").toLowerCase() === "true";
  if (/fancy|session/i.test(`${b.bet_on || ""} ${b.gtype || ""} ${b.oddsType || ""}`)) {
    return res.status(400).json({ error: true, message: "Fancy / session markets are not available" });
  }
  // The price is decided by the server's market data, never by the client.
  const quote = resolveServerBetQuote({ matchId, marketId, selectionId, isBack, requestedOdds: odds });
  if (!quote.ok) return res.status(quote.status || 400).json({ error: true, message: quote.message });
  const pnl = isBack ? (odds - 1) * stack : -1 * (odds - 1) * stack;
  // Coins at risk: a back bet risks the stake, a lay bet risks the liability.
  const exposure = Math.round((isBack ? stack : (odds - 1) * stack) * 100) / 100;
  const w = ensureWallet(u.id);
  try {
    validateBetAmount({ amount: exposure, currentExposure: toNum(w.exposer, 0), creditLimit });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }

  const bet = {
    id: id("bet_"),
    user_id: u.id,
    match_id: matchId,
    market_id: marketId,
    selection_id: selectionId,
    selection_name: quote.selectionName || String(b.selectionName || `Selection ${selectionId}`),
    odds,
    volume: toNum(b.volume, 0),
    stack,
    pnl,
    exposure,
    market_name: quote.marketName || String(b.marketName || "MATCH_ODDS"),
    is_back: isBack ? 1 : 0,
    event_id: toNum(b.eventId, 0) || null,
    type: String(b.type || "match"),
    current_market_odds: quote.marketOdds,
    ip_address: req.ip,
    match_name: quote.matchName || String(b.matchName || `Match ${matchId}`),
    bet_on: String(b.bet_on || "MATCH_ODDS"),
    gtype: String(b.gtype || "match"),
    odds_type: String(b.oddsType || "ODDS"),
    status: "unsettled",
    created_at: nowIso(),
  };

  const now = nowIso();
  const placeBetTx = db.transaction(() => {
    const reserved = db
      .prepare("UPDATE wallets SET exposer=round(COALESCE(exposer,0)+?,2),updated_at=? WHERE user_id=? AND round(balance-COALESCE(exposer,0),2) >= ?")
      .run(exposure, now, u.id, exposure);
    if (!reserved.changes) return false;
    db.prepare(
    "INSERT INTO bets (id,user_id,match_id,market_id,selection_id,selection_name,odds,volume,stack,pnl,exposure,market_name,is_back,event_id,type,current_market_odds,ip_address,match_name,bet_on,gtype,odds_type,status,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  ).run(
    bet.id,
    bet.user_id,
    bet.match_id,
    bet.market_id,
    bet.selection_id,
    bet.selection_name,
    bet.odds,
    bet.volume,
    bet.stack,
    bet.pnl,
    bet.exposure,
    bet.market_name,
    bet.is_back,
    bet.event_id,
    bet.type,
    bet.current_market_odds,
    bet.ip_address,
    bet.match_name,
    bet.bet_on,
    bet.gtype,
    bet.odds_type,
    bet.status,
    bet.created_at
  );
    return true;
  });
  if (!placeBetTx.immediate()) {
    return res.status(400).json({ error: true, message: "Insufficient available balance" });
  }
  const walletAfter = ensureWallet(u.id);
  const nextExposer = toNum(walletAfter.exposer, 0);
  syncBetToMysql({
    id: bet.id,
    userId: bet.user_id,
    matchId: bet.match_id,
    marketId: bet.market_id,
    selectionId: bet.selection_id,
    selectionName: bet.selection_name,
    odds: bet.odds,
    volume: bet.volume,
    stack: bet.stack,
    pnl: bet.pnl,
    exposure: bet.exposure,
    marketName: bet.market_name,
    isBack: bet.is_back,
    eventId: bet.event_id,
    type: bet.type,
    currentMarketOdds: bet.current_market_odds,
    ipAddress: bet.ip_address,
    matchName: bet.match_name,
    betOn: bet.bet_on,
    gtype: bet.gtype,
    oddsType: bet.odds_type,
    status: bet.status,
    createdAt: bet.created_at,
  }).catch(() => {});
  syncWalletToMysql({
    userId: u.id,
    balance: toNum(walletAfter.balance, 0),
    exposer: nextExposer,
    casinoExposer: toNum(walletAfter.casino_exposer, 0),
    updatedAt: now,
  }).catch(() => {});

  const betOut = {
    id: bet.id,
    _id: bet.id,
    matchId: bet.match_id,
    marketId: bet.market_id,
    selectionId: bet.selection_id,
    selectionName: bet.selection_name,
    odds: bet.odds,
    stack: bet.stack,
    isBack,
    gtype: bet.gtype,
    bet_on: bet.bet_on,
    marketName: bet.market_name,
    createdAt: bet.created_at,
  };

  return res.json({
    error: false,
    message: "Bet placed successfully",
    data: {
      bet: betOut,
      exposer: nextExposer,
      profitlist: { [`${bet.market_id}_${bet.selection_id}`]: Number(pnl.toFixed(2)) },
    },
    changePassAndTxn: false,
  });
};

app.post("/api/placebet", handlePlaceBet);
app.post("/placebet", handlePlaceBet);

// Results decide who pays whom, so only Super Admin may settle or roll back.
const requireResultAuthority = (req, res) => {
  const ctx = getOwnerAuthContext(req, res);
  return ctx || null;
};
const afterSettlementSync = (results) => {
  const ids = new Set();
  const userRows = db.prepare("SELECT id,parent_id FROM users WHERE id=?");
  const partnerRows = db.prepare("SELECT partner_id FROM user_partnerships WHERE user_id=?");
  for (const r of results || []) {
    ids.add(String(r.userId));
    const u = userRows.get(String(r.userId));
    if (u?.parent_id) ids.add(String(u.parent_id));
    for (const p of partnerRows.all(String(r.userId))) ids.add(String(p.partner_id));
  }
  syncWalletsAfterCoinMove([...ids]);
};
app.post("/api/settle-bet", (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  try {
    const result = settlementEngine.settleSingleBet({ betId: req.body?.betId || req.body?.id, result: req.body?.result, actorId: ctx.authUser.id });
    afterSettlementSync([result]);
    return res.json(env("Bet settled successfully", result));
  } catch (e) {
    return res.status(400).json(env(e.message || "Unable to settle bet", {}, true, 400));
  }
});
const handleMarketResult = (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  const src = { ...(req.query || {}), ...(req.body || {}) };
  try {
    const out = settlementEngine.declareMarketResult({
      matchId: src.matchId,
      marketId: src.marketId,
      winnerSelectionId: src.selectionId ?? src.result ?? src.winnerSelectionId,
      actorId: ctx.authUser.id,
    });
    afterSettlementSync(out.results);
    return res.json(env(`Result declared. ${out.settled} bet(s) settled.`, { ...out, results: undefined }));
  } catch (e) {
    return res.status(400).json(env(e.message || "Unable to declare result", {}, true, 400));
  }
};
const handleMarketRollback = (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  const src = { ...(req.query || {}), ...(req.body || {}) };
  try {
    const out = settlementEngine.rollbackMarketResult({ matchId: src.matchId, marketId: src.marketId, actorId: ctx.authUser.id });
    afterSettlementSync(out.results);
    return res.json(env(`Result rolled back. ${out.reopened} bet(s) reopened.`, { ...out, results: undefined }));
  } catch (e) {
    return res.status(400).json(env(e.message || "Unable to roll back result", {}, true, 400));
  }
};
app.get("/api/result-market", handleMarketResult);
app.post("/api/result-market", handleMarketResult);
app.get("/api/rollback-result-market-wise", handleMarketRollback);
app.post("/api/rollback-result-market-wise", handleMarketRollback);
const fancyUnavailable = (_req, res) => res.status(400).json(env("Fancy / session markets are not available", {}, true, 400));
app.get("/api/result-fancy", fancyUnavailable);
app.get("/api/fancy-result-rollback", fancyUnavailable);

app.get("/api/bets", (req, res) => {
  const u = reqAuthUser(req);
  if (!u) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, u.role);
  const matchId = toNum(req.query?.matchId, 0);
  const uid = String(req.query?.targetUserId || u.id);
  const target = getUserById(uid);
  if (!target) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorAccessTargetUser(u, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  const rows = db
    .prepare("SELECT * FROM bets WHERE user_id=? AND (?=0 OR match_id=?) ORDER BY datetime(created_at) DESC")
    .all(uid, matchId, matchId);
  const bets = rows.map((r) => ({
    _id: r.id,
    id: r.id,
    matchId: r.match_id,
    marketId: r.market_id,
    selectionId: r.selection_id,
    selectionName: r.selection_name,
    odds: r.odds,
    stack: r.stack,
    pnl: r.pnl,
    exposure: r.exposure,
    marketName: r.market_name,
    isBack: r.is_back === 1,
    gtype: r.gtype,
    bet_on: r.bet_on,
    status: r.status,
    createdAt: r.created_at,
  }));
  const odds_profit = {};
  for (const r of rows) odds_profit[`${r.market_id}_${r.selection_id}`] = toNum(odds_profit[`${r.market_id}_${r.selection_id}`], 0) + toNum(r.pnl, 0);
  res.json(env("", { bets, odds_profit }));
});

app.post("/api/alluserbetList", (req, res) => {
  const u = reqAuthUser(req);
  if (!u) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const page = Math.max(toNum(req.query?.page, 1), 1);
  const limit = 20;
  const off = (page - 1) * limit;
  const totalDocs = db.prepare("SELECT COUNT(*) c FROM bets WHERE user_id=?").get(u.id).c;
  const docs = db.prepare("SELECT * FROM bets WHERE user_id=? ORDER BY datetime(created_at) DESC LIMIT ? OFFSET ?").all(u.id, limit, off);
  const totalPages = Math.max(Math.ceil(totalDocs / limit), 1);
  res.json(env("", { docs, totalDocs, limit, totalPages, page, pagingCounter: off + 1, hasPrevPage: page > 1, hasNextPage: page < totalPages, prevPage: page > 1 ? page - 1 : null, nextPage: page < totalPages ? page + 1 : null }));
});
const visibleOpenBets = (authUser, authRole, matchId = 0) => {
  const visible = getVisibleUserIdsForActor(authUser, authRole);
  return db
    .prepare(`SELECT b.*, m.name AS match_title, m.external_json, m.section_json
       FROM bets b LEFT JOIN matches m ON m.match_id=b.match_id
       WHERE lower(b.status) IN ('unsettled','pending') AND (?=0 OR b.match_id=?)`)
    .all(matchId, matchId)
    .filter((b) => !(visible instanceof Set) || visible.has(String(b.user_id)));
};
// Players' net position per runner on one match (panel shows the negative = house view).
app.get("/api/adminprofitlossList", (req, res) => {
  const ctx = requireAdminPanelAccess(req, res);
  if (!ctx) return;
  return res.json(env("", buildOpenBook(visibleOpenBets(ctx.authUser, ctx.authRole, toNum(req.query?.matchId, 0)))));
});
// Every match with open bets in my downline, its markets/runners and the book.
app.get("/api/get-market-analysis", (req, res) => {
  const ctx = requireAdminPanelAccess(req, res);
  if (!ctx) return;
  const byMatch = new Map();
  for (const bet of visibleOpenBets(ctx.authUser, ctx.authRole)) {
    const key = String(bet.match_id);
    if (!byMatch.has(key)) byMatch.set(key, []);
    byMatch.get(key).push(bet);
  }
  const data = [...byMatch.entries()].map(([matchId, bets]) => {
    const markets = new Map();
    for (const bet of bets) {
      if (!markets.has(bet.market_id)) {
        const ext = safeParse(bet.external_json, {}) || {};
        const section = Array.isArray(ext.section) ? ext.section : safeParse(bet.section_json, []) || [];
        const runners = section.filter((r) => r?.sid).map((r) => ({ selectionId: String(r.sid), runnerName: String(r.nat || r.sid).trim() }));
        markets.set(bet.market_id, { marketId: bet.market_id, marketName: bet.market_name || "MATCH_ODDS", runners });
      }
      const m = markets.get(bet.market_id);
      if (!m.runners.some((r) => r.selectionId === String(bet.selection_id))) {
        m.runners.push({ selectionId: String(bet.selection_id), runnerName: bet.selection_name || String(bet.selection_id) });
      }
    }
    return {
      matchId: toNum(matchId, 0),
      matchName: bets[0].match_title || bets[0].match_name || `Match ${matchId}`,
      betCount: bets.length,
      filterMarketByMatch: [...markets.values()],
      completemarket_list: [...markets.keys()],
      matchWiseMarket: buildOpenBook(bets),
    };
  });
  return res.json(env("", data));
});
app.post("/api/get-bet-list-by-ids", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);

  const ids = Array.isArray(req.body?.betIds) ? req.body.betIds : [];
  if (!ids.length) return res.json(env("", { docs: [] }));
  const q = ids.map(() => "?").join(",");
  let docs = db.prepare(`SELECT * FROM bets WHERE id IN (${q}) ORDER BY datetime(created_at) DESC`).all(...ids);
  if (visibleIds instanceof Set) {
    docs = docs.filter((row) => {
      const rowUserId = String(row?.user_id || "");
      return rowUserId === String(authUser.id) || visibleIds.has(rowUserId);
    });
  }
  return res.json(env("", { docs }));
});
// Matched bets cannot be cancelled by players. An admin may void an open bet
// in their downline; its locked exposure is released atomically.
app.delete("/api/delete-current-bet/:id", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  if (!isOwnerPanelRole(reqAuthRole(req, authUser.role))) {
    return res.status(403).json(env("Placed bets cannot be cancelled", {}, true, 403));
  }
  const row = db.prepare("SELECT id,user_id,exposure,status FROM bets WHERE id=?").get(String(req.params.id));
  if (!row) return res.status(404).json(env("Bet not found", {}, true, 404));
  if (!["unsettled", "pending"].includes(String(row.status || "").toLowerCase())) {
    return res.status(409).json(env("Only open bets can be voided", {}, true, 409));
  }
  if (!voidOpenBets([row], authUser.id)) return res.status(409).json(env("Bet was already settled", {}, true, 409));
  return res.json(env("Bet voided", { success: true }));
});
const requireAdminPanelAccess = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") {
    res.status(403).json(env("Admin access required", {}, true, 403));
    return null;
  }
  return { authUser, authRole };
};
const mergeMatchBetLockState = (baseState = { M: false, B: false, F: false }, nextRaw = {}) => ({
  M: nextRaw?.M !== undefined ? toBool(nextRaw.M) : !!baseState.M,
  B: nextRaw?.B !== undefined ? toBool(nextRaw.B) : !!baseState.B,
  F: nextRaw?.F !== undefined ? toBool(nextRaw.F) : !!baseState.F,
});
const updateSingleUserStatusFlags = (userId, { isActive, betLock }) => {
  const uid = String(userId || "").trim();
  if (!uid) return null;
  const row = db.prepare("SELECT data_json FROM user_profiles WHERE user_id=?").get(uid);
  const profile = row ? safeParse(row.data_json, {}) || {} : {};
  const currentStatus = profile?.status && typeof profile.status === "object" ? profile.status : {};
  const nextIsActive =
    isActive === undefined ? boolOrDefault(currentStatus.isActive ?? profile?.isLogin, true) : toBool(isActive);
  const nextBetLock =
    betLock === undefined ? boolOrDefault(currentStatus.betLock ?? profile?.betLock, false) : toBool(betLock);
  profile.status = {
    betLock: nextBetLock,
    isActive: nextIsActive,
    updatedAt: nowIso(),
  };
  profile.betLock = nextBetLock;
  profile.isLogin = nextIsActive;
  const now = nowIso();
  const dataJson = JSON.stringify(profile);
  db.prepare("INSERT OR REPLACE INTO user_profiles (user_id,data_json,created_at,updated_at) VALUES (?,?,?,?)").run(
    uid,
    dataJson,
    row ? now : now,
    now
  );
  syncUserProfileToMysql({ userId: uid, dataJson, createdAt: row ? now : now, updatedAt: now }).catch(() => {});
  return { userId: uid, isActive: nextIsActive, betLock: nextBetLock };
};
app.post("/api/bet-lock", (req, res) => {
  const auth = requireAdminPanelAccess(req, res);
  if (!auth) return;
  const matchId = toNum(req.body?.matchId ?? req.query?.matchId, 0);
  if (!matchId) return res.status(400).json(env("matchId is required", {}, true, 400));
  const lockType = normalizeBetLockType(req.body?.lockType || req.body?.type || req.body?.marketType || "M");
  const hasLockValue =
    req.body?.isLocked !== undefined || req.body?.locked !== undefined || req.body?.value !== undefined;
  const lockValue =
    req.body?.isLocked !== undefined
      ? toBool(req.body.isLocked)
      : req.body?.locked !== undefined
        ? toBool(req.body.locked)
        : req.body?.value !== undefined
          ? toBool(req.body.value)
          : true;
  const targetUserId = String(req.body?.userId || req.body?.uid || "").trim();
  const current = readMatchBetLockStore(matchId);
  const next = {
    ...current,
    default: { ...(current.default || { M: false, B: false, F: false }) },
    users: { ...(current.users || {}) },
  };

  if (targetUserId) {
    const target = getUserById(targetUserId);
    if (!target) return res.status(404).json(env("User not found", {}, true, 404));
    if (!canActorAccessTargetUser(auth.authUser, auth.authRole, target)) {
      return res.status(403).json(env("Access denied", {}, true, 403));
    }
    const prevState = next.users[targetUserId] || next.default;
    const merged = mergeMatchBetLockState(prevState, {
      [lockType]: hasLockValue ? lockValue : true,
    });
    next.users[targetUserId] = merged;
  } else {
    next.default = mergeMatchBetLockState(next.default, {
      [lockType]: hasLockValue ? lockValue : true,
    });
  }
  const saved = saveMatchBetLockStore(matchId, next);
  return res.json(
    env("Bet lock updated", {
      success: true,
      matchId,
      lockType,
      userId: targetUserId || null,
      lockValue: !!(hasLockValue ? lockValue : true),
      lockStore: saved,
    })
  );
});
app.post("/api/bet-lock-granular", (req, res) => {
  const auth = requireAdminPanelAccess(req, res);
  if (!auth) return;
  const matchId = toNum(req.body?.matchId ?? req.query?.matchId, 0);
  if (!matchId) return res.status(400).json(env("matchId is required", {}, true, 400));
  const current = readMatchBetLockStore(matchId);
  const next = {
    ...current,
    default: { ...(current.default || { M: false, B: false, F: false }) },
    users: { ...(current.users || {}) },
  };
  const defaultInput = req.body?.default && typeof req.body.default === "object" ? req.body.default : {};
  next.default = mergeMatchBetLockState(next.default, defaultInput);

  const usersInputRaw = req.body?.users ?? req.body?.userLocks;
  const usersEntries = Array.isArray(usersInputRaw)
    ? usersInputRaw
        .map((item) => [String(item?.userId || item?.uid || "").trim(), item])
        .filter(([uid]) => !!uid)
    : usersInputRaw && typeof usersInputRaw === "object"
      ? Object.entries(usersInputRaw).map(([uid, state]) => [String(uid || "").trim(), state])
      : [];
  for (const [uid, state] of usersEntries) {
    if (!uid) continue;
    const target = getUserById(uid);
    if (!target) continue;
    if (!canActorAccessTargetUser(auth.authUser, auth.authRole, target)) continue;
    next.users[uid] = mergeMatchBetLockState(next.users[uid] || next.default, state);
  }
  const saved = saveMatchBetLockStore(matchId, next);
  return res.json(env("Granular bet lock updated", { success: true, matchId, lockStore: saved }));
});
app.get("/api/match-bet-locks/:matchId", (req, res) => {
  const matchId = toNum(req.params.matchId, 0);
  if (!matchId) return res.status(400).json(env("matchId is required", {}, true, 400));
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const lockStore = readMatchBetLockStore(matchId);
  // Per-user locks are visible only for accounts the caller may see: a player
  // sees just their own entry, an admin their downline, Super Admin everyone.
  const allUsers = lockStore?.users && typeof lockStore.users === "object" ? lockStore.users : {};
  const isPlayer = normalizePanelRole(authRole, "user") === "user";
  const visibleIds = isPlayer ? new Set([String(authUser.id)]) : getVisibleUserIdsForActor(authUser, authRole);
  const users = {};
  for (const [uid, lock] of Object.entries(allUsers)) {
    if (!(visibleIds instanceof Set) || visibleIds.has(String(uid))) users[uid] = lock;
  }
  return res.json(env("", { matchId, ...lockStore, users }));
});
app.get("/api/get-child-user-list", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  const username = String(req.query?.username || "").trim().toLowerCase();
  const matchId = toNum(req.query?.matchId, 0);
  const rows = db
    .prepare(
      `SELECT DISTINCT u.id,u.username,u.role,u.parent_id,p.data_json AS profile_json
       FROM users u
       JOIN bets b ON b.user_id=u.id
       LEFT JOIN user_profiles p ON p.user_id=u.id
       WHERE (?=0 OR b.match_id=?) AND (?='' OR lower(u.username) LIKE ?)
       ORDER BY u.username`
    )
    .all(matchId, matchId, username, `%${username}%`)
    .filter((row) => !(visibleIds instanceof Set) || visibleIds.has(String(row.id)))
    .map((row) => {
      const profile = parseProfileJson(row.profile_json || "{}");
      const status = profile?.status && typeof profile.status === "object" ? profile.status : {};
      return {
        _id: row.id,
        id: row.id,
        username: row.username,
        role: row.role,
        parentId: row.parent_id || null,
        isActive: boolOrDefault(status.isActive ?? profile?.isLogin, true),
        betLock: boolOrDefault(status.betLock ?? profile?.betLock, false),
      };
    });
  return res.json(env("", buildPaginatedItems(rows, req.query?.page, req.query?.limit || 100)));
});
// Voiding removes an open bet and frees its locked coins. Only Super Admin may
// void, so no upline can cancel a player's winning bet before the result.
const voidOpenBets = (betRows, actorId) => {
  const now = nowIso();
  const owners = new Set();
  let voided = 0;
  db.transaction(() => {
    for (const row of betRows) {
      const removed = db.prepare("DELETE FROM bets WHERE id=? AND lower(status) IN ('unsettled','pending')").run(row.id);
      if (!removed.changes) continue;
      db.prepare("UPDATE wallets SET exposer=max(0,round(COALESCE(exposer,0)-?,2)),updated_at=? WHERE user_id=?").run(toNum(row.exposure, 0), now, row.user_id);
      owners.add(String(row.user_id));
      voided += 1;
    }
  }).immediate();
  for (const row of betRows) deleteBetFromMysql(row.id).catch(() => {});
  syncWalletsAfterCoinMove([...owners]);
  return voided;
};
app.post("/api/delete-bets", (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  const ids = Array.isArray(req.body?.ids) ? [...new Set(req.body.ids.map((value) => String(value || "").trim()).filter(Boolean))] : [];
  if (!ids.length) return res.status(400).json(env("ids is required", {}, true, 400));
  const rows = db.prepare(`SELECT id,user_id,exposure FROM bets WHERE id IN (${ids.map(() => "?").join(",")}) AND lower(status) IN ('unsettled','pending')`).all(...ids);
  const deleted = voidOpenBets(rows, ctx.authUser.id);
  return res.json(env(deleted === ids.length ? "Bets voided" : `${deleted} open bet(s) voided; settled bets cannot be deleted`, { success: true, deleted }));
});
app.post("/api/users-lock", (req, res) => {
  const auth = requireAdminPanelAccess(req, res);
  if (!auth) return;
  const values = [];
  const pushValue = (value) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      for (const item of value) pushValue(item);
      return;
    }
    const text = String(value || "").trim();
    if (!text) return;
    if (text.includes(",")) {
      for (const part of text.split(",")) pushValue(part);
      return;
    }
    values.push(text);
  };
  pushValue(req.body?.userId);
  pushValue(req.body?.uid);
  pushValue(req.body?.userIds);
  const userIds = [...new Set(values)];
  if (!userIds.length) {
    return res.status(400).json(env("userId/userIds is required", {}, true, 400));
  }
  const hasIsActive = req.body?.isActive !== undefined || req.body?.isUserActive !== undefined;
  const hasBetLock = req.body?.betLock !== undefined || req.body?.isUserBetActive !== undefined;
  if (!hasIsActive && !hasBetLock) {
    return res.status(400).json(env("isActive or betLock is required", {}, true, 400));
  }
  const isActive =
    req.body?.isActive !== undefined
      ? req.body.isActive
      : req.body?.isUserActive !== undefined
        ? req.body.isUserActive
        : undefined;
  const betLock =
    req.body?.betLock !== undefined
      ? req.body.betLock
      : req.body?.isUserBetActive !== undefined
        ? req.body.isUserBetActive
        : undefined;

  const updated = [];
  for (const userId of userIds) {
    const target = getUserById(userId);
    if (!target) continue;
    if (String(target.id) === String(auth.authUser.id) || !canActorAccessTargetUser(auth.authUser, auth.authRole, target)) continue;
    const out = updateSingleUserStatusFlags(userId, { isActive, betLock });
    if (out) updated.push(out);
  }
  return res.json(env("Users lock updated", { success: true, updated, total: updated.length }));
});
app.get("/api/undeclared-bets", (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  const rows = db
    .prepare(
      `SELECT b.match_id,b.market_id,b.market_name,b.match_name,b.bet_on,b.selection_id,b.selection_name,b.stack,b.created_at,
              m.name AS match_title, m.external_json, m.section_json, s.name AS sport_name
       FROM bets b
       LEFT JOIN matches m ON m.match_id=b.match_id
       LEFT JOIN sports s ON s.sport_id=m.sport_id
       WHERE lower(b.status) IN ('pending','unsettled')
       ORDER BY datetime(b.created_at) ASC`
    )
    .all();
  const markets = new Map();
  for (const row of rows) {
    const key = row.match_id + "|" + row.market_id;
    let m = markets.get(key);
    if (!m) {
      const ext = safeParse(row.external_json, {}) || {};
      const section = Array.isArray(ext.section) ? ext.section : safeParse(row.section_json, []) || [];
      const runners = new Map(section.filter((r) => r?.sid).map((r) => [String(r.sid), { selectionId: String(r.sid), runnerName: String(r.nat || r.sid).trim() }]));
      m = {
        _id: key,
        matchId: row.match_id,
        marketId: row.market_id,
        marketName: row.market_name || "MATCH_ODDS",
        matchName: row.match_title || row.match_name || `Match ${row.match_id}`,
        selectionId: String(row.selection_id),
        selectionName: "",
        bet_on: String(row.bet_on || "MATCH_ODDS").toUpperCase(),
        eventType: row.sport_name || "Other",
        betCount: 0,
        totalStake: 0,
        runners,
        isDeclared: false,
        createdAt: row.created_at,
      };
      markets.set(key, m);
    }
    m.betCount += 1;
    m.totalStake = Math.round((m.totalStake + toNum(row.stack, 0)) * 100) / 100;
    if (!m.runners.has(String(row.selection_id))) {
      m.runners.set(String(row.selection_id), { selectionId: String(row.selection_id), runnerName: row.selection_name || String(row.selection_id) });
    }
  }
  const data = [...markets.values()].map((m) => {
    const runners = [...m.runners.values()];
    return { ...m, runners, selectionName: runners.map((r) => r.runnerName).join(" v ") };
  });
  return res.json(env("", data));
});
app.delete("/api/bets-by-market", (req, res) => {
  const ctx = requireResultAuthority(req, res);
  if (!ctx) return;
  const marketId = String(req.query?.marketId || "");
  const matchId = toNum(req.query?.matchId, 0);
  if (!marketId || !matchId) return res.status(400).json(env("marketId and matchId are required", {}, true, 400));
  const rows = db.prepare("SELECT id,user_id,exposure FROM bets WHERE market_id=? AND match_id=? AND lower(status) IN ('unsettled','pending')").all(marketId, matchId);
  const deleted = voidOpenBets(rows, ctx.authUser.id);
  return res.json(env("Open bets voided", { success: true, deleted }));
});
app.get("/api/match-betting-users", (req, res) => {
  const ctx = requireAdminPanelAccess(req, res);
  if (!ctx) return;
  const visible = getVisibleUserIdsForActor(ctx.authUser, ctx.authRole);
  const matchId = toNum(req.query?.matchId, 0);
  const data = db
    .prepare("SELECT DISTINCT u.id,u.username FROM bets b JOIN users u ON u.id=b.user_id WHERE (?=0 OR b.match_id=?) ORDER BY u.username")
    .all(matchId, matchId)
    .filter((r) => !(visible instanceof Set) || visible.has(String(r.id)))
    .map((r) => ({ _id: r.id, username: r.username }));
  res.json(env("", data));
});

const buildDepositMetadataFromRequest = (input, uploadedPath = "") => {
  const src = asPlainObject(input, {});
  const bankDetail = parseBankDetailPayload(src.bankDetail);
  const accountTypeRaw =
    src.accountType ||
    bankDetail.accountType ||
    (bankDetail.upiId ? "upi" : bankDetail.accountNumber || bankDetail.bankAccountNumber || bankDetail.ifscCode ? "bank" : "");
  const imagePath = String(uploadedPath || src.imageUrl || src.imagePath || src.uploadedImage || "").trim();
  return {
    accountType: String(accountTypeRaw || "").trim().toLowerCase(),
    bankDetail,
    bankName: String(src.bankName || bankDetail.bankName || "").trim(),
    accountNumber: String(src.accountNumber || src.bankAccountNumber || bankDetail.accountNumber || bankDetail.bankAccountNumber || "").trim(),
    ifscCode: String(src.ifscCode || bankDetail.ifscCode || "").trim(),
    upiId: String(src.upiId || bankDetail.upiId || "").trim(),
    accountHolderName: String(src.accountHolderName || bankDetail.accountHolderName || "").trim(),
    whatsappNumber: String(src.whatsappNumber || bankDetail.whatsappNumber || "").trim(),
    walletAddress: String(src.walletAddress || bankDetail.walletAddress || src.address || "").trim(),
    utrno: String(src.utrno || src.utrNo || src.transactionId || "").trim(),
    paymentType: String(src.paymentType || src.transferType || src.paymentMode || "").trim(),
    imageUrl: imagePath,
    imagePath,
    uploadedImage: imagePath,
  };
};
app.post("/api/add-bank-account", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const bid = id("bank_");
  const now = nowIso();
  const body = asPlainObject(req.body, {});
  const dataJson = JSON.stringify(body);
  db.prepare("INSERT INTO bank_accounts (id,user_id,type,data_json,created_at,updated_at) VALUES (?,?,?,?,?,?)").run(
    bid,
    authUser.id,
    "bank",
    dataJson,
    now,
    now
  );
  syncBankAccountToMysql({ id: bid, userId: authUser.id, type: "bank", dataJson, createdAt: now, updatedAt: now }).catch(() => {});
  res.json(env("Bank account added", { id: bid, _id: bid, success: true }));
});
app.post("/api/add-upi", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const uid = id("upi_");
  const now = nowIso();
  const body = asPlainObject(req.body, {});
  const dataJson = JSON.stringify(body);
  db.prepare("INSERT INTO bank_accounts (id,user_id,type,data_json,created_at,updated_at) VALUES (?,?,?,?,?,?)").run(
    uid,
    authUser.id,
    "upi",
    dataJson,
    now,
    now
  );
  syncBankAccountToMysql({ id: uid, userId: authUser.id, type: "upi", dataJson, createdAt: now, updatedAt: now }).catch(() => {});
  res.json(env("UPI added", { id: uid, _id: uid, success: true }));
});
app.post("/api/delete-upi-bank", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const rid = String(req.body?.id || "").trim();
  if (!rid) return res.status(400).json(env("id is required", {}, true, 400));
  const row = db.prepare("SELECT id,user_id FROM bank_accounts WHERE id=?").get(rid);
  if (!row) return res.status(404).json(env("Record not found", {}, true, 404));
  const targetUser = getUserById(String(row.user_id || ""));
  if (String(row.user_id) !== String(authUser.id) && !canActorAccessTargetUser(authUser, authRole, targetUser)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  db.prepare("DELETE FROM bank_accounts WHERE id=?").run(rid);
  deleteBankAccountFromMysql(rid).catch(() => {});
  res.json(env("Deleted", { success: true, id: rid, _id: rid }));
});
app.get("/api/get-bank-and-upi-list", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const rows = db
    .prepare("SELECT * FROM bank_accounts WHERE user_id=? ORDER BY datetime(created_at) DESC, created_at DESC")
    .all(authUser.id)
    .map((r) => ({ _id: r.id, id: r.id, type: r.type, ...(safeParse(r.data_json, {}) || {}) }));
  const grouped = { upi: [], bank: [], whatsapp: [], wallet: [], other: [] };
  for (const item of rows) {
    const itemType = String(item?.type || "").trim().toLowerCase();
    if (itemType === "upi") grouped.upi.push(item);
    else if (itemType === "bank") grouped.bank.push(item);
    else if (itemType === "whatsapp") grouped.whatsapp.push(item);
    else if (itemType === "wallet" || itemType === "crypto") grouped.wallet.push(item);
    else grouped.other.push(item);
  }
  res.json(env("", grouped));
});

app.post("/api/add-deposit-withdraw", upload.any(), (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const decrypted = req.body?.payload ? decryptPayload(req.body.payload) : null;
  const body = asPlainObject(req.body, {});
  const src = decrypted && typeof decrypted === "object" ? { ...body, ...decrypted } : body;
  const type = String(src.type || body.type || "deposit")
    .trim()
    .toLowerCase();
  if (!["deposit", "withdraw"].includes(type)) return res.status(400).json(env("type must be deposit or withdraw", {}, true, 400));
  let amount;
  try {
    amount = coinEngine.normalizeAmount(src.amount ?? body.amount);
  } catch (e) {
    return sendCoinError(res, e);
  }
  const remark = String(src.remark || body.remark || "").trim().slice(0, 300);
  if (!authUser.parent_id) return res.status(400).json(env("This account has no parent to process the request", {}, true, 400));
  if (type === "withdraw") {
    const wallet = ensureWallet(authUser.id);
    const available = toNum(wallet.balance, 0) - toNum(wallet.exposer, 0);
    if (amount > available + 1e-9) return res.status(400).json(env("Withdraw amount exceeds your available balance", {}, true, 400));
  }
  const pending = db
    .prepare("SELECT id FROM deposits WHERE user_id=? AND type=? AND status='pending' LIMIT 1")
    .get(authUser.id, type);
  if (pending) {
    return res.status(400).json({
      message: `You already created request for ${type}`,
      error: true,
      data: { maintenance: false },
    });
  }
  const files = Array.isArray(req.files) ? req.files : [];
  const screenshotFile =
    files.find((item) => String(item?.fieldname || "").trim().toLowerCase() === "imageurl") || files[0] || null;
  const uploadedPath = screenshotFile
    ? saveUploadedFileToLocal(screenshotFile, { subdir: "deposits", prefix: type || "request" })
    : "";
  const metadata = buildDepositMetadataFromRequest(src, uploadedPath);
  const did = id("dep_");
  const now = nowIso();
  const dataJson = JSON.stringify(metadata);
  db.prepare(
    "INSERT INTO deposits (id,user_id,type,amount,status,remark,data_json,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?)"
  ).run(did, authUser.id, type, amount, "pending", remark, dataJson, now, now);
  syncDepositToMysql({
    id: did,
    userId: authUser.id,
    type,
    amount,
    status: "pending",
    remark,
    dataJson,
    createdAt: now,
    updatedAt: now,
  }).catch(() => {});
  res.json(
    env("Request created successfully", {
      _id: did,
      id: did,
      amount,
      type,
      status: "pending",
      ...metadata,
    })
  );
});
const handleDepositList = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const src = req.method === "GET" ? req.query : req.body;
  const type = String(src?.type || "")
    .trim()
    .toLowerCase();
  const statusFilterRaw = String(src?.status || src?.reportType || "")
    .trim()
    .toLowerCase();
  const username = String(src?.username || "")
    .trim()
    .toLowerCase();
  const startDate = String(src?.startDate || "").trim();
  const endDate = String(src?.endDate || "").trim();
  const allowedStatus = new Set(["pending", "approved", "rejected", "declined", "failed", "cancelled"]);
  const statusFilter = allowedStatus.has(statusFilterRaw) ? statusFilterRaw : "";

  let sql = `
    SELECT
      d.*,
      u.username AS username
    FROM deposits d
    LEFT JOIN users u ON u.id=d.user_id
    WHERE 1=1`;
  const params = [];
  if (type) {
    sql += " AND lower(d.type)=?";
    params.push(type);
  }
  if (statusFilter) {
    sql += " AND lower(d.status)=?";
    params.push(statusFilter);
  }
  if (startDate) {
    sql += " AND date(d.created_at) >= date(?)";
    params.push(startDate);
  }
  if (endDate) {
    sql += " AND date(d.created_at) <= date(?)";
    params.push(endDate);
  }
  if (username) {
    sql += " AND lower(u.username) LIKE ?";
    params.push(`%${username}%`);
  }
  sql += " ORDER BY datetime(d.created_at) DESC, d.created_at DESC";

  let rows = db.prepare(sql).all(...params);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  if (visibleIds instanceof Set) {
    const allowedIds = new Set(visibleIds);
    allowedIds.add(String(authUser.id));
    rows = rows.filter((row) => allowedIds.has(String(row?.user_id || "")));
  }
  const data = rows.map((row) => mapDepositRowForApi(row));
  res.json(env("", data));
};
app.post("/api/get-deposit-withdraw-list", handleDepositList);
app.get("/api/get-deposit-withdraw-list", handleDepositList);
app.post("/api/update-deposit-withdraw-status", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") {
    return res.status(403).json(env("Admin access required", {}, true, 403));
  }
  const rid = String(req.body?.id || "").trim();
  const status = String(req.body?.status || "")
    .trim()
    .toLowerCase();
  const narration = String(req.body?.narration || req.body?.remark || "").trim().slice(0, 300);
  // A request can be decided exactly once: pending -> one terminal status.
  const terminalStatus = new Set(["approved", "rejected", "declined", "failed", "cancelled"]);
  if (!rid || !status) return res.status(400).json(env("id and status are required", {}, true, 400));
  if (!terminalStatus.has(status)) return res.status(400).json(env("Invalid status", {}, true, 400));
  const row = db.prepare("SELECT * FROM deposits WHERE id=?").get(rid);
  if (!row) return res.status(404).json(env("Request not found", {}, true, 404));
  const targetUser = getUserById(String(row.user_id || ""));
  if (!targetUser) return res.status(404).json(env("User not found", {}, true, 404));
  if (!canActorOperateCoins(authUser, authRole, targetUser)) {
    const parentName = getUserById(String(targetUser.parent_id || ""))?.username || "the parent account";
    return res.status(403).json(env("Only the parent account can process this request. Ask " + parentName + " to do this.", {}, true, 403));
  }
  if (String(row.status || "").toLowerCase() !== "pending") {
    return res.status(409).json(env("Request is already " + row.status, {}, true, 409));
  }
  const now = nowIso();
  let entry = null;
  try {
    db.transaction(() => {
      const claimed = db
        .prepare("UPDATE deposits SET status=?,remark=?,updated_at=? WHERE id=? AND status='pending'")
        .run(status, narration || row.remark || null, now, rid);
      if (!claimed.changes) throw new CoinError("Request was already processed", 409);
      if (status === "approved") {
        const direction = String(row.type || "").toLowerCase() === "withdraw" ? "withdraw" : "deposit";
        entry = coinEngine.transfer({
          childId: targetUser.id,
          direction,
          amount: row.amount,
          actorId: authUser.id,
          kind: direction + "_request",
          remark: narration,
          refId: rid,
          idempotencyKey: "req:" + rid,
        });
      }
    }).immediate();
  } catch (e) {
    return sendCoinError(res, e, "Unable to update request");
  }
  if (entry) {
    syncWalletsAfterCoinMove([entry.fromUserId, entry.toUserId]);
    addNotification(targetUser.id, "Request approved", "Your " + row.type + " request of " + entry.amount + " was approved", "wallet", authUser.username);
  } else {
    addNotification(targetUser.id, "Request " + status, "Your " + row.type + " request of " + toNum(row.amount, 0) + " was " + status, "wallet", authUser.username);
  }
  syncDepositToMysql({
    id: row.id,
    userId: row.user_id,
    type: row.type,
    amount: toNum(row.amount, 0),
    status,
    remark: narration,
    dataJson: row.data_json || "",
    createdAt: row.created_at || now,
    updatedAt: now,
  }).catch(() => {});
  const updatedRow = db
    .prepare(
      "SELECT d.*,u.username AS username FROM deposits d LEFT JOIN users u ON u.id=d.user_id WHERE d.id=? LIMIT 1"
    )
    .get(rid);
  res.json(env("Status updated", { success: true, item: mapDepositRowForApi(updatedRow || row), transactionId: entry?.id || null }));
});

app.get("/api/get-setting-list", (_req, res) => res.json(env("", getSetting("setting.list", []))));
app.get("/api/setting-list", (_req, res) => res.json(env("", getSetting("setting.list", []))));
// Site-wide jobs and configuration: Super Admin only.
const ownerOnly = (req, res, next) => {
  if (getOwnerAuthContext(req, res)) next();
};
app.post("/api/save-setting-list", ownerOnly, (req, res) => {
  setSetting("setting.list", req.body?.settingList || []);
  res.json(env("Settings saved", { success: true }));
});
// Payment details tell players where to send money: anyone logged in may read
// them, only Super Admin may change them (confirmed by transaction password).
const stripPaymentSecrets = (value) => {
  if (Array.isArray(value)) return value.map(stripPaymentSecrets);
  if (!value || typeof value !== "object") return value;
  const { transactionPassword, ...rest } = value;
  return rest;
};
const requirePaymentReader = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  return authUser;
};
const requirePaymentEditor = (req, res, { requireTransactionPassword = true } = {}) => {
  const ctx = getOwnerAuthContext(req, res);
  if (!ctx) return null;
  if (requireTransactionPassword && !verifyActorTransactionPassword(ctx.authUser, req.body?.transactionPassword)) {
    res.status(400).json(env("Invalid transaction password", {}, true, 400));
    return null;
  }
  return ctx;
};
app.get("/api/get-payment-list", (req, res) => {
  if (!requirePaymentReader(req, res)) return;
  const p = getSetting("payment.list", null);
  if (p) return res.json(env("", { data: { settings: stripPaymentSecrets(Array.isArray(p) ? p : [p]) } }));
  const paymentV2 = normalizePaymentSettingsV2(getSetting("payment2.settings", null));
  if (hasPaymentOptionsConfigured(paymentV2)) return res.json(env("", { data: { settings: [stripPaymentSecrets(paymentV2)] } }));
  return res.json(env("", { data: { settings: [] } }));
});
app.get("/api/payment-list", (req, res) => {
  if (!requirePaymentReader(req, res)) return;
  res.json(env("", stripPaymentSecrets(getSetting("payment.list", []))));
});
app.post("/api/save-payment-list", upload.any(), (req, res) => {
  // Legacy screen does not send a transaction password; Super Admin login is required.
  if (!requirePaymentEditor(req, res, { requireTransactionPassword: false })) return;
  const list = typeof req.body?.settingList === "string" ? safeParse(req.body.settingList, []) : req.body?.settingList || [];
  setSetting("payment.list", stripPaymentSecrets(list));
  const first = Array.isArray(list) && list.length ? list[0] : null;
  const normalizedV2 = normalizePaymentSettingsV2(first);
  if (hasPaymentOptionsConfigured(normalizedV2)) setSetting("payment2.settings", stripPaymentSecrets(normalizedV2));
  res.json(env("Payment settings saved", { success: true }));
});
app.get("/api/payment2-settings", (req, res) => {
  if (!requirePaymentReader(req, res)) return;
  const p = normalizePaymentSettingsV2(getSetting("payment2.settings", null));
  return res.json(env("", { paymentSettings: Object.keys(p).length ? stripPaymentSecrets(p) : null }));
});
app.post("/api/payment2-settings", upload.any(), (req, res) => {
  if (!requirePaymentEditor(req, res)) return;
  const optionKey = normalizePaymentOptionKey(req.body?.option);
  if (!optionKey) {
    return res.status(400).json(env("option must be one of option1, option2, option3", {}, true, 400));
  }
  const optionDataRaw =
    typeof req.body?.optionData === "string" ? safeParse(req.body.optionData, {}) : asPlainObject(req.body?.optionData, {});
  const existing = stripPaymentSecrets(normalizePaymentSettingsV2(getSetting("payment2.settings", {})));
  const mergedOptionData = {
    ...asPlainObject(existing[optionKey], {}),
    ...normalizePaymentOptionData(optionDataRaw),
  };
  const files = Array.isArray(req.files) ? req.files : [];
  const qrFile = files.find((file) => String(file?.fieldname || "").trim().toLowerCase() === "qrcodeimage");
  if (qrFile) {
    const savedPath = saveUploadedFileToLocal(qrFile, { subdir: "payment2", prefix: optionKey });
    if (savedPath) mergedOptionData.qrCodeImage = savedPath;
  } else if (!mergedOptionData.qrCodeImage && typeof req.body?.qrCodeImage === "string") {
    mergedOptionData.qrCodeImage = String(req.body.qrCodeImage || "").trim();
  }
  const next = {
    ...existing,
    [optionKey]: mergedOptionData,
    updatedAt: nowIso(),
  };
  setSetting("payment2.settings", next);
  setSetting("payment.list", [next]);
  res.json(env("Payment2 settings saved", { paymentSettings: next, success: true }));
});
// Admin P&L: deposits, withdrawals and realised P/L for every account below me.
app.get("/api/get-analysis-data", (req, res) => {
  const ctx = requireAdminPanelAccess(req, res);
  if (!ctx) return;
  const { authUser, authRole } = ctx;
  const rows = queryUserRowsSqlite();
  const below = isOwnerPanelRole(authRole)
    ? new Set(rows.map((r) => String(r.id)).filter((uid) => uid !== String(authUser.id)))
    : getDescendantUserIdSet(authUser.id);
  const pnl = realizedPnlMap();
  const deposits = ledgerSumsByUser({ kinds: DEPOSIT_KINDS, side: "to" });
  const withdraws = ledgerSumsByUser({ kinds: WITHDRAW_KINDS, side: "from" });
  const balanceById = new Map(rows.map((r) => [String(r.id), toNum(r.wallet_balance, 0)]));
  const users = rows
    .filter((r) => below.has(String(r.id)))
    .map((r) => {
      const uid = String(r.id);
      const profile = parseProfileJson(r.profile_json || "{}");
      const p = toNum(pnl.get(uid), 0);
      const downlineBalance = [...getDescendantUserIdSet(uid)].reduce((a, d) => a + toNum(balanceById.get(d), 0), 0);
      return {
        _id: uid,
        username: r.username,
        role: normalizePanelRole(r.role, "user"),
        phone: profile?.mobileNumber || "",
        balance: toNum(r.wallet_balance, 0),
        exposure: toNum(r.wallet_exposer, 0) + toNum(r.wallet_casino_exposer, 0),
        availableBalance: Math.round((toNum(r.wallet_balance, 0) - toNum(r.wallet_exposer, 0) - toNum(r.wallet_casino_exposer, 0)) * 100) / 100,
        downlineBalance: Math.round(downlineBalance * 100) / 100,
        totalDeposit: toNum(deposits.get(uid), 0),
        totalWithdraw: toNum(withdraws.get(uid), 0),
        totalProfit: p > 0 ? p : 0,
        totalLoss: p < 0 ? -p : 0,
        createdAt: r.created_at,
        updatedAt: r.updated_at,
      };
    });
  const sum = (k) => Math.round(users.reduce((a, u) => a + toNum(u[k], 0), 0) * 100) / 100;
  // Per-row figures are what each account received; the headline totals count
  // only coins entering/leaving my downline, so internal moves are not doubled.
  return res.json(env("", {
    totalDeposit: ledgerBoundaryTotal({ insideIds: below, kinds: DEPOSIT_KINDS, side: "to" }),
    totalWithdraw: ledgerBoundaryTotal({ insideIds: below, kinds: WITHDRAW_KINDS, side: "from" }),
    totalProfit: sum("totalProfit"),
    totalLoss: sum("totalLoss"),
    users,
  }));
});
const handleSyncSnapshotData = async (_req, res) => {
  const out = syncSnapshotToDb();
  const mysqlOut = await syncAllSqliteDataToMysql();
  res.json(env("Snapshot and SQL data synced", { ...out, mysql: mysqlOut }));
};
app.post("/api/sync-snapshot-data", ownerOnly, handleSyncSnapshotData);
app.get("/api/sync-snapshot-data", ownerOnly, handleSyncSnapshotData);
app.post("/api/sync-sqlite-to-mysql", ownerOnly, async (_req, res) => {
  const out = await syncAllSqliteDataToMysql();
  res.json(env("SQLite mirror synced to MySQL", out));
});
app.get("/api/game-api-config-status", ownerOnly, (_req, res) => {
  const cfg = readGameApiSettings();
  const cache = readGameApiCatalogCacheEnvelope();
  const cacheLastSyncedAt = cache?.syncedAt || null;
  const cacheLastSyncedMs = parseIsoToMs(cacheLastSyncedAt);
  const cacheAgeSeconds = cacheLastSyncedAt && cacheLastSyncedMs
    ? Math.max(0, Math.floor((Date.now() - cacheLastSyncedMs) / 1000))
    : null;
  const providerCfg = readProviderApiSettings();
  res.json(
    env("", {
      active: gameApiActive(cfg),
      hasSingleLaunchUrl: !!cfg.singleLaunchUrl,
      hasLaunchTemplate: !!cfg.launchUrlTemplate,
      hasBaseUrl: !!cfg.baseUrl,
      catalogSyncEnabled: !!cfg.catalogSyncEnabled,
      autoSyncOnRequest: !!cfg.autoSyncOnRequest,
      cacheTtlSeconds: toNum(cfg.cacheTtlSeconds, 180),
      requestTimeoutMs: toNum(cfg.requestTimeoutMs, 20000),
      catalogUrl: cfg.catalogUrl || "",
      catalogGames: Array.isArray(cache?.games) ? cache.games.length : 0,
      catalogLastSyncedAt: cacheLastSyncedAt,
      catalogCacheAgeSeconds: cacheAgeSeconds,
      providerApiEnabled: !!providerCfg.enabled,
      providerApiConfigured: providerApiActive(providerCfg),
      providerAuthMode: providerCfg.authMode || "legacy_keys",
      providerRefreshEnabled: !!providerCfg.refreshEnabled,
      configFile: "data_store/game_api_settings.json",
      catalogCacheFile: "data_store/game_api_catalog_cache.json",
      providerSettingsFile: "data_store/provider_api_settings.json",
      providerLocalCatalogDirs: PROVIDER_LOCAL_CATALOG_DIRS,
      casinoHideFailedGames: CASINO_HIDE_FAILED_GAMES,
      casinoFailedGameHideMinutes: CASINO_FAILED_GAME_HIDE_MINUTES,
      casinoRequireWorkingGames: CASINO_REQUIRE_WORKING_GAMES,
      casinoWorkingEvidenceMaxAgeHours: CASINO_WORKING_EVIDENCE_MAX_AGE_HOURS,
      casinoWorkingOnlyStrict: CASINO_WORKING_ONLY_STRICT,
      casinoWorkingEvidenceTrustStaticMap: CASINO_WORKING_EVIDENCE_TRUST_STATIC_MAP,
      casinoFrontlineWorkingCount: CASINO_FRONTLINE_WORKING_COUNT,
      casinoWarmupEndpoint: "/api/admin/casino-warm-working-games",
      casinoHealthFile: "data_store/casino_game_health.json",
      casinoControlsFile: "data_store/casino_game_controls.json",
    })
  );
});
app.post("/api/sync-game-api-catalog", ownerOnly, async (req, res) => {
  try {
    const force = toBool(req.query?.force ?? req.body?.force);
    const out = force ? await ensureGameApiCatalogFresh({ force: true }) : await syncGameApiCatalog();
    if (!out.success) return res.status(400).json(env(out.message || "Catalog sync failed", out, true, 400));
    return res.json(env("Game API catalog synced", out));
  } catch (e) {
    return res.status(500).json(env(e?.message || "Catalog sync failed", { success: false }, true, 500));
  }
});
app.post("/api/import-provider-local-catalog", ownerOnly, (_req, res) => {
  const out = importProviderLocalCatalogToDb();
  return res.json(env("Provider local catalog imported", out));
});
app.get("/api/get-user-details/:userId", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const target = getUserById(req.params.userId);
  if (!target) return res.json(env("", null));
  if (!canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }
  const { password, ...safeTarget } = target;
  if (!req.query?.type) return res.json(env("", safeTarget));
  const ledgerOf = (kinds, col) =>
    db.prepare(`SELECT id AS _id, kind AS type, amount, remark, created_at AS createdAt FROM coin_ledger WHERE kind IN (${sqlList(kinds)}) AND ${col}=? ORDER BY created_at DESC LIMIT 500`).all(target.id);
  const bets = db
    .prepare("SELECT id AS _id, match_name AS matchName, market_name AS marketName, selection_name AS selectionName, odds, stack, is_back AS isBack, status, settlement_result AS result, COALESCE(settlement_net,0) AS profitLoss, created_at AS createdAt FROM bets WHERE user_id=? ORDER BY created_at DESC LIMIT 500")
    .all(target.id);
  return res.json(env("", { ...safeTarget, deposits: ledgerOf(DEPOSIT_KINDS, "to_user_id"), withdraws: ledgerOf(WITHDRAW_KINDS, "from_user_id"), bets }));
});
app.get("/api/search-users", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);

  const s = String(req.query?.searchTerm || "").toLowerCase();
  const limit = Math.min(300, Math.max(1, toNum(req.query?.limit, 100)));
  const data = userNameListStmt
    .all()
    .filter((u) => {
      const uid = String(u?.id || "");
      return !(visibleIds instanceof Set) || uid === String(authUser.id) || visibleIds.has(uid);
    })
    .filter((u) => !s || u.username.toLowerCase().includes(s))
    .slice(0, limit)
    .map((u) => ({ _id: u.id, username: u.username }));
  res.json(env("", data));
});

const mapCasinoRow = (r, index = 0) =>
  normalizeCasinoGameRecord(
    {
      _id: r.id,
      id: r.id,
      identifier: r.identifier,
      provider_id: r.provider_id,
      provider: r.provider,
      game_name: r.game_name,
      image_url: r.image_url,
      game_images: r.image_url,
      live_category: r.live_category,
      slot_category: r.slot_category,
      homepage_code: r.homepage_code,
    },
    index
  );
const selectCasinoGamesStmt = db.prepare("SELECT * FROM casino_games ORDER BY game_name");
const mergedCasinoGamesCache = {
  version: 0,
  expiresAt: 0,
  rows: [],
};
const casinoSnapshotBootstrapState = {
  attempted: false,
  checkedAt: 0,
};
const ensureCasinoSnapshotBootstrap = () => {
  if (casinoSnapshotBootstrapState.attempted) return;
  casinoSnapshotBootstrapState.attempted = true;
  casinoSnapshotBootstrapState.checkedAt = Date.now();
  try {
    const currentCount = toNum(db.prepare("SELECT COUNT(*) c FROM casino_games").get()?.c, 0);
    if (currentCount < 200) {
      const out = syncCasinoFromSnapshots();
      if (toNum(out?.casinoGamesSynced, 0) > 0) {
        bumpCasinoCatalogVersion();
      }
    }
  } catch {}
  markCasinoSnapshotFingerprint();
};
const readMergedCasinoGames = () => {
  ensureCasinoSnapshotBootstrap();
  ensureCasinoSnapshotAutoRefresh();
  const now = Date.now();
  if (
    mergedCasinoGamesCache.version === casinoCatalogVersion &&
    mergedCasinoGamesCache.expiresAt > now &&
    Array.isArray(mergedCasinoGamesCache.rows)
  ) {
    return mergedCasinoGamesCache.rows;
  }
  const dbRows = selectCasinoGamesStmt
    .all()
    .map((r, index) => mapCasinoRow(r, index))
    .filter(Boolean);
  const apiRows = readGameApiCatalogCache();
  const merged = mergeGamesByIdentifier(apiRows, dbRows);
  mergedCasinoGamesCache.version = casinoCatalogVersion;
  mergedCasinoGamesCache.expiresAt = now + CASINO_MERGED_CACHE_TTL_MS;
  mergedCasinoGamesCache.rows = merged;
  return merged;
};
const iconHomepageCodesCache = {
  loadedAt: 0,
  codes: [],
};
const getIconHomepageCodes = () => {
  const now = Date.now();
  if (iconHomepageCodesCache.loadedAt && now - iconHomepageCodesCache.loadedAt < SNAPSHOT_CACHE_TTL_MS) {
    return iconHomepageCodesCache.codes;
  }
  let codes = [];
  try {
    codes = fs
      .readdirSync(path.join(ROOT, "icon"))
      .map((n) => /^game-(\d+)\.gif$/i.exec(n))
      .filter(Boolean)
      .map((m) => toNum(m[1], 0))
      .filter((n) => n > 0)
      .sort((a, b) => a - b);
  } catch {
    codes = [];
  }
  iconHomepageCodesCache.loadedAt = now;
  iconHomepageCodesCache.codes = codes;
  return codes;
};

app.get("/api/get-casino-games", async (_req, res) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  const limitParam = String(_req.query?.limit || "").trim().toLowerCase();
  const requestedLimit = limitParam && limitParam !== "all" ? Math.max(1, Math.min(20000, toNum(limitParam, 500))) : 0;
  const allRows = filterCasinoGamesForDisplay(readMergedCasinoGames()).map((r) => ({
    _id: r._id,
    identifier: r.identifier,
    provider_id: r.provider_id,
    provider: r.provider,
    game_name: r.game_name,
    image_url: pickCasinoGameImage(r.image_url, r.game_images),
    game_images: pickCasinoGameImage(r.game_images, r.image_url),
    live_category: r.live_category,
    slot_category: r.slot_category,
    homepage_code: r.homepage_code,
  }));
  const data = requestedLimit > 0 ? allRows.slice(0, requestedLimit) : allRows;
  res.json({ message: "Data Found", error: false, code: 200, data, total: allRows.length, changePassAndTxn: false });
});
app.get("/api/get-casino-homepage-categories", async (_req, res) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  let data = (() => {
    const games = filterCasinoGamesForDisplay(readMergedCasinoGames());
    const counter = new Map();
    for (const g of games) {
      const code = toNum(g?.homepage_code, 1);
      counter.set(code, (counter.get(code) || 0) + 1);
    }
    return Array.from(counter.entries())
      .map(([homepage_code, count]) => ({ homepage_code: toNum(homepage_code, 1), count: toNum(count, 0) }))
      .sort((a, b) => a.homepage_code - b.homepage_code);
  })();
  if (data.length <= 1) {
    const iconCodes = getIconHomepageCodes();
    if (iconCodes.length) {
      const mappedCount = new Map(data.map((d) => [toNum(d.homepage_code, 0), toNum(d.count, 0)]));
      data = iconCodes.map((code) => ({ homepage_code: code, count: mappedCount.get(code) || 1 }));
    }
  }
  if (!data.length) {
    const snapshot = loadSnapshot("get-casino-homepage-categories");
    if (snapshot && Array.isArray(snapshot.data) && snapshot.data.length) return res.json(snapshot);
  }
  res.json({ message: "Data Found", error: false, code: 200, data, total: data.length, changePassAndTxn: false });
});
app.get("/api/get-casino-int-games", async (req, res) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  const normalizeFilter = (v) => {
    const x = String(v || "").trim().toLowerCase();
    if (!x || x === "all" || x === "all casino" || x === "null" || x === "undefined") return "";
    return x;
  };
  const provider = normalizeFilter(
    req.query?.provider ||
      req.query?.category ||
      req.query?.providerId ||
      req.query?.provider_id ||
      req.query?.vendor
  );
  const type = normalizeFilter(req.query?.type);
  const gameText = (g) =>
    [
      String(g.provider_id || ""),
      String(g.provider || ""),
      String(g.live_category || ""),
      String(g.slot_category || ""),
      String(g.game_name || ""),
    ]
      .join(" ")
      .toLowerCase();
  const typeSynonymMap = {
    slots: ["slot", "slots"],
    "slot-game": ["slot", "slots"],
    "live-casino": ["live", "casino live", "table"],
    "virtual-casino": ["virtual", "instant", "arcade", "crash"],
    fantasy: ["fantasy"],
    "live-dmd": ["live", "dmd"],
    "our-casino": ["casino", "slot", "live"],
  };
  const normalizeTypeTokens = (rawType) => {
    const clean = normalizeFilter(rawType);
    if (!clean) return [];
    const base = clean.replace(/[_-]+/g, " ").trim();
    const parts = base
      .split(/\s+/)
      .map((x) => normalizeFilter(x))
      .filter((x) => x && x.length > 2)
      .map((x) => (x === "slots" ? "slot" : x));
    const mapped = typeSynonymMap[clean] || typeSynonymMap[base] || [];
    return [...new Set([clean, base, ...parts, ...mapped].map((x) => normalizeFilter(x)).filter(Boolean))];
  };
  const baseRows = filterCasinoGamesForDisplay(readMergedCasinoGames()).map((r) => ({
    _id: r._id,
    identifier: r.identifier,
    provider_id: r.provider_id,
    provider: r.provider,
    game_name: r.game_name,
    image_url: pickCasinoGameImage(r.image_url, r.game_images),
    game_images: pickCasinoGameImage(r.game_images, r.image_url),
    live_category: r.live_category,
    slot_category: r.slot_category,
    homepage_code: r.homepage_code,
  }));
  let rows = baseRows;
  if (type) {
    const typeTokens = normalizeTypeTokens(type);
    const byType = rows.filter((g) => {
      if (!typeTokens.length) return true;
      const hay = gameText(g);
      return typeTokens.some((token) => hay.includes(token));
    });
    if (byType.length) rows = byType;
  }

  // Keep provider tabs complete for selected type, even when one provider is selected.
  const providerRowsForTabs = rows;
  if (provider) {
    rows = filterCasinoRowsByProvider(rows, provider);
  }
  rows = prioritizeCasinoRowsByWorkingEvidence(rows, CASINO_FRONTLINE_WORKING_COUNT);
  const frontlineWorkingCount = countCasinoFrontlineWorkingRows(rows, CASINO_FRONTLINE_WORKING_COUNT);
  const requestAuthUser = reqAuthUser(req);
  if (frontlineWorkingCount < CASINO_FRONTLINE_WORKING_COUNT && requestAuthUser) {
    warmCasinoWorkingEvidenceForUser({
      user: requestAuthUser,
      targetCount: CASINO_FRONTLINE_WORKING_COUNT,
      maxAttempts: 120,
    }).catch(() => {});
  }

  if (!rows.length && !baseRows.length && !CASINO_HIDE_FAILED_GAMES) {
    const snapshot = loadSnapshot("get-casino-int-games");
    if (snapshot && Array.isArray(snapshot.result) && snapshot.result.length) return res.json(snapshot);
  }
  const limitParam = String(req.query?.limit || "").trim().toLowerCase();
  const requestedLimit =
    limitParam && limitParam !== "all" ? Math.max(1, Math.min(20000, toNum(limitParam, rows.length || 500))) : 0;
  const outputRows = requestedLimit > 0 ? rows.slice(0, requestedLimit) : rows;
  const providers = [
    ...new Map(
      providerRowsForTabs.map((g) => [
        g.provider_id || g.provider,
        { _id: g.provider_id || g.provider, game_image: g.image_url },
      ])
    ).values(),
  ];
  const category = [...new Set(rows.flatMap((g) => [g.live_category, g.slot_category]).filter(Boolean))].map((x) => ({ _id: x }));
  res.json({
    message: "ok",
    result: outputRows,
    total: rows.length,
    providers,
    status: "success",
    category,
    changePassAndTxn: false,
  });
});
app.get("/api/search-casino-games", async (req, res) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  const q = String(req.query?.query || "").toLowerCase();
  const result = filterCasinoGamesForDisplay(readMergedCasinoGames())
    .filter((r) => !q || String(r.game_name || "").toLowerCase().includes(q) || String(r.provider || "").toLowerCase().includes(q))
    .map((r) => ({
      _id: r._id,
      identifier: r.identifier,
      provider_id: r.provider_id,
      provider: r.provider,
      game_name: r.game_name,
      image_url: pickCasinoGameImage(r.image_url, r.game_images),
      game_images: pickCasinoGameImage(r.game_images, r.image_url),
      live_category: r.live_category,
      slot_category: r.slot_category,
      homepage_code: r.homepage_code,
    }));
  res.json({ message: "ok", result, status: "success", data: result, changePassAndTxn: false });
});
app.get("/api/get-casino-by-homepage/:homepageCode", async (req, res, next) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  const code = toNum(req.params.homepageCode, 0);
  const mapRow = (r) => ({
    _id: r._id,
    identifier: r.identifier,
    provider_id: r.provider_id,
    provider: r.provider,
    game_name: r.game_name,
    image_url: pickCasinoGameImage(r.image_url, r.game_images),
    game_images: pickCasinoGameImage(r.game_images, r.image_url),
    live_category: r.live_category,
    slot_category: r.slot_category,
    homepage_code: r.homepage_code,
  });
  const allGames = filterCasinoGamesForDisplay(readMergedCasinoGames()).map(mapRow);
  let result = allGames.filter((r) => toNum(r.homepage_code, 0) === code);
  if (!result.length) {
    result = allGames.filter((_, idx) => ((idx % 12) + 1) === code);
    if (!result.length) result = allGames.slice(0, 100);
  }
  const providers = [...new Map(result.map((g) => [g.provider_id || g.provider, { _id: g.provider_id || g.provider, game_image: g.image_url }])).values()];
  const category = [...new Set(result.flatMap((g) => [g.live_category, g.slot_category]).filter(Boolean))].map((x) => ({ _id: x }));
  if (result.length) return res.json({ message: "ok", result, providers, status: "success", category, changePassAndTxn: false });
  if (CASINO_HIDE_FAILED_GAMES) {
    return res.json({ message: "ok", result: [], providers: [], status: "success", category: [], changePassAndTxn: false });
  }
  const snapshot = loadSnapshot(`get-casino-by-homepage/${code}`);
  if (snapshot && Array.isArray(snapshot.result)) return res.json(snapshot);
  return next();
});
app.get("/api/casino-launch-availability", async (req, res) => {
  await ensureGameApiCatalogFresh().catch(() => {});
  const unavailableMessage = "This game is currently not available";
  const rawGameCode = String(req.query?.gameCode || req.query?.identifier || req.query?.code || "").trim();
  const gameCode = normalizeObjectKey(rawGameCode);
  if (!gameCode) {
    return res.status(400).json(
      env("gameCode is required", { available: false, gameCode: "", message: unavailableMessage }, true, 400)
    );
  }

  const game = readMergedCasinoGames().find(
    (g) => normalizeObjectKey(g?.identifier || g?._id || g?.id || g?.gameCode) === gameCode
  );
  const manuallyDisabled = isCasinoGameManuallyDisabled(gameCode);
  const hiddenByHealth = isCasinoGameHiddenByHealth(gameCode);
  const hasStaticLaunchUrl = !!resolveCasinoPlayUrl(gameCode);
  const providerConfigured = providerApiActive(readProviderApiSettings());
  const available = !manuallyDisabled && !hiddenByHealth && (hasStaticLaunchUrl || (!!game && providerConfigured));
  const message = available ? "Game available" : unavailableMessage;

  return res.json(
    env("", {
      available,
      message,
      gameCode,
      manuallyDisabled,
      hiddenByHealth,
      knownWorking: hasCasinoGameWorkingEvidence(gameCode),
      hasStaticLaunchUrl,
      providerConfigured,
      knownGame: !!game,
    })
  );
});
app.post("/api/admin/casino-warm-working-games", async (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);
  if (normalizePanelRole(authRole, "user") === "user") {
    return res.status(403).json(env("Admin access required", {}, true, 403));
  }
  const targetCount = Math.max(1, Math.min(80, toNum(req.body?.count, CASINO_FRONTLINE_WORKING_COUNT)));
  const maxAttempts = Math.max(targetCount, Math.min(400, toNum(req.body?.maxAttempts, 160)));
  try {
    const out = await warmCasinoWorkingEvidenceForUser({
      user: authUser,
      targetCount,
      maxAttempts,
    });
    return res.json(env("Casino working-game warmup completed", out || {}));
  } catch (e) {
    return res.status(500).json(env(e?.message || "Warmup failed", {}, true, 500));
  }
});
const nowIndiaSqlDateTime = () => {
  try {
    const d = new Date();
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(d);
    const get = (type) => parts.find((p) => p.type === type)?.value || "00";
    return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
  } catch {
    return nowIso().replace("T", " ").slice(0, 19);
  }
};
const buildClientGameLaunchPayload = (body = {}, gameCode = "", vendorCode = 18) => {
  const normalizedGameCode = normalizeObjectKey(gameCode || body?.gameCode || body?.identifier || body?.lobby_url || "");
  const randomText = String(body?.random || crypto.randomUUID().replace(/-/g, "").slice(0, 20)).trim();
  const vendorRaw = body?.vendorCode ?? body?.providerCode ?? body?.provider_id;
  const vendorText = String(vendorRaw ?? "").trim();
  const hasMixedVendorToken = /[a-zA-Z]/.test(vendorText) && /\d/.test(vendorText);
  const safeVendorCode = hasMixedVendorToken
    ? 18
    : Math.max(1, toNum(resolveVendorCode(vendorRaw) || resolveVendorCode(vendorCode) || 18, 18));
  return {
    language: Math.max(0, toNum(body?.language, 1)),
    random: randomText || crypto.randomUUID().replace(/-/g, "").slice(0, 20),
    signature: String(body?.signature || "NA").trim() || "NA",
    vendorCode: safeVendorCode,
    gameCode: normalizedGameCode,
    phonetype: Math.max(0, toNum(body?.phonetype, 1)),
    timestamp: Math.max(1, toNum(body?.timestamp, Date.now())),
    gameNameEn: String(body?.gameNameEn || body?.game_name || body?.gameName || "").trim(),
  };
};
const resolveCasinoLaunch = async (req, { requireAuth = false } = {}) => {
  const inputGameCode = String(
    req.body?.gameCode || req.body?.identifier || req.body?.lobby_url || req.body?.gameId || ""
  ).trim();
  const inputGameCodes = resolveProviderGameCodeCandidates(
    req.body?.gameCode,
    req.body?.identifier,
    req.body?.lobby_url,
    req.body?.gameId,
    inputGameCode
  );
  if (!inputGameCodes.length) {
    return {
      ok: false,
      httpStatus: 400,
      message: "Game code is required",
      providerCode: 7,
      providerMsgCode: 6,
      providerMsg: "Param is Invalid",
    };
  }

  // Do not block game launch on catalog refresh.
  ensureGameApiCatalogFresh().catch(() => {});

  const authUser = reqAuthUser(req);
  const user = authUser || (requireAuth ? null : reqUser(req));
  if (!user) {
    return {
      ok: false,
      httpStatus: 401,
      message: "Unauthorized",
      providerCode: 4,
      providerMsgCode: 2,
      providerMsg: "No operation permission",
    };
  }

  const wallet = ensureWallet(user.id);
  let launchUrl = "";
  let providerMeta = null;
  let providerError = "";
  let launchPayload = null;
  let normalizedGameCode = normalizeObjectKey(inputGameCodes[0] || "");
  const attemptedGameCodes = [];

  for (const candidateCode of inputGameCodes) {
    const vendorCode = resolveVendorCodeForGame(
      candidateCode,
      req.body?.vendorCode || req.body?.providerCode || req.body?.provider_id || req.body?.provider
    );
    const currentPayload = buildClientGameLaunchPayload(req.body || {}, candidateCode, vendorCode);
    const currentGameCode = String(currentPayload?.gameCode || "").trim();
    if (!currentGameCode) continue;

    if (!attemptedGameCodes.includes(currentGameCode)) attemptedGameCodes.push(currentGameCode);
    launchPayload = currentPayload;
    normalizedGameCode = currentGameCode;
    if (isCasinoGameManuallyDisabled(currentGameCode)) {
      providerError = "Game is currently disabled";
      continue;
    }
    if (isCasinoGameHiddenByHealth(currentGameCode)) {
      providerError = CASINO_UNAVAILABLE_MESSAGE;
      continue;
    }
    const launchCacheKey = buildCasinoLaunchKey({
      userId: user.id,
      gameCode: currentGameCode,
      vendorCode: currentPayload.vendorCode,
    });

    launchUrl = resolveCasinoPlayUrl(currentGameCode);
    if (!launchUrl) {
      launchUrl = getCachedCasinoLaunchUrl(launchCacheKey);
      if (launchUrl) {
        providerMeta = {
          providerCode: currentPayload.vendorCode,
          cacheHit: true,
          source: "launch_url_cache",
        };
        break;
      }
    } else {
      setCachedCasinoLaunchUrl(launchCacheKey, launchUrl);
      break;
    }

    const providerResult = await getOrCreateCasinoLaunchInFlight(launchCacheKey, () =>
      requestProviderLaunchUrl({
        userId: user.id,
        username: user.username,
        balance: toNum(wallet.balance, 0),
        gameCode: currentGameCode,
        vendorCode: currentPayload.vendorCode,
        language: currentPayload.language,
        phonetype: currentPayload.phonetype,
        timestamp: currentPayload.timestamp,
        random: currentPayload.random,
      })
    );
    if (providerResult.ok && providerResult.url) {
      launchUrl = providerResult.url;
      setCachedCasinoLaunchUrl(launchCacheKey, launchUrl);
      markCasinoGameWorking(currentGameCode);
      providerMeta = providerResult.meta || null;
      if (providerMeta?.externalUserId) {
        cacheProviderPlayerMapping({
          externalUserId: providerMeta.externalUserId,
          userId: user.id,
          username: user.username,
          providerName: String(readProviderApiSettings()?.providerAgent || "").trim(),
        });
      }
      break;
    }
    providerError = String(providerResult?.message || "").trim();
    if (looksLikeGameUnavailableError(providerError)) {
      hideFailedCasinoGame(currentGameCode, providerError);
    }
  }

  if (!launchPayload) {
    const vendorCode = resolveVendorCodeForGame(
      inputGameCode,
      req.body?.vendorCode || req.body?.providerCode || req.body?.provider_id || req.body?.provider
    );
    launchPayload = buildClientGameLaunchPayload(req.body || {}, inputGameCode, vendorCode);
    normalizedGameCode = String(launchPayload?.gameCode || normalizedGameCode || "").trim();
  }

  if (!launchUrl) {
    if (looksLikeGameUnavailableError(providerError || CASINO_UNAVAILABLE_MESSAGE)) {
      hideFailedCasinoGame(normalizedGameCode, providerError || CASINO_UNAVAILABLE_MESSAGE);
    }
    return {
      ok: false,
      httpStatus: 500,
      message: CASINO_UNAVAILABLE_MESSAGE,
      providerCode: 8,
      providerMsgCode: 8,
      providerMsg: providerError || CASINO_UNAVAILABLE_MESSAGE,
      data: {
        gameCode: normalizedGameCode,
        attemptedGameCodes,
        hint: "Add this game code to data_store/casino_play_urls.json, configure data_store/game_api_settings.json, or enable data_store/provider_api_settings.json.",
      },
      launchPayload,
    };
  }

  return {
    ok: true,
    httpStatus: 200,
    message: "Play URL generated",
    data: {
      url: launchUrl,
      gameCode: normalizedGameCode,
      providerMeta,
      launchPayload,
    },
    providerCode: 0,
    providerMsgCode: 0,
    providerMsg: "Game launched successfully",
  };
};
app.post("/api/get-cas-casino-play-url", async (req, res) => {
  const out = await resolveCasinoLaunch(req, { requireAuth: false });
  if (!out.ok) {
    const data = {
      ...(out.data || {}),
      ...(out.launchPayload ? { launchPayload: out.launchPayload } : {}),
    };
    const status = toNum(out.httpStatus, 0) === 401 ? 401 : 200;
    const code = status === 401 ? 401 : toNum(out.providerCode, 8);
    return res.status(status).json(env(out.message || CASINO_UNAVAILABLE_MESSAGE, data, true, code));
  }
  return res.json(env(out.message || "Play URL generated", out.data || {}));
});
const handleGetGameUrlPhp = async (req, res) => {
  const out = await resolveCasinoLaunch(req, { requireAuth: true });
  const serviceNowTime = nowIndiaSqlDateTime();
  if (!out.ok) {
    const status = toNum(out.httpStatus, 0) === 401 ? 401 : 200;
    const payload = {
      code: toNum(out.providerCode, 8),
      msg: String(out.providerMsg || out.message || CASINO_UNAVAILABLE_MESSAGE),
      message: String(out.providerMsg || out.message || CASINO_UNAVAILABLE_MESSAGE),
      msgCode: toNum(out.providerMsgCode, 8),
      serviceNowTime,
    };
    const data = {
      ...(out.data || {}),
      ...(out.launchPayload ? { launchPayload: out.launchPayload } : {}),
    };
    if (Object.keys(data).length) payload.data = data;
    return res.status(status).json(payload);
  }
  return res.status(200).json({
    code: 0,
    msg: "Game launched successfully",
    msgCode: 0,
    serviceNowTime,
    data: {
      url: out.data?.url,
      returnType: "game_url",
      launchPayload: out.data?.launchPayload || {},
      providerMeta: out.data?.providerMeta || null,
    },
  });
};
app.post("/GetGameUrl.php", handleGetGameUrlPhp);
app.post("/api/GetGameUrl.php", handleGetGameUrlPhp);
app.post("/api/getgameurl.php", handleGetGameUrlPhp);
const sendProviderWalletCallbackResponse = (res, { httpStatus = 200, code = 0, msg = "Success", data = {} } = {}) => {
  const payload = {
    code: toNum(code, 0),
    msg: String(msg || "Success"),
    message: String(msg || "Success"),
    msgCode: toNum(code, 0),
    serviceNowTime: nowIndiaSqlDateTime(),
    data: {
      ...(data && typeof data === "object" ? data : {}),
    },
  };
  return res.status(Math.max(200, toNum(httpStatus, 200))).json(payload);
};
const isCallPhpCallbackRequest = (req) => {
  const pathValue = String(req?.path || req?.originalUrl || "").trim().toLowerCase();
  return pathValue.endsWith("/call.php") || pathValue === "call.php";
};
const sendCallPhpCompatResponse = (
  res,
  {
    ok = true,
    msg = "Success",
    balance = 0,
    duplicate = false,
    extra = {},
  } = {}
) => {
  const normalizedBalance = normalizeMoneyAmount(balance);
  const payload = {
    code: ok ? 0 : 1,
    msg: String(msg || (ok ? "Success" : "Failed")),
    ...(ok || duplicate
      ? {
          balance: normalizedBalance,
          balance_inr: normalizedBalance,
          balance_pkr: normalizedBalance,
          balance_bdt: normalizedBalance,
        }
      : {}),
    ...(extra && typeof extra === "object" ? extra : {}),
  };
  return res.status(200).json(payload);
};
const isLikelyCallPhpSettlementPayload = (parsed) => {
  if (!parsed || typeof parsed !== "object") return false;
  return !!String(parsed.externalUserIdRaw || "").trim() && !!String(parsed.gameCode || "").trim() && !!parsed.hasSettlementPayload;
};
const handleProviderWalletCallback = (req, res) => {
  const parsed = parseProviderWalletPayload(req);
  const isCallPhp = isCallPhpCallbackRequest(req);
  const authState = verifyProviderWalletAuth(req, parsed);
  // req.ip honours "trust proxy"; X-Forwarded-For alone is attacker controlled.
  const callbackIp = String(req.ip || req.socket?.remoteAddress || "").replace(/^::ffff:/, "");
  const allowCallPhpWithoutAuth =
    isCallPhp &&
    isLikelyCallPhpSettlementPayload(parsed) &&
    (CALLBACK_ALLOW_NO_AUTH_FOR_CALL_PHP || PROVIDER_CALLBACK_IPS.has(callbackIp));
  if (!authState.ok && !allowCallPhpWithoutAuth) {
    console.warn(`[casino-callback] rejected unauthenticated ${req.method} ${req.path} from ${callbackIp}`);
    if (isCallPhp) {
      return sendCallPhpCompatResponse(res, {
        ok: false,
        msg: authState.message || "Authentication failed",
      });
    }
    return sendProviderWalletCallbackResponse(res, {
      httpStatus: 401,
      code: 8,
      msg: authState.message || "Authentication failed",
      data: {
        hint: "Authentication headers required (X-API-Token, X-Secret-Key) or valid provider agent/token.",
      },
    });
  }

  if (!parsed.externalUserIdRaw) {
    if (isCallPhp) {
      return sendCallPhpCompatResponse(res, { ok: false, msg: "Missing field: user_id" });
    }
    return sendProviderWalletCallbackResponse(res, {
      code: 8,
      msg: "Player account is required",
      data: {
        action: parsed.action,
      },
    });
  }
  if (isCallPhp) {
    if (!String(parsed.gameCode || "").trim()) {
      return sendCallPhpCompatResponse(res, { ok: false, msg: "Missing field: game_code" });
    }
    if (!String(parsed.providerTxnId || "").trim()) {
      return sendCallPhpCompatResponse(res, { ok: false, msg: "Missing field: serial_number" });
    }
  }

  const resolved = resolveProviderUserFromExternalId(parsed.externalUserIdRaw);
  if (!resolved?.user) {
    if (isCallPhp) {
      return sendCallPhpCompatResponse(res, {
        ok: false,
        msg: "User not found in database",
      });
    }
    return sendProviderWalletCallbackResponse(res, {
      code: 8,
      msg: "Player account not found",
      data: {
        externalUserId: sanitizeProviderAccountId(parsed.externalUserIdRaw, 32),
      },
    });
  }

  const providerCfg = readProviderApiSettings();
  const providerName = String(parsed.providerName || providerCfg.providerAgent || "provider").trim();
  cacheProviderPlayerMapping({
    externalUserId: resolved.externalUserId,
    userId: resolved.user.id,
    username: resolved.user.username,
    providerName,
  });

  const relatedTxnKey = parsed.rollbackReferenceTxnId
    ? buildProviderTxnKey({
      action: "reference",
      providerTxnId: parsed.rollbackReferenceTxnId,
      externalUserId: resolved.externalUserId,
      providerRoundId: parsed.providerRoundId,
      gameCode: parsed.gameCode,
      amount: parsed.amount,
      nonce: "",
    })
    : "";
  const txnKey = buildProviderTxnKey({
    action: parsed.action,
    providerTxnId: parsed.providerTxnId,
    externalUserId: resolved.externalUserId,
    providerRoundId: parsed.providerRoundId,
    gameCode: parsed.gameCode,
    amount: parsed.amount,
    nonce: parsed.requestNonce,
  });

  const operationResult = applyProviderWalletOperationTx({
    user: resolved.user,
    action: parsed.action,
    amount: parsed.amount,
    txnKey,
    providerTxnId: parsed.providerTxnId,
    providerRoundId: parsed.providerRoundId,
    rollbackReferenceTxnId: parsed.rollbackReferenceTxnId,
    relatedTxnKey,
    externalUserId: resolved.externalUserId,
    gameCode: parsed.gameCode,
    vendorCode: parsed.vendorCode,
    providerName,
    requestIp: getClientIp(req),
    requestJson: safeJsonStringify(parsed.rawBody, "{}"),
    responseJson: "{}",
  });

  const responseData = {
    balance: normalizeMoneyAmount(operationResult.balance),
    playerId: resolved.externalUserId,
    userId: resolved.user.id,
    username: resolved.user.username,
    action: parsed.action,
    transactionId: parsed.providerTxnId || txnKey,
    roundId: parsed.providerRoundId || "",
    gameCode: parsed.gameCode || "",
    vendorCode: parsed.vendorCode || "",
    duplicate: !!operationResult.duplicate,
  };

  const responseCode = operationResult.ok ? 0 : toNum(operationResult.code, 9);
  const responseMsg = operationResult.msg || (operationResult.ok ? "Success" : "Failed");
  if (txnKey) {
    const responseJson = safeJsonStringify(
      {
        code: responseCode,
        msg: responseMsg,
        data: responseData,
      },
      "{}"
    );
    providerTxUpdateResponseStmt.run(responseJson, nowIso(), txnKey);
  }

  if (isCallPhp) {
    const ok = operationResult.ok;
    const duplicate = !!operationResult.duplicate;
    const safeMsg = duplicate ? "Success (duplicate)" : ok ? "Success" : responseMsg;
    return sendCallPhpCompatResponse(res, {
      ok,
      duplicate,
      msg: safeMsg,
      balance: normalizeMoneyAmount(operationResult.balance),
      extra: {
        action: parsed.action,
      },
    });
  }

  return sendProviderWalletCallbackResponse(res, {
    code: responseCode,
    msg: responseMsg,
    data: responseData,
  });
};
app.use(["/call.php", "/api/call.php"], express.text({ type: "text/plain", limit: API_BODY_LIMIT }), (req, _res, next) => {
  if (typeof req.body === "string") {
    const parsed = safeParse(req.body, null);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      req.body = parsed;
    }
  }
  return next();
});
app.all(
  ["/api/provider/wallet", "/api/provider/callback", "/api/casino/provider/wallet", "/call.php", "/api/call.php"],
  handleProviderWalletCallback
);
app.get("/api/provider-api-status", ownerOnly, (_req, res) => {
  const cfg = readProviderApiSettings();
  res.json(
    env("", {
      enabled: !!cfg.enabled,
      configured: providerApiActive(cfg),
      authMode: cfg.authMode || "legacy_keys",
      apiUrl: cfg.apiUrl || "",
      hasApiToken: !!cfg.apiToken,
      hasSecretKey: !!cfg.secretKey,
      hasProviderAgent: !!cfg.providerAgent,
      hasProviderToken: !!cfg.providerToken,
      hasProviderSecret: !!cfg.providerSecret,
      signatureAlgorithm: cfg.signatureAlgorithm || "sha256",
      hasBearerToken: !!cfg.bearerToken,
      authHeaderName: cfg.authHeaderName || "Authorization",
      authHeaderPrefix: cfg.authHeaderPrefix || "Bearer",
      refreshEnabled: !!cfg.refreshEnabled,
      refreshUrl: cfg.refreshUrl || "",
      refreshMethod: cfg.refreshMethod || "POST",
      refreshTokenPath: cfg.refreshTokenPath || "data.token",
      resellerPrefix: cfg.resellerPrefix || "",
      appendPrefixToUserId: !!cfg.appendPrefixToUserId,
      returnUrl: cfg.returnUrl || "",
      defaultVendorCode: cfg.defaultVendorCode || 0,
      settingsFile: "data_store/provider_api_settings.json",
      walletCallbackRoutes: ["/api/provider/wallet", "/api/provider/callback", "/api/casino/provider/wallet", "/call.php", "/api/call.php"],
    })
  );
});
app.get("/api/get-casino-data-by-id/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM casino_games WHERE id=? OR identifier=?").get(req.params.id, req.params.id);
  if (!row) return res.status(404).json(env("Game not found", {}, true, 404));
  if (isCasinoGameManuallyDisabled(row?.identifier || row?.id)) {
    return res.status(404).json(env("Game not found", {}, true, 404));
  }
  if (isCasinoGameHiddenByHealth(row?.identifier || row?.id)) {
    return res.status(404).json(env("Game not found", {}, true, 404));
  }
  const normalized = normalizeCasinoGameRecord({ ...row, _id: row.id, id: row.id });
  return res.json(env("", normalized || row));
});
app.get("/api/get-casino-market/:slug", (req, res) => res.json({ success: true, data: { slug: req.params.slug, market: [] } }));
app.get("/api/html-cards/:type/:mid", (req, res) => res.type("text/html").send(`<div style="padding:12px;font-family:Arial,sans-serif;">No result data for ${req.params.type}/${req.params.mid}</div>`));
app.get("/api/done-results/:matchid", (req, res) => {
  const matchId = String(req.params?.matchid || "").trim();
  const snap = loadSnapshot(`done-results/${matchId}`);
  if (snap) return res.json(snap);
  return res.json(env("", { docs: [], totalDocs: 0, limit: 50, totalPages: 1, page: 1, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null }));
});
const parseCasinoGameCodeListInput = (input = {}) => {
  const src = input && typeof input === "object" ? input : {};
  const values = [];
  const push = (value) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      for (const item of value) push(item);
      return;
    }
    const text = String(value || "").trim();
    if (!text) return;
    if (text.includes(",")) {
      for (const part of text.split(",")) push(part);
      return;
    }
    values.push(text);
  };
  push(src.gameCode);
  push(src.code);
  push(src.identifier);
  push(src.gameCodes);
  push(src.codes);
  const out = [];
  const seen = new Set();
  for (const value of values) {
    const normalized = normalizeObjectKey(value);
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    out.push(normalized);
  }
  return out;
};
const mapCasinoDisabledGameEntries = (store) =>
  Object.entries(store?.byCode || {})
    .filter(([, row]) => !!row?.disabled)
    .map(([gameCode, row]) => ({
      gameCode,
      disabled: true,
      reason: String(row?.reason || "").trim(),
      updatedAt: row?.updatedAt || null,
    }))
    .sort((a, b) => String(a.gameCode || "").localeCompare(String(b.gameCode || "")));
app.get("/api/disable-casino-games", (req, res) => {
  const store = readCasinoGameControlStore();
  const disabledGames = mapCasinoDisabledGameEntries(store);
  const queryCodes = parseCasinoGameCodeListInput(req.query || {});
  if (queryCodes.length) {
    const status = queryCodes.map((gameCode) => {
      const row = store?.byCode?.[gameCode];
      return {
        gameCode,
        disabled: !!row?.disabled,
        reason: String(row?.reason || "").trim(),
        updatedAt: row?.updatedAt || null,
      };
    });
    return res.json(env("", { status, total: status.length, disabledCount: status.filter((x) => x.disabled).length }));
  }
  return res.json(
    env("", {
      disabledGames,
      disabledCount: disabledGames.length,
      controlsUpdatedAt: store?.updatedAt || null,
      controlsFile: "data_store/casino_game_controls.json",
      requireWorkingGames: CASINO_REQUIRE_WORKING_GAMES,
    })
  );
});
const requireOwnerForCasinoControls = (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) {
    res.status(401).json(env("Unauthorized", {}, true, 401));
    return null;
  }
  const authRole = reqAuthRole(req, authUser.role);
  if (!isOwnerPanelRole(authRole)) {
    res.status(403).json(env("Access denied", {}, true, 403));
    return null;
  }
  return { authUser, authRole };
};
const updateCasinoDisabledGamesByRequest = (req, res, disableValue) => {
  const auth = requireOwnerForCasinoControls(req, res);
  if (!auth) return;
  const codes = parseCasinoGameCodeListInput(req.body || {});
  if (!codes.length) {
    return res.status(400).json(env("gameCode/gameCodes is required", {}, true, 400));
  }
  const disabled = !!disableValue;
  const reason = String(req.body?.reason || req.body?.message || "").trim();
  const updated = [];
  for (const code of codes) {
    const changed = updateCasinoGameManualDisableState(code, disabled, reason);
    if (changed) {
      updated.push({
        gameCode: code,
        disabled,
      });
    }
  }
  const store = readCasinoGameControlStore();
  const disabledGames = mapCasinoDisabledGameEntries(store);
  return res.json(
    env(disabled ? "Casino game(s) disabled" : "Casino game(s) enabled", {
      success: true,
      action: disabled ? "disable" : "enable",
      updated,
      disabledCount: disabledGames.length,
      disabledGames,
    })
  );
};
app.post("/api/disable-casino-games", (req, res) => {
  const hasExplicitDisable = req.body?.disable !== undefined || req.body?.disabled !== undefined || req.body?.isDisabled !== undefined;
  const disable =
    req.body?.disable !== undefined
      ? toBool(req.body.disable)
      : req.body?.disabled !== undefined
        ? toBool(req.body.disabled)
        : req.body?.isDisabled !== undefined
          ? toBool(req.body.isDisabled)
          : true;
  return updateCasinoDisabledGamesByRequest(req, res, hasExplicitDisable ? disable : true);
});
app.post("/api/enable-casino-games", (req, res) => updateCasinoDisabledGamesByRequest(req, res, false));
const parseDateToMsSafe = (value) => {
  const ms = Date.parse(String(value || "").trim());
  return Number.isFinite(ms) ? ms : 0;
};
const filterCasinoProviderRowsByActor = (rows, authUser, authRole) => {
  if (isOwnerPanelRole(authRole)) return rows;
  const visibleIds = getVisibleUserIdsForActor(authUser, authRole);
  if (!(visibleIds instanceof Set)) return rows;
  return rows.filter((row) => visibleIds.has(String(row?.user_id || "")));
};
app.get("/api/casino-bet-history", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);

  const page = Math.max(1, toNum(req.query?.page, 1));
  const limit = Math.min(200, Math.max(1, toNum(req.query?.limit, 20)));
  const fetchLimit = Math.min(20000, Math.max(500, page * limit + 300));

  const targetUserId = String(req.query?.userId || req.query?.uid || "").trim();
  const targetUsername = String(req.query?.username || "").trim();
  let target = null;
  if (targetUserId) target = getUserById(targetUserId);
  if (!target && targetUsername) target = getUserByUsername(targetUsername) || getUserByUsernameCaseInsensitiveStmt.get(targetUsername);

  if (target && !canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }

  let rows = target ? providerTxByUserStmt.all(target.id, fetchLimit) : providerTxRecentAllStmt.all(fetchLimit);
  if (!target) rows = filterCasinoProviderRowsByActor(rows, authUser, authRole);

  const actionFilter = String(req.query?.action || req.query?.type || "").trim().toLowerCase();
  const gameCodeFilter = String(req.query?.gameCode || "").trim().toLowerCase();
  const startMs = parseDateToMsSafe(req.query?.startDate);
  const endMs = parseDateToMsSafe(req.query?.endDate);

  rows = rows.filter((row) => {
    const rowAction = String(row?.action || "").trim().toLowerCase();
    const rowGameCode = String(row?.game_code || "").trim().toLowerCase();
    const rowMs = parseDateToMsSafe(row?.created_at);
    if (actionFilter && rowAction !== actionFilter) return false;
    if (gameCodeFilter && !rowGameCode.includes(gameCodeFilter)) return false;
    if (startMs && rowMs && rowMs < startMs) return false;
    if (endMs && rowMs && rowMs > endMs + 24 * 60 * 60 * 1000 - 1) return false;
    return true;
  });

  const items = rows.map((row) => mapCasinoProviderTxRow(row));
  const payload = buildPaginatedItems(items, page, limit);
  return res.json(env("", payload));
});
app.get("/api/casino-account-statement", (req, res) => {
  const authUser = reqAuthUser(req);
  if (!authUser) return res.status(401).json(env("Unauthorized", {}, true, 401));
  const authRole = reqAuthRole(req, authUser.role);

  const fetchLimit = Math.min(20000, Math.max(300, toNum(req.query?.limit, 5000)));
  const targetUserId = String(req.query?.userId || req.query?.uid || "").trim();
  const targetUsername = String(req.query?.username || "").trim();
  let target = null;
  if (targetUserId) target = getUserById(targetUserId);
  if (!target && targetUsername) target = getUserByUsername(targetUsername) || getUserByUsernameCaseInsensitiveStmt.get(targetUsername);

  if (target && !canActorAccessTargetUser(authUser, authRole, target)) {
    return res.status(403).json(env("Access denied", {}, true, 403));
  }

  let rows = target ? providerTxByUserStmt.all(target.id, fetchLimit) : providerTxRecentAllStmt.all(fetchLimit);
  if (!target) rows = filterCasinoProviderRowsByActor(rows, authUser, authRole);

  const startMs = parseDateToMsSafe(req.query?.startDate);
  const endMs = parseDateToMsSafe(req.query?.endDate);
  rows = rows.filter((row) => {
    const rowMs = parseDateToMsSafe(row?.created_at);
    if (startMs && rowMs && rowMs < startMs) return false;
    if (endMs && rowMs && rowMs > endMs + 24 * 60 * 60 * 1000 - 1) return false;
    return true;
  });

  const items = rows.map((row) => {
    const action = String(row?.action || "").trim().toLowerCase();
    const amount = normalizeMoneyAmount(row?.amount);
    const signedAmount = action === "debit" ? -amount : amount;
    return {
      _id: row?.id || "",
      userId: row?.user_id || "",
      username: row?.username || "",
      externalUserId: row?.external_user_id || "",
      transactionId: row?.provider_txn_id || row?.txn_key || "",
      roundId: row?.provider_round_id || "",
      action,
      amount: signedAmount,
      absoluteAmount: amount,
      beforeBalance: normalizeMoneyAmount(row?.before_balance),
      afterBalance: normalizeMoneyAmount(row?.after_balance),
      gameCode: row?.game_code || "",
      providerName: row?.provider_name || "",
      status: row?.status || "",
      createdAt: row?.created_at || null,
      updatedAt: row?.updated_at || null,
    };
  });

  const totalIn = items
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + normalizeMoneyAmount(item.amount), 0);
  const totalOut = items
    .filter((item) => item.amount < 0)
    .reduce((sum, item) => sum + Math.abs(normalizeMoneyAmount(item.amount)), 0);
  const summary = {
    count: items.length,
    totalCredit: normalizeMoneyAmount(totalIn),
    totalDebit: normalizeMoneyAmount(totalOut),
    net: normalizeMoneyAmount(totalIn - totalOut),
  };

  return res.json(env("", { items, summary }));
});
app.get("/api/userMessage.json", (_req, res) => {
  const snap = loadSnapshot("userMessage.json");
  if (snap) return res.json(snap);
  return res.json({ message: "User notification message", active: true, type: "info", title: "User Message" });
});
app.get("/api/userMessage", (_req, res) => {
  const snap = loadSnapshot("userMessage.json");
  if (snap) return res.json(snap);
  return res.json({ message: "User notification message", active: true, type: "info", title: "User Message" });
});
// The client opens WhatsApp directly; nothing is sent from the server, so do
// not pretend a message was queued.
app.post("/api/send-whatsapp-message", (_req, res) =>
  res.status(410).json(env("WhatsApp messaging from the server is not available", { disabled: true }, true, 410)));
app.get("/api/zplay/events/matchDetails/:oldgmid", (req, res) => res.json({ success: true, data: { oldgmid: req.params.oldgmid } }));
app.get("/api/diamond/score", (_req, res) => res.json({ score_url: null }));

app.all(/^\/api\/.+/, trySnapshot);

const sendHtml = (res, file) => {
  if (!fs.existsSync(file)) return res.status(404).type("text/plain").send("Not found");
  let html = fs.readFileSync(file, "utf8");
  html = html
    .replace(/ambaniexchange/gi, "King777")
    .replace(/ambani exchange/gi, "King777")
    .replace(/reddy ?anna/gi, "King777");
  // One stylesheet for every page (King777 Glass UI).
  if (!html.includes("/css/king777-glass.css")) {
    html = html.includes("</head>")
      ? html.replace("</head>", '  <link rel="stylesheet" href="/css/king777-glass.css?v=1" />\n  </head>')
      : html;
  }
  if (!html.includes("king777-admin-topbar.js") && html.includes("</head>")) {
    html = html.replace("</head>", '  <script src="/js/king777-admin-topbar.js?v=1" defer></script>\n  </head>');
  }
  html = html.replace(/\/static\/js\/bundle\.js(?:\?[^"']*)?/g, "/static/js/bundle.js?v=king777-2");
  const marker = '<script src="/url-rewrite.js"></script>';
  if (!html.includes(marker)) html = html.includes("</head>") ? html.replace("</head>", `  ${marker}\n  </head>`) : `${marker}\n${html}`;
  // Keep content-type stable for strict cPanel availability checks.
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "no-cache");
  res.end(Buffer.from(html, "utf8"));
};

const serveDecoratedHtmlAsset = (req, res, next) => {
  if (req.method !== "GET" || !String(req.path || "").toLowerCase().endsWith(".html")) return next();
  const relativePath = String(req.path || "").replace(/^\/+/, "");
  const isAdminAsset = relativePath.toLowerCase().startsWith("admin/");
  const baseDir = isAdminAsset ? ADMIN_DIR : ROOT;
  const localPath = isAdminAsset ? path.join(ADMIN_DIR, relativePath.slice("admin/".length)) : path.join(ROOT, relativePath);
  const resolvedBase = path.resolve(baseDir);
  const resolvedPath = path.resolve(localPath);
  if (!resolvedPath.startsWith(`${resolvedBase}${path.sep}`) || !fs.existsSync(resolvedPath)) return next();
  return sendHtml(res, resolvedPath);
};
app.use(serveDecoratedHtmlAsset);

const serveBrandedScript = (req, res, next) => {
  if (req.method !== "GET" || !String(req.path || "").toLowerCase().endsWith(".js")) return next();
  const relativeScriptPath = String(req.originalUrl || `${String(req.baseUrl || "")}${String(req.path || "")}`)
    .split("?")[0]
    .replace(/^\/+/, "");
  const file = path.join(ROOT, relativeScriptPath);
  const resolved = path.resolve(file);
  if (!resolved.startsWith(`${path.resolve(ROOT)}${path.sep}`) || !fs.existsSync(resolved)) return next();
  let script = fs.readFileSync(resolved, "utf8");
  script = script
    .replace(/(["'])ambaniexchange\1/gi, "$1King777$1")
    .replace(/(["'])ambani exchange\1/gi, "$1King777$1")
    .replace(/(["'])reddy ?anna\1/gi, "$1King777$1")
    .replace(/(["'])riwanbhaixxx\1/gi, "$1kingadmin$1")
    .replace(/ambaniexchange@gmail\.com/gi, "support@king777.com");
  res.type("application/javascript").set("Cache-Control", "no-cache").send(script);
};
app.use("/static/js", serveBrandedScript);

const staticAssetSetHeaders = (res, filePath) => {
  const ext = String(path.extname(filePath) || "").toLowerCase();
  if (!ext || ext === ".html") {
    res.setHeader("Cache-Control", "no-cache");
    return;
  }
  if ([".js", ".css"].includes(ext)) {
    res.setHeader("Cache-Control", "no-cache");
    return;
  }
  res.setHeader(
    "Cache-Control",
    `public, max-age=${STATIC_CACHE_SECONDS}, stale-while-revalidate=${Math.max(60, STATIC_CACHE_SECONDS)}`
  );
};
const snapshotAssetSetHeaders = (res, filePath) => {
  const ext = String(path.extname(filePath) || "").toLowerCase();
  if (!ext || ext === ".html") {
    res.setHeader("Cache-Control", "no-cache");
    return;
  }
  res.setHeader("Cache-Control", `public, max-age=${SNAPSHOT_STATIC_CACHE_SECONDS}`);
};
app.use(
  express.static(ROOT, {
    index: false,
    redirect: false,
    etag: true,
    lastModified: true,
    maxAge: STATIC_CACHE_SECONDS * 1000,
    setHeaders: staticAssetSetHeaders,
  })
);
app.use(
  "/admin",
  express.static(ADMIN_DIR, {
    index: false,
    redirect: false,
    etag: true,
    lastModified: true,
    maxAge: STATIC_CACHE_SECONDS * 1000,
    setHeaders: staticAssetSetHeaders,
  })
);
app.use(
  "/api.ambaniexchange.org",
  express.static(SNAPSHOT_ROOT, {
    index: false,
    redirect: false,
    etag: true,
    lastModified: true,
    maxAge: SNAPSHOT_STATIC_CACHE_SECONDS * 1000,
    setHeaders: snapshotAssetSetHeaders,
  })
);
app.use((req, res, next) => {
  // If a static asset is missing, return 404 text instead of HTML fallback.
  if (req.path.startsWith("/api") || req.path.startsWith("/otp")) return next();
  if (!path.extname(req.path)) return next();
  return res.status(404).type("text/plain").send("Asset not found");
});
app.get("/", (_req, res) => sendHtml(res, path.join(ROOT, "dash.html")));
app.get("/dash", (_req, res) => sendHtml(res, path.join(ROOT, "dash.html")));
app.get(["/admin", "/admin/"], (_req, res) => res.redirect(302, "/admin/dashboard"));
app.get("/admin/login", (_req, res) => sendHtml(res, path.join(ADMIN_DIR, "login.html")));
// These pages have no navigation of their own: the main admin panel shows them
// (inside its one sidebar layout) from /admin/embed/<page>. /admin/dashboard,
// /admin/add-user and /admin/coin-ledger are main-panel routes.
const EMBEDDED_ADMIN_PAGES = {
  dashboard: "dashboard.html",
  "add-user": "add-user.html",
  "coin-ledger": "coin-ledger.html",
};
app.get("/admin/embed/:page", (req, res) => {
  const file = EMBEDDED_ADMIN_PAGES[String(req.params.page || "")];
  if (!file) return res.status(404).type("text/plain").send("Not found");
  return sendHtml(res, path.join(ADMIN_DIR, file));
});
app.get("/admin/client-onboarding", (_req, res) => res.redirect(302, "/admin/add-user"));
app.get("/signup", (_req, res) => res.redirect(302, "/admin/add-user"));
app.get("/admin/add-admin-panel", (_req, res) => res.redirect(302, "/admin/list-clients"));
app.get("/admin/add-admin", (_req, res) => res.redirect(302, "/admin/list-clients"));
app.get("/admin/manage-admins", (_req, res) => res.redirect(302, "/admin/list-clients"));
app.get("/add-admin", (_req, res) => res.redirect(302, "/admin/list-clients"));
app.get("/list-clients", (_req, res) => res.redirect(302, "/admin/list-clients"));
app.get("/add-user", (_req, res) => res.redirect(302, "/admin/add-user"));
app.get("/forgot-password", (_req, res) => sendHtml(res, path.join(ROOT, "forgot-password.html")));
app.get(/^\/(?!api\/|otp\/|ipapi\/|url-rewrite\.js).*/, (req, res, next) => {
  if (path.extname(req.path)) return next();
  return sendHtml(res, path.join(ROOT, "dash.html"));
});
app.use((req, res) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/otp")) return res.status(404).json(env("Endpoint not found", {}, true, 404));
  return sendHtml(res, path.join(ROOT, "dash.html"));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Local king777 server running on http://${HOST === "0.0.0.0" ? "localhost" : HOST}:${PORT}`);
});
server.requestTimeout = SERVER_REQUEST_TIMEOUT_MS;
server.keepAliveTimeout = SERVER_KEEP_ALIVE_TIMEOUT_MS;
server.headersTimeout = SERVER_HEADERS_TIMEOUT_MS;
server.maxRequestsPerSocket = SERVER_MAX_REQUESTS_PER_SOCKET;
const shutdown = () => {
  try {
    server.close(() => {
      db.close();
      process.exit(0);
    });
  } catch {
    process.exit(0);
  }
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

