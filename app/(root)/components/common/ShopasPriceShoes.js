import Image from "next/image";
import React from "react";
import img1 from "/public/imgs/manFashion/shopasPrice/img1.svg";
import img2 from "/public/imgs/manFashion/shopasPrice/img2.svg";
import img3 from "/public/imgs/manFashion/shopasPrice/img3.svg";
import img4 from "/public/imgs/manFashion/shopasPrice/img4.svg";
import Link from "next/link";

const ShopasPriceShoes = ({
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
}) => {
  return (
    <div>
      <div className="flex min-h-[188px] flex-row items-center justify-center max-md:flex-col md:bg-[#FAFAFA]">
        <div
          className={`my-2 h-[188px] max-md:h-[135px] relative z-[2] flex !w-full items-center justify-center max-md:mb-[13px] max-md:bg-[#FAFAFA] bg-transparent md:my-0 md:!w-auto md:flex-row lg:bg-transparent md:${position}`}
          style={{ flex: "0 0 auto" }}
        >
          <h1 className="text-[15px] xl:text-[20px]">أحذية حسب الميزانية</h1>
          <Image
            src={img}
            width={200}
            loading="lazy"
            height={300}
            className={`h-[100%] w-[164px] object-contain mix-blend-multiply max-md:w-[123px] max-md:h-[135px] relative ml-[-38%]`}
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

export default ShopasPriceShoes;
