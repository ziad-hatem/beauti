"use client";

import { mainContext } from "@/contexts/ContextProvider";
import { useContext } from "react";

const CartBtn = ({ className, textClasses, inProductPage }) => {
  const { setShowCartBlock } = useContext(mainContext);
  const handleAddToCart = () => {
    if (inProductPage) {
      setShowCartBlock((prev) => !prev);
    }
  };
  return (
    <button
      className={`${className}  w-8 place-content-center rounded-full bg-primery text-xl text-white transition-all duration-100  hover:scale-[1.02] md:w-auto md:flex-1 md:rounded-lg`}
      onClick={handleAddToCart}
    >
      <div className="flex items-center gap-2.5 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="w-5 md:w-auto"
        >
          <path
            d="M14 15.1667V22.1667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 18.6667L10.5 18.6667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.41369 25.6667H18.5864C20.7347 25.6667 22.6054 24.2001 23.1182 22.1139L25.4124 12.7806C26.1353 9.83976 23.909 7 20.8806 7H7.1194C4.09099 7 1.86473 9.83978 2.58765 12.7806L4.88193 22.114C5.39474 24.2001 7.26544 25.6667 9.41369 25.6667Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 11.6667H24.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10.4997 2.33331L6.99973 6.99998"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4997 2.33331L20.9997 6.99998"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`${textClasses}`}>أضف للسلة</p>
      </div>
    </button>
  );
};
export default CartBtn;
