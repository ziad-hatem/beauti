"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BrandChecker from "@/components/common/filter/BrandChecker";

const DoubleBrandsSlider = ({ brands = null }) => {
  let doubleBrands = [];
  if (brands == null) {
    console.log("empty")
    return;
  }else{

    return (
      <>
          {brands.map((brand, i) => {return (
                <BrandChecker order={i} key={i + "brand"} brand={brand} />
          )})
          }
      </>
    );
  }
};
export default DoubleBrandsSlider;
