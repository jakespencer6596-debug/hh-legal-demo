#!/usr/bin/env python3
"""Generator for HH Legal demo: practice-area pages and blog posts."""
import os
from pathlib import Path

ROOT = Path(__file__).parent

SHELL_HEAD = """<!doctype html>
<html lang="en" data-theme="light" data-text-size="normal">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} — Haahr Law Group</title>
  <meta name="description" content="{desc}">
  <script src="/assets/js/preload.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23B81429'/%3E%3Ctext x='16' y='22' font-family='Montserrat,Arial,sans-serif' font-size='16' font-weight='800' text-anchor='middle' fill='white'%3EH%3C/text%3E%3C/svg%3E">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>
<div class="demo-banner" data-i18n="banner.text">Demonstration site · Static rebuild for portfolio review · Not affiliated with Haahr Law Group</div>
<div class="utility-bar"><div class="container">
  <a class="phone" href="tel:+17278967777" data-i18n="util.phone">(727) 896-7777</a>
  <div class="toolbar" role="toolbar" aria-label="Site preferences">
    <span class="label" data-i18n="toolbar.lang">Language</span>
    <div class="group" role="group" aria-label="Language"><button class="lang-btn" data-lang="en">EN</button><button class="lang-btn" data-lang="es">ES</button><button class="lang-btn" data-lang="ht">HT</button></div>
    <span class="label" data-i18n="toolbar.theme">Theme</span>
    <div class="group" role="group" aria-label="Color theme"><button data-theme-set="light" data-i18n-attr="aria-label" data-i18n="toolbar.themeLight" aria-label="Light theme">☀</button><button data-theme-set="system" data-i18n-attr="aria-label" data-i18n="toolbar.themeSystem" aria-label="System theme">◐</button><button data-theme-set="dark" data-i18n-attr="aria-label" data-i18n="toolbar.themeDark" aria-label="Dark theme">☾</button></div>
    <span class="label" data-i18n="toolbar.size">Text Size</span>
    <div class="group" role="group" aria-label="Text size"><button data-size="normal" data-i18n-attr="aria-label" data-i18n="toolbar.sizeNormal" aria-label="Normal text">A</button><button data-size="large" data-i18n-attr="aria-label" data-i18n="toolbar.sizeLarge" aria-label="Larger text">A+</button><button data-size="xlarge" data-i18n-attr="aria-label" data-i18n="toolbar.sizeXL" aria-label="Largest text">A++</button></div>
    <a class="cta-pill" href="/contact.html" data-i18n="util.cta">Free Consultation</a>
  </div>
</div></div>
<header class="site-header"><div class="container">
  <a class="brand" href="/"><span class="mark">HLG</span><span class="word">Haahr Law Group<small>Tampa Bay · St. Petersburg</small></span></a>
  <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">☰ <span>Menu</span></button>
  <nav class="main-nav" id="primary-nav" aria-label="Primary"><ul>
    <li><a href="/" data-i18n="nav.home">Home</a></li>
    <li><a href="/about.html" data-i18n="nav.about">About</a></li>
    <li class="has-dropdown"><a href="/services.html"{services_current} data-i18n="nav.services">What We Do</a>
      <div class="dropdown" role="menu">
        <a href="/services/auto.html" data-i18n="nav.services_dropdown.auto">Automotive Claims</a>
        <a href="/services/fire.html" data-i18n="nav.services_dropdown.fire">Fire & Smoke Damage</a>
        <a href="/services/storm.html" data-i18n="nav.services_dropdown.storm">Hurricane & Storm</a>
        <a href="/services/roof.html" data-i18n="nav.services_dropdown.roof">Roof & Hail Damage</a>
        <a href="/services/sinkhole.html" data-i18n="nav.services_dropdown.sinkhole">Sinkhole Damage</a>
        <a href="/services/water.html" data-i18n="nav.services_dropdown.water">Water Damage</a>
      </div></li>
    <li><a href="/blog.html"{blog_current} data-i18n="nav.blog">Blog</a></li>
    <li><a href="/contact.html"{contact_current} data-i18n="nav.contact">Contact</a></li>
  </ul></nav>
</div></header>

<main id="main">
"""

