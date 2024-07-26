import Image from "next/image";
import React, { useEffect, useState } from "react";

const WomenSidebarSection2 = ({
  img = "/imgs/womenFashion/sideImg2.svg",
  mobileImg = "/imgs/womenFashion/mobileImg2.svg",
  className = "",
}) => {
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
    <div
      className={`h-full w-auto max-md:mb-[16px] lg:h-full xl:max-h-full xl:w-fit ${className}`}
    >
      <div className="relative h-full min-w-[200px] overflow-hidden max-md:!mx-3 md:mx-0 xl:max-h-full">
        <Image
          src={mobile ? mobileImg : img}
          alt="sideimg"
          width={mobile ? 400 : 100}
          height={mobile ? 400 : 100}
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default WomenSidebarSection2;
