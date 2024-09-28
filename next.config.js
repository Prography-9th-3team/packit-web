/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // 구글 프로필
  },
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  rewrites: () => [
    {
      source: '/api/:path*',
      destination: 'http://3.39.102.104/api/:path*',
    },
    {
      source: '/file/:path*',
      destination: 'http://3.39.102.104/file',
    },
    {
      source: '/recommend/:path*',
      destination: 'http://3.39.102.104/recommend/:path*',
    },
  ],
};

module.exports = nextConfig;
