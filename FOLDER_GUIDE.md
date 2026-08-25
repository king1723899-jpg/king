# Folder Guide (Simple Order)

Use this as the main map of the project.

## 1) Core Backend
- `server.js`: Main Node/Express API + static server.
- `data_store/`: SQLite DB, schema, and local config files.
  - `data_store/site.db`: Runtime database.
  - `data_store/schema.sql`: DB structure.
  - `data_store/casino_play_urls.json`: GameCode -> Launch URL mapping.
  - `data_store/game_api_settings.json`: One-URL API kit config.
  - `data_store/game_api_catalog_cache.json`: Cached games from provider catalog sync.
  - `data_store/provider_api_settings.json`: Provider launch API credentials/settings (GetGameUrl-style).
  - `data_store/provider_game_lists/`: Optional local provider JSON catalog files for game names/images import.

## 2) Frontend Runtime (Live Files)
- `dash.html`: Main app shell.
- `admin_panel/`: Admin runtime HTML files.
- `static/`: Compiled React bundle (JS/CSS chunks).
- `css/`, `js/`, `imgs/`, `icon/`, `webfonts/`: Frontend assets used by live site.
- `assets/`: Clean local asset hub (vendor, fonts, images, downloads).
  - `assets/vendor/`: Third-party JS/CSS (owl carousel, pdfobject).
  - `assets/fonts/`: Local font CSS + font files.
  - `assets/images/`: All local image assets grouped by purpose.
  - `assets/downloads/`: Local downloadable files (APK, etc).
- `stream/`: Local stream helper HTML pages.

## 3) API Snapshot/Mirror Data
- `api_data/`: Saved API snapshot files used as local fallbacks.
- `api_data/provider_agent_files/`: Provider-supplied PHP reference files (kept for mapping/credentials reference).

## 4) Frontend Source Code (Editable Source)
- `source_code/wwwroot/Ambani/fair-react-stone/src/`: React source files.
- `source_code/wwwroot/Ambani/fair-react-stone/webpack/`: Build snapshot artifacts.

## 5) Cleanup Status
- Legacy domain-style mirror folders have been migrated to `assets/` + `stream/`.
- Runtime references now use local clean paths.
