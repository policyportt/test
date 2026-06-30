# Lumen

A simple, beautiful single-page website. Pure HTML, CSS, and JavaScript — no build step, no dependencies.

## Develop locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages

This is a static site, so GitHub Pages serves the files directly from the repo —
no build step. The `.nojekyll` file tells Pages to skip Jekyll processing and
serve the files as-is.

### One-time setup

1. Push your changes to the `main` branch (see below).
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. Wait ~1 minute. Your site goes live at:

   ```
   https://policyportt.github.io/test/
   ```

After this, every push to `main` automatically redeploys the site.

### Push changes

```bash
git add -A
git commit -m "Update site"
git push
```
