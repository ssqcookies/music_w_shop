"use client"
import {ComponentRef, FC, memo, ReactElement, useRef, useState} from "react";
import { IBanner } from "@/service/home";
import { Carousel } from "antd";
import Image from "next/image";

export interface IProps {
  children?: ReactElement;
  banners?: IBanner[];
}

const TopSwiper: FC<IProps> = memo(function (props) {
  const { children, banners } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null);

  const onSiwperChange = (index: number) => {
    // console.log(index);
    setCurrentIndex(index);
  };
 function handlePrevPage() {
    // console.log("prev");
    bannerRef.current?.prev();
  }
  function handleNextPage() {
    bannerRef.current?.next();
  }
  return (
      <div className="relative h-swiper-h overflow-hidden w-full ">
        <div className="wrapper mx-auto">
           <Carousel
          ref={bannerRef}
          className="m-[0_-1000px] "
          autoplay
          autoplaySpeed={3000}
          fade
          dots={false}
          afterChange={onSiwperChange}
           >{banners?.map((banner) => {
            return (
              <div key={banner.id} className="relative h-swiper-h" >
                {/* 背景 */}
                <div
                  className="absolute top left z-[-1] h-full w-full bg-center bg-size-[6000px]"
                  style={{
                    backgroundImage: `url(${banner.backendPicStr})`,
                  }}
                ></div>
                <Image
                  className="m-[0_auto] object-cove !h-[480px]"
                  src={banner.picStr!}
                  alt="banner"
                  width={`1100`}
                  height={`480`}
                ></Image>
              </div>
            );
          })}
           </Carousel>

        {/*指示器  */}
        <ul className="absolute bottom-[20px] left w-full text-center">
          {banners?.map((banner, index) => {
           const isActive = currentIndex === index;
  return (
    <li className="inline-block mx-[5px]"             key={banner.id}
>
      <button
        style={{
          backgroundImage: isActive
            ? 'url(/images/dot_hover.png)'
            : 'url(/images/dot.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        className={`inline-block transition-all ${
          isActive
            ? 'w-[7px] h-[7px]'
            : 'w-[6px] h-[6px]'
        }`}
      />
    </li>
  );
          })}
        </ul>
        </div>
          {/* 上一页和下一页 */}
      <button className="swiper-btn swiper-btn-prev" onClick={handlePrevPage}>
        <span></span>
      </button>
      <button className="swiper-btn swiper-btn-next" onClick={handleNextPage}>
        <span></span>
      </button>
      </div>
  )

})

export default TopSwiper;
TopSwiper.displayName = "TopSwiper"; // 方便以后调试用的