"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import { SideBySideMagnifier } from "react-image-magnifiers-v2";

const ProductImgsSlider = ({ imgs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const props = {
    width: 448,
    height: 448,
    zoomPosition: "original",
  };
  return (
    <div className="sticky top-0">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 product-gallery  mb-2  rounded-2xl"
      >
        {imgs.map((img, i) => (
          <SwiperSlide
            key={i + "img"}
            className="bg-maingray aspect-square overflow-hidden rounded-2xl"
          >
            <Image src={img.src} alt="" className="h-full w-full lg:hidden" />

            <div className="hidden lg:block">
              <SideBySideMagnifier
                imageSrc={`../imgs/products/${img.name}`}
                imageAlt="Example"
                alwaysInPlace={true}
                className={"hossam"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={6}
        slidesPerView={5}
        breakpoints={{
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper product-gallery-thumb  "
      >
        {imgs.map((img, i) => (
          <SwiperSlide
            key={i + "img"}
            className="product_card_shadow bg-maingray my-1 aspect-square overflow-hidden rounded-2xl"
          >
            <Image src={img.src} alt="" className="h-full w-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductImgsSlider;
