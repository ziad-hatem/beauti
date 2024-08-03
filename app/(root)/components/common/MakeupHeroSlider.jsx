import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = ({ title, img }) => (
  <div className="group w-[85px] md:w-[104px]">
    <div className="flex h-[100px] items-center justify-center bg-[#F5F5F5] md:h-[128px]">
      <Image
        src={img}
        unoptimized
        loading="lazy"
        className="!h-[78px] mix-blend-multiply md:!h-auto"
      />
    </div>
    <h1 className="mt-[5px] text-center text-[8px] font-[500] group-hover:text-[#F39406] md:mt-3 md:text-[17px]">
      {title}
    </h1>
  </div>
);

const MakeupHeroSlider = ({ data }) => {
  return (
    <div>
      {" "}
      <Swiper
        centeredSlides={false}
        spaceBetween={40.5}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          767: {
            spaceBetween: 40.5,
          },
        }}
        className={` products-swiper womenWears !mt-0 !h-full max-md:!mr-[5px]`}
      >
        {data.map((e, i) => (
          <SwiperSlide className="!w-fit" key={i}>
            <Product {...e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MakeupHeroSlider;
