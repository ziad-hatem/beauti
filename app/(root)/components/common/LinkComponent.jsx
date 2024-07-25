import Link from "next/link";
import React from "react";

const LinkComponent = ({ title, link }) => {
  return (
    <Link
      key={link}
      className="flex !h-[24px] !w-[86px] items-center justify-center bg-[#FAFAFA] text-[10px] text-[#A88C6A]"
      href={link}
      alt={link}
    >
      {title}
    </Link>
  );
};

export default LinkComponent;
