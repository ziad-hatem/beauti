"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const BranchesSlider = ({ branches }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={5}
      grabCursor={true}
      // centeredSlides={true}
      // navigation={true}
      // loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        1024: {
          spaceBetween: 32,
        },
      }}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="mySwiper-all "
    >
      {branches.map((branch, i) => (
        <SwiperSlide key={i + "branch"} className="my-1.5 !w-20  lg:!w-[109px]">
          <Link
            key={branch.name}
            href={branch.href}
            className="block w-full"
          >
            <Image src={branch.img} alt="" className="object-cover select-none"/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default BranchesSlider;
