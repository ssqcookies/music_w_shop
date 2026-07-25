import { memo } from "react";

import type { FC, ReactNode } from "react";

/**
 * 区块标题组件
 * @param children - 可选子节点，用于扩展标题区域内容
 */
export interface ISectionTitleProps {
  /** 子节点内容，支持任意 React 子元素 */
  children?: ReactNode;
  /** 标题 */
  title: string;
}

const SectionTitle: FC<ISectionTitleProps> = memo(function SectionTitle(props) {
  const { children, title } = props;

  // 可选：loading 状态占位
  // if (loading) return <div className="section-title">加载中...</div>;

  // 可选：error 状态占位
  // if (error) return <div className="section-title">加载失败，请稍后重试</div>;

  return (
    <div className="m-[20px_0px_6px_0px] font-fs36 color-title font-[900]">
      <div>{title}</div>
    </div>
  );
});

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
