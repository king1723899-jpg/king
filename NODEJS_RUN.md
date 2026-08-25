## Node.js Run Guide

### Start Server
```bash
node server.js
```

Server URL:
```text
http://localhost:3000
```

### Default Login
- User login (`/api/login`):
  - username: `riwanbhaixxx`
  - password: `riwanbhaixxx`
- Admin login (`/api/login-admin`):
  - username: `riwanbhaixxx`
  - password: `riwanbhaixxx`

### Registration Code
- Default code: `AMBANIEXCHANGEWINN`
- Required in register API body as:
  - `registrationCode`

### Generate Password Hash (Node only)
```bash
node data_store/generate_password_hash.js yourPassword
```

### Casino API Game URL Setup
- File: `data_store/casino_play_urls.json`
- Format:
```json
{
  "AVIATOR": "https://your-provider-domain.com/play?game=AVIATOR",
  "SWEETBONANZA": "https://your-provider-domain.com/play?game=SWEETBONANZA"
}
```
- Behavior:
  - If game code has URL in this file, game opens.
  - If URL missing, API returns `Not available` (no forced logout flow).
- Optional template env:
```bash
CASINO_PLAY_URL_TEMPLATE=https://your-provider-domain.com/play?game={gameCode}
```

### API Kit (single URL ready setup)
- File: `data_store/game_api_settings.json`
- Fastest setup:
  - set `"enabled": true`
  - set `"singleLaunchUrl": "https://your-api-kit-domain.com/launch"`
- If provider needs `gameCode` in URL, use either:
  - `"launchUrlTemplate": "https://your-api-kit-domain.com/play/{encodedGameCode}"`
  - OR `"baseUrl": "https://your-api-kit-domain.com/play"` + `"gameCodeParam": "gameCode"`
- Optional catalog sync:
  - set `"catalogSyncEnabled": true`
  - set `"catalogUrl": "https://your-api-kit-domain.com/games"`
  - optional auto refresh controls:
    - `"autoSyncOnRequest": true`
    - `"cacheTtlSeconds": 180`
    - `"requestTimeoutMs": 20000`
  - optional manual trigger:
    - run `POST /api/sync-game-api-catalog`
    - force refresh: `POST /api/sync-game-api-catalog?force=1`
  - cache file: `data_store/game_api_catalog_cache.json`

### Provider API (GetGameUrl.php style)
- File: `data_store/provider_api_settings.json`
- Current flow:
  - `/api/get-cas-casino-play-url` first checks local play URL map / API kit config.
  - If not found, backend calls provider launch API using this file.
- Status endpoint:
  - `GET /api/provider-api-status`
- Import local provider game JSON files (names/images/game codes):
  - put JSON files in `api_data/provider_agent_files/Chub94/` or `data_store/provider_game_lists/`
  - run `POST /api/import-provider-local-catalog`
- Required fields in settings:
  - Legacy key mode:
    - `enabled`, `apiUrl`, `authMode="legacy_keys"`, `apiToken`, `secretKey`
  - Bearer mode:
    - `enabled`, `apiUrl`, `authMode="bearer"`, `bearerToken`
  - Optional bearer auto-refresh:
    - `refreshEnabled=true`
    - `refreshUrl`, `refreshMethod`, `refreshHeaders`, `refreshBody`, `refreshTokenPath`

### Casino Game Visibility / ON-OFF
- Auto health file: `data_store/casino_game_health.json`
- Manual control file: `data_store/casino_game_controls.json`
- APIs:
  - `GET /api/disable-casino-games` (list/status)
  - `POST /api/disable-casino-games` (disable; body supports `gameCode`/`gameCodes[]`)
  - `POST /api/enable-casino-games` (enable)
- Env:
  - `CASINO_HIDE_FAILED_GAMES=true`
  - `CASINO_FAILED_GAME_MIN_FAILS=1`
  - `CASINO_FAILED_GAME_HIDE_MINUTES=180`
  - `CASINO_REQUIRE_WORKING_GAMES=true`
  - `CASINO_WORKING_EVIDENCE_MAX_AGE_HOURS=720`

### Betting Locks
- APIs:
  - `POST /api/bet-lock`
  - `POST /api/bet-lock-granular`
  - `GET /api/match-bet-locks/:matchId`
  - `POST /api/users-lock`
- `placebet` now enforces user lock + match lock before accepting bet.

### Signup OTP Toggle
- Default behavior in current code: direct signup without OTP.
- Env switch:
  - `SIGNUP_REQUIRE_OTP=true` to force OTP verification again.

### SQL Files
- Node SQLite schema: `data_store/schema.sql`
- phpMyAdmin/MySQL auth schema: `data_store/phpmyadmin_auth_schema.sql`
