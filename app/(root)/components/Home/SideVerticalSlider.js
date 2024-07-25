"use client";
import ShowAllBtn from "../common/ShowAllBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProductRow from "./ProductRow";
const SideVerticalSlider = ({ headTitle, products }) => {
  return (
    <div className="h-full w-full p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-secone ">{headTitle}</h2>
        <ShowAllBtn />
      </div>
      <div className="slider-container max-h-[470px]">
        <Swiper
          slidesPerView={'auto'}
          // centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          navigation={true}
          direction="vertical"
          loop={true}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: true,
          //   // pauseOnMouseEnter: true
          // }}
          className="mySwiper-all vertical_swiper "
        >
          {products.map((product, i) => (
            <SwiperSlide key={i + "product"} className="my-1.5">
              <ProductRow product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default SideVerticalSlider;
