-- Apply once to the MySQL mirror before enabling Sprint 2 mirroring.
ALTER TABLE users
  ADD COLUMN min_bet DECIMAL(18,2) NOT NULL DEFAULT 0,
  ADD COLUMN max_bet DECIMAL(18,2) NOT NULL DEFAULT 0,
  ADD COLUMN credit_limit DECIMAL(18,2) NOT NULL DEFAULT 0,
  ADD COLUMN partnership_remaining DECIMAL(7,2) NOT NULL DEFAULT 100;

ALTER TABLE bets
  ADD COLUMN settlement_result VARCHAR(16) NULL,
  ADD COLUMN settlement_net DECIMAL(18,2) NULL,
  ADD COLUMN settled_at DATETIME NULL;

CREATE TABLE IF NOT EXISTS user_partnerships (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) NOT NULL,
  partner_id VARCHAR(64) NOT NULL,
  share_percentage DECIMAL(7,2) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  UNIQUE KEY uq_user_partnership (user_id, partner_id),
  KEY idx_user_partnership_user (user_id),
  KEY idx_user_partnership_partner (partner_id)
);
