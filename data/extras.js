// ---------------------------------------------------------------------------
// Per-page hero stats, deliver-card metrics, and badges for the detail layout.
// NOTE: all figures are representative placeholders - replace with verified
// client metrics before launch.
// ---------------------------------------------------------------------------

export const pageExtras = {
  /* ---------- SERVICES ---------- */
  'web-development':        { badge: 'Now onboarding new projects', stats: [['0.9s','Avg. LCP shipped'],['95+','Avg. Lighthouse score'],['120+','Sites launched'],['2-6 wks','Typical build time']], metrics: [['95+','Lighthouse score'],['3x','Faster iterations'],['100%','Offline-ready'],['0','Rankings lost']] },
  'mobile-app-development': { badge: 'Now onboarding new projects', stats: [['4.7','Avg. store rating'],['1','Codebase, 2 stores'],['<2s','Cold-start target'],['30+','Apps shipped']], metrics: [['-40%','Cost vs 2x native'],['60fps','Animations'],['99.9%','API uptime'],['+35%','Install to signup']] },
  'custom-software':        { badge: 'Now onboarding new projects', stats: [['12 hrs','Saved weekly avg.'],['40+','Systems integrated'],['99.9%','Uptime SLA'],['3 wks','To first release']], metrics: [['-70%','Manual entry'],['5x','Faster handoffs'],['0','Big-bang rewrites'],['1','Source of truth']] },
  'saas-development':       { badge: 'Now onboarding new projects', stats: [['6-10 wks','MVP timeline'],['99.95%','Platform uptime'],['15+','SaaS launched'],['SOC2','Ready patterns']], metrics: [['6 wks','To first users'],['100%','Tenant isolation'],['<1%','Failed payments'],['10x','Load tested']] },
  'ai-solutions':           { badge: 'Now onboarding new projects', stats: [['12+ hrs','Saved weekly'],['92%','Extraction accuracy'],['<$0.01','Per-task cost'],['4 wks','To production']], metrics: [['-60%','Response time'],['92%','Accuracy'],['24/7','Coverage'],['ROI','Mapped first']] },
  'ui-ux-design':           { badge: 'Now onboarding new projects', stats: [['+41%','Avg. conversion lift'],['2 wks','To prototype'],['100%','Dev-ready handoff'],['AA','WCAG compliant']], metrics: [['-35%','Drop-off'],['1','Design language'],['+41%','CVR lift'],['Top 10','Issues surfaced']] },
  'ecommerce-development':  { badge: 'Now onboarding new projects', stats: [['0.9s','Mobile LCP'],['+41%','CVR lift'],['3.1x','Avg. ROAS'],['25+','Stores launched']], metrics: [['4.9','Theme quality'],['0.9s','Product pages'],['-28%','Abandonment'],['40+','Apps integrated']] },
  'devops-dedicated-teams': { badge: 'Now onboarding new projects', stats: [['99.95%','Uptime delivered'],['15 min','Commit to deploy'],['-30%','Avg. cloud bill cut'],['<1 wk','Engineer onboarding']], metrics: [['15 min','Deploys'],['-30%','Cloud spend'],['<5 min','Alert response'],['<1 wk','To productive']] },

  /* ---------- MARKETING ---------- */
  'seo':                    { badge: 'Accepting new engagements', stats: [['+284%','Avg. organic growth'],['12,480','Rankings gained'],['99.4%','Index coverage'],['7 days','To first audit']], metrics: [['98.7%','Avg. crawl health'],['3.6x','Avg. traffic lift'],['DR 64+','Avg. domain rating'],['+152%','Avg. local traffic']] },
  'performance-marketing':  { badge: 'Accepting new engagements', stats: [['3.2x','Avg. ROAS'],['-38%','CAC reduction'],['48 hrs','To launch'],['100%','Server-side tracked']], metrics: [['3.2x','Blended ROAS'],['12+','Tests monthly'],['+41%','Landing CVR'],['1','Truth dashboard']] },
  'google-ads':             { badge: 'Accepting new engagements', stats: [['-42%','Wasted spend cut'],['2.1x','Conversion rate'],['7 days','To restructure'],['24/7','Bid guards']], metrics: [['+38%','CTR lift'],['-25%','Feed CPA'],['2.4x','Return visits'],['0','Budget overruns']] },
  'meta-ads':               { badge: 'Accepting new engagements', stats: [['3.4x','Avg. ROAS'],['12+','Creatives tested/mo'],['-31%','CPA drop'],['CAPI','First-party data']], metrics: [['12+','Angles monthly'],['-45%','Creative fatigue'],['+52%','Signal match'],['+28%','Repeat LTV']] },
  'social-media-marketing': { badge: 'Accepting new engagements', stats: [['+180%','Engagement lift'],['20+','Posts monthly'],['<4 hr','Response SLA'],['3','Platforms managed']], metrics: [['1','Voice everywhere'],['20+','Assets monthly'],['<4 hr','DM response'],['2x','Organic reach']] },
  'content-marketing':      { badge: 'Accepting new engagements', stats: [['4x','Organic ROI'],['8+','Assets monthly'],['Top 3','Target positions'],['90 d','Content runway']], metrics: [['Top 3','Cluster targets'],['3k+','Words that rank'],['0','Missed deadlines'],['5x','Asset reuse']] },
  'branding':               { badge: 'Accepting new engagements', stats: [['2-4 wks','To identity'],['100%','Asset coverage'],['1','Brand voice'],['50+','Template assets']], metrics: [['1','Sharp answer'],['100%','Digital-first'],['1 doc','Team playbook'],['1 push','Coordinated launch']] },
  'lead-generation':        { badge: 'Accepting new engagements', stats: [['-45%','Cost per lead'],['35%','MQL to SQL rate'],['<5 min','Lead response'],['2x','Pipeline growth']], metrics: [['+60%','Opt-in rate'],['<2s','Page loads'],['35%','SQL rate'],['+30%','Nurture recovery']] },

  'app-marketing':          { badge: 'Accepting new engagements', stats: [['+45%','Organic installs'],['-35%','Cost per install'],['D30','Retention focus'],['MMP','Attribution wired']], metrics: [['+45%','Install share'],['-35%','Blended CPI'],['+50%','Activation rate'],['+22%','D30 retention']] },

  /* ---------- INDUSTRIES ---------- */
  'healthcare':  { badge: 'Industry expertise', stats: [['38%','Fewer no-shows'],['2.4x','Online bookings'],['100%','Privacy-first builds'],['12 hrs','Admin saved weekly']] },
  'fintech':     { badge: 'Industry expertise', stats: [['99.95%','Uptime delivered'],['85%','Faster onboarding'],['0','Reconciliation gaps'],['PCI','Aware integrations']] },
  'saas':        { badge: 'Industry expertise', stats: [['6 wks','MVP timeline'],['-25%','Churn impact'],['3x','Trial-to-paid lift'],['15+','SaaS shipped']] },
  'ecommerce':   { badge: 'Industry expertise', stats: [['3.1x','ROAS'],['+41%','CVR lift'],['0.9s','Mobile LCP'],['25+','Stores launched']] },
  'real-estate': { badge: 'Industry expertise', stats: [['4x','Qualified leads'],['Top 3','Map-pack targets'],['<5 min','Lead routing'],['3D','Project tours']] },
  'education':   { badge: 'Industry expertise', stats: [['2x','Enrolment lift'],['70%','Course completion'],['24/7','LMS uptime'],['10+','Ed platforms']] },
  'travel':      { badge: 'Industry expertise', stats: [['+60%','Direct bookings'],['-20%','OTA dependency'],['Top 3','Itinerary rankings'],['4.8','Review averages']] },
  'logistics':   { badge: 'Industry expertise', stats: [['-30%','Dispatch time'],['100%','Shipment visibility'],['-50%','Support calls'],['24/7','Ops dashboards']] },
  'on-demand':   { badge: 'Industry expertise', stats: [['<3s','Match latency'],['2-sided','Growth playbooks'],['99.9%','Platform uptime'],['City-wise','Launch model']] },

  /* ---------- TECHNOLOGIES ---------- */
  'ai-llm':             { badge: 'Production-proven stack', stats: [['92%','Eval pass rate'],['<2s','P95 latency'],['-80%','Cost via caching'],['4 wks','To production']] },
  'typescript-nodejs':  { badge: 'Production-proven stack', stats: [['100%','Typed end-to-end'],['<100ms','API P95'],['90%+','Core test coverage'],['10k+','RPS load-tested']] },
  'python':             { badge: 'Production-proven stack', stats: [['5x','Faster pipelines'],['99.9%','Job reliability'],['100+','Automations shipped'],['24/7','Scheduled runs']] },
  'react-nextjs':       { badge: 'Production-proven stack', stats: [['95+','Lighthouse avg.'],['0.9s','LCP shipped'],['100%','SEO-rendered'],['1','Design system']] },
  'postgresql-mongodb': { badge: 'Production-proven stack', stats: [['100x','Data-growth ready'],['<10ms','Query targets'],['0','Data-loss incidents'],['PITR','Backups tested']] },
  'docker-kubernetes':  { badge: 'Production-proven stack', stats: [['15 min','Commit to deploy'],['0','Downtime rollouts'],['3x','Env-parity speed'],['24/7','Self-healing']] },
  'aws-cloud':          { badge: 'Production-proven stack', stats: [['-30%','Avg. bill cut'],['99.95%','Uptime'],['IAM','Least privilege'],['SOC2','Ready patterns']] },
  'rest-graphql':       { badge: 'Production-proven stack', stats: [['100%','Documented'],['OAuth2','Secured by default'],['<1%','Error budget'],['0','Breaking releases']] },
  'marketing-stack':    { badge: 'Production-proven stack', stats: [['100%','Conversions tracked'],['1','Source of truth'],['-90%','Reporting time'],['CAC/LTV','Visible weekly']] },
};
