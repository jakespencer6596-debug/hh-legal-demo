# Home page rebuild plan — section by section

Based on full top-to-bottom capture of `https://hhlegal.com/` on 2026-04-25.
The live home is built with Tatsu (a WPBakery-style page builder) and consists
of **9 visible sections** stacked vertically. This is an exhaustive map.

The summary copy below paraphrases the live site's body content. We will use
short factual UI strings (page titles, nav, button labels, the firm tagline,
contact info) verbatim, and rewrite longer marketing prose in the same voice.
Hans should review and substitute his own copy before any production use.

---

## Section 1 — Top utility bar
- **Bg**: very light cream / nearly white (≈ `#F8F4F0`)
- **Content**: a single centered red phone number with a tiny phone glyph
- **Height**: ~36 px (compact)
- **No other items.** No language toggle, no buttons, no email — just the phone
- **Replica delta**: I have the toggle row here (intentional pitch addition).
  Decision needed (see questions below): keep toggle row, OR move it into a
  collapsible "Accessibility" gear icon to make this row mirror live exactly

## Section 2 — Header (transparent overlay over hero)
- **Position**: absolute / overlay on top of the hero photo (NOT a separate
  band). Background is a translucent dark gray `rgba(60,60,60,~0.55)`
- **Left**: HLG red circle disc (correctREDhlg.png), about 56 × 56 px
- **Right cluster**: nav items as light gray ALL CAPS, hover/active red
  - HOME (active = red), ABOUT, WHAT WE DO ▾, BLOG, CONTACT
  - then a small RED rectangle button "CONSULTATION" (12px 15px padding, 0px
    radius, white uppercase text)
- **Replica delta**: my header is solid white and sits below the hero. Need
  to reposition it as an overlay band over the hero photo

## Section 3 — Hero (full-bleed photo)
- **Bg**: full-width `hans_haahr.jpg` covering the right ~60% of the screen
  with a frosted-glass left edge that fades to white-ish
- **Min height**: ~700 px (very tall, ~80 vh)
- **Text overlay (left)**: positioned roughly at the center vertically
  - "HAAHR LAW GROUP" — H2, Open Sans 300, ~38 px, near-black `#250000`,
    uppercase, no letterspacing change visible
  - 3-line lead: ~14-15 px, near-black, regular weight
  - Two side-by-side rectangle buttons (15px × 20px padding, 3px radius):
    gray "ABOUT HLG" (`#888`), red "CONSULTATION" (`#D80808`)
- **Replica delta**: ✓ matches well already; the photo is in place and Hans
  is correctly framed

## Section 4 — Dark CTA band
- **Bg**: solid gray `#4D4D4D`
- **Content centered**: "Get a No-Cost Consultation Today" (Open Sans 300,
  ~28 px, white, no caps) + a small red "LET'S TALK" button to the right
- **Layout**: text + button on a single horizontal line, both centered as a
  group, with ~3rem padding top/bottom
- **Replica delta**: ✓ matches now

## Section 5 — "Insurance Disputes and Litigation"
- **Bg**: white
- **Top**: centered red H3 "Insurance Disputes and Litigation" (Open Sans
  300, ~31 px, color `#D80808`)
- **Decorative divider**: thin gray line — small red diamond (◆) — thin gray
  line, centered horizontally below the H3, ~80 px wide each side
- **Body**: 2-column row, container max-width ~1140 px, gap ~50 px:
  - LEFT col: 3 stacked paragraphs of body copy (left-aligned, ~430 px wide)
    + a red "LEARN MORE" rectangle button below
  - RIGHT col: large landscape photo of palm trees in a storm
    (`jon-asato-H1fcMYKm6qM-unsplash-scaled.jpg`), ~700 × 450 px
- **Replica delta**: my section has stat-strip on the right, not a photo. And
  the H3 is left-aligned without the diamond divider

## Section 6 — "About Haahr Law Group"
- **Bg**: light cream gray `#F4F1EE`
- **Top**: centered H2 "About Haahr Law Group" (Open Sans 300, ~38 px, black)
- **Subtitle**: a single centered short paragraph (~3 lines wide, max ~700 px)
  with the phrase "We're on your side." bolded inline (not a separate row)
- **Team strip** (this is the key visual difference): 3 large team photos
  side-by-side in a row, **edge to edge** (no gap or padding between them).
  Each photo is tall portrait (~480 × 540 px). Below each photo, centered
  text: name (e.g. "Hans Haahr"), then role ("Attorney" / "Administration" /
  "Paralegal") on a separate line, both light black
- **Bottom**: centered red "MORE ABOUT OUR TEAM" rectangle button
- **Replica delta**: I have a stacked 2-col layout w/ separate cards. Live
  has a 3-photo edge-to-edge strip with simple text below each — needs
  full rebuild

