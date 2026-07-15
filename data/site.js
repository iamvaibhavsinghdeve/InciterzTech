// ---------------------------------------------------------------------------
// All sub-page content lives here. Edit copy in ONE place; templates render it.
// ---------------------------------------------------------------------------

export const services = [
  {
    slug: 'web-development', title: 'Web Development', accent: 'Web',
    intro: 'Fast, conversion-ready websites and web applications engineered for scale. From marketing sites that rank to complex web apps with real-time features - built on modern stacks, measured against business outcomes.',
    features: [
      ['Custom Websites', 'Bespoke, CMS-ready marketing sites with performance budgets baked in - Core Web Vitals green from day one.'],
      ['Web Applications', 'React/Next.js applications with clean architecture, tested APIs, and room to grow past the MVP.'],
      ['Progressive Web Apps', 'App-like speed and offline capability without the app-store overhead.'],
      ['Migration & Rebuilds', 'Move off slow legacy platforms without losing rankings, data, or momentum.'],
    ],
    steps: [
      ['Discovery & Scope', 'We map goals, users, and technical constraints into a build plan with a fixed milestone schedule.'],
      ['Design & Prototype', 'Clickable prototypes validated with you before a line of production code.'],
      ['Build & QA', 'Weekly demo builds, automated testing, and staging reviews - no surprises.'],
      ['Launch & Iterate', 'Zero-downtime launch, analytics wiring, and a 30-day optimisation window.'],
    ],
    chips: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Headless CMS', 'Netlify / Vercel'],
  },
  {
    slug: 'mobile-app-development', title: 'Mobile App Development', accent: 'Mobile',
    intro: 'iOS, Android, and cross-platform apps your users keep on their home screen. We handle the full cycle - strategy, design, build, store approval, and the analytics loop after launch.',
    features: [
      ['Cross-Platform Apps', 'React Native and Flutter builds that ship to both stores from one codebase.'],
      ['Native Performance', 'Platform-specific optimisation where it matters: startup time, animations, offline sync.'],
      ['Backend & APIs', 'Secure, scalable backends purpose-built for mobile traffic patterns.'],
      ['Store Launch & ASO', 'Listing assets, review compliance, and app-store optimisation handled end to end.'],
    ],
    steps: [
      ['Product Definition', 'User journeys, feature priorities, and a lean v1 scope that ships in weeks, not quarters.'],
      ['UX & UI Design', 'Native-feeling interfaces designed against real device constraints.'],
      ['Agile Build', 'Two-week sprints with TestFlight/Play beta builds you can hold in your hand.'],
      ['Launch & Grow', 'Crash monitoring, analytics funnels, and a release cadence for continuous improvement.'],
    ],
    chips: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store / Play'],
  },
  {
    slug: 'custom-software', title: 'Custom Software Development', accent: 'Custom',
    intro: 'Bespoke systems engineered around how your team actually works - internal tools, client portals, workflow automation, and integrations that remove manual work from your pipeline.',
    features: [
      ['Internal Tools & Portals', 'Dashboards, admin panels, and client portals that replace spreadsheet chaos.'],
      ['Workflow Automation', 'Connect the systems you already use and automate the handoffs between them.'],
      ['Legacy Modernisation', 'Incrementally replace ageing systems without a risky big-bang rewrite.'],
      ['Third-Party Integrations', 'CRMs, ERPs, payment providers, and messaging - stitched into one coherent flow.'],
    ],
    steps: [
      ['Process Mapping', 'We shadow the real workflow first - the software is designed around it, not the reverse.'],
      ['Architecture', 'A right-sized technical design: no over-engineering, no dead ends.'],
      ['Iterative Delivery', 'Working software every sprint, prioritised by operational impact.'],
      ['Handover & Support', 'Documentation, training, and an SLA that keeps it running.'],
    ],
    chips: ['Node.js', 'Python', 'PostgreSQL', 'REST / GraphQL', 'Docker', 'CI/CD'],
  },
  {
    slug: 'saas-development', title: 'SaaS Development', accent: 'SaaS',
    intro: 'From MVP to multi-tenant platform - SaaS products built to be sold, scaled, and maintained. Billing, auth, roles, and analytics come standard, so you focus on the product.',
    features: [
      ['MVP in Weeks', 'A focused first version that validates the market before you over-invest.'],
      ['Multi-Tenant Architecture', 'Secure tenant isolation, role-based access, and usage metering from day one.'],
      ['Subscription Billing', 'Stripe-powered plans, trials, upgrades, and dunning - production-grade billing logic.'],
      ['Scale Readiness', 'Monitoring, autoscaling, and load-tested infrastructure before your launch spike.'],
    ],
    steps: [
      ['Product Strategy', 'Positioning, pricing model, and the feature line for v1 vs. the roadmap.'],
      ['Design System', 'A reusable UI kit so every future feature ships faster and looks consistent.'],
      ['Core Build', 'Auth, tenancy, billing, and your differentiating features - in that order.'],
      ['Launch & Iterate', 'Feature flags, analytics, and a feedback loop wired into the roadmap.'],
    ],
    chips: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Multi-tenancy'],
  },
  {
    slug: 'ai-solutions', title: 'AI Solutions', accent: 'AI',
    intro: 'Applied AI that removes manual work from your pipeline - LLM-powered assistants, document intelligence, and automation that pays for itself in saved hours, not hype.',
    features: [
      ['LLM Applications', 'Custom assistants and copilots built on Claude, GPT, and open models - grounded in your data.'],
      ['Document Intelligence', 'Extract, classify, and summarise contracts, invoices, and reports automatically.'],
      ['Process Automation', 'AI-in-the-loop workflows: triage, drafting, QA, and routing with human oversight.'],
      ['AI Strategy & Audit', 'A pragmatic map of where AI actually moves your numbers - and where it does not.'],
    ],
    steps: [
      ['Use-Case Discovery', 'We identify the highest-ROI workflow, not the flashiest demo.'],
      ['Prototype', 'A working proof-of-concept on your real data within weeks.'],
      ['Production Build', 'Evaluation suites, guardrails, monitoring, and cost controls.'],
      ['Adopt & Expand', 'Team training and a rollout plan that compounds across departments.'],
    ],
    chips: ['Claude API', 'OpenAI', 'RAG', 'Python', 'LangChain', 'Vector DBs'],
  },
  {
    slug: 'ui-ux-design', title: 'UI/UX Design', accent: 'Design',
    intro: 'Interfaces designed for clarity first, decoration second. Research-backed UX and a polished UI system that makes your product feel inevitable - and your funnel convert.',
    features: [
      ['Product Design', 'End-to-end UX for web and mobile apps: flows, wireframes, and high-fidelity UI.'],
      ['Design Systems', 'Token-based component libraries your developers actually enjoy using.'],
      ['Conversion Design', 'Landing pages and funnels designed against data, then A/B validated.'],
      ['UX Audits', 'A prioritised teardown of where your current product leaks users and revenue.'],
    ],
    steps: [
      ['Research', 'User interviews, analytics review, and competitor teardown.'],
      ['Wireframes', 'Low-fi structure agreed fast, before pixels get precious.'],
      ['UI & Prototype', 'High-fidelity screens and clickable prototypes for real user testing.'],
      ['Handoff', 'Dev-ready specs, tokens, and a living Figma source of truth.'],
    ],
    chips: ['Figma', 'Design Tokens', 'Prototyping', 'User Testing', 'Accessibility', 'A/B Testing'],
  },
  {
    slug: 'ecommerce-development', title: 'E-commerce Development', accent: 'E-commerce',
    intro: 'Storefronts engineered to convert - on Shopify or fully headless. Speed, merchandising, and checkout optimisation treated as revenue features, not afterthoughts.',
    features: [
      ['Shopify Builds', 'Custom themes and apps that keep the platform simple and the brand distinctive.'],
      ['Headless Commerce', 'Next.js storefronts on Shopify/Medusa backends for maximum speed and flexibility.'],
      ['Checkout Optimisation', 'Reduce abandonment with measured UX changes across the purchase path.'],
      ['Integrations', 'ERP, logistics, reviews, subscriptions, and marketing tools connected cleanly.'],
    ],
    steps: [
      ['Store Audit / Plan', 'Baseline conversion metrics and a prioritised build plan.'],
      ['Design & Build', 'Mobile-first storefront with performance budgets enforced.'],
      ['Data & Tracking', 'Server-side tracking, product feeds, and clean analytics.'],
      ['CRO Programme', 'A testing roadmap that lifts revenue per visitor month over month.'],
    ],
    chips: ['Shopify', 'Next.js', 'Headless', 'Stripe / Razorpay', 'Klaviyo', 'GA4'],
  },
  {
    slug: 'devops-dedicated-teams', title: 'DevOps & Dedicated Teams', accent: 'DevOps',
    intro: 'Reliable infrastructure and vetted engineers embedded in your workflow. CI/CD, monitoring, and cloud cost control - plus dedicated developers hired without the overhead.',
    features: [
      ['CI/CD Pipelines', 'Automated build, test, and deploy so releases stay boring and frequent.'],
      ['Cloud Infrastructure', 'AWS architecture that is secure, observable, and right-sized for your bill.'],
      ['Monitoring & SRE', 'Alerting, logging, and uptime SLOs before incidents find you.'],
      ['Dedicated Developers', 'Full-stack, AI, and frontend engineers integrated into your standups within a week.'],
    ],
    steps: [
      ['Assessment', 'Infrastructure and team-gap audit with a 90-day improvement plan.'],
      ['Stabilise', 'Pipelines, environments, and monitoring brought to production standard.'],
      ['Staff & Integrate', 'Matched engineers onboarded into your tools, rituals, and codebase.'],
      ['Operate & Optimise', 'Ongoing SRE, cost reviews, and quarterly capacity planning.'],
    ],
    chips: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Grafana'],
  },
];

