import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/POTFOLIO",
  assetPrefix: "/POTFOLIO/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
