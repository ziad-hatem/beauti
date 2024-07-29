"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Link from "next/link";

const Product = ({ product }) => (
  <Link href={"/"} className="block">
    <div className="!h-auto !w-[calc(100vw_-_10px)] max-w-[300px] rounded-[20px] border-[1px] !border-solid !border-[#CACACA] md:!w-[234px]">
      <div className="image relative flex !h-auto !w-full items-center justify-center rounded-[32px]">
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          className="!h-auto !w-full rounded-t-[20px] object-cover"
          loading="lazy"
        />
        <Image
          src={product.brandImg}
          width={100}
          height={100}
          unoptimized
          className="absolute bottom-[-8%] left-[11px] !h-auto"
          loading="lazy"
        />
      </div>
      <h1 className="mb-[28px] mt-[30px] text-center text-[14px] font-[400] md:text-[20px]">
        {product.name}
      </h1>
    </div>
  </Link>
);

const InternationalEarsBrand = ({ data }) => {
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
            slidesPerView: "auto",
            centeredSlides: true,
          },
          340: {
            centeredSlides: false,
          },
          640: {
            slidesPerView: "auto",
            centeredSlides: false,
          },
        }}
        className="mySwiper-all products hideButtons customScrollBar !mt-0 max-md:!pb-[20px]"
      >
        {data.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-[unset] !items-center !justify-center md:!w-fit"
              key={i}
            >
              <div className="flex !w-full max-w-[300px] flex-col !items-center gap-3">
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

export default InternationalEarsBrand;
