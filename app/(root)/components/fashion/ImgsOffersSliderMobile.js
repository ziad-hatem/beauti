"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const ImgsOffersSliderMobile = ({ array }) => {
  return (
    <div className="mx-auto flex !h-fit w-[calc(100%_-_13px)] flex-wrap justify-center gap-[14px]">
      {array.map((element, i) => (
        <div key={i + "element"} className={`h-fit w-[calc(50%_-_13px)]`}>
          <Link key={element.name} href={element.href} className="block w-full">
            <Image
              src={element.img}
              alt=""
              className="!h-fit !w-full select-none object-cover"
            />
          </Link>
          <p className="gray imgsOfferSlider-title !text-[10px]">
            {element.title}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ImgsOffersSliderMobile;
