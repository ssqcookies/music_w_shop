/**
  Next.js App Router 里的 根布局（Root Layout），作用是：
  1. 提供全局样式和布局结构（定义整个项目的 HTML 骨架（<html>、<body> 标签））
  2. 配置页面的 metadata（标题、描述，用于 SEO 优化）
  3. 提供全局布局结构（如头部、底部、侧边栏等）
  4. 提供全局状态和数据（如用户登录状态、购物车数据等）
  5. 提供全局错误和异常（如404、500等）
  6. 提供全局导航和路由（如顶部导航、底部导航等）
  7. 提供全局布局和结构（如头部、底部、侧边栏等）
  8. 提供全局样式和布局结构（如顶部导航、底部导航等）
  9. 提供全局状态和数据（如用户登录状态、购物车数据等）
 */
import type { Metadata } from "next"; //Next.js 的类型定义，用来规范 metadata 的结构，是 TypeScript 的类型校验。
import { Geist, Geist_Mono } from "next/font/google"; //Next.js 内置的 Google 字体，是 Vercel 官方推荐的无衬线字体和等宽字体。
import { Analytics } from "@vercel/analytics/react"; //Vercel 的 Analytics 组件，用于收集和分析网站的访问数据。
import "./globals.css";
import "antd/dist/reset.css";

import ReduxProvider from '@/components/providers/ReduxProvider';
import MswProvider from "@/components/providers/MswProvider";
import LoginQRModal from '@/components/LoginQRModal';

import NavBar from "@/components/layout/NavBar"; // 顶部导航栏
import Footer from "@/components/layout/Footer"; // 底部导航栏

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], //只加载拉丁字母字符集，减少字体文件体积，优化加载速度。

});

// Next.js App Router 用 metadata 替代了传统的 <Head> 标签，会自动在服务端渲染时注入到 HTML 头部，SEO 效果更好
export const metadata: Metadata = {
  title: "网易云🎵商城 - 音乐购有趣",
  description: "学习网易云🎵商城项目：云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料",// 页面描述，SEO 搜索引擎抓取的内容，提升搜索曝光。
  keywords: [
    "数码影音",
    "beats耳机",
    "击音耳机",
    "漫步者",
    "akg",
    "潮牌",
    "T恤",
    "音乐生活",
    "食品",
    "服饰配件",
    "礼品",
    "礼物",
    "礼盒",
    "鲜花",
    "ip周边",
    "云音乐",
    "商城",
    "云贝"
  ],
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,// children 就是当前路由对应的 page.tsx 的内容
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="min-h-screen flex flex-col">
       {/* MSW 放在最外层 */}
        <MswProvider>

        <ReduxProvider>
        {/* 全局导航栏 所有页面都显示 */}
        <NavBar />
         {/* 页面内容插槽：当前页面 page.tsx 的内容会渲染在这里 */}
         {/* 全局包裹，所有页面都能拿到redux上下文 */}

        {children}
      {/* 全局只挂载一次，所有页面共用 */}
        <LoginQRModal />
        <Analytics />
         {/* 全局底部栏 所有页面都显示 */}
        <Footer />
           </ReduxProvider>
        </MswProvider>
       </body>
    </html>
  );
}
