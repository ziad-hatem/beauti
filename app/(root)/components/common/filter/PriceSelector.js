"use client";
import { useState } from "react";

const PriceSelector = ({}) => {
  const [rangeValue, setRangeValue] = useState(60);
  return (
    <div className="progress-container relative mt-1 flex items-center">
      <input
        type="range"
        dir="ltr"
        name=""
        id=""
        className="z-10 w-full appearance-none bg-transparent accent-white drop-shadow-2xl [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:drop-shadow-md"
        value={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <div className="progress-bar absolute left-0 top-1/2 flex h-2 w-full -translate-y-1/2 items-center">
        <div
          className={`h-full  rounded-s-full progress-bar-bg`}
          style={{ width: 100 - rangeValue + "%" }}
        ></div>
        <div
          className={`ms-0.5 h-full rounded-e-full bg-primery`}
          style={{ width: rangeValue + "%" }}
        >
          <span className="progress-indicator absolute bottom-5  flex h-5 w-10  translate-x-1/2 place-content-center items-center justify-center rounded-lg bg-white text-primery"
          style={{right:-8 + (rangeValue * 13 / 100)}}
          >
            {rangeValue}
          </span>
          <span className="absolute bottom-2 border-[6px] border-transparent border-t-white flex w-3 aspect-square translate-x-1/2 place-content-center items-center justify-center"
          style={{right:-8 + (rangeValue * 13 / 100)}}
          
          >

          </span>
        </div>
      </div>
    </div>
  );
};
export default PriceSelector;
