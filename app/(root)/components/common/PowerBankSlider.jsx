import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import defaultImg from "@/../../public/imgs/defaultImg.svg";
const Product = ({ img = defaultImg, name }) => (
  <Link href={"/"}>
    <div className="flex  !h-[234px] !w-[234px] items-center justify-center bg-[#F9F9F9]">
      <Image
        src={img}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="!h-auto !w-[90%] object-contain mix-blend-multiply"
      />
    </div>
    <h1 className="mt-3 text-center text-[16px] font-medium max-md:mt-2 max-md:text-[13px]">
      {name}
    </h1>
  </Link>
);

const PowerBankSlider = ({ products }) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={11.67}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            spaceBetween: 8.33,
          },
          768: {
            spaceBetween: 11.67,
          },
        }}
        className="noButtonSwiper hideButtons !pr-0"
      >
        {products.map((product, index) => (
          <SwiperSlide className="!h-fit !w-fit" key={index}>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PowerBankSlider;
