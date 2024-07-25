"use client";
import { useState } from "react";
import {  IoIosArrowUp } from "react-icons/io";

const SectionHead = ({
  content,
  opened,
  headName,
  contentClasses,
  activation,
}) => {
  const [OpenContent, setOpenContent] = useState(opened ?? true);
  return (
    <div className="relative">
      <button
        className={`flex w-full items-center gap-2.5 font-medium leading-5 text-sectwo pt-1.5`}
        // onClick={() => setOpenContent((prev) => !prev)}
      >
        <IoIosArrowUp style={activation ? {transform: "rotate(-90deg)"} : {display: "none"}} /><a className={activation}> {headName}</a>
      </button>
      {OpenContent && (
        <div className={`ms-2 ps-5  ${contentClasses}`}>
          {content}
        </div>
      )}
    </div>
  );
};
export default SectionHead;
