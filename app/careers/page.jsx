import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Careers - Join Our Team in Noida, India',
  description: 'Build your career at Inciterz - an India-based technology and digital marketing company serving clients globally. Open roles in engineering, marketing, and business development.',
  alternates: { canonical: '/careers/' },
};

/* Update this list as roles open and close - or leave empty and the open-application block still works. */
const roles = [
  ['Full-Stack Developer', 'Engineering', 'Noida / Hybrid', 'React, Node.js, and modern tooling for global client products.'],
  ['Digital Marketing Specialist', 'Marketing', 'Noida / Hybrid', 'SEO, paid campaigns, and analytics across international accounts.'],
  ['Business Development Executive', 'Growth', 'Noida', 'Own outreach and client conversations for our global pipeline.'],
];

// Icon paths (single-path line icons) for the "Why join us" perks grid
const P = {
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
  user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z',
  award: 'M12 15a7 7 0 100-14 7 7 0 000 14zM8.2 13.9L7 22l5-3 5 3-1.2-8.1',
  wallet: 'M20 12V8H6a2 2 0 010-4h12v4M4 6v12a2 2 0 002 2h14v-4M18 12a2 2 0 000 4h4v-4z',
  party: 'M2 22l4-11 7 7-11 4zM15.5 6.5l2 2M13 2l1.5 1.5M20 5l1 1M18 11l3-1M14 8l4-4',
  headset: 'M3 14v-2a9 9 0 0118 0v2M21 14v3a2 2 0 01-2 2h-2v-6h2a2 2 0 012 2zM3 14a2 2 0 012-2h2v6H5a2 2 0 01-2-2z',
  folder: 'M4 4h5l2 3h9a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z',
  clock: 'M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z',
  bulb: 'M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0012 2z',
  rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 00-3 0zM12 15l-3-3a22 22 0 015-9c3-1 6 2 5 5a22 22 0 01-9 5zM15 9a1 1 0 100-2 1 1 0 000 2z',
  users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 3a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8',
  book: 'M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z',
  cake: 'M4 21h16M4 21v-8a2 2 0 012-2h12a2 2 0 012 2v8M8 11V7M12 11V7M16 11V7M8 4h.01M12 3h.01M16 4h.01',
  refresh: 'M23 4v6h-6M1 20v-6h6M20.5 9A9 9 0 006 5.3L1 10M23 14l-5 4.7A9 9 0 013.5 15',
  cert: 'M9 12l2 2 4-4M7 21l-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14l-2 2-3-2-3 2-3-2-3 2z',
};

const perks = [
  ['5 days a week', P.calendar],
  ['Employee first', P.user],
  ['Rewards & benefits', P.award],
  ['Leaves encashment', P.wallet],
  ['Fun connect', P.party],
  ['Onsite opportunities', P.headset],
  ['Advanced resources', P.folder],
  ['Transparent communication', P.clock],
  ['Positive environment', P.bulb],
  ['Groundbreaking projects', P.rocket],
  ['Referral program', P.users],
  ['Learning sessions', P.book],
  ['Birthday leave', P.cake],
  ['Certification', P.cert],
  ['Compensatory off', P.refresh],
];

const hiring = [
  ['Initial Interaction', 'A friendly first call to understand your background, goals, and what you are looking for.'],
  ['Technical Interview', 'A focused conversation on your craft - engineering, marketing, or growth depending on the role.'],
  ['Real-time Assignment', 'A short, practical task that mirrors the actual work - no trick questions, real scenarios.'],
  ['Final HR Discussion', 'Culture fit, expectations, compensation, and your questions answered openly.'],
  ['Offer Rollout!', 'A clear offer and a smooth onboarding plan so you hit the ground running.'],
];

export default function CareersPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Careers</div>
          <h1>Do work that <em>ships worldwide</em></h1>
          <p className="lede">Join an India-based team building technology and growth for clients across the globe. Small enough that your work matters, ambitious enough that it travels.</p>
          <div className="hero-ctas">
            <a href="/contact/?role=General%20Application" className="btn btn-primary">Apply Now</a>
            <a href="#open-roles" className="btn btn-outline">View Open Roles</a>
          </div>
        </div>
      </section>

      <section className="detail-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Why should you join us</div>
            <h2>Life at Inciterz</h2>
          </div>
          <div className="perks-grid">
            {perks.map(([t, path]) => (
              <div className="perk-item" key={t}>
                <span className="perk-ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
                </span>
                <span className="perk-label">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section tint">
        <div className="wrap">
          <div className="hiring-head">
            <div>
              <div className="eyebrow">Hiring process</div>
              <h2 style={{ color: '#0B1332', fontSize: 'clamp(24px,3.2vw,36px)', margin: '12px 0 0', maxWidth: '520px' }}>
                The best platform to take your <span style={{ color: 'var(--blue)' }}>career to new heights.</span>
              </h2>
            </div>
            <div className="steps-badge"><span className="steps-line" /><span className="steps-word">Steps</span><b>05</b></div>
          </div>
          <div className="hiring-timeline">
            {hiring.map(([t, d], i) => (
              <div className="hire-step" key={t}>
                <div className="hire-num">{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section tint" id="open-roles">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 38px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>Open roles</div>
            <h2>Current openings</h2>
          </div>
          <div className="roles-list">
            {roles.map(([title, dept, loc, desc]) => (
              <a className="role-row" href={`/contact/?role=${encodeURIComponent(title)}`} key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="role-meta">
                  <span className="pill">{dept}</span>
                  <span className="pill">{loc}</span>
                  <span className="role-apply">Apply &rarr;</span>
                </div>
              </a>
            ))}
          </div>
          <p className="stats-note" style={{ marginTop: '22px' }}>
            Don&apos;t see your role? We&apos;re always meeting great people - <a href="/contact/?role=Open%20Application" style={{ color: 'var(--blue)' }}>send us your details</a> or email <a href="mailto:careers@inciterz.com" style={{ color: 'var(--blue)' }}>careers@inciterz.com</a>.
          </p>
        </div>
      </section>

      <section className="cta-banner-wrap">
        <div className="wrap">
          <div className="cta-banner">
            <h2>Grow your career with Inciterz</h2>
            <p>One email, one conversation - tell us what you want to build and where you want to go.</p>
            <a href="/contact/?role=Career%20Enquiry" className="btn-white">Apply Now</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
