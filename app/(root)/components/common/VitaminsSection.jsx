"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Product = ({ product }) => (
  <Link href={"/"} className=" md:h-[188px]">
    <div className="image flex h-[109px] w-[109px] items-start justify-center md:h-[153px] md:w-[153px]">
      <Image
        src={product.img}
        width={100}
        height={100}
        className="h-full w-auto object-contain !mix-blend-multiply"
        unoptimized
        loading="lazy"
      />
    </div>
    <h1 className="mx-auto mt-[10px] w-fit text-center text-[10px] md:text-[14px]">
      {product.name}
    </h1>
  </Link>
);
const VitaminsSection = ({
  mainImg = "/imgs/foodFashion/vitamins/mainImg.png",
  mobileImg = "/imgs/foodFashion/vitamins/MobileImg.png",
  data = [],
}) => {
  return (
    <div
      className="flex items-center justify-center gap-0 p-2 pr-0 max-md:flex-col md:!pb-0 lg:gap-5"
      style={{
        backgroundImage: 'url("/imgs/foodFashion/vitamins/backgroundImg.svg")',
      }}
    >
      <div>
        <Image
          src={mainImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="relative hidden h-auto w-[270px] md:bottom-[-20px] md:block md:w-[330px]"
        />
        <Image
          src={mobileImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="relative block h-auto w-[294px] max-md:bottom-[00px] md:hidden md:w-[330px]"
        />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={13}
        grabCursor={true}
        loop={false}
        centeredSlides={false}
        navigation={true}
        className="hideButtons !w-full max-md:!mr-2 max-md:mt-4 md:!mr-[-30px] lg:!w-fit"
        breakpoints={{
          767: {
            spaceBetween: 8,
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

export default VitaminsSection;
