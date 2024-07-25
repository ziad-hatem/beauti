"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const OffersSlider = ({ offers }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      grabCursor={true}
      // navigation={true}
      // loop={true}
      modules={[Navigation, Autoplay]}
      // breakpoints={{
      //   1024: {
      //     spaceBetween: 32,
      //   },
      // }}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="mySwiper-all  sm:max-w-full"
    >
      {offers.map((offer) => (
        <SwiperSlide key={offer.name + "offer"} className="my-1.5 !w-fit">
          <Link
            key={offer.name}
            href={offer.href}
            className=" grid h-7 w-28 place-content-center rounded-lg bg-white text-sm font-medium text-sectwo shadow-md"
          >
            {offer.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default OffersSlider;
