import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // 2025/01/06 中西 
  // 以下の部分を削除(https://kuroco.app/ja/quick-guide/#next-deploy-config)
  output: 'export',
};

export default nextConfig;
