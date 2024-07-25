import React, { useEffect, useState } from "react";
import CardNoButton from "@/components/common/CardNoButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function CardNoButtonSlider({
  products,
  heart = true,
  backgroundColor = "#FF9697",
  imgbgColor,
  textColor = "#FFF",
  HeaderText,
  seaAllColor = "#383838",
  centeredSlides = false,
}) {
  const [leastprice, setLeastprice] = useState(0);

  useEffect(() => {
    let maxDiscount = 0;
    products.forEach((item) => {
      const discount = Math.trunc(
        (1 - item.offerPrice / item.originalPrice) * 100,
      );
      if (discount > maxDiscount) {
        maxDiscount = discount;
      }
    });
    setLeastprice(maxDiscount);
  }, [products]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const leastPriceElement = document.querySelector(
        ".noButtonSwiper-section .leastprice",
      );
      if (leastPriceElement) {
        leastPriceElement.innerHTML = "خصم حتى " + leastprice + "%";
      }
    }
  }, [leastprice]);

  return (
    <section className="noButtonSwiper-section !mr-[5px] !h-fit !bg-none !p-0 !pt-2">
      <div className="section-title !text-[#383838] md:!mt-0">
        <h2 className="">
          {HeaderText} | <span className="leastprice"></span>
        </h2>
        <div className={`displayAll !bg-[${seaAllColor}] !text-white`}>
          <a href="/">عرض الكل</a>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={9}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className="noButtonSwiper"
      >
        {products.map((item, i) => (
          <SwiperSlide key={i + "product"} className="relative !w-fit">
            {heart && (
              <div className="card-heart absolute left-0 top-0 ml-[11.61px] mt-[8.65px] max-md:ml-[13px] max-md:mt-[12px]">
                <svg
                  width="17.31"
                  height="15.87"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    id="Vector"
                    d="M15.0333 4.43668C16.0667 4.43668 16.9044 5.27441 16.9044 6.30779M10.3556 3.69061L10.9965 3.03335C12.9901 0.988886 16.2223 0.988884 18.2159 3.03334C20.156 5.0229 20.2156 8.22924 18.3509 10.2932L12.9936 16.223C11.5703 17.7983 9.14078 17.7983 7.71754 16.223L2.36023 10.2932C0.495532 8.22927 0.555143 5.02292 2.49521 3.03336C4.48881 0.988896 7.72107 0.988898 9.71467 3.03336L10.3556 3.69061Z"
                    stroke="#F39406"
                    strokeWidth="1.98118"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <CardNoButton
              product={item}
              bgColor={backgroundColor}
              imgbgColor={imgbgColor}
              textColor={textColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
