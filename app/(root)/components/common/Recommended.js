"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import { formatNumberInArabic } from "@/libs/formatNumber";

export default function Recommended({ products }) {
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
                    <div className="card-heart absolute left-0 top-0 ml-1 mt-1 lg:ml-2 lg:mt-2">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 21 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                      >
                        <path
                          id="Vector"
                          d="M15.0333 4.43668C16.0667 4.43668 16.9044 5.27441 16.9044 6.30779M10.3556 3.69061L10.9965 3.03335C12.9901 0.988886 16.2223 0.988884 18.2159 3.03334C20.156 5.0229 20.2156 8.22924 18.3509 10.2932L12.9936 16.223C11.5703 17.7983 9.14078 17.7983 7.71754 16.223L2.36023 10.2932C0.495532 8.22927 0.555143 5.02292 2.49521 3.03336C4.48881 0.988896 7.72107 0.988898 9.71467 3.03336L10.3556 3.69061Z"
                          stroke="#F39406"
                          strokeWidth="1.98118"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <VerifiedBeauty classNames="absolute bottom-0 mb-2 !border-solid !text-[8px] md:!text-[14px] !bg-[#F5F5F5] !border !border-[2px] !border-white p-1 mr-[-4px]" />

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
                        <button className="add-to-cart">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_1_13)">
                              <path
                                d="M9 9.75V14.25"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.25 12L6.75 12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokewinecap="round"
                                strokewinejoin="round"
                              />
                              <path
                                d="M6.05166 16.5H11.9484C13.3294 16.5 14.532 15.5572 14.8617 14.2161L16.3365 8.21611C16.8013 6.32556 15.3701 4.5 13.4233 4.5H4.57676C2.62992 4.5 1.19876 6.32558 1.66349 8.21613L3.13838 14.2161C3.46805 15.5572 4.67064 16.5 6.05166 16.5Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.25 7.5H15.75"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M6.74982 1.5L4.49982 4.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.2498 1.5L13.4998 4.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_13">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>{" "}
                          اضف للسلة
                        </button>
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
