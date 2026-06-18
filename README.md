# Cameo Advertising LLC — Website

Static marketing site for Cameo Advertising LLC: signage, wayfinding, fabrication, printing and fit-out across the UAE.

## Local preview

Open `index.html` in a browser, or run the included dev server:

```powershell
node local-server.js
```

Then visit [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Push to GitHub

From this folder:

```powershell
git init
git branch -M main
git remote add origin https://github.com/devamshh/cameo-project.git
git add .
git commit -m "Initial website release"
git push -u origin main
```

If the remote already has commits, pull first:

```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

GitHub will ask you to sign in. Use a [personal access token](https://github.com/settings/tokens) or `gh auth login` instead of your account password.

## Publish online (GitHub Pages)

After pushing to `main`:

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The included workflow (`.github/workflows/pages.yml`) deploys the site on every push to `main`

Your site will be available at:

`https://devamshh.github.io/cameo-project/`

## Project structure

- `index.html` — Home page
- `work.html`, `services.html`, `about.html`, `clients.html`, `contact.html` — Main pages
- `styles.css`, `script.js` — Shared styles and interactions
- `images/` — Brand assets and project gallery
- `local-server.js` — Optional local preview server
