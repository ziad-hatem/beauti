import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ img, brand }) => (
  <Link
    href={"/"}
    className="flex h-auto w-[calc(100vw_-_10px)] flex-col justify-center overflow-hidden rounded-[20px] bg-[#F5F5F5] md:w-[221px]"
  >
    <div>
      <Image
        src={img}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="w-full"
      />
    </div>
    <div className="mb-[10px] mt-[10px] flex h-full w-full items-center justify-center">
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
