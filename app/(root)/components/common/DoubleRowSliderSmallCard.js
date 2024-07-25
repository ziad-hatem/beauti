"use client";
import SmallProductCard from "./SmallProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const DoubleRowSliderSmallCard = ({ products, multiSubSection }) => {
  let doubleProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    doubleProducts.push({ first: products[i], second: products[i + 1] });
  }
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={false}
      spaceBetween={10}
      grabCursor={true}
      navigation={true}
      loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        1024: {
          centeredSlides: true,
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
            <SmallProductCard
              product={product.first}
              multiSubSection={multiSubSection}
            />
            <SmallProductCard
              product={product.second}
              multiSubSection={multiSubSection}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default DoubleRowSliderSmallCard;
