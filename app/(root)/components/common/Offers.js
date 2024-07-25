"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import "swiper/css/scrollbar";

export default function Offers({
  offers,
  sectionName,
  banner = "/imgs/far 1.png",
  bannerTextColor = "#FFF",
}) {
  const MakeImageActive = () => {
    useEffect(() => {
      document.querySelectorAll(".clickableImage").forEach((e) => {
        e.addEventListener("click", (ev) => {
          let i =
            ev.target.parentElement.parentElement.getAttribute("data-order");
          let newActive = ev.target;
          // ev.target.
          if (document.querySelector("#active-container" + i) != null) {
            ev.target.parentElement.appendChild(
              document.querySelector("#active-container" + i).children[0],
            );
            document
              .querySelector("#active-container" + i)
              .appendChild(newActive);
          }
        });
      });
    }, []);
  };
  let offersOne = [];
  let offersTwo = [];
  for (let i = 0; i < offers.length / 2; i++) {
    offersOne[i] = offers[i];
    offersTwo[i] = offers[Math.ceil(i / 2) + 2];
  }
  return (
    <section className="offers" onLoad={MakeImageActive()}>
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          grabCursor={true}
          loop={false}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            draggable: true,
            dragSize: 25,
          }}
          breakpoints={{
            300: {
              centeredSlides: true,
              slidesPerView: 1,
            },
            490: {
              centeredSlides: false,
              slidesPerView: "auto",
            },
            768: {
              centeredSlides: false,
              slidesPerView: "auto",
            },
            1300: {
              slidesPerView: 2,
              spaceBetween: 17,
              centeredSlides: false,
            },
          }}
          className="mySwiper-all products"
        >
          <div className="products">
            {offersOne.map((offer, i) => {
              return (
                <SwiperSlide
                  key={i + "product"}
                  className="products max-md:!flex max-md:!flex-col max-md:!items-center max-md:!justify-center"
                >
                  <div
                    className="card !w-[100%] !max-w-[468px] !border !border-[#E6E6E6]"
                    key={i}
                  >
                    <div
                      className="img-container !relative"
                      id={"active-container" + i}
                    >
                      <Image
                        src={offer.img}
                        alt={i}
                        loading="lazy"
                        className={"clickableImage mx-auto"}
                      />
                    </div>
                    <div className="info">
                      <div className="section-name">
                        <Image
                          src={banner}
                          alt={i}
                          width={100}
                          loading="lazy"
                          height={100}
                          unoptimized
                          className="w-full"
                        />
                        <a
                          href={offer.href}
                          className={`!text-[8px] !font-medium md:!text-[14px] !text-[${bannerTextColor}]`}
                        >
                          {offer.section}
                        </a>
                      </div>
                      <div className="product-name max-tabletStart:!text-[calc(2vw_+_0.6vw)] max-tabletStart:!pt-[calc(1vw_+_8%)] !mt-2 !text-[8px] !leading-normal md:!text-[13px] lg:!mt-3">
                        {offer.title}
                      </div>
                      <div className="price max-tabletStart:mt-[2%]">
                        <div className="top">
                          <p className="new-price">{offer.offerPrice} ر.س</p>
                        </div>
                        <div className="bottom">
                          <span className="offer">
                            {offer.price - offer.offerPrice} ر.س
                          </span>
                          <span className="old-price">
                            توفير {offer.price} ر.س
                          </span>
                        </div>
                      </div>
                      <div className="album" data-order={i}>
                        {offer.album.map((img, k) => {
                          return (
                            <div
                              key={i + "-" + k}
                              className="image-container aspect-square !h-[100%] !w-auto"
                            >
                              <Image
                                src={img}
                                alt={k}
                                loading="lazy"
                                className="clickableImage !opacity-0"
                                width={173.35}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className="card !w-[100%] !max-w-[468px] !border !border-[#E6E6E6]"
                    key={i + 1}
                  >
                    <div
                      className="img-container !relative"
                      id={"active-container" + (Number(i) + 2)}
                    >
                      <Image
                        src={offersTwo[i].img}
                        alt={i + 1}
                        loading="lazy"
                        className={"clickableImage mx-auto"}
                      />
                    </div>
                    <div className="info">
                      <div className="section-name">
                        <Image
                          src={banner}
                          alt={i + 1}
                          unoptimized
                          loading="lazy"
                          className="w-full"
                          width={100}
                          height={100}
                        />

                        <a
                          href={offersTwo[i].href}
                          className={`!text-[8px] !font-medium md:!text-[14px] !text-[${bannerTextColor}]`}
                        >
                          {offersTwo[i].section}
                        </a>
                      </div>
                      <div className="product-name max-tabletStart:!text-[calc(2vw_+_0.6vw)] max-tabletStart:!pt-[calc(1vw_+_8%)] !mt-2 !text-[8px] !leading-normal md:!text-[13px] lg:!mt-3">
                        {offersTwo[i].title}
                      </div>
                      <div className="price max-tabletStart:mt-[2%]">
                        <div className="top">
                          <p className="new-price">
                            {offersTwo[i].offerPrice} ر.س
                          </p>
                        </div>
                        <div className="bottom">
                          <span className="offer">
                            {offersTwo[i].price - offersTwo[i].offerPrice} ر.س
                          </span>
                          <span className="old-price">
                            توفير {offersTwo[i].price} ر.س
                          </span>
                        </div>
                      </div>
                      <div className="album" data-order={i + 2}>
                        {offersTwo[i].album.map((img, k) => {
                          return (
                            <div
                              key={i + 1 + "-" + k}
                              className="image-container !h-[100%] !w-auto"
                            >
                              <Image
                                src={img}
                                loading="lazy"
                                alt={k}
                                className="clickableImage !opacity-0"
                                width={173.35}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
// {if (Math.trunc(( 1 - (offer.offerPrice / offer.price)) * 100) > leastprice) {
//       leastprice = Math.trunc((1 - (offer.offerPrice / offer.price)) * 100);
//       useEffect(()=>{

//             document.querySelector(".leastprice").innerHTML ="خصم حتى " + leastprice + "%";
//       },[])
// }}
