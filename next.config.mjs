/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.b-e.az"],
  },
  experimental: {
    appDir: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|OTF)$/i,
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] },
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

