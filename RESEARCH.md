# HH Legal demo build brief: complete research dossier

**The site at hhlegal.com is Haahr Law Group, PL — an insurance-claims litigation firm in St. Petersburg, FL, founded by Hans Peter Haahr (note: double-a "Haahr," not "Haar").** It is *not* a realty practice; it represents policyholders against insurance companies on property-damage claims (auto, fire, hurricane, roof, sinkhole, water). The site is a frozen-in-2021 WordPress build by Hashtag Creative. This dossier captures everything you need to rebuild the site as a static demo, plus implementation patterns for the three pitched features and Render deployment guidance. **All three features (language toggle, dark mode, text resize) are absent from the live site**, so the pitch makes sense.

A few mismatches with the original task statement are worth noting before you build: the firm's actual name and spelling, its actual practice (insurance litigation, not real estate), and the fact that the only Spanish speaker on staff is the paralegal (Lina Rodriguez) — Hans speaks Danish/Swedish/Norwegian. Tampa Bay's "third language" reality is mostly **Haitian Creole**, not French; flag this with the attorney before building FR. The rest of this brief assumes you'll mirror the structure but rewrite copy.

---

## 1. Full site audit

### Site map

```
hhlegal.com/                                 (Home)
├── /about/                                  (About Us)
├── /services/                               (Services hub — "What We Do")
│   ├── /auto/                               (Automotive Property Damage Claims)
│   ├── /fire/                               (Fire & Smoke Damage Claims)
│   ├── /storm/                              (Hurricane & Storm Claims)
│   ├── /roof/                               (Roof & Hail Damage Claims)
│   ├── /sinkhole/                           (Sinkhole Damage Claims)
│   └── /water/                              (Water Damage Claims)
├── /blog/                                   (Blog index)
│   ├── /tips/5reasons/                      (Hurricane denial post — Jun 20 2021)
│   ├── /tips/firetips/                      (Fire safety — May 20 2021)
│   ├── /tips/claimguide/                    (FL claims guide — Apr 25 2021)
│   ├── /tips/toptensecurity/                (Home security — Mar 25 2021)
│   ├── /community/localfavorites/           (Local food/drink — Feb 5 2021)
│   └── /tips/inventory/                     (Home inventory — Jan 14 2021)
├── /contact/                                (Wufoo form)
└── /legal/                                  (Legal Disclaimer)

Auto-generated WP archives: /2021/01/ through /2021/06/, /category/tips/, /category/community/
Broken/referenced-but-missing: /schedule-a-consultation/, /practice_areas/civil-litigation/, 
  /practice_areas/commercial-law/, /practice_areas/personal-injury-and-wrongful-death/, 
  /practice_areas/insurance-disputes-and-litigation/
```

### Firm contact block (verbatim factual)

| Field | Value |
|---|---|
| Firm name | Haahr Law Group (also "Haahr Law Group, PL" / "Haahr Law Firm") |
| Founder | Hans Peter Haahr |
| Founded | 2007 |
| Address | 4159 Central Avenue, St. Petersburg, FL 33713 |
| Phone | (727) 896-7777 / `727.896.7777` |
| Email | info@hhlegal.com |
| Hours | Not published |
| Social | Facebook (facebook.com/haahrlaw); footer "FOLLOW US" row exists; other platforms not exposed in extract |
| Service area | Tampa Bay / all Florida (also licensed TN, US District Courts MD/SD FL, US Court of Federal Claims DC) |

### Attorney / staff roster

**Hans Peter Haahr — Attorney (Founder).** JD, University of Miami School of Law (cum laude). BA Political Science, University of South Alabama (magna cum laude). Martindale-Hubbell BV-rated. Florida Bar #568457; admitted in TN, USDC MD/SD FL, US Court of Federal Claims DC. Member: Florida Bar; St. Petersburg Bar (Real Property Section); Danish American Chamber of Commerce. Languages: English, Danish, Swedish, Norwegian. Background: Danish-born; began career at Mase & Gasenheimer (Miami, maritime/class actions), then Senior Litigation Associate at Cole, Scott & Kissane (Tampa). Image: `hansteam2.png`.

**Staci Haahr — Business Manager / Administration.** BBA Marymount University; MBA Clemson. Manages firm operations and client relations since 2007; assists small-business clients with incorporation. Image: `staciteam.png`.

**Lina Rodriguez — Paralegal.** Bachelor's, St. Petersburg College. **Native Spanish speaker.** Prepares contracts, deeds, leases, and case/hearing materials. Image: `lindateam2.png` (filename misspells as "linda").

### Practice areas — exact names + structural summaries

The six dedicated practice-area pages all follow an identical template: H1 → "GET A NO COST CONSULTATION" CTA bar → H3 (same as H1) → 2–4 short paragraphs → "OUR SERVICES" sidebar (links to all 6 areas) → testimonial card.

| # | Page H1 (verbatim) | URL | Content focus |
|---|---|---|---|
| 1 | Automotive Property Damage Claims | /auto/ | Insurer underestimates of repair cost / ACV; the 30–35% replacement threshold; supplemental-repair tactics; PD + injury claim help |
| 2 | Fire & Smoke Damage Claims | /fire/ | Arson investigation patterns; cause-and-origin experts; total-loss disputes under FL Valued Policy Law (§627.702); soot/odor cleanup |
| 3 | Hurricane & Storm Claims | /storm/ | Wind damage to roof/walls/contents; rebuts "old roof" / "no opening" denials; urgency to mitigate |
| 4 | Roof & Hail Damage Claims | /roof/ | Hail claims; roofing-engineer evidence; building-code-driven full replacement |
| 5 | Sinkhole Damage Claims | /sinkhole/ | Quotes Fla. Stat. §627.706; "catastrophic ground cover collapse" 4-element test; "structural damage" 5-element test |
| 6 | Water Damage Claims | /water/ | Pipe bursts, dishwasher/fridge/sprinkler leaks, condo above-unit leaks, ensuing-loss coverage |

**"Other Practice Areas" listed on /services/ without dedicated pages**: Civil Litigation; Commercial Law; Personal Injury & Wrongful (text appears truncated — almost certainly "& Wrongful Death"); Hotel and Condo Claims.

### Page-by-page detail (for Claude Code to mirror)

**Home (`/`)** — Title: "HaahrLawGroup – Insurance Claims". Sections in order:
1. Top utility bar: phone "☎️ (727) 896-7777" + "CONSULTATION" button.
2. Sticky header with logo + main nav.
3. Hero: H1 "HAAHR LAW GROUP" + sub-headline about representing policyholders + two CTAs: "ABOUT HLG" and "CONSULTATION".
4. Dark CTA band: "Get a No-Cost Consultation Today" + "LET'S TALK".
5. "Insurance Disputes and Litigation" (H3) — 3 paragraphs covering property/auto/motorcycle/liability disputes in state and federal courts. CTA "Learn More" → /services/.
6. "About Haahr Law Group" (H2) — short intro: 2007 founding, Tampa Bay focus, pro-policyholder positioning. Tagline: **"We're on your side."**
7. Team trio (H6 each) — Hans (Attorney), Staci (Administration), Lina (Paralegal). CTA "MORE ABOUT OUR TEAM" → /about/.
8. Second dark CTA band → "LET'S START".
9. "New from the HLG Blog" (H2) — 3-card grid of latest posts, each with image, title, date, comment count, excerpt, "Read More".
10. Footer.

**About (`/about/`)** — H1 "About Us". Sections: top CTA bar; "About The Firm" (H2, 5 paragraphs covering founding, courts of practice, accessibility philosophy, firm-size positioning); office photo with caption; "MEET OUR TEAM" (H3); full bios for Hans (5 paragraphs + a ~50-word client-philosophy pull-quote + Martindale BV footnote), Staci (1 paragraph), Lina (1 paragraph).

**Services (`/services/`)** — H1 "Services". Top CTA "GET A CONSULTATION TODAY!" → "Contact US". Six service cards (H5 each, with 1-paragraph teaser + "LEARN MORE"). Card labels (verbatim): "Automobile Claims" / "Fire & Smoke Claims" / "Water Loss & Pipe Burst Claims" / "Hurricane & Storm Claims" / "Roof & Hail Claims" / "Sinkhole Claims". "Other Practice Areas" bullet list at bottom. Bottom CTA repeats.

**Each practice-area page (`/auto/`, `/fire/`, `/storm/`, `/roof/`, `/sinkhole/`, `/water/`)** — Identical skeleton: H1 (full practice name) → H4 "GET A NO COST CONSULTATION" + "Contact US" button → H3 (same as H1) → 2–4 paragraphs of substantive content → right-rail "OUR SERVICES" links to all six → testimonial card (signed "– SONIA" / "– MIKE" / "– ERIC" depending on page).

