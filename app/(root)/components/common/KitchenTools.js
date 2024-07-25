"use client";
import GallaryCard from "./GallaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function KitchenTools({ products, mainImage }) {
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
    <div className="flex gap-[12px] bg-[#f8f8f8] p-[12px] max-md:flex-col">
      <div>
        <div>
          <img src={mainImage} alt="" />
        </div>
        <div className="md:mt-[24px] mt-[12px] mb-[10px]">
          <div className="md:text-[22px] text-[calc(11px+0.8vw)]">
            عروض و خصومات على أدوات المطبخ
          </div>
          <a href="" className="md:text-[22px] text-[calc(11px+0.8vw)]">
            عرض المزيد »
          </a>
        </div>
      </div>
      <Swiper
        key={slidesPerView}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={12}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2,
             spaceBetween: 14,
          },
          500: {
            slidesPerView: 2,
             spaceBetween: 14,
          },
          768: {
            slidesPerView: "auto",
          },
          991: {
            slidesPerView: 2,
          },
        }}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className="mySwiper-all products-swiper !mt-0 h-full flex-[0 1 452px] min-w-[220px]"
      >
        {doubleProducts.map((product, i) => (
          <SwiperSlide key={i + "product"} className="my-0 w-[50%] sm:!w-fit">
            <div className="flex flex-col items-center justify-center sm:max-w-[220px] max-md:gap-[12px] gap-[9px]">
              <div className="flex h-full flex-col-reverse">
                <div className="name bg-[#fff] text-center p-[10px] md:text-[17px] text-[calc(9px+.8vw)]">
                  <h3 className=" !font-[400]">{product.first.name}</h3>
                </div>
                <div className="image relative max-md:overflow-hidden aspect-[220/160] w-full h-auto">
                  <Image
                    src={product.first.img}
                    loading="lazy"
                    alt=""
                    width={220}
                    height={160}
                    className="mix-blend-multiply transition-all duration-500"
                  />
                </div>
              </div>
              <div className="flex h-full flex-col-reverse">
                <div className="name bg-[#fff] text-center p-[10px] md:text-[17px] text-[calc(9px+.8vw)]">
                  <h3 className=" !font-[400]">{product.second.name}</h3>
                </div>
                <div className="image relative max-md:overflow-hidden aspect-[220/160] w-full h-auto">
                  <Image
                    src={product.second.img}
                    loading="lazy"
                    width={220}
                    height={160}
                    alt=""
                    className="mix-blend-multiply transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
