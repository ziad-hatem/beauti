import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ img, brand }) => (
  <Link
    href={"/"}
    className="group flex h-auto w-[calc(100vw_-_10px)] flex-col justify-center overflow-hidden rounded-[20px] bg-[#F5F5F5] md:w-[221px]"
  >
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-full group-hover:bg-black group-hover:opacity-20" />
      <Image
        src={img}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="w-full transition-all group-hover:scale-105"
      />
    </div>
    <div className="relative z-10 flex h-[47px] w-full items-center justify-center bg-[#F5F5F5]">
      <Image
        src={brand}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="h-auto"
      />
    </div>
  </Link>
);

const ShopasBrand2 = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-[29px]">
      {data.map((phone, index) => (
        <Product {...phone} key={index} />
      ))}
    </div>
  );
};

export default ShopasBrand2;
