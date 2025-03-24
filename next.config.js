/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dreamnest.b-cdn.net',
      },
    ],
  },
  webpack: (config) => {
    // Add a fallback for the $paraglide/runtime.js import
    config.resolve.alias = {
      ...config.resolve.alias,
      '$paraglide/runtime.js': require.resolve('./src/lib/paraglide-mock.js'),
    };
    return config;
  },
};

module.exports = nextConfig;
