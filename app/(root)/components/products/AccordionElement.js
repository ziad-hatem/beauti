"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionElement = ({ link, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <h3>
        <button
          className={`flex h-[43px] w-full items-center justify-between gap-2.5 rounded-lg border-2  px-2.5 font-bold  transition-all ${
            isOpened
              ? "border-white bg-primery text-white"
              : "border-primery bg-white text-sectwo"
          }`}
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <span>{link.icon}</span>
          <span>{link.title}</span>
          <span>{isOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
      </h3>
      {isOpened && (
        <>
          <div className="my-1 px-2 !text-xs">{content}</div>
          <button
            className="mx-auto block text-xs font-bold text-sectwo "
            onClick={() => setIsOpened(false)}
          >
            عرض اقل
          </button>
        </>
      )}
    </>
  );
};
export default AccordionElement;
