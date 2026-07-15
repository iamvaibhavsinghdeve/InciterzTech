import PageShell from '../../components/PageShell';

export const metadata = {
  alternates: { canonical: '/about/' },
  title: 'About Us | Inciterz',
  description: 'Inciterz - Innovating Technology, Empowering Business. Meet the team behind Build, Market, Grow.',
};

const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

const team = [
  { name: 'Aniket Pratap Singh', role: 'CEO' },
  { name: 'Vaibhav Singh', role: 'Product Manager' },
  { name: 'Rajan Gangwar', role: 'Business Development Manager' },
  { name: 'Sparsh', role: 'Business Development Manager' },
];

const values = [
  ['Innovation', 'We embrace creativity and continuous learning to deliver future-ready solutions.',
    <path key="i" d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0012 2z" />],
  ['Integrity', 'We uphold the highest standards of honesty, transparency, and ethical conduct.',
    <path key="i" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />],
  ['Excellence', 'We are committed to delivering exceptional quality and exceeding expectations.',
    <path key="i" d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />],
  ['Collaboration', 'We believe in the power of teamwork and strong partnerships - with our clients and each other.',
    <path key="i" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z" />],
];

const journey = [
  ['2019', 'Company founded with a vision to unify engineering and growth'],
  ['2021', 'Expanded into full-service digital marketing'],
  ['2022', 'Delivered 25+ successful projects across 5 industries'],
  ['2023', 'Launched dedicated teams and DevOps practice'],
  ['2024', 'Crossed 50+ projects and 9 industries served'],
  ['2025', 'AI & LLM solutions practice launched'],
  ['2026', 'Continuing to innovate and lead the future'],
];

const VIcon = ({ children }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

export default function AboutPage() {
  return (
    <PageShell>
      {/* Banner: swap the gradient for the company image via .about-hero in globals.css */}
      <section className="about-hero">
        <div className="wrap">
          <h1>About Us</h1>
          <p className="tagline">Innovating Technology, Empowering Business</p>
          <p>At Inciterz, we harness the power of technology to drive innovation, accelerate growth, and create lasting impact for businesses worldwide. Engineering, automation, and performance marketing - everything a business needs to build, launch, and grow, from one dependable partner.</p>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icn"><VIcon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></VIcon></div>
              <div>
                <h3>Our Vision</h3>
                <p>To be a global leader in technology and growth services, recognised for transforming businesses through innovative engineering, exceptional talent, and an unwavering commitment to measurable outcomes.</p>
              </div>
            </div>
            <div className="vm-card">
              <div className="vm-icn"><VIcon><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></VIcon></div>
              <div>
                <h3>Our Mission</h3>
                <p>To deliver cutting-edge technology and marketing solutions that empower businesses to achieve their goals, foster innovation, and create real value for our clients, employees, and communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Our core values</div>
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid">
            {values.map(([t, d, icon]) => (
              <div className="value-card" key={t}>
                <div className="v-icn"><VIcon>{icon}</VIcon></div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Founder / Director</div>
            <h2>The vision behind Inciterz</h2>
          </div>
          <div className="founder-card">
            {/* Replace .avatar-ph with <img> when the photo is provided */}
            <div className="avatar-ph">{initials('Neetesh Yadav')}</div>
            <div>
              <h3>Neetesh Yadav</h3>
              <div className="role">Founder &amp; Director</div>
              <blockquote>
                Technology is not just our business - it&apos;s our passion. Since our inception, we have been dedicated to solving complex challenges and delivering solutions that drive real impact. Our journey is fuelled by innovation, integrity, and a relentless focus on our clients&apos; success.
              </blockquote>
              <div className="sig">- Neetesh Yadav</div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Our team</div>
            <h2>The people who make it happen</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div className="team-card" key={m.name}>
                {/* Replace .avatar-ph with <img> when photos are provided */}
                <div className="avatar-ph">{initials(m.name)}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <div className="team-social">
                  <a href="https://www.linkedin.com/company/inciterz/" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.24h4.5V23H.24V8.24zM8.5 8.24h4.32v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V23H8.5V8.24z"/></svg>
                  </a>
                  <a href="mailto:connect@inciterz.com" aria-label="Email">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6.5l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Our journey</div>
            <h2>Milestones so far</h2>
          </div>
          <div className="journey" style={{ gridTemplateColumns: 'repeat(7,1fr)' }}>
            {journey.map(([y, d]) => (
              <div className="j-item" key={y}><b>{y}</b><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="why-grid">
            <div>
              <div className="eyebrow">Why choose us</div>
              <h2 style={{ color: '#0B1332', fontSize: 'clamp(24px,3vw,34px)', margin: '14px 0' }}>Deep expertise, one dependable partner</h2>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>We combine deep industry expertise, innovative technology, and a client-first approach to deliver measurable results and long-term value - engineering and growth working as one system, not disconnected vendors.</p>
            </div>
            <div className="why-tiles">
              <div className="why-tile"><b>50+</b><span>Projects Delivered</span></div>
              <div className="why-tile"><b>9+</b><span>Industries Served</span></div>
              <div className="why-tile"><b>7+</b><span>Years in Business</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner-wrap">
        <div className="wrap">
          <div className="cta-banner">
            <h2>Let&apos;s Build Together</h2>
            <p>Ready to transform your business with innovative solutions? Let&apos;s connect and build a smarter future together.</p>
            <a href="/contact/" className="btn-white">Get In Touch</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
