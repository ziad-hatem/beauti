"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Link from "next/link";

const Product = ({ brand }) => (
  <Link
    href={"/"}
    className="block h-[350px] !w-[479px] max-md:!h-fit max-md:!w-[calc(100vw_-_26px)]"
  >
    <Image
      src={brand.img}
      width={100}
      height={100}
      unoptimized
      className="!h-full !w-auto object-contain"
      loading="lazy"
    />
  </Link>
);

const BrandsSwiper = ({ brands }) => {
  return (
    <div className="flex flex-wrap gap-[21px]">
      <Swiper
        slidesPerView="auto"
        spaceBetween={11}
        grabCursor={true}
        loop={false}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        centeredSlides={true}
        scrollbar={{
          draggable: true,
          dragSize: 25,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          640: {
            slidesPerView: "auto",
            centeredSlides: false,
          },
        }}
        className="mySwiper-all products hideButtons customScrollBar !mt-0 max-md:!pb-[35px]"
      >
        {brands.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-full !items-center !justify-center md:!w-fit"
              key={i}
            >
              <div className="flex !w-full flex-col !items-center !justify-center gap-3">
                <Product brand={e} key={i} />
                {brands[i + 1] && <Product brand={brands[i + 1]} key={i + 1} />}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrandsSwiper;