SHELL_FOOT = """
</main>

<footer class="site-footer"><div class="container">
  <div class="grid">
    <div>
      <a class="brand" href="/" style="color:#fff;"><span class="mark">HLG</span><span class="word" style="color:#fff;">Haahr Law Group<small style="color:rgba(255,255,255,.55);">Insurance Claims · Tampa Bay</small></span></a>
      <h4 class="mt-3" data-i18n="footer.notice">Notice</h4>
      <p class="legal-note" data-i18n="footer.adv">The hiring of a lawyer is an important decision that should not be based solely on advertisements.</p>
      <p><a href="/legal.html" data-i18n="footer.legal">Legal Disclaimer</a></p>
    </div>
    <div>
      <h4 data-i18n="footer.contact">Contact</h4>
      <p><span data-i18n="contact.addrLine1">4159 Central Avenue</span><br><span data-i18n="contact.addrLine2">St. Petersburg, FL 33713</span></p>
      <p><a href="tel:+17278967777" data-i18n="util.phone">(727) 896-7777</a><br><a href="mailto:info@hhlegal-demo.example">info@hhlegal-demo.example</a></p>
    </div>
    <div>
      <h4 data-i18n="footer.follow">Follow Us</h4>
      <ul class="social"><li><a href="#" aria-label="Facebook">Fb</a></li><li><a href="#" aria-label="LinkedIn">In</a></li><li><a href="#" aria-label="Instagram">Ig</a></li></ul>
    </div>
  </div>
  <div class="footer-bar">
    <span data-i18n="footer.copyright">© 2026 Haahr Law Group. All Rights Reserved.</span>
    <span data-i18n="footer.demo">Demo build · Not the live firm site</span>
  </div>
</div></footer>

<script src="/assets/js/i18n.js"></script>
<script src="/assets/js/theme.js"></script>
<script src="/assets/js/text-size.js"></script>
<script src="/assets/js/nav.js"></script>
</body></html>
"""

def shell(title, desc, services=False, blog=False, contact=False):
    return SHELL_HEAD.format(
        title=title, desc=desc,
        services_current=' aria-current="page"' if services else '',
        blog_current=' aria-current="page"' if blog else '',
        contact_current=' aria-current="page"' if contact else '',
    )

# ----------------------------------------------------------------
# Practice-area pages
# ----------------------------------------------------------------

