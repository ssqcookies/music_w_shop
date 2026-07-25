'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchSearchSuggest, fetchHomeInfo, fetchHotproduct_v2, fetchAllProduct } from '@/store/modules/home';
import { IProduct } from '@/service/home';

export default function InitLoadData() {
  const dispatch = useAppDispatch();
  const navbar = useAppSelector(state => state.home.navbar);
  const bannerList = useAppSelector(state => state.home.bannerList);
  const hotProduct = useAppSelector(state => state.home.hotProduct) as IProduct[];
  const allProduct = useAppSelector(state => state.home.allProduct) as IProduct[];
  useEffect(() => {
    // 只在初始空数据时请求，避免路由跳转重复调用
    if (navbar.id === 0) {
      dispatch(fetchSearchSuggest());
    }
    if (bannerList.length === 0) {
      dispatch(fetchHomeInfo());
    } 
    if (hotProduct && hotProduct && hotProduct.length === 0) {
      dispatch(fetchHotproduct_v2());
    }
    if (allProduct && allProduct && allProduct.length === 0) {
          dispatch(fetchAllProduct());
        }
  }, [dispatch, navbar.id, bannerList.length, hotProduct, allProduct]);

  return null;
}