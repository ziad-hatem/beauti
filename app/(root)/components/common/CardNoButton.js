import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import { formatNumberInArabic } from "@/libs/formatNumber";

export default function CardNoButton({
  product,
  bgColor,
  imgbgColor = "#F5F5F5",
  textColor,
}) {
  return (
    <div className="cardNoButton !h-[265px] !w-[183px]">
      <div
        className={`img-container relative !flex !h-[220px] !w-full !items-center !justify-center p-3 !bg-[${imgbgColor}]`}
      >
        <Image
          src={product.img}
          alt={product.title}
          className="!h-[calc(100%-30px)] w-[auto] mb-auto object-contain mix-blend-multiply"
        />
        {/* <span className="love"></span> */}
        {/* <span className="rating absolute bottom-0 right-0">HE</span> */}
        {/* <div className="card-rating-container absolute bottom-0 right-0 mb-[40px] mr-[7px] flex items-center justify-between rounded-[6px] bg-white px-[1px] text-[8px] lg:text-sm">
          <Rating stars={product.stars} reviews={product.reviews} />
        </div> */}
      </div>
      <div className="relative z-10 mt-[-30px]">
        <div
          className={`name !flex !h-[29px] !items-center !justify-center`}
          style={{
            backgroundColor: bgColor ? bgColor : "#f39406",
          }}
        >
          <h2 className={`!text-[12px] !text-[${textColor}]`}>
            {product.title}
          </h2>
        </div>
        <div
          className={`offer !flex !h-[30px] !items-center !justify-center !text-[15px]`}
        >
          خصم يصل الى{" "}
          {formatNumberInArabic(
            Math.trunc((1 - product.offerPrice / product.originalPrice) * 100),
          )}
          %
        </div>
        <div className="static-text !h-[15px] !items-center !justify-center !text-[9px]">
          عرض لفترة محدودة
        </div>
      </div>
    </div>
  );
}
