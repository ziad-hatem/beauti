import React from "react";
import Link from "next/link";
import Image from "next/image";
import smallBanner from "../../../../public/imgs/far 2.png";

export default function FitBudgetProduct({ elementDash }) {
  return (
    <div className="pinkBigBrand-card relative !z-[0]" key={elementDash.name}>
      <div className="absolute right-[17px] top-[-7px] !z-[999] !h-[46px] !w-[80px]">
        <Image
          src={smallBanner}
          width={100}
          height={100}
          unoptimized
          alt=""
          className="h-full w-full"
        />
        <div className="absolute top-0 mr-[15px] mt-1 flex flex-col md:mt-2">
          <p className="!text-[10px]">خصم حتي</p>
          <p className="!-mt-1 text-center !text-[16px] !font-[500] text-[#CB0000]">
            ٤٠ ٪
          </p>
        </div>
      </div>
      <Link key={elementDash.name} href={"/"} className="block w-full">
        <Image
          src={elementDash.img}
          alt=""
          className="!h-[100%] !w-[174px] select-none rounded-bl-[17px] rounded-tl-[17px] object-cover"
          width={100}
          height={100}
          unoptimized
        />
      </Link>

      <p className="gray pinkBigBrand-title !flex w-[80%] !items-center !justify-center !bg-[#FFF6F3] !text-[13.3px] !text-black">
        {elementDash.title}
      </p>
    </div>
  );
}
