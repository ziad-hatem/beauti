import Image from "next/image";
import React from "react";
import img1 from "/public/imgs/manFashion/shopasPrice/img1.svg";
import img2 from "/public/imgs/manFashion/shopasPrice/img2.svg";
import img3 from "/public/imgs/manFashion/shopasPrice/img3.svg";
import img4 from "/public/imgs/manFashion/shopasPrice/img4.svg";
import Link from "next/link";

const ShopasPrice = ({
  img = "/imgs/womenFashion/shirt.png",
  position,
  circles = [
    {
      img: img1,
      lessThan: "٩٩",
    },
    {
      img: img2,
      lessThan: "١٩٩",
    },
    {
      img: img3,
      lessThan: "٢٩٩",
    },
    {
      img: img4,
      lessThan: "٣٩٩",
    },
  ],
  color,
}) => {
  return (
    <div>
      <div className="flex min-h-[188px] flex-row items-center justify-center gap-3 max-md:flex-col md:bg-[#FAFAFA]">
        <div
          className="relative z-[2] my-2 flex !w-full items-center justify-center gap-[16px] bg-[#fafafa] py-5 md:my-0 md:!w-auto md:flex-row lg:bg-transparent"
          style={{ flex: "0 0 auto" }}
        >
          <h1 className={`${color} text-[15px] md:mr-6 xl:text-[20px]`}>
            تسوق حسب السعر
          </h1>
          <Image
            src={img}
            width={100}
            unoptimized
            loading="lazy"
            height={100}
            className={`relative h-[141px] w-[125px] object-contain mix-blend-multiply ${position}`}
          />
        </div>
        <div
          className="mb-1 ml-[19px] flex flex-1 items-center gap-[15px] max-md:mx-[13px] lg:w-fit lg:flex-row xl:justify-center xl:gap-[34px]"
          style={{ flex: "1 1 auto" }}
        >
          {circles.map((e, i) => (
            <Link
              href={"/"}
              key={i}
              className="h-auto w-[calc(25%_-_11px)] xl:h-[127px] xl:w-[127px]"
            >
              <Image
                src={e.img}
                alt={e.lessThan}
                width={100}
                loading="lazy"
                height={100}
                className="h-full w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopasPrice;
