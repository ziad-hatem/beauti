"use client";
import { banners, heroBanners, mainSectionHero } from "@/data/fake";
import Image from "next/image";
import BannerSlider from "../banners/BannerSlider";
import KetchenSlider from "./KetchenSlider";
import SideMenu from "./sideMenu/SideMenu";
import { useState } from "react";
import { logos, sideMenuThreeColData } from "@/data/fake";

const Hero = () => {
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
    <section className="flex flex-col gap-3 lg:flex-row">
      {/* side menu */}
      <div className="hidden w-[297px] shrink-0 flex-col gap-[14px] rounded-20 bg-maingray px-2.5  py-6 lg:flex">
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
      {/* hero body */}
      <div className=" relative flex-col gap-3 lg:flex lg:max-w-[calc(100%_-_309px)] lg:justify-between">
        <div className="overflow-hidden rounded-lg lg:max-h-[336px] lg:rounded-20">
          <BannerSlider desktopBanners={heroBanners} swiperClass={"hero-one"} />
        </div>
        <div className="mt-3 w-full flex-1 place-content-center lg:mt-0 lg:grid">
          <KetchenSlider />
        </div>
        {showSideMenu && (
          <SideMenu
            logos={logos}
            sideMenuThreeColData={sideMenuThreeColData}
            setShowSideMenu={setShowSideMenu}
            setOpener={setOpener}
          />
        )}
      </div>
    </section>
  );
};
export default Hero;
