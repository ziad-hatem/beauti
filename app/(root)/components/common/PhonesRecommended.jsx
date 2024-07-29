"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import { formatNumberInArabic } from "@/libs/formatNumber";

export default function PhonesRecommended({ products }) {
  const MakeImageActive = () => {
    useEffect(
      () => {
        document.querySelectorAll(".clickableRecommended").forEach((e) => {
          e.addEventListener("click", (ev) => {
            let i =
              ev.target.parentElement.parentElement.getAttribute("data-order");
            let newActive = ev.target;
            // ev.target.
            if (document.querySelector("#active-Recommended" + i) != null) {
              ev.target.parentElement.appendChild(
                document.querySelector("#active-Recommended" + i).children[0],
              );
              document
                .querySelector("#active-Recommended" + i)
                .appendChild(newActive);
            }
          });
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );
  };
  return (
    <div className="container" onLoad={MakeImageActive()}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        grabCursor={true}
        loop={false}
        centeredSlides={false}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1300: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
        }}
        className="mySwiper-all products Recommended-slider NextButtonSwiperRight0PX !mt-0"
      >
        <div className="products">
          {products.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card">
                  <div
                    className="img-container !relative"
                    id={"active-Recommended" + i}
                  >
                    <div className="absolute bottom-0 left-0 mb-2 ml-2 lg:mb-3 lg:ml-3">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM16.9913 8.085C16.9913 7.58772 16.7937 7.11081 16.4421 6.75917C16.0904 6.40754 15.6135 6.21 15.1163 6.21C14.619 6.21 14.1421 6.40754 13.7904 6.75917C13.4388 7.11081 13.2413 7.58772 13.2413 8.085V13.2413H8.085C7.58772 13.2413 7.11081 13.4388 6.75917 13.7904C6.40754 14.1421 6.21 14.619 6.21 15.1163C6.21 15.6135 6.40754 16.0904 6.75917 16.4421C7.11081 16.7937 7.58772 16.9913 8.085 16.9913H13.2413V22.1475C13.2413 22.6448 13.4388 23.1217 13.7904 23.4733C14.1421 23.825 14.619 24.0225 15.1163 24.0225C15.6135 24.0225 16.0904 23.825 16.4421 23.4733C16.7937 23.1217 16.9913 22.6448 16.9913 22.1475V16.9913H22.1475C22.6448 16.9913 23.1217 16.7937 23.4733 16.4421C23.825 16.0904 24.0225 15.6135 24.0225 15.1163C24.0225 14.619 23.825 14.1421 23.4733 13.7904C23.1217 13.4388 22.6448 13.2413 22.1475 13.2413H16.9913V8.085Z"
                          fill="#248EB0"
                        />
                      </svg>
                    </div>

                    {/* <img
                      width={100}
                      height={100}
                      unoptimized
                      src={"/imgs/kidsFashion/verified.svg"}
                      className="absolute !right-2 bottom-0 mb-2 block !h-[15px] !w-[40px] lg:hidden"
                    /> */}
                    <Image
                      src={product.img}
                      alt={i}
                      className={"clickableRecommended hidden"}
                    />
                  </div>
                  <div className="info">
                    <div className="product-name">{product.title}</div>
                    <div className="price">
                      <div className="top">
                        <p className="new-price">
                          {formatNumberInArabic(product.offerPrice)} ر.س
                        </p>
                      </div>
                      <div className="bottom justify-between">
                        <div>
                          <span className="offer me-1">
                            {formatNumberInArabic(
                              product.price - product.offerPrice,
                            )}{" "}
                            ر.س
                          </span>
                          <span className="old-price">
                            توفير {formatNumberInArabic(product.price)} ر.س
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="album" data-order={i}>
                      {product.album.map((img, k) => {
                        return (
                          <div key={i + "-" + k} className="image-container">
                            <Image
                              src={img}
                              alt={k}
                              key={i + "-" + i + "-" + k + "-" + i}
                              className={"clickableRecommended hidden"}
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
  );
}
