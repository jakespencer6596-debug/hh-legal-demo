# Haahr Law Group — static demo build

Static rebuild of the **hhlegal.com** website, with three additions the live
site does not have:

1. **Multi-language toggle** — `EN | ES | FR` in the top-right toolbar
2. **Light / System / Dark theme** — `☀ ◐ ☾`
3. **Text resize** — `A | A+ | A++`

Demo URL: **https://hh-legal-demo.onrender.com**

Visual parity with `https://hhlegal.com/` is the primary quality bar. Brand red,
Open Sans 300 typography, square buttons, light hero with right-side portrait,
red HLG circle disc, and ALL CAPS nav were all extracted from the live site
via the Claude in Chrome MCP browser session and ported into `css/styles.css`.

See `audit.md` for the live-site token extraction and `NOTES.md` for intentional
deviations (including the recommendation that **Haitian Creole would outperform
French** in the Tampa Bay market — see NOTES.md).

## File structure

```
/
├── index.html
├── about.html
├── services.html              # services hub
├── auto.html                  # six practice-area pages at root
├── fire.html
├── storm.html
├── roof.html
├── sinkhole.html
├── water.html
├── blog.html                  # blog index
├── posts/
│   ├── 5-reasons-hurricane-claim-denied.html
│   ├── fire-safety-tips.html
│   ├── florida-claims-guide.html
│   ├── home-security-tips.html
│   ├── local-favorites.html
│   └── home-inventory.html
├── contact.html
├── legal.html
├── 404.html
├── css/styles.css
├── js/
│   ├── preload.js             # pre-paint settings hydration (loads first in <head>)
│   ├── i18n.js                # EN/ES/FR dictionary + applyLang
│   ├── theme.js               # tri-state Light/System/Dark
│   ├── text-size.js           # A/A+/A++
│   └── nav.js                 # mobile nav toggle, demo form handler
├── audit.md                   # live-site token extraction
├── NOTES.md                   # intentional deviations + HT recommendation
├── RESEARCH.md                # full research dossier
├── _gen.py                    # regenerator for templated practice-area + post pages
└── README.md
```

## Local preview

No build step required.

```
python -m http.server 8765
```

Then open http://localhost:8765.

## Render deployment

1. Push to GitHub.
2. Render Dashboard → **New → Static Site**.
3. Connect the repo.
4. **Build command:** *(blank)*
5. **Publish directory:** `.` (a single dot — required, not blank).
6. Click **Create Static Site**. Live in ~30 s.

Auto-deploys on every push to `main`.

## Acceptance bar

- [x] Every page in the site map exists and returns 200
- [x] Hero composition mirrors live (white bg, left text + right portrait,
      gray ABOUT HLG + red CONSULTATION buttons, thin uppercase H1)
- [x] All three feature controls persist across page navigations via localStorage
- [x] Pre-paint snippet eliminates the FOUC on theme/lang/size load
- [x] EN/ES/FR all render correctly on every page (translations need attorney
      review per `NOTES.md`)
- [x] No `px` font-sizes anywhere in `css/styles.css`
- [x] Buttons hit `min-height: 2.75rem` for the WCAG 2.5.8 target
- [x] `:focus-visible` outlines visible in both themes
- [x] Live URL responds with HTTP 200 on /, /about.html, /services.html, the
      six practice-area pages, /blog.html, the six post pages, /contact.html,
      /legal.html, /404.html
