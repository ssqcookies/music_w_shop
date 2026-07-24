import {getAllProduct, getHomeInfo, getHotproduct_v2, getSearchSuggest, IBanner, ICategory, IDigitalData, IHomeInfo, IRecommend} from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IAllProdcut, IHotProduct, IHotproductV2, IProduct, ISearchSuggest } from "@/service/home";

// home 模块state类型
export interface IHomeInitialState {
  counter: number;
  navbar: ISearchSuggest;
   bannerList: IBanner[];
  categoryList: ICategory[];
  recommendList: IRecommend[];
  digitalInfo: IDigitalData | null;
  hotProduct: IHotProduct[] | null;
  allProduct: IProduct[] | null;
  count: number;
  hasMore: boolean;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 10,
    navbar: {
       id: 0,
      defaultKey: "",
      configKey: []
    },
      bannerList: [],
  categoryList: [],
  recommendList: [],
  digitalInfo: null,
  hotProduct: [],
  allProduct: [],
  count: 0,
  hasMore: false
  } as IHomeInitialState,

  reducers: {
    increment(state, { payload }) {
      state.counter += payload;
    },
  },
  extraReducers: (builder) => {
  // ========== 接口1：热搜建议 fetchSearchSuggest ==========
  builder.addCase(fetchSearchSuggest.fulfilled, (state, { payload }) => {
    state.navbar = payload;
    // 这个接口只赋值navbar，不要写其他字段！
  });

  // ========== 接口2：首页完整数据 fetchHomeInfo 单独一条 ==========
  builder.addCase(fetchHomeInfo.fulfilled, (state, { payload }) => {
    state.bannerList = payload.banners?? [];
    state.categoryList = payload.category?? [];
    state.recommendList = payload.recommends?? [];
    state.digitalInfo = payload.digitalData ?? null;

  });

  // ========== 接口3：热门推荐 fetchHotproduct_v2 ==========
  builder.addCase(fetchHotproduct_v2.fulfilled, (state, { payload }) => {
    state.hotProduct = payload.hotProduct?? [];
    state.count = payload.count?? 0;
    state.hasMore = payload.hasMore?? false;
  });

  },
});

// 异步action
export const fetchSearchSuggest = createAsyncThunk<ISearchSuggest>(
  "home/fetchSearchSuggest",
  async () => {
    const res = await getSearchSuggest();
    return res as ISearchSuggest;
  }
);

export const fetchHomeInfo = createAsyncThunk<IHomeInfo>(
    "home/fetchHomeInfo",
    async () => {
      const res = await getHomeInfo();
      return res;
    }
);

export const fetchHotproduct_v2 = createAsyncThunk<IHotproductV2>(
  "home/fetchHotproduct_v2",
  async () => {
    const res = await getHotproduct_v2();
    return res;
  }
);

export const fetchAllProduct = createAsyncThunk<IAllProdcut>(
  "home/fetchAllProduct",
  async () => {
    const res = await getAllProduct();
    return res;
  }
);

// 同步action
export const { increment } = homeSlice.actions;
export default homeSlice.reducer;