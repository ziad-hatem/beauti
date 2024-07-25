"use client";

import { mainContext } from "@/contexts/ContextProvider";
import { useContext } from "react";

const MobileSideMenu = () => {
  const { mobileSideMenuOpen, setMobileSideMenuOpen } = useContext(mainContext);

  const handleClosing = () => {
    setMobileSideMenuOpen(false);
    document.body.style.height = "auto";
    document.body.style.overflow = "initial";
  };
  return (
    <div
      className={`${
        mobileSideMenuOpen ? "visible w-full" : "collapse w-0"
      } absolute bottom-0 right-0 top-0 z-[100] flex h-screen  items-center justify-center bg-overlay transition-all duration-300 lg:hidden`}
    >
      <div className="relative me-auto ms-0 h-screen w-[265px] bg-white ">
        <span onClick={handleClosing} className="absolute end-1.5 top-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_565_54987)">
              <path
                d="M2.92999 17.07C1.97489 16.1476 1.21306 15.0441 0.688974 13.8241C0.164884 12.604 -0.110979 11.2918 -0.122517 9.96403C-0.134055 8.63624 0.118962 7.31944 0.621771 6.09048C1.12458 4.86151 1.86711 3.745 2.80604 2.80607C3.74496 1.86714 4.86148 1.12461 6.09045 0.621801C7.31941 0.118993 8.63621 -0.134024 9.964 -0.122486C11.2918 -0.110948 12.604 0.164914 13.824 0.689004C15.0441 1.21309 16.1475 1.97492 17.07 2.93002C18.8916 4.81604 19.8995 7.34206 19.8767 9.96403C19.8539 12.586 18.8023 15.0941 16.9482 16.9482C15.0941 18.8023 12.586 19.854 9.964 19.8768C7.34203 19.8995 4.81601 18.8916 2.92999 17.07ZM4.33999 15.66C5.84111 17.1611 7.87708 18.0045 9.99999 18.0045C12.1229 18.0045 14.1589 17.1611 15.66 15.66C17.1611 14.1589 18.0044 12.1229 18.0044 10C18.0044 7.87711 17.1611 5.84114 15.66 4.34002C14.1589 2.83889 12.1229 1.99557 9.99999 1.99557C7.87708 1.99557 5.84111 2.83889 4.33999 4.34002C2.83886 5.84114 1.99554 7.87711 1.99554 10C1.99554 12.1229 2.83886 14.1589 4.33999 15.66ZM14.24 7.17002L11.41 10L14.24 12.83L12.83 14.24L9.99999 11.41L7.16999 14.24L5.75999 12.83L8.58999 10L5.75999 7.17002L7.16999 5.76002L9.99999 8.59002L12.83 5.76002L14.24 7.17002Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_565_54987">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="flex h-16 w-full items-center bg-primery px-[15px] text-white font-bold">
          <h3 className="mobile_menu_text_shadow">تصفح بيوتي</h3>
        </div>
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto">

        </div>
      </div>
    </div>
  );
};
export default MobileSideMenu;