PRACTICE = {
    'auto': {
        'title': 'Automotive Property Damage Claims',
        'i18n': 'auto', 'icon': '🚗',
        'paras': [
            "Carrier estimators routinely undervalue collision repair, especially when OEM parts, paint blending, or modern ADAS recalibrations are required. We push for the full cost of restoring the vehicle to its pre-loss condition — not the cheapest combination of aftermarket panels and skipped procedures.",
            "For total-loss disputes, Florida treats a vehicle as totaled when the cost to repair plus salvage value exceeds the actual cash value, and the threshold typically sits between 30 and 35 percent depending on the carrier and vehicle. We handle ACV underpayments, diminished-value claims, and the supplemental-repair tactics insurers use to shrink payouts after a unit is partially disassembled.",
            "If your accident also produced personal injury, we coordinate the property-damage and bodily-injury claims so neither carrier exploits the other to lower its exposure.",
        ],
        'tq': "Hans returned my call within 24 hours and walked me through every step. He treated my case like it mattered and got me a result I never would have reached on my own.",
        'who': 'SONIA',
    },
    'fire': {
        'title': 'Fire & Smoke Damage Claims',
        'i18n': 'fire', 'icon': '🔥',
        'paras': [
            "After a fire, the carrier's first move is often to send a cause-and-origin investigator looking for grounds to deny — arson allegations, undisclosed prior claims, or material misrepresentations on the application. We engage independent fire experts and adjusters to challenge those findings on the record.",
            "For total losses, Florida's Valued Policy Law (§627.702) generally entitles you to the full face amount of the policy when the structure is rendered uninhabitable. Smoke and soot damage, contents replacement, additional living expenses, and ensuing-loss provisions are all routinely underpaid and worth a second look.",
            "Time matters. The longer soot sits on surfaces, the deeper it bonds and the more expensive proper remediation becomes. We help clients lock in mitigation contractors, document conditions, and preserve the carrier's exposure before the file is closed at a number that doesn't reflect the loss.",
        ],
        'tq': "Hans returned my call within 24 hours and was honest with me from the start. He gave me real guidance during the worst week of my life and never made me feel like I was bothering him.",
        'who': 'SONIA',
    },
    'storm': {
        'title': 'Hurricane & Storm Claims',
        'i18n': 'storm', 'icon': '🌀',
        'paras': [
            "Hurricane and named-storm claims involve a uniquely high bar of proof: the carrier will argue your damage predates the storm, that your roof was already worn, or that no \"opening\" was created so interior water damage is excluded. We rebut each of these with weather data, drone surveys, and contemporaneous photographs.",
            "Mitigation matters. Florida policies require you to take reasonable steps to prevent further damage — boarding up, tarping, water extraction. We coordinate with mitigation vendors so your responsibilities are documented and the cost is preserved as part of the claim.",
            "Hurricane deductibles are calculated as a percentage of dwelling coverage, not a flat dollar amount. On a \\$400,000 home with a 5% hurricane deductible, that's \\$20,000 out of pocket before the carrier pays a dollar. We make sure that math, and every supplement that follows, comes out in your favor.",
        ],
        'tq': "I had no idea where to start after the storm. Hans took my call right away and made sense of a situation that felt impossible. Returned every call within 24 hours.",
        'who': 'SONIA',
    },
    'roof': {
        'title': 'Roof & Hail Damage Claims',
        'i18n': 'roof', 'icon': '🏠',
        'paras': [
            "Hail damage claims are technical: insurers send adjusters who count strikes per slope and apply restrictive matching rules to deny full replacement. We engage roofing engineers to document the true scope of impact, including back-side functional damage that field adjusters routinely miss.",
            "Florida's matching statute and county-level building codes often require full-roof replacement when partial repairs would leave incompatible materials side by side. When the code triggers a full replacement, your policy's law-and-ordinance coverage typically pays for it — provided you have an attorney willing to make the carrier honor it.",
            "Discontinued shingle lines, color-match failures, and underlayment damage are all leverage points carriers prefer you don't notice. We notice them.",
        ],
        'tq': "Hans took the time to explain my coverage in plain English and pushed back when the carrier tried to lowball us. Returned every call within a day.",
        'who': 'SONIA',
    },
    'sinkhole': {
        'title': 'Sinkhole Damage Claims',
        'i18n': 'sinkhole', 'icon': '⛰️',
        'paras': [
            "Florida Statute §627.706 governs sinkhole coverage and distinguishes \"catastrophic ground cover collapse\" — a four-element test requiring abrupt collapse, depression of the ground cover, structural damage, and a condemnation order — from \"structural damage,\" which has its own five-element test under §627.706(2)(k).",
            "Most homes do not meet the catastrophic test, but many qualify for structural damage repair when the foundation, load-bearing walls, or building envelope have been compromised. We engage geotechnical engineers to perform standard penetration testing and ground-penetrating radar to document subsurface conditions.",
            "Sinkhole denials frequently rest on engineering reports written for the carrier. We commission independent engineering and challenge the carrier's report on its own terms — not just the conclusions, but the methodology that produced them.",
        ],
        'tq': "Sharp, knowledgeable, and a relentless defender of his clients. Got us a result no one else thought possible.",
        'who': 'MIKE',
    },
    'water': {
        'title': 'Water Damage Claims',
        'i18n': 'water', 'icon': '💧',
        'paras': [
            "Sudden and accidental water discharge — a burst pipe, a failed dishwasher hose, a refrigerator ice-maker line, a sprinkler malfunction, or a leak from the unit above in a condominium — is generally covered. Long-term seepage and gradual leaks generally are not, and the line between the two is exactly where insurers set their denial trigger.",
            "The right legal framework matters. Ensuing-loss provisions, anti-concurrent-causation language, and the difference between \"resulting damage\" and \"the leak itself\" frequently determine whether a claim pays out at \\$2,000 or \\$80,000. We map the policy language to your facts before filing the demand.",
            "Mold growth, drywall replacement, cabinetry, and contents are all often subject to sub-limits the carrier hopes you don't know about. We push for full coverage where the policy allows it, and we negotiate — and litigate — where it doesn't.",
        ],
        'tq': "I had a 15-year warranty on my concrete tile roof. The carrier wouldn't return calls. Within about a week of Hans sending a demand letter citing the relevant Florida statutes, the matter was fully resolved. I cannot recommend him highly enough.",
        'who': 'ERIC',
    },
}

