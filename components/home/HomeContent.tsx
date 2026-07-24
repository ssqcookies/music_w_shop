'use client';
import { FC } from 'react';
import TopSwiper from '@/components/top-swiper/index';
import TabCategory from '@/components/tab-category/index';
import { useAppSelector } from '@/store/hooks';
import Recommend from '@/components/recommend/index';
import SectionTitle from '../section-title';
import GridView from '../grid-view';
import { IProduct } from '@/service/home';



const HomeContent: FC = () => {
  // 直接从全局redux拿已经请求完毕的数据
  const { bannerList, categoryList, recommendList, digitalInfo, hotProduct, allProduct } = useAppSelector(state => state.home);

  return (
    <>
        <TopSwiper banners={bannerList} />
        <TabCategory category={categoryList}/>
        <Recommend recommends={recommendList} />
        <div className='wrapper'>
          <SectionTitle title="数字专辑" /> 
          <GridView products={hotProduct as IProduct[]} />  
          <SectionTitle title="热门推荐" />
          <GridView products = {allProduct as IProduct[]} />
        </div>

    </>
  );
};

export default HomeContent;