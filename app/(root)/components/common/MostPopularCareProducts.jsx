import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import productBg from "../../../../public/imgs/beauty&care/cartProducts/bg.png";
const Product = ({ product }) => {
  return (
    <div className="cursor-pointer">
      <div className="relative h-[224px] w-[176px] overflow-hidden rounded-[25px]">
        <div>
          <Image
            src={product.img}
            alt=""
            width={100}
            height={100}
            unoptimized
            loading="lazy"
            className="absolute left-1/2 top-1/2 !h-auto -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
        <Image
          src={productBg}
          alt=""
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
      </div>
      <h1 className="mt-3 text-[14px] font-[400]">{product.title}</h1>
      <p className="mt-1 text-[9px] font-[400]">{product.text}</p>
      <p
        href={"/"}
        className="mt-2 text-[9px] group-hover:text-[13px] group-hover:font-[700]"
      >
        تسوق الآن <span>»</span>
      </p>
    </div>
  );
};

const MostPopularCareProducts = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={22.75}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`mySwiper-all LittlePagination !justify-around !bg-transparent max-md:!mr-[5px]`}
        breakpoints={{
          300: {
            spaceBetween: 12,
          },
          767: {
            spaceBetween: 22.75,
          },
        }}
      >
        {data.map((product, index) => (
          <SwiperSlide className="!w-fit" key={index}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopularCareProducts;
