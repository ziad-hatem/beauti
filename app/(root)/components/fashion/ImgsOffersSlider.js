"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const ImgsOffersSlider = ({
  array,
  slideClassName,
  spacesInDesktop,
  spacesInMobile,
}) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={0}
      grabCursor={true}
      // centeredSlides={true}
      // navigation={true}
      // loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        1300: {
          spaceBetween: 49,
        },
        991: {
          spaceBetween: 20,
        },
      }}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="multi-card-swiper ImgsOffersSlider-slider !w-fit"
    >
      {array.map((element, i) => (
        <SwiperSlide key={i + "element"} className={`${slideClassName}`}>
          <Link key={element.name} href={element.href} className="block w-full">
            <Image
              src={element.img}
              alt=""
              className="!h-[100%] select-none object-cover"
            />
          </Link>
          <p className="gray imgsOfferSlider-title">{element.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImgsOffersSlider;
