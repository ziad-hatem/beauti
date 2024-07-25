"use client";
import Image from "next/image";
import squareMenu from "../../../../public/icons/header/squaresMenu.svg";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import Link from "next/link";
import { bottomHeadData } from "@/data/fake";
import SectionsMenu from "./SectionsMenu";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainContext } from "@/contexts/ContextProvider";

const BottomHead = () => {
  const [isScetionsOpen, setIsScetionsOpen] = useState(false);
  const [disableSectionBtn, setDisableSectionBtn] = useState(false);
  const pathname = usePathname();

  const { overlayActive } = useContext(mainContext);

  useEffect(() => {
    if (pathname === "/") {
      setDisableSectionBtn(true);
    } else {
      setDisableSectionBtn();
    }
  }, [pathname]);

  return (
    <div className="z-20">
      <div className="mt-2.5 hidden h-[44px] items-center rounded-2xl  bg-secone text-base font-[800] text-white lg:flex">
        <button
          className="flex h-full sectionsBtn shrink-0 items-center justify-between rounded-2xl bg-primery px-3"
          onClick={() => setIsScetionsOpen((prev) => !prev)}
          disabled={disableSectionBtn}
        >
          <div className="flex items-center gap-1.5 text-21">
            <Image src={squareMenu} alt="" className="" />
            <span>تصفح الأقسام</span>
          </div>
          <RiArrowDownDoubleFill className="text-2xl"/>
        </button>
        <ul className="flex w-full items-center justify-evenly">
          {bottomHeadData.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="transition-all hover:text-primery "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isScetionsOpen && <SectionsMenu />}

      {overlayActive && (
        <div className="bg-overlay absolute inset-x-0 -z-10 hidden h-screen lg:block"></div>
      )}
    </div>
  );
};
export default BottomHead;
