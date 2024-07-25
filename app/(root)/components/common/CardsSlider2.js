"use client";
import ProductCard2 from "../common/ProductCard2";
import GlassesCard from "../common/GlassesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const CardsSlider2 = ({
  products,
  multiSubSection = null,
  centeredSlides = false,
  className = "",
  swiperClassName = "",
  glassCard = "productCard",
  imgClasses,
  click
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
      className={`mySwiper-all products-swiper cardSlider2 max-md:!mr-[5px] max-md:!mt-0 ${swiperClassName}`}
    >
      {products.map((product, i) => (
        <SwiperSlide key={i + "product"} className="!h-fit !w-fit">
          {glassCard == "productCard" ? (
            <ProductCard2
              product={product}
              multiSubSection={multiSubSection}
              productClassName={className}
            />
          ) : (
            <GlassesCard
              product={product}
              multiSubSection={multiSubSection}
              productClassName={className}
              imgClasses={imgClasses}
              click={click}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CardsSlider2;
