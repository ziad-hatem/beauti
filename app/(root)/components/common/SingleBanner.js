import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SingleBanner({ banner, links }) {
  const [mobile, setMobileWidth] = useState(false);
  const [width, setWidth] = useState(false);

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
      <Link
        href={"/"}
        content="فساتين"
        title="فساتين"
        className="left-btn hidden md:block"
      >
        فساتين
      </Link>
      <div className="flex w-full justify-between md:hidden">
        <Link
          href={"/"}
          content="فساتين"
          title="فساتين"
          className=" ml-2 mt-2 flex h-[35px] w-[147px] items-center justify-center bg-[#97CBE7] text-[11px] font-[500] text-white md:hidden"
        >
          عرض كل الفساتين
        </Link>
        <div className="ml-1 mt-[-22%] flex !h-[108px] !w-[133px] flex-wrap items-center justify-center gap-3 bg-[#fafafa] bg-opacity-70 py-[13px]">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className="link flex h-[18px] w-[51px] items-center justify-center bg-white text-[9px] font-[500]"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className="left-object !top-1/2 hidden md:block"
        style={{
          transform: "translate(0, -50%)",
        }}
      >
        <div className="links">
          {links.map((link, i) => {
            return (
              <Link key={i} href={link.href} className="link">
                {link.title}
              </Link>
            );
          })}
        </div>
        <a href="/" className="btn">
          عرض الكل
        </a>
      </div>
    </div>
  );
}
