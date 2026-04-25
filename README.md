# HH Legal — demo build

Static rebuild of the Haahr Law Group (hhlegal.com) website concept, used as a portfolio
demo to pitch three additions the live site is missing:

1. **Multi-language toggle** — English, Spanish, Haitian Creole. Hand-rolled i18n
   dictionary keyed off `data-i18n` attributes; persists via `localStorage`.
2. **Light / dark theme** — tri-state toggle (Light · System · Dark) backed by CSS custom
   properties on `[data-theme]`. Pre-paint inline script eliminates FOUC.
3. **Text size** — A · A+ · A++ scaling via a single `--base-size` variable on
   `[data-text-size]`. All sizing in `rem` so the whole layout scales proportionally.

The site is intentionally static — no build tool, no framework, no node_modules. Every
page is plain HTML; the three feature systems live in `assets/js/*.js`.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server 8080
```

Then visit http://localhost:8080.

## Render deployment

- **New → Static Site** in the Render dashboard
- Connect the GitHub repo
- **Root directory:** *(blank)*
- **Build command:** *(blank)*
- **Publish directory:** `.`

Live at `https://<service>.onrender.com`.

## Why Haitian Creole instead of French

Per the research dossier, Tampa Bay's significant non-English population is overwhelmingly
Spanish-speaking plus **Haitian Creole** — Pinellas County has the second-largest Haitian
population in Florida. Continental French has minimal local market. Final language choice
should be confirmed with the attorney.

## Disclaimer

This is a demonstration site. It is not affiliated with Haahr Law Group, PL, and is not
the firm's live website. Contact form data is not transmitted.

## Regenerating templated pages

Practice-area pages and blog posts share a templated shell. Edit `_gen.py` and run:

```
python _gen.py
```
