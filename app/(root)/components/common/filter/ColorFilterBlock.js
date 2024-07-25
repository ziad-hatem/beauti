"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


const ColorFilterBlock = ({ colors = null }) => {
  const [showMore, setShowMore] = useState(false);
  if (colors == null) {
    return;
  }else{
    return (
      <>
        <div
            className={`color-container flex `}
        >
          
          {colors.map((color,i) => (
            <label key={i} className="h-5 w-6 flex items-center relative">
                <input data-order={i} type="checkbox" className="peer hidden" />
                <span className="color-check absolute inset-0 hidden place-content-center rounded-sm bg-white/50 text-primery peer-checked:grid color-check">
                  <FaCheck />
                </span>
                <div data-color={color.img} style={{"backgroundColor": color.img, "borderRadius": "2px"}} className="h-5 w-6"></div>
              {/* <div className="select-none">
                <div className="mb-1 text-xs leading-3 text-sectwo">
                  {color.name}
                </div>
              </div> */}
            </label>
          ))}
        </div>
        {/* <button
          className="show-more mt-2 block font-medium"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <span className="text-lg">
          <IoIosArrowUp style={showMore ? {transition: "0.4s",transform: "rotate(0deg)"} : {transition: "0.4s",transform: "rotate(180deg)"}} />
        </span>
          {showMore ? "عرض أقل" : "عرض المزيد"}
        </button> */}
      </>
    );
  }
};
export default ColorFilterBlock;
