import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cabinetrybywettach.s3.us-east-1.amazonaws.com', 
      },
      {
        protocol: 'https',
        hostname: 'cloudphotosone.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};



export default nextConfig;