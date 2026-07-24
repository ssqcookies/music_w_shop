'use client';
import { useEffect } from 'react';

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