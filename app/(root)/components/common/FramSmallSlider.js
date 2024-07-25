import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function FramSmallSlider({products}) {
  return (
    <Swiper
    slidesPerView={3.5}
    spaceBetween={13}
    grabCursor={true}
    navigation={true}
    modules={[Navigation, Autoplay]}
    breakpoints={{
      1300: {
        spaceBetween: 18.25,
        slidesPerView: 5,
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
    className="mySwiper-all translate-y0 !translate-y-0 "
  >
    {products.map((product, i) => (
      <SwiperSlide key={i + "product"} className="rounded-[13px] gray aspect-[172/217] p-15 bg-[#fff] border-[#E2E2E2] border-[1px] rounded-[13px]pb-[10px]">
        <div className='p-[15px] pb-[0]'>
            <Image width={200} height={200} src={product.img} alt={i + "product"} />
        </div>
        <div className='py-[10px] text-center font-[500] text-[#2C2E45]'>
            {product.title}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
