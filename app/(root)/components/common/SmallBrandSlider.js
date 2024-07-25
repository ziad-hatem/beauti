import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SmallBrandSlider({ brands }) {
  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={13}
      grabCursor={true}
      navigation={true}
      loop={true}
      speed={3000}
      modules={[Navigation, Autoplay]}
      freeMode={true}
      autoplay={{
        delay: 1,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
      }}
      breakpoints={{
        1300: {
          spaceBetween: 20,
          slidesPerView: 6,
        },
        991: {
          spaceBetween: 20,
          slidesPerView: 5,
        },
        560: {
          slidesPerView: 5,
        },
        400: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper-all products-swiper SmallBrandSlider translate-y0 !translate-y-0"
    >
      {brands.map((brand, i) => (
        <SwiperSlide key={i + "product"} className="gray SmallBrandSlider-card">
          <Image src={brand.img} alt={i + "product"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
