'use client';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchSearchSuggest, fetchHomeInfo, fetchHotproduct_v2, fetchAllProduct } from '@/store/modules/home';


export default function InitLoadData() {
  const dispatch = useAppDispatch();
  // 标记是否已经发起过初始化请求，永久只执行一次
  const isInitLoad = useRef(false);

  // 只拿基础数值，不把数组丢进依赖
  const navbarId = useAppSelector(state => state.home.navbar.id);
  const bannerCount = useAppSelector(state => state.home.bannerList.length);
  const hotProductCount = useAppSelector(state => state.home.hotProduct.length);
  const allProductCount = useAppSelector(state => state.home.allProduct.length);

  useEffect(() => {
    // 已经请求过，直接终止，杜绝无限循环
    if (isInitLoad.current) return;

    // 标记已执行，后续任何渲染都不会再进这个逻辑
    isInitLoad.current = true;

    // 下面只在页面挂载时执行一次，哪怕接口返回空数组也不会二次触发
    if (navbarId === 0) {
      dispatch(fetchSearchSuggest());
    }
    if (bannerCount === 0) {
      dispatch(fetchHomeInfo());
    }
    if (hotProductCount === 0) {
      dispatch(fetchHotproduct_v2());
    }
    if (allProductCount === 0) {
      dispatch(fetchAllProduct());
    }
  }, [dispatch]); // 依赖只留dispatch，彻底断绝依赖变化触发重跑

  return null;
}