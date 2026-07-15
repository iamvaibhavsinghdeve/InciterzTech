import PageShell from '../../components/PageShell';
import { posts } from '../../data/site';

export const metadata = {
  alternates: { canonical: '/blog/' },
  title: 'Blog | Inciterz',
  description: 'Latest thinking from Inciterz - practical guides on technology, AI, startup building, and growth marketing.',
};

export default function BlogIndex() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Home</a><span>/</span>Blog</div>
          <h1>Latest <em>thinking</em></h1>
          <p className="lede">Practical guides on technology, AI, startup building, and growth marketing - written from real client work, not theory.</p>
        </div>
      </section>

      <section className="detail-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="post-index-grid">
            {posts.map((p) => (
              <a className="post-index-card" href={`/blog/${p.slug}/`} key={p.slug}>
                <div className="thumb" />
                <div className="pbody">
                  <span className="post-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="pfoot">{p.date} &middot; {p.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Prefer answers specific to your business?</h2>
          <p>Skip the reading list - one call and we will map your situation to a plan.</p>
          <a href="/contact/" className="btn-accent">Get a Free Growth Estimate</a>
        </div>
      </section>
    </PageShell>
  );
}
