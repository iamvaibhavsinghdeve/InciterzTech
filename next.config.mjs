/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML export -> deploy /out anywhere (Netlify)
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
