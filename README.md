# Inciterz Website - Next.js

Technology + Digital Marketing growth partner site with the interactive 3D hexagon.
Built with **Next.js 14 (App Router)** and **three.js**, configured as a **static export** so it deploys to Netlify (or any static host) with zero server requirements.

**Tagline system:** Build · Market · Grow

---

## 1. Requirements

- **Node.js 18.17+ (Node 20 LTS recommended)** - check with `node -v`
- npm 9+ (ships with Node)

If you need Node, install from https://nodejs.org (LTS) or via nvm:

```bash
nvm install 20
nvm use 20
```

## 2. Run locally

```bash
# 1. unzip and enter the folder
cd inciterz-website

# 2. install dependencies (one time)
npm install

# 3. start the dev server
npm run dev
```

Open **http://localhost:3000** - hot reload is on, edit and save to see changes.

## 3. Production build (test before deploying)

```bash
npm run build
```

This creates a fully static site in the **`out/`** folder. To preview the exact production build locally:

```bash
npx serve out
```

(or any static server - `python -m http.server -d out 8080` also works)

## 4. Deploy to Netlify

The repo ships with **`netlify.toml`** already configured:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

### Option A - Git-connected (recommended)
1. Push this folder to a GitHub/GitLab repo
2. Netlify → **Add new site → Import an existing project** → pick the repo
3. Netlify reads `netlify.toml` automatically - build command and publish dir are pre-filled
4. Deploy. Done - every push redeploys automatically.

### Option B - Drag & drop (fastest one-off)
1. Run `npm run build` locally
2. Netlify → **Deploys** → drag the **`out/`** folder onto the page

### Option C - Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

No environment variables, functions, or plugins are needed - it is 100% static.

## 5. Project structure

```
inciterz-website/
├── app/
│   ├── layout.jsx                  # <head>: metadata, favicons, fonts
│   ├── page.jsx                    # homepage
│   ├── globals.css                 # all site + sub-page styles
│   ├── services/[slug]/page.jsx    # 8 service pages
│   ├── marketing/[slug]/page.jsx   # 8 marketing pages
│   ├── industries/[slug]/page.jsx  # 9 industry pages
│   ├── technologies/[slug]/page.jsx# 9 technology pages
│   └── case-studies/               # index + 3 case study pages
├── components/
│   ├── SiteContent.jsx             # approved homepage markup (pixel parity)
│   ├── SiteHeader.jsx / SiteFooter.jsx  # shared chrome for sub-pages
│   ├── PageShell.jsx               # header + main + footer wrapper
│   ├── DetailPage.jsx              # template for service/marketing/industry/tech pages
│   ├── Interactions.jsx            # nav, drawer, tabs, counters, toggles
│   └── HexScene.jsx                # 3D hexagon (homepage only)
├── data/
│   └── site.js                     # ALL sub-page content - edit copy here
├── public/images/
├── next.config.mjs · netlify.toml · package.json
```

### Editing sub-page content
Every service, marketing, industry, technology, and case-study page is generated
from **`data/site.js`**. Change a title, intro, feature, step, or metric there and
rebuild - no template edits needed. Adding a new service = add one object to the
`services` array; the page, route, and nav-ready URL exist on the next build.

