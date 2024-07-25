import Image from "next/image";
import React from "react";

const data = [
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "ملابس عربية",
    offer: "تبدأ من ٣٠٪",
  },
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "الهوديز",
    offer: "تصل حتى ٧٠٪",
  },
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "الأطقم",
    offer: "تبدأ من ٤٠٪",
  },
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "القمصان",
    offer: "تبدأ من ٥٠٪",
  },
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "الجاكيتات",
    offer: "تصل حتى ٨٥٪",
  },
  {
    image: "/imgs/manFashion/beautyOffers/img",
    name: "الملابس الرياضية",
    offer: "تبدأ من ٣٠٪",
  },
];

const BeautyOffers = () => {
  return (
    <div className="mx-auto flex h-fit gap-x-[6px] gap-y-[15px] max-lg:w-[calc(100%_-_28px)] max-lg:flex-wrap max-lg:items-center max-lg:justify-center lg:gap-[26.2px]">
      {data.map((e, i) => {
        const imgSrc = e.image + ++i + ".svg";
        return (
          <div key={i} className="h-fit w-[calc(33.33%_-_6px)]">
            <Image
              src={imgSrc}
              width={100}
              height={100}
              className="h-full w-full"
            />
            <h1 className="mt-[13px] text-center text-[calc(8px_+_1vw)] font-[700] text-[#383838] md:text-[18px]">
              {e.name}
            </h1>
            <p className="mt-[10px] text-center text-[13px] font-medium text-[#BD0000] lg:mt-[15px] lg:text-[20px]">
              {e.offer}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BeautyOffers;
