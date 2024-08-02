"use client";
import Image from "next/image";
import React, { useState } from "react";

const HairCut = ({ data }) => {
  return (
    <div className="flex h-fit items-center gap-[11.67px] max-md:flex-col">
      {data.map((e, i) => {
        const [hover, setHover] = useState(false);
        return (
          <div
            key={i}
            className="group aspect-square h-auto w-[calc(100vw_-_26px)] max-w-[400px] cursor-pointer overflow-hidden md:max-h-[234px] md:max-w-[234px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="relative">
              <Image
                src={e.img}
                unoptimized
                loading="lazy"
                className="h-auto"
                style={{
                  transform: hover ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.1s ease-in-out",
                }}
              />
              <div
                className="absolute left-0 top-0 z-[1] h-full w-full"
                style={{
                  backgroundColor: hover ? "#000" : "transparent",
                  opacity: "10%",
                }}
              />
              <div className="absolute bottom-[22px] left-1/2 z-[2] flex h-[44px] w-[60%] -translate-x-1/2 transform items-center justify-center bg-[#FFF] bg-opacity-90 md:bottom-3 md:w-[80%]">
                <h2 className="text-[12px] font-[400] text-[#383838] group-hover:font-[500] lg:text-[16px]">
                  {e.title}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HairCut;
