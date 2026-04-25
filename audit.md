# Live-site audit (hhlegal.com) — captured 2026-04-25 via Claude in Chrome MCP

## Theme platform
- WordPress · **Tatsu** page builder (class signatures: `tatsu-shortcode`, `tatsu-button`)
- Body classes / structure typical of a 2021 ThemeForest theme

## Color tokens (extracted via getComputedStyle)
| Token | Live value | hex |
|---|---|---|
| Brand red (primary CTA) | `rgb(216, 8, 8)` | `#D80808` |
| Body text | `rgb(37, 0, 0)` | `#250000` |
| Body background | `rgb(255, 255, 255)` | `#FFFFFF` |
| Secondary button (gray) | `rgb(136, 136, 136)` | `#888888` |
| "LET'S TALK" hover/border accent | `rgb(208, 2, 27)` | `#D0021B` |

## Typography
- **Single family**: Open Sans (everywhere — body and headings)
- All headings use `font-weight: 300` (LIGHT, not bold)
- Hero H2 ("HAAHR LAW GROUP"): 38px / weight 300 / uppercase
- Section H2: 38px / weight 300
- H3: 31px / weight 300
- H4: 28px / weight 300
- Card H2 (post titles): 16px / weight 400
- No second display family — the geometric/condensed sans assumed in the dossier was wrong

## Buttons
- Top-bar CONSULTATION pill: `padding: 12px 15px`, `radius: 0px`, square
- Body CTA buttons: `padding: 15px 20px`, `radius: 3px`, slight round
- Background: `#D80808`, color `#FFFFFF`, all caps text
- "ABOUT HLG" secondary: gray (`#888888`) bg with same shape

## Hero
- White / light background (NOT dark)
- Right-side full-bleed photo of Hans (attorney portrait)
- Left-side text: H2 thin uppercase + body paragraph + two side-by-side buttons
- Header is sticky, semi-transparent gray over the hero

## Header / nav
- Tiny utility row at top: just the centered phone number `☎ (727) 896-7777` (no email, no socials, no toolbar)
- Main header: HLG circle logo (red disc, 67px) on left, nav center-right, red CONSULTATION button at far right
- Nav items all caps: HOME · ABOUT · WHAT WE DO · BLOG · CONTACT
- Active nav item shown in red

## Logo
- **Circle disc** — solid red `#D80808` background, white "HLG" text — NOT a horizontal wordmark as the dossier inferred
- About 67px diameter

## Implications for the replica
- Restyle headings to Open Sans 300 (light) — not Montserrat 700/800
- Drop pill buttons; use 3px radius rectangles
- Update brand red to `#D80808`
- Hero needs to be light-bg with attorney portrait, not dark gradient
- Logo: red circle badge with white "HLG", not the horizontal wordmark currently shipped
