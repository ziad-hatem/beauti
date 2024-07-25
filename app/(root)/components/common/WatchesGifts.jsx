import WatchesSectionSwiper from "@/components/common/WatchesSectionSwiper";
import { dailyOffers } from "@/data/fake";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleCardNoButtonSlider from "./SimpleCardNoButtonSlider";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CardsSlider from "./CardsSlider";
import { watchesEconomy } from "@/data/fashionData";

const WatchesGifts = ({ mainImg, bgcolor, Linkscolor ,bgHover, active, watchesData = [],linksBg = "none",linkshover="hover:text-[#F5F5F5]" }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <div>
      <div className="flex w-full flex-col-reverse gap-[17px]">
        <div className="flex md:h-[291px] flex-col md:flex-row mb-3">
          <div className="relative flex-initial md:max-h-[400px] md:min-w-[250px] max-w-[100%] md:max-w-[calc(100%_-_20px)] max-md:mx-[13px] mb-[13px] md:mb-0 mr-[16px] ml-[10px] mix-blend-multiply">
            <Image
              src={mainImg}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <CardsSlider
            products={watchesData}
            className="!h-[252px] !w-[130px] md:!h-[291px] md:!w-[149px] !mt-0"
          />
        </div>
        <div className="flex !h-fit flex-col justify-around rounded-lg w-[100%] max-md:px-[13px]">
          <div className={`header !h-[42px] ${bgcolor}`}>
            <WatchesSectionSwiper bg={linksBg} bgHover={bgHover} Linkscolor={Linkscolor} linkshover={linkshover} bgActive={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchesGifts;
