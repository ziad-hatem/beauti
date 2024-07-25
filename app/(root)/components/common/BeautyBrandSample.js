"use client";
import Image from "next/image";
import React from "react";
import BrandSampleCard from "../common/BrandSampleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const BeautyBrandSample = ({
  products,
}) => {
  return (
    <div className="flex justify-between max-md:grid grid-cols-3 gap-[10px]">
        {products.map((e, i) => {
          return (
            <div key={i + "Product"} className="w-fit mx-auto">
              <BrandSampleCard
                product={e}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BeautyBrandSample;
