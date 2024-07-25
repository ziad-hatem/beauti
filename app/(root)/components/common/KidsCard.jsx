import Image from "next/image";
import React from "react";
import Stars2 from "../common/Stars2";
import { formatNumberInArabic } from "@/libs/formatNumber";
const KidsCard = ({ product }) => {
  return (
    <div className="">
      <div className="relative flex !h-[45.95vw] !max-h-[169px] w-full items-center justify-center rounded-[13.19px] border border-[#E9E9E9] bg-[#F5F5F5] px-3 py-4 lg:h-[160px]">
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="mix-blend-multiply"
        />
        <Image
          src={"/imgs/kidsFashion/basket.svg"}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="absolute bottom-0 left-0 mb-[6px] ml-[6px] !h-[23px] !w-[23px]"
        />
      </div>
      <div className="info">
        <h2 className="price mt-[7px] text-center text-[13px] font-[700] lg:text-[16px]">
          {formatNumberInArabic(product.originalPrice)} ر.س
        </h2>
        <p className="description mt-[6px] text-center text-[10px] lg:text-[12px]">
          حقيبة الكمبيوتر المحمول مع كيبورد و ماوس
        </p>
        <div className="mt-[7px] flex items-center justify-center gap-1">
          <Stars2 stars={product.stars} measures={[10.44, 10.44]} />
          <p className="mt-[1px] text-[10px] font-[700] text-[#F39406] md:text-[12.05px]">
            {product.stars}
          </p>
          <p className="mt-[1px] text-[10px] font-[700] text-[#838383] md:text-[12.05px]">
            ({product.reviews})
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsCard;
