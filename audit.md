# Live-site audit — full structure (hhlegal.com, captured 2026-04-25)

## Universal chrome (every page)

| Element | Live | Replica status |
|---|---|---|
| Top utility row | Tiny: just centered red phone | Lighter cream bar with phone + new toggle row (toggles are intentional value-add) |
| Header bg | Semi-transparent dark gray ribbon over the top of the hero photo | White solid ribbon, separated from hero (gap) |
| Logo | `correctREDhlg.png` (red HLG circle, 56–67 px) | ✓ matches |
| Nav | ALL CAPS · HOME · ABOUT · WHAT WE DO ▾ · BLOG · CONTACT | ✓ matches (with red CONSULTATION removed because it's the new toggle) |
| Header right CTA | Red "CONSULTATION" button | Removed (FREE CONSULTATION pill was in toolbar; trim was fine) |
| Footer | 3 cols: NOTICE · CONTACT · FOLLOW US, dark bg, white logo | ✓ matches structurally; not yet using `whitelogo.png` |

## Universal CTA band (used between sections on every page)

| Aspect | Live | Replica status |
|---|---|---|
| Bg color | Mid-dark gray ~#4D4D4D | Too dark (--ink #1A1A1A) |
| Layout | "Get a No-Cost Consultation Today" left + small red "LET'S TALK" button right | ✓ matches |
| Title weight | Light (300) | Need to verify |

## Per-page audit

### Home (`/`)
**Live sections in order:**
1. **Hero**: full-bleed `hans_haahr.jpg` background, left overlay text "HAAHR LAW GROUP" + lead + [ABOUT HLG][CONSULTATION] buttons
2. **Dark CTA band #1**: "Get a No-Cost Consultation Today" + "LET'S TALK"
3. **"Insurance Disputes and Litigation"** (H3) + 3 paragraphs + "LEARN MORE" red button
4. **"About Haahr Law Group"** (H2) section
5. **Team trio** (H6 each): Hans / Staci / Lina photos w/ name + role
6. **Dark CTA band #2**
7. **"New from the HLG Blog"** (H2) — 3 latest posts as cards
8. Footer

**Replica status**: hero/CTA1/intro shipped ✓ · about + team + CTA2 + blog grid shipped but team cards used initials before, now real photos ✓ · order matches ✓ · stat-strip in intro is a replica addition (deviation OK)

### About (`/about/`)
**Live sections:**
1. **Tall hero banner**: dark photo bg (Sophia/client smiling), white "About Us" H1 centered
2. **Dark CTA band**
3. **Two-column body**: Left = "About The Firm" H2 + 5 paragraphs · Right = office photo + "Haahr Law Firm / 4159 Central Avenue / St. Petersburg FL 33713" H5 (red address)
4. **Centered "MEET OUR TEAM"** (H3, RED) with diamond divider underneath
5. **Hans row**: large photo left + "Hans Haahr" H2 right + mail/phone icons + 5-paragraph bio + indented italic pull-quote with giant " mark
6. **Staci row**: photo + name + bio
7. **Lina row**: photo + name + bio
8. Footer

**Replica gaps:**
- ✗ Page-header is small light, not tall dark banner. Major mismatch.
- ✗ No office photo column on right
- ✗ Team is a 3-card grid, not stacked 2-col rows
- ✗ No "MEET OUR TEAM" centered red H3 + diamond divider
- ✗ No mail/phone icons on each team member
- ✗ No italic pull-quote on Hans

### Services (`/services/`)
**Live:**
1. Tall hero banner: dark + 751_0466 office photo bg, white "Services" H1
2. Dark CTA band: "GET A CONSULTATION TODAY!" H4 + Contact US button
3. 6 service cards H5 (red title) in 3×2: Automobile Claims / Fire & Smoke Claims / Water Loss & Pipe Burst Claims / Hurricane & Storm Claims / Roof & Hail Claims / Sinkhole Claims — each with paragraph + LEARN MORE
4. "Other Practice Areas" H5 with bullet list
5. Bottom CTA band (repeat)

**Replica gaps:**
- ✗ No tall dark banner hero
- ✗ Service card titles aren't red H5
- ~  Order/structure roughly matches

### Practice areas (`/auto/`, `/fire/`, `/storm/`, `/roof/`, `/sinkhole/`, `/water/`)
**Live structure (identical for all 6):**
1. Tall hero banner: dark + topical photo bg, white H1 (full practice name)
2. Dark CTA band: "GET A NO COST CONSULTATION" H4 + Contact US button
3. Body: H3 (same as H1) + 2–4 substantive paragraphs (with sub-H4 on Fire page)
4. Right rail: "OUR SERVICES" H5 with all 6 service links
5. Testimonial card: italic body + "— NAME" attribution

**Replica gaps:**
- ✗ No tall dark hero banner with topical photo
- ✓ Body + rail + testimonial structure matches
- Verify hero photos: auto = clark-van-der-beken (car), fire = andrew-gaines (fire), storm = jon-asato (lightning), roof = storm_damage, sinkhole = SinkholdAS, water = jim-gade

### Blog index (`/blog/`)
**Live:**
1. (Probably) tall hero banner
2. List of 6 posts, each: featured image + H2 title + meta + excerpt + Read More
3. Right sidebar: "Recent Posts" H6 + "Archives" H6

**Replica gaps:**
- ✗ No tall dark hero banner
- ✗ No right sidebar
- ✓ Post cards match

### Blog posts (6 pages under `/posts/`)
**Live:**
1. Tall hero banner with post's image as bg + white post title H1 (actually H2 on live)
2. Two-column: Left = body with H3 section heads · Right = sidebar (Recent Posts, Archives)

**Replica gaps:** same as blog index

### Contact (`/contact/`)
**Live:**
1. Tall hero banner (tingey law firm photo bg) + "Contact Us" H1
2. H5 short intro: "We love to listen and we are eagerly waiting to talk to you regarding your project. Reach out in the form below."
3. Embedded Wufoo form

**Replica gaps:**
- ✗ No tall hero banner
- ✓ Custom form has all the right fields

### Legal (`/legal/`)
**Live:**
1. Tall hero banner + "Legal Disclaimer" H1
2. Intro paragraph + 3 H3s: LEGAL WARRANTY · LIABILITY · ATTORNEY-CLIENT RELATIONSHIP

**Replica gaps:** ✗ no tall hero banner

## Image inventory used per page (verified from live HTML)

| Page | Page hero/feature image | Other used |
|---|---|---|
| Home | `hans_haahr.jpg` (full-bleed) | hansteam2/staciteam/lindateam2.png, blog thumbs |
| About | `aboutSophiav1.jpg` (hero) + `751_0510-1.jpg` (office) + `751_0466-scaled.jpg` (additional) + Screen-Shot Hans bio image | hansteam2 not used here interestingly — uses different Hans portrait crop |
| Services | `751_0466-scaled.jpg` (hero) | — |
| Auto | `clark-van-der-beken-CSkriQWeTVs-unsplash-1.jpg` (hero) | bill-oxford (rail?) |
| Fire | `andrew-gaines-LiPZE3PRhW0-unsplash-1.jpg` (hero) | bill-oxford |
| Storm | `jon-asato-H1fcMYKm6qM-unsplash.jpg` (hero) | bill-oxford |
| Roof | `storm_damage-scaled.jpeg` (hero) | bill-oxford |
| Sinkhole | `SinkholdAS.jpeg` (hero) | bill-oxford |
| Water | `jim-gade-cKjxGyfNdQc-unsplash.jpg` (hero) | bill-oxford |
| Blog | `AdobeStock_221873052.jpeg` (hero?) | post thumbs |
| Contact | `tingey-injury-law-firm-DZpc4UY8ZtY-unsplash-1.jpg` | — |
| Legal | `tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg` | — |
| Blog: 5reasons | `AdobeStock_221873052.jpeg` | — |
| Blog: firetips | `qtq80-6odCmM.jpeg` | — |
| Blog: claimguide | `javier-allegue-barros-0nOP5iHVaZ8-unsplash.jpg` | — |
| Blog: toptensecurity | `bernard-hermant-IhcSHrZXFs4-unsplash-1024x683-1-e1619378866584.jpg` | — |
| Blog: localfavorites | `aboutSophiav1.jpg` etc (5 spot photos) | — |
| Blog: inventory | `nathan-fertig-FBXuXp57eM0-unsplash-1.jpg` | — |

## Top-priority fixes (ranked)

1. **`.page-banner` component** — tall dark photo-bg hero with centered white H1 (used by 11 of 12 pages)
2. **CTA band** — lighten bg to mid-gray (~#4D4D4D) and lighten title weight to 300
3. **About page** — rebuild MEET OUR TEAM as stacked 2-col rows with mail/phone icons and pull-quote on Hans
4. **About page** — add right-column office photo + red address H5 next to "About The Firm"
5. **Services hub** — make card titles red H5 + tighten card padding
6. **Practice-area pages** — add topical hero bg image, red H5 testimonial styling
7. **Blog index** — add right sidebar (Recent Posts + Archives)
8. **Blog posts** — same sidebar
9. **Footer** — swap circle logo for `whitelogo.png` wordmark (live uses white horizontal wordmark in footer)
10. **Contact** — keep custom form; add hero banner

## Intentional retained deviations

- **Demo banner** (thin red strip at top) — required to disclose this is not the firm's site
- **Three feature toggles** in utility row — the entire pitch reason
- **No Wufoo form** — replaced with native form (no third-party tracking on demo)
