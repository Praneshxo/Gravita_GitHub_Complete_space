# Gravita Ground Engineering — Complete Website

View the deployed review site: https://gravita-ground-engineering.aristoverse.chatgpt.site

A complete 67-page website, including 50 original editorial articles, all company-profile assets and the unmodified 17-page PDF. Navy, teal and coral branding; interactive ground-engineering illustration; search; mobile navigation; WhatsApp project enquiries to +91 96266 54485.

## Stack
React 19, TypeScript, Vite, Lucide React, CSS design tokens, Python prerendering and a static production distribution. Searchable HTML content remains readable without JavaScript. React provides interactive search, reading progress and the ground explorer. Enquiries prepare a visitor-reviewed WhatsApp message; no CRM, email delivery or server-side lead database is connected.

## Quick preview — no build required
Install Python 3, open this directory in a terminal, then:

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080 . Use an HTTP server; opening index.html directly as a file will not resolve root-relative navigation.

## Rebuild from source
Requirements: Node.js 22, npm, Python 3.12, and Pillow. Windows users can use `python` instead of `python3` and adjust the package scripts accordingly.

```sh
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
npm ci
npm run typecheck
npm run build
npm run check
npm run preview
```

The package lock pins JavaScript dependencies. The Python dependency is pinned in requirements.txt. No API keys are needed.

## What is included
- `src/`: React/TypeScript interactions and design tokens.
- `build.py`: complete company, service, project, contact and article page generator.
- `articles.json`: all 50 complete articles, categories, takeaways and references.
- `dist/`: the complete ready-to-host site, including HTML, CSS, JavaScript, metadata, images and PDF.
- `dist/assets/gravita-company-profile.pdf`: original PDF; checked by SHA-256.
- `dist/assets/profile-01.webp` through `profile-17.webp`: every original profile page.
- `dist/assets/`: original extracted photography, portraits, logos, diagrams and derived hero assets.
- `dist/style.css` and `dist/app.js`: maintained base styling and independent form/navigation/filter behavior; retain these when rebuilding.
- `scripts/`: integration and automated integrity checks.
- `docs/`: delivery record, provenance, verification evidence and operational notes.
- `.github/workflows/verify.yml`: GitHub Actions typecheck/build/integrity workflow.
- `.openai/hosting.json`: original Sites hosting identity, included for continuity. It is not a credential. It is not needed for independent hosting.
- `FILE_MANIFEST.sha256`: per-file archive-integrity inventory.

All project content and tracked assets are included. Git's internal history, authentication material, reinstallable node_modules and temporary caches are deliberately excluded from the portable ZIP.

## Upload to GitHub
Create an empty GitHub repository, extract this ZIP, then run from this folder:

```sh
git init
git add .
git commit -m "Add complete Gravita website"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository's URL. Authentication is handled by your GitHub account. The repository is not automatically created by this ZIP.

## Hosting and domain
Deploy the contents of `dist/` at a domain root on a static host. Nested paths use directory `index.html` files. GitHub repository Pages under `/repository/` requires adapting root-relative URLs; use a root custom domain or root user/organisation Pages deployment for this version.

Before building for another domain:

```sh
export SITE_URL=https://your-domain.example
npm run build
npm run check
```

This regenerates canonical URLs, Open Graph URLs, structured data, sitemap and llms.txt. The checked-in environment example is documentation, not automatically loaded. Do not delete the `dist/assets`, base CSS or base JavaScript before rebuilding: those source assets are intentionally shipped in place.

## Review status
The Sites deployment is a private review version. Public indexing requires public availability and domain alignment. Engineering journal articles are educational editorial content; qualified technical review remains recommended before broad publication. Profile project status and values preserve the source attribution and are not live progress data. Full device-lab, specialist engineering, security and Core Web Vitals certification are not claimed.
