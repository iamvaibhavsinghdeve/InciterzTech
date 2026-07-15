import PageShell from './PageShell';
import { pageExtras } from '../data/extras';

const Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.5 6.1L22 12l-6.5 3.9L12 22l-3.5-6.1L2 12l6.5-3.9L12 2z" />
  </svg>
);
const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function DetailPage({ crumb, crumbHref, item }) {
  const extra = pageExtras[item.slug] || {};
  const features = item.features || item.solutions || item.points || [];
  const metrics = extra.metrics || [];
  const featureHead = item.solutions ? 'How we help' : 'What we deliver';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    description: item.intro,
    provider: { '@type': 'Organization', name: 'Inciterz', url: 'https://inciterz.com' },
    areaServed: 'Worldwide',
  };
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <a href="/">Home</a><span>/</span><a href={crumbHref}>{crumb}</a><span>/</span>{item.title}
          </div>
          {extra.badge && <div className="hero-badge"><i />{extra.badge}</div>}
          <h1>{item.title}</h1>
          <p className="lede">{item.intro}</p>
          <p className="global-line">Delivered by our engineering and growth teams in Noida, India - serving startups, SMEs, and enterprises across the US, UK, Europe, the Middle East, and APAC.</p>
          <div className="hero-ctas">
            <a href="/contact/" className="btn btn-primary">Get a Free Estimate</a>
            <a href="/case-studies/" className="btn btn-outline">See Our Work</a>
          </div>
        </div>
      </section>

      {extra.stats && (
        <section className="detail-section" style={{ paddingTop: 0, paddingBottom: '40px' }}>
          <div className="wrap">
            <div className="stat-row">
              {extra.stats.map(([v, l]) => (
                <div className="stat-card" key={l}><b>{v}</b><span>{l}</span></div>
              ))}
            </div>
            <p className="stats-note">Representative figures - replaced with verified client metrics per engagement.</p>
          </div>
        </section>
      )}

      {item.challenges && (
        <section className="detail-section tint">
          <div className="wrap">
            <div className="section-head"><div className="eyebrow">The reality</div><h2>Challenges we solve in {item.title}</h2></div>
            <div className="pill-row">
              {item.challenges.map((c) => <span className="pill" key={c}>{c}</span>)}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section" style={{ paddingTop: item.challenges ? undefined : 0 }}>
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Build &middot; Market &middot; Grow</div>
            <h2>{featureHead}</h2>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: `repeat(${Math.min(features.length, 4)},1fr)` }}>
            {features.map(([t, d], i) => (
              <div className="svc-card" key={t}>
                <div className="svc-icn"><Icon /></div>
                <h3>{t}</h3>
                <p>{d}</p>
                {metrics[i] && (
                  <div className="card-metric">
                    <div><b>{metrics[i][0]}</b><small>{metrics[i][1]}</small></div>
                    <span className="arr"><Arrow /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {item.steps && (
        <section className="detail-section tint">
          <div className="wrap">
            <div className="section-head center" style={{ margin: '0 auto 44px', textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Our process</div>
              <h2>How it works</h2>
            </div>
            <div className="timeline">
              {item.steps.map(([t, d], i) => (
                <div className="tl-step" key={t}>
                  <div className="tl-num">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {item.chips && (
        <section className="detail-section" style={{ paddingBottom: '40px' }}>
          <div className="wrap">
            <div className="section-head center" style={{ margin: '0 auto 28px', textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Toolbox</div>
              <h2>Tools &amp; technologies we use</h2>
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee">
              {[...item.chips, ...item.chips, ...item.chips, ...item.chips].map((c, i) => <span className="pill" key={i}>{c}</span>)}
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner-wrap">
        <div className="wrap">
          <div className="cta-banner">
            <h2>Ready to talk about {item.title}?</h2>
            <p>Let&apos;s build a plan that drives real business outcomes - timeline, milestones, and numbers mapped in one free call.</p>
            <a href="/contact/" className="btn-white">Book a strategy call</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
