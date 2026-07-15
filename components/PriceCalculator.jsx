'use client';

import { useState, useMemo } from 'react';

/* ------------------------------------------------------------------
   Pricing model. All figures are INDICATIVE ESTIMATE RANGES, not quotes.
   Tune the numbers here in one place.
   Base costs are in USD; INR conversion is applied for display.
------------------------------------------------------------------- */
const USD_TO_INR = 84;

const PROJECT_TYPES = [
  { id: 'website',   label: 'Marketing Website',   desc: 'Brochure / corporate site, CMS-ready',     base: 2200,  weeks: 3 },
  { id: 'webapp',    label: 'Web Application',     desc: 'Dashboards, portals, custom logic',        base: 7000,  weeks: 8 },
  { id: 'ecommerce', label: 'E-commerce Store',    desc: 'Shopify or headless storefront',           base: 4500,  weeks: 6 },
  { id: 'mobile',    label: 'Mobile App',          desc: 'iOS + Android (cross-platform)',           base: 9000,  weeks: 10 },
  { id: 'saas',      label: 'SaaS Platform / MVP', desc: 'Multi-tenant, billing, auth',              base: 14000, weeks: 12 },
  { id: 'ai',        label: 'AI / Automation',     desc: 'LLM assistants, document intelligence',    base: 6000,  weeks: 6 },
  { id: 'marketing', label: 'Digital Marketing',   desc: 'SEO / ads retainer (monthly)',             base: 900,   weeks: 0, monthly: true },
];

const SIZES = [
  { id: 'small',  label: 'Small',  desc: 'Up to ~5 pages / screens',   mult: 1.0 },
  { id: 'medium', label: 'Medium', desc: '~6-15 pages / screens',      mult: 1.7 },
  { id: 'large',  label: 'Large',  desc: '16-40 pages / screens',      mult: 2.6 },
  { id: 'xl',     label: 'Enterprise', desc: '40+ screens, complex',   mult: 4.0 },
];

const FEATURES = [
  { id: 'design',     label: 'Custom UI/UX Design',        cost: 1200, note: 'Bespoke design system, not a template' },
  { id: 'cms',        label: 'CMS / Content Editing',      cost: 700 },
  { id: 'auth',       label: 'User Accounts & Roles',      cost: 1100 },
  { id: 'payments',   label: 'Payments / Subscriptions',   cost: 1400, note: 'Stripe / Razorpay integration' },
  { id: 'ai',         label: 'AI Features',                cost: 2500, note: 'LLM assistant, RAG, automation' },
  { id: 'dashboard',  label: 'Admin Dashboard',            cost: 1600 },
  { id: 'integrations', label: 'Third-party Integrations', cost: 900,  note: 'CRM, ERP, logistics, messaging' },
  { id: 'multilang',  label: 'Multi-language',             cost: 600 },
  { id: 'seo',        label: 'SEO Setup & Schema',         cost: 500 },
  { id: 'analytics',  label: 'Analytics & Tracking',       cost: 400 },
  { id: 'devops',     label: 'DevOps / CI-CD & Cloud',     cost: 1300 },
  { id: 'maintenance', label: 'Ongoing Support (3 mo)',    cost: 1500 },
];

const TIMELINES = [
  { id: 'flexible', label: 'Flexible',  desc: 'Standard schedule',        mult: 0.95 },
  { id: 'standard', label: 'Standard',  desc: 'Normal delivery',          mult: 1.0 },
  { id: 'fast',     label: 'Fast-track', desc: 'Priority team, expedited', mult: 1.3 },
];

const fmt = (n, cur) => {
  if (cur === 'INR') {
    const r = n * USD_TO_INR;
    if (r >= 10000000) return '₹' + (r / 10000000).toFixed(2) + ' Cr';
    if (r >= 100000) return '₹' + (r / 100000).toFixed(1) + ' L';
    return '₹' + Math.round(r).toLocaleString('en-IN');
  }
  return '$' + Math.round(n).toLocaleString('en-US');
};

