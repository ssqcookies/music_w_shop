import { IResultData } from "@/service";
import { IDetailPageInfo } from "@/service/detail";

  // 55001 热销爆品专题
  export const detailMock_55001: IResultData<IDetailPageInfo> = {
    code: 200,
    data: {
      id: 55001,
      name: '热销爆品',
      linkedUrl: null,
      webPic: 'http://p3.music.126.net/demo/hot-banner.jpg',
      specialTopicProducts: [],
      products: [
        {
          id: 11728001,
          type: 2,
          name: 'i12真无线蓝牙耳机 智能触控 双耳运动跑步 安卓苹果通用',
          minPrice: 49,
          maxPrice: 49,
          originalCost: 199,
          couponLabelDesc: '用券减10',
          coverUrl: 'http://p3.music.126.net/sKj9m0VKnyIGf9lnmzc2Ug==/109951166182672297.jpg'
        }
      ]
    }
  };
  
  // 68001 Taylor Swift年历专题（对应截图页面）
  export const detailMock_68001: IResultData<IDetailPageInfo> = {
    code: 200,
    data: {
      id: 68001,
      name: 'Taylor Swift泰勒·斯威夫特2025年官方年历挂历',
      linkedUrl: null,
      webPic: 'https://p1.music.126.net/3DKpWr2ksHjHM5MlGRm09Q==/109951170121135191.jpg?imageView=1&type=webp&thumbnail=976x0',
      specialTopicProducts: [],
      products: [
        {
          id: 11729001,
          type: 1,
          name: 'Taylor Swift泰勒·斯威夫特 2025年官方年历挂历 方形 附赠24年9-12月迷你日历页',
          minPrice: 100,
          maxPrice: 100,
          originalCost: 129,
          couponLabelDesc: undefined,
          images: ['https://p1.music.126.net/3DKpWr2ksHjHM5MlGRm09Q==/109951170121135191.jpg?imageView=1&type=webp&thumbnail=976x0','https://p1.music.126.net/xY18zZYxx3fBrUX6AzJ3LQ==/109951170121132359.jpg?imageView=1&type=webp&thumbnail=976x0','https://p1.music.126.net/lTFMH0_yzVEoh45QAqN_ug==/109951170121130483.jpg?imageView=1&type=webp&thumbnail=976x0',"https://p1.music.126.net/HzgAFnT2XTFAZKUco0q5Iw==/109951170121139252.jpg?imageView=1&type=webp&thumbnail=976x0"]
        }
      ]
    }
  };
  
  // 根据参数id动态返回对应mock
  export const getDetailMock = (topicId: string) => {
    if (topicId === '55001') return detailMock_55001;
   return detailMock_68001;
  };