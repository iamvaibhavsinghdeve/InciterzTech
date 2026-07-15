import PageShell from '../../components/PageShell';

export const metadata = {
  alternates: { canonical: '/thank-you/' }, title: 'Thank You | Inciterz' };

export default function ThankYou() {
  return (
    <PageShell>
      <section className="page-hero" style={{ minHeight: '55vh' }}>
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Thank you</div>
          <h1>Request received. <em>We&apos;re on it.</em></h1>
          <p className="lede">A real person from the Inciterz team will get back to you within 2 working days - usually much sooner.</p>
          <div className="hero-ctas">
            <a href="/" className="btn btn-primary">Back to Home</a>
            <a href="/case-studies/" className="btn btn-outline">Browse Our Work</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
