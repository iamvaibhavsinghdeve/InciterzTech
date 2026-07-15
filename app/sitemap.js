import { services, marketing, industries, technologies, caseStudies, posts } from '../data/site';

export const dynamic = 'force-static';

const BASE = 'https://inciterz.com';

export default function sitemap() {
  const now = new Date();
  const stat = (path, priority = 0.7) => ({ url: `${BASE}${path}`, lastModified: now, changeFrequency: 'monthly', priority });
  return [
    stat('/', 1.0),
    stat('/about/', 0.8),
    stat('/contact/', 0.9),
    stat('/case-studies/', 0.8),
    stat('/blog/', 0.8),
    stat('/pricing/', 0.9),
    stat('/careers/', 0.6),
    stat('/privacy/', 0.3),
    stat('/terms/', 0.3),
    ...services.map((s) => stat(`/services/${s.slug}/`, 0.9)),
    ...marketing.map((s) => stat(`/marketing/${s.slug}/`, 0.9)),
    ...industries.map((s) => stat(`/industries/${s.slug}/`, 0.8)),
    ...technologies.map((s) => stat(`/technologies/${s.slug}/`, 0.7)),
    ...caseStudies.map((s) => stat(`/case-studies/${s.slug}/`, 0.7)),
    ...posts.map((p) => stat(`/blog/${p.slug}/`, 0.6)),
  ];
}
