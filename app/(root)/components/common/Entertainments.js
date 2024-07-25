"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Link from "next/link";

const Product = ({ product }) => (
  <Link href={"/"} className="max-mobileLg:!w-[calc(100%_-_20px)]">
    <div className="!h-auto !w-full rounded-[20px] border-[1px] !border-solid !border-[#CACACA]">
      <div className="image flex !h-auto !w-full items-center justify-center rounded-[32px]">
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          className="!h-auto !w-full rounded-t-[20px] object-cover"
          loading="lazy"
        />
      </div>
      <h1 className="mb-[28px] mt-[30px] text-center text-[20px] font-[400]">
        {product.name}
      </h1>
    </div>
  </Link>
);

const Entertainments = ({ data }) => {
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
        className="mySwiper-all products hideButtons customScrollBar !mt-0 max-md:!pb-[30px]"
      >
        {data.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-full !items-center !justify-center mobileLg:!max-w-[230px]"
              key={i}
            >
              <div className="flex flex-col !items-center gap-3">
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

export default Entertainments;
