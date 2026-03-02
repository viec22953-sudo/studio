---
description: How to deploy the Win-Win Window Tint site to production via Firebase App Hosting
---

# Deployment Workflow

## Technical Setup
- **Project**: Win-Win Window Tint (`studio` repository)
- **Stack**: Next.js (App Router) + TypeScript
- **Source Control**: GitHub (`viec22953-sudo/studio`)
- **Production Hosting**: Firebase App Hosting (linked to `main` branch)
- **Custom Domain**: `winwinwindowtint.com` (served from root `/`)

## Config Rules
- `next.config.ts` must use `output: 'standalone'` (required by Firebase App Hosting)
- Do **NOT** add `basePath` or `assetPrefix` — the site is served from `/`
- No GitHub Pages workflow — deployment is handled entirely by Firebase

## Deploy Steps
1. Make code changes
2. Commit and push to `main`:
```bash
git add -A && git commit -m "description" && git push
```
3. Firebase App Hosting automatically detects the push and starts a new build/rollout

## Checking Build Status
- Use the Firebase MCP tools (`apphosting_list_backends`, `apphosting_fetch_logs`) to check build status
- "Status 51" errors usually mean a `package-lock.json` mismatch or TypeScript error

## Troubleshooting
- If build fails, check Cloud Build logs via Firebase Console or MCP tools
- Ensure `package-lock.json` is committed and in sync with `package.json`
- Run `npm run build` locally to verify before pushing
