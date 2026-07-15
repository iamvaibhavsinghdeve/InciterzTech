import PageShell from '../../../components/PageShell';
import { caseStudies, bySlug } from '../../../data/site';

const items = bySlug(caseStudies);

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const cs = items[params.slug];
  return {
    title: `${cs.title} Case Study`,
    description: `${cs.summary} A representative Inciterz engagement - technology and growth delivered from India for global clients.`.slice(0, 158),
    alternates: { canonical: `/case-studies/${params.slug}/` },
    openGraph: { title: `${cs.title} Case Study | Inciterz`, description: cs.summary, url: `/case-studies/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = items[params.slug];
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <a href="/">Home</a><span>/</span><a href="/case-studies/">Case Studies</a><span>/</span>{cs.client}
          </div>
          <div className="cs-meta-row">
            <span className="cs-meta">{cs.client}</span>
            <span className="cs-meta">{cs.industry}</span>
          </div>
          <h1>{cs.summary}</h1>
          <div className="hero-ctas">
            <a href="/contact/" className="btn btn-primary">Start a Similar Project</a>
            <a href="/case-studies/" className="btn btn-outline">All Case Studies</a>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="split-2">
            <div className="panel">
              <h3>The challenge</h3>
              <p>{cs.challenge}</p>
            </div>
            <div className="panel">
              <h3>What we built</h3>
              <ul>{cs.solution.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>

          <div className="metric-band">
            <div className="metric-grid">
              {cs.results.map(([v, l]) => (
                <div className="metric" key={l}><b>{v}</b><span>{l}</span></div>
              ))}
            </div>
          </div>
          <p className="cs-note">{cs.note}</p>
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow">Under the hood</div><h2>Stack used</h2></div>
          <div className="pill-row">{cs.stack.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Want results like {cs.client}?</h2>
          <p>One call to map your challenge to a plan - engineering and growth from one dependable partner.</p>
          <a href="/contact/" className="btn-accent">Get a Free Growth Estimate</a>
        </div>
      </section>
    </PageShell>
  );
}
