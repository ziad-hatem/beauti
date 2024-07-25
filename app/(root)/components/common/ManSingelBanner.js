import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ManSingelBanner({ banner, links, hover = "#51383C" }) {
  const [mobile, setMobileWidth] = useState(false);
  const [width, setWidth] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(null);
  useEffect(() => {
    // Check if the window object is available (browser environment)
    if (typeof window !== "undefined") {
      // Event listener for window resize
      const handleResize = () => {
        setMobileWidth(window.innerWidth <= 767);
      };

      // Set initial width
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array to run only once

  return (
    <div className="single-banner relative mt-6 flex min-h-fit flex-wrap max-md:mx-[13px] xl:bg-[#FAFAFA]">
      <div className="section-title !m-0 !mx-auto !mb-[14px] flex !h-[35px] w-full items-center !justify-center max-md:!bg-[#07368A] max-md:!text-[13px] max-md:!text-white md:hidden">
        <h2>الملابس العربيه</h2>
      </div>
      {mobile ? (
        <>
          <Image
            src={banner.smallImg}
            alt="single banner"
            className="!xl:w-[300px] !h-auto w-full"
          />
        </>
      ) : (
        <Image
          src={banner.img}
          alt="single banner"
          className="!xl:w-[300px] !h-auto w-full"
        />
      )}
      <div className="flex w-full justify-between md:hidden">
        <div className="flex !h-fit !w-full flex-wrap items-center justify-center gap-[14px] bg-[#fafafa] bg-opacity-70 px-[37px] py-[16px] ">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className="link flex h-[4.7vh] w-[32vw] items-center justify-center bg-white text-[9px] font-[500] md:hover:!bg-[#51383C]"
              >
                {link.title}
              </Link>
            );
          })}
          <Link
            href={"/"}
            className="flex h-[4.7vh] w-[66.5vw] items-center justify-center bg-[#F4F0ED] text-[10px] font-[500]"
          >
            عرض كل نظارات الأولاد
          </Link>
        </div>
      </div>
      <div
        className="left-object !top-1/2 hidden md:block"
        style={{
          transform: "translate(0, -25%)",
        }}
      >
        <div className="links !w-[380px]">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                onMouseEnter={() => setMouseEnter(i)}
                onMouseLeave={() => setMouseEnter(null)}
                style={{
                  backgroundColor: mouseEnter == i && hover,
                }}
                className={`link !h-[50px] !w-[107px] !text-[13px] `}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <a
        href="/"
        className="!absolute !bottom-0  !left-0 !mb-[11px] !ml-[13px] hidden h-[26px] w-[94px] items-center justify-center rounded-[13px] !bg-[#383838] text-[15px] font-[500] text-white lg:flex"
      >
        عرض الكل
      </a>
    </div>
  );
}
