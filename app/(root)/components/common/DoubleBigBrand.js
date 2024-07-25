"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const DoubleBigBrand = ({ array, spacesInDesktop }) => {
  let doubleProducts = [];
  for (let i = 0; i < array.length; i += 2) {
    doubleProducts.push({ first: array[i], second: array[i + 1] });
  }
  return (
    <div className="DoubleBigBrand wrap flex">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={13}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          767: {
            spaceBetween: 22,
          },
          991: {
            spaceBetween: 27.25,
          },
        }}
        // breakpoints={{

        // }}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className="mySwiper-all DoubleBigBrand-swiper !mt-0 h-full max-sm:!mr-[5px]"
      >
        {doubleProducts.map((element, i) => (
          <SwiperSlide key={i + "product"} className="max-md:!w-fit">
            <div className="twoCardsContainer flex flex-col items-center justify-center">
              <div className="DoubleBigBrand-card" key={i}>
                <Link
                  key={element.first.name}
                  href={"/"}
                  className="block w-full"
                >
                  <Image
                    src={element.first.img}
                    alt=""
                    className="!h-[100%] select-none object-cover"
                  />
                </Link>
                <p className="gray imgsOfferSlider-title">
                  {element.first.title}
                </p>
              </div>
              <div className="DoubleBigBrand-card" key={i}>
                <Link
                  key={element.second.name}
                  href={"/"}
                  className="!flex w-full !items-center"
                >
                  <Image
                    src={element.second.img}
                    alt=""
                    className="!h-[100%] select-none object-cover"
                  />
                </Link>
                <p className="gray imgsOfferSlider-title">
                  {element.second.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default DoubleBigBrand;

// "use client";
// import GallaryCard from "./GallaryCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// const DoubleGallary = ({ products }) => {

//   return (

//   );
// };
// export default DoubleGallary;
