import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import defaultImg from "@/../../public/imgs/defaultImg.svg";
const Product = ({ img = defaultImg, title }) => (
  <Link href={"/"} className="group">
    <div className="flex !h-[85px] !w-[85px] items-center justify-center rounded-[18px] bg-[#F9F9F9] md:!h-[170px] md:!w-[170px]">
      <Image
        src={img}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="!h-auto !w-[90%] object-contain mix-blend-multiply"
      />
    </div>
    <h1 className="mt-3 text-center text-[14px] font-medium group-hover:text-[#F39406] max-md:mt-2 max-md:text-[8px]">
      {title}
    </h1>
  </Link>
);

const PhonesSlider = ({ products }) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        loop={true}
        speed={3000}
        delay={1}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 30,
          },
        }}
        className="mySwiper-all products-swiper womenWears !pr-0"
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

export default PhonesSlider;
