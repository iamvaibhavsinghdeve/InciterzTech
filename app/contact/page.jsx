import PageShell from '../../components/PageShell';
import RolePrefill from '../../components/RolePrefill';
import { services, marketing } from '../../data/site';

export const metadata = {
  alternates: { canonical: '/contact/' },
  title: 'Contact Us | Inciterz',
  description: 'Get in touch with Inciterz - project enquiries, careers, and general questions. We respond within 2 working days.',
};

const budgets = ['Under $2,000', '$2,000 - $5,000', '$5,000 - $15,000', '$15,000+', 'Not sure yet'];

export default function ContactPage() {
  const serviceOptions = [...services, ...marketing].map((s) => s.title);
  return (
    <PageShell>
      <RolePrefill />
      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Contact</div>
          <h1>Let&apos;s talk <em>growth</em></h1>
          <p className="lede">Tell us where you want to go - we will map the plan, the timeline, and the numbers. Every enquiry gets a reply from a real person.</p>
        </div>
      </section>

      <section className="detail-section" style={{ paddingTop: 0 }} id="contact-form">
        <div className="wrap">
          <div className="contact-card">
            <div className="contact-form-panel">
              <div id="apply-banner" className="apply-banner" style={{ display: 'none' }} />
              <h2>To make requests for further information</h2>
              <p className="form-sub">We just need a couple of hours!<br />No more than 2 working days since receiving your issue ticket.</p>
              <form className="cform" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="role" value="" />
                <p style={{ display: 'none' }}><input name="bot-field" aria-hidden="true" tabIndex={-1} /></p>
                <div className="row-2">
                  <input type="text" name="name" placeholder="Name *" aria-label="Name" required />
                  <input type="email" name="email" placeholder="Email *" aria-label="Email" required />
                </div>
                <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" />
                <div className="row-2">
                  <select name="service" aria-label="Interested In Service" defaultValue="">
                    <option value="" disabled>Interested In Service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <select name="budget" aria-label="Select Project Budget" defaultValue="">
                    <option value="" disabled>Select Project Budget</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <textarea name="message" placeholder="Message" aria-label="Message" />
                <button type="submit" className="submit">Submit a request</button>
              </form>
            </div>

            <div className="contact-info-panel">
              <div className="info-cols">
                <div className="info-block">
                  <h3>Project Enquiries</h3>
                  <a href="mailto:sales@inciterz.com">sales@inciterz.com</a>
                </div>
                <div className="info-block">
                  <h3>Career</h3>
                  <a href="/careers/">View open roles</a><br />
                  <a href="mailto:careers@inciterz.com">careers@inciterz.com</a>
                </div>
              </div>
              <div className="info-block">
                <h3>General Enquiries</h3>
                <a href="mailto:connect@inciterz.com">connect@inciterz.com</a>
              </div>
              <div className="info-block">
                <h3>Our Offices</h3>
                <div className="office-h"><span aria-hidden="true">&#127470;&#127475;</span> India</div>
                <p className="addr">3rd Floor, H 146-147,<br />Sector 63 Noida,<br />Gautam Buddha Nagar, U.P.</p>
                <a href="mailto:info@inciterz.com">info@inciterz.com</a><br />
                <a href="tel:+919810200568">+91 9810200568</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="auth-band">
        <div className="wrap auth-grid">
          <div>
            <h2 className="auth-h">Are you looking for someone who can validate <em>the authenticity of your work</em>?</h2>
            <p className="auth-sub">Inciterz is what you are looking for.<br />Contact us to enquire about your queries.</p>
          </div>
          <div className="auth-cta">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.8.6a2 2 0 0 1 1.9 2.2z"/></svg>
            <span className="auth-label">Reach out now!</span>
            <a className="auth-phone" href="tel:+919810200568">+91 9810200568</a>
            <a className="btn btn-primary" href="#contact-form">Request Quote</a>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <h2>Start building &amp; growing with Inciterz</h2>
          <p>Build &middot; Market &middot; Grow - engineering and growth from one dependable partner.</p>
          <a href="mailto:connect@inciterz.com" className="btn-accent">Email Us Directly</a>
        </div>
      </section>
    </PageShell>
  );
}
