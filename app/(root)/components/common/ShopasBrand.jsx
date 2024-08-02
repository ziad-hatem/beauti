import Image from "next/image";
import React from "react";

const Brand = ({ title, img, className }) => (
  <div className="!w-[ group flex flex-col gap-3">
    <div
      className={`flex aspect-square !h-auto !w-[calc(50vw_-_17px)] max-w-[200px] items-center justify-center rounded-full bg-[#F5F5F5] group-hover:bg-[#EAEAEA] md:max-h-[153px] md:max-w-[153px]`}
    >
      <Image
        src={img}
        width={100}
        unoptimized
        loading="lazy"
        height={100}
        className="h-auto max-h-full w-auto max-w-full mix-blend-multiply"
      />
    </div>
    {title ? <div className="">{title}</div> : null}
  </div>
);

const ShopasBrand = ({
  mainImg = "/imgs/kidsFashion/shopasbrand/img1.svg",
  brands = [
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
  ],
}) => {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-8 lg:flex-row">
      <div className="max-sm:bg-[#F5F5F5]">
        <Image
          src={mainImg ? mainImg : data.mainImg}
          width={100}
          loading="lazy"
          height={100}
          unoptimized
          className="mr-[12px] !h-[346px] w-auto !mix-blend-multiply max-sm:!w-full  sm:!h-[20%] lg:mr-[27px] xl:w-[250px]"
        />
      </div>
      <div className="mx-auto mt-auto hidden w-fit gap-[8px] lg:flex">
        {brands?.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <div className="flex w-full flex-col gap-3" key={i}>
              <Brand {...e} key={i} />
              {brands[i + 1] && <Brand {...brands[i + 1]} key={i + 1} />}
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-auto hidden w-full flex-wrap justify-center gap-[8px] max-lg:flex">
        {brands?.map((e, i) => {
          return <Brand {...e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ShopasBrand;