## Section 7 — Second dark CTA band
- **Same as Section 4** but the button text is "LET'S START" instead of
  "LET'S TALK"
- **Replica delta**: my second band still says LET'S TALK. Need to differentiate

## Section 8 — "New from the HLG Blog"
- **Bg**: white
- **Top**: centered H2 "New from the HLG Blog" (Open Sans 300, ~38 px)
- **Below**: 3-card grid (no border, no shadow). Each card:
  - Featured image on top, full-width of card column
  - Title as link (Open Sans 400, ~16 px, dark)
  - Meta row: "0 comments / June 20, 2021"
  - Excerpt: first ~60 words of the post + "[…]"
  - Bottom: "Under : Tips" (or category) tag in light gray text
  - No "Read More" button — clicking the title or image goes to the post
- **Replica delta**: my cards have border, shadow, badges, and a "READ MORE
  →" link. Should strip to bare layout

## Section 9 — Footer
- **Bg**: dark gray `#3F3F3F` (slightly lighter than my `#1A1A1A`)
- **3-column grid**:
  - Col 1 (~30%): HLG circle + "HAAHR LAW GROUP" wordmark on top, then H6
    "NOTICE" + 2 short paragraphs, then "Legal Disclaimer" link
  - Col 2: H6 "CONTACT" + 3 rows with small icons (house, phone, envelope):
    - 4159 Central Avenue, St. Petersburg, FL 33713
    - 727.896.7777
    - info@hhlegal.com
  - Col 3: H6 "FOLLOW US" + 3 round social icons (Facebook, LinkedIn, Twitter)
- **Bottom strip**: "Copyright Haahr Law Group 2021. All Rights Reserved"
  left + "Made with ♥ by Hashtag Creative" right
- **Floating button**: small red ↑ "back to top" button bottom-right (always
  visible after scroll)
- **Replica delta**: my footer uses the white wordmark (✓), but contact rows
  don't have icons; social icons are square pills not round; no back-to-top

---

## Prioritized fix list (descending impact)

| # | Fix | Visual impact | Effort |
|---|---|---|---|
| 1 | Section 6 — rebuild About strip: 3 edge-to-edge tall team photos w/ name+role below, single centered intro paragraph | High | Medium |
| 2 | Section 5 — swap stat-strip for palm-tree photo, center H3 + diamond divider | High | Low |
| 3 | Section 2 — make header transparent dark and overlay it on top of hero | High | Medium |
| 4 | Section 8 — strip blog cards: bare layout, no border/shadow, "0 comments / Date" meta, "Under : Tag" tag | Medium | Low |
| 5 | Section 9 — footer icons next to address/phone/email; round social icons | Medium | Low |
| 6 | Section 7 — change second CTA band button to "LET'S START" | Low | Trivial |
| 7 | Add floating ↑ back-to-top button | Low | Trivial |
| 8 | Decision needed: top toolbar — keep / collapse to single icon / move to footer | varies | Low |

---

## Items that touch multiple pages (handle once, propagate)

- Header transparency only applies on home; inner pages keep solid header
  over banner — confirm this matches what we want
- Footer rebuild applies to all 18 pages
- "LET'S START" / "LET'S TALK" copy is a home-only nuance; inner pages
  use "CONTACT US" or "LET'S TALK" already

---

## Open questions for you

1. **Top toolbar with EN/ES/FR + theme + size** — three choices:
   - **(a)** Keep it where it is in the cream utility row (current). Visible
     pitch but it makes the top look denser than the live site's tiny
     phone-only row.
   - **(b)** Collapse all three controls into a single ⚙ icon on the right of
     the header that opens a small panel. Top utility row goes back to just
     the phone, mirroring live exactly.
   - **(c)** Move the toggles into the footer (less prominent but less
     visually intrusive on every page).

2. **Demo banner** (the thin red strip at the very top): keep / shrink to a
   barely-visible 2px line / remove entirely?

3. **Header overlay style** — the live site overlays a translucent dark gray
   header on top of the hero photo on the home page. Should I replicate
   that exactly, OR keep the solid white header (which works better with
   the toolbar visible)?

4. **Inner-page hero text color** — live banner heroes show the H1 in white
   over a dark photo overlay (good readability). My current matches. ✓

5. **Use of real headshots in production** — the demo currently re-hosts
   Hans/Staci/Lina photos pulled from hhlegal.com. For a portfolio demo
   shown to Hans himself this is fine, but if you ever post the demo URL
   publicly outside of pitching Hans, we should swap to placeholders or
   get explicit permission. Want me to add a note to NOTES.md?

6. **Wufoo contact form** — live uses an embedded Wufoo iframe. My version
   uses a native form with no submission. Should I replace it with the
   actual Wufoo embed, or keep the demo placeholder?

Once you answer these, I'll execute the prioritized fix list end-to-end and
push a single commit with the section-by-section rebuild.
