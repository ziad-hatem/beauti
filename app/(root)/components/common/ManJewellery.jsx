import Image from "next/image";
import React from "react";
import RestofJewelleryComponent from "@/components/common/RestofJewelleryComponent";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
const jewellery = [
  {
    name: "قبعات",
    img: "/imgs/manFashion/Jewellery/img1.svg",
  },
  {
    name: "سلاسل مفاتيح",
    img: "/imgs/manFashion/Jewellery/img2.svg",
  },
  {
    name: "ربطات عنق",
    img: "/imgs/manFashion/Jewellery/img3.svg",
  },
  {
    name: "محافظ",
    img: "/imgs/manFashion/Jewellery/img4.svg",
  },
  {
    name: "ربطات عنق",
    img: "/imgs/manFashion/Jewellery/img5.svg",
  },
  {
    name: "محافظ",
    img: "/imgs/manFashion/Jewellery/img6.svg",
  },
  {
    name: "اكسسوارات",
    img: "/imgs/manFashion/Jewellery/img7.svg",
  },
];

// export const JewelleryComponent = ({ name, img }) => {
//   return (
//     <Link href="/" className="Jewellery group">
//       <div className="image flex h-[128px] w-[104px] items-center justify-center bg-[#fafafa]">
//         <Image
//           src={img}
//           width={100}
//           height={100}
//           unoptimized={true}
//           className="h-[81px] w-[82px] mix-blend-multiply"
//         />
//       </div>
//       <div className="name mt-1">
//         <h3 className="text-center text-[17px] font-[400] transition-all lg:group-hover:text-[#F39406]">
//           {name}
//         </h3>
//       </div>
//     </Link>
//   );
// };
export const JewelleryComponent = ({ name, img, bgcolor }) => {
  return (
    <Link href="/" className="Jewellery group">
      <div
        className="image flex h-[128px] w-[104px] items-center justify-center p-4 max-md:h-[53.75vw] max-md:w-[44.4vw]"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <Image
          src={img}
          width={100}
          height={100}
          className=" mix-blend-multiply"
        />
      </div>
      <div className="name mt-1">
        <h3 className="text-center text-[14px] font-[400] transition-all md:text-[17px] lg:group-hover:text-[#F39406]">
          {name}
        </h3>
      </div>
    </Link>
  );
};
const ManJewellery = ({
  HeaderImg = "/imgs/jewelryHeader.svg",
  HeaderText = "مجوهرات",
  mainImg = "/imgs/bigjewellery.svg",
  bgcolor,
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
      <div className="Jewellery mt-6 h-fit rounded-lg md:pr-2">
        <div className="header relative !mt-3 mr-auto flex w-full items-center justify-center max-md:!mb-[16px] md:h-[80px] lg:h-[155px] lg:justify-between">
          <Image
            src={HeaderImg}
            width={100}
            height={100}
            className="relative mr-[70%] hidden h-auto w-[150px] mix-blend-multiply lg:block"
          />
          <h2 className="text-[15px] font-[400] md:absolute md:left-[50%] md:!mb-[12px] md:text-[22px]">
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
            className={`noButtonSwiper2 !hidden !justify-around !bg-transparent md:!flex`}
          >
            {Array.from({ length: 7 }, (_, index) => {
              return (
                <SwiperSlide key={index} className="!h-fit !w-fit">
                  <JewelleryComponent {...jewellery[index]} bgcolor={bgcolor} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="hidden flex-wrap items-center justify-center gap-x-[14px] gap-y-4 max-md:flex">
            {Array.from({ length: 7 }, (_, index) => {
              return (
                <div href={"/"} key={index} className="!h-fit !w-fit">
                  <JewelleryComponent {...jewellery[0]} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:mt-5">
          <RestofJewelleryComponent mainImg={mainImg} bgcolor={bgcolor} />
        </div>
      </div>
    </div>
  );
};

export default ManJewellery;
