import React from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "/public/imgs/phones/beautyPhones/beautyPhonesBG.png";
import Image from "next/image";
import dicountImg from "/public/imgs/phones/phonesfitBudget/discount.png";
import far from "/public/imgs/phones/far 1.png";
const Product = ({ product }) => {
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
  };

  const discountedPrice = product.discount
    ? calculateDiscountedPrice(product.price, product.discountValue)
    : product.price;
  return (
    <div className="relative !h-fit w-[calc(100vw_-_10px)] !overflow-visible md:w-[313px]">
      <div className="">
        <Image
          src={far}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="absolute left-[10%] top-[12px] z-10 !h-auto w-[80%]"
        />
        <p className="relative top-5 z-10 text-center text-[14px] font-[400] text-white md:text-[16px]">
          {product.name}
        </p>
      </div>
      <div className="relative h-fit w-full overflow-hidden rounded-[20px]">
        <Image
          src={bg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full"
        />
        <Image
          src={product.img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="absolute bottom-[15%] left-1/2 !h-fit !w-[180px] -translate-x-1/2 transform"
        />
        {product.discount && (
          <Image
            src={dicountImg}
            width={100}
            height={100}
            unoptimized
            loading="lazy"
            className="absolute bottom-[14%] left-[8%] !h-[75px] !w-[75px]"
          />
        )}
      </div>
      <div className="mt-3 pr-[5px] md:pr-[13px]">
        <p className="flex h-fit items-end gap-[5px] text-[14px] font-[400] md:text-[22px] ">
          بسعة 256 جيجابايت{" "}
          <span className="text-[12px] md:text-[16px]">شريحة A17 PRO</span>
        </p>
        <div className="flex items-end gap-0.5 md:gap-3">
          <h1 className="price text-[14px] font-[700] md:text-[22px]">
            {new Intl.NumberFormat("EN-US").format(discountedPrice.toFixed(2))}{" "}
            ريال
          </h1>
          {product.discount && (
            <div className="relative">
              <h1 className="discouned text-[10px] md:text-[17px]">
                {new Intl.NumberFormat("EN-US").format(
                  product.price.toFixed(2),
                )}{" "}
                ريال
              </h1>
              <div
                className="absolute left-0 top-1/2 h-[1px] w-full bg-[#FF0000]"
                style={{ transform: "rotate(7deg) translateY(180%)" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BeautyPhones = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        grabCursor={true}
        loop={false}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        centeredSlides={true}
        scrollbar={{
          draggable: true,
          dragSize: 25,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            centeredSlides: true,
          },

          640: {
            slidesPerView: "auto",
            centeredSlides: false,
          },
        }}
        className="mySwiper-all products hideButtons customScrollBar !mt-0 max-md:!pb-[20px]"
      >
        {data.map((e, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              className="flex !w-fit !items-center !justify-center md:!w-fit"
              key={i}
            >
              <div className="flex !w-full flex-col !items-center gap-2">
                <Product product={e} key={i} />
                {data[i + 1] && <Product product={data[i + 1]} key={i + 1} />}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BeautyPhones;
