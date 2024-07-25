import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
const RobesSwiper = ({ robes }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={false}
      spaceBetween={12}
      grabCursor={true}
      navigation={false}
      loop={false}
      modules={[Autoplay]}
      // breakpoints={{

      // }}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="RobeSwiper !mr-[5px] h-full"
    >
      {robes.rightRobes.map((robe, i) => {
        return (
          <SwiperSlide
            key={i}
            className="right-robe mb-5 !h-[110.96px] !w-[86.72px]"
          >
            <div className="robe-image">
              <Image
                src={robe.robeImage}
                unoptimized
                loading="lazy"
                alt={robe.title}
              />
            </div>
            <a href="/" className="robe-title">
              {robe.title}
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RobesSwiper;
