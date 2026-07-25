import { NextResponse } from 'next/server';

export async function GET() {
  // 直接复制你MSW里面返回的完整JSON结构
  return NextResponse.json({
    code: 200,
    data: {
      banners: [
        {
          id: 72739605,
          productId: 0,
          picId: 109951168054932480,
          backendPicId: 109951168054940220,
          addTime: 100,
          position: 6,
          type: 0,
          url: "https://163.lu/LQSPd1",
          bannerExtJson: null,
          isSetTime: 1,
          beginTime: 1668268800000,
          endTime: null,
          picStr: "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81100862306/93a4/0eb3/ffeb/9242ba71c71bb15b01701113b015c16b.jpg",
          backendPicStr: "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81100862306/93a4/0eb3/ffeb/9242ba71c71bb15b01701113b015c16b.jpg?imageView&blur=40x20"
        },
        {
          id: 72739600,
          productId: 0,
          picId: 109951168071451650,
          backendPicId: 109951168071449710,
          addTime: 100,
          position: 1,
          type: 0,
          url: "https://163.lu/zSmdB2",
          bannerExtJson: null,
          isSetTime: 1,
          beginTime: 1668787200000,
          endTime: null,
          picStr: "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81275636926/b814/9ea4/18de/d90c1f419a97a3a2e01d9ffa758c29f1.png",
          backendPicStr: "https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/81275636926/b814/9ea4/18de/d90c1f419a97a3a2e01d9ffa758c29f1.png?imageView&blur=40x20"
        }
      ],
      category: [
        {
          cid: 1008002,
          picStr: "http://p1.music.126.net/LDEQEVUOozhfqOjxjWh20w==/109951169656973042.jpg",
          title: "IP周边",
          tabIndex: 0,
          targetUrl: "",
          count: 0,
          desc: "",
          type: 0
        },
        {
          cid: 101000,
          picStr: "http://p1.music.126.net/LDEQEVUOozhfqOjxjWh20w==/109951169656973042.jpg",
          title: "数码影音",
          tabIndex: 1,
          targetUrl: "",
          count: 0,
          desc: "",
          type: 0
        },
        {
          cid: 55001,
          picStr: "http://p1.music.126.net/cNj33Ji-Jfz5kemc6ZNwBg==/109951167100478725.jpg",
          title: "热销爆品",
          tabIndex: 2,
          targetUrl: "",
          count: 0,
          desc: "",
          type: 0
        },
        {
          cid: 550201,
          picStr: "http://p1.music.126.net/cNj33Ji-Jfz5kemc6ZNwBg==/109951167100478725.jpg",
          title: "云贝",
          tabIndex: 3,
          targetUrl: "",
          count: 0,
          desc: "",
          type: 1
        }
      ],
      recommends: [
        {
          id: 55001,
          picStr: "http://p1.music.126.net/t16aoTN1wDJRJXuSW8DPyw==/3420580756331541.jpg",
          title: "有音乐，正青春"
        },
        {
          id: 68001,
          picStr: "http://p1.music.126.net/t16aoTN1wDJRJXuSW8DPyw==/3420580756331541.jpg",
          title: "情爱的，晚安吧"
        }
      ],
      digitalData: {
        digitalIcon: "https://s2.music.126.net/store/web/img/digitalicon.png?7372764b5995d20d0606eebb88ceeeeb4",
        name: "数字专辑",
        desc: "(G)I-DLE、王嘉尔数字专辑火热售卖中",
        buyNow: "立即购买 >",
        picStr: "https://s2.music.126.net/store/web/img/sprite/pointlist.png?ca0cb76511a01670049b7822cb05fc53",
        picStr2: "https://p1.music.126.net/mxLEkAMmOw5gAMThGd14w==/109951166044914127.jpg?param=120y120",
        picStr1: "https://p2.music.126.net/iFeWO9yxsbKkzNdE7xNNiw==/109951166089730540.jpg?param=120y120"
      }
    }
  });
}