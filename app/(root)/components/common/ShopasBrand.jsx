import Image from "next/image";
import React from "react";

const ShopasBrand = ({
  mainImg = "/imgs/kidsFashion/shopasbrand/img1.svg",
  brands=[
      {
        img: "/imgs/kidsFashion/shopasbrand/brand1.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand2.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand3.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand4.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand5.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand6.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand7.svg",
      },
      {
        img: "/imgs/kidsFashion/shopasbrand/brand8.svg",
      },
    ]
}) => {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-8 sm:flex-row">
      <Image
        src={mainImg ? mainImg : data.mainImg}
        width={100}
        loading="lazy"
        height={100}
        unoptimized
        className="mr-[12px] !h-[346px] w-auto max-sm:!w-full max-sm:bg-[#F5F5F5] sm:!h-[20%] lg:mr-[27px] xl:w-[250px]"
      />
      <div className="mx-auto mt-auto flex flex-wrap gap-[8px] max-md:w-[calc(100%_-_26px)] md:w-fit">
        {brands?.map((e, i) => {
          return (
            <div
              key={i}
              className="w-[22%] max-sm:w-[calc(50%_-_4px)] xl:h-[153px] xl:w-[153px] flex justify-center items-center flex-col gap-[6px]"
            >
              <div className="max-w-[121px] w-[100%] flex justify-center items-center">
              <Image
                src={e.img}
                width={100}
                unoptimized
                loading="lazy"
                height={100}
                className="h-full w-full"
              />
              </div>
              {e.title ? <div className="">{e.title}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopasBrand;
