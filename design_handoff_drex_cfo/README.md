# Handoff: DreX CFO — Marketing Website

## Overview
A single-page marketing site for **DreX CFO**, a London-based fractional CFO / financial advisory firm. The page covers brand introduction, services, process, social proof, and contact. Visual language is editorial and premium: deep navy with a champagne accent, sans display type, soft curved section transitions, and subtle motion (auto-sliding testimonials, orbiting service layout, floating cards, animated radial glow).

## About the Design Files
The files in this bundle are **design references created in HTML, CSS, and vanilla JS** — a working prototype that demonstrates the intended look, layout, interactions, and motion. **They are not production code to copy verbatim.**

The task is to **recreate this design inside the target codebase's existing environment** — React/Next.js, Vue/Nuxt, SvelteKit, Astro, plain HTML, or whatever framework the project uses — following that codebase's established conventions (component structure, styling approach, design tokens, animation library). If no codebase exists yet, **Next.js + Tailwind** is a strong default for a static marketing site of this kind; **Astro** is another excellent choice when SEO and shipping minimal JS matter most.

Use this HTML as the source of truth for layout, spacing, colour, type, copy, and motion. Adapt the structure into idiomatic components for whichever framework you choose.

## Fidelity
**High-fidelity (hifi).** Colours, type, spacing, motion, and copy are all final. The HTML is pixel-accurate at the intended desktop width (~1280–1440px) and includes responsive breakpoints at 900px and 780px / 700px.

## Tech Stack Recommendation
For a static marketing site like this, recommended targets:
1. **Next.js 14+ (App Router) + Tailwind CSS** — components, easy deploy on Vercel
2. **Astro + Tailwind** — minimal JS shipped, great for SEO
3. **Plain HTML + CSS** if the client wants no build step

Avoid heavy SPA frameworks for a content site of this size.

---

## Design Tokens

### Colours
```
--navy-900:    #06152E   /* deepest navy, hero, services, testimonials, contact, footer */
--navy-800:    #0B1E3F   /* primary ink, dark cards */
--navy-700:    #102A56   /* mid navy, accents */
--navy-600:    #1A3563   /* gradient stops */
--navy-500:    #244680   /* mid-tone, em text in headings */
--blue-400:    #4A7FB8   /* lighter blue, accent gradients */
--blue-200:    #9DB8D8   /* light blue text, divider layer */
--champagne:        #D4A574   /* primary accent, links, dots, marks */
--champagne-soft:   #E6C8A0   /* hover state of champagne */
--cream:       #F5F1EA   /* alternate light bg (process section, principle middle card) */
--paper:       #FBFAF7   /* primary light bg (about, why, team) */
--ink:         #0B1E3F   /* body text on light bg */
--muted:       #5C6E89   /* secondary text on light bg */
```

### Typography
Three families loaded from Google Fonts:
- **Manrope** — primary sans, used for all headings, body, UI. Weights: 300, 400, 500, 600, 700.
- **JetBrains Mono** — used for small caps eyebrows, mono labels, counters. Weights: 400, 500.
- **Instrument Serif** — used **only** for editorial accent glyphs (large quotation marks). Not used for any heading. Weight: 400.

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

#### Type Scale (sans / Manrope unless noted)
| Use | Family | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero H1 | Manrope | clamp(2.6rem, 5.8vw, 5.2rem) | 600 | -0.04em | 1.02 |
| Section title (H2) | Manrope | clamp(2rem, 4.2vw, 3.4rem) | 600 | -0.035em | 1.05 |
| Sub-section title | Manrope | 1.7rem–2.2rem | 600 | -0.03em | 1.1 |
| Card title (H3/H4) | Manrope | 1.1rem–1.4rem | 600 | -0.02em to -0.025em | 1.2 |
| Body | Manrope | 0.95rem–1.05rem | 400 | -0.005em | 1.55–1.75 |
| Eyebrow / mono | JetBrains Mono | 0.6rem–0.72rem | 400 | 0.18em–0.22em | 1 |
| Pull-quote text | Manrope | clamp(1.5rem, 2.8vw, 2.4rem) | 400 | -0.02em | 1.3 |
| Big quote glyph `"` | Instrument Serif | 7rem | 400 (italic OK) | — | 0.5 |
| Counter (testimonials) | JetBrains Mono | 0.78rem (active 0.92rem) | 400 / 600 | 0.15em | 1 |
| Hero stats number | Manrope | 2rem | 600 | -0.03em | 1 |
| Stat label | JetBrains Mono | 0.72rem | 400 | 0.18em | 1 |

