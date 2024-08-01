import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <div
      className="group relative flex aspect-square h-[222px] w-[222px] cursor-pointer items-end justify-center"
      style={{
        backgroundColor: product.bg,
      }}
    >
      <div className="">
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="!h-[244px] w-auto mix-blend-multiply"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-[72px] w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-white bg-opacity-70">
        <Image
          src={product.logo}
          unoptimized
          loading="lazy"
          className="h-auto w-[80%] object-contain transition-all group-hover:w-[95%]"
        />
      </div>
    </div>
  );
};

const BeautyProductMakeup = ({ data }) => {
  return (
    <div className="flex h-fit gap-[27.67px]">
      {data.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
};

export default BeautyProductMakeup;
