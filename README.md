# 介绍
网易云商城（Next.js + TS + App Router 最新版）

技术栈：Next.js 16 + TypeScript + App Router + TailwindCSS


##项目结构
```
music_w_shop/
├── app/                      # App Router 核心路由
│   ├── goods/                # 商品模块
│   │   ├── page.tsx          # 商品列表页
│   │   └── [id]/
│   │       └── page.tsx      # 商品详情页（动态路由）
│   ├── cart/
│   │   └── page.tsx          # 购物车页面
│   ├── order/
│   │   ├── page.tsx          # 订单列表
│   │   └── confirm/
│   │       └── page.tsx      # 订单确认
│   ├── user/
│   │   └── page.tsx          # 个人中心
│   ├── api/                  # 后端接口（Next 内置API）
│   │   ├── goods/
│   │   │   └── route.ts      # 商品接口
│   │   ├── cart/
│   │   │   └── route.ts      # 购物车接口
│   │   └── order/
│   │       └── route.ts      # 订单接口
│   ├── favicon.ico
│   ├── globals.css           # 全局样式
│   ├── page.tsx              # 商城首页
│   └── layout.tsx           # 根布局（商城全局布局（导航栏、底部））
├── components/               # 公共组件
│   ├── layout/
│   │   ├── NavBar.tsx       # 商城顶部导航
│   │   └── Footer.tsx       # 底部版权
│   ├── goods/
│   │   ├── GoodCard.tsx     # 商品卡片
│   │   └── GoodList.tsx     # 商品列表容器
│   ├── cart/
│   │   └── CartItem.tsx     # 购物车单项
│   └── ui/                  # 通用基础组件
│       ├── Button.tsx
│       └── Empty.tsx
├── lib/                     # 工具、请求、类型
│   ├── request.ts           # 封装 fetch/axios 请求
│   ├── types.ts             # 全局 TS 类型定义
│   └── utils.ts             # 通用工具方法
├── store/                   # 状态管理（可选 Zustand/Redux）
│   ├── cartStore.ts         # 购物车状态
│   └── userStore.ts         # 用户状态
├── public/                  # 静态资源
│   ├── images/              # 图片
│   └── logo.png
├── styles/                  # 样式   
│   └── globals.scss         
├── next.config.js
├── tsconfig.json
└── package.json
```


### Mock 接口说明
1. 项目使用 MSW 做本地接口模拟，`public/mockServiceWorker.js` 必须保留；
2. 启动命令：
   - `npm run dev`：自动启用Mock拦截本地接口；
   - `npm run build` / 线上部署：MSW自动失效，不会影响生产路由与请求；
3. 无需手动删除任何文件，环境变量自动控制开关。