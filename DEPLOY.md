# Deploying PantherLoop to GitHub Pages

This project is already structured as a static site — all paths are relative and
all external libraries (React, Babel, Inter, Lucide) load from CDNs. `index.html`
at the repo root is the public landing hub.

## One-time setup

1. Push this folder to the repo:
   ```sh
   git remote add origin https://github.com/asadbekzoirov/panther-loop-proto.git
   git add -A && git commit -m "PantherLoop design system site"
   git branch -M main && git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → Save
3. Wait ~1 min. Site goes live at:
   `https://asadbekzoirov.github.io/panther-loop-proto/`

## Why the `.nojekyll` file matters

GitHub Pages runs Jekyll by default, and **Jekyll ignores any file or folder whose
name starts with `_`**. This system's compiled bundle is `_ds_bundle.js` — without
disabling Jekyll it would 404, breaking every component card, the UI kit, and the
templates. The empty **`.nojekyll`** file at the repo root turns Jekyll off so all
files (including `_`-prefixed ones) are served as-is. Keep it.

## What's served

- `/` → `index.html` — the design system hub
- `/guidelines/*.card.html` — foundation specimens (color, type, spacing, brand)
- `/components/<group>/*.card.html` — component previews
- `/ui_kits/pantherloop_app/` — the interactive 8-screen app gallery
- `/templates/<slug>/` — copyable starting templates

## Notes

- No build step is required — Pages serves the files directly.
- A custom domain can be set under Settings → Pages → Custom domain (adds a `CNAME` file).
- If you later add files the bundle depends on, they must NOT start with `_` unless
  `.nojekyll` is present (it is).
