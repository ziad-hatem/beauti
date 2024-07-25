"use client";
import Image from "next/image";
import React from "react";
import WatchProductCard from "../common/WatchProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const WatchesOffers = ({
  products,
  offerbgColor = "#FFF1F1",
  offerTextColor = "#000",
}) => {
  if(typeof(offerbgColor) == "string"){
    return (
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={18}
          grabCursor={true}
          navigation={true}
          loop={false}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: true,
          //   // pauseOnMouseEnter: true
          // }}
          className={`mySwiper-all products-swiper BeautyOffersgirls !p-0 !mt-0 max-md:!mr-[5px]`}
        >
          {products.map((e, i) => {
            return (
              <SwiperSlide key={i + "Product"} className="!w-fit">
                <WatchProductCard
                  product={e}
                  offerbgColor={offerbgColor}
                  offerTextColor={offerTextColor}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }else if(typeof(offerbgColor) == "object"){
    console.log(offerbgColor)
    return (
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={18}
          grabCursor={true}
          navigation={true}
          loop={false}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: true,
          //   // pauseOnMouseEnter: true
          // }}
          className={`mySwiper-all products-swiper BeautyOffersgirls !p-0 !mt-0 max-md:!mr-[5px]`}
        >
          {products.map((e, i) => {
            return (
              <SwiperSlide key={i + "Product"} className="!w-fit">
                <WatchProductCard
                  product={e}
                  offerbgColor={offerbgColor[i]}
                  offerTextColor={offerTextColor[i]}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
};

export default WatchesOffers;
