import './globals.css';
import LeadPopup from '../components/LeadPopup';

export const metadata = {
  metadataBase: new URL('https://inciterz.com'),
  title: {
    default: 'Inciterz | Technology & Digital Marketing Company, India',
    template: '%s | Inciterz',
  },
  description:
    'Inciterz is an India-based technology and digital marketing company serving clients globally - web & mobile development, AI solutions, SaaS, SEO, and performance marketing under one roof. Build. Market. Grow.',
  keywords: [
    'IT company India', 'web development company India', 'mobile app development India',
    'digital marketing agency India', 'SEO agency India', 'AI solutions company',
    'SaaS development', 'software development company Noida', 'offshore development India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Inciterz',
    locale: 'en_US',
    url: 'https://inciterz.com',
    title: 'Inciterz | Technology & Digital Marketing Company in India, Serving Globally',
    description: 'Web & mobile development, AI solutions, SEO, and performance marketing - engineering and growth from one dependable partner. Build. Market. Grow.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Inciterz - Build. Market. Grow.' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WeInciterz',
    title: 'Inciterz | Technology & Digital Marketing Company in India',
    description: 'Engineering and growth from one dependable partner - serving clients globally from Noida, India.',
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport = { themeColor: '#002FA6' };

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Inciterz',
  url: 'https://inciterz.com',
  logo: 'https://inciterz.com/images/inciterz-lockup.png',
  slogan: 'Build. Market. Grow.',
  description: 'Technology and digital marketing company based in Noida, India, serving clients globally.',
  email: 'connect@inciterz.com',
  telephone: '+91-9810200568',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3rd Floor, H 146-147, Sector 63',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/company/inciterz/',
    'https://www.instagram.com/inciterz_it/',
    'https://twitter.com/WeInciterz',
    'https://fb.me/Inciterz',
  ],
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Inciterz',
  url: 'https://inciterz.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </head>
      <body>{children}<LeadPopup /></body>
    </html>
  );
}
