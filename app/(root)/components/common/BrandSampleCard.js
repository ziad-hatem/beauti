import Image from "next/image";
import React, { useEffect, useState } from "react";

const BrandSampleCard = ({ product }) => {
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
    <div className="flex !h-[71.9vw] !max-h-[188px] max-md:!h-fit !w-[auto] !max-w-[108px] flex-col items-center justify-between">
        <div>
            <Image
                src={product.img}
                width={100}
                unoptimized
                height={100}
                loading="lazy"
                className="!h-[auto] !w-[auto] max-w-[100%] max-h-[156px] max-md:!h-[calc(37vw-20px)]"
            />
        </div>
      {/* <div
        className={`title flex h-[44px] w-full items-center justify-center !bg-[${offerbgColor}] text-[16px] font-[500] md:text-[20px]`}
        style={{
          color: offerTextColor,
        }}
      >
        {product.title}
      </div> */}
      <div className="flex w-full items-center justify-center">
        {brandImg && (
          <Image
            src={brandImg}
            unoptimized
            loading="lazy"
            style={{
              width: `100%`,
              height: `32px`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BrandSampleCard;