PRACTICE_BODY = """
<section class="page-header">
  <div class="container">
    <p class="breadcrumbs"><a href="/" data-i18n="about.crumbHome">Home</a> · <a href="/services.html" data-i18n="services.title">What We Do</a> · <span data-i18n="services_v.{i18n}H">{title}</span></p>
    <h1 data-i18n="services_v.{i18n}H">{title}</h1>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2 data-i18n="practice.ctaTitle">Get a no-cost consultation</h2>
    <a class="btn btn-on-dark" href="/contact.html" data-i18n="practice.ctaButton">Contact Us</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row sidebar">
      <div class="prose">
        <span class="eyebrow">{icon} <span data-i18n="nav.services_dropdown.{i18n}">{title}</span></span>
        <h2 data-i18n="services_v.{i18n}H">{title}</h2>
        {paras}
        <div class="testimonial mt-4">
          <p>{tq}</p>
          <span class="who">— {who}</span>
        </div>
        <p class="mt-3"><a href="/services.html" data-i18n="practice.backToServices">← All practice areas</a></p>
      </div>
      <aside class="rail">
        <h4 data-i18n="practice.relatedTitle">Our Services</h4>
        <ul>
          <li><a href="/services/auto.html"{c_auto}     data-i18n="nav.services_dropdown.auto">Automotive Claims</a></li>
          <li><a href="/services/fire.html"{c_fire}     data-i18n="nav.services_dropdown.fire">Fire & Smoke Damage</a></li>
          <li><a href="/services/storm.html"{c_storm}    data-i18n="nav.services_dropdown.storm">Hurricane & Storm</a></li>
          <li><a href="/services/roof.html"{c_roof}     data-i18n="nav.services_dropdown.roof">Roof & Hail Damage</a></li>
          <li><a href="/services/sinkhole.html"{c_sinkhole} data-i18n="nav.services_dropdown.sinkhole">Sinkhole Damage</a></li>
          <li><a href="/services/water.html"{c_water}    data-i18n="nav.services_dropdown.water">Water Damage</a></li>
        </ul>
      </aside>
    </div>
  </div>
</section>
"""

for slug, p in PRACTICE.items():
    paras_html = "\n        ".join(f"<p>{x}</p>" for x in p['paras'])
    body = PRACTICE_BODY.format(
        title=p['title'], i18n=p['i18n'], icon=p['icon'],
        paras=paras_html, tq=p['tq'], who=p['who'],
        c_auto=' aria-current="page"' if slug == 'auto' else '',
        c_fire=' aria-current="page"' if slug == 'fire' else '',
        c_storm=' aria-current="page"' if slug == 'storm' else '',
        c_roof=' aria-current="page"' if slug == 'roof' else '',
        c_sinkhole=' aria-current="page"' if slug == 'sinkhole' else '',
        c_water=' aria-current="page"' if slug == 'water' else '',
    )
    html = shell(p['title'], f"Florida insurance-claims litigation: {p['title'].lower()}.", services=True) + body + SHELL_FOOT
    out = ROOT / 'services' / f'{slug}.html'
    out.write_text(html, encoding='utf-8')
    print(f"wrote {out}")

# ----------------------------------------------------------------
# Blog posts
# ----------------------------------------------------------------

