import { NextResponse } from 'next/server';


export async function GET() {
  

  await new Promise(resolve => setTimeout(resolve, 350));

  const data= {
    count: 10,
    hasMore: true,
    allProduct: [
        {
        id: 118808, 
        products: {
          id: 11728002,
          type: 1,
          name: '《启示路》G.E.M.邓紫棋首部科幻小说| 平装版',
          minPrice: 69,
          maxPrice: 69,
          originalCost: 129,
          couponLabelDesc: '满59减15',  
          showTip: true,
          coverUrl: 'https://p1.music.126.net/cIrG0EJcFiSdkMqs0QE-TA==/109951171480140357.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118809,
        products: {
          id: 11728003,
          type: 3,
          name: 'Andy Yue音乐专辑NFC仿真黑胶可旋转冰箱贴',
          minPrice: 19.9,
          maxPrice: 19.9,
          originalCost: 39.9,
          couponLabelDesc: undefined,
          showTip: false,
          coverUrl: 'https://p1.music.126.net/rIBo4PTFYg_yovnTF8gLmg==/109951173448305450.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118810,
        products: {
          id: 11728004,
          type: 3,
          name: 'Taylor Swift 泰勒斯威夫特 - The Official Taylor Swift | The Eras Tour Book 时代巡演限量书籍【美版】',
          minPrice: 551,
          maxPrice: 551,
          originalCost: 551,
          couponLabelDesc: undefined,
          showTip: false,
          coverUrl:'https://p1.music.126.net/EcaaMpj9_lVhb77vtM_MDw==/109951170124059189.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      },
      {
        id: 118811,
        products: {
          id: 11728005,
          type: 3,
          name: '谢春花“一棵”自动雨伞 官方正版周边',
          minPrice: 551,
          maxPrice: 551,
          originalCost: 551,
          couponLabelDesc: undefined,
          showTip: false,
          coverUrl:'https://p1.music.126.net/OyoH48_g89EJw-6oc9tDNw==/109951165463169525.jpg?imageView=1&type=webp&thumbnail=486x0'
        }
      }
    ]
  }

  return NextResponse.json({
    code: 200,
    data
  });
}