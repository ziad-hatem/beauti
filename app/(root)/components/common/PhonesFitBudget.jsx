import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import dicountImg from "/public/imgs/phones/phonesfitBudget/discount.png";
import far from "/public/imgs/phones/far 1.png";
const Product = ({ product }) => (
  <div className="relative flex !h-[369px] !w-[234px] flex-col items-center rounded-[20px] bg-[#F5F5F5]">
    <div className="">
      <Image
        src={far}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="absolute left-[10%] top-[-8px] !h-auto w-[80%]"
      />
      <p className="relative bottom-1 z-10 text-[13px] font-[400] text-white">
        {product.name}
      </p>
    </div>
    <div className="relative flex h-[67%] w-full items-center justify-center">
      <Image
        src={product.img}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="!h-[70%] !w-auto mix-blend-multiply"
      />
      {product.discount && (
        <Image
          src={dicountImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="absolute bottom-[5%] right-[5%] !h-[75px] !w-[75px]"
        />
      )}
      <div className="absolute bottom-0 left-0 mb-2 ml-2 lg:mb-3 lg:ml-3">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM16.9913 8.085C16.9913 7.58772 16.7937 7.11081 16.4421 6.75917C16.0904 6.40754 15.6135 6.21 15.1163 6.21C14.619 6.21 14.1421 6.40754 13.7904 6.75917C13.4388 7.11081 13.2413 7.58772 13.2413 8.085V13.2413H8.085C7.58772 13.2413 7.11081 13.4388 6.75917 13.7904C6.40754 14.1421 6.21 14.619 6.21 15.1163C6.21 15.6135 6.40754 16.0904 6.75917 16.4421C7.11081 16.7937 7.58772 16.9913 8.085 16.9913H13.2413V22.1475C13.2413 22.6448 13.4388 23.1217 13.7904 23.4733C14.1421 23.825 14.619 24.0225 15.1163 24.0225C15.6135 24.0225 16.0904 23.825 16.4421 23.4733C16.7937 23.1217 16.9913 22.6448 16.9913 22.1475V16.9913H22.1475C22.6448 16.9913 23.1217 16.7937 23.4733 16.4421C23.825 16.0904 24.0225 15.6135 24.0225 15.1163C24.0225 14.619 23.825 14.1421 23.4733 13.7904C23.1217 13.4388 22.6448 13.2413 22.1475 13.2413H16.9913V8.085Z"
            fill="#248EB0"
          />
        </svg>
      </div>
    </div>
    <p className="w-full bg-[#E9E9E9] py-[9px] pr-[10px] text-[14px] font-[400] text-[#666666] md:pl-[30px] md:pr-[25px]">
      {product.text}
    </p>
    <p className="my-auto text-[15px] font-[700] text-[#248EB0]">
      {product.price} ريال
    </p>
  </div>
);

const PhonesFitBudget = ({ data }) => {
  return (
    <div>
      {" "}
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={11.67}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`noButtonSwiper2`}
        breakpoints={{
          320: {
            spaceBetween: 10,
          },
        }}
      >
        {data.map((product, index) => {
          if (index % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-[unset] !items-center !justify-center pt-5 max-md:!mr-[5px] md:!w-fit"
              key={index}
            >
              <div className="flex !w-full max-w-[300px] flex-col !items-center gap-6">
                <Product product={product} key={index} />
                {data[index + 1] && (
                  <Product product={data[index + 1]} key={index + 1} />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PhonesFitBudget;
