import React from "react";

const SectionTitle = ({ name, color = null, className = "" }) => {
  return (
    <div
      className={`mb-[16px] mt-10 flex w-full items-center justify-center text-[15px] font-[400] max-md:mt-[32px] md:mb-[30px] md:mt-[40px] md:text-[22px] !text-[${color}] ${className}`}
    >
      {name}
    </div>
  );
};

export default SectionTitle;