export const marketing = [
  {
    slug: 'seo', title: 'SEO', accent: 'SEO',
    intro: 'Compounding organic traffic built on technical, content, and authority SEO. We rank for the terms your buyers search - and tie every ranking to pipeline, not vanity charts.',
    features: [
      ['Technical SEO', 'Crawlability, Core Web Vitals, schema, and index hygiene handled by engineers.'],
      ['Content Strategy', 'Keyword clusters mapped to buyer intent, with an editorial engine that ships.'],
      ['Authority Building', 'Digital PR and clean link acquisition - earned placements only - clean, policy-safe practices.'],
      ['Local & International', 'Multi-location and multi-language SEO with correct hreflang and GBP setup.'],
    ],
    steps: [
      ['Audit & Baseline', 'Full technical + content audit with a prioritised impact roadmap.'],
      ['Fix & Foundations', 'Technical debt cleared, tracking corrected, quick wins shipped.'],
      ['Content Engine', 'A publishing cadence targeting clusters that convert.'],
      ['Compound & Report', 'Monthly reporting on rankings, traffic, and - critically - leads.'],
    ],
    chips: ['Ahrefs', 'Search Console', 'Screaming Frog', 'Schema', 'GA4', 'Looker Studio'],
  },
  {
    slug: 'performance-marketing', title: 'Performance Marketing', accent: 'Performance',
    intro: 'Full-funnel paid strategy tied directly to pipeline. Creative, targeting, and landing pages managed as one system - measured on CAC and ROAS, not clicks.',
    features: [
      ['Full-Funnel Strategy', 'Awareness to retention mapped across channels with clear budget logic.'],
      ['Creative Testing', 'A structured ad-creative pipeline: hypotheses, variants, and verdicts weekly.'],
      ['Landing Page CRO', 'Paid traffic lands on pages built and tested to convert it.'],
      ['Attribution & Reporting', 'Server-side tracking and dashboards that show true cost per acquisition.'],
    ],
    steps: [
      ['Account & Funnel Audit', 'Where spend leaks today, and the 90-day plan to stop it.'],
      ['Tracking Foundation', 'Pixels, conversions API, and CRM events wired correctly.'],
      ['Launch & Test', 'Campaign structure built for learning speed.'],
      ['Scale Winners', 'Budget shifts to proven audiences and creative - continuously.'],
    ],
    chips: ['Meta Ads', 'Google Ads', 'GA4', 'Conversions API', 'Hotjar', 'Looker Studio'],
  },
  {
    slug: 'google-ads', title: 'Google Ads (PPC)', accent: 'Google Ads',
    intro: 'Search, Shopping, and Performance Max campaigns built for efficient cost per acquisition. Intent-first structure, ruthless negative lists, and landing pages that close.',
    features: [
      ['Search Campaigns', 'Tight ad groups on buyer-intent keywords with extensions that lift CTR.'],
      ['Shopping & PMax', 'Feed optimisation and asset groups engineered for profitable scale.'],
      ['Remarketing', 'Sequenced follow-up across Display and YouTube that recovers lost demand.'],
      ['Script Automation', 'Custom scripts for bid guards, budget pacing, and anomaly alerts.'],
    ],
    steps: [
      ['Account Audit', 'Wasted-spend analysis and restructure plan.'],
      ['Rebuild', 'Conversion-first campaign structure and clean tracking.'],
      ['Optimise', 'Weekly query mining, bid strategy tuning, and ad testing.'],
      ['Scale', 'Expand what is profitable; kill what is not - documented monthly.'],
    ],
    chips: ['Google Ads', 'GA4', 'Merchant Center', 'Ads Scripts', 'CallRail', 'Looker Studio'],
  },
  {
    slug: 'meta-ads', title: 'Meta Ads', accent: 'Meta',
    intro: 'Creative-led Facebook and Instagram campaigns tuned continuously for real ROAS. We treat creative as the targeting - and test it like engineers.',
    features: [
      ['Creative Strategy', 'Hooks, angles, and formats mapped to each funnel stage.'],
      ['UGC & Production', 'A steady supply of native-feeling ad creative that does not fatigue.'],
      ['Audience Architecture', 'Broad + signal-based structures built for the post-iOS14 reality.'],
      ['Retention Loops', 'Retargeting and CRM audiences that raise lifetime value.'],
    ],
    steps: [
      ['Audit & Angles', 'Account teardown plus a creative-angle map from customer research.'],
      ['Tracking Setup', 'Pixel + Conversions API for trustworthy optimisation data.'],
      ['Test Sprints', 'Weekly creative tests with clear kill/scale rules.'],
      ['Scale & Systemise', 'Winning DNA documented and reproduced on schedule.'],
    ],
    chips: ['Meta Ads', 'Conversions API', 'UGC', 'Advantage+', 'Klaviyo', 'GA4'],
  },
  {
    slug: 'social-media-marketing', title: 'Social Media Marketing', accent: 'Social',
    intro: 'Organic and paid social that builds a real audience, not just reach. Consistent presence, native content, and community management that turns followers into pipeline.',
    features: [
      ['Channel Strategy', 'The right platforms for your buyers - and a posting cadence you can sustain.'],
      ['Content Production', 'Reels, carousels, and posts designed in your brand system.'],
      ['Community Management', 'Comments, DMs, and reviews handled with brand-safe playbooks.'],
      ['Social + Paid Synergy', 'Organic winners promoted; paid learnings fed back into content.'],
    ],
    steps: [
      ['Brand & Audience', 'Voice, pillars, and platform priorities defined.'],
      ['Content Calendar', 'A monthly calendar approved in one review, not ten.'],
      ['Publish & Engage', 'Reliable execution with community response SLAs.'],
      ['Analyse & Adjust', 'Monthly insight reports that change next month plan.'],
    ],
    chips: ['Instagram', 'LinkedIn', 'YouTube', 'Buffer / Later', 'Canva / Figma', 'Analytics'],
  },
  {
    slug: 'content-marketing', title: 'Content Marketing', accent: 'Content',
    intro: 'Editorial calendars and long-form content that earn rankings and trust. Strategy-first: every asset maps to a keyword cluster, a funnel stage, and a distribution plan.',
    features: [
      ['Editorial Strategy', 'Topic clusters built from search data and sales-call insight.'],
      ['Long-Form Content', 'Guides, comparisons, and thought leadership that actually get read.'],
      ['Content Ops', 'Briefs, SME interviews, editing, and publishing - a reliable pipeline.'],
      ['Distribution', 'Repurposing into social, email, and sales enablement so nothing ships once.'],
    ],
    steps: [
      ['Cluster Research', 'Where content can win traffic your ads currently buy.'],
      ['Calendar & Briefs', 'A 90-day plan with detailed briefs per asset.'],
      ['Produce & Publish', 'Consistent, edited, on-brand output.'],
      ['Measure & Refresh', 'Decay monitoring and refresh cycles that protect rankings.'],
    ],
    chips: ['Ahrefs', 'Surfer / Clearscope', 'CMS', 'Grammarly', 'GA4', 'Search Console'],
  },
  {
    slug: 'branding', title: 'Branding', accent: 'Brand',
    intro: 'Identity, positioning, and messaging that make every growth channel work harder. A brand system your team can actually apply - consistently, everywhere.',
    features: [
      ['Positioning & Messaging', 'A sharp answer to "why you" - written for buyers, not brochures.'],
      ['Visual Identity', 'Logo system, palette, typography, and usage rules built for digital-first use.'],
      ['Brand Guidelines', 'A practical playbook covering voice, design, and application.'],
      ['Launch & Rollout', 'Website, decks, and social templates updated in one coordinated push.'],
    ],
    steps: [
      ['Discovery', 'Stakeholder interviews, customer research, and competitor mapping.'],
      ['Strategy', 'Positioning, architecture, and messaging hierarchy agreed.'],
      ['Identity Design', 'Concepts, refinement, and the full visual system.'],
      ['Deliver & Enable', 'Guidelines, asset library, and team onboarding.'],
    ],
    chips: ['Positioning', 'Messaging', 'Identity', 'Guidelines', 'Figma', 'Templates'],
  },
  {
    slug: 'lead-generation', title: 'Lead Generation', accent: 'Leads',
    intro: 'Multi-channel demand capture with qualification built in from day one. Landing pages, offers, and follow-up automation that hand sales genuinely ready conversations.',
    features: [
      ['Offer & Funnel Design', 'Lead magnets and funnels matched to real buying triggers.'],
      ['Landing Pages', 'Fast, focused pages built to convert cold traffic.'],
      ['Qualification & Routing', 'Forms, enrichment, and scoring so sales sees quality, not volume.'],
      ['Nurture Automation', 'Email/WhatsApp sequences that warm leads until they are sales-ready.'],
    ],
    steps: [
      ['ICP & Offer', 'Define who converts and what earns their contact details.'],
      ['Build the Machine', 'Pages, tracking, CRM, and automations connected end to end.'],
      ['Drive Demand', 'Paid + organic channels feeding one measurable funnel.'],
      ['Optimise CPL→CAC', 'Weekly funnel reviews tuned to cost per qualified lead.'],
    ],
    chips: ['HubSpot / Zoho', 'Landing Pages', 'Email Automation', 'WhatsApp API', 'Enrichment', 'GA4'],
  },
  {
    slug: 'app-marketing', title: 'App Marketing & Strategy', accent: 'Apps',
    intro: 'ASO, paid user acquisition, and retention strategy across iOS and Android. We treat installs as the start of the funnel, not the goal - measured on activated, retained users.',
    features: [
      ['App Store Optimisation', 'Keywords, screenshots, and listing tests that lift organic install share.'],
      ['Paid User Acquisition', 'Apple Search Ads, Google App Campaigns, and Meta app installs run to CPA.'],
      ['Onboarding & Activation', 'First-session flows tuned so installs become active users.'],
      ['Retention & Re-engagement', 'Push, email, and lifecycle campaigns that protect LTV.'],
    ],
    steps: [
      ['Store & Funnel Audit', 'Listing, tracking (MMP), and onboarding baseline with quick wins.'],
      ['Measurement Setup', 'Attribution, events, and cohort dashboards wired correctly.'],
      ['Acquisition Sprints', 'Channel and creative tests with clear CPA verdicts.'],
      ['Retention Loops', 'Lifecycle automation tuned to day-7 and day-30 retention.'],
    ],
    chips: ['App Store Connect', 'Google Play Console', 'Apple Search Ads', 'AppsFlyer', 'Firebase', 'OneSignal'],
  },
];

