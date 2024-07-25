import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { leftlinks4, rightlinks4 } from "../../data/fashionData";
import { formatNumberInArabic } from "@/libs/formatNumber";
const LessThanComponent = ({ price, title, color = "#FFFFFF", hover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex h-[17.2vw] w-[29.4vw] flex-col items-center justify-center gap-1 rounded-xl bg-white pb-[5.11px] pt-[9.74px] max-md:max-h-[85px] max-md:max-w-[140px] md:h-[90px] md:w-[180px]`}
    >
      <Link
        href={"/"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex h-[7vw] w-[23.1vw] items-center justify-center rounded-full transition-all max-md:max-h-[35px] max-md:max-w-[116px] hover:!bg-[${hover}] md:h-[44px] md:w-[146px]`}
        style={{
          backgroundColor: isHovered ? hover : color,
        }}
      >
        <div className="text-[calc(7px_+_1vw)] text-black md:text-xl">
          {title}
        </div>
      </Link>
      <div className="mb-[2px] text-[#606060] max-md:text-[calc(7px_+_1vw)]">
        أقل من {formatNumberInArabic(price)} ريال
      </div>
    </div>
  );
};
export default function ShopasPrice2({
  img = "/imgs/bigGirlImage2.png",
  mobileImg = "/imgs/bigGirlImage.svg",
  gap = "40",
  className = "",
  color = "#F5F5F5",
  leftlink = leftlinks4,
  rightlink = rightlinks4,
}) {
  return (
    <section
      className={`mt-8 w-full bg-[${color}] md:mb-10 md:mt-10 xl:!min-h-[570px]`}
    >
      <div className="flex w-full !items-center !justify-center md:!px-4 md:!pb-3 md:pt-3">
        <h2 className="!mb-8 !mt-6 text-[13px] font-[400] text-black max-md:!mb-[30px] max-md:!mt-[18px] md:text-[22px]">
          تسوق حسب السعر
        </h2>
      </div>
      <div className="flex max-h-full w-full justify-center gap-0 md:justify-evenly lg:gap-5">
        <div
          className={`flex flex-col gap-5 pr-[17.72px] lg:gap-[${gap}px] ${className}`}
        >
          {leftlink.map((e, i) => {
            return <LessThanComponent key={i} {...e} />;
          })}
        </div>
        <Image
          src={img}
          width={100}
          height={100}
          unoptimized
          className="relative z-10 mt-auto hidden h-fit w-fit object-cover mix-blend-multiply md:block"
        />
        <Image
          src={mobileImg}
          width={100}
          height={100}
          unoptimized
          className="relative z-10 mb-4 block h-full w-[calc(106px_+_10vw)] object-cover mix-blend-multiply md:hidden"
        />
        <div
          className={`relative right-[-15px] flex flex-col gap-5 xl:gap-[${gap}px] ${className}`}
        >
          {rightlink.map((e, i) => {
            return <LessThanComponent key={i} {...e} />;
          })}
        </div>
      </div>
    </section>
  );
}
