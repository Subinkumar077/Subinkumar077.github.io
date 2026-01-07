import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // 1. Ignore TypeScript Errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. Ignore ESLint Errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;