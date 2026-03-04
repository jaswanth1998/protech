---
name: "GitHub Actions & Deployment Plan"
description: "CI/CD pipeline setup: GitHub Actions workflow for automated build and deploy to GitHub Pages on push to main. Covers Vite config, SPA routing (404.html redirect), workflow YAML, npm scripts, environment considerations, and deployment checklist."
status: "not_started"
completed_items: []
notes:
  went_well: []
  went_wrong: []
  blockers: []
---

# 07 — GitHub Actions & Deployment Plan

## Overview

The site is deployed to GitHub Pages automatically on every push to the `main` branch. GitHub Actions handles the build and deploy pipeline.

---

## Prerequisites

1. GitHub repository created (e.g., `protech-website` or `protech`)
2. GitHub Pages enabled in repository Settings > Pages > Source: "GitHub Actions"
3. `vite.config.js` configured with correct `base` path:
   - If deploying to `https://<username>.github.io/<repo>/`, set `base: '/<repo>/'`
   - If deploying to custom domain, set `base: '/'`

---

## Vite Configuration

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/protech/',  // Adjust to match repo name
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
```

---

## SPA Routing on GitHub Pages

GitHub Pages does not natively support SPA routing (all routes return 404 for direct access). Solution: add a `404.html` redirect script in `public/`:

```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <script>
      // Redirect all 404s to index.html with the path as a query parameter
      const path = window.location.pathname;
      window.location.replace(
        window.location.origin + '/protech/?redirect=' + encodeURIComponent(path)
      );
    </script>
  </head>
</html>
```

In `main.jsx` or `App.jsx`, handle the redirect on mount:

```js
const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}
```

**Alternative**: Use `HashRouter` instead of `BrowserRouter` (trade-off: URLs become `/#/services/network-infrastructure`).

**Recommendation**: Use the `404.html` redirect approach to keep clean URLs.

---

## GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:  # Allow manual trigger

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/ --ext .js,.jsx --max-warnings 0",
    "format": "prettier --write \"src/**/*.{js,jsx,css,json}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,css,json}\""
  }
}
```

---

## Environment Considerations

| Concern | Solution |
|---|---|
| Node version | 20 LTS (specified in workflow and `.nvmrc`) |
| Cache | npm cache enabled via `actions/setup-node` |
| Lint gate | Build fails if lint errors exist |
| Branch protection | Only `main` triggers deploy |
| Manual deploy | `workflow_dispatch` allows manual trigger from GitHub UI |
| Custom domain | Add `CNAME` file to `public/` with domain name |
| HTTPS | Automatic with GitHub Pages |
| Build artifacts | Uploaded via `actions/upload-pages-artifact` |

---

## Deployment Checklist

- [ ] Repository created on GitHub
- [ ] GitHub Pages enabled (Source: GitHub Actions)
- [ ] `base` in `vite.config.js` matches repo name
- [ ] `public/404.html` SPA redirect in place
- [ ] `public/favicon.ico` present
- [ ] `public/robots.txt` present
- [ ] `.nvmrc` with Node version `20`
- [ ] Workflow file at `.github/workflows/deploy.yml`
- [ ] First push to `main` triggers successful deploy
- [ ] All routes accessible via direct URL (test SPA redirect)
- [ ] Lighthouse audit passes targets
