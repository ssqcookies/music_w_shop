import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import modalReducer from "./modules/modalSlice"
// ✅ 工厂函数：每次调用生成全新store实例（关键！）
export const makeStore = () => {
  return configureStore({
    reducer: {
      home: homeReducer,
      modal: modalReducer,
    },
  });
};

// 直接通过工厂推导类型
export type AppStore = ReturnType<typeof makeStore>;
export type IAppDispatch = AppStore["dispatch"];
export type IAppRootState = ReturnType<AppStore["getState"]>;