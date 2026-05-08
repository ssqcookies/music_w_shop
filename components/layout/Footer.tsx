
'use client';
import { memo, ReactNode } from "react";

export interface IProps {
  children?: ReactNode; // ReactNode，支持文本、数组等所有合法子元素
}

const Footer = memo(function Footer(props: IProps) {
  const { children } = props;
  return (
    <div className="min-h-screen bg-gray-50">
      <footer className="bg-gray-100 py-4 text-center text-gray-500">
        © 2025 网易云商城
      </footer>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;