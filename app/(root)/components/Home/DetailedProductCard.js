import Image from "next/image";
import { useState } from "react";
import CartBtn from "./CartBtn";
import Link from "next/link";
import Stars from "@/components/common/Stars";

const DetailedProductCard = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const starsFraction = product.stars;
  // const stars = Array.from(
  //   { length: Math.round(parseFloat(starsFraction)) },
  //   (_, index) => index + 1,
  // );
  return (
    <div className="flex items-stretch justify-center gap-3 md:gap-6 lg:px-4">
      <div className="flex w-1/2 flex-col-reverse items-stretch gap-2 md:w-auto md:gap-4 lg:flex-row">
        {/* small images */}
        <div className="flex items-center justify-between gap-1.5 md:gap-3 lg:flex-col ">
          {product.imgs.map((img, i) => (
            <div
              key={i + "img"}
              className={`product_card_shadow md:rounded-15 relative aspect-[45/38] w-1/3 cursor-pointer overflow-hidden rounded-[9px] border-primery bg-white hover:border md:aspect-auto md:h-[68px] md:w-20 ${
                i > 2 ? "hidden lg:block" : ""
              } ${i === selectedImg ? "border-2  opacity-80" : ""}`}
              onClick={() => setSelectedImg(i)}
            >
              <Image
                src={img}
                className=" absolute top-1/2 my-auto w-full -translate-y-1/2"
                alt=""
              />
            </div>
          ))}
        </div>
        {/* large image */}
        <div className="product_card_shadow rounded-15 relative aspect-[5/3.9] h-full overflow-hidden lg:h-auto lg:w-[448px] ">
          <Image
            src={product.imgs[selectedImg]}
            className=" absolute top-1/2 my-auto w-full -translate-y-1/2"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          {/* title */}
          <Link href={`/product/${product.id}`}>
            <h3 className="max-w-28 font-bold text-secone sm:mb-3 sm:max-w-none md:text-xl">
              {product.title}
            </h3>
          </Link>
          {/* rating */}
          <div className="flex items-center gap-1.5 text-xs  md:text-sm">
            <span className="flex items-center gap-1 font-bold text-secthree ">
              <span>({product.reviews})</span>
              تقييم
            </span>
            <Stars starsNumber={product.stars} className={"gap-0.5"} />
          </div>
          {/* price */}
          <p className=" mt-1 text-black md:text-xl">
            {product.offerPrice}
            <span className="ms-0.5">ر.س</span>
          </p>
          <p className="old_price relative w-fit text-sm text-secthree md:text-base">
            {product.originalPrice}
            <span className="ms-0.5 ">ر.س</span>
          </p>
          {/* desc */}
          <p className="hidden max-w-80 text-justify text-lg leading-snug md:block">
            {product.desc}
          </p>
        </div>

        <div className=" mt-2 flex flex-col-reverse items-stretch justify-between gap-4 md:mt-[29px] md:flex-row">
          {/* quantity */}
          <div className="flex gap-2.5">
            <div className="lg:text-22 flex h-[30px] w-[70px] overflow-hidden rounded-[10px] bg-[#D9D9D9] text-lg font-bold md:h-8 md:w-24">
              <button
                className="grid w-1/3 place-content-center text-white hover:bg-secthree"
                onClick={() => setQuantity((prev) => prev - 1)}
                disabled={quantity < 2}
              >
                -
              </button>
              <span className="grid w-1/3 place-content-center text-white">
                {quantity}
              </span>
              <button
                className="grid w-1/3 place-content-center text-white hover:bg-secthree"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            {/* cart btn for mobile */}
            <CartBtn
              className={" grid md:hidden"}
              textClasses={"hidden md:block"}
            />
          </div>

          {/* colors */}
          <div className="flex gap-1 md:gap-1.5">
            {product.colors.map((color) => (
              <div
                key={color}
                className="aspect-square w-5 cursor-pointer rounded-[4px] md:w-[33px] md:rounded-lg"
                style={{ backgroundColor: `${color}` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden gap-2 md:flex">
          {/* cart btn */}
          <CartBtn className={"grid h-8 md:h-auto"} />

          {/* like btn */}
          <button className=" grid aspect-square w-[41px] place-content-center rounded-lg bg-primery transition-all hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M15.9045 6.08115C16.9379 6.08115 17.7756 6.91888 17.7756 7.95226M11.2267 5.33508L11.8676 4.67782C13.8612 2.63336 17.0935 2.63335 19.0871 4.67781C21.0271 6.66737 21.0868 9.87371 19.2221 11.9377L13.8647 17.8674C12.4415 19.4428 10.0119 19.4428 8.58869 17.8674L3.23139 11.9377C1.36669 9.87374 1.4263 6.66739 3.36636 4.67783C5.35996 2.63337 8.59223 2.63337 10.5858 4.67783L11.2267 5.33508Z"
                stroke="white"
                strokeWidth="1.98118"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailedProductCard;
