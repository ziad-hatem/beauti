import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FlexLinkBannerMobile from "@/components/common/FlexLinkBannerMobile";
export default function FlexLinksBanner({
  background,
  links,
  backgroundMobile,
}) {
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
  }, []);
  return (
    <section>
      <div className={"FlexLinksBanner !max-xl:flex relative mt-6 flex-col"}>
        {mobile ? (
          <Image
            src={backgroundMobile}
            alt={"backGround"}
            className="mx-auto w-[calc(100_-_26px)] max-xl:h-full"
          />
        ) : (
          <div className="background">
            <Image
              src={background}
              alt={"backGround"}
              className="w-full max-xl:h-full "
            />
          </div>
        )}
        <div className="right !hidden md:!block">
          <div className="links">
            {links.map((link, i) => {
              return (
                <Link key={i} href={link.href} alt={link.href}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden h-fit w-full max-md:block">
          <div className="mb-7 mr-[5px] mt-4">
            <FlexLinkBannerMobile links={links} />
          </div>
        </div>
      </div>
    </section>
  );
}
