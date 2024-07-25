"use client";
import ShowAllBtn from "../common/ShowAllBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import DetailedProductCard from "./DetailedProductCard";

const DetailedProductSlider = ({ headTitle, products }) => {
  return (
    <div className=" h-full w-full">
      <div className="flex items-center justify-between px-1 lg:px-0 pt-1.5 lg:pt-0">
        <h2 className=" text-sm md:text-lg font-bold text-secone ">{headTitle}</h2>
        <ShowAllBtn />
      </div>
      <div className="slider-container mt-3 md:mt-8 h-[calc(100%_-_46px)]">
        <Swiper
          grabCursor={true}
          navigation={true}
          spaceBetween={5}
          loop={true}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: true,
          //   // pauseOnMouseEnter: true
          // }}
          className="mySwiper-all detailed_product_slider"
        >
          {products.map((product, i) => (
            <SwiperSlide key={i + "product"} className="my-1.5">
              <DetailedProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default DetailedProductSlider;
