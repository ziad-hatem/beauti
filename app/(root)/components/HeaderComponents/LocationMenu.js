"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import map from "../../../../public/icons/header/map.svg";
import { mainContext } from "@/contexts/ContextProvider";

const LocationMenu = () => {
  const { setChangeLocationOpened } = useContext(mainContext);

  const handleClick = () => {
    setChangeLocationOpened(true);
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      <button
        href="/"
        className="flex flex-row-reverse items-center gap-1 lg:flex-row"
        onClick={handleClick}
      >
        <span>الرياض</span>
        <Image src={map} alt="" className="w-3 lg:w-auto" />
      </button>
    </div>
  );
};
export default LocationMenu;
