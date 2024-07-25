"use client";
import { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FitBudgetProduct from "./FitBudgetProduct";
import { formatNumberInArabic } from "@/libs/formatNumber";

const Fitbudget = ({
  array,
  spacesInDesktop,
  title = " عطور نسائية تناسب الميزانية ",
}) => {
  let leastOffer = 100;
  let highiestOffer = 0;
  return (
    <>
      <div className="section-title-4 flex md:!mb-4 md:mr-3">
        <h2 className="me-2">{title}</h2>
        <span className="pink !bg-[#FFF6F3] !px-1"></span>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={13}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        breakpoints={{
          991: {
            spaceBetween: 22.75,
          },
        }}
        className="mySwiper-all pinkBigBrand-swiper girlSwiper NextButtonSwiperRight0PX !mt-[6px] !overflow-visible md:!mt-4"
      >
        <div className="pinkBigBrand wrap flex">
          {array.map((element, i) => {
            // console.log((element.price - element.newPrice)/element.price * 100)
            if (
              ((element.price - element.newPrice) / element.price) * 100 >=
              highiestOffer
            ) {
              // console.log(highiestOffer)
              highiestOffer = Math.trunc(
                ((element.price - element.newPrice) / element.price) * 100,
              );
              useEffect(() => {
                document.querySelector(".pink").innerHTML =
                  ` عروض من ${leastOffer} إلى ${highiestOffer}%`;
              }, []);
              // console.log(highiestOffer)
              if (
                ((element.price - element.newPrice) / element.price) * 100 <=
                leastOffer
              ) {
                // console.log(leastOffer)
                leastOffer = Math.trunc(
                  ((element.price - element.newPrice) / element.price) * 100,
                );
                useEffect(() => {
                  document.querySelector(".pink").innerHTML =
                    ` عروض من ${leastOffer}إلى  ${highiestOffer}%`;
                }, []);
                // console.log(leastOffer)
              }
            } else if (
              ((element.price - element.newPrice) / element.price) * 100 <=
              leastOffer
            ) {
              // console.log(leastOffer)
              leastOffer = Math.trunc(
                ((element.price - element.newPrice) / element.price) * 100,
              );
              useEffect(() => {
                document.querySelector(".pink").innerHTML =
                  ` عروض من ${formatNumberInArabic(leastOffer)} إلى ${formatNumberInArabic(highiestOffer)}%`;
              }, []);
              // console.log(leastOffer)
            }
            return (
              <SwiperSlide key={i + "product"} className="relative !w-fit">
                <FitBudgetProduct elementDash={element} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};
export default Fitbudget;
