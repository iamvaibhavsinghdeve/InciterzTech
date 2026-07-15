import DetailPage from '../../../components/DetailPage';
import { marketing, bySlug } from '../../../data/site';

const items = bySlug(marketing);

export function generateStaticParams() {
  return marketing.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = items[params.slug];
  const title = `${item.title} Agency | India to Global`;
  const description = `${item.intro.split('. ')[0]}. Based in Noida, India - serving clients globally.`.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `/marketing/${params.slug}/` },
    openGraph: { title: `${title} | Inciterz`, description, url: `/marketing/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function Page({ params }) {
  return <DetailPage crumb="Marketing" crumbHref="/#services" item={items[params.slug]} />;
}
