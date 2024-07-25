import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const WatchesBlocks = ({
  data = [
    {
      name: "شنط يد",
      img: "/imgs/banners/suitcase1.svg",
      mobileImg: "/imgs/banners/suitcase1.svg",
    },
    {
      name: "حقائب ظهر",
      img: "/imgs/banners/suitcase2.svg",
      mobileImg: "/imgs/banners/suitcase2.svg",
    },
    {
      name: "محفظة",
      img: "/imgs/banners/suitcase3.svg",
      mobileImg: "/imgs/banners/suitcase3.svg",
    },
    {
      name: "شنط سفر",
      img: "/imgs/banners/suitcase4.svg",
      mobileImg: "/imgs/banners/suitcase4.svg",
    },
  ],
  mainImg = "/imgs/banners/suitcase.svg",
  mobileImg = null,
  mainImgTitle,
  bgColor = "bg-[#023863]",
  color = "text-[#383838]"
}) => {
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
    <div className="womenSuitCase watchesBlocks mb-4 flex h-fit w-full flex-row items-start justify-center gap-[16px] max-md:flex-col">
      <div className="left w-fit max-xl:w-full">
        <div className="relative flex h-full w-full items-start">
          {
            mainImgTitle ? <h1 className={`name absolute top-[23px] px-[22.5px] py-[16px] translate-x-[-50%] left-[50%] text-[calc(7px_+_2vw)] ${bgColor} h-[48px] text-center justify-center items-center font-medium transition flex md:text-[17px] lg:group-hover:text-[#F39406] ${color} w-[56.4%]`}>
            {mainImgTitle}
            </h1> : null
          }
          <Image
            src={mobile && mobileImg !== null ? mobileImg : mainImg}
            width={700}
            height={700}
            unoptimized
            loading="lazy"
            className="h-full w-full object-contain xl:h-[499px] xl:w-[482px]"
          />
        </div>
      </div>
      <div className="right flex w-full flex-wrap justify-center gap-x-4 gap-y-[15px] xl:h-[499px] xl:w-[calc(100%_-_498px)]">
        {data.map((e, i) => {
          return (
            <Link
              href={"/"}
              className="group aspect-square h-[calc(40%_-_10px)] w-[calc(50%_-_10px)]  lg:h-[calc(50%_-_10px)] lg:w-[calc(50%_-_15px)]"
              key={i}
            >
              <div className="relative flex h-full w-full flex-col items-center">
                <div className="absolute top-0 z-[-10] h-[100%] flex flex-col-reverse w-full bg-[#F5F5F5] xl:h-[100%]">
                    <h1 className={`name text-[calc(7px_+_2vw)] ${bgColor} h-[48px] text-center justify-center items-center font-medium transition flex md:text-[17px] lg:group-hover:text-[#F39406] ${color}`}>
                    {e.name}
                    </h1>
                    <Image
                    src={mobile ? e.mobileImg : e.img}
                    width={100}
                    height={100}
                    unoptimized
                    className="mainImg object-cover !mt-0 w-auto mix-blend-multiply max-sm:top-3 sm:top-5 xl:h-fit xl:w-fit"
                    />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchesBlocks;
