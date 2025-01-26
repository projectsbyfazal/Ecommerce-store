import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "startersites.io",
        port: "",
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;