Heading emphasis (`<em>` inside titles) is rendered NOT as italic but as **champagne colour** at 500 weight (or muted navy depending on context). Italic is reserved exclusively for the Instrument Serif quote glyph.

### Spacing
Section padding is `140px 0 120px` for full sections (with the cream Process section padding `140px 0 120px` and the centre-aligned pull-quote band at `140px 0 100px`).

Section dividers between sections use **layered SVG wave bands** — typically a 32px-tall multi-band gradient (see "Section Dividers" below). Cream→Paper transitions use a shorter, more subtle 20px-tall divider.

Card padding: typically `36–48px`. Inner radius: `18px–24px`. Outer container radius: `24px–32px`.

### Radius scale
- 18px — small cards (orbital service cards, testimonial cards, fact blocks)
- 22–24px — main cards
- 32px — large containers (principles wrapper, problem card, founder image, contact card)
- 999px — pills, dots, avatars, buttons

### Shadows
Always navy-toned (no neutral grey shadows):
```
/* card hover lift on light bg */
box-shadow: 0 20px 60px rgba(11,30,63,.06);

/* dark theme floating card */
box-shadow: 0 24px 60px rgba(0,0,0,.5);

/* hero core glow */
box-shadow: 0 30px 80px rgba(6,21,46,.7), inset 0 0 60px rgba(212,165,116,.08);
```

---

## Page Structure (top to bottom)

### 0. Fixed Nav
- Fixed top, full-width
- 22px vertical padding by default; compresses to 14px + adds `rgba(11,30,63,.88)` backdrop-blur(16px) bg when `window.scrollY > 30`
- Left: logo mark (34×34 champagne gradient circle with "D") + "DreX **CFO**" wordmark (X is champagne 700-weight)
- Right: 4 links + 1 pill CTA ("Book a call →"); links hide below 780px

### 1. Hero (4 variants, switchable)
Full-viewport (`min-height: 100vh`), navy bg, white text. A top-right pill cluster ("01 · Video / 02 · Data / 03 · Editorial / 04 · Orbs") switches between four hero variants.

A bottom-centre **glass pill stats strip** is rendered for all variants (hidden below 780px):
```
100+ · Clients served    |    £40M+ · Revenue analysed    |    100% · 5-star satisfaction
```

#### Variant 1 — Video Sky (default)
- Background: `<video autoplay muted loop playsinline>` of an animated sky (`assets/sky-hero.mp4`)
- Over the video, three stacked overlays:
  1. Radial darkening gradient from top-left
  2. Vertical dark-fade gradient
  3. Cool blue tint layer
- Plus an inset box-shadow vignette and 24 floating champagne particles (CSS `@keyframes rise`)
- Tagline pill: "Available · London & Worldwide"
- H1: "Smarter financial **leadership.** Automated. Always on." (em is champagne)
- Two CTAs: champagne primary "Schedule a free consultation", ghost "Explore services"

#### Variant 2 — Data
- Right column: 3 floating glass dashboard cards (revenue bars, burn donut, runway sparkline)
- Cards animate with `@keyframes floatA` (6s, staggered)
- H1: "Finance that **thinks** as fast as you do."

#### Variant 3 — Editorial
- Right column: portrait placeholder (3:4, rounded top, repeating-stripe pattern) + a slowly-spinning champagne badge: "Trusted by 100+ founders worldwide"
- H1: "The CFO your business **deserves** — without the overhead."

#### Variant 4 — Orbs
- Three large blurred orbs (`blur(80px)`) drift via `@keyframes driftA`
- Marquee of service names scrolling at the bottom
- H1 centred: "Smarter finances. **Automated** insights. Measurable growth."

### 2. About
Light paper bg (`#FBFAF7`). Three sub-blocks:
1. **Header** — eyebrow "ABOUT / OUR STORY", section title, intro paragraph (max 880px wide, left-aligned)
2. **Body** — 1.4fr / 1fr split:
   - Left: 3-paragraph founder story. First letter of paragraph 1 is a 3.6rem champagne drop cap, floated left, line-height 0.85
   - Right (sticky to viewport top): a `<aside class="about-facts">` with 5 fact blocks (Founded, Founder, Sectors, Engagement model, Coverage) — cream container, hairline dividers, last one is highlighted with champagne border + paper bg
