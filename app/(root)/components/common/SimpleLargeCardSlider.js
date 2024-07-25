import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function SimpleLargeCardSlider({ products }) {
  let doubleProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    doubleProducts.push({ first: products[i], second: products[i + 1] });
  }

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={12}
      grabCursor={true}
      modules={[Navigation, Autoplay, Scrollbar]}
      // navigation={true}
      // pagination={true}
      scrollbar={{
        draggable: true,
        dragSize: 25,
      }}
      breakpoints={{
        767: {
          slidesPerView: "auto",
          spaceBetween: 12,
        },
      }}
      className="mt-10 gap-3 max-md:mt-8 max-md:!px-[13px] max-md:!pb-[20px]"
    >
      {doubleProducts.map((product, i) => {
        // !w-[calc(25%-9px)] max-md:!w-full
        return (
          <SwiperSlide
            key={i}
            className="!flex h-fit !w-[calc(25%-9px)] flex-col max-md:!w-full"
          >
            <div className="mt-10 !flex aspect-[234/369] h-fit flex-col gap-[13px] overflow-hidden rounded-[20px] border-[1px] border-solid border-[#CACACA] max-md:mt-8 max-md:min-w-[234px] max-md:max-w-[310px]">
              <div className="aspect-[234/287] w-full">
                <Image
                  src={product.first.img}
                  width={100}
                  height={100}
                  unoptimized
                  loading="lazy"
                  className="!h-fit w-full max-md:mx-auto"
                />
              </div>
              <div className="flex h-[82px] items-center justify-center text-[calc(12px+.8vw)] md:text-[17px]">
                {product.first.title}
              </div>
            </div>
            <div className="mt-10 !flex aspect-[234/369] h-fit flex-col gap-[13px] overflow-hidden rounded-[20px] border-[1px] border-solid border-[#CACACA] max-md:mt-8 max-md:min-w-[234px] max-md:max-w-[310px]">
              <div className="aspect-[234/287] w-full">
                <Image
                  src={product.second.img}
                  width={100}
                  height={100}
                  unoptimized
                  loading="lazy"
                  className="!h-fit w-full max-md:mx-auto"
                />
              </div>
              <div className="flex h-[82px] items-center justify-center text-[calc(12px+.8vw)] md:text-[17px]">
                {product.second.title}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