POSTS = [
    {
        'slug': '5-reasons-hurricane-claim-denied',
        'title': '5 Reasons Your Hurricane Insurance Claim Is Denied — And One Solution',
        'date': 'Jun 20 2021', 'tag': 'Tips', 'icon': '🌀',
        'lead': "Hurricane season turns Florida into a playground for claim denials. Here are the five most common reasons carriers say no — and the one move that flips most of them.",
        'sections': [
            ('1. Wind versus flood', "Standard homeowners policies cover wind damage but exclude flood. Carriers exploit the ambiguity by attributing roof, siding and interior damage to \"rising water\" rather than wind-driven rain. Photographs taken before any standing water settles are the single most powerful tool to rebut this — but most homeowners don't take them."),
            ('2. \"Old roof\" denials', "Adjusters routinely cite pre-existing wear as the cause of post-storm damage. Florida's matching statute, when combined with roofing-engineer evidence of impact patterns consistent with the storm, generally defeats this. Maintenance records and pre-storm photos are gold here."),
            ('3. Late notice', "Most policies require prompt notice of loss. Carriers will use a months-long delay as grounds for denial even when the damage was hidden. Document discovery — when and how you found it — and report immediately."),
            ('4. \"No opening\" exclusion', "Many policies exclude interior water damage unless the storm created an \"opening\" in the roof or wall. Wind-driven rain through a ridge cap, a vent, or a damaged seal often qualifies — but only if the inspection captures it before the roofer covers it up."),
            ('5. Hurricane deductible math', "A 5% hurricane deductible on a \\$400,000 home is \\$20,000 — applied per named storm, not per year. Multiple landfalls in one season can stack deductibles. Read your declarations page carefully."),
        ],
        'solution': "The single most effective move: get a public adjuster or attorney involved before signing the carrier's first settlement. Once you sign, you've waived a lot. The first offer is rarely the last available number, and \"final\" usually isn't.",
    },
    {
        'slug': 'fire-safety-tips',
        'title': 'Fire Safety Top Tips for Your Florida Home & Business',
        'date': 'May 20 2021', 'tag': 'Tips', 'icon': '🔥',
        'lead': "Florida's combination of dry winters, lightning-prone summers and aging electrical infrastructure makes fire prevention a year-round concern. Five steps that pay for themselves the moment they matter.",
        'sections': [
            ('Working smoke detectors on every floor', "Test monthly. Replace batteries twice a year — when you change the clocks is the easiest mnemonic. Detectors expire after about ten years even if they still chirp."),
            ('A fire extinguisher in the kitchen and garage', "Know which class to use: Class A for ordinary combustibles, Class B for grease and flammable liquids, Class C for electrical fires. ABC-rated extinguishers cover all three."),
            ('Annual electrical inspection for older homes', "Pre-1980 homes often have aluminum wiring or outdated service panels. The cost of a licensed electrical inspection is trivial compared to a fire. Your insurance carrier may also reduce premium if you can document recent inspection."),
            ('Keep a written inventory and photos', "If a fire occurs, the carrier will ask for an itemized list of contents. People who already have one settle their contents claims for materially more than people who try to reconstruct from memory."),
            ('Document the moment a fire occurs', "Photograph everything — exterior damage, interior damage, points of origin if visible, and the cleanup crew's work as it happens. Mitigation costs are reimbursable but only if documented."),
        ],
        'solution': "Insurance is what happens after the fact. Prevention is what determines whether there is an after.",
    },
    {
        'slug': 'florida-claims-guide',
        'title': 'Making an Insurance Claim: A Guide for New Florida Residents',
        'date': 'Apr 25 2021', 'tag': 'Tips', 'icon': '📄',
        'lead': "If you just moved to Florida from anywhere else in the country, your insurance experience is about to change. Here's the orientation no one gave you at closing.",
        'sections': [
            ('Hurricane deductibles are different', "Unlike standard deductibles, hurricane deductibles are calculated as a percentage of dwelling coverage and apply only to named storms. They're typically 2%, 5% or 10%. Verify yours."),
            ('Sinkhole coverage is often a separate rider', "Florida is the sinkhole capital of the United States, but most policies cover only \"catastrophic ground cover collapse\" — a very narrow definition. Broader sinkhole coverage usually requires an endorsement and a separate inspection."),
            ('Flood is not in your homeowners policy', "Flood damage is excluded from standard homeowners policies and requires a separate NFIP or private flood policy. If you live anywhere within a few miles of the coast or a major waterway, get one."),
            ('Citizens Property Insurance is a real option', "Citizens is the state-backed insurer of last resort and now insures more than a million Florida homes. If private carriers won't write you, Citizens is not just a fallback — it's a serious alternative worth comparing."),
            ('Document your home before anything happens', "Walk room to room with your phone. Photograph every wall, ceiling, closet, appliance, and important content. Email it to yourself. The cost is zero. The payoff after a loss is significant."),
        ],
        'solution': "Read your declarations page now, before you need it. The five minutes you spend understanding what you actually bought will save you days of stress later.",
    },
    {
        'slug': 'home-security-tips',
        'title': 'Top Ten Security Tips for Your Florida Home',
        'date': 'Mar 25 2021', 'tag': 'Tips', 'icon': '🔒',
        'lead': "Burglary and home invasion are insurable events, but the cleanest claim is the one you never have to file. Ten low-cost upgrades that disproportionately reduce your risk.",
        'sections': [
            ('Deadbolts on every exterior door', "Single-cylinder Grade 1 deadbolts are inexpensive and dramatically harder to defeat than spring latches alone."),
            ('Reinforced strike plates with 3-inch screws', "Most kicked-in doors fail at the strike plate, not the lock. Long screws into the framing change the math entirely."),
            ('Motion-activated exterior lighting', "Cheap. Effective. Battery-powered LED units can be installed in minutes."),
            ('Visible camera coverage', "Even decoy cameras change burglar behavior. Real ones with cloud recording cost very little and document any incident from the moment it begins."),
            ('Window locks and alarm contacts', "Sliding windows are notoriously easy to defeat. A simple stop bar in the track is nearly free."),
            ('Trim landscaping near windows', "Tall hedges give cover. Low, sparse plantings remove it."),
            ('Smart-lock entry codes', "Give vendors and house cleaners temporary codes. Audit and revoke after the visit."),
            ("Don't broadcast travel on social media", "Wait until you're back to post the vacation photos."),
            ('Hold mail and packages when away', "USPS and most delivery services will hold for a vacation. Use it."),
            ('A monitored alarm system', "Even basic monitored systems may earn an insurance discount that partially offsets the monthly cost."),
        ],
        'solution': "Layered defenses work; single ones don't. The point is not to make your home impenetrable but to make it the less attractive target on the block.",
    },
    {
        'slug': 'local-favorites',
        'title': "Local Loves: Our Top Picks for Food and Drink in St. Pete's",
        'date': 'Feb 5 2021', 'tag': 'Community', 'icon': '🍽️',
        'lead': "We spend a lot of time downtown between courthouse trips and client meetings. Here are the spots that keep us going — none sponsored, all favorites.",
        'sections': [
            ('Coffee', "Bandit Coffee Co. on Central is our morning standby. Black Crow Coffee Co. for the patio. Driftwood for the pour-over."),
            ('Lunch', "Engine No. 9 for a burger that isn't apologizing. Bodega for the Cuban. Red Mesa for tacos that hold up."),
            ('Dinner', "The Library for date nights. Annata Wine Bar for the pasta and the room. Rococo Steak when somebody else is buying."),
            ('Cocktails', "Stillwaters Tavern, easily. The Mandarin Hide if you want a quieter room and a real drinks list."),
            ('Sweet', "Kahwa for affogato. The Hyppo for popsicles. Brick & Mortar for a kitchen finish that lingers."),
        ],
        'solution': "If you live in Tampa Bay and we haven't run into you at one of these places yet, give it time.",
    },
    {
        'slug': 'home-inventory',
        'title': "Why Taking a Home Inventory Is a Winning New Year's Resolution",
        'date': 'Jan 14 2021', 'tag': 'Tips', 'icon': '📋',
        'lead': "It's the one resolution that pays for itself the moment you need it — and the one almost nobody actually does.",
        'sections': [
            ('What an inventory is', "A room-by-room list of contents with photographs, approximate purchase dates, replacement values, and serial numbers for high-value items. Stored somewhere off-site — cloud storage works best."),
            ('Why it matters', "After a fire or theft, the carrier asks you to itemize what you lost. People who already have an inventory recover materially more — and faster — than people trying to reconstruct from memory."),
            ('How to do it in two hours', "Open every closet, drawer, and cabinet. Photograph everything. Note any item over \\$500 with brand, model, and approximate purchase date. Save serials for electronics and appliances. Email yourself the folder. Done."),
            ('What to include', "Furniture, electronics, appliances, jewelry, art, collectibles, sporting equipment, tools, kitchenware, contents of the garage and any storage unit. The boring stuff adds up."),
            ('Update annually', "January is a good month — slow, cold, indoor — and your tax-document gathering is already happening. Tack on an hour."),
        ],
        'solution': "If a fire happened tonight, would you remember what was in your bedroom closet? Most people can't. Take the photos.",
    },
]

