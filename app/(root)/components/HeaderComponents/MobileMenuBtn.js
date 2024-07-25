"use client";
import { mainContext } from "@/contexts/ContextProvider";
import { useContext } from "react";

const MobileMenuBtn = () => {
  const { mobileSideMenuOpen, setMobileSideMenuOpen } = useContext(mainContext);
  const handleClick = () => {
    setMobileSideMenuOpen(true);
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  };
  return (
    <button className="me-6 w-5 lg:hidden" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
      >
        <path
          d="M3.96112 3.7948H18.2393M3.96112 15.5533H18.2393M3.96112 11.7491H18.2393M3.96112 7.94487H18.2393"
          stroke="#383838"
          strokeWidth="1.25984"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
export default MobileMenuBtn;