### Contact, popup & blog
- **/contact/** - full contact page (form + enquiries + office info). Both this form and the
  welcome popup are wired for **Netlify Forms** (submissions appear in Netlify -> Forms after
  deploy; they do nothing on localhost, which is expected).
- **/thank-you/** - form success page.
- **Welcome popup** - appears once per browser session, 6s after landing (never on /contact).
  Tune delay/frequency in components/LeadPopup.jsx.
- **/blog/** - index + 3 full articles; content lives in the posts array in data/site.js.

### About page & detail-page layout
- **/about/** - vision/mission, core values, founder (Neetesh Yadav), team (4 members),
  journey timeline, why-us stats, CTA. Photo placeholders use initials - swap each
  .avatar-ph div for an <img> when photos arrive; the hero banner swap is a one-line
  change in .about-hero in globals.css (commented inline).
- Detail pages (services/marketing/industries/technologies) use a metric-rich layout:
  hero badge, 4 stat cards, deliver-cards with metric footers, horizontal process
  timeline, scrolling tools marquee, dark CTA banner. Stats/metrics live in
  **data/extras.js** and are representative placeholders - replace before launch.

### Careers page & recent fixes
- **/careers/** - perks, open roles list (edit the roles array in app/careers/page.jsx), and
  open-application CTA to careers@inciterz.com; linked from the contact page Career block.
- Contact page now includes the "validate the authenticity of your work" band with phone + Request Quote.
- The 3D hexagon is **hero-only** by default (it can never overlap page text). To re-enable the
  scroll journey down the page, set HERO_ONLY = false in components/HexScene.jsx.
- Homepage case-study cards rebuilt as clean single anchors linking to /case-studies/... pages.

### All routes (45 pages)
`/` · `/case-studies/` · `/case-studies/{medconnect, orbit-pay, retailflow}/`
`/services/{web-development, mobile-app-development, custom-software, saas-development, ai-solutions, ui-ux-design, ecommerce-development, devops-dedicated-teams}/`
`/marketing/{seo, performance-marketing, google-ads, meta-ads, social-media-marketing, content-marketing, branding, lead-generation}/`
`/industries/{healthcare, fintech, saas, ecommerce, real-estate, education, travel, logistics, on-demand}/`
`/technologies/{ai-llm, typescript-nodejs, python, react-nextjs, postgresql-mongodb, docker-kubernetes, aws-cloud, rest-graphql, marketing-stack}/`

The header mega-menus and mobile drawer link to all of these already.

## 6. The 3D hexagon - what it does

- **Extruded 3D version of the exact logo mark** (hexagon + arrow on both faces)
- **Drag anywhere to spin** (inertia included) · **double-click** resets the pose
- **Scroll journey**: faint watermark behind the hero → docks half-off-screen at the
  page edges through the body → footer
- **Zone-aware colours**: blue hexagon + white arrow over light sections, white
  hexagon + blue arrow over the blue footer
- **Text protection**: pixel-accurate placement, auto-dims if it ever grazes the
  content column, hides in body sections on phones
- **Performance**: pixel-ratio capped, rendering pauses on hidden tabs,
  `prefers-reduced-motion` renders a static frame

Tuning knobs live in `components/HexScene.jsx`:
- `WAY` array - the scroll waypoints (side + size per scroll position)
- `targetFade = narrow ? 0.09 : 0.11` - hero watermark opacity
- `t*0.18` in the rotation block - idle spin speed

## 7. Editing content

All copy lives in `components/SiteContent.jsx` (search for the text you want to change).
Colors and spacing live in `app/globals.css` - the design tokens are at the top:

```css
:root{
  --blue:#002FA6;      /* brand blue  */
  --accent:#00D4FF;    /* single accent (CTA + "growth") */
  ...
}
```

## 8. SEO layer (built in)
- Keyworded titles & meta descriptions on every page (India-based, serving globally positioning)
- Canonical URLs, Open Graph + Twitter cards with a branded OG image (public/images/og-image.png)
- JSON-LD structured data: Organization + WebSite (site-wide), Service (detail pages), BlogPosting (articles)
- sitemap.xml auto-generated from data/site.js at build; robots.txt in /public
- Domain is set to https://inciterz.com in app/layout.jsx (metadataBase) and app/sitemap.js - change both if the domain differs
- Unverifiable claims removed: partner badges, ratings, fictional client logos; testimonials are anonymised
  (marked in the HTML - replace with verified, attributable client quotes before launch)

## 8b. Pre-launch checklist

- [ ] Replace placeholder client names (NORTHWIND, TrailRoad, Lumen Retail)
- [ ] Replace placeholder case studies (MedConnect, Orbit Pay, RetailFlow) with real logos + verified metrics
- [ ] Point form/CTA links at the real contact endpoint
- [ ] Add a custom domain in Netlify → Domain settings
- [ ] Run Lighthouse on the deployed URL (target: 90+ across the board)

---

Built by Circle Builds · Build Smarter. Stay Managed.
