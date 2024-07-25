import Image from "next/image";
import React, { useEffect, useState } from "react";
import RobesSwiper from "@/components/common/RobesSwiper";
export default function Robes({ robes, offer }) {
  const [mobile, setMobileWidth] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    // Check if the window object is available (browser environment)
    if (typeof window !== "undefined") {
      // Event listener for window resize
      const handleResize = () => {
        setMobileWidth(window.innerWidth <= 767);
      };

      // Set initial width
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <div className="robes !flex !h-fit gap-5 !overflow-visible max-lg:!flex-col">
      <div className="left !w-full !overflow-visible max-xl:!flex max-xl:!min-h-fit max-xl:!flex-col">
        <div className="big-image !w-full">
          {mobile ? (
            <Image
              src={robes.womanMobile}
              alt="main-image"
              className="!left-0 object-top"
            />
          ) : (
            <Image
              src={robes.woman}
              alt="main-image"
              className="!left-0 object-top"
            />
          )}
          <a
            href="/"
            className="robe-title relative z-10 !cursor-pointer !text-center !transition-all duration-300 hover:!bg-[#f0f0f0] max-lg:!bottom-[13px] max-lg:!left-[18px] max-lg:!h-[34px] max-lg:!w-[123px] max-lg:font-[500]"
          >
            الأرواب
          </a>
        </div>
        <div className="small-images !w-full max-xl:w-fit max-xl:!flex-wrap max-xl:!gap-x-[10px] max-lg:!static max-lg:flex max-lg:!h-fit max-lg:!flex-row max-lg:justify-center">
          {robes.leftRobes.map((robe, i) => {
            return (
              <div
                className="left-robe aspect-square max-lg:!flex max-lg:!h-auto max-lg:!w-[calc(50%_-_5px)] max-lg:!flex-col lg:border lg:border-[#EAEAEA]"
                key={i}
              >
                <div className="robe-image max-lg:flex max-lg:aspect-square max-lg:!h-full max-lg:!w-full max-lg:items-center max-lg:justify-center max-lg:bg-[#F3F3F3]">
                  <Image
                    src={robe.robeImage}
                    className="max-xl:object-contain max-lg:!h-[60%] max-lg:!w-auto"
                    alt={robe.title}
                  />
                </div>
                <a
                  href="/"
                  className="robe-title font-[400] max-lg:mt-1 max-lg:text-[13.79px]"
                >
                  {robe.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right !flex !min-h-fit flex-col-reverse !overflow-visible border border-[#EAEAEA] max-xl:mt-10 max-xl:!flex max-xl:!w-full lg:!hidden">
        <RobesSwiper robes={robes} />
        <div className="big-robe">
          <div className="robe-image !h-auto !w-[600px] max-md:!mt-[-47px]">
            <Image src={robes.bigRope} alt={"مناشف"} />
          </div>

          <div className="flex w-full flex-col items-center justify-around ">
            <div className="offer max-lg:mt-[-17px]">
              <Image src={offer} alt={"عرض"} />
            </div>
            <a
              href="/"
              className="relative z-10 !ml-[-80px] !mt-[0px] !hidden justify-center rounded-[9.19px] border border-[#EAEAEA] bg-[#FFFFFF] bg-opacity-70 !text-center !text-[20px] max-lg:!flex max-lg:!h-[34px] max-lg:!w-[123px] max-lg:font-[500]"
            >
              المناشف
            </a>
            <a
              href="/"
              className="!hidden h-10 w-32 items-center justify-center rounded-full bg-white bg-opacity-70 text-lg sm:!border sm:!border-[#EAEAEA] lg:!flex"
            >
              المناشف
            </a>
          </div>
        </div>
      </div>
      <div className="right !min-h-fit !overflow-visible max-lg:!hidden max-lg:!w-full max-lg:!pr-0">
        {robes.rightRobes.map((robe, i) => {
          return (
            <div
              key={i}
              className="right-robe max sm:!border sm:!border-[#EAEAEA]"
            >
              <div className="robe-image">
                <Image src={robe.robeImage} alt={robe.title} />
              </div>
              <a href="/" className="robe-title">
                {robe.title}
              </a>
            </div>
          );
        })}

        <div className="big-robe">
          <div className="robe-image">
            <Image src={robes.bigRope} alt={"مناشف"} />
          </div>
          <div className="offer">
            <Image src={offer} alt={"عرض"} />
          </div>
          <a href="/" className="robe-title">
            المناشف
          </a>
        </div>
      </div>
    </div>
  );
}
