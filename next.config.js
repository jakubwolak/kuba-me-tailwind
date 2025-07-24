/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.kuba.me',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;