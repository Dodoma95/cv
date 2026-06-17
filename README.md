# Resume – Dorian Maillard

![GitHub Workflow](https://img.shields.io/github/actions/workflow/status/dodoma95/cv/deploy.yml?branch=master)
![Node.js](https://img.shields.io/badge/node-20-brightgreen)
![License](https://img.shields.io/github/license/dodoma95/cv)

[![View CV](https://img.shields.io/badge/📄-View_CV-blue?style=for-the-badge)](https://dodoma95.github.io/cv/)

---

My personal CV — versioned, bilingual, deployed on GitHub Pages.

## Stack

- **Astro 5** — static site generator
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **TypeScript** strict mode
- **GitHub Pages** — automatic deployment via GitHub Actions

## Run locally

```bash
npm install
npm run dev     # dev server — hot reload, no PDF generation
npm run preview # serves the built site — use this to test PDF links
```

- **`npm run dev`** — fast dev server with hot reload. PDFs are not generated; the download link returns 404.
- **`npm run preview`** — serves the output of `npm run build`. PDFs exist and links work. Run `npm run build` first.

## Build & PDF generation

```bash
npm run build
```

Runs `astro build` then generates two PDFs via Puppeteer:

```
✓ dist/files/dorian_cv_fr.pdf
✓ dist/files/dorian_cv_en.pdf
```

To regenerate PDFs only (requires `dist/` to exist):

```bash
npm run build:pdf
```

The print pages used as PDF source are at `/cv/print/fr/` and `/cv/print/en/` — not linked from the nav but accessible in the built site.

## Languages

- French (default) — `/cv/fr/`
- English — `/cv/en/`

## License

MIT — feel free to reuse the structure. Please don't reuse personal content.