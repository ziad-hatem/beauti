import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { smartWatches } from "@/data/fashionData";

function DesiredCard({
    product,
    bgColor,
    imgbgColor = "!bg-[#ffffff]",
    textColor,
  }) {
    return (
      <div className="cardNoButton !h-[225px] !w-[188px]">
        <div
          className={`img-container relative !flex !w-full !items-center !justify-center h-[188px] w-[188px] ${imgbgColor}`}
        >
          <Image
            src={product.img}
            alt={product.title}
            className="h-[150px] w-[150px] object-contain mix-blend-multiply"
          />
          {/* <span className="love"></span> */}
          {/* <span className="rating absolute bottom-0 right-0">HE</span> */}
          {/* <div className="card-rating-container absolute bottom-0 right-0 mb-[40px] mr-[7px] flex items-center justify-between rounded-[6px] bg-white px-[1px] text-[8px] lg:text-sm">
            <Rating stars={product.stars} reviews={product.reviews} />
          </div> */}
        </div>
        <div className="">
          <div
            className={`name !flex !h-[37px] !items-center !justify-center`}
            style={{
              backgroundColor: bgColor ? bgColor : "#f39406",
            }}
          >
            <h2 className={`sm:!text-[18px] xs:!text-[15px]`} style={{color:textColor,fontWeight: 600}}>
              {product.title}
            </h2>
          </div>
        </div>
      </div>
    );
  }

const DesiredSection = ({ products, imgbgColor, color= "#023863", titleBg= "#F5F5F5" }) => {

    return (
        <Swiper
        slidesPerView="auto"
        spaceBetween={22}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation]}
        className={`mySwiper-all products-swiper BeautyOffersgirls !h-fit !mt-0 !p-0  `}
      >
        {products.map((e, i) => {
          return (
            <SwiperSlide key={i + "Product"} className="!w-fit !h-fit">
              <DesiredCard
                product={e}
                bgColor={titleBg}
                textColor={color}
                imgbgColor={imgbgColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
};

const SmartWatches = ({ mainImg, bgcolor, imgbgColor,cardTitleBg, titleColor, watchesData = [] }) => {
  return (
    <div>
      <div className="flex w-full flex-col-reverse gap-[17px]">
        <div className="flex md:h-[291px] flex-col md:flex-row mb-3 md:gap-[20px]">
          <div className="relative flex-initial md:min-w-[283px] max-md:p-[13px] max-w-[100%] md:max-w-[283px] mix-blend-multiply">
            <Image
              src={mainImg}
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
            <div className={`${bgcolor} flex items-center overflow-hidden md:px-[30px] max-md:pr-[13px] max-md:py-[30px]`}>
            <DesiredSection products={watchesData} imgbgColor={imgbgColor} color={titleColor} titleBg={cardTitleBg}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWatches;
