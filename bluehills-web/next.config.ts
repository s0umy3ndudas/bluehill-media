/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true, // Uses SWC for faster builds
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'], // Allowed external images
  },
  experimental: {
    appDir: true, // Enables Next.js App Router if using Next.js 13+
  },
  webpack: (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
    // Example: Modify Webpack for additional processing
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Expose env variable
  },
};

module.exports = nextConfig;
