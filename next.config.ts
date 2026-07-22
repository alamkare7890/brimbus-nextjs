import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.brimbus.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;