**Blog (`/blog/`)** — H1 "Blog". Newest-first list of 6 posts (titles below). Sidebar widgets: "Recent Posts" (5 links), "Archives" (Jan–Jun 2021). All posts authored "HaahrLaw"; comments closed.

| # | Post title (verbatim) | URL | Date |
|---|---|---|---|
| 1 | 5 Reasons Your Hurricane Insurance Claim is Denied… and 1 Solution | /tips/5reasons/ | Jun 20 2021 |
| 2 | Fire Safety Top Tips for Your Home and Business | /tips/firetips/ | May 20 2021 |
| 3 | Making an Insurance Claim: A Guide for New Florida residents | /tips/claimguide/ | Apr 25 2021 |
| 4 | Top Ten Security Tips for Your Florida Home | /tips/toptensecurity/ | Mar 25 2021 |
| 5 | Local Loves: Our Top Picks for Food and Drink in St Pete's | /community/localfavorites/ | Feb 5 2021 |
| 6 | Why Taking a Home Inventory Is a Winning New Year's Resolution | /tips/inventory/ | Jan 14 2021 |

**Contact (`/contact/`)** — H1 "Contact Us". Sub-heading inviting users to reach out. Embedded **Wufoo form** at `hashtagsue.wufoo.com/forms/m15izre0q7krqz` (fields are inside the iframe — not visible). For your replica, recreate a typical contact form: First Name / Last Name / Email / Phone / Type of Claim (select) / Message / Submit.

**Legal Disclaimer (`/legal/`)** — H1 "Legal Disclaimer". Four sections: intro + LEGAL WARRANTY + LIABILITY + ATTORNEY-CLIENT RELATIONSHIP. Standard boilerplate (no engagement until conflict check + fee agreement; informational only; no warranty; broad limitation of liability).

### Image inventory

| Path | Used on | What it is |
|---|---|---|
| `/wp-content/uploads/2021/01/correctREDhlg.png` | Header (every page) | Red HLG wordmark logo |
| `/wp-content/uploads/2021/01/whitelogo-300x41.png` | Footer (every page) | White logo for dark footer (300×41) |
| `/wp-content/uploads/2021/02/hansteam2.png` | Home, About | Hans headshot (PNG cutout) |
| `/wp-content/uploads/2021/02/staciteam.png` | Home, About | Staci headshot |
| `/wp-content/uploads/2021/02/lindateam2.png` | Home, About | Lina headshot |
| `751_0466` (filename truncated) | About | Office interior photo |
| `AdobeStock_221873052-scaled.jpeg` | Home, blog index, /tips/5reasons/ | Hurricane stock |
| `qtq80-6odCmM.jpeg` | Home, blog index, /tips/firetips/ | Fire stock |
| `javier-allegue-barros-0nOP5iHVaZ8-unsplash.jpg` | Home, blog index, /tips/claimguide/ | Florida welcome |
| `bernard-hermant-IhcSHrZXFs4-unsplash.jpg` | Blog, /tips/toptensecurity/ | Security/lock |
| `aboutSophiav1.jpg` | Blog, /community/localfavorites/ | St. Pete food/drink |
| `nathan-fertig-FBXuXp57eM0-unsplash.jpg` | Blog, /tips/inventory/ | Home inventory |

### Footer (every page)

Three columns on dark background:

- **Column 1 — NOTICE:** White logo + advertising-disclosure paragraph (the standard "hiring a lawyer is an important decision" boilerplate) + "Legal Disclaimer" link.
- **Column 2 — CONTACT:** Address (Maps link), phone (tel:), email (mailto:).
- **Column 3 — FOLLOW US:** Social icons (Facebook confirmed).
- **Bottom strip:** "Copyright Haahr Law Group 2021. All Rights Reserved" + "Made with ❤️ by Hashtag Creative".

A Borlabs/Complianz-style cookie banner ("Privacy Settings") appears on first visit with toggles for YouTube, Vimeo, Google Maps embed consent, plus a "Save" button. **No `/privacy-policy/` page exists** despite the banner referencing one — flag for the attorney.

### Testimonials inventory (structurally captured; do not quote)

