import React from "react";
import Link from "next/link";
import Image from "next/image";
import smallBanner from "../../../../public/imgs/manFashion/far2.svg";

export default function BoysCard({ elementDash, smallBannerImg, bgColor, textColor, offerTextColor="text-[#CB0000]" }) {
  return (
    <div
      className="pinkBigBrand-card relative !z-[0] !h-[218px] !w-[174px]"
      key={elementDash.title}
    >
      <div className="absolute right-[17px] top-[-3px] !z-[999] flex !h-[45px] !w-auto max-md:right-4 md:!h-[46px] md:!w-[80px]">
        <Image src={smallBannerImg ? smallBannerImg : smallBanner} alt="" width={150} height={100} className="h-full w-full" />
        <div className="absolute top-0 mr-[15px] mt-1 flex flex-col md:mr-[13px] md:mt-2">
          <p className={`!text-[10px] ${textColor} md:!text-[10px]`}>خصم حتي</p>
          <p className={`!-mt-1 text-center !text-[16px] !font-[500] ${offerTextColor} md:!text-[16px]`}>
            ٤٠ ٪
          </p>
        </div>
      </div>
      <Link key={elementDash.title} href={"/"} className="block w-full">
        <Image
          src={elementDash.img}
          alt=""
          loading="lazy"
          className="!h-[100%] select-none rounded-bl-[17px] rounded-tl-[17px] rounded-tr-[17px]"
          width={300}
          height={300}
        />
      </Link>
      <p className={`gray ${bgColor ? bgColor : "!bg-[#07368A]"} pinkBigBrand-title !flex !items-center !justify-center !text-[13.3px] ${textColor ? textColor : "!text-white"}`}>
        {elementDash.title}
      </p>
    </div>
  );
}