export const industries = [
  { slug: 'healthcare', title: 'Healthcare', intro: 'Compliant, reliable digital products for clinics, health-tech startups, and care providers - where uptime and data privacy are non-negotiable.',
    challenges: ['Strict data-privacy and compliance requirements', 'Legacy systems that resist integration', 'Patients expecting consumer-grade digital experiences'],
    solutions: [['Patient Portals & Booking','Self-service scheduling, records access, and reminders that cut admin load.'],['Telehealth Platforms','Secure video consults with prescriptions and follow-up flows.'],['Practice Automation','Intake, billing, and reporting workflows connected end to end.'],['Healthcare Marketing','Compliant SEO and paid acquisition for clinics and health brands.']] },
  { slug: 'fintech', title: 'FinTech', intro: 'Banking, payments, and investment products where security, accuracy, and trust decide everything. We build fintech-grade software and the growth engine around it.',
    challenges: ['Security and regulatory scrutiny at every layer', 'Zero tolerance for calculation or transaction errors', 'High CAC in a crowded, low-trust market'],
    solutions: [['Payment & Wallet Systems','PCI-aware integrations with clean reconciliation and audit trails.'],['Investment & Trading Tools','Real-time data, simulations, and dashboards users trust.'],['KYC & Onboarding','Frictionless verification flows that stay compliant.'],['Fintech Growth Marketing','Trust-first content, SEO, and performance campaigns.']] },
  { slug: 'saas', title: 'SaaS', intro: 'From first MVP to Series-B scale - product engineering and the full go-to-market stack for software companies that live or die by retention.',
    challenges: ['Shipping fast without accumulating crippling tech debt', 'Churn hiding underneath topline signup growth', 'Standing out in saturated categories'],
    solutions: [['Product Engineering','Feature velocity with tests, reviews, and architecture that scales.'],['Onboarding & Activation','In-product flows that get users to value in the first session.'],['SaaS SEO & Content','Bottom-funnel content engines that outrank incumbents.'],['PLG + Sales Funnels','Trials, demos, and lifecycle emails working as one system.']] },
  { slug: 'ecommerce', title: 'E-commerce', intro: 'Retail and D2C brands where site speed is revenue and every checkout step counts. We engineer storefronts and run the acquisition that fills them.',
    challenges: ['Cart abandonment and mobile conversion gaps', 'Rising ad costs squeezing contribution margin', 'Operational chaos across inventory, logistics, and returns'],
    solutions: [['High-Performance Storefronts','Shopify and headless builds with sub-second product pages.'],['Conversion Optimisation','Systematic CRO across PDP, cart, and checkout.'],['Retention & Email','Klaviyo flows that raise repeat purchase rate.'],['Profitable Paid Growth','Meta + Google managed to MER, not just ROAS.']] },
  { slug: 'real-estate', title: 'Real Estate', intro: 'Property portals, developer websites, and lead engines for a market where a single closed deal pays for the entire funnel.',
    challenges: ['Long, offline-heavy sales cycles', 'Low-quality portal leads with poor follow-up', 'Projects competing on identical listings'],
    solutions: [['Project Websites & 3D Tours','Immersive project sites that pre-sell before the site visit.'],['Lead Capture & CRM','Qualified enquiry flows routed straight to sales with alerts.'],['Local Search Visibility','Own the map pack and locality searches that matter.'],['Performance Campaigns','Meta + Google lead campaigns tuned to site-visit bookings.']] },
  { slug: 'education', title: 'Education', intro: 'EdTech platforms, institutes, and course creators - digital experiences that enrol students and keep them learning.',
    challenges: ['Seasonal, deadline-driven admission cycles', 'High drop-off between enquiry and enrolment', 'Engagement collapsing after purchase'],
    solutions: [['LMS & Course Platforms','Custom learning platforms with progress, payments, and certificates.'],['Admission Funnels','Landing pages, counselling flows, and CRM automation for intake season.'],['EdTech SEO','Rank for the courses and exams your students actually search.'],['Community & Retention','Cohort tooling and engagement loops that finish what enrolment starts.']] },
  { slug: 'travel', title: 'Travel', intro: 'Booking platforms, tour operators, and hospitality brands competing with OTAs - we build direct channels that keep the margin with you.',
    challenges: ['OTA commissions eating direct margin', 'Complex inventory, seasonality, and pricing', 'Inspiration-heavy buyers who book elsewhere'],
    solutions: [['Booking Engines','Direct booking flows with payments, availability, and confirmations.'],['Destination Content & SEO','Own the itinerary and "best of" searches that start every trip.'],['Metasearch & Paid','Google Hotels/Things-to-do and Meta campaigns run to net margin.'],['Reputation Systems','Review generation and management that compounds trust.']] },
  { slug: 'logistics', title: 'Logistics', intro: 'Fleet, freight, and delivery businesses where software is the difference between margin and chaos - tracking, dispatch, and client portals built for operations.',
    challenges: ['Manual dispatch and paper-driven workflows', 'No real-time visibility for clients or ops', 'Thin margins punished by inefficiency'],
    solutions: [['Tracking & Dispatch Systems','Live shipment visibility with driver apps and automated updates.'],['Client Portals','Self-service booking, documents, and invoices that cut support calls.'],['Route & Ops Automation','Optimisation and alerting that reclaim hours daily.'],['B2B Lead Generation','LinkedIn + search campaigns that win contract clients.']] },
  { slug: 'on-demand', title: 'On-demand', intro: 'Marketplace and on-demand service platforms - two-sided products where matching speed, trust, and unit economics decide winners.',
    challenges: ['Chicken-and-egg supply/demand balancing', 'Real-time matching, tracking, and payments complexity', 'Unit economics that break at scale'],
    solutions: [['Marketplace Platforms','Customer, provider, and admin apps built as one coherent system.'],['Real-Time Infrastructure','Live tracking, notifications, and surge-ready architecture.'],['Trust & Safety','Ratings, verification, and dispute flows that protect the brand.'],['Hyperlocal Growth','City-by-city launch playbooks across paid and organic.']] },
];

