"use client";
import BannerSlider from "./BannerSlider";
import useWindowSize from "@/libs/useWindowSize";
const DoubleBanner = ({
  doubleClass,
  rightBanners,
  leftBanners,
  classNames = "",
}) => {
  const screenWidth = useWindowSize().width;
  const allBanners = [...rightBanners, ...leftBanners];
  return (
    <div
      className={`BannerSlider double-BannerSlider my-10 flex flex-col items-center  justify-center gap-3 lg:flex-row ${classNames}`}
    >
      <div className="h-full w-full lg:w-[calc(50%_-_6px)]">
        <BannerSlider
          desktopBanners={screenWidth > 1023 ? rightBanners : allBanners}
          swiperClass={`${doubleClass}-double-one`}
        />
      </div>
      <div className="hidden h-full lg:block lg:w-[calc(50%_-_6px)]">
        <BannerSlider
          desktopBanners={leftBanners}
          swiperClass={`${doubleClass}-double-two`}
        />
      </div>
    </div>
  );
};
export default DoubleBanner;