POST_BODY = """
<section class="page-header">
  <div class="container">
    <p class="breadcrumbs"><a href="/" data-i18n="about.crumbHome">Home</a> · <a href="/blog.html" data-i18n="nav.blog">Blog</a> · <span>{tag}</span></p>
    <h1>{title}</h1>
    <p style="color:var(--muted);font-size:.9rem;letter-spacing:.1em;text-transform:uppercase;margin-top:.5rem;">{date} · <span class="tag">{tag}</span></p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row sidebar">
      <article class="prose">
        <p style="font-size:1.15rem;color:var(--text-soft);">{lead}</p>
        {sections}
        <h3 style="margin-top:2.5rem;">The takeaway</h3>
        <p>{solution}</p>

        <div class="cta-band" style="margin-top:3rem;border-radius:var(--radius-lg);">
          <div class="container" style="padding:1.5rem;">
            <h2 style="font-size:1.2rem;" data-i18n="practice.ctaTitle">Get a no-cost consultation</h2>
            <a class="btn btn-on-dark" href="/contact.html" data-i18n="practice.ctaButton">Contact Us</a>
          </div>
        </div>
      </article>

      <aside>
        <div class="rail">
          <h4 data-i18n="blog.recentTitle">Recent posts</h4>
          <ul>{recent}</ul>
        </div>
        <div class="rail mt-3" style="margin-top:1rem;">
          <h4 data-i18n="blog.topicsTitle">Topics</h4>
          <ul>
            <li><a href="/blog.html">Tips</a></li>
            <li><a href="/blog.html">Community</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
"""

