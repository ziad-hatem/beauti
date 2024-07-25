import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import WatchesTopSliderCard from "@/components/common/WatchesTopSliderCard"

const WatchesTopSlider = ({ products, bgColor, imgbgColor, textColor, bgHeight, desktopSpace = 35,mobileSpace = 12.75 }) => {

    return (
        <div className="DesiredSection">
        <Swiper
        slidesPerView="auto"
        spaceBetween={mobileSpace}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        breakpoints={{
            767: {
                spaceBetween: desktopSpace
            }
        }}
        className={`mySwiper-all products-swiper-2 products-swiper BeautyOffersgirls max-md:!mr-[5px] !p-0 !mt-[40px]`}
      >
        {products.map((e, i) => {
          return (
            <SwiperSlide key={i + "Product"} className="!w-fit">
              <WatchesTopSliderCard
                product={e}
                imgbgColor={imgbgColor ? imgbgColor : "#fff"}
                textColor={textColor ? textColor : "#023863"}
                bgHeight={bgHeight}
                bgColor={bgColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
        </div>
    );
};
export default WatchesTopSlider