3. **Pull quote** — full-bleed band:
   - "A NOTE FROM THE FOUNDER" eyebrow with two hairlines
   - 7rem champagne `"` quote glyph in Instrument Serif
   - Large centred quote with one `<em>` champagne word
   - Author signature with a 60px navy hairline on the left
   - Credential chips row: ACCA · CFA · MSc Business Analytics · BSc Accounting & Finance
   - Soft radial backdrop + slowly rotating dashed champagne ring (animation: `spinSlow 120s linear infinite`)
4. **Principles** — three light cards in a row (paper, cream, paper alternating):
   - Each has a giant champagne watermark numeral (`01`, `02`, `03`) bleeding off top-right
   - A small geometric mark (circle / diamond / square) paired with a hairline rule
   - A JetBrains Mono eyebrow ("Foundation", "Direction", "Leverage")
   - Title + body + bottom mono tagline divider
   - Hover warms the bg slightly

### 3. Services — Orbital
Full-dark section. Central DreX logo with 5 service cards floating around it.

**Centre core** (`.orbit-core`):
- 240×240 circle, radial-gradient bg from navy-700 to navy-900
- 1px solid champagne border (35% alpha)
- Two rotating dashed rings around it (animations: `spinSlow 60s` and `spinSlow 120s reverse`)
- Inside: a 64px champagne disc with "D", "DreX CFO" wordmark, "AT THE CENTRE" eyebrow

**Service cards** (`.orbit-svc[data-pos="1..5"]`):
- 250px wide glass cards, positioned absolutely at:
  - `[data-pos="1"]` top center (top:0, left:50%)
  - `[data-pos="2"]` top-right (top:30%, right:0)
  - `[data-pos="3"]` bottom-right (bottom:0, right:9%)
  - `[data-pos="4"]` bottom-left (bottom:0, left:9%)
  - `[data-pos="5"]` top-left (top:30%, left:0)
- Each floats up and down ~12px with `@keyframes floatY` (5.5s loop, staggered delays). Uses `@property --y` so the float transform composes cleanly with `translate(-50%, ...)` on card 1.
- **Hover pauses the float** + warmer border + heavier shadow.

**Arrow lines** (`<svg class="orbit-svg">`):
- Each service has a dashed champagne path with arrowhead pointing inward toward the core
- Gradient stroke (0.25 alpha at start, 0.9 at end), `stroke-dasharray="5 6"`, `stroke-width 1.5`
- The marker is a 9×9 champagne triangle, orient `auto`, `markerUnits=strokeWidth`

**Centre glow** (`.orbit::before`):
- Two stacked radial gradients emanating from the orbit centre:
  1. Tight 220px champagne core (rgba(229,200,160,.55) → 0)
  2. Wider 55%×60% blue-tinted ellipse (rgba(74,127,184,.22) → 0)
- Pulses opacity 1 ↔ 0.78 over 7s

Mobile (<900px): orbit becomes a stacked column. SVG and core ring decorations hidden. Float animation disabled.

### 4. How It Works — light row list
Cream bg. A 5-row list of process steps mirroring the OLD services pattern:
- Row grid: `80px / 1.4fr / 2fr / auto` (number / name / desc / arrow)
- Rows separated by hairlines (`background: rgba(11,30,63,.08)` grid gap of 2px)
- Hover: row bg → `#FCFAEF`, arrow rotates -45° into a navy disc with champagne icon
- Mobile: rows collapse to 1 column, hide arrow

Steps:
1. Free Consultation
2. Financial Assessment
3. Custom Strategy & Roadmap
4. Implementation & Integration
5. Ongoing Monitoring & Support

### 5. Why DreX CFO
Light paper bg. Two-column:
- **Left** (.9fr): "The problem we solve" dark navy gradient card with a "bridge" visual: `[Bookkeeper]  →  DreX · the bridge  ←  [Full-time CFO]`
- **Right** (1.1fr): 4 differentiator rows in cream cards, each with a 48px navy disc icon (`+`, `~`, `→`, `✦`). Hover translates row 6px right.

