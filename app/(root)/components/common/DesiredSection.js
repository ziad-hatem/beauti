import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import DesiredCard from "@/components/common/DesiredCard"

const DesiredSection = ({ products, color= "#023863", titleBg= "#F5F5F5" }) => {

    return (
        <div className="DesiredSection">
        <Swiper
        slidesPerView="auto"
        spaceBetween={10}
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
                spaceBetween: 15
            }
        }}
        className={`mySwiper-all products-swiper-2 products-swiper BeautyOffersgirls !mt-0 max-md:!mr-[5px] !p-0  `}
      >
        {products.map((e, i) => {
          return (
            <SwiperSlide key={i + "Product"} className="!w-fit">
              <DesiredCard
                product={e}
                bgColor={titleBg}
                textColor={color}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
        </div>
    );
};
export default DesiredSection