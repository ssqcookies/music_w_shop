import { memo, ReactElement } from "react";
import { Col, Row } from "antd";

import type { FC } from "react";
import type { ICategory } from "@/service/home";
import Image from "next/image";

export interface IProps {
  children?: ReactElement;
  category?: ICategory[];
}
const TabCategory: FC<IProps> = memo(function (props) {
  const { children, category = [] } = props;
  return (
    <div className="bb-[1px,solid,rgba(0, 0, 0, 0.1)] flex-normal justify-center">
      <div className="wrapper h-category-h">
        <Row>
          {category.map((item) => {
            return (
              <Col span={6} key={item.cid}>
                <div className="flex-normal justify-center items-center br-[1px_solid_rgba(0, 0, 0, 0.1)] mt-[16px] cursor-pointer">
                  <Image
                    src={item.picStr!}
                    alt="category"
                    width={48}
                    height={48}
                  ></Image>

                  <div className="text-center">
                    <div className="ml-[10px] max-w-[190px] font-fs14  font-[1000] text-title">{item.title}</div>
                    {/* 描述 type == 1 才会显示*/}
                    {item.type === 1 && (
                      <div className="inline-block p-[2px_0_0_4px] font-fs12 text-priceRed">
                        <span className="inline-block pr-[5px]">{item.count}</span>
                        <span className="desc">{item.desc}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
});
export default TabCategory;
TabCategory.displayName = "TabCategory"; // 方便以后调试用的
