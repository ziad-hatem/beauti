"use client";

import { mainContext } from "@/contexts/ContextProvider";
import { useContext, useState } from "react";
import ksaFlag from "../../../../public/icons/header/sa-flag.svg";
import uaeFlag from "../../../../public/icons/header/uae.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

let countries = [
  {
    title: "السعودية",
    flag: ksaFlag,
  },

  {
    title: "الإمارات العربية المتحدة",
    flag: uaeFlag,
  },
];

let defaultCountry = {
  title: "السعودية",
  flag: ksaFlag,
};

const ChangeLocationMenu = () => {
  const { changeLocationOpened, setChangeLocationOpened } =
    useContext(mainContext);
  const [opened, setOpened] = useState(false);

  const [islocationChosen, setIsLocationChosen] = useState(false);
  const [country, setCountry] = useState(defaultCountry);

  const handleClosing = () => {
    setChangeLocationOpened(false);
    document.body.style.height = "auto";
    document.body.style.overflow = "initial";
    setIsLocationChosen(false);
  };
  const handleClick = () => {
    setOpened((prev) => !prev);
  };
  const chooseCountry = (country) => {
    setCountry(country);
    setOpened(false);
  };

  return (
    <div
      className={`${
        changeLocationOpened ? "visible" : "collapse hidden"
      } absolute inset-0 z-[100] flex h-screen w-full items-center justify-center bg-overlay`}
    >
      <div
        className={`z-[100] mx-3 flex h-[calc(100vh_-_50px)]  w-full flex-col overflow-hidden rounded-15  bg-[#E6E6E6] text-start shadow-langDropMenu lg:mx-0 lg:w-[calc(100vw_-200px)]`}
      >
        {/* title and selector section */}
        <div className="flex items-center justify-between bg-white p-[30px]">
          <p className="text-6 font-bold text-black ">إضافة عنوان جديد</p>

          {/* selector */}
          <div className="relative">
            <button
              className="flex cursor-pointer items-center gap-[5px] text-15"
              onClick={handleClick}
            >
              <span>
                <Image src={country.flag} alt={country.title} />
              </span>
              <span>
                <span className="font-bold">الشحن إلى</span>{" "}
                <span className="font-medium">{country.title}</span>
              </span>
              <span className={`${opened ? "rotate-180" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path d="M7 8L0.0717964 0.5H13.9282L7 8Z" fill="black" />
                </svg>
              </span>
            </button>

            {/* drop down */}
            <div
              className={`${
                opened ? "visible" : "collapse hidden"
              } absolute left-0 top-7 z-10 w-[256px] space-y-[17px] rounded-15 rounded-se-none bg-white  p-5 text-11 shadow-langDropMenu`}
            >
              {countries.map((coun) => (
                <div
                  key={coun.title}
                  className="flex cursor-pointer items-center justify-between rounded-e-15 pe-0.5 transition hover:bg-headerMenusHover"
                  onClick={() => chooseCountry(coun)}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-[34px] shrink-0">
                      <Image
                        src={coun.flag}
                        alt={coun.title}
                        className="w-full"
                      />
                    </span>
                    <span>{coun.title}</span>
                  </div>
                  <span
                    className={`flex aspect-square w-[15px] items-center justify-center rounded-15 border ${
                      coun.title === country.title
                        ? "border-primery bg-primery"
                        : "border-[#999]"
                    } `}
                  >
                    {coun.title === country.title && (
                      <FaCheck className="text-8 text-white" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* map section */}
        <div
          className="relative flex-1"
          onClick={() => setIsLocationChosen(true)}
        >
          <input
            type="text"
            className="shadow-[0px_3px_6px_0px_rgba(0, 0, 0, 0.25)] absolute left-0 right-0 top-3 mx-7 rounded-lg px-[14px] py-[15px] text-15 font-medium"
            placeholder="ابحث عن موقعك أو عنوانك المختصر"
          />
        </div>

        {/* btn section */}
        <div className="bg-white px-[29px] py-5">
          <button
            className={`me-0 ms-auto block rounded-13 bg-primery px-7 py-3 text-15 font-medium text-white ${
              islocationChosen ? "opacity-100" : "opacity-50"
            }`}
            onClick={handleClosing}
          >
            تأكيد الموقع
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangeLocationMenu;
