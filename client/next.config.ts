import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  eslint: {
    // Відключити ESLint на етапі будування
    ignoreDuringBuilds: true,
  },
  // i18n: {
  //   locales: ['uk', 'en'],
  //   defaultLocale: 'uk',
  //   localeDetection: false,
  // },
};

export default nextConfig;
