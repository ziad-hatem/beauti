import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PathRoomSupplies({
    dir,
  data = [
    {
      name: "مناشف",
      img: "/imgs/banners/suitcase1.svg",
      mobileImg: "/imgs/banners/suitcase1.svg",
    },
    {
      name: "دعاسات",
      img: "/imgs/banners/suitcase2.svg",
      mobileImg: "/imgs/banners/suitcase2.svg",
    },
    {
      name: "مرايا",
      img: "/imgs/banners/suitcase3.svg",
      mobileImg: "/imgs/banners/suitcase3.svg",
    },
    {
      name: "اكسسوارات",
      img: "/imgs/banners/suitcase4.svg",
      mobileImg: "/imgs/banners/suitcase4.svg",
    },
    {
      name: "ستائر",
      img: "/imgs/banners/suitcase4.svg",
      mobileImg: "/imgs/banners/suitcase4.svg",
    },
    {
      name: "رفوف",
      img: "/imgs/banners/suitcase4.svg",
      mobileImg: "/imgs/banners/suitcase4.svg",
    },
  ],
  mainImg = "/imgs/banners/suitcase.svg",
  mobileImg = null,
  mainImgTitle,
  bgColor = "bg-[#F5F5F5]",
  color = "text-[#000]"
}){
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
    <div className={`womenSuitCase watchesBlocks mb-4 flex h-fit w-full items-start justify-center gap-[22px] max-md:flex-col ${dir ? dir : "flex-row items-center" } max-md:px-[13px]`}>
      <div className="left w-full md:w-[50%] md:max-w-[481px]">
        <div className="relative flex h-full w-full items-start">
          {
            mainImgTitle ? <h1 className={`name absolute bottom-[22px] px-[22.5px] py-[16px] left-[27px] text-[calc(7px_+_2vw)] ${bgColor} h-[48px] text-center justify-center items-center transition flex md:text-[20px] font-[600] lg:group-hover:text-[#F39406] ${color} w-[56.4%]`}>
            {mainImgTitle}
            </h1> : null
          }
          <Image
            src={mobile && mobileImg !== null ? mobileImg : mainImg}
            width={700}
            height={700}
            unoptimized
            loading="lazy"
            className="h-full w-full object-contain md:h-[100%]"
          />
        </div>
      </div>
      <div className="right grid grid-cols-2 sm:grid-cols-3 gap-x-[10px] md:gap-x-[18px] justify-center md:gap-y-[35px] gap-y-[10px] md:w-[50%] md:max-w-[468px] w-full">
        {data.map((e, i) => {
          return (
            <Link
              href={"/"}
              className="group overflow-hidden rounded-t-[20px] aspect-[144/182]"
              key={i}
            >
              <div className="relative flex h-full w-full flex-col items-center">
                <div className="top-0 z-[-10] h-[100%] flex flex-col-reverse w-full xl:h-[100%]">
                    <h1 className={`name text-[calc(7px_+_2vw)] ${bgColor} h-[38px] text-center justify-center items-center font-medium transition flex md:text-[19px] lg:group-hover:text-[#F39406] ${color} absolute bottom-0 left-0 w-full z-10`}>
                    {e.name}
                    </h1>
                    <Image
                    src={mobile ? e.mobileImg : e.img}
                    width={100}
                    height={100}
                    unoptimized
                    className="mainImg object-cover w-[100%] aspect-square !mt-0 h-auto mix-blend-multiply max-sm:top-3 sm:top-5 "
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