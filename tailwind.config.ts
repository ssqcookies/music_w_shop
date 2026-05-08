// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d74d45",     // 红色主色
        price: "#d33a31",       // 价格红色
        textTitle: "#333333",    // 标题颜色
        textSub: "#999999",     // 次要文字
        bgGray: "#f2f2f2",      // 灰色背景 用于卡片、按钮等
        // 中性色
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      width: {
        content: "1100px",      // 页面宽度
        logo: "290px",// logo
        img: "263px",
        cart: "36px",
      },
      height: {
        nav: "73px",// 导航栏高
        logo: "70px",// logo高
        cart: "36px",// 购物车高
        img: "263px",// 图片高
        swiper: "480px",// 轮播图高
        banner: "320px",// 横幅高
        category: "80px",// 分类高
        footer: "160px",// 底部高
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
      },
      // 字体
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // 圆角、阴影等统一规范
      borderRadius: {
        DEFAULT: "6px",
      },
    },
  },
  plugins: [],
};

export default config;