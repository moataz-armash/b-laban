import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/plus-assets/img/logos/**",
      },
      {
        protocol: "https",
        hostname: "blaban.net",
        port: "",
        pathname: "/data/files/**",
      },
    ],
  },
};

export default nextConfig;
