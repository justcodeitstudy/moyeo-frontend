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
      "moyeo-skillstack.s3.ap-northeast-2.amazonaws.com",
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
      "avatars.githubusercontent.com",
    ],
  },
  compiler: {
    styledComponents:
      true |
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
  },
}
module.exports = nextConfig;