export default function PriceCalculator() {
  const [type, setType] = useState('website');
  const [size, setSize] = useState('small');
  const [features, setFeatures] = useState(['seo']);
  const [timeline, setTimeline] = useState('standard');
  const [currency, setCurrency] = useState('USD');

  const t = PROJECT_TYPES.find((p) => p.id === type);
  const s = SIZES.find((x) => x.id === size);
  const tl = TIMELINES.find((x) => x.id === timeline);
  const isRetainer = !!t.monthly;

  const toggle = (id) =>
    setFeatures((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const { low, high, weeks } = useMemo(() => {
    const featureCost = FEATURES.filter((f) => features.includes(f.id)).reduce((a, f) => a + f.cost, 0);
    if (isRetainer) {
      const m = t.base * s.mult + featureCost * 0.15;
      return { low: m * 0.85, high: m * 1.25, weeks: 0 };
    }
    const core = t.base * s.mult + featureCost;
    const total = core * tl.mult;
    const w = Math.round(t.weeks * (0.6 + s.mult * 0.45) * (timeline === 'fast' ? 0.75 : 1));
    return { low: total * 0.85, high: total * 1.25, weeks: w };
  }, [type, size, features, timeline]);

  const summary = [
    `Project: ${t.label}`,
    `Scope: ${s.label} (${s.desc})`,
    `Features: ${features.length ? FEATURES.filter((f) => features.includes(f.id)).map((f) => f.label).join(', ') : 'None selected'}`,
    !isRetainer ? `Timeline: ${tl.label}` : null,
    `Indicative range: ${fmt(low, currency)} - ${fmt(high, currency)}${isRetainer ? ' / month' : ''}`,
  ].filter(Boolean).join('\n');

  const quoteHref = `/contact/?role=${encodeURIComponent('Quote: ' + t.label)}&est=${encodeURIComponent(summary)}`;

  return (
    <div className="calc">
      <div className="calc-form">
        {/* 1. Project type */}
        <div className="calc-step">
          <div className="calc-label"><b>01</b> What are you building?</div>
          <div className="opt-grid">
            {PROJECT_TYPES.map((p) => (
              <button key={p.id} type="button" onClick={() => setType(p.id)}
                className={'opt' + (type === p.id ? ' on' : '')} aria-pressed={type === p.id}>
                <span className="opt-t">{p.label}</span>
                <span className="opt-d">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Size */}
        <div className="calc-step">
          <div className="calc-label"><b>02</b> How large is the scope?</div>
          <div className="opt-grid four">
            {SIZES.map((x) => (
              <button key={x.id} type="button" onClick={() => setSize(x.id)}
                className={'opt' + (size === x.id ? ' on' : '')} aria-pressed={size === x.id}>
                <span className="opt-t">{x.label}</span>
                <span className="opt-d">{x.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Features */}
        <div className="calc-step">
          <div className="calc-label"><b>03</b> Which features do you need?</div>
          <div className="chip-grid">
            {FEATURES.map((f) => (
              <button key={f.id} type="button" onClick={() => toggle(f.id)}
                className={'fchip' + (features.includes(f.id) ? ' on' : '')} aria-pressed={features.includes(f.id)}
                title={f.note || ''}>
                <span className="tick" aria-hidden="true">{features.includes(f.id) ? '✓' : '+'}</span>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Timeline */}
        {!isRetainer && (
          <div className="calc-step">
            <div className="calc-label"><b>04</b> How fast do you need it?</div>
            <div className="opt-grid three">
              {TIMELINES.map((x) => (
                <button key={x.id} type="button" onClick={() => setTimeline(x.id)}
                  className={'opt' + (timeline === x.id ? ' on' : '')} aria-pressed={timeline === x.id}>
                  <span className="opt-t">{x.label}</span>
                  <span className="opt-d">{x.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Result panel */}
      <aside className="calc-result">
        <div className="cur-switch" role="group" aria-label="Currency">
          {['USD', 'INR'].map((c) => (
            <button key={c} type="button" onClick={() => setCurrency(c)}
              className={currency === c ? 'on' : ''} aria-pressed={currency === c}>{c}</button>
          ))}
        </div>

        <span className="res-label">Estimated {isRetainer ? 'monthly retainer' : 'project cost'}</span>
        <div className="res-range">
          {fmt(low, currency)} <em>&ndash;</em> {fmt(high, currency)}
        </div>
        {isRetainer ? (
          <div className="res-meta">per month &middot; 3-month minimum</div>
        ) : (
          <div className="res-meta">Estimated timeline: <b>~{weeks} weeks</b></div>
        )}

        <ul className="res-breakdown">
          <li><span>{t.label}</span><b>{s.label}</b></li>
          <li><span>Features selected</span><b>{features.length}</b></li>
          {!isRetainer && <li><span>Delivery</span><b>{tl.label}</b></li>}
        </ul>

        <a href={quoteHref} className="btn btn-primary calc-cta">Get an Exact Quote</a>
        <p className="res-note">
          This is an indicative range to help you budget - not a formal quote. Final pricing depends on
          detailed requirements. We&apos;ll confirm scope, milestones, and a fixed price on a free call.
        </p>
      </aside>
    </div>
  );
}
