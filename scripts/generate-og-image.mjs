/**
 * Generate the 1200x630 social-share image (public/og-image.png) used for og:image /
 * twitter:image. Renders a self-contained HTML card in headless Chromium and screenshots
 * it. Run manually when the branding/tagline changes:  `node scripts/generate-og-image.mjs`
 *
 * PLACEHOLDER copy — owner can adjust the tagline/wording below.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// The source logo has width/height=1200 but no viewBox, so it can't be scaled down via
// CSS without clipping. Inject a viewBox so it renders correctly at any size.
const logoSvg = (await readFile(path.join(ROOT, 'src', 'assets', 'logo.svg'), 'utf8')).replace(
  '<svg ',
  '<svg viewBox="0 0 1200 1200" preserveAspectRatio="xMidYMid meet" ',
);

const COMPANY = 'Pro-Tech IT Consulting';
const HEADLINE = 'Structured Cabling · Wireless Surveys · IT Field Services';
const LOCATION = 'Dartmouth–Halifax, Nova Scotia';
const DOMAIN = 'pro-techitconsulting.com';

const html = `<!doctype html>
<html>
<head><meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  .card {
    width: 1200px; height: 630px;
    background: radial-gradient(circle at 78% 18%, #2d3748 0%, #1a202c 62%);
    color: #fff;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    padding: 80px 88px;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative; overflow: hidden;
  }
  .accent { position: absolute; top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, transparent, #39e991, transparent); }
  .brand { display: flex; align-items: center; gap: 24px; }
  .brand .logo { width: 92px; height: 92px; display: flex; }
  .brand .logo svg { width: 92px; height: 92px; }
  .brand .name { font-size: 40px; font-weight: 700; letter-spacing: -0.5px; }
  .headline { font-size: 62px; font-weight: 800; line-height: 1.12; max-width: 1000px; }
  .headline .accent-text { color: #39e991; }
  .meta { display: flex; align-items: center; gap: 18px; font-size: 30px; color: #a0aec0; }
  .meta .dot { color: #39e991; }
  .meta .domain { color: #39e991; font-weight: 600; }
  .rule { width: 96px; height: 6px; background: #39e991; border-radius: 3px; margin-bottom: 20px; }
</style></head>
<body>
  <div class="card">
    <div class="accent"></div>
    <div class="brand">
      <span class="logo">${logoSvg}</span>
      <span class="name">${COMPANY}</span>
    </div>
    <div>
      <div class="rule"></div>
      <div class="headline">${HEADLINE}</div>
    </div>
    <div class="meta">
      <span>${LOCATION}</span>
      <span class="dot">•</span>
      <span class="domain">${DOMAIN}</span>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const out = path.join(ROOT, 'public', 'og-image.png');
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.warn(`og-image written to ${out}`);
} finally {
  await browser.close();
}
