"use client";
import ShowAllBtn from "../common/ShowAllBtn";
import ProductCard from "../common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const DoubleRowSliderSection = ({
  headTitle,
  products,
  multiSubSection,
  blockColor,
}) => {
  let doubleProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    doubleProducts.push({ first: products[i], second: products[i + 1] });
  }
  return (
    <div
      className="h-full w-full rounded-20 bg-maingray p-1 pb-1.5 lg:p-4"
      style={{ backgroundColor: blockColor }}
    >
      <div className="flex items-center justify-between  px-1 pt-1.5 lg:px-0 lg:pt-0">
        <h2 className="text-sm font-bold text-secone lg:text-lg ">
          {headTitle}
        </h2>
        <ShowAllBtn />
      </div>
      <div className="slider-container mt-4">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            1024: {
              spaceBetween: 12,
            },
          }}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: true,
          //   // pauseOnMouseEnter: true
          // }}
          className="mySwiper-all douple-products-swiper h-full"
        >
          {doubleProducts.map((product, i) => (
            <SwiperSlide key={i + "product"} className="my-1.5 !w-fit">
              <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-9">
                <ProductCard
                  product={product.first}
                  multiSubSection={multiSubSection}
                />
                <ProductCard
                  product={product.second}
                  multiSubSection={multiSubSection}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default DoubleRowSliderSection;
