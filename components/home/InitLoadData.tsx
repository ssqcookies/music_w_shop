'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import {
  fetchSearchSuggest,
  fetchHomeInfo,
  fetchHotproduct_v2,
  fetchAllProduct
} from '@/store/modules/home';

export default function InitLoadData() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  // 记录上一次路由，防止同页面重复触发
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    // ====================== 核心路由判断 ======================
    // 仅在 首页 / 或者 /home 执行接口，进入详情/search等页面直接终止
    const isHomePage = pathname === '/' || pathname === '/home';
    if (!isHomePage) {
      return;
    }

    // 只有路由发生真正切换进入首页时才请求，同页面内部渲染不重复调用
    if (prevPathRef.current === pathname) {
      return;
    }

    // 标记已执行，避免本轮多次触发
    prevPathRef.current = pathname;

    // ====================== 进入首页，统一刷新所有接口 ======================
    dispatch(fetchSearchSuggest());
    dispatch(fetchHomeInfo());
    dispatch(fetchHotproduct_v2());
    dispatch(fetchAllProduct());

  }, [pathname, dispatch]);

  return null;
}