import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function longBannerSlider({ stylesArray }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={24.64}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation]}
      breakpoints={{
        300: {
          spaceBetween: 12,
        },
      }}
      // freeMode={true}
      // autoplay={{
      //   delay: 1,
      //   pauseOnMouseEnter: true
      // }}
      // freeModeMomentum = {false}
      className="mySwiper-all  SmallBrandSlider longBannerSlider douple-products-swiper"
    >
      {stylesArray.map((style, i) => (
        <SwiperSlide key={i + "product"} className="longBannerSlider-card">
          <div className="gray longBannerSlider-image-container">
            <Image src={style.img} alt={i + "product"} />
          </div>
          <p className="title">{style.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
