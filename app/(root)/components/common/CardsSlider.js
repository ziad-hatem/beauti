"use client";
import ProductCard from "../common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const CardsSlider = ({
  products,
  multiSubSection = null,
  centeredSlides = false,
  classNames = "",
  plus = false,
}) => {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={centeredSlides}
      spaceBetween={10}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation, Autoplay]}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className={`mySwiper-all products-swiper !mt-1 ${classNames}`}
    >
      {products.map((product, i) => (
        <SwiperSlide key={i + "product"} className="!w-fit max-md:!ml-[5px]">
          <ProductCard
            product={product}
            plus={plus}
            multiSubSection={multiSubSection}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CardsSlider;
