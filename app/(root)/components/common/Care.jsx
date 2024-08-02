"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Product = ({ product }) => (
  <Link
    href={"/"}
    className="group flex w-[153px] flex-col items-center max-lg:w-[109px] lg:h-[188px]"
  >
    <div className="image flex h-[153px] w-[153px] items-start justify-center rounded-full bg-[#F0F0F0] p-3 max-lg:h-[109px] max-lg:w-[109px]">
      <Image
        src={product.img}
        width={100}
        height={100}
        className="w-[90%] rounded-full object-contain !mix-blend-multiply"
        unoptimized
        loading="lazy"
      />
    </div>
    <h1 className="mx-auto mt-3 w-fit text-center text-[14px] font-medium group-hover:text-[#F39406] lg:text-[17px]">
      {product.name}
    </h1>
  </Link>
);
const Care = ({
  mainImg = "/imgs/foodFashion/care/mainImg.png",
  data = [],
  classNameMainImg = "",
}) => {
  return (
    <div
      className="flex items-end justify-center gap-6 rounded-[16px] max-md:flex-col md:gap-4 lg:gap-5"
      style={{
        backgroundColor: "#F8F8F8",
      }}
    >
      <div className="h-full">
        <Image
          src={mainImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className={`h-auto w-[375px] mix-blend-multiply lg:w-[314px] ${classNameMainImg}`}
        />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={13}
        grabCursor={true}
        loop={false}
        centeredSlides={false}
        navigation={true}
        className="hideButtons !mr-[-10px] !w-full  max-md:!mr-2 lg:!w-fit"
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
              <div className="my-4 flex flex-col gap-4">
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

export default Care;
