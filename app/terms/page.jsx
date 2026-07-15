import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Terms of Service',
  description: "The terms that govern your use of the Inciterz website and the services we provide. Please read them carefully.",
  alternates: { canonical: '/terms/' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Terms</div>
          <h1>Terms of Service</h1>
          <p className="lede">The terms that govern your use of the Inciterz website and the services we provide. Please read them carefully.</p>
          <p className="stats-note" style={{ marginTop: '8px' }}>Last updated: 2026. This is a general template - have it reviewed by legal counsel before relying on it.</p>
        </div>
      </section>
      <section className="post-body">
        <div className="wrap">
          <div className="prose">
            <div>
              <h2>Use of this website</h2>
              <p>By accessing this website you agree to use it lawfully and not to misuse, disrupt, or attempt to gain unauthorised access to any part of it or its systems.</p>
            </div>
            <div>
              <h2>Services and engagements</h2>
              <p>Any project or service engagement is governed by a separate written agreement or proposal signed by both parties. Content on this website is for general information and does not constitute a binding offer.</p>
            </div>
            <div>
              <h2>Intellectual property</h2>
              <p>All content, branding, and design on this website are the property of Inciterz unless otherwise stated, and may not be reproduced without permission.</p>
            </div>
            <div>
              <h2>Limitation of liability</h2>
              <p>This website and its content are provided "as is". To the extent permitted by law, Inciterz is not liable for any indirect or consequential loss arising from use of this website.</p>
            </div>
            <div>
              <h2>Third-party links</h2>
              <p>Our website may link to external sites we do not control. We are not responsible for the content or practices of those sites.</p>
            </div>
            <div>
              <h2>Governing law</h2>
              <p>These terms are governed by the laws of India, with jurisdiction in the courts of Gautam Buddha Nagar, Uttar Pradesh.</p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>Questions about these terms? Email connect@inciterz.com or call +91 9810200568.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
