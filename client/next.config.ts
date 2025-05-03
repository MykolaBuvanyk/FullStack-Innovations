import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgo: true,
          svgoConfig: {
            plugins: [
              { name: 'removeDimensions', active: true },
              { name: 'removeViewBox', active: false },
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(opacity|fill-opacity|stroke-opacity)'   // видалить усі opacity
                }
              }
            ]
          }
        }
      }]
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
