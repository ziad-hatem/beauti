import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import {
  leftlinks2,
  leftlinks3,
  rightlinks2,
  rightlinks3,
} from "../../data/fashionData";
import { formatNumberInArabic } from "@/libs/formatNumber";
const LessThanComponent = ({
  price,
  title,
  right,
  left,
  color,
  hoverColor,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`relative flex h-[17.19vw] w-[29.375vw] flex-col items-center justify-center gap-1 rounded-xl bg-white pb-[5.11px] pt-[9.74px] max-md:max-h-[85px] max-md:max-w-[140px] md:h-[90px] md:w-[180px]`}
      style={{
        left: left && left + "vw",
        right: right && right + "vw",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={"/"}
        className="flex h-[7vw] w-[23.125vw] items-center justify-center rounded-full transition-all hover:bg-[#DDDDDD] max-md:max-h-[35px] max-md:max-w-[116px] md:h-[44px] md:w-[146px]"
        style={{
          backgroundColor: hover ? hoverColor : color,
        }}
      >
        <div className="text-[calc(7px_+_1vw)] text-black md:text-xl">
          {title}
        </div>
      </Link>
      <div className="mb-[5.11px] text-[calc(7px_+_1vw)] text-[#606060] md:text-xl">
        أقل من {formatNumberInArabic(price)} ريال
      </div>
    </div>
  );
};
export default function ShopasPrice3({
  img = "/imgs/bigGirlImage2.svg",
  mobileImg = "/imgs/bigGirlImage.svg",
  gap = "40",
  className = "",
}) {
  return (
    <section className="mt-8 w-full  bg-[#FAFAFA] md:mb-10 md:mt-10 xl:!min-h-[570px]">
      <div className="flex w-full !justify-center !px-4 !py-3">
        <h2 className="mb-[33px mt-[18px] text-[13px] font-[400] text-black md:mb-[25px] md:mt-[24px] md:text-[22px]">
          عروض بيوتي عبايات البنات
        </h2>
      </div>
      <div className="flex max-h-full w-full justify-center gap-0">
        <div
          className={`flex flex-col max-lg:mb-[30px] max-lg:ml-[-10px] ${className}`}
        >
          {leftlinks3.map((e, i) => {
            return <LessThanComponent key={i} {...e} />;
          })}
        </div>
        <Image
          src={img}
          width={100}
          height={100}
          unoptimized
          className="relative z-10 mt-auto hidden h-full w-auto object-cover mix-blend-multiply md:block"
        />
        <Image
          src={mobileImg}
          width={100}
          height={100}
          unoptimized
          className="relative z-10 mb-4 block h-full w-[calc(106px_+_10vw)] object-cover mix-blend-multiply md:hidden"
        />
        <div
          className={`relative flex flex-col max-lg:mb-[30px] max-lg:mr-[-10px] ${className}`}
        >
          {rightlinks3.map((e, i) => {
            return <LessThanComponent key={i} {...e} />;
          })}
        </div>
      </div>
    </section>
  );
}
