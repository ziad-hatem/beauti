"use client";
import FurnitureGallaryCard from "./FurnitureGallaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const FurnitureDoubleGallary = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      let slideWidth = 170;
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
      spaceBetween={30.25}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        500: {
          slidesPerView: "auto",
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
      className="mySwiper-all !mt-0 h-full px-[5px]"
    >
      {doubleProducts.map((product, i) => (
        <SwiperSlide key={i + "product"} className="my-1.5 !w-[24%] sm:!w-[170px]">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <FurnitureGallaryCard
              img={product.first.img}
              title={product.first.name}
              key={product.first.name + i}
            />
            <FurnitureGallaryCard
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
export default FurnitureDoubleGallary;