for i, post in enumerate(POSTS):
    sections_html = ""
    for h, body in post['sections']:
        sections_html += f"\n        <h3>{h}</h3>\n        <p>{body}</p>"
    recent_html = ""
    for j, other in enumerate(POSTS):
        if j == i:
            continue
        cur = ' aria-current="page"' if False else ''
        recent_html += f'<li><a href="/blog/{other["slug"]}.html"{cur}>{other["title"]}</a></li>'
    body = POST_BODY.format(
        title=post['title'], date=post['date'], tag=post['tag'],
        lead=post['lead'], sections=sections_html, solution=post['solution'],
        recent=recent_html
    )
    html = shell(post['title'], post['lead'][:160], blog=True) + body + SHELL_FOOT
    out = ROOT / 'blog' / f'{post["slug"]}.html'
    out.write_text(html, encoding='utf-8')
    print(f"wrote {out}")

# ----------------------------------------------------------------
# Blog index
# ----------------------------------------------------------------

cards_html = ""
for p in POSTS:
    cards_html += f'''
<article class="card post-card">
  <div class="thumb" aria-hidden="true">{p["icon"]}</div>
  <div class="body">
    <div class="meta">{p["date"]} · <span class="tag">{p["tag"]}</span></div>
    <h4>{p["title"]}</h4>
    <p>{p["lead"][:160]}</p>
    <a class="card-link" href="/blog/{p["slug"]}.html" data-i18n="blog.readMore">Read more</a>
  </div>
</article>'''

blog_index_body = f'''
<section class="page-header">
  <div class="container">
    <p class="breadcrumbs"><a href="/" data-i18n="about.crumbHome">Home</a> · <span data-i18n="nav.blog">Blog</span></p>
    <h1 data-i18n="blog.title">Insights & guides</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="lead center" style="max-width:60ch;margin:0 auto 2.5rem;color:var(--text-soft);" data-i18n="blog.intro">Practical, plain-English guidance for Florida homeowners navigating insurance, storm season and property-claim disputes.</p>
    <div class="row cols-3">
      {cards_html}
    </div>
  </div>
</section>
'''

blog_index_html = shell("Blog", "Insights and guides for Florida policyholders.", blog=True) + blog_index_body + SHELL_FOOT
(ROOT / 'blog.html').write_text(blog_index_html, encoding='utf-8')
print(f"wrote {ROOT / 'blog.html'}")

# ----------------------------------------------------------------
# Contact
# ----------------------------------------------------------------

