import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const ShopasDesiredSlider = ({ data, height="!h-[172px]", ratio="aspect-square" }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={22.75}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper-all douple-products-swiper ShopasDesiredSlider !mr-[5px] h-full"
      >
        {data.map((e, i) => {
          return (
            <SwiperSlide key={i} className="group !h-fit !w-[176px] !max-w-fit">
              <img
                src={e.img}
                className={`!mb-2 ${ratio} ${height} !w-[176px] object-cover`}
                loading="lazy"
                alt={e.name}
              />

              <p className="!my-0 text-[14px]">{e.name}</p>
              <p className="!mb-[-6px] w-full text-[9px]">{e.description}</p>
              <Link
                href={"/"}
                className="!mt-[-6px] text-[8px] group-hover:text-[7.5px] group-hover:font-[700]"
              >
                عرض الكل »
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ShopasDesiredSlider;
