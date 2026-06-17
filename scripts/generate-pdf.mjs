import { createServer } from 'http';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, extname, join } from 'path';
import puppeteer from 'puppeteer';

const DIST_DIR = resolve('dist');
const FILES_DIR = resolve('dist/files');

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, reply) => {
      let url = req.url.split('?')[0];
      if (url.endsWith('/')) url += 'index.html';
      const filePath = join(DIST_DIR, url);
      if (existsSync(filePath)) {
        reply.setHeader('Content-Type', MIME[extname(filePath)] ?? 'application/octet-stream');
        reply.end(readFileSync(filePath));
      } else {
        reply.statusCode = 404;
        reply.end('Not found');
      }
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error('dist/ not found — run astro build first');
    process.exit(1);
  }
  mkdirSync(FILES_DIR, { recursive: true });

  const { server, port } = await startServer();
  console.log(`Static server on http://localhost:${port}`);

  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const lang of ['fr', 'en']) {
      const page = await browser.newPage();
      // A4 content area at 96dpi: 170mm × 242mm (210 - 40mm margins / 297 - 30mm margins)
      await page.setViewport({ width: 642, height: 1010 });
      // Screen mode ensures all CSS colors render — avoids Chromium print color suppression
      await page.emulateMediaType('screen');
      const url = `http://localhost:${port}/print/${lang}/`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      const outputPath = resolve(`dist/files/dorian_cv_${lang}.pdf`);
      await page.pdf({
        format: 'A4',
        printBackground: true,
        path: outputPath,
        margin: { top: '15mm', right: '20mm', bottom: '15mm', left: '20mm' },
      });
      await page.close();
      console.log(`✓ dist/files/dorian_cv_${lang}.pdf`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