contact_body = '''
<section class="page-header">
  <div class="container">
    <p class="breadcrumbs"><a href="/" data-i18n="about.crumbHome">Home</a> · <span data-i18n="contact.title">Contact us</span></p>
    <h1 data-i18n="contact.title">Contact us</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row sidebar">
      <div>
        <p class="lead" style="color:var(--text-soft);" data-i18n="contact.intro">Tell us what happened. We respond to every inquiry within one business day, and the consultation is always free.</p>

        <form data-demo-form novalidate class="mt-4">
          <h2 data-i18n="contact.formTitle">Send a message</h2>
          <div class="form-grid cols-2">
            <div class="field">
              <label for="first" data-i18n="contact.f.first">First name</label>
              <input type="text" id="first" name="first" required>
            </div>
            <div class="field">
              <label for="last" data-i18n="contact.f.last">Last name</label>
              <input type="text" id="last" name="last" required>
            </div>
            <div class="field">
              <label for="email" data-i18n="contact.f.email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="field">
              <label for="phone" data-i18n="contact.f.phone">Phone</label>
              <input type="tel" id="phone" name="phone">
            </div>
          </div>
          <div class="field mt-3">
            <label for="claim" data-i18n="contact.f.claim">Type of claim</label>
            <select id="claim" name="claim" required data-i18n-options="contact.claims">
              <option value="" disabled selected>Select one…</option>
              <option>Auto / Property Damage</option>
              <option>Fire & Smoke</option>
              <option>Hurricane / Storm</option>
              <option>Roof / Hail</option>
              <option>Sinkhole</option>
              <option>Water / Pipe Burst</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field mt-3">
            <label for="message" data-i18n="contact.f.message">Tell us what happened</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn mt-3" data-i18n="contact.f.submit">Send Message</button>
          <div class="form-msg" role="status" data-i18n="contact.success">Demo form — your message would have been sent.</div>
        </form>
      </div>

      <aside>
        <div class="rail">
          <h4 data-i18n="contact.infoTitle">Office</h4>
          <p style="font-weight:600;"><span data-i18n="contact.addrLine1">4159 Central Avenue</span><br><span data-i18n="contact.addrLine2">St. Petersburg, FL 33713</span></p>
          <p>
            <strong data-i18n="contact.phoneLabel">Phone</strong><br>
            <a href="tel:+17278967777" data-i18n="util.phone">(727) 896-7777</a>
          </p>
          <p>
            <strong data-i18n="contact.emailLabel">Email</strong><br>
            <a href="mailto:info@hhlegal-demo.example">info@hhlegal-demo.example</a>
          </p>
          <p>
            <strong data-i18n="contact.hoursLabel">Hours</strong><br>
            <span data-i18n="contact.hours">Mon–Fri · By appointment</span>
          </p>
        </div>
      </aside>
    </div>
  </div>
</section>
'''

contact_html = shell("Contact", "Free consultation. Tell us what happened.", contact=True) + contact_body + SHELL_FOOT
(ROOT / 'contact.html').write_text(contact_html, encoding='utf-8')
print(f"wrote {ROOT / 'contact.html'}")

# ----------------------------------------------------------------
# Legal disclaimer
# ----------------------------------------------------------------

legal_body = '''
<section class="page-header">
  <div class="container">
    <p class="breadcrumbs"><a href="/" data-i18n="about.crumbHome">Home</a> · <span data-i18n="legal.title">Legal Disclaimer</span></p>
    <h1 data-i18n="legal.title">Legal Disclaimer</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <article class="prose" style="margin:0 auto;">
      <p data-i18n="legal.p1">The information on this website is provided for general informational purposes only and does not constitute legal advice. Visiting this site, contacting the firm, or transmitting information through this website does not create an attorney-client relationship.</p>

      <h2 data-i18n="legal.warrantyH">Legal warranty</h2>
      <p data-i18n="legal.warrantyP">Haahr Law Group makes no representations or warranties, express or implied, regarding the accuracy, completeness or currentness of any content on this site. Florida law and insurance-policy interpretations change frequently; do not rely on any statement here as a substitute for case-specific advice from a licensed attorney.</p>

      <h2 data-i18n="legal.liabilityH">Limitation of liability</h2>
      <p data-i18n="legal.liabilityP">In no event shall Haahr Law Group, its attorneys, staff or contributors be liable for any indirect, incidental, special or consequential damages arising out of or in connection with the use of this website.</p>

      <h2 data-i18n="legal.relH">Attorney-client relationship</h2>
      <p data-i18n="legal.relP">No attorney-client relationship is formed unless and until (a) the firm completes a conflict check and (b) a written engagement agreement is signed by both parties. Please do not send confidential information through the contact form until that relationship is established.</p>
    </article>
  </div>
</section>
'''

legal_html = shell("Legal Disclaimer", "Legal disclaimer for the demonstration site.") + legal_body + SHELL_FOOT
(ROOT / 'legal.html').write_text(legal_html, encoding='utf-8')
print(f"wrote {ROOT / 'legal.html'}")

# ----------------------------------------------------------------
# 404
# ----------------------------------------------------------------

four_oh_four_body = '''
<section class="section center" style="padding:6rem 0;">
  <div class="container">
    <p style="font-size:5rem;font-weight:800;color:var(--accent);margin:0;">404</p>
    <h1>Page not found</h1>
    <p>The page you were looking for doesn't exist on this demo site.</p>
    <p><a class="btn" href="/">Back to home</a></p>
  </div>
</section>
'''
not_found_html = shell("404", "Page not found.") + four_oh_four_body + SHELL_FOOT
(ROOT / '404.html').write_text(not_found_html, encoding='utf-8')
print(f"wrote {ROOT / '404.html'}")

print("Done.")