### 6. Testimonials — 3-up Carousel
Dark navy gradient bg. Auto-sliding carousel.

**Frame**:
- Top meta row: "VERIFIED REVIEWS" eyebrow on the left + "01 / 04" counter on the right (active digit gets full white + 600 weight, transitions via `.flipping` class)
- Track of 4 testimonial cards (cloned cards appended for seamless loop)
- Cards: glass bg, 22px radius, 380px min-height, with `★★★★★`, service tag pill, blockquote with one champagne em-word, author block (avatar + name + role)
- **Cards visible**: 3 on desktop (>1000px), 2 on tablet (700–1000px), 1 on mobile (<700px)
- Bottom controls: dots (left), thin champagne progress bar (centre, animates `@keyframes progRun` over 6.5s), prev/next arrow buttons (right)

**Behaviour**:
- Auto-advances every 6.5s when in viewport (`IntersectionObserver`)
- Pauses on hover, resumes on mouse leave
- Direction-aware prev: from index 0, invisibly jumps to clone-end then animates back
- Dot click jumps; arrow click steps ±1
- Resize re-builds clones based on perView

### 7. Team — Founder
Light paper bg. Two-column:
- **Left** (1fr): founder portrait placeholder (4:5, 32px radius, repeating-stripe pattern, "FOUNDER · HAROON" caption, "Haroon — Founder · DreX CFO" signature overlay at bottom)
- **Right** (1.4fr): role eyebrow, h3 with em, two paragraphs of bio, qualification chips (ACCA, CFA, MSc Business Analytics, BSc Accounting & Finance)

### 8. Contact
Dark navy bg. Two-column:
- **Left** (1.1fr): eyebrow "CONTACT", large H2 "Let's talk about **your business.**", subtext, then a 5-row info grid (Phone, Email, Location, Hours, Calendar) with 120px mono labels in champagne + values in white
- **Right** (.9fr): a glass form card with 4 fields (Name, Company, Email, message textarea) using minimal underline-only inputs, plus a full-width champagne submit button

### 9. Footer
Off-black `#040D1F`. Four columns:
- Brand block: logo + description
- Services links (5)
- Company links (4)
- Contact links (4)
- Bottom row: copyright + footer tagline ("Smarter finances. Automated insights. Measurable growth.")

---

## Section Dividers (curved tide bands)

There are no hard horizontal section borders. Every section meets the next through an SVG **layered wave divider** — typically 32px tall (20px for the subtle cream→paper transition) with 4 stacked single-bow paths in progressively lighter colours.

For example, navy → paper:
```svg
<svg class="divider" viewBox="0 0 1440 160" preserveAspectRatio="none">
  <rect width="1440" height="160" fill="#06152E"/>
  <path d="M0,28 C480,72 960,72 1440,28 ..." fill="#102A56"/>  <!-- mid navy -->
  <path d="M0,70 C480,108 960,108 1440,70 ..." fill="#3D5A88"/>  <!-- dusty blue -->
  <path d="M0,108 C480,138 960,138 1440,108 ..." fill="#A8B6CC"/> <!-- grey-blue -->
  <path d="M0,138 C480,162 960,162 1440,138 ..." fill="#FBFAF7"/>  <!-- paper -->
</svg>
```

Reverse the colour stack for paper → navy. Use intermediate bridge colours: `#D4D8D2` (warm-cool neutral), `#8FA4BE` (dusty blue), then the destination dark.

The SVG must use `preserveAspectRatio="none"` and have the top half filled with the source-section colour to prevent a flat seam.

---

## Interactions & Behaviour

### Nav
- Listen to `scroll`, toggle `.scrolled` class on `<nav>` when `scrollY > 30`

### Reveal-on-scroll
- All `.reveal` elements start at `opacity:0; transform: translateY(28px)`
- `IntersectionObserver` adds `.in` when 12% visible → tweens to `opacity:1; transform:none` over 0.9s
- Stagger delays via `.d1` (.1s), `.d2` (.2s), `.d3` (.3s), `.d4` (.4s) classes

### Hero variant switcher
- Click handler on `#heroSwitch` — toggles `.active` on the clicked button and the matching `.hero-variant[data-variant]`
- Variants are absolute-positioned siblings, cross-faded with `opacity` transition

