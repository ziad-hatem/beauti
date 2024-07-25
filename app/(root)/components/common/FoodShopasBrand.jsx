"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Product = ({ product }) => (
  <Link href={"/"} className="w-fit">
    <div className="image flex h-[109px] w-[109px] items-center justify-center rounded-full bg-[#F5F5F5] md:h-[153px] md:w-[153px]">
      <Image
        src={product.img}
        width={100}
        height={100}
        unoptimized
        className="h-auto w-[65%] object-contain"
        loading="lazy"
      />
    </div>
  </Link>
);

const FoodShopasBrand = ({
  mainImg = "/imgs/foodFashion/shopasBrand/mainImg.png",
  data = [],
}) => {
  return (
    <div className="flex items-center justify-center gap-4 max-md:flex-col lg:gap-5">
      <div>
        <Image
          src={mainImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="h-auto w-[276px]"
        />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={13}
        grabCursor={true}
        loop={false}
        centeredSlides={false}
        navigation={true}
        className="hideButtons !w-full max-md:!mr-2 lg:!w-fit"
        breakpoints={{
          767: {
            spaceBetween: 7.65,
          },
        }}
      >
        {data.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide className="!h-fit !w-fit" key={i}>
              <div className="flex flex-col gap-2">
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

export default FoodShopasBrand;
