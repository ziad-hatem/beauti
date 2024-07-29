import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = ({ img }) => {
  return (
    <div className="flex !h-[78px] !w-[78px] items-center justify-center bg-[#FAFAFA] md:!h-[145px] md:!w-[145px]">
      <div className="flex items-center justify-center">
        <Image
          src={img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="h-auto mix-blend-multiply max-md:w-[80%]"
        />
      </div>
    </div>
  );
};

const BrandsSwiper2 = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className={`mySwiper-all products-swiper translate-y0 md:!p-0`}
        breakpoints={{
          320: {
            spaceBetween: 13,
          },
          767: {
            spaceBetween: 20,
          },
        }}
      >
        {data.map((brand, index) => {
          return (
            <SwiperSlide className="!h-fit !w-fit" key={index}>
              <Product {...brand} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrandsSwiper2;
