import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkComponent from "./LinkComponent";

const FlexLinkBannerMobile = ({ links, classNames = "" }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <section
      className=" !p-0"
      style={{ background: "none", backgroundImage: "none" }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        navigation={false}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`noButtonSwiper !bg-transparent ${classNames}`}
      >
        {links.map((link, i) => {
          return (
            <SwiperSlide key={i} className="!h-fit !w-fit">
              <LinkComponent link={link.href} title={link.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default FlexLinkBannerMobile;
