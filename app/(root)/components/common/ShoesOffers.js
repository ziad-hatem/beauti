"use client";
import Image from "next/image";
import React from "react";
import ShoesProductCard from "./ShoesProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ShoesOffers = ({
  products,
  offerbgColor = "#FFF1F1",
  offerTextColor = "#000",
  cardbg,
}) => {
  if(typeof(offerbgColor) == "string"){
    return (
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={13}
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
                <ShoesProductCard
                  product={e}
                  offerbgColor={offerbgColor}
                  offerTextColor={offerTextColor}
                  cardbg={cardbg}
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
          spaceBetween={13}
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
                <ShoesProductCard
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

export default ShoesOffers;
