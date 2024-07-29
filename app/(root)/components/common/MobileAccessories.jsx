import React from "react";
import BannerSlider from "../banners/BannerSlider";
import { ManSlimBanner } from "@/data/fake";
``;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  babyBanner,
  babyMonth,
  babywears,
  boysBanner,
  mobileboysBanner2,
  tempmobileBanner,
} from "@/data/fashionData";
import Image from "next/image";
import Link from "next/link";

const BabyWearProduct = ({ product }) => {
  return (
    <div className="h-full w-full rounded-[13px] border border-[#E2E2E2] bg-white px-[5px] pt-[10px] mobileLg:px-[15px] mobileLg:pt-[15px]">
      <Image
        src={product.img}
        width={100}
        height={100}
        unoptimized
        className="mx-auto !h-[34.2vw] !w-full object-contain mobileLg:!h-[162px] mobileLg:!w-[calc(100%_-_0px)]"
      />
      <h2 className="mt-[2.5px] text-center text-[12px] font-[500] mobileLg:mt-[5px] mobileLg:text-[17px]">
        {product.title}
      </h2>
    </div>
  );
};
const MobileAccessories = ({ banner, data }) => {
  return (
    <div className="!h-fit bg-[#F5F5F5] pb-2 lg:py-6">
      <div className="!mx-auto !w-full lg:!w-[calc(100%_-_38px)]">
        <BannerSlider
          desktopBanners={banner ? banner : boysBanner}
          mobileBanners={mobileboysBanner2}
          swiperClass={
            "!h-[230px] mt-0 !w-auto md:!h-[297px] !rounded-none !mb-2 md:!mb-6"
          }
          className="max-md:!object-cover"
        />
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        grabCursor={true}
        navigation={false}
        loop={false}
        modules={[Autoplay]}
        breakpoints={{
          300: {
            spaceBetween: 12,
          },
          768: {
            spaceBetween: 18,
          },
        }}
        // autoplay={{
        //   // delay: 2500,
        //   // disableOnInteraction: true,
        //   // pauseOnMouseEnter: true
        // }}
        className={`h-fit !w-full max-lg:!mr-[5px] lg:!w-[calc(100%_-_38px)]`}
      >
        {data.map((e, i) => {
          return (
            <SwiperSlide
              key={i + "product"}
              className="!h-[45.95vw] max-h-[217px] !w-[36.25vw] max-w-[172px] md:!h-[217px] md:!w-[172px]"
            >
              <BabyWearProduct product={e} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileAccessories;