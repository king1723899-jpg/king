# cPanel + VPS Deploy Notes

## cPanel (Node.js App)
1. Upload this full project folder.
2. In Node.js App Manager:
   - `Application startup file`: `server.js`
   - `Application mode`: `production`
   - `Node version`: 18+ (recommended 20+)
3. Add environment variables from `.env.example` (use real values).
4. Run `npm install` from cPanel Node.js UI, then restart app.
5. Ensure domain/proxy points to app port.

## VPS Panel (PM2)
1. Copy project to server.
2. Install dependencies:
```bash
npm install --omit=dev
```
3. Set env values in panel or `.env`.
4. Start with PM2:
```bash
pm2 start ecosystem.config.cjs
pm2 save
```

## Important Paths (renamed for simplicity)
- `admin_panel/` -> admin static files.
- `api_data/` -> API snapshot fallback files.
- `data_store/` -> SQLite DB + SQL files.
- `source_code/` -> editable React source snapshot.