| Page | Reviewer | Topic |
|---|---|---|
| /auto/, /storm/, /roof/ | "SONIA" | Hans returned calls within 24 hrs; helpful guidance during difficult time |
| /sinkhole/ | "MIKE" | One-line praise as knowledgeable defense attorney |
| /water/ | "ERIC" | ~135-word case story: 15-yr-warranty concrete tile roof, demand letter citing FL statutes, ~1-week resolution |

---

## 2. Visual design and branding

### Color palette (recreate values — use these as your baseline)

The actual hex codes could not be read from the live CSS (fetch tool blocked raw HTML and stylesheet access), but the filename `correctREDhlg.png` and the firm's branding strongly indicate a **red-on-white-on-near-black** palette. Use these inferred values; tweak after eyeballing the live site:

```css
:root {
  --brand-red:        #C8102E;   /* primary CTA, logo, accents */
  --brand-red-hover:  #A30C24;
  --ink:              #1A1A1A;   /* dark CTA bands + footer */
  --text:             #222222;
  --muted:            #777777;
  --bg:               #FFFFFF;
  --bg-alt:           #F5F5F5;
}
```

### Typography (inferred)

No Google Fonts link could be confirmed from the extract, but the design vintage and visual conventions point to:
- **Headings**: a geometric/condensed sans (likely **Montserrat**, **Oswald**, or **Poppins**) at 600–700, **all-caps, letter-spaced ~0.08em, center-aligned**. The hero "HAAHR LAW GROUP" is uppercase tracked.
- **Body**: a humanist sans (**Open Sans**, **Lato**, or **Source Sans Pro**) at 400/600.
- Almost certainly loaded via Google Fonts `<link>` (Hashtag Creative's typical agency stack).

### Layout, hero, header

Traditional/conservative-modern hybrid. **Container ≈ 1140–1200px max-width.** Generous vertical section padding (~80–100px desktop). Repeated CTA bands ("Get a No-Cost Consultation Today") appear at least twice on the home page — a conversion-funnel-driven WP template.

The **hero is a static image with text overlay** (no carousel markers; no slider plugin scripts visible). Hero photo content not extractable (CSS background); inferable as a courthouse/cityscape/desk shot. The header is sticky with a dropdown "What We Do" mega-list of the six services. **Markup duplicates the menu twice — this is the standard WP desktop-nav + mobile-off-canvas pattern**, with hamburger likely at the 768–991px breakpoint.

### Logo

Horizontal wordmark (300×41 white version → ~7.3:1 aspect ratio = wordmark, not a square mark). Red on light backgrounds, white on dark. No tagline beneath it in the markup.

### Buttons, icons, motion

Buttons are rounded-rectangle/pill, solid red fill, white uppercase tracked text on primary CTAs ("CONSULTATION", "LET'S TALK", "LET'S START"). Outline/ghost likely for secondary. Hover behavior cannot be confirmed but darken-fill is the standard. Phone icon in the header is the literal **emoji ☎️** in markup (low-fi). Footer/contact icons likely **Font Awesome**. **No AOS/GSAP signatures detected** — animations are likely minimal CSS hover transitions and possibly fade-in-on-scroll.

### Existing accessibility issues to fix in your demo

The hero uses **H2 then H6** with no H3–H5 between — a WCAG heading-order violation. No skip link, no obvious ARIA landmarks, no language switcher, no dark mode, no text-resize widget. **Your three pitched features all fill genuine gaps.** This is your strongest pitch angle.

---

## 3. Technical platform

**WordPress — confirmed.** Evidence is unambiguous: every media URL uses `/wp-content/uploads/YYYY/MM/`; image variants follow WP's `-1160x700` / `-768x700` / `-300x41` auto-resize convention; blog posts have `#respond` comment anchors; categories live at `/category/tips/` and `/category/community/`. ZoomInfo's tech profile additionally lists WooCommerce (likely a residual install — no storefront UI is exposed publicly).

**Theme + page builder (best inference, not verified):** Built by Hashtag Creative agency. Visual conventions (centered uppercase headings, card grids, dark CTA bands, dropdown service mega-menu, 2021-era polish) most closely match **Avada / BeTheme / The7** or a Lawyer-niche ThemeForest template; page builder is most likely **WPBakery (Visual Composer)** or **Fusion Builder** (if Avada). Less likely Elementor for this design vintage.

**Plugins / third-party services detected:**
- Cookie consent banner with per-service toggles for YouTube/Vimeo/Google Maps — signature of **Borlabs Cookie** or **Complianz**.
- Google Maps via `goo.gl/maps/...` short-link to office address (no live embed on home — gated by consent).
- Native WP comments on blog (no Disqus).
- **Wufoo form** on /contact/ (not Contact Form 7 — confirmed by iframe URL `hashtagsue.wufoo.com/forms/m15izre0q7krqz`).
- No chat widget, no AccessiBe/UserWay, no visible reCAPTCHA badge.
- Analytics presumed (GA/GTM) but not visible in markdown extract.

**Mobile responsiveness:** Yes — viewport meta and srcsets are in place. **Performance:** Image-heavy relative to need (PNG cutouts of headshots; oversized blog thumbs; no WebP). Likely 2–4 MB home-page weight, 3–5s LCP on 3G. Typical 2021 builder-theme WP without aggressive caching.

**Frozen-in-time signal:** Copyright reads "Haahr Law Group 2021"; latest blog post is June 20, 2021. The site has not been substantively touched in nearly five years.

---

## 4. Content for translation — verbatim string list

These are the short factual UI strings to translate. (Body copy you'll be rewriting from scratch, so it's not in this list.)

**Top utility bar:** `☎️ (727) 896-7777` · `CONSULTATION`

**Main navigation:** `Home` · `About` · `What We Do` · `Blog` · `Contact`

**"What We Do" dropdown (use these exact labels for nav items; the page H1s are slightly longer):** `Automotive Claims` · `Fire & Smoke Damage Claims` · `Hurricane and Storm Claims` · `Roof & Hail Damage Claims` · `Sinkhole Damage Claims` · `Water Damage Claims`

**CTA / button labels:** `CONSULTATION` · `ABOUT HLG` · `LET'S TALK` · `LET'S START` · `Learn More` · `LEARN MORE` · `Read More` · `MORE ABOUT OUR TEAM` · `Contact Us` · `Contact US` · `GET A NO COST CONSULTATION` · `GET A CONSULTATION TODAY!` · `Get a No-Cost Consultation Today` · `Save`

**Section headings:** `HAAHR LAW GROUP` · `Insurance Disputes and Litigation` · `About Haahr Law Group` · `About The Firm` · `MEET OUR TEAM` · `New from the HLG Blog` · `OUR SERVICES` · `Other Practice Areas` · `Services` · `About Us` · `Contact Us` · `Legal Disclaimer` · `Blog` · `Recent Posts` · `Archives`

**Service-card subheadings (on /services/):** `Automobile Claims` · `Fire & Smoke Claims` · `Water Loss & Pipe Burst Claims` · `Hurricane & Storm Claims` · `Roof & Hail Claims` · `Sinkhole Claims`

**Other Practice Areas list:** `Civil Litigation` · `Commercial Law` · `Personal Injury & Wrongful Death` · `Hotel and Condo Claims`

**Role labels:** `Attorney` · `Administration` · `Paralegal`

**Footer labels:** `NOTICE` · `CONTACT` · `FOLLOW US` · `Legal Disclaimer` · `Copyright Haahr Law Group 2021. All Rights Reserved` · `LEGAL WARRANTY` · `LIABILITY` · `ATTORNEY-CLIENT RELATIONSHIP`

**Blog meta:** `Posted By :` · `Under :` · `comments` · `Tips` · `Community`

**Tagline:** `We're on your side.`

> **Note on FR:** Tampa Bay's significant non-English population is overwhelmingly Spanish-speaking (Cuban, Puerto Rican, Venezuelan, Colombian) plus **Haitian Creole** (Pinellas County has the second-largest Haitian population in Florida). Continental French has minimal local market. Confirm with the attorney whether FR is genuinely useful or if **Haitian Creole (HT)** would be a more impactful third language for the demo.

---

## 5. Implementation patterns for the three features

### 5a. Multi-language toggle (EN/ES/FR)

**Recommendation:** Hand-rolled `data-i18n` attribute + JS dictionary object + localStorage. **No library, no framework, no build step, no `/es/` directories.** For a ~8-page demo with ~150 short strings, this is the right call. Library overhead (i18next, polyglot) is unjustified at this scale.

**Trade-off you're accepting:** JS-only switching is bad for SEO. Googlebot will only index the default English source. This is fine for a demo and a pitch. The clearly defined upgrade path — when the firm signs and wants Spanish-language SEO traffic — is to migrate to `/es/`, `/fr/` subdirectories with full hreflang + canonical tags. Pitch this as the v2 enhancement.

**HTML markup pattern:**

```html
<h1 data-i18n="home.hero.title">Trusted Tampa Attorneys</h1>
<a href="/contact.html" data-i18n="home.hero.cta">Free consultation</a>
<img src="team.jpg" alt="Our team" data-i18n-attr="alt" data-i18n="home.hero.imgAlt">

<nav aria-label="Language">
  <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
  <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
  <button class="lang-btn" data-lang="fr" aria-label="Français">FR</button>
</nav>
```

**Dictionary + apply function (`/js/i18n.js`):**

```js
const I18N = {
  en: { home: { hero: { title: "...", cta: "Free consultation", imgAlt: "..." } } },
  es: { home: { hero: { title: "...", cta: "Consulta gratuita", imgAlt: "..." } } },
  fr: { home: { hero: { title: "...", cta: "Consultation gratuite", imgAlt: "..." } } }
};

function resolve(key, dict) {
  return key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict);
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = resolve(el.getAttribute('data-i18n'), dict);
    if (val == null) return;
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, val);
    else el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  const browser = (navigator.language || 'en').slice(0, 2);
  const initial = saved || (['en','es','fr'].includes(browser) ? browser : 'en');
  applyLang(initial);
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang)));
});
```

**Skip flag icons.** None of the surveyed Florida law firms use them. In Florida specifically, a Mexican flag implies Mexican Spanish and alienates Cuban/Venezuelan/Colombian audiences. Use plain text labels (`EN | ES | FR`).

**UI placement:** Top-right of header, in line with the phone CTA. Better than footer-hidden for a pitch demo.

**References worth showing the attorney:** Andreas Remdt's "Building a super small i18n script" and Phrase's i18n guide are the canonical hand-rolled patterns.

### 5b. Light/dark mode toggle

**Recommendation:** `data-theme` attribute on `<html>` + CSS custom properties + an **inline pre-paint script** in `<head>` (this is the FOUC fix) + a tri-state toggle (System / Light / Dark).

Why `<html>` not `<body>`: it paints first, eliminating any flash. Why tri-state: respecting `prefers-color-scheme` is a 2026 accessibility expectation; users who haven't expressed a preference should follow their OS.

**CSS skeleton:**

```css
:root {
  --bg: #ffffff;
  --surface: #f7f7f8;
  --text: #1a1a1a;
  --muted: #555;
  --accent: #C8102E;        /* HLG red */
  --border: #e2e2e6;
}
[data-theme="dark"] {
  --bg: #121417;            /* not pure black — less eye strain */
  --surface: #1c1f24;
  --text: #ececec;
  --muted: #aab0b7;
  --accent: #ff5566;        /* tweaked red for dark contrast */
  --border: #2a2e35;
}
:root              { color-scheme: light; }
[data-theme="dark"]{ color-scheme: dark;  }   /* fixes form controls + scrollbars */

html, body { background: var(--bg); color: var(--text); }
.card      { background: var(--surface); border: 1px solid var(--border); }

/* Smooth transitions only AFTER first paint — avoid animating into stored theme */
html.theme-transitions, html.theme-transitions * {
  transition: background-color .25s ease, color .25s ease, border-color .25s ease;
}
```

**Toggle UI:**

```html
<div class="theme-switcher" role="group" aria-label="Color theme">
  <button data-theme-set="light"  aria-label="Light theme">☀️</button>
  <button data-theme-set="system" aria-label="Use system theme">💻</button>
  <button data-theme-set="dark"   aria-label="Dark theme">🌙</button>
</div>
```

**Toggle JS (`/js/theme.js`):**

```js
(function () {
  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const effective = pref => (pref === 'system' || !pref) ? (mq.matches ? 'dark' : 'light') : pref;

  function apply(pref) {
    root.setAttribute('data-theme', effective(pref));
    if (pref === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', pref);
    document.querySelectorAll('[data-theme-set]').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.themeSet === (pref || 'system'))));
  }

  window.addEventListener('load', () =>
    requestAnimationFrame(() => root.classList.add('theme-transitions')));

  mq.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) apply('system');
  });

  document.querySelectorAll('[data-theme-set]').forEach(b =>
    b.addEventListener('click', () => apply(b.dataset.themeSet)));

  apply(localStorage.getItem('theme') || 'system');
})();
```

### 5c. Text resizing / accessibility (A / A+ / A++)

**Recommendation:** `data-text-size` attribute on `<html>` that scales a single `--base-size` CSS variable. Because the rest of the site uses `rem` everywhere, one root change rescales the whole page proportionally. WCAG 2.1 SC 1.4.4 explicitly accepts author-provided controls (technique G178) as a valid way to satisfy the resize-text requirement.

**The most important rule:** every font-size, padding, and `max-width` on text columns in your CSS must use `rem` or `ch`, never `px`. Common breakage points: fixed-height containers with `overflow: hidden`, buttons with `px` padding, line-heights set in `px` (use unitless), and any `vw` font-sizing (which is an explicit WCAG failure F94).

**CSS skeleton:**

```css
:root { --base-size: 1rem; }
html  { font-size: var(--base-size); }

html[data-text-size="normal"] { --base-size: 1rem;     }   /* 16px */
html[data-text-size="large"]  { --base-size: 1.125rem; }   /* 18px */
html[data-text-size="xlarge"] { --base-size: 1.25rem;  }   /* 20px */

body  { font-size: 1rem; line-height: 1.6; }
h1    { font-size: 2.25rem; line-height: 1.2; }
.btn  {
  font-size: 1rem;
  padding: 0.625rem 1.25rem;
  min-height: 2.75rem;     /* WCAG 2.5.8 target — 44px is best-practice */
  min-width:  2.75rem;
}
.prose { max-width: 65ch; }   /* widens with font; never use px here */

:focus-visible {              /* WCAG 2.4.7/2.4.11 visible focus */
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}
```

**Toggle UI + JS:**

```html
<div class="text-size" role="group" aria-label="Text size">
  <button data-size="normal" aria-label="Normal text size">A</button>
  <button data-size="large"  aria-label="Larger text size">A+</button>
  <button data-size="xlarge" aria-label="Largest text size">A++</button>
</div>
```

```js
(function () {
  const root = document.documentElement;
  const valid = ['normal', 'large', 'xlarge'];
  function setSize(size) {
    if (!valid.includes(size)) size = 'normal';
    root.setAttribute('data-text-size', size);
    localStorage.setItem('text-size', size);
    document.querySelectorAll('[data-size]').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.size === size)));
  }
  setSize(localStorage.getItem('text-size') || 'normal');
  document.querySelectorAll('[data-size]').forEach(btn =>
    btn.addEventListener('click', () => setSize(btn.dataset.size)));
})();
```

**WCAG coverage you're delivering:** 1.4.4 Resize text (AA via G178); 1.4.10 Reflow (AA, via rem layout); 1.4.12 Text Spacing (AA, via no fixed heights); 2.5.8 Target Size (AA, via min-height 44px); 2.4.7/2.4.11 Focus visibility (via `:focus-visible` outline); ARIA exposed via `role="group"` + `aria-label` + `aria-pressed`.

### 5d. The single combined pre-paint script (drop in `<head>` first)

This must be the **first thing in `<head>`**, before any CSS. It applies all three settings before the browser paints, eliminating every flash:

```html
<script>
  (function () {
    try {
      var d = document.documentElement;
      var t = localStorage.getItem('theme');
      d.setAttribute('data-theme',
        t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
      d.lang = localStorage.getItem('lang') || 'en';
      d.setAttribute('data-text-size', localStorage.getItem('text-size') || 'normal');
    } catch (e) {}
  })();
</script>
```

After load, your three independent JS files wire up the buttons and ARIA state — but visual state is already correct on first paint.

---

## 6. Render free-tier static site deployment (April 2026)

**Confirmed via current Render docs (render.com/docs/static-sites, render.com/docs/free, render.com/docs/redirects-rewrites, render.com/docs/custom-domains):**

| Concern | Status |
|---|---|
| Cost for static sites | Free, no exceptions |
| Cold starts (15-min spin-down) | **Doesn't apply** — static sites are CDN-served, not container-served. The "free service spins down" rule is for free Web Services only |
| 750 instance-hour limit | Doesn't apply to static sites |
| Free SSL / HTTPS | Yes, Let's Encrypt + Google Trust, auto-renewed |
| Brotli, HTTP/2, DDoS, immediate cache invalidation | Yes, all free |
| Custom domains on Hobby (free) plan | 2 free; additional are $0.25/mo |
| PR previews | Yes, free |
| Auto-deploy on git push | Yes, atomic zero-downtime |
| Bandwidth + build minutes | Counted against workspace included amounts; visible in dashboard |

**Deployment workflow (5 minutes start to finish):**

1. Push project to a GitHub repo.
2. Render dashboard → **New → Static Site**.
3. Connect GitHub, authorize the repo, click Connect.
4. Configure:
   - **Name:** `hh-legal-demo` (or whatever)
   - **Branch:** `main`
   - **Root directory:** *blank*
   - **Build command:** *blank* (no build needed)
   - **Publish directory:** `.` (a single dot — **this is the #1 gotcha**; if you leave it blank the form errors)
5. **Create Static Site.** Live in ~30 seconds at `https://hh-legal-demo.onrender.com`.
6. Every `git push` to `main` auto-deploys.

**Custom domain setup:** Settings → Add Custom Domain → enter `www.hhlegal-demo.com` (and apex). Render shows DNS records to add at your registrar (CNAME for www; A/ALIAS for apex). Cert auto-issues. HTTP→HTTPS redirect is automatic.

**Future-proofing tip:** Render supports a Netlify-style `_redirects` file (or Redirects/Rewrites tab in the dashboard). When you migrate to `/es/` and `/fr/` directories for SEO, this is where you'd configure pretty URLs and 301s.

---

## 7. Comparable bilingual law firm sites

Pattern variation in the Florida market is wide — there is no single industry standard, which is good news for your pitch (anything reasonable looks credible). Surveyed examples:

**Kurzban Kurzban Tetzeli & Pratt P.A. (Coral Gables / Miami)** — kktplaw.com. Toggle is a plain text "En Espanol" link in the header. Clicking it navigates to `/en-espanol/`, a **curated subset** of pages (family/business immigration, catastrophic injury, firm summary) with its own sub-navigation. **Spanish does not mirror the entire site** — only the highest-value pages. *Take-away: the pragmatic real-world model. Not all pages must be translated.*

**Salomon Numa Immigration Law (Tampa)** — salomonnuma.com. Toggle is a tiny footer text link "English (Inglés) | Español". Uses `/es/` subdirectory; each Spanish page has a sibling English page (e.g., `/es/quienes-somos/` ↔ `/about-us/`); toggle preserves the current page across languages. *Take-away: textbook `/es/` SEO pattern; mirrors what you'd build for production.*

**Vasquez Law Firm, PLLC (NC + Orlando, FL)** — vasquezlawnc.com. Header text toggle, parallel pages on the same domain, marketing emphasizes "Available in English & Spanish" prominently on the home page. *Take-away: the bilingual capability is itself a marketing asset, not just a UI feature.*

**Morgan & Morgan / Abogados.com (Orlando-based, national)** — forthepeople.com (EN) and abogados.com (ES) on **separate domains**. Cross-links between the two but distinctly branded. *Take-away: the heavyweight endgame; only worth it if Spanish is a major segment with distinct branding. Overkill for a solo attorney; useful as a pitch-deck "where this could go someday."*

**Pattern recommendations for the demo:**

| Decision | Recommendation |
|---|---|
| Toggle pattern | JS dictionary (this build); migrate to `/es/` subdirectory in v2 |
| Toggle UI | Plain text `EN | ES | FR` |
| Flags | **No flags** — Florida's Spanish-speaking population is heterogeneous; a single flag alienates someone |
| Toggle placement | Header top-right (better than footer-hidden) |
| Page preservation | Toggle should keep the user on the same logical page across languages |

---

## Conclusion: how this should land with the attorney

The pitch writes itself. The current site has a **frozen-in-2021 build that omits language support, accessibility tooling, and modern UI conventions** despite serving a heavily bilingual Tampa Bay market and an aging client base most likely to need text resizing. Hans speaks four languages personally; his paralegal is a native Spanish speaker; **the absence of a Spanish toggle is a genuine business-development gap**, not just an aesthetic one. Your demo proves these three features can be added without rebuilding the site, without ongoing CMS license costs, and without breaking the existing brand. The static replica deploys to Render free-tier in five minutes and shows up at a public URL the attorney can click.

Two pitch refinements worth raising in the meeting: confirm whether **Haitian Creole** would be a more useful third language than French for the Tampa Bay market, and flag that the existing site is **missing a privacy policy page** despite a cookie banner referencing one — a free competitive observation that demonstrates the depth of your audit. Both make the case that a retainer relationship pays for itself in catches like these.