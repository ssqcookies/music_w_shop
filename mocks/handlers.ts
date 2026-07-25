import { http, HttpResponse } from 'msw';
import { getDetailMock } from './detail.mock';

export const handlers = [
  http.get('/api/home/search-suggest', async () => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return HttpResponse.json({
      code: 200,
      data: {
        id: 30001,
        defaultKey: "蓝牙耳机",
        configKey: [
          { "1": "迪士尼Q2" },
          { "2": "日常元素" },
          { "3": "珀莱雅" },
          { "4": "真无线" },
          { "5": "漫步者" }
        ]
      }
    });
  }),

// 首页完整接口 GET /home/info
  http.get('/home/info', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return HttpResponse.json({
      code: 200,
      data: {
        // 轮播图 banners
        banners: [
          {
            "id": 72739605,
            "productId": 0,
            "picId": 109951168054932480,
            "backendPicId": 109951168054940220,
            "addTime": 100,
            "position": 6,
            "type": 0,
            "url": "https://163.lu/LQSPd1",
            "bannerExtJson": null,
            "isSetTime": 1,
            "beginTime": 1668268800000,
            "endTime": null,
            "picStr": "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81100862306/93a4/0eb3/ffeb/9242ba71c71bb15b01701113b015c16b.jpg",
            "backendPicStr": "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81100862306/93a4/0eb3/ffeb/9242ba71c71bb15b01701113b015c16b.jpg?imageView&blur=40x20"
          },
          {
            "id": 72739600,
            "productId": 0,
            "picId": 109951168071451650,
            "backendPicId": 109951168071449710,
            "addTime": 100,
            "position": 1,
            "type": 0,
            "url": "https://163.lu/zSmdB2",
            "bannerExtJson": null,
            "isSetTime": 1,
            "beginTime": 1668787200000,
            "endTime": null,
            "picStr": "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81275636926/b814/9ea4/18de/d90c1f419a97a3a2e01d9ffa758c29f1.png",
            "backendPicStr": "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81275636926/b814/9ea4/18de/d90c1f419a97a3a2e01d9ffa758c29f1.png?imageView&blur=40x20"
          }
        ],

        // 分类 category
        category: [
          {
            "cid": 1008002,
            "picStr": "http://p1.music.126.net/LDEQEVUOozhfqOjxjWh20w==/109951169656973042.jpg",
            "title": "IP周边",
            "tabIndex": 0,
            "targetUrl": "",
            "count": 0,
            "desc": "",
            "type": 0
          },
          {
            "cid": 101000,
            "picStr": "http://p1.music.126.net/LDEQEVUOozhfqOjxjWh20w==/109951169656973042.jpg",
            "title": "数码影音",
            "tabIndex": 1,
            "targetUrl": "",
            "count": 0,
            "desc": "",
            "type": 0
          },
          {
            "cid": 55001,
            "picStr": "http://p1.music.126.net/cNj33Ji-Jfz5kemc6ZNwBg==/109951167100478725.jpg",
            "title": "热销爆品",
            "tabIndex": 2,
            "targetUrl": "",
            "count": 0,
            "desc": "",
            "type": 0
          },
          {
            "cid": 550201,
            "picStr": "http://p1.music.126.net/cNj33Ji-Jfz5kemc6ZNwBg==/109951167100478725.jpg",
            "title": "云贝",
            "tabIndex": 3,
            "targetUrl": "",
            "count": 0,
            "desc": "",
            "type": 1
          }
        ],

        // 推荐 recommends
        recommends: [
          {
            "id": 55001,
            "picStr": "http://p1.music.126.net/t16aoTN1wDJRJXuSW8DPyw==/3420580756331541.jpg",
            "title": "有音乐，正青春"
          },
          {
            "id": 68001,
            "picStr": "http://p1.music.126.net/t16aoTN1wDJRJXuSW8DPyw==/3420580756331541.jpg",
            "title": "情爱的，晚安吧"
          }
        ],

        // 数字专辑 digitalData
        digitalData: {
          "digitalIcon": "https://s2.music.126.net/store/web/img/digitalicon.png?7372764b5995d20d0606eebb88ceeeeb4",
          "name": "数字专辑",
          "desc": "(G)I-DLE、王嘉尔数字专辑火热售卖中",
          "buyNow": "立即购买 >",
          "picStr": "https://s2.music.126.net/store/web/img/sprite/pointlist.png?ca0cb76511a01670049b7822cb05fc53",
          "picStr2": "https://p1.music.126.net/mxLEkAMmOw5gAMThGd14w==/109951166044914127.jpg?param=120y120",
          "picStr1": "https://p2.music.126.net/iFeWO9yxsbKkzNdE7xNNiw==/109951166089730540.jpg?param=120y120"
        }
      }
    });
  }),

  http.get('/hotproduct_v2/gets', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return HttpResponse.json({
      code: 200,
      data: {
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
              id: 550031,
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
              id: 628001,
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
    });
  }),
  http.get('/allProduct/gets', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return HttpResponse.json({
      code: 200,
      data: {
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
    });
  }),

  http.get('/special/getdetail', async (req) => {
    // 解析URL参数
    const url = new URL(req.request.url);
    const specialTopicId = url.searchParams.get('specialTopicId') || '';
  
    // 拿到完整mock对象（本身就包含 code + data），直接返回
    const mockRes = getDetailMock(specialTopicId);
  
    await new Promise(resolve => setTimeout(resolve, 300));
  
    return HttpResponse.json(mockRes);
  })
  
];