import SiteContent from '../components/SiteContent';
import Interactions from '../components/Interactions';
import HexScene from '../components/HexScene';

export const metadata = {
  title: 'Inciterz | Technology & Digital Marketing Company, India',
  description: 'Web & mobile development, AI solutions, SaaS engineering, SEO, and performance marketing from one dependable partner in Noida, India - delivering for clients across the US, UK, Europe, Middle East, and APAC.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <SiteContent />
      <Interactions />
      <HexScene />
    </>
  );
}
