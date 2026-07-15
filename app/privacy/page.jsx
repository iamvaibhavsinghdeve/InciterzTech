import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Privacy Policy',
  description: "How Inciterz collects, uses, and protects the information you share with us. We keep it minimal and we never sell your data.",
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Privacy</div>
          <h1>Privacy Policy</h1>
          <p className="lede">How Inciterz collects, uses, and protects the information you share with us. We keep it minimal and we never sell your data.</p>
          <p className="stats-note" style={{ marginTop: '8px' }}>Last updated: 2026. This is a general template - have it reviewed by legal counsel before relying on it.</p>
        </div>
      </section>
      <section className="post-body">
        <div className="wrap">
          <div className="prose">
            <div>
              <h2>Information we collect</h2>
              <p>We collect the details you voluntarily provide through our contact and enquiry forms - typically your name, email, phone number, and message. We also collect standard analytics data such as pages visited and approximate location, used only to improve the website.</p>
            </div>
            <div>
              <h2>How we use your information</h2>
              <p>We use your information to respond to enquiries, provide the services you request, and improve our website and communications. We do not sell, rent, or trade your personal information to third parties.</p>
            </div>
            <div>
              <h2>Cookies and analytics</h2>
              <p>We may use cookies and privacy-respecting analytics to understand how visitors use our site. You can disable cookies in your browser settings at any time.</p>
            </div>
            <div>
              <h2>Data retention and security</h2>
              <p>We retain enquiry data only as long as needed to serve you and meet legal obligations, and we apply reasonable technical and organisational measures to protect it.</p>
            </div>
            <div>
              <h2>Your rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data by emailing connect@inciterz.com. We will respond within a reasonable timeframe.</p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>For any privacy questions, contact us at connect@inciterz.com or +91 9810200568.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
