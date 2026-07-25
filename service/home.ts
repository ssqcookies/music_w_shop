import hyRequest, { getApiPrefix } from "./index";

export interface ISearchSuggest {
  id: number;
  defaultKey: string;
  configKey: Array<Record<string, string>>;
}

export interface IBanner {
  id: number;
  picStr?: string;
  backendPicStr?: string;
}
export interface ICategory {
  cid: number;
  picStr?: string;
  title?: string;
  tabIndex?: number;
  targetUrl?: string;
  count?: number;
  desc?: string;
  type?: number;
}
export interface IRecommend {
  id: number;
  picStr?: string;
  title?: string;
}
// 数字专辑模块 digitalData
export interface IDigitalData {
  digitalIcon: string;
  name: string;
  desc: string;
  buyNow: string;
  picStr: string;
  picStr2: string;
  picStr1: string;
}

export interface IHomeInfo {
  banners?: IBanner[];
  category?: ICategory[];
  recommends?: IRecommend[];
  digitalData?: IDigitalData;
}
export interface IProduct {
  id: number;
  type?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  originalCost?: number;
  couponLabelDesc?: string;
  coverUrl?: string;
  images?:string[];
}
export interface IHotProduct {
  id: number;
  products?: IProduct;
}
export interface IHotproductV2 {
  count?: number;
  hasMore?: boolean;
  hotProduct?: IHotProduct[];
}
export interface IAllProdcut {
  count?: number;
  allProduct?: IProduct[];
}
// 01-获取搜索建议的接口
export const getSearchSuggest = () => {
  return hyRequest.get<ISearchSuggest>("/api/home/search-suggest");
};

// 02-获取首页的数据( 轮播图 / 分类 .... )
export const getHomeInfo = () => {
  const base = getApiPrefix();    
  return hyRequest.get<IHomeInfo>(`${base}/home/info`);
};

// 03-编辑推荐的商品 hotproduct_v2
export const getHotproduct_v2 = () => {
  const base = getApiPrefix();    

  return hyRequest.get<IHotproductV2>(`${base}//hotproduct_v2/gets`);
};

// 04-编辑推荐的商品 allProduct/gets
export const getAllProduct = () => {
  const base = getApiPrefix();   
  return hyRequest.get<IAllProdcut>(`${base}//allProduct/gets`);
};
