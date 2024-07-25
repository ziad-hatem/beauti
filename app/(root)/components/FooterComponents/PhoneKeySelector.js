"use client";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useState } from "react";

const PhoneKeySelector = () => {
  const [phoneKey, setPhoneKey] = useState("+966");

  const handleChange = (e) => {
    setPhoneKey(e.target.value);
  };

  return (
    <div className="relative inline-block rounded-xl border border-black/50 py-1 text-[19px] font-medium text-black">
      <select
        className=" appearance-none bg-transparent px-2 pl-6 pr-12 text-end outline-none"
        onChange={handleChange}
      >
        <option value="+966">SA</option>

        <option value="+20">EG</option>
      </select>
      <span
        dir="ltr"
        className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-sectwo"
      >
        {phoneKey}
      </span>
      <div className="pointer-events-none absolute inset-y-0 -left-3 flex items-center px-2 text-gray-700">
        <RiArrowDownDoubleFill className="me-[7px]" />
      </div>
    </div>
  );
};
export default PhoneKeySelector;
