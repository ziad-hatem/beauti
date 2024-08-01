"use client";
import Image from "next/image";
import React from "react";
import GirlProductCard from "../common/GirlProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const BeautyOffersgirls = ({
  products,
  offerbgColor = "#FFF1F1",
  offerTextColor = "#000",
  hideButtons = false,
  bg = "#F5F5F5",
}) => {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className={`mySwiper-all products-swiper ${hideButtons ? "hideButtons" : ""} BeautyOffersgirls !mt-0 max-md:!mr-[5px]`}
      >
        {products.map((e, i) => {
          return (
            <SwiperSlide key={i + "Product"} className="!w-fit">
              <GirlProductCard
                product={e}
                bg={bg}
                offerbgColor={offerbgColor}
                offerTextColor={offerTextColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BeautyOffersgirls;
