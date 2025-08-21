/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // If using static images and avoiding Image Optimization
  },
};

module.exports = nextConfig;
