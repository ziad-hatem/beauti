"use client";
import Image from "next/image";
import ksaFlag from "../../../../public/icons/header/sa-flag.svg";
import omanFlag from "../../../../public/icons/header/oman.svg";
import bahrainFlag from "../../../../public/icons/header/bahrain.svg";
import qatarFlag from "../../../../public/icons/header/qatar.svg";
import kuwaitFlag from "../../../../public/icons/header/kuwait.svg";
import uaeFlag from "../../../../public/icons/header/uae.svg";
import globalFlag from "../../../../public/icons/header/global.png";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "@/contexts/ContextProvider";
import useWindowSize from "@/libs/useWindowSize";
let languages = [
  {
    title: "العربية",
    value: "ar",
  },
  {
    title: "English",
    value: "en",
  },
];

let defaultCountry = {
  title: "السعودية",
  flag: ksaFlag,
};

let countries = [
  {
    title: "سلطنة عمان",
    flag: omanFlag,
  },
  {
    title: "البحرين",
    flag: bahrainFlag,
  },
  {
    title: "قطر",
    flag: qatarFlag,
  },
  {
    title: "الكويت",
    flag: kuwaitFlag,
  },
  {
    title: "الإمارات العربية",
    flag: uaeFlag,
  },
  {
    title: "عالمي",
    flag: globalFlag,
  },
];

const LangAndCountry = () => {
  const [opened, setOpened] = useState(false);
  const { setOverlayActive } = useContext(mainContext);

  const [currentLang, setCurrentLang] = useState("ar");
  const [country, setCountry] = useState(defaultCountry);
  const [countryChoices, setCountryChoices] = useState(countries);
  const screenWidth = useWindowSize().width;
  const handleClick = () => {
    setOpened((prev) => !prev);
    setOverlayActive((prev) => !prev);
  };

  const handleClosing = () => {
    setOpened(false);
    setOverlayActive(false);
  };

  const handleMouseLeave = () => {
    if (opened && screenWidth > 1024) {
      setOpened(false);
      setOverlayActive(false);
    }
  };

  const handleLang = (e) => {
    setCurrentLang(e.target.value);
    handleClosing();
  };

  const chooseCountry = (country) => {
    setCountry(country);
    const countriesAfterFilter = countries.map((count, i) => {
      if (count.title === country.title) {
        return defaultCountry;
      }
      return count;
    });
    setCountryChoices(countriesAfterFilter);
    handleClosing();
  };
  return (
    <div onMouseLeave={handleMouseLeave}>
      <button
        className="flex items-center justify-center gap-1.5 "
        onClick={handleClick}
      >
        <span>{currentLang === "ar" ? "العربية" : "English"}</span>
        <span className="w-[26px]">
          <Image src={country.flag} alt="sa flag" className="w-full" />
        </span>
      </button>

      {/* lang menu */}
      <div
        className={`${
          opened ? "visible" : "collapse"
        } absolute left-0 top-6 z-50  w-[265px] rounded-15 rounded-se-none bg-white p-[17px] text-start shadow-langDropMenu`}
      >
        {/* language */}
        <p className="text-13 font-bold text-black ">تغيير اللغة</p>

        <div className="mt-3 flex items-center justify-between">
          {languages.map((lang) => (
            <label
              key={lang.value}
              className="flex cursor-pointer items-center gap-1.5 px-2 text-sm font-medium text-black transition hover:bg-headerMenusHover"
            >
              <input
                type="radio"
                name="language"
                className="peer hidden"
                value={lang.value}
                checked={currentLang === lang.value}
                onChange={handleLang}
              />
              <div className="aspect-square w-4 shrink-0 rounded-full border border-primery outline -outline-offset-[4px] outline-white peer-checked:border-primery peer-checked:bg-primery"></div>
              <span className="peer-checked:text-primery">{lang.title}</span>
            </label>
          ))}
        </div>
        {/* divider */}
        <div className="my-[13px] h-[1px] bg-[#e1e1e1]"></div>

        {/* country */}
        <p className="text-13 font-bold text-black ">اختر بلد آخر</p>

        <div className="mt-[13px] grid grid-cols-[1.2fr_1fr] gap-x-3 gap-y-[23px] ">
          {countryChoices.map((con) => (
            <div
              key={con.title}
              className="flex flex-1 basis-[calc(50%_-_20px)] cursor-pointer items-center gap-2.5 whitespace-nowrap pe-1 text-11 text-black transition hover:bg-headerMenusHover"
              onClick={() => chooseCountry(con)}
            >
              <span className="w-[34px] shrink-0">
                <Image src={con.flag} alt={con.title} className="w-full" />
              </span>
              <span>{con.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LangAndCountry;
