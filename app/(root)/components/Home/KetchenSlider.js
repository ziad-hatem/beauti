import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ketchenSliderImgs } from "@/data/fake";

import Link from "next/link";
// import "swiper/css/pagination";

const KetchenSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={5}
        grabCursor={true}
        navigation={true}
        loop={true}
        // speed={3000}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   delay: 1,
        //   // disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        breakpoints={{ 1024: { spaceBetween: 10 } }}
        className="mySwiper-all hero-small"
      >
        {ketchenSliderImgs.map((img, index) => (
          <SwiperSlide key={index} className="my-auto !h-fit !w-fit">
            <Link href={img.href} className="block w-[75px] lg:w-[150px]">
              <Image src={img.img} className="select-none" alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default KetchenSlider;
