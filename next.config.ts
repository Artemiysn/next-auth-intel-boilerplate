import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false, 
  webpack: (config: any) => {
    config.ignoreWarnings = [
      { module: /node_modules/, message: /source map/ },
      { message: /sourceMapURL/ }, 
    ];
    return config;
  },
};

export default nextConfig;
