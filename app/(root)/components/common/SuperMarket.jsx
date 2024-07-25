"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Link from "next/link";

const Product = ({ product }) => (
  <Link href={"/"} className="!w-fit max-sm:!w-[calc(100%_-_10px)]">
    <div
      className="image flex h-auto items-center justify-center rounded-[32px] max-sm:min-h-[310px] max-sm:w-full max-sm:min-w-[310px] md:!h-[227px] md:!w-[227px]"
      style={{ background: "linear-gradient(180deg, #FFF 0%, #F5F5F5 100%)" }}
    >
      <Image
        src={product.img}
        width={100}
        height={100}
        unoptimized
        className="h-auto w-[65%] object-contain"
        loading="lazy"
      />
    </div>
    <h1 className="mt-3 text-center text-[16px] font-[400]">{product.name}</h1>
  </Link>
);

const SuperMarket = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-[21px]">
      <Swiper
        slidesPerView="auto"
        spaceBetween={21}
        grabCursor={true}
        loop={false}
        navigation={true}
        modules={[Navigation, Scrollbar]}
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
        className="mySwiper-all products hideButtons customScrollBar max-md:!pb-[30px]"
      >
        {data.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-fit !items-center !justify-center max-mobileLg:!w-full"
              key={i}
            >
              <div className="flex flex-col !items-center !justify-center gap-[10px]">
                <Product product={e} key={i} />
                {data[i + 1] && <Product product={data[i + 1]} key={i + 1} />}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SuperMarket;
