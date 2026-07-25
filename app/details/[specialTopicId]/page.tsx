"use client";

import { memo,  useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

import type { FC, ReactNode } from "react";
import type { IDetailPageInfo } from "@/service/detail";
import type { IProduct } from "@/service/home";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
// 导入redux异步action和清空方法
import { fetchDetailById, clearDetail } from '@/store/modules/detail';
import { IAppDispatch, IAppRootState } from "@/store";
/**
 * 商品详情页组件
 * @param children - 可选子节点，用于扩展详情区域内容
 * @param info - 详情页基础信息（标题、大图、购买链接等）
 * @param product - 关联商品信息（价格、封面等）
 * @param picUrls - 商品图册列表，不传则回退到 coverUrl / webPic
 */
export interface IDetailProps {
  /** 子节点内容，支持任意 React 子元素 */
  children?: ReactNode;
  /** 详情页数据 */
  info?: IDetailPageInfo | null;
  /** 关联商品数据 */
  product?: IProduct | null;
  /** 商品图册 */
  picUrls?: string[];
}

const Detail: FC<IDetailProps> = memo(function Detail(props) {
  const dispatch = useDispatch<IAppDispatch>();
  // 1. 从路由拿到动态参数 specialTopicId
  const params = useParams();
  console.log('params完整对象：', params);
  const specialTopicId = params.specialTopicId as string;

  // 2. 从redux仓库获取详情数据、加载状态、错误信息
  const { info, loading, error } = useSelector((state: IAppRootState) => state.detail);

  // 3. 路由参数变化时，自动请求详情接口
  useEffect(() => {
    // 有ID才发请求
    if (specialTopicId) {
      dispatch(fetchDetailById(specialTopicId));
    }

    // 离开当前页面（路由跳转走）清空仓库旧数据，防止缓存错乱
    return () => {
      dispatch(clearDetail());
    };
  }, [specialTopicId, dispatch]);

  

  const [currentIndex, setCurrentIndex] = useState(0);
// 加载中兜底
if (loading) return <div className="text-center py-20">商品详情加载中...</div>;
// 错误兜底
if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
// 数据为空不渲染
if (!info) return null;

// 取出商品数组第一条
const product = info.products?.[0];
const images = product?.images ? product?.images : []; 
  const safeIndex = images.length ? currentIndex % images.length : 0;
  const currentImage = images[safeIndex];

  const handlePrev = () => {
    // 逻辑判断写在函数内部，不要包裹Hook本身
    if (!images.length) return;
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  }
  
  const handleNext = () => {
    if (!images.length) return;
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
  }
  
  const handleSelectImage = (i: number) => {
    setCurrentIndex(i);
  }
  

  // 可选：loading 状态占位
  // if (loading) return <div className="detail">加载中...</div>;

  // 可选：error 状态占位
  // if (error) return <div className="detail">加载失败，请稍后重试</div>;

  return (
    <div className="flex flex-col items-center bg-bgGray mb-[20px]">
      <div className="border-b border-[#e8e8e8] bg-bgGray">
        <div className="wrapper py-[12px] text-[40px] font-[1000] text-sub m-[36px_0]">
          <Link href="/" className="hover:text-title">
            首页
          </Link>
          <span className="mx-[6px]">&gt;</span>
          <span className="text-title">{info.name}</span>
        </div>
      </div>

      <div className="wrapper py-[24px]">
        <Row gutter={[40, 40]}>
          <Col span={12}>
            <div className="overflow-hidden border border-[#eee] bg-baseWhite">
              <div className="relative flex h-swiper-h items-center justify-center bg-baseWhite">
                {currentImage ? (
                  <Image
                    className="max-h-[440px] max-w-full object-contain"
                    src={currentImage}
                    alt={info.name || "商品详情图"}
                    width={480}
                    height={480}
                    priority
                  />
                ) : (
                  <div className="text-sub">暂无商品图片</div>
                )}

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="上一张"
                      onClick={() => handlePrev()}
                      className="absolute left-[20px] top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-black/10 text-title"
                    >
                      <LeftOutlined />
                    </button>
                    <button
                      type="button"
                      aria-label="下一张"
                      onClick={() => handleNext()}
                      className="absolute right-[20px] top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-black/10 text-title"
                    >
                      <RightOutlined />
                    </button>
                  </>
                )}
              </div>

              {images.length > 0 && (
                <ul className="flex gap-[10px] border-t border-[#eee] p-[15px]">
                  {images.map((url, index) => {
                    const isActive = safeIndex === index;
                    return (
                      <li key={`${url}-${index}`}>
                        <button
                          type="button"
                          aria-label={`查看第${index + 1}张图片`}
                          onClick={() => handleSelectImage(index)}
                          className={`block cursor-pointer border-2 bg-baseWhite p-[2px] ${
                            isActive ? "border-priceRed" : "border-transparent"
                          }`}
                        >
                          <Image
                            className="h-category-h w-category-h object-cover"
                            src={url}
                            alt={`${product?.name} 缩略图 ${index + 1}`}
                            width={80}
                            height={80}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </Col>

          <Col span={12}>
            <div className="min-h-swiper-h border border-[#eee] p-[30px]">
              {info.name && (
                <h1 className="mb-[20px] text-[24px] font-[700] leading-[1.5] text-title">
                  {info.name}
                </h1>
              )}

              {product?.minPrice !== undefined && (
                <p className="mb-[30px] text-[36px] font-[700] text-priceRed">
                  ¥ {product?.minPrice?.toFixed(2)}
                </p>
              )}

              <div className="inline-block rounded-[10px] border border-[#eee] bg-baseWhite p-[24px] text-center">
                <Image
                  className="mx-auto"
                  src="/images/login-qrcode.png"
                  alt={info.linkedUrl ? "扫码购买商品" : "扫码查看商品"}
                  width={160}
                  height={160}
                />
                <p className="mt-[12px] text-[14px] text-sub">
                  扫码查看/购买商品
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );
});

Detail.displayName = "Detail";

export default Detail;
