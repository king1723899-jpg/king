-- Core schema for a fresh install. Every statement is idempotent; server.js
-- adds further tables and columns at startup.

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  level INTEGER NOT NULL DEFAULT 1,
  parent_id TEXT,
  session_id INTEGER,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  upline_commission REAL NOT NULL DEFAULT 0,
  min_bet REAL NOT NULL DEFAULT 0,
  max_bet REAL NOT NULL DEFAULT 0,
  credit_limit REAL NOT NULL DEFAULT 0,
  partnership_remaining REAL NOT NULL DEFAULT 100
);

CREATE TABLE IF NOT EXISTS matches (
  match_id INTEGER PRIMARY KEY,
  sport_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  competition_id INTEGER,
  competition_name TEXT,
  match_datetime TEXT,
  in_play INTEGER NOT NULL DEFAULT 0,
  has_bookmaker INTEGER NOT NULL DEFAULT 0,
  has_fancy INTEGER NOT NULL DEFAULT 0,
  has_fancy1 INTEGER NOT NULL DEFAULT 0,
  has_tv INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'OPEN',
  section_json TEXT,
  external_json TEXT,
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
  updated_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS admin_client_partnership (
  id TEXT PRIMARY KEY,
  general_id TEXT NOT NULL UNIQUE,
  partnership_type TEXT NOT NULL,
  remark TEXT,
  transaction_code TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (general_id) REFERENCES admin_client_general(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS admin_feature_permissions (
  user_id TEXT PRIMARY KEY,
  permissions_json TEXT NOT NULL,
  created_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS bank_accounts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL,
  data_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  match_id INTEGER NOT NULL,
  market_id TEXT NOT NULL,
  selection_id INTEGER NOT NULL,
  selection_name TEXT NOT NULL,
  odds REAL NOT NULL,
  volume REAL NOT NULL DEFAULT 0,
  stack REAL NOT NULL,
  pnl REAL NOT NULL DEFAULT 0,
  exposure REAL NOT NULL DEFAULT 0,
  market_name TEXT NOT NULL,
  is_back INTEGER NOT NULL DEFAULT 1,
  event_id INTEGER,
  type TEXT NOT NULL DEFAULT 'match',
  current_market_odds REAL,
  ip_address TEXT,
  match_name TEXT,
  bet_on TEXT NOT NULL DEFAULT 'MATCH_ODDS',
  gtype TEXT NOT NULL DEFAULT 'match',
  odds_type TEXT,
  status TEXT NOT NULL DEFAULT 'unsettled',
  created_at TEXT NOT NULL,
  settlement_result TEXT,
  settlement_net REAL,
  settled_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS casino_games (
  id TEXT PRIMARY KEY,
  identifier TEXT NOT NULL UNIQUE,
  provider_id TEXT,
  provider TEXT,
  game_name TEXT NOT NULL,
  image_url TEXT,
  live_category TEXT,
  slot_category TEXT,
  homepage_code INTEGER NOT NULL DEFAULT 1
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

CREATE TABLE IF NOT EXISTS deposits (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL,
  amount REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  remark TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  data_json TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS fancies (
  fancy_id TEXT PRIMARY KEY,
  match_id INTEGER NOT NULL,
  gtype TEXT NOT NULL,
  runner_name TEXT NOT NULL,
  sr_no INTEGER NOT NULL,
  min_stake REAL NOT NULL DEFAULT 100,
  max_stake REAL NOT NULL DEFAULT 50000,
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  updated_at TEXT NOT NULL,
  FOREIGN KEY (match_id) REFERENCES matches(match_id)
);

CREATE TABLE IF NOT EXISTS markets (
  market_id TEXT PRIMARY KEY,
  match_id INTEGER NOT NULL,
  market_name TEXT NOT NULL,
  gtype TEXT NOT NULL,
  odds_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'OPEN',
  runners_json TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (match_id) REFERENCES matches(match_id)
);

CREATE TABLE IF NOT EXISTS otp_codes (
  phone TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  verified INTEGER NOT NULL DEFAULT 0,
  expires_at INTEGER NOT NULL,
  created_at TEXT NOT NULL
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

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  refresh_token TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sports (
  sport_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_partnerships (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  partner_id TEXT NOT NULL,
  share_percentage REAL NOT NULL CHECK (share_percentage >= 0 AND share_percentage <= 100),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id, partner_id)
);

CREATE TABLE IF NOT EXISTS user_profiles (
  user_id TEXT PRIMARY KEY,
  data_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS wallets (
  user_id TEXT PRIMARY KEY,
  balance REAL NOT NULL DEFAULT 0,
  exposer REAL NOT NULL DEFAULT 0,
  casino_exposer REAL NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_users_parent_id ON users(parent_id);

CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

CREATE INDEX IF NOT EXISTS idx_matches_sport ON matches(sport_id);

CREATE INDEX IF NOT EXISTS idx_admin_client_general_created_at ON admin_client_general(created_at);

CREATE INDEX IF NOT EXISTS idx_admin_client_partnership_general_id ON admin_client_partnership(general_id);

CREATE INDEX IF NOT EXISTS idx_admin_feature_permissions_created_by ON admin_feature_permissions(created_by);

CREATE INDEX IF NOT EXISTS idx_bets_user_match ON bets(user_id, match_id);

CREATE INDEX IF NOT EXISTS idx_casino_provider_player_map_user_id ON casino_provider_player_map(user_id);

CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_created_at ON casino_provider_transactions(created_at);

CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_provider_txn_id ON casino_provider_transactions(provider_txn_id);

CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_round_id ON casino_provider_transactions(provider_round_id);

CREATE INDEX IF NOT EXISTS idx_casino_provider_transactions_user_id ON casino_provider_transactions(user_id);

CREATE INDEX IF NOT EXISTS idx_registration_codes_active ON registration_codes(is_active);

CREATE INDEX IF NOT EXISTS idx_user_partnerships_partner_id ON user_partnerships(partner_id);

CREATE INDEX IF NOT EXISTS idx_user_partnerships_user_id ON user_partnerships(user_id);
