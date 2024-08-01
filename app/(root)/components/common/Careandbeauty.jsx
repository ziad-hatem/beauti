import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Product = ({ product }) => {
  return (
    <div className="group w-[188px] cursor-pointer">
      <div className="flex aspect-square w-full items-center justify-center bg-white">
        <Image
          src={product.img}
          unoptimized
          width={100}
          height={100}
          loading="lazy"
          className="h-auto w-[80%] object-contain"
        />
      </div>
      <div className="flex h-[37px] w-full items-center justify-center  bg-[#EFEBE0]">
        <h1 className="text-[17px] font-[500] text-[#383838] group-hover:font-[700]">
          {product.text}
        </h1>
      </div>
    </div>
  );
};

const Right = ({ mainImg }) => {
  return (
    <div className="mx-auto flex h-fit w-[283px] flex-none flex-col gap-4 max-md:w-[calc(100vw_-_26px)]">
      <div className="aspect-square w-full">
        <Image
          src={mainImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
      </div>
      <Link
        href={""}
        className="hidden min-h-[20px] cursor-pointer text-[22px] font-[400] hover:text-[21px] hover:font-[700] md:block"
      >
        عرض الكل »
      </Link>
    </div>
  );
};

const Left = ({ data }) => {
  return (
    <>
      <div className="h-[283px] w-full flex-1 overflow-hidden bg-[#FAFAFA] py-[20px]">
        <Swiper
          slidesPerView="auto"
          centeredSlides={false}
          spaceBetween={22}
          navigation={true}
          loop={false}
          modules={[Navigation, Autoplay]}
          className={`mySwiper-all products-swiper pr-[13px] md:!pr-[30px]`}
        >
          {data.map((product, index) => {
            return (
              <SwiperSlide className="!w-fit" key={index}>
                <Product product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link
        href={""}
        className="mt-[-11px] block cursor-pointer text-[12px] font-[500] md:hidden"
      >
        عرض الكل <span className="font-[400]">»</span>
      </Link>
    </>
  );
};

const Careandbeauty = ({ mainImg, data }) => {
  return (
    <div className="flex gap-[13px] max-md:flex-col md:gap-[20px]">
      <Right mainImg={mainImg} />
      <Left data={data} />
    </div>
  );
};

export default Careandbeauty;
