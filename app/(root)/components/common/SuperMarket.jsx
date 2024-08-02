"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Link from "next/link";

const Product = ({ product }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/"
      className="block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="pb-full relative flex w-full items-center justify-center overflow-hidden rounded-2xl max-sm:min-h-[calc(100vw_-_10px)] max-sm:w-[calc(100vw_-_10px)] sm:h-[227px] sm:w-[227px]"
        style={{
          background: hover
            ? "linear-gradient(180deg, #FFF 0%, #E3E3E3 100%)"
            : "linear-gradient(180deg, #FFF 0%, #F5F5F5 100%)",
        }}
      >
        <Image
          src={product.img}
          objectFit="contain"
          unoptimized
          className="!h-auto mix-blend-multiply"
          loading="lazy"
          alt={product.name}
        />
      </div>
      <h1 className="mt-3 text-center text-lg font-normal">{product.name}</h1>
    </Link>
  );
};
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
              className="flex !w-full !items-center !justify-center max-mobileLg:!w-full md:!w-fit"
              key={i}
            >
              <div className="flex !w-full flex-col !items-center !justify-center gap-[10px]">
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
