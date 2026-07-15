// Alias page: /career/ -> /careers/ (people often type the singular form).
// Static-export friendly: instant client redirect + <link canonical> to the real page.
export const metadata = {
  title: 'Careers | Inciterz',
  alternates: { canonical: '/careers/' },
  robots: { index: false, follow: true },
};

export default function CareerAlias() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/careers/" />
        <link rel="canonical" href="/careers/" />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '80px 20px', color: '#002FA6' }}>
        <p>Redirecting to <a href="/careers/" style={{ color: '#002FA6' }}>Careers</a>&hellip;</p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/careers/');" }} />
      </body>
    </html>
  );
}
