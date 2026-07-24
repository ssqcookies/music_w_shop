
'use client';
import { memo, ReactNode } from "react";

export interface IProps {
  children?: ReactNode; // ReactNode，支持文本、数组等所有合法子元素
}

const Footer = memo(function Footer(props: IProps) {
  const { children } = props;
  return (
    <div className="bg-gray-50">
      <footer className="bg-gray-100 py-4 text-center text-gray-500">
          <div>服务条款| 隐私政策| 儿童隐私政策| 版权投诉| 投资者关系| 广告合作 | 联系我们</div>
          <div> © 2023 老版网易云商城 </div>
      </footer>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;