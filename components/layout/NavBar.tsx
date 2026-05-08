
'use client'; 
import { memo, ReactNode } from "react";

export interface IProps {
  children?: ReactNode; // ReactNode，支持文本、数组等所有合法子元素
}

const NavBar = memo(function NavBar(props: IProps) {
  const { children } = props;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 这里可以放你的导航栏、底部栏，先留个位置 */}
      <header className="bg-white shadow">
        <div className="wrapper py-4">网易云商城导航栏</div>
      </header>

      {/* 页面内容区域 */}
      <main className="wrapper py-6">
        {children}
      </main>

    </div>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;