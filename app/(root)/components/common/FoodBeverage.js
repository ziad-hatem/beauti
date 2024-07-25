import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const FoodBeverage = ({
  data,
  height = "!h-[172px]",
  ratio = "aspect-square",
}) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={11}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper-all douple-products-swiper LittlePagination !mr-[5px] !mt-0 !h-fit"
      >
        {data.map((e, i) => {
          return (
            <SwiperSlide
              key={i}
              className="group flex !h-fit !w-[234px] flex-col items-center"
            >
              <Link href={"/"}>
                <img
                  src={e.img}
                  className={`!mb-2 ${ratio} ${height} !w-[234px] object-cover`}
                  loading="lazy"
                  alt={e.name}
                />

                <p className="!mx-0 flex justify-center text-[13px] font-[400] md:text-[16px]">
                  {e.name}
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default FoodBeverage;
