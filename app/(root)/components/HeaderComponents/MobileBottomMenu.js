"use client";
import Link from "next/link";
import { mobileBottomMenuLinks } from "../../data/fake";
import { useState } from "react";

const MobileBottomMenu = () => {
  const [activeLink, setActiveLink] = useState("الرئسية");
  const handleClick = (e) => {
    setActiveLink(e.currentTarget.getAttribute("data-Link-name"));
  };

  return (
    <div className=" text-10 fixed bottom-0 z-50 w-full bg-white text-secthree lg:hidden">
      <ul className=" container mx-auto flex w-full items-center">
        {mobileBottomMenuLinks.map((link) => (
          <li
            key={link.title}
            className={`w-full ${
              activeLink === link.title ? "text-primery" : ""
            }`}
            data-link-name={link.title}
            onClick={handleClick}
          >
            <Link
              href={link.href}
              className="flex w-full  flex-col items-center justify-center gap-1 py-1.5"
            >
              <span className="aspect-square w-6">{link.icon}</span>
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MobileBottomMenu;
