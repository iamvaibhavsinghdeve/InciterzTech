import DetailPage from '../../../components/DetailPage';
import { technologies, bySlug } from '../../../data/site';

const items = bySlug(technologies);

export function generateStaticParams() {
  return technologies.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = items[params.slug];
  const title = `${item.title} Development Services`;
  const description = `${item.intro.split('. ')[0]}. Based in Noida, India - serving clients globally.`.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `/technologies/${params.slug}/` },
    openGraph: { title: `${title} | Inciterz`, description, url: `/technologies/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function Page({ params }) {
  return <DetailPage crumb="Technologies" crumbHref="/#technologies" item={items[params.slug]} />;
}
