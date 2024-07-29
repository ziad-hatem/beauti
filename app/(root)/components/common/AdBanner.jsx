import React from "react";
import rightAd1 from "../../../../public/imgs/phones/adbigBanner1.png";
import rightAd2 from "../../../../public/imgs/phones/adbigBanner2.png";
import leftAd from "../../../../public/imgs/phones/adBanner.png";
import Image from "next/image";
const AdBanner = () => {
  return (
    <div className="flex gap-[14px] max-md:mx-[13px] max-md:flex-col-reverse">
      <div className="flex flex-col gap-[14px]">
        <Image
          src={rightAd1}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
        <Image
          src={rightAd2}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
      </div>
      <div>
        {" "}
        <Image
          src={leftAd}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AdBanner;
