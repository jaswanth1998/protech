/**
 * Static pre-rendering (SSG) for the Pro-Tech IT Consulting SPA.
 *
 * The site is deployed to GitHub Pages (static hosting) and rendered 100%
 * client-side, so crawlers that don't run JS receive an empty <div id="root">.
 * This script runs AFTER `vite build`: it serves the built `dist/` folder, drives
 * the real app in headless Chromium, and writes a fully-rendered HTML snapshot for
 * every route. Crawlers then get complete content + per-page <head> meta, and the
 * client hydrates the snapshot on load (see src/main.jsx).
 *
 * It also regenerates dist/sitemap.xml from the same route list so the sitemap can
 * never drift from the actual routes.
 */
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SERVICES_FILE = path.join(ROOT, 'src', 'data', 'services.js');

const SITE_URL = 'https://pro-techitconsulting.com';
const PORT = 4271;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

/**
 * Derive the service-detail slugs from src/data/services.js. The data file imports
 * SVG assets via the `@/` alias, so it can't be imported directly under Node — we
 * extract the slugs with a regex instead. Each service object has exactly one
 * top-level `slug:` field.
 */
async function getServiceSlugs() {
  const src = await readFile(SERVICES_FILE, 'utf8');
  const slugs = [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const unique = [...new Set(slugs)];
  if (unique.length === 0) {
    throw new Error('prerender: no service slugs found in src/data/services.js');
  }
  return unique;
}

/**
 * Minimal static server for dist/. Every HTML navigation is served the *pristine*
 * vite shell (`cleanShell`), so the app always boots empty and client-routes to the
 * target. This is essential: we overwrite dist/index.html with the Home snapshot
 * during the run, and serving that back as the SPA fallback would leak Home's
 * <head>/body into every other page. Assets (with a file extension) are read from
 * disk as normal.
 */
function startServer(cleanShell) {
  const server = createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent((req.url || '/').split('?')[0]);
      const ext = path.extname(pathname);

      // HTML navigation (no extension, or a trailing-slash dir) → pristine shell.
      if (!ext || pathname.endsWith('/')) {
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(cleanShell);
        return;
      }

      try {
        const body = await readFile(path.join(DIST, pathname));
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

/** Write an HTML snapshot to the right dist path for a route. */
async function writeSnapshot(route, html) {
  const dir = route === '/' ? DIST : path.join(DIST, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html, 'utf8');
}

function buildSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  const priority = (route) => {
    if (route === '/') return '1.0';
    if (route === '/services') return '0.9';
    if (route.startsWith('/services/')) return '0.7';
    return '0.8';
  };
  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n    <priority>${priority(route)}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function main() {
  const serviceSlugs = await getServiceSlugs();
  const routes = [
    '/',
    '/about',
    '/services',
    '/industries',
    '/contact',
    ...serviceSlugs.map((slug) => `/services/${slug}`),
  ];

  // Snapshot the clean vite shell BEFORE we start overwriting dist/*.html files.
  const cleanShell = await readFile(path.join(DIST, 'index.html'));
  const server = await startServer(cleanShell);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    // Render animated elements in their final, visible state (the app respects
    // useReducedMotion) for clean, stable snapshots and minimal hydration mismatch.
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    page.setDefaultNavigationTimeout(60000);

    for (const route of routes) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      // Ensure React has rendered and react-helmet-async has injected the head.
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return (
            root &&
            root.childElementCount > 0 &&
            document.querySelector('main#main-content') &&
            document.querySelector('footer')
          );
        },
        { timeout: 30000 },
      );
      const html = await page.content();
      await writeSnapshot(route, html);
      console.warn(`prerendered ${route}`);
    }

    await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(routes), 'utf8');
    console.warn(`sitemap.xml written with ${routes.length} URLs`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
