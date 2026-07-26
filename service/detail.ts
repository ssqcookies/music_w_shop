import hyRequest from "./index";

import type { IProduct } from "./home";
// 商品详情接口data结构
export interface IDetailPageInfo {
  id?: number;
  name?: string;
  linkedUrl?: string | null;
  webPic?: string; // 专题大图
  specialTopicProducts?: any[];
  products?: IProduct[]; // 关联商品列表，复用之前商品类型
}
// 01-获取详细数据的接口
export const getDetailPageInfo = (specialTopicId: string) => {

  return hyRequest.get<IDetailPageInfo>(
    `/api/special/getdetail?specialTopicId=${specialTopicId}`
  );
};

