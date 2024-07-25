import React from "react";
import Link from "next/link";
import Image from "next/image";
import smallBanner from "../../../../public/imgs/manFashion/far2.svg";

export default function MaleCard({ elementDash }) {
  return (
    <div
      className="pinkBigBrand-card relative !z-[0] !h-full !w-full"
      key={elementDash.title}
    >
      <div className="absolute right-[17px] top-[-8px] !z-[999] !h-[46px] !w-[80px]">
        <Image src={smallBanner} alt="" className="h-full w-full" />
        <div className="absolute top-0 mr-[13px] mt-[6px] flex flex-col">
          <p className=" !text-[10px] text-white">خصم حتي</p>
          <p className="!-mt-1 text-center !text-[16px] !font-[500] text-white">
            ٤٠ ٪
          </p>
        </div>
      </div>
      <Link key={elementDash.title} href={"/"} className="block w-full">
        <Image
          src={elementDash.img}
          alt=""
          unoptimized
          loading="lazy"
          className="!h-[100%] select-none rounded-bl-[17px] rounded-tl-[17px] rounded-tr-[17px] object-cover"
        />
      </Link>
      <p className="gray pinkBigBrand-title !flex !items-center !justify-center !bg-[#373967] !text-[13.3px] !text-white">
        {elementDash.title}
      </p>
    </div>
  );
}
