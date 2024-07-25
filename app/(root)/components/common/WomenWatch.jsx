import Image from "next/image";
import React from "react";

const WomenWatch = ({
  fourImages=[
    {image: "/imgs/banners/wideWomenwatchesImage.svg", title: "الساعات الذكية"},
    {image: "/imgs/banners/wideWomenwatchesImage2.svg", title: "الأعلى تقييماً"},
    {image: "/imgs/banners/wideWomenwatchesImage3.svg", title: "اخترناها لك"},
    {image: "/imgs/banners/wideWomenwatchesImage4.svg", title: "خصم يبدأ من ٢٠٪"}
  ],
  BigImages=[
    {image: "/imgs/banners/watchesImage.svg", title: "أحدث المنتجات"},
    {image: "/imgs/banners/watchesImage2.svg", title: "عروض أطقم الساعات"},
  ],
  bgcolor = "#FAFAFA",
}) => {
  return (
    <div className="flex h-fit w-full flex-nowrap gap-3 max-lg:flex-col 2xl:flex-row">
      <div className="left mx-auto flex justify-center gap-3 max-md:w-full lg:w-fit xl:w-fit">
        <div className="left group relative flex w-[calc(50%_-_23px)] flex-col transition-all lg:w-1/2 2xl:w-[192px]">
          <h2
            className="relative z-10 flex h-8 w-full items-center justify-center text-[10px] font-[500] text-[#383838] lg:text-[14px] lg:group-hover:text-[13.50px] lg:group-hover:font-[700]"
            style={{
              backgroundColor: bgcolor,
            }}
          >
            {BigImages[0].title}
          </h2>
          <div className="absolute hidden h-full w-full bg-[#828282] bg-opacity-15 transition-all lg:h-full lg:group-hover:block xl:w-[192px]" />
          <Image
            src={BigImages[0].image}
            width={100}
            height={100}
            className="h-full w-full object-cover lg:h-full xl:w-full"
          />
        </div>
        <div className="right group relative flex w-[calc(50%_-_23px)] flex-col-reverse lg:max-h-full lg:w-1/2 2xl:w-[192px]">
          <h2
            className="relative z-10 flex h-8 w-full items-center justify-center text-[10px] font-[500] text-[#383838] lg:text-[14px] lg:group-hover:text-[13.50px] lg:group-hover:font-[700]"
            style={{
              backgroundColor: bgcolor,
            }}
          >
            {BigImages[1].title}
          </h2>
          <div className="absolute hidden h-full w-full bg-[#828282] bg-opacity-15 lg:group-hover:block" />
          <Image
            src={BigImages[1].image}
            width={100}
            height={100}
            className="h-full w-full object-cover lg:h-full xl:w-full"
          />
        </div>
      </div>
      <div className="right flex h-fit w-auto flex-1 flex-wrap justify-center gap-x-[14px] gap-y-[13px] max-xl:items-center 2xl:justify-start">
        {Array.from({ length: 4 }, (_, index) => {
          return (
            <div
              key={index}
              className="group relative h-fit max-lg:w-[calc(50%_-_23px)] lg:w-[calc(50%_-_10px)] 2xl:w-[274px]"
            >
              <div className="absolute mb-[33px] hidden h-[105px] w-full bg-[#828282] bg-opacity-15 lg:group-hover:block" />
              <Image
                src={fourImages[index].image}
                width={100}
                height={100}
                className="h-[105px] w-full object-cover"
              />
              <h2
                className="flex h-[25px] w-full items-center justify-center text-[10px] font-[500] text-[#383838] lg:h-8 lg:text-[14px] lg:group-hover:text-[13.50px] lg:group-hover:font-[700]"
                style={{
                  backgroundColor: bgcolor,
                }}
              >
                {fourImages[index].title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WomenWatch;
