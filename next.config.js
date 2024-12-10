/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["envs.sh"], // Allow images from this domain
  },
};

module.exports = nextConfig;
