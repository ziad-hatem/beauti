"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BoysCard from "../common/BoysCard";

const BlueBigBrand = ({ array,bgColor,textColor, smallBannerImg, offerTextColor,title="أزياء ولادية تناسب الميزانية" }) => {
  const [leastOffer, setLeastOffer] = useState(100);
  const [highiestOffer, setHighiestOffer] = useState(0);

  useEffect(() => {
    let minOffer = 100;
    let maxOffer = 0;

    array.forEach((element) => {
      const offer = Math.trunc(
        ((element.price - element.newPrice) / element.price) * 100,
      );
      if (offer >= maxOffer) {
        maxOffer = offer;
      }
      if (offer <= minOffer) {
        minOffer = offer;
      }
    });

    setLeastOffer(minOffer);
    setHighiestOffer(maxOffer);
  }, [array]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.querySelector(".pink").innerHTML =
        `عروض من ${leastOffer} إلى ${highiestOffer}%`;
    }
  }, [leastOffer, highiestOffer]);

  return (
    <>
      <div className="section-title-4 !mt-3 flex">
        <h2 className="me-2">{title}</h2>
        <span className={`pink ${bgColor} !px-1 ${textColor}`}></span>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`mySwiper-all pinkBigBrand-swiper startButtonSwiperPrevandNext BlueBigBrand !mt-[6px] md:!mt-2`}
      >
        <div className="pinkBigBrand wrap flex">
          {array.map((element, i) => (
            <SwiperSlide
              key={i + "product"}
              className="relative !w-fit"
            >
              <BoysCard elementDash={element} bgColor={bgColor} offerTextColor={offerTextColor} textColor={textColor} smallBannerImg={smallBannerImg}/>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default BlueBigBrand;
