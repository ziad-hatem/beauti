import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SmallBrandSlider2({ brands }) {
  return (
    <div className="SmallBrandSlider2-container gray mt-4">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={37}
        navigation={true}
        loop={true}
        speed={3000}
        delay={1}
        modules={[Navigation, Autoplay]}
        freeMode={true}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            spaceBetween: 13,
          },
          768: {
            spaceBetween: 37,
          },
        }}
        // breakpoints={{
        //   1300: {
        //     spaceBetween: 37,
        //     slidesPerView: 6,
        //   },
        //   991: {
        //     spaceBetween: 40,
        //     slidesPerView: 4,
        //   },
        //   570: {
        //     slidesPerView: 5,
        //   },
        //   460: {
        //     slidesPerView: 4,
        //   },
        //   360: {
        //     slidesPerView: 3,
        //   },
        // }}
        className="gray SmallBrandSlider trnasition-linear SmallBrandSlider2 noButtonSwiper smallSwiper NextButtonSwiperRight0PX"
      >
        {brands.map((brand, i) => (
          <SwiperSlide
            key={i + "product"}
            className="SmallBrandSlider2-card !h-[78px] !w-[78px] md:!h-[118px] md:!w-[118px] trnasition-linear"
          >
            <Image src={brand.img} alt={i + "product"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
