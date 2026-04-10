import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../src/assets/og-previews");
const BASE_URL = process.env.OG_CAPTURE_BASE_URL ?? "http://127.0.0.1:3000";

/** Viewport matches OG image dimensions; screenshot clip = above-the-fold for this width. */
const VIEWPORT = { width: 1200, height: 630 };

const ROUTES = [
  { path: "/", file: "home.png" },
  { path: "/about", file: "about.png" },
  { path: "/contact", file: "contact.png" },
  { path: "/services/personal-care", file: "personal-care.png" },
  { path: "/services/companion-care", file: "companion-care.png" },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();

  try {
    for (const { path, file } of ROUTES) {
      const url = new URL(path, BASE_URL).href;
      await page.goto(url, { waitUntil: "load", timeout: 90_000 });
      await page.evaluate(() => document.fonts?.ready ?? Promise.resolve());
      await sleep(500);
      const buffer = await page.screenshot({
        type: "png",
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      });
      await writeFile(join(OUT_DIR, file), buffer);
      console.log(`Wrote ${file} (${url})`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
