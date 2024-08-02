import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <div
      className="group relative flex aspect-square h-[calc(50vw_-_19px)] cursor-pointer items-end justify-center max-md:w-[calc(50vw_-_19px)] md:h-[222px] md:w-[222px]"
      style={{
        backgroundColor: product.bg,
      }}
    >
      <div className="">
        <div className="absolute left-0 top-0 h-full w-full group-hover:bg-black group-hover:opacity-5" />
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="relative z-10 !h-[180px] w-auto mix-blend-multiply md:!h-[244px]"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[72px] w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-white bg-opacity-70">
        <Image
          src={product.logo}
          unoptimized
          loading="lazy"
          className="h-[46px] w-auto object-contain transition-all group-hover:h-[48px]"
        />
      </div>
    </div>
  );
};

const BeautyProductMakeup = ({ data }) => {
  return (
    <div className="flex h-fit items-center justify-center max-md:flex-wrap max-md:gap-x-[12px] max-md:gap-y-[55px] md:gap-[27.67px]">
      {data.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
};

export default BeautyProductMakeup;
