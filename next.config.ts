import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactStrictMode: true,
  experimental: {
    // Avoid Turbopack panics when restoring its persistent development cache.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
