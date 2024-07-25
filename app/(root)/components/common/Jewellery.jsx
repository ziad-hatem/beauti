import Image from "next/image";
import React from "react";
import RestofJewelleryComponent from "@/components/common/RestofJewelleryComponent";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
const jewellery = [
  {
    name: "الأقراط",
    img: "/imgs/jewelry1.svg",
  },
];

export const JewelleryComponent = ({ name, img, bgcolor }) => {
  return (
    <Link href="/" className="Jewellery group">
      <div
        className="image flex items-center justify-center p-4 max-md:h-[53.75vw] max-md:w-[44.4vw] md:h-[128px] md:w-[104px]"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <Image
          src={img}
          width={100}
          height={100}
          className="mix-blend-multiply max-lg:!h-[54.04%] max-lg:!w-[70.42%]"
        />
      </div>
      <div className="name mt-1">
        <h3 className="text-center text-[calc(14px_+_1vw)] font-[400] transition-all md:text-[17px] lg:group-hover:text-[#F39406]">
          {name}
        </h3>
      </div>
    </Link>
  );
};
const Jewellery = ({
  HeaderImg = "/imgs/jewelryHeader.svg",
  HeaderText = "مجوهرات",
  man = false,
  bgcolor = "#fafafa",
  mainImg,
  bgHover,
}) => {
  const [active, setActive] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <div>
      <div className="Jewellery mt-8 h-fit rounded-lg md:mt-10 md:pr-2">
        <div className="header relative !mt-3 mr-auto flex w-full items-center justify-center max-md:!mb-[16px] md:h-[80px] lg:h-[155px] lg:justify-between">
          <Image
            src={HeaderImg}
            width={100}
            height={100}
            className="relative mr-[70%] hidden h-auto w-[150px] mix-blend-multiply lg:block"
          />
          <h2 className="text-[15px] font-[400] md:absolute md:left-[50%] md:text-[22px]">
            {HeaderText}
          </h2>
        </div>
        <div className="Jewellerys !mb-4 !hidden flex-wrap justify-around md:!flex">
          <Swiper
            ref={swiperRef}
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            loop={false}
            modules={[Navigation, Autoplay]}
            className={`noButtonSwiper2 !flex !justify-around !bg-transparent`}
          >
            {Array.from({ length: 7 }, (_, index) => {
              return (
                <SwiperSlide key={index} className="!h-fit !w-fit">
                  <JewelleryComponent {...jewellery[0]} bgcolor={bgcolor} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="md:mt-5">
          <RestofJewelleryComponent
            man={man}
            bgHover={bgHover}
            mainImg={mainImg}
            bgcolor={bgcolor}
          />
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
