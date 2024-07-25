"use client";
import GallaryCard from "./GallaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const DoubleGallary = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      let slideWidth = 150;
      const width = window.innerWidth;
      if (width <= 400) slideWidth = 90;
      if (width <= 600) slideWidth = 110;
      if (width <= 700) slideWidth = 130;
      const calculatedSlidesPerView = Math.floor(width / slideWidth);
      setSlidesPerView(
        calculatedSlidesPerView > 0 && width <= 991
          ? calculatedSlidesPerView
          : 1,
      );
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  let doubleProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    doubleProducts.push({ first: products[i], second: products[i + 1] });
  }
  return (
    <Swiper
      key={slidesPerView}
      slidesPerView={slidesPerView}
      centeredSlides={false}
      spaceBetween={13}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: "auto",
        },
        500: {
          slidesPerView: slidesPerView,
        },
        991: {
          slidesPerView: "auto",
        },
      }}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="mySwiper-all douple-products-swiper !mt-0 h-full"
    >
      {doubleProducts.map((product, i) => (
        <SwiperSlide key={i + "product"} className="my-1.5">
          <div className="flex flex-col items-center justify-center">
            <GallaryCard
              img={product.first.img}
              title={product.first.name}
              key={product.first.name + i}
            />
            <GallaryCard
              img={product.second.img}
              title={product.second.name}
              key={i + product.second.name}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default DoubleGallary;
