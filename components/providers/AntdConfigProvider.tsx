'use client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={zhCN} // 中文语言包
      theme={{
        token: {
          colorPrimary: '#1677ff', // 主题主色，可以改成蓝色/橙色
          borderRadius: 6,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}