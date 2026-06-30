# Lumen

A simple, beautiful single-page website. Pure HTML, CSS, and JavaScript — no build step, no dependencies.

## Develop locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to Vercel

This is a static site — Vercel serves the files as-is (no build command, no framework).

### Option A — Vercel CLI

```bash
npm i -g vercel   # if not already installed
vercel            # preview deploy (follow the prompts)
vercel --prod     # production deploy
```

When prompted:
- **Set up and deploy?** → Yes
- **Which scope?** → your account/team
- **Link to existing project?** → No (first time)
- **In which directory is your code located?** → `./`
- Build settings → accept the defaults (no build command needed)

### Option B — Git integration (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**. Every push to the main branch then deploys to production automatically.

## Configuration

`vercel.json` sets:
- `cleanUrls` — serve `/about` instead of `/about.html`
- Long-lived caching for `.css` / `.js` assets
- Baseline security headers
