"use client";

import { mainContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import { useContext, useState } from "react";
import info from "../../../../public/icons/header/info.png";
import Link from "next/link";

import call from "../../../../public/icons/header/Call.svg";
import chatRoom from "../../../../public/icons/header/Chat Room.svg";
import whatsappChat from "../../../../public/icons/header/WhatsApp.svg";
import faq from "../../../../public/icons/header/FAQ.svg";
import faq2 from "../../../../public/icons/header/FAQ 2.svg";

import useWindowSize from "@/libs/useWindowSize";

const accountListLinks = [
  {
    title: "اتصل بنا",
    href: "#",
    icon: call,
  },
  {
    title: "المحادثة المباشرة - Live Chat",
    href: "#",
    icon: chatRoom,
  },
  {
    title: "المحادثة المباشرة - WhatsApp",
    href: "#",
    icon: whatsappChat,
  },
  {
    title: "الأسئلة الشائعة للعملاء",
    href: "#",
    icon: faq,
  },
  {
    title: "الأسئلة الشائعة للتجار",
    href: "#",
    icon: faq2,
  },
];

const HelpAndCart = () => {
  const [opened, setOpened] = useState(false);
  const { setOverlayActive } = useContext(mainContext);
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
  return (
    <div
      className={`${
        opened ? "bg-white" : ""
      } hidden rounded-19 rounded-ee-19 border border-secone bg-white lg:block help-container`}
      style={opened ? {overflowX: "clip", width: "290px"} : {overflowX: "clip", width: "261px"}}
    >
      <div
        className={`flex select-none ${
          opened ? "gap-2" : "gap-3"
        } rounded-19 py-2 pe-[11px] font-bold text-secone`}
        style={{width: "max-content"}}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative ps-[11px]"
          style={{ width: opened ? "240px" : "123px" }}
        >
          {/* help */}
          <div
            className=" flex cursor-pointer items-center text-secone"
            onClick={handleClick}
          >
            <span className="me-[3px] w-5">
              <Image src={info} alt="info icon" className="w-full" />
            </span>
            <span>المساعدة</span>
            <div
              className={`${
                opened ? "!ms-auto me-3 rotate-180 " : ""
              } ms-[7px]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7483 1.21837C10.5458 0.967465 10.1764 0.926785 9.92331 1.12751L6.37695 3.9397L2.8306 1.12751C2.57746 0.926785 2.2081 0.967465 2.00559 1.21837C1.80309 1.46928 1.84413 1.83541 2.09726 2.03614L6.01029 5.13908C6.22465 5.30907 6.52925 5.30907 6.74362 5.13908L10.6566 2.03614C10.9098 1.83541 10.9508 1.46928 10.7483 1.21837Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* drop down */}
          <div
            className={`absolute  -right-[1px] left-0 top-[33px] z-50 rounded-b-15 bg-white px-4 pb-3 shadow-headerDropMenu`}
            style={opened ? {right: "12px"} : {padding: "0", height: "0", right: "-20px"}}
          >
            <ul
              className="space-y-[13px] pt-3 text-sm font-medium text-secone"
              onClick={handleClosing}
              style={{transition: "0.2s"}}
            > 
              {accountListLinks.map((link) => (
                <li key={link.title} style={{transition: "0.1s"}}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-[7px] transition hover:bg-headerMenusHover"
                  >
                    <span className="flex w-6 items-center justify-center">
                      <Image src={link.icon} alt={link.title} />
                    </span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* cart  */}
        <Link href={"#"} className="flex items-center gap-1">
          <span className={`${opened ? "me-1" : ""} relative`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M5.53971 13.6842C5.29249 13.6842 5.05081 13.7595 4.84525 13.9004C4.63969 14.0414 4.47947 14.2417 4.38486 14.4762C4.29025 14.7106 4.2655 14.9685 4.31373 15.2174C4.36196 15.4662 4.48101 15.6948 4.65583 15.8742C4.83065 16.0537 5.05337 16.1758 5.29585 16.2253C5.53833 16.2749 5.78966 16.2494 6.01807 16.1523C6.24648 16.0552 6.4417 15.8908 6.57905 15.6798C6.7164 15.4689 6.78971 15.2208 6.78971 14.9671C6.78971 14.6269 6.65802 14.3006 6.4236 14.06C6.18918 13.8194 5.87123 13.6842 5.53971 13.6842ZM14.2897 11.1184H4.28971C4.0687 11.1184 3.85674 11.0283 3.70046 10.8679C3.54418 10.7075 3.45638 10.49 3.45638 10.2632C3.45638 10.0363 3.54418 9.81879 3.70046 9.6584C3.85674 9.498 4.0687 9.4079 4.28971 9.4079H11.3657C11.9086 9.4061 12.4362 9.2238 12.8696 8.88831C13.303 8.55283 13.6188 8.08222 13.7697 7.54703L15.0909 2.8009C15.1263 2.67361 15.1325 2.53962 15.1089 2.40947C15.0854 2.27932 15.0326 2.15656 14.955 2.05086C14.8773 1.94517 14.7768 1.85941 14.6614 1.80036C14.5459 1.7413 14.4187 1.71055 14.2897 1.71053H4.07227C3.89976 1.21221 3.58175 0.780607 3.16157 0.474512C2.74139 0.168417 2.23947 0.00272038 1.72421 0H0.95638C0.735366 0 0.523405 0.0901078 0.367125 0.250501C0.210844 0.410894 0.123047 0.628433 0.123047 0.855263C0.123047 1.08209 0.210844 1.29963 0.367125 1.46003C0.523405 1.62042 0.735366 1.71053 0.95638 1.71053H1.72421C1.90511 1.71118 2.08094 1.77195 2.22537 1.88374C2.3698 1.99554 2.47506 2.15234 2.52539 2.33068L2.65499 2.79657L2.65519 2.8009L4.02238 7.71199C3.38618 7.78223 2.80044 8.10015 2.38577 8.60029C1.9711 9.10044 1.75906 9.74472 1.79332 10.4005C1.82758 11.0563 2.10553 11.6736 2.56993 12.1253C3.03434 12.5771 3.64984 12.8289 4.28971 12.8289H14.2897C14.5107 12.8289 14.7227 12.7388 14.879 12.5784C15.0352 12.4181 15.123 12.2005 15.123 11.9737C15.123 11.7469 15.0352 11.5293 14.879 11.3689C14.7227 11.2085 14.5107 11.1184 14.2897 11.1184ZM13.185 3.42105L12.1673 7.0768C12.117 7.25528 12.0117 7.41223 11.8672 7.52411C11.7227 7.63599 11.5467 7.69679 11.3657 7.69737H5.7517L5.53925 6.93429L4.56173 3.42105H13.185ZM12.2064 13.6842C11.9592 13.6842 11.7175 13.7595 11.5119 13.9004C11.3064 14.0414 11.1461 14.2417 11.0515 14.4762C10.9569 14.7106 10.9322 14.9685 10.9804 15.2174C11.0286 15.4662 11.1477 15.6948 11.3225 15.8742C11.4973 16.0537 11.72 16.1758 11.9625 16.2253C12.205 16.2749 12.4563 16.2494 12.6847 16.1523C12.9131 16.0552 13.1084 15.8908 13.2457 15.6798C13.3831 15.4689 13.4564 15.2208 13.4564 14.9671C13.4564 14.6269 13.3247 14.3006 13.0903 14.06C12.8558 13.8194 12.5379 13.6842 12.2064 13.6842Z"
                fill="black"
              />
            </svg>
            <span className="absolute -start-1 -top-1 grid size-[13px] place-content-center rounded-full border border-white bg-primery text-8 text-white">
              99
            </span>
          </span>
          <span style={opened ? {marginRight: "40px"} : {marginRight: "0"}}>سلة التسوق</span>
        </Link>
      </div>
    </div>
  );
};
export default HelpAndCart;
