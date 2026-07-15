import PageShell from '../../../components/PageShell';
import { posts, bySlug } from '../../../data/site';

const items = bySlug(posts);

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = items[params.slug];
  return {
    title: p.title,
    description: p.excerpt.slice(0, 158),
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: { type: 'article', title: `${p.title} | Inciterz Blog`, description: p.excerpt, url: `/blog/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function BlogPost({ params }) {
  const p = items[params.slug];
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    author: { '@type': 'Organization', name: 'Inciterz' },
    publisher: { '@type': 'Organization', name: 'Inciterz', logo: { '@type': 'ImageObject', url: 'https://inciterz.com/images/inciterz-lockup.png' } },
    mainEntityOfPage: `https://inciterz.com/blog/${p.slug}/`,
  };
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="post-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span><a href="/blog/">Blog</a><span>/</span>{p.category}</div>
          <div className="post-meta-row">
            <span className="post-cat">{p.category}</span>
            <span className="post-date">{p.date} &middot; {p.readTime}</span>
          </div>
          <h1>{p.title}</h1>
          <p className="lede">{p.excerpt}</p>
        </div>
      </section>

      <section className="post-body">
        <div className="wrap">
          <div className="prose">
            {p.sections.map(([h, paras]) => (
              <div key={h}>
                <h2>{h}</h2>
                {paras.map((t, i) => <p key={i}>{t}</p>)}
              </div>
            ))}
          </div>

          <div className="takeaways">
            <h3>Key takeaways</h3>
            <ul>{p.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>

          <div className="related">
            <div className="section-head"><div className="eyebrow">Keep reading</div><h2>Related articles</h2></div>
            <div className="post-index-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
              {related.map((r) => (
                <a className="post-index-card" href={`/blog/${r.slug}/`} key={r.slug}>
                  <div className="thumb" />
                  <div className="pbody">
                    <span className="post-cat">{r.category}</span>
                    <h3>{r.title}</h3>
                    <span className="pfoot">{r.date} &middot; {r.readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Want this applied to your business?</h2>
          <p>Build &middot; Market &middot; Grow - engineering and growth from one dependable partner.</p>
          <a href="/contact/" className="btn-accent">Get a Free Growth Estimate</a>
        </div>
      </section>
    </PageShell>
  );
}
