"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/libs/useWindowSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
const BannerSlider = ({
  desktopBanners,
  swipeStyle = "",
  mobileBanners,
  swiperClass,
  className = "",
}) => {
  const [bannersDash, setBanners] = useState(desktopBanners);
  let screenWidth = useWindowSize().width;

  useEffect(() => {
    if (screenWidth > 640) {
      setBanners(desktopBanners);
    } else {
      setBanners(mobileBanners ?? desktopBanners);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);
  return (
    <>
      <Swiper
        className={`mySwiper-1 rounded-lg md:relative lg:rounded-20 ${swiperClass}`}
        slidesPerView={1}
        loop={true}
        effect={swipeStyle}
        fadeEffect={{
          crossFade: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} rounded-full transition"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        grabCursor={true}
        // autoplay={{
        //   delay: 4000,
        // pauseOnMouseEnter: true
        // }}
      >
        {bannersDash.map((banner, i) => (
          <SwiperSlide key={i}>
            <Link href={banner.href}>
              <Image
                unoptimized
                src={banner.img}
                loading="lazy"
                className={`!w-full select-none object-cover md:mb-0 ${className}`}
                alt="hero-banner"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BannerSlider;

{
  /* <div className="scale-me-right absolute -right-1 top-0 z-10 order-1 hidden h-full w-6 origin-right md:block  ">
  <svg
    width="44"
    height="501"
    viewBox="0 0 44 501"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="curve-right h-full w-full"
  >
    <path
      className="wave"
      d="M42.9999 0.5C11 200 1 193.5 1 249C1 304.5 14.5 312.5 42.9999 500.5V0.5Z"
      fill="#f3940633"
    ></path>
  </svg>
</div>

<div className="scale-me-left absolute -left-1 top-0 z-10 order-1 hidden h-full w-6 origin-left md:block  ">
  <svg
    width="44"
    height="502"
    viewBox="0 0 44 502"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="curve left h-full w-full"
  >
    <path
      className="wave"
      d="M0.999973 501C32.9999 301.5 42.9999 308 42.9999 252.5C42.9999 197 29.4999 189 1.00002 0.999996L0.999973 501Z"
      fill="#f3940633"
    ></path>
  </svg>
</div> */
}