### Hero stat counters
Original spec had animated count-up. Currently the stats render as plain text in the hero glass pill. If you want count-up: use `IntersectionObserver` → ease-out-cubic tween from 0 to target over 1.6s.

### Orbital service cards
- `@keyframes floatY` with `@property --y` registered length custom prop
- Each card has a staggered `animation-delay`
- Hover → `animation-play-state: paused` + brighter border / shadow
- Centre core has two rotating dashed rings (60s + 120s reverse)
- Glow pulses (`@keyframes glowPulse`)

### Testimonials carousel
See full pseudo-code in the HTML source. Key points:
- Real card count = 4; clone first `perView` cards and append at runtime
- `perView` recalculates on resize (3 / 2 / 1)
- `step(dir)` increments `pos`, applies a translateX, and snap-resets to 0 (no animation) once it overshoots the real count
- Auto-advance only runs while `IntersectionObserver` reports the frame is in view
- Hover pauses both the timer and the progress fill animation

### Pull-quote ring
- `.pullquote-wrap::after` is a 760px dashed champagne circle behind the quote
- Animates `@keyframes spinSlow` (120s linear infinite)

---

## Responsive Breakpoints
- **>1000px**: 3-up testimonials, full orbital, sticky facts sidebar
- **900px**: orbit collapses to column, principles stack
- **780px**: hero stats hide, nav links collapse, services-head/process-head become single column
- **700px**: testimonials become 1-up

---

## Assets

| File | Purpose |
|---|---|
| `assets/sky-hero.mp4` | Hero variant 1 background video — animated sky/clouds. Provided. |
| Founder portrait | **Placeholder** — striped repeating-gradient with "FOUNDER · HAROON" caption. **Replace with a real photo** in production. |
| Logo / brand mark | Implemented as CSS — 34px champagne gradient circle with "D". A proper SVG logo should replace this in production. |

---

## Copy Source
All copy is final and approved by the client. The full source content is captured in the HTML inside each section. Do not change wording unless the client explicitly approves.

Particular things to keep exact:
- Tagline: "Smarter Finances. Automated Insights. Measurable Growth."
- Founder quote (pull quote)
- Service descriptions (in orbital cards)
- Step descriptions (in process rows)
- Testimonial quotes
- All credentials: ACCA · CFA · MSc Business Analytics · BSc Accounting & Finance

---

## Files in this bundle

| File | What it is |
|---|---|
| `DreX CFO.html` | Full single-file HTML prototype — all sections, styles, and JS inline. Reference this for exact layout, colours, motion. |
| `assets/sky-hero.mp4` | Hero background video. |
| `README.md` | This document. |

---

## Implementation Checklist

When recreating in the target codebase:

1. Set up the chosen framework with proper font loading (Manrope, JetBrains Mono, Instrument Serif from Google Fonts).
2. Lift the colour tokens, spacing, and radius scale into the design system (Tailwind config / CSS variables / theme file).
3. Build components in this order:
   - Layout shell (nav, footer)
   - Hero with the 4-variant switcher (or pick one variant if the client now wants a single hero)
   - Section divider helper component (takes `from` and `to` colour props)
   - About section (with sticky facts sidebar)
   - Pull-quote band component
   - Principle cards
   - Orbital services component (CSS Grid won't help here — use absolute positioning + the SVG overlay)
   - How-it-works row list
   - Why-us section
   - Testimonials carousel (a real library like Embla is fine, or hand-roll with a transform-translate + clone strategy)
   - Team
   - Contact form (wire to whatever backend / form service the client uses — Formspree, Resend, etc.)
4. Wire up the auto-rotating animations and reveal-on-scroll.
5. Add a real founder photo, real logo SVG, and proper favicon.
6. Add real Calendly link, real email, real form handler, real submit-button behaviour.
7. SEO / OpenGraph / `<meta>` tags / sitemap / structured data (Organization, LocalBusiness for London).
8. Performance pass — preload the hero video poster, lazy-load below-fold images, audit bundle size.

---

## Open Questions for the Client (recommend resolving before build)
1. Real founder portrait — square, vertical, or environmental?
2. Is the brand mark just "D" in a circle, or is there a proper logotype SVG?
3. Calendly URL — confirm.
4. Form submission endpoint / email forwarding.
5. Single hero variant for launch, or keep the switcher live in production?
6. Real testimonial quotes & attribution (current four are paraphrased templates).
