"use client";

import { useState } from "react";

const ProductTags = ({ code }) => {
  const [clicked, setClicked] = useState(true);

  const handleClick = (e) => {
    // setClicked(true);
    // setTimeout(() => {
    //   setClicked(false);
    // }, 6000);
    console.log(e.target.innerHTML);
    navigator.clipboard.writeText(e.target.innerHTML);
  };

  return (
    <div className="flex items-center justify-between text-10 md:text-sm">
      <div className="grid h-[26px] place-content-center rounded-full border border-primery bg-white px-4 font-bold text-sectwo  md:h-[35px] md:px-8">
        أفضل المنتجات
      </div>
      <div className="flex h-[26px] items-center justify-center rounded-full  border border-l-0 border-primery bg-white font-bold  text-sectwo md:h-[35px]">
        <span dir="ltr" className="px-2">
          -40%
        </span>
        <span
          className={`grid h-[26px] place-content-center rounded-full border border-primery px-6 md:h-[35px] ${
            clicked ? "bg-primery text-white" : "cursor-pointer"
          }`}
          onClick={handleClick}
        >
          {clicked ? code : "كود خصم"}
        </span>
      </div>
    </div>
  );
};
export default ProductTags;
