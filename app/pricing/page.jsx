import PageShell from '../../components/PageShell';
import PriceCalculator from '../../components/PriceCalculator';

export const metadata = {
  title: 'Project Cost Calculator | Estimate Your Budget',
  description: 'Estimate what your website, app, or SaaS project will cost with Inciterz - an instant indicative range based on scope, features, and timeline. India-based, serving globally.',
  alternates: { canonical: '/pricing/' },
  openGraph: {
    title: 'Project Cost Calculator | Inciterz',
    description: 'Get an instant indicative estimate for your website, app, SaaS, or marketing project.',
    url: '/pricing/',
    images: ['/images/og-image.png'],
  },
};

const faqs = [
  ['Is this an exact quote?', 'No - it is an indicative range designed to help you budget. Final pricing depends on detailed requirements, which we confirm on a free scoping call before any commitment.'],
  ['Why is the estimate a range and not one number?', 'Software cost moves with scope clarity. Until requirements are fixed, an honest range is more useful than a precise-sounding number that changes later. Once we scope properly, we commit to a fixed price.'],
  ['What is included in the price?', 'Discovery, design, development, QA, deployment, and handover. Third-party costs (hosting, licences, ad spend) are billed at actuals and quoted separately.'],
  ['Do you offer fixed-price or monthly engagements?', 'Both. Fixed-scope pricing suits a well-defined v1. A dedicated team or monthly retainer suits products that evolve continuously. We recommend the fit that matches your stage.'],
  ['How do payments work?', 'Typically milestone-based: an initial advance, then payments tied to agreed delivery milestones. Marketing retainers are billed monthly.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PricingPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Pricing</div>
          <div className="hero-badge"><i />Free estimate &middot; no signup</div>
          <h1>What will your project <em>actually cost</em>?</h1>
          <p className="lede">
            Pick what you&apos;re building, the scope, and the features you need - get an indicative
            budget range in seconds. Honest ranges, no sales call required to see a number.
          </p>
        </div>
      </section>

      <section className="detail-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <PriceCalculator />
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 34px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Pricing FAQ</div>
            <h2>How our pricing works</h2>
          </div>
          <div className="pricing-faq">
            {faqs.map(([q, a]) => (
              <details className="pf-item" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner-wrap">
        <div className="wrap">
          <div className="cta-banner">
            <h2>Want a firm number?</h2>
            <p>One free call and we&apos;ll turn your estimate into a fixed-price proposal with milestones and a timeline.</p>
            <a href="/contact/" className="btn-white">Book a scoping call</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
