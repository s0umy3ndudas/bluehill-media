/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'source.unsplash.com'], // Allowed external images
  },experimental: {
    turbo: {}, // ✅ Use an empty object instead of 'true'
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
};

module.exports = nextConfig;
