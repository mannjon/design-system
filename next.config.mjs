/** @type {import('next').NextConfig} */
// On GitHub Pages the site is served from /<repo>/, so the Pages workflow
// sets PAGES_BASE_PATH=/design-system. Local builds keep the root path.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  // Static export so the showcase can be tested live on GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
