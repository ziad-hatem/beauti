import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { recommendedFilter } from "../../data/fake";
import RecommendedFIlterSlider from "./RecommendedFIlterSlider";

export default function RecommendedFilter() {
  useEffect(() => {
    document
      .querySelectorAll(".RecommendedFilter-slide select")
      .forEach((el) => {
        el.addEventListener("change", (e) => {
          if (e.target.value != 0) {
            e.target.parentElement.classList.add("active");
          } else {
            e.target.parentElement.classList.remove("active");
          }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      });
  }, []);
  return (
    <div className="RecommendedFilter-container">
      <Swiper
        slidesPerView="auto"
        // centeredSlides={true}
        spaceBetween={6}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation]}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className="nav-swiper RecommendedFilter"
      >
        {recommendedFilter.map((link, i) => {
          return (
            <SwiperSlide key={i} className="RecommendedFilter-slide">
                {
                  <RecommendedFIlterSlider
                    ID={"RecommendedFilter-" + i}
                    content={link.options}
                    title={link.title}
                  />
                }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
