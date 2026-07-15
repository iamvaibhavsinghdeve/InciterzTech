import DetailPage from '../../../components/DetailPage';
import { industries, bySlug } from '../../../data/site';

const items = bySlug(industries);

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = items[params.slug];
  const title = `${item.title} Software & Marketing Solutions`;
  const description = `${item.intro.split('. ')[0]}. Based in Noida, India - serving clients globally.`.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `/industries/${params.slug}/` },
    openGraph: { title: `${title} | Inciterz`, description, url: `/industries/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function Page({ params }) {
  return <DetailPage crumb="Industries" crumbHref="/#industries" item={items[params.slug]} />;
}
