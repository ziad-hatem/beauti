"use client";
import ProductCard from "../common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import React from "react";
import WideProductCard from "./WideProductCard";
import Image from "next/image";
import "swiper/css/scrollbar";

const Widebanner = ({
  products,
  multiSubSection = null,
  centeredSlides = false,
  buttonbg = `bg-[#f39406]`,
  buttonHovbg = `hover:bg-[#ffab2c]`
}) => {
  return (
    <Swiper
      slidesPerView="1"
      centeredSlides={centeredSlides}
      spaceBetween={10}
      grabCursor={true}
      navigation={true}
      loop={false}
      scrollbar={{
        draggable: true,
        dragSize: "10px",
      }}
      modules={[Navigation, Autoplay, Scrollbar]}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="mySwiper-all douple-products-swiper wideBannerSwiper !mt-0 !w-auto !max-w-full !py-0 max-md:!mx-3 2xl:!h-[313px] "
    >
      {products.map((product, i) => (
        <SwiperSlide key={i + "product"} className="relative w-full">
          <div className="card-heart absolute left-0 top-0 ml-[11.61px] mt-[8.65px] hidden max-md:ml-[13px] max-md:mt-[12px] lg:block">
            <svg
              width="25"
              height="23"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                id="Vector"
                d="M15.0333 4.43668C16.0667 4.43668 16.9044 5.27441 16.9044 6.30779M10.3556 3.69061L10.9965 3.03335C12.9901 0.988886 16.2223 0.988884 18.2159 3.03334C20.156 5.0229 20.2156 8.22924 18.3509 10.2932L12.9936 16.223C11.5703 17.7983 9.14078 17.7983 7.71754 16.223L2.36023 10.2932C0.495532 8.22927 0.555143 5.02292 2.49521 3.03336C4.48881 0.988896 7.72107 0.988898 9.71467 3.03336L10.3556 3.69061Z"
                stroke="#F39406"
                strokeWidth="1.98118"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <WideProductCard
            product={product}
            multiSubSection={multiSubSection}
            btnBg={buttonbg}
            btnHovBg={buttonHovbg}
          />
          <div className="absolute right-0 top-0 mr-1 mt-2 flex !h-[18px] !w-[65px] cursor-pointer items-center justify-center !gap-0.5 rounded-full !border border-[#CFCFCF] md:mr-4 lg:!h-[23px] lg:!w-[107px] lg:!gap-[6px]">
            <img
              src={"/imgs/womenFashion/eye.svg"}
              className="!h-[5.63px] !w-[8.44px] lg:!h-[8.13px] lg:!w-[12.19px]"
            />
            <p className="text-[8px] font-[400] xl:text-[11px]">نظرة سريعة</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Widebanner;
