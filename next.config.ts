import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,  // 严格模式, 强制组件重新渲染，作用：辅助编写代码，检查过时的函数、方法和属性 开发阶段组件会执行两次
  env: {
    PORT: process.env.PORT || "3000",
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 3000}` ,
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.music.126.net',
      },
         {
        protocol: 'http',
        hostname: '**.music.126.net',
      }
    ]
  },
  basePath: process.env.BASE_PATH || "",
  output: 'standalone', // 打包后生成独立的文件，避免在生产环境使用代理
};

export default nextConfig;
