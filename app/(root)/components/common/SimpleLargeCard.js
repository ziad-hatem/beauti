import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SimpleLargeCard({ products }) {
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
      className="mt-[30px] gap-3 max-md:mt-[16px] max-md:!px-[13px] max-md:!pb-[20px]"
    >
      {products.map((product, i) => {
        return (
          <SwiperSlide
            key={`product-${i}`}
            className="!flex aspect-[234/369] h-fit !w-[calc(25%-9px)] flex-col gap-[13px] overflow-hidden rounded-[20px] border-[1px] border-solid border-[#CACACA] max-md:mt-8 max-md:!w-full max-md:min-w-[234px] max-md:max-w-[310px]"
          >
            <div className="aspect-[234/287] w-full">
              <Image
                src={product.img}
                width={100}
                height={100}
                unoptimized
                loading="lazy"
                className="!h-fit w-full max-md:mx-auto"
              />
            </div>
            <div className="flex h-[82px] items-center justify-center text-[calc(12px+.8vw)] md:text-[17px]">
              {product.title}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
