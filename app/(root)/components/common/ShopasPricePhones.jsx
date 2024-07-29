import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ShopasPricePhones = ({ data }) => {
  return (
    <div className="bg-[#FAFAFA] py-[25px] pr-[13px] md:py-[30px] md:pr-[20px]">
      {" "}
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={34}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`noButtonSwiper2`}
        breakpoints={{
          320: {
            spaceBetween: 10,
          },
          767: {
            spaceBetween: 34,
          },
        }}
      >
        {data.map((e, i) => (
          <SwiperSlide className="!h-fit !w-fit" key={i}>
            <Link href={"/"}>
              <Image
                src={e.img}
                width={100}
                height={100}
                unoptimized
                loading="lazy"
                className="!h-[63px] !w-[63px] md:!h-[127px] md:!w-[127px]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopasPricePhones;
