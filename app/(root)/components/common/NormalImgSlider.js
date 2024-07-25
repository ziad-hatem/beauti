import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
export default function NormalImgSlider({images}) {
  return (
    <Swiper
    slidesPerView={"auto"}
    spaceBetween={10}
    grabCursor={true}
    navigation={true}
    modules={[Navigation, Autoplay]}
    breakpoints={{
        767:{
            spaceBetween: 24
        }
    }}
    className="mySwiper-all products-swiper SmallBrandSlider translate-y0 !px-0 NextButtonSwiperRight0PX"
  >
    {images.map((image, i) => (
      <SwiperSlide key={i + "product"} className="min-w-[120px] md:w-[175px] w-[calc(33%-10px)] md:max-w-[175px]">
        <Image src={image.img} alt={i + "product"} width={200} height={200} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
