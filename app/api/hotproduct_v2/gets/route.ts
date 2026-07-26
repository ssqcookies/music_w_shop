import { NextResponse } from 'next/server';


export async function GET() {
  

  await new Promise(resolve => setTimeout(resolve, 350));


  const data= {
    count: 10,
    hasMore: true,
    hotProduct: [
      {
        id: 118808,
        products: {
          id: 68001,
          type: 2,
          name: 'i12真无线蓝牙耳机 智能触控 双耳运动跑步 安卓苹果通用',
          minPrice: 49,
          maxPrice: 49,
          originalCost: 199,
          couponLabelDesc: '用券减10',
          coverUrl: 'https://p1.music.126.net/uw3neEFvpCV_BDYcfRXrHg==/109951173481992301.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118809,
        products: {
          id: 55001,
          type: 1,
          name: '20000毫安超薄便携充电宝 快充大容量移动电源',
          minPrice: 69,
          maxPrice: 69,
          originalCost: 129,
          couponLabelDesc: '满59减15',
          coverUrl: 'https://p1.music.126.net/uw3neEFvpCV_BDYcfRXrHg==/109951173481992301.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118810,
        products: {
          id: 553001,
          type: 3,
          name: '桌面可折叠手机懒人支架 直播追剧通用支撑架',
          minPrice: 19.9,
          maxPrice: 19.9,
          originalCost: 39.9,
          couponLabelDesc: undefined,
          coverUrl: 'https://p1.music.126.net/uw3neEFvpCV_BDYcfRXrHg==/109951173481992301.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118820,
        products: {
          id: 682001,
          type: 3,
          name: '桌面可折叠手机懒人支架 直播追剧通用支撑架',
          minPrice: 19.9,
          maxPrice: 19.9,
          originalCost: 39.9,
          couponLabelDesc: undefined,
          coverUrl: 'https://p1.music.126.net/uw3neEFvpCV_BDYcfRXrHg==/109951173481992301.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      }
    ]
  }

  return NextResponse.json({
    code: 200,
    data
  });
}