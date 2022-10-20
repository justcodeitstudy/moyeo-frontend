/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
