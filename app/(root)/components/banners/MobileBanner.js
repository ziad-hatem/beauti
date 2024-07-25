"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const MobileBanner = ({ banners }) => {
  return (
    <div className="my-3 lg:hidden">
      <Swiper
        className={`mySwiper-mobile lg:rounded-20 relative rounded-lg`}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        grabCursor={true}
        // autoplay={{
        //   delay: 2500,
        // disableOnInteraction: true,
        // pauseOnMouseEnter: true
        // }}
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.href}
            className="flex h-full !w-[calc(100%_-_70px)] items-center sm:!w-[calc(100%_-_130px)]"
          >
            <Link href={banner.href}>
              <Image
                src={banner.img}
                className="w-full object-cover"
                alt="hero-banner"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MobileBanner;
