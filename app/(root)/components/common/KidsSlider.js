"use client";
import KidsCard from "../common/KidsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const KidsSlider = ({
  products,
  multiSubSection = null,
  centeredSlides = false,
  classNames = "",
}) => {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={centeredSlides}
      spaceBetween={12}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation, Autoplay]}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className={`mySwiper-all products-swiper NextButtonSwiperRight0PX ${classNames}`}
    >
      {products.map((product, i) => (
        <SwiperSlide
          key={i + "product"}
          className="!h-fit !w-[37.2vw] !max-w-[150px] lg:!w-[137px]"
        >
          <KidsCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default KidsSlider;
