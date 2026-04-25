# NOTES — intentional deviations and pitch flags

## 1. Third language — French is shipped, but Haitian Creole would land harder

The build ships `EN | ES | FR` per spec. **However, the research dossier is correct
that Haitian Creole (HT) would likely outperform French in the Tampa Bay market**:

- Pinellas County has the second-largest Haitian population in Florida.
- Continental French has minimal local market reach.
- A v0 of this project shipped EN/ES/HT and worked well; FR is now in place because
  the spec asked for it, but the toggle is structured so swapping FR for HT is a
  one-file change in `js/i18n.js` (the `fr:` key plus the `LANGS` array).

**Recommended pitch line to the attorney**: ship the EN/ES/HT variant for the
local market. It's the same code, with translations swapped.

## 2. Live site has no privacy policy page

`https://hhlegal.com/` ships a Borlabs/Complianz-style cookie banner referencing
a privacy policy at `/privacy-policy/`, but **that page does not exist** —
clicking the link 404s. This is a free competitive observation worth flagging
in the meeting; it demonstrates audit depth.

## 3. Hans speaks Danish/Swedish/Norwegian, not Spanish

The native Spanish speaker on staff is the paralegal, **Lina Rodriguez**. This
makes the EN/ES toggle a real business-development feature, not just polish:
the firm's existing Spanish-language client capacity is a marketing asset that
the current website does not surface at all.

## 4. Heading hierarchy on live site

The live site uses `<h2>` then `<h6>` with no h3–h5 between them — a WCAG
heading-order violation. The replica corrects this silently (uses h1/h2/h3 in
proper order). This is the only intentional silent deviation. Mention as a
free accessibility observation.

## 5. Logo is rendered in CSS, not as an image

The replica uses a CSS-rendered red circle with white "HLG" text rather than
fetching `correctREDhlg.png` from the live site. Reasons:
- Avoids any IP question about hot-linking the firm's own logo into a demo.
- Renders crisply at every text-size and screen density.
- Trivially swapped for the real PNG when the firm signs and provides assets.

## 6. Hero uses a stylized portrait placeholder, not Hans's actual headshot

Same reasoning as the logo: don't republish a person's photo on a demo site
without consent. The right side of the hero shows a neutral gradient
"PORTRAIT" placeholder. Drop in the actual `hansteam2.png` when authorized.

## 7. Contact form is non-functional by design

The form prevents submit and shows a "demo form — your message would have been
sent" notice. No data is collected or transmitted. When the firm engages, swap
the handler for a Wufoo embed (matching the live site) or a Render Web Service
endpoint.

## 8. Translation quality

Spanish and French strings are AI-translated for demo purposes. **They need
attorney review before any production use** — legal terminology in translation
has nuance that requires a Spanish-speaking attorney sign-off (Lina, ideally).

## 9. SEO posture for non-English

This build uses a JS-only language toggle. Googlebot indexes only the default
English source. For genuine non-English organic traffic, the upgrade path is
`/es/` and `/fr/` (or `/ht/`) subdirectories with full hreflang and canonical
tags — pitched as the v2 enhancement once the firm signs.
