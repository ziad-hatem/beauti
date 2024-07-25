"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Category = ({ content, opened, categoryName, contentClasses, id = '',height = 0}) => {
  const [OpenContent, setOpenContent] = useState(opened ?? true);
  const [showMore, setShowMore] = useState(false);
  const CalcHeight = ()=>{
    useEffect(()=>{
      if (height) {
        if (document.querySelector(`#\\3${id[0]} ${id[1] ? id[1] : ''} div.overflow-hidden`).clientHeight < +height.substring(3)) {
          document.querySelector(`#\\3${id[0]} ${id[1] ? id[1] : ''} button.show-more`).classList.add("display-none")
        }
      }else{
        document.querySelector(`#\\3${id[0]} ${id[1] ? id[1] : ''} button.show-more`).classList.add("display-none")
      }
    },[])
  }
  return (
    <div id={id} className="">
      <button
        className="flex w-full items-center justify-between font-bold text-sectwo"
        onClick={() => setOpenContent((prev) => !prev)}
      >
        <h4>{categoryName}</h4>
        <span className="text-lg">
          <IoIosArrowUp style={OpenContent ? {transition: "0.4s",transform: "rotate(0deg)"} : {transition: "0.4s",transform: "rotate(180deg)"}} />
        </span>
      </button>
      <div className={`overflow-hidden ${showMore ? "h-auto" : height} ${OpenContent ? contentClasses : "notOpened"}`}>{content}</div>
      <button
          className={`show-more mt-2 block font-medium`}
          onClick={() => {setShowMore((prev) => !prev)}}
          onLoad={CalcHeight()}
        >
          <span className="text-lg">
          <IoIosArrowUp style={showMore ? {transition: "0.4s",transform: "rotate(0deg)"} : {transition: "0.4s",transform: "rotate(180deg)"}} />
        </span>
          {showMore ? "عرض أقل" : "عرض المزيد"}
        </button>
    </div>
  );
};
export default Category;
