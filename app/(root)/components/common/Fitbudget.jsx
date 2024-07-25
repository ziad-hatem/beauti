"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FitBudgetProduct from "./FitBudgetProduct";
import { formatNumberInArabic } from "@/libs/formatNumber";

const Fitbudget = ({
  array,
  spacesInDesktop,
  title = " عطور نسائية تناسب الميزانية ",
}) => {
  const [offerRange, setOfferRange] = useState({ least: 100, highest: 0 });

  useEffect(() => {
    let leastOffer = 100;
    let highestOffer = 0;

    array.forEach((element) => {
      const offerPercentage = Math.trunc(
        ((element.price - element.newPrice) / element.price) * 100,
      );
      leastOffer = Math.min(leastOffer, offerPercentage);
      highestOffer = Math.max(highestOffer, offerPercentage);
    });

    setOfferRange({ least: leastOffer, highest: highestOffer });
  }, [array]);

  useEffect(() => {
    const pinkElement = document.querySelector(".pink");
    if (pinkElement) {
      pinkElement.innerHTML = ` عروض من ${formatNumberInArabic(offerRange.least)} إلى ${formatNumberInArabic(offerRange.highest)}%`;
    }
  }, [offerRange]);

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
          {array.map((element, i) => (
            <SwiperSlide key={i + "product"} className="relative !w-fit">
              <FitBudgetProduct elementDash={element} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Fitbudget;
