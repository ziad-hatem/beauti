"use client";

import ShowAllBtn from "../common/ShowAllBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Brands = ({ headTitle, brands, className }) => {
  return (
    <section
      className={`bg-maingray lg:rounded-20 my-3 w-full rounded-lg p-1 lg:p-4 ${className}`}
    >
      <div className="flex items-center justify-between px-1 pt-1.5 lg:px-0 lg:pt-0">
        <h2 className="text-sm font-bold text-secone lg:text-lg ">
          {headTitle}
        </h2>
        <ShowAllBtn />
      </div>
      <div className="slider-container mt-4">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1024: {
              spaceBetween: 17,
            },
          }}
          className="mySwiper-all brands-swiper "
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i + "brand"} className="my-1.5 !w-fit">
              <Link
                href={brand.href}
                className=" flex h-7 w-20 place-content-center overflow-hidden rounded-lg bg-white shadow-md md:h-[62px] md:w-36 md:rounded-xl"
              >
                <Image src={brand.img} className=" h-full w-auto " alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Brands;
