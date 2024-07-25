import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import { formatNumberInArabic } from "@/libs/formatNumber";

export default function ShoesTopSliderCard({
  product,
  bgColor,
  imgbgColor = "#F5F5F5",
  textColor,
  bgHeight,
}) {
  return (
    <div className="cardNoButton sm:!h-[163px] sm:!w-[163px] xs:!h-[26vw] xs:max-h-[163px] xs:!w-[26vw] xs:max-w-[163px]">
      <div
        className={`img-container relative !flex !w-full !items-center !justify-center sm:h-[133px] xs:h-[calc(100%-16px)]`}
      >
        <div className={`backgroundElement absolute top-[50%] translate-y-[-50%] left-[0px] z-[-1] ${ bgHeight ? bgHeight : "h-[86%]"} w-[100%] !bg-[${imgbgColor}]`}></div>
        <Image
          src={product.img}
          alt={product.title}
          className="!h-[100%] w-[100%] object-contain mix-blend-multiply"
        />
        {/* <span className="love"></span> */}
        {/* <span className="rating absolute bottom-0 right-0">HE</span> */}
        {/* <div className="card-rating-container absolute bottom-0 right-0 mb-[40px] mr-[7px] flex items-center justify-between rounded-[6px] bg-white px-[1px] text-[8px] lg:text-sm">
          <Rating stars={product.stars} reviews={product.reviews} />
        </div> */}
      </div>
      <div className="">
        <div
          className={`name !flex sm:!h-[30px] xs:!h-[15px] !items-center !justify-center`}
          style={{
            backgroundColor: bgColor ? bgColor : "#f39406",
          }}
        >
          <h2 className={`sm:!text-[15px] xs:text-[calc(0.7vw+8px)]`} style={{color:textColor,fontWeight: 600}}>
            {product.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
