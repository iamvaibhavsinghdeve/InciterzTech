import DetailPage from '../../../components/DetailPage';
import { services, bySlug } from '../../../data/site';

const items = bySlug(services);

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = items[params.slug];
  const title = `${item.title} Services | India to Global`;
  const description = `${item.intro.split('. ')[0]}. Based in Noida, India - serving clients globally.`.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `/services/${params.slug}/` },
    openGraph: { title: `${title} | Inciterz`, description, url: `/services/${params.slug}/`, images: ['/images/og-image.png'] },
  };
}

export default function Page({ params }) {
  return <DetailPage crumb="Services" crumbHref="/#services" item={items[params.slug]} />;
}
