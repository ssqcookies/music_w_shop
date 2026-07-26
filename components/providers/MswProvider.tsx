'use client';
import { useEffect } from 'react';
/**
 * MSW Mock接口拦截提供者
 * 1. 仅在 npm run dev 开发环境生效，生产环境自动禁用
 * 2. public/mockServiceWorker.js 必须提交到Git，本地启动依赖此文件
 * 3. 打包/上线无需任何删除操作，代码自动隔离Service Worker
 */
export default function MswProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 只在开发环境启用mock，生产环境直接跳过
    if (process.env.NODE_ENV === 'development') {
      import('@/mocks/browser').then(({ worker }) => {
        worker.start({
          // 没有匹配mock的请求直接放行，不会阻断真实请求
          onUnhandledRequest: 'bypass',
        });
        console.log("✅ MSW Mock服务已启动");
      });
    }
  }, []);

  return <>{children}</>;
}