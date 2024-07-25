import Image from "next/image";
import React, { useEffect, useState } from "react";

const ShoesProductCard = ({ product, offerbgColor, offerTextColor, cardbg="bg-[#F5F5F5]" }) => {
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

  const brandImg =
    product.brandImg == "string" ? product.brandImg : product.brandImg.img;
  const brandImgWidth = mobile ? brandImg?.mobile?.width : brandImg?.web?.width;
  const brandImgHeight = mobile
    ? brandImg?.mobile?.height
    : brandImg?.web?.height;

  return (
    <div className={`flex !h-[fit-content] !max-h-[244px] md:!h-[244px] !w-[36.25vw] !max-w-[151px] flex-col items-center justify-center ${cardbg}`}>
      <Image
        src={product.img}
        width={100}
        unoptimized
        height={100}
        loading="lazy"
        className="!h-[calc(100%-23px)] !w-[100%] object-contain md:!h-[calc(100%-31px)]"
      />
      <div
        className={`title flex h-[23px] md:h-[31px] w-full items-center justify-center text-[16px] font-[500] md:text-[20px]`}
        style={{
          color: `${offerTextColor}`, background: `${offerbgColor.includes("linear") ? offerbgColor : offerbgColor}`,
        }}
      >
        {product.title}
      </div>
      {/* <div className="flex h-[60px] w-full items-center justify-center">
        {console.log(brandImg)}
        {brandImg && (
          <Image
            src={brandImg}
            unoptimized
            loading="lazy"
            style={{
              width: `${brandImgWidth}px`,
              height: `${brandImgHeight}px`,
            }}
          />
        )}
      </div> */}
    </div>
  );
};

export default ShoesProductCard;
