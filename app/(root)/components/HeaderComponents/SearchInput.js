"use client";
import Image from "next/image";
import searchIcon from "../../../../public/icons/header/search.svg";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "@/contexts/ContextProvider";
import history from "../../../../public/icons/header/history.png";
import trind from "../../../../public/icons/header/trind.png";
import useWindowSize from "@/libs/useWindowSize";

const SearchInput = () => {
  const [opened, setOpened] = useState(false);
  const [selection, setSelection] = useState("");
  const { setOverlayActive } = useContext(mainContext);
  const [inRange, setInRange] = useState(false);
  const screenWidth = useWindowSize().width;

  useEffect(() => {
    setInRange(false);
  }, [selection]);

  const handleClick = () => {
    setOpened(true);
    setOverlayActive(true);
  };
  const handleChange = (e) => {
    setOpened(true);
    setOverlayActive(true);
    setSelection(e.target.value);
  };

  const handleSelect = (item) => {
    setInRange(true);
    setSelection(item);
    setOpened(false);
    setOverlayActive(false);
  };

  const handleBlur = () => {
    console.log(inRange);
    if (!inRange && opened && screenWidth >= 1024) {
      setOpened(false);
      setOverlayActive(false);
    }
    // if (!inRange && screenWidth < 1024) {
    //   setOpened(false);
    // }
  };

  const startSearch = () => {
    
  };

  let lastSearch = ["اخر بحث", "اخر بحث", "اخر بحث", "اخر بحث", "اخر بحث", "اخر بحث", "اخر بحث", "اخر بحث"];
  let trinds = [
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
    "اخر بحث",
  ];
  return (
    <>
      <div
        className="relative flex-1 pe-2 search-container"
        onClick={startSearch}
        onMouseLeave={() => setInRange(false)}
      >
        <input
          type="text"
          id="search-header"
          className="w-full rounded-e-full rounded-s-full py-1.5 ps-[11px] outline-none placeholder:text-[#999] lg:rounded-s-none lg:py-2 lg:placeholder:text-sm"
          placeholder="بحث beauti.center"
          onFocus={handleClick}
          value={selection}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          className="absolute left-1.5 top-1/2 w-4 -translate-y-1/2 lg:left-3 lg:w-5"
          onClick={() => setOpened(false)}
        >
          {/* <Image src={searchIcon} alt="icon" /> */}
        </button>
        <div
          className={`${
            opened ? "visible" : "collapse"
          } absolute left-0 right-0 top-2 -z-10 rounded-b-15 bg-white shadow-headerDropMenu`}
        >
          <div className="space-y-[13px] py-[15px] text-start text-secone">
            <h2 className="search-title">البحث الأخير</h2>
            <ul className="space-y-[7px]">
              {lastSearch.map((item,i) => (
                <li
                  key={i}
                  className="flex cursor-pointer items-center gap-[7px] transition hover:bg-headerMenusHover"
                  onClick={() => handleSelect(item)}
                >
                  
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="search-title">الترند</h2>
            <ul className="space-y-[7px]">
              {trinds.map((item,i) => (
                <li
                  key={i}
                  className="flex cursor-pointer items-center gap-[7px] transition hover:bg-headerMenusHover"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchInput;