export const technologies = [
  { slug: 'ai-llm', title: 'AI & LLM Solutions', intro: 'Claude, GPT, and open-model applications grounded in your data - assistants, document intelligence, and AI-in-the-loop automation, built with evaluation and guardrails.',
    points: [['RAG Systems','Retrieval-augmented assistants that answer from your knowledge base, with citations.'],['Fine-Tuning & Prompting','Model behaviour engineered, versioned, and regression-tested.'],['AI Workflow Automation','Triage, drafting, and QA loops with human oversight where it matters.'],['Evaluation & Guardrails','Quality suites and cost controls before anything reaches production.']],
    chips: ['Claude API', 'OpenAI', 'LangChain', 'Vector DBs', 'Python', 'Evals'] },
  { slug: 'typescript-nodejs', title: 'TypeScript / Node.js', intro: 'Type-safe backends and full-stack applications - the workhorse stack for APIs, real-time systems, and everything the frontend depends on.',
    points: [['API Development','REST and GraphQL services with validation, auth, and documentation.'],['Real-Time Systems','WebSockets and event-driven architectures that stay responsive under load.'],['Monorepo Full-Stack','Shared types end to end - fewer bugs, faster shipping.'],['Testing & Reliability','Unit, integration, and load testing baked into CI.']],
    chips: ['Node.js', 'TypeScript', 'NestJS', 'GraphQL', 'Prisma', 'Jest'] },
  { slug: 'python', title: 'Python', intro: 'Data pipelines, AI services, and rapid backend development - Python where its ecosystem gives you an unfair speed advantage.',
    points: [['AI & ML Services','Model serving, pipelines, and integrations with the modern AI stack.'],['Data Engineering','ETL, scraping, and reporting pipelines that run themselves.'],['Django / FastAPI Backends','Robust APIs and admin-heavy applications shipped fast.'],['Automation Scripts','The glue code that quietly saves your team hours every week.']],
    chips: ['FastAPI', 'Django', 'Pandas', 'Celery', 'PostgreSQL', 'Airflow'] },
  { slug: 'react-nextjs', title: 'React / Next.js', intro: 'The frontend stack behind fast, SEO-friendly products - server rendering, static export, and app-grade interactivity in one framework.',
    points: [['Marketing Sites','Static-fast pages with perfect Lighthouse scores and CMS editing.'],['Web Applications','Dashboards and portals with clean state management and testing.'],['Performance Engineering','Bundle discipline, image strategy, and Core Web Vitals in the green.'],['Design-System Frontends','Token-driven UI kits that keep every screen consistent.']],
    chips: ['Next.js 14', 'React 18', 'Tailwind', 'App Router', 'Vercel / Netlify', 'Storybook'] },
  { slug: 'postgresql-mongodb', title: 'PostgreSQL / MongoDB', intro: 'Data modelling done right - relational integrity where money and state live, document flexibility where iteration speed wins.',
    points: [['Schema Design','Models that stay fast and honest as data grows 100x.'],['Query Optimisation','Indexes, explain plans, and the slow-query hunt.'],['Migrations & Zero Downtime','Schema evolution without 3am incidents.'],['Backup & Recovery','Tested restore procedures, not just backup checkboxes.']],
    chips: ['PostgreSQL', 'MongoDB Atlas', 'Prisma', 'Mongoose', 'Redis', 'Backups'] },
  { slug: 'docker-kubernetes', title: 'Docker & Kubernetes', intro: 'Containerised, reproducible deployments - from a single-node Docker setup to production Kubernetes, sized to what you actually need.',
    points: [['Containerisation','Dev/prod parity and onboarding that takes minutes, not days.'],['K8s Orchestration','Autoscaling, rollouts, and self-healing services where scale justifies it.'],['CI/CD Integration','Build-test-deploy pipelines from commit to production.'],['Observability','Logs, metrics, and traces wired in from the start.']],
    chips: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Prometheus', 'Grafana'] },
  { slug: 'aws-cloud', title: 'AWS Cloud', intro: 'Secure, observable, cost-controlled AWS architecture - the infrastructure layer for everything we build, managed so your bill matches your usage.',
    points: [['Architecture Design','Right-sized setups: from simple ECS to event-driven serverless.'],['Security & IAM','Least-privilege access, secrets management, and audit trails.'],['Cost Optimisation','Monthly reviews that routinely cut 20-40% of waste.'],['Managed Operations','Patching, monitoring, and incident response handled.']],
    chips: ['EC2 / ECS', 'Lambda', 'RDS', 'S3 + CloudFront', 'Terraform', 'CloudWatch'] },
  { slug: 'rest-graphql', title: 'REST & GraphQL APIs', intro: 'The contract layer between your systems - versioned, documented, secured APIs that partners and frontends can build on with confidence.',
    points: [['API Design','Resource models and schemas designed before code, documented always.'],['Authentication & Security','OAuth2, rate limiting, and input validation as defaults.'],['Third-Party Integrations','Payments, CRMs, logistics, and messaging stitched in reliably.'],['Versioning & Docs','OpenAPI/GraphQL schemas with changelogs consumers trust.']],
    chips: ['OpenAPI', 'GraphQL', 'OAuth2', 'Webhooks', 'Postman', 'Rate Limiting'] },
  { slug: 'marketing-stack', title: 'Marketing Stack', intro: 'The measurement and automation layer under every campaign - tracking you can trust, CRMs that stay clean, and reporting that answers questions.',
    points: [['Analytics & Tracking','GA4, server-side tagging, and conversion APIs implemented correctly.'],['CRM & Automation','HubSpot/Zoho pipelines with lead routing and lifecycle emails.'],['Dashboards','Looker Studio reporting that shows CAC, LTV, and channel truth.'],['Ad Platform Ops','Meta, Google, and LinkedIn accounts structured for learning speed.']],
    chips: ['GA4', 'GTM Server-Side', 'HubSpot', 'Klaviyo', 'Looker Studio', 'Conversions API'] },
];

export const caseStudies = [
  { slug: 'medconnect', client: 'MedConnect', industry: 'Healthcare', title: 'MedConnect - Healthcare',
    summary: 'A patient booking and telehealth platform for a multi-clinic healthcare group.',
    challenge: 'Phone-only booking was capping appointment volume, no-shows ran high, and patient records lived in three disconnected systems - staff spent hours daily on manual coordination.',
    solution: ['Self-service booking portal with automated reminders across SMS and WhatsApp', 'Secure telehealth consultations integrated with patient records', 'Unified dashboard replacing three legacy systems for front-desk staff'],
    results: [['38%','fewer no-shows'], ['2.4x','online bookings'], ['12 hrs','saved weekly per clinic']],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS'],
    note: 'Metrics shown are representative placeholders - replace with verified client figures before launch.' },
  { slug: 'orbit-pay', client: 'Orbit Pay', industry: 'FinTech', title: 'Orbit Pay - FinTech',
    summary: 'A payments dashboard and merchant onboarding flow for a growing fintech.',
    challenge: 'Merchant onboarding took days of manual verification, support tickets were dominated by "where is my settlement" questions, and the ageing dashboard eroded trust with every timeout.',
    solution: ['Automated KYC onboarding cutting activation from days to minutes', 'Real-time settlement tracking with proactive status notifications', 'Rebuilt merchant dashboard with sub-second load times'],
    results: [['85%','faster onboarding'], ['-52%','support tickets'], ['99.95%','dashboard uptime']],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    note: 'Metrics shown are representative placeholders - replace with verified client figures before launch.' },
  { slug: 'retailflow', client: 'RetailFlow', industry: 'E-commerce', title: 'RetailFlow - E-commerce',
    summary: 'A headless storefront rebuild and paid-growth programme for a D2C retail brand.',
    challenge: 'A 6-second mobile product page was killing paid traffic ROI; rising ad costs met a leaky checkout, and the brand could not tell which channels actually drove profit.',
    solution: ['Headless Next.js storefront with sub-second product pages', 'Checkout CRO programme across cart, shipping, and payment steps', 'Server-side tracking and MER-based budget management across Meta and Google'],
    results: [['3.1x','ROAS'], ['+41%','conversion rate'], ['0.9s','mobile LCP']],
    stack: ['Next.js', 'Shopify', 'Klaviyo', 'Meta Ads', 'GA4'],
    note: 'Metrics shown are representative placeholders - replace with verified client figures before launch.' },
];

export const bySlug = (list) => Object.fromEntries(list.map((x) => [x.slug, x]));


export const posts = [
  {
    slug: 'generative-ai-for-smes',
    category: 'Digital Transformation',
    title: 'Generative AI for SMEs: 7 use cases worth building',
    date: 'June 2026',
    readTime: '7 min read',
    excerpt: 'Skip the hype cycle. These are the seven generative-AI applications we see paying for themselves inside small and mid-sized businesses - with realistic effort estimates for each.',
    sections: [
      ['Why most SME AI projects stall', [
        'The pattern is familiar by now: a leadership offsite, a burst of enthusiasm, a chatbot pilot - and six months later, nothing in production. The problem is rarely the technology. It is use-case selection. SMEs that treat AI as a headline chase pick the flashiest demo; SMEs that treat it as an operations upgrade pick the workflow that burns the most hours, and win.',
        'The seven use cases below share three traits: the input data already exists inside your business, the output is easy to verify, and a human stays in the loop where judgement matters. That combination is what separates a tool your team actually uses from a demo that dies in a slide deck.',
      ]],
      ['1. Customer support drafting', [
        'Not a customer-facing bot - a drafting assistant for your support team. The model reads the incoming ticket, your help-doc library, and past resolutions, then drafts a reply the agent approves or edits. Teams typically see 40-60% faster first responses without the brand risk of unsupervised replies.',
      ]],
      ['2. Document intelligence for invoices and contracts', [
        'If someone in your company retypes information from PDFs into a system, that is a solved problem. Extraction pipelines built on modern LLMs handle messy, inconsistent documents that broke older OCR tools - vendor invoices, purchase orders, agreements - and push structured data straight into your accounting or CRM stack.',
      ]],
      ['3. Sales-call summaries and CRM hygiene', [
        'Reps hate updating the CRM, and pipelines rot because of it. Automatic call transcription plus a model that extracts next steps, objections, and deal signals turns every conversation into clean CRM data. The compounding effect on forecast accuracy is bigger than any dashboard you could buy.',
      ]],
      ['4. Marketing content operations', [
        'The win is not "AI writes our blog." It is AI compressing the expensive parts around the writing: research briefs from search data, first drafts for a human editor, repurposing one long asset into social posts, emails, and video scripts. One content lead with a good pipeline now does the output of a small agency.',
      ]],
      ['5. Internal knowledge search', [
        'Every SME past thirty people develops the same disease: the answer exists, but nobody knows which document, thread, or veteran employee holds it. A retrieval-augmented assistant over your policies, project docs, and wikis - answering with citations - cuts the constant tap-on-the-shoulder tax on senior staff.',
      ]],
      ['6. Quotation and proposal generation', [
        'Businesses that quote custom work - agencies, manufacturers, contractors - can encode their pricing logic and past proposals into an assistant that drafts 80% of a new quote in minutes. Faster quotes measurably win more deals; buyers reward the first credible response.',
      ]],
      ['7. Reporting narratives', [
        'Numbers without narrative do not change behaviour. A model that reads your weekly metrics and drafts the "what changed and why it matters" summary for management turns reporting from a chore into an actual decision input - and it never skips a week.',
      ]],
      ['How to choose your first build', [
        'Score each candidate on three axes: hours currently burned, tolerance for error, and data readiness. Start with the highest-hours workflow where a human already reviews the output. Ship a scrappy version in weeks, measure saved hours honestly, then expand. The SMEs winning with AI are not the ones with the biggest budgets - they are the ones that picked a boring, painful workflow and automated it properly.',
      ]],
    ],
    takeaways: [
      'Pick workflows where output is easy to verify and a human stays in the loop',
      'Drafting assistants beat autonomous bots for customer-facing work',
      'Measure saved hours, not demo applause - then expand what works',
    ],
  },
  {
    slug: 'mvp-cost-guide',
    category: 'Startup Guides',
    title: 'How much does it really cost to build an MVP?',
    date: 'June 2026',
    readTime: '8 min read',
    excerpt: 'The honest answer is a range - and the range depends on decisions you control. Here is how MVP pricing actually works, what moves the number, and where founders overspend.',
    sections: [
      ['The honest range', [
        'A focused software MVP built by a competent team lands between $8,000 and $60,000 - a range wide enough to feel useless until you understand what moves you within it. A landing page with a waitlist sits near the bottom. A two-sided marketplace with payments, real-time features, and two mobile apps sits near the top. Most venture-style SaaS MVPs we scope land between $15,000 and $35,000.',
        'Anyone quoting a precise figure before understanding your feature list, integrations, and design expectations is guessing - or planning to renegotiate later.',
      ]],
      ['The four cost drivers you control', [
        'Scope is the obvious one: every user role, screen, and edge case adds cost, and the difference between "users can log in" and "users can log in with Google, Apple, magic links, and SSO" is weeks. Design fidelity is the quiet one: a clean template-based UI versus a fully custom design system can swing the budget 25%. Integrations are the treacherous one - each third-party system (payments, KYC, logistics APIs) carries hidden edge-case cost. Platform count is the brutal one: web-only versus web plus two native apps nearly doubles the build.',
      ]],
      ['Where founders overspend', [
        'The most expensive MVP mistake is building for imagined scale: multi-region infrastructure, microservices, and admin tooling for a product with zero users. The second is feature hedging - shipping five half-features because you have not decided which one wins the market. The third is skipping discovery, which converts cheap decisions on a whiteboard into expensive rewrites in code.',
      ]],
      ['Where founders underspend', [
        'Analytics and event tracking - because an MVP that cannot tell you what users did has failed at its only job, which is learning. Onboarding - the first five minutes decide activation, and activation decides everything downstream. And honest QA on real devices - the bug your investor hits in a demo costs more than the testing week you saved.',
      ]],
      ['A sane budgeting framework', [
        'Write the one sentence your MVP must prove - "restaurants will pay monthly for automated review responses" - and cut every feature that does not serve that sentence. Budget in three envelopes: 60% core build, 20% polish and QA, 20% held in reserve for what you learn after launch. Founders who spend their entire budget before first contact with users have left themselves no money to act on the only feedback that matters.',
      ]],
      ['Fixed price vs. dedicated team', [
        'Fixed-scope pricing suits a well-defined v1: you get cost certainty and a milestone schedule. A dedicated team suits products that will evolve weekly from day one. A practical hybrid - fixed-scope for the core build, then a lighter monthly retainer for iteration - is what we recommend to most funded early-stage teams.',
      ]],
    ],
    takeaways: [
      'Most SaaS MVPs land between $15k and $35k - scope, design fidelity, integrations, and platform count decide where',
      'Overspending on imagined scale is the #1 budget killer; underspending on analytics is the #1 learning killer',
      'Hold 20% of budget in reserve for post-launch iteration',
    ],
  },
  {
    slug: 'topic-clusters-seo',
    category: 'SEO',
    title: 'Topic clusters that actually move rankings in 2026',
    date: 'May 2026',
    readTime: '6 min read',
    excerpt: 'Publishing more content is not a strategy. Here is how topic clusters work when built around search intent and internal linking - and why most cluster projects quietly fail.',
    sections: [
      ['Why scattered content stopped working', [
        'Search engines rank sites that demonstrate depth on a subject, not sites that mention it once. Twenty disconnected posts on twenty topics build authority on nothing; twelve interlinked pieces around one subject build a citadel. AI-generated content flooding the index has only sharpened this: topical depth, first-hand specificity, and coherent site architecture are the signals that survive.',
      ]],
      ['Anatomy of a cluster that works', [
        'A working cluster has three layers. The pillar page targets the broad, high-volume head term and gives a genuinely complete overview. Cluster pages each own one specific long-tail question in depth. And the linking layer - every cluster page links up to the pillar, the pillar links down to every cluster page, and siblings cross-link where relevant - is what turns a folder of articles into an authority structure crawlers can read.',
        'The layer teams skip is the third one. Content without deliberate internal linking is just a blog with a theme.',
      ]],
      ['Choosing clusters commercially', [
        'Start from revenue, not volume. List what you sell, list the questions buyers ask on sales calls, and map those to search demand. A cluster of eight posts targeting 300-search-a-month terms your buyers actually ask converts better than one 20,000-volume trophy keyword that attracts students and competitors. The sales-call transcript is the most underused keyword research tool in existence.',
      ]],
      ['Execution cadence', [
        'Ship the pillar first, even if imperfect - it accretes authority while cluster pages roll out. Then publish cluster pages in a steady cadence, two to four per month, each interlinked on the day it goes live. Consistency beats bursts: a cluster half-published and abandoned sends the opposite of an authority signal.',
      ]],
      ['Measuring what matters', [
        'Track the cluster as a unit: total impressions and clicks across all member pages, average position of the pillar term, and - critically - assisted conversions from cluster traffic. Individual post pageviews are noise. And schedule refreshes: pages decay, and a six-monthly update pass on your best performers protects rankings more cheaply than net-new content.',
      ]],
    ],
    takeaways: [
      'Depth on one subject beats breadth across twenty - clusters are how you prove depth',
      'The internal-linking layer is the cluster; skipping it leaves you with a themed blog',
      'Choose clusters from sales-call questions, not keyword-tool trophies',
    ],
  },
];
