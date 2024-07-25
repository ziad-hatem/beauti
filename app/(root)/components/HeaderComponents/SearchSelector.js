"use client";

import { mainContext } from "@/contexts/ContextProvider";
import { sectionsSearchSelectorList } from "@/data/commonData";
import useWindowSize from "@/libs/useWindowSize";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const SearchSelector = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const SectionsDropDownMenu = useRef();
  const [selection, setSelection] = useState("جميع الأقسام");
  const { setOverlayActive } = useContext(mainContext);
  const screenWidth = useWindowSize().width;

  useEffect(() => {
    sectionsSearchSelectorList.forEach((link) => {
      link.href === pathname.toString() && setSelection(link.title);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setOpened((prev) => !prev);
    setOverlayActive((prev) => !prev);
  };

  const handleSelect = (e) => {
    setSelection(e.target.innerHTML);
    setOpened(false);
    setOverlayActive(false);
  };
  const handleMouseLeave = () => {
    if (opened && screenWidth > 1024) {
      setOpened(false);
      setOverlayActive(false);
    }
  };
  useEffect(()=>{
    document.addEventListener("click",()=>{
      handleMouseLeave()
          // eslint-disable-next-line react-hooks/exhaustive-deps

    })
  },[])
  return (
    <>
      <div
        className="relative  hidden cursor-pointer select-none  text-start text-secone lg:inline-block"
      >
        <div
          className={`relative z-[60] px-2.5 pe-4 lg:px-5 lg:pe-7`}
          onClick={handleClick}
          style={{
            width: opened
              ? SectionsDropDownMenu.current.offsetWidth + 25
              : "auto",
          }}
        >
          {selection}
        </div>
        <div className="pointer-events-none absolute inset-y-0 -left-3 flex items-center px-2 text-gray-700">
          <RiArrowDownDoubleFill
            className={`me-[7px] ${opened ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`${
            opened ? "visible" : "collapse"
          } absolute  left-5 right-0 top-2 z-50 h-[335px] w-fit rounded-b-15 bg-white px-3 pb-3 shadow-headerDropMenu`}
          ref={SectionsDropDownMenu}
        >
          {/* line */}
          <div className="relative mt-5 h-[1px] bg-[linear-gradient(90deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(216,_216,_216,_0.71)_49%,_#C8C8C8_100%)]" />
          {/* options start */}
          <ul className="sections_menu mt-[10px] max-h-[calc(100%_-_35px)]  space-y-2.5 overflow-y-auto">
            {sectionsSearchSelectorList.map((link) => (
              <li
                key={link.title}
                className={`me-2.5 block whitespace-nowrap pe-0.5 transition hover:bg-headerMenusHover ${
                  link.title === selection ? "text-primery" : ""
                }`}
                onClick={handleSelect}
              >
                {link.title}
              </li>
            ))}
          </ul>
          <button className=" absolute left-[9px] top-7 -z-10 hidden h-3  w-3 place-content-center rounded border border-[#d9d9d9] lg:grid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
            >
              <path
                d="M1 3L4.06154 1L7.12308 3"
                stroke="#383838"
                strokeOpacity="0.6"
                strokeWidth="1.45324"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="absolute bottom-3 left-[9px] -z-10 hidden h-3 w-3 place-content-center rounded border border-[#d9d9d9] lg:grid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M1 3L4.06154 1L7.12308 3"
                stroke="#383838"
                strokeOpacity="0.6"
                strokeWidth="1.45324"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchSelector;
