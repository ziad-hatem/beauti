import Image from "next/image";
import React, { useEffect, useState } from "react";

const GirlProductCard = ({ product, offerbgColor, offerTextColor, bg }) => {
  const [mobile, setMobileWidth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setMobileWidth(window.innerWidth <= 767);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className={`flex !h-[71.9vw] !max-h-[294px] !w-[36.25vw] !max-w-[148px] flex-col items-center justify-center ${bg}`}
    >
      <Image
        src={product.img}
        width={100}
        unoptimized
        height={100}
        loading="lazy"
        className="!h-[190px] !w-full object-contain"
      />
      <div
        className={`title flex h-[44px] w-full items-center justify-center text-[16px] font-[400] md:text-[20px]`}
        style={{
          color: offerTextColor,
          backgroundColor: offerbgColor,
        }}
      >
        {product.title}
      </div>
      <div className="flex h-[60px] w-full items-center justify-center bg-[#F5F5F5]">
        <Image
          src={product.brandImg}
          unoptimized
          loading="lazy"
          className="h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default GirlProductCard;
