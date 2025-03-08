/* eslint-disable @typescript-eslint/no-require-imports */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  reactStrictMode: true, // Enables React strict mode
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'source.unsplash.com'], // Allowed external images
  },
  experimental: {
    turbo: {}, // ✅ Correct Turbo Mode Configuration
    serverActions: true, // ✅ Enables experimental server actions
  },
  webpack: (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Expose env variable
  },
  i18n: {
    locales: ['en'], // ✅ Add more languages as needed
    defaultLocale: 'en',
  },
  productionBrowserSourceMaps: true, // ✅ Enables source maps in production for better debugging
  pageExtensions: ['tsx', 'mdx'], // ✅ Allows both TSX & MDX pages
});

module.exports = nextConfig;
