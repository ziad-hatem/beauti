import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function DoubleSmallBrandSlider({ brands }) {
    const brands2 = brands.splice(0,brands.length/2)
  return (
    <div className="p-[20px] pt-0">
    <Swiper
      slidesPerView={3.5}
      spaceBetween={13}
      grabCursor={true}
    //   navigation={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        1300: {
          spaceBetween: 18,
          slidesPerView: 6,
        },
        991: {
          spaceBetween: 18,
          slidesPerView: 5,
        },
        560: {
          slidesPerView: 5,
        },
        400: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper-all products-swiper SmallBrandSlider translate-y0 NextButtonSwiperRight0PX !translate-y-0 !p-0"
    >
      {brands.map((brand, i) => (
        <SwiperSlide key={i + "product"} className="max-lg:!h-[117.5px] max-md:!h-unset max-md:p-[12px] gray !flex justify-center items-center md:!h-[140px] hover:bg-[#00000017] max-md:aspect-square">
          <Image src={brand.img} alt={i + "product"} className="w-[120px] m-auto !h-unset object-contain"/>
        </SwiperSlide>
      ))}
    </Swiper>
    <Swiper
      slidesPerView={3.5}
      spaceBetween={13}
      grabCursor={true}
    //   navigation={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        1300: {
          spaceBetween: 18,
          slidesPerView: 6,
        },
        991: {
          spaceBetween: 18,
          slidesPerView: 5,
        },
        560: {
          slidesPerView: 5,
        },
        400: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper-all products-swiper SmallBrandSlider translate-y0 NextButtonSwiperRight0PX !translate-y-0 !mt-[18px] !p-0"
    >
      {brands2.map((brand, i) => (
        <SwiperSlide key={i + "product"} className="gray !flex justify-center items-center md:!h-[140px] hover:bg-[#00000017] max-md:aspect-square p-[8px]">
          <Image src={brand.img} alt={i + "product"} className="w-[120px] m-auto !h-unset object-contain"/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
