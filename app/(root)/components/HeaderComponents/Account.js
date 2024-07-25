"use client";

import { mainContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import { useContext, useState } from "react";
import account from "../../../../public/icons/header/account.png";
import Link from "next/link";

import accountList from "../../../../public/icons/header/Account-list.svg";
import ListView from "../../../../public/icons/header/List View.svg";
import wishList from "../../../../public/icons/header/Wish List.svg";
import orders from "../../../../public/icons/header/Order History.svg";
import returnOrders from "../../../../public/icons/header/Return.svg";
import tickets from "../../../../public/icons/header/Two Tickets.svg";
import invoice from "../../../../public/icons/header/Invoice.svg";
import chat from "../../../../public/icons/header/Chat Message.svg";

import useWindowSize from "@/libs/useWindowSize";

const accountListLinks = [
  {
    title: "معلومات حسابك",
    href: "#",
    icon: accountList,
  },
  {
    title: "قائمة العناوين",
    href: "#",
    icon: ListView,
  },
  {
    title: "قائمة رغباتي",
    href: "#",
    icon: wishList,
  },
  {
    title: "سجل الطلبات",
    href: "#",
    icon: orders,
  },
  {
    title: "طلب الارجاع / الاستبدال",
    href: "#",
    icon: returnOrders,
  },
  {
    title: "سجل الكوبونات و الولاء",
    href: "#",
    icon: tickets,
  },
  {
    title: "عرض رصيدك المتوفر",
    href: "#",
    icon: invoice,
  },
  {
    title: "مركز الرسائل",
    href: "#",
    icon: chat,
  },
];

const Account = () => {
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
      } relative mx-3 hidden select-none rounded-t-19 lg:block account-container`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex  cursor-pointer items-center gap-2.5 rounded-19 border-2 border-white bg-primery px-[14px] py-2 font-bold text-white"
        style={{ width: opened ? "192px" : "129px",     justifyContent: "space-around" }}
        onClick={handleClick}
      >
        <span className="flex items-center gap-[3px]">
          <span className="size-4">
            <Image src={account} alt="account icon" className="w-full " />
          </span>
          <span>الحساب</span>
        </span>
        <div className={`${opened ? "!ms-auto me-1 rotate-180 " : ""}`}>
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
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* drop down */}
      <div
      style={opened ? {height: "310px"} : {right: "-61px", height: "0", padding: "0"}}
        className={`absolute  left-0 right-0 z-50 rounded-b-15  bg-white px-3 pb-3 shadow-headerDropMenu`}
      >
        <Link
          href={"/"}
          className="my-[9px] block w-full rounded-10 bg-secone py-1.5 text-15 font-medium text-white"
          onClick={handleClosing}
        >
          تسجيل الدخول
        </Link>
        <ul
          className="space-y-[11px] text-sm font-medium text-secone "
          onClick={handleClosing}
        >
          {accountListLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="flex items-center gap-1 transition hover:bg-headerMenusHover"
              >
                <span className="size-5">
                  <Image src={link.icon} alt={link.title} />
                </span>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Account;
