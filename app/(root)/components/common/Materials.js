"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Materials({
  array,
  materialColor,
  materialBackground,
}) {
  return (
    <div className="material-container mb-6 !p-0">
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={51}
        grabCursor={true}
        navigation={false}
        loop={false}
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          1024: {
            spaceBetween: 51,
          },
        }}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className="material-swiper"
      >
        {array.map((link, i) => (
          <SwiperSlide
            key={i}
            className="material max-md:!w-[80px] max-md:!text-[13px]"
            style={{
              color: materialColor,
              backgroundColor: materialBackground,
            }}
          >
            {link.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
