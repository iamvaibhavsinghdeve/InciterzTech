import PageShell from '../../components/PageShell';
import { caseStudies } from '../../data/site';

export const metadata = {
  alternates: { canonical: '/case-studies/' },
  title: 'Case Studies | Inciterz',
  description: 'Selected work across healthcare, fintech, and e-commerce - engineering and growth delivered as one system.',
};

export default function CaseStudiesIndex() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Case Studies</div>
          <h1>Work that moved <em>real numbers</em></h1>
          <p className="lede">Selected engagements across healthcare, fintech, and e-commerce - product engineering and growth marketing delivered as one system.</p>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="cs-index-grid">
            {caseStudies.map((cs) => (
              <a className="cs-index-card" href={`/case-studies/${cs.slug}/`} key={cs.slug}>
                <span className="cs-meta">{cs.industry}</span>
                <h3>{cs.client}</h3>
                <p>{cs.summary}</p>
                <span className="more">Read the case study &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Your project could be next</h2>
          <p>Tell us where you want to go - we will map the plan, the timeline, and the numbers in one free call.</p>
          <a href="/contact/" className="btn-accent">Get a Free Growth Estimate</a>
        </div>
      </section>
    </PageShell>
  );
}
