"use client";
import { useState } from "react";
import SideMenu from "../Home/sideMenu/SideMenu";
import Image from "next/image";
import { logos, mainSectionHero, sideMenuThreeColData } from "../../data/fake";

const SectionsMenu = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [opener, setOpener] = useState("");

  const handleSideMenuClick = (e) => {
    if (e.currentTarget.getAttribute("data-section-name") === opener) {
      setShowSideMenu(false);
      setOpener("");
    } else {
      setShowSideMenu(true);
      setOpener(e.currentTarget.getAttribute("data-section-name"));
    }
  };
  return (
    <section className="absolute  top-14  z-50 flex w-full flex-col gap-3 lg:flex-row">
      {/* side menu */}
      <div className="sections-menu bg-maingray rounded-20 hidden w-[297px] shrink-0 flex-col gap-[14px] border  border-primery px-2.5 py-6 lg:flex">
        {mainSectionHero.map((section) => (
          <button
            key={section.title}
            className={`group flex items-center justify-between hover:text-primery ${
              section.title === opener ? "active-section" : ""
            }`}
            data-section-name={section.title}
            onClick={handleSideMenuClick}
          >
            <div className="flex items-center gap-2">
              <Image src={section.icon} alt={section.title} />

              <span className="text-lg ">{section.title}</span>
            </div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-sectwo group-hover:stroke-primery"
            >
              <g id="UniqIcons/arrows/outline/direction-left 3">
                <path
                  id="Vector 175"
                  d="M14.7441 7L10.7441 12L14.7441 17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        ))}
      </div>

      {/* side menu open */}
      {showSideMenu && (
        <div className=" rounded-20 relative flex max-w-[calc(100%_-_309px)] flex-1 gap-3 border border-primery">
          <SideMenu
            logos={logos}
            sideMenuThreeColData={sideMenuThreeColData}
            setShowSideMenu={setShowSideMenu}
            setOpener={setOpener}
          />
        </div>
      )}
    </section>
  );
};
export default SectionsMenu;
