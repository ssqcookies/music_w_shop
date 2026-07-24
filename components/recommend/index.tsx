import { memo } from "react";
import Image from "next/image";

import type { FC, ReactNode } from "react";
import type { IRecommend } from "@/service/home";

/**
 * 首页推荐模块容器组件
 * @param children - 可选子节点，用于扩展推荐区域内容
 * @param recommends - 推荐列表数据，由父组件传入
 */
export interface IRecommendProps {
  /** 子节点内容，支持任意 React 子元素 */
  children?: ReactNode;
  /** 推荐卡片列表 */
  recommends?: IRecommend[];
}

const Recommend: FC<IRecommendProps> = memo(function Recommend(props) {
  const { children, recommends = [] } = props;

  // 可选：loading 状态占位
  // if (loading) return <div className="recommend">加载中...</div>;

  // 可选：error 状态占位
  // if (error) return <div className="recommend">加载失败，请稍后重试</div>;

  return (
    <div className="flex-normal justify-center">
      <div className="wrapper h-recommend-h py-[20px]">
        <ul className="flex-normal h-full gap-[20px]">
          {recommends.map((item) => (
            <li
              key={item.id}
              className="flex-1 overflow-hidden cursor-pointer rounded-[4px] bg-bgGray"
            >
              <div className="relative h-img-h w-full overflow-hidden">
                {item.picStr && (
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    src={item.picStr}
                    alt={item.title ?? "推荐"}
                    width={100}
                    height={100}
                  />
                )}
              </div>
              {item.title && (
                <p className="px-[12px] py-[10px] text-center font-fs14 text-title">
                  {item.title}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {children}

      {/* 可选：兜底空状态 */}
      {!recommends.length && !children && <div className="wrapper py-[40px] text-center text-sub">暂无推荐内容</div>}
    </div>
  );
});

Recommend.displayName = "Recommend";

export default Recommend;
