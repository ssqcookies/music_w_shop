import { memo } from "react";
import { Col, Row } from "antd";
import Image from "next/image";

import type { FC, ReactNode } from "react";
import type { IHotProduct, IProduct } from "@/service/home";

/**
 * 商品网格列表组件
 * @param children - 可选子节点，用于扩展网格区域内容
 * @param products - 商品列表数据，一行展示 4 个
 */
export interface IGridViewProps {
  /** 子节点内容，支持任意 React 子元素 */
  children?: ReactNode;
  /** 商品列表 */
  products?: IProduct[];
}

const GridView: FC<IGridViewProps> = memo(function GridView(props) {
  const { children, products = [] } = props;
  const newProducts = products.map((item: IHotProduct) => item.products) as IProduct[];
  return (
    <div className="grid-view">
      <Row gutter={[20, 20]}>
        {newProducts.map((item: IProduct) => (
          <Col span={6} key={item.id}>
            <div className="cursor-pointer overflow-hidden bg-baseWhite">
              <div className="relative h-img-h w-full overflow-hidden bg-bgGray">
                {item.coverUrl && (
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    src={item.coverUrl}
                    alt={item.name ?? "商品"}
                    width={263}
                    height={263}
                  />
                )}
              </div>
              <div className="p-[10px]">
                {item.couponLabelDesc && (
                  <span className="mb-[6px] inline-block rounded-[2px] border border-priceRed px-[4px] py-px font-fs12 text-priceRed">
                    {item.couponLabelDesc}
                  </span>
                )}
                {item.name && (
                  <p className="mb-[8px] line-clamp-2 font-fs14 text-title">
                    {item.name}
                  </p>
                )}
                <div className="flex items-baseline gap-[6px]">
                  {item.minPrice !== undefined && (
                    <span className="font-fs14 font-bold text-priceRed">
                      ¥{item.minPrice}
                    </span>
                  )}
                  {item.originalCost !== undefined &&
                    item.originalCost !== item.minPrice && (
                      <span className="font-fs12 text-sub line-through">
                        ¥{item.originalCost}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {children}

      {/* 可选：兜底空状态 */}
      {/* {!products.length && !children && <div className="py-[40px] text-center text-sub">暂无商品</div>} */}
    </div>
  );
});

GridView.displayName = "GridView";

export default GridView;
