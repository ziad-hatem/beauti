import Image from "next/image";
import React, { useEffect, useState } from "react";

const WomenSidebarSection = ({
  mobileImg = "/imgs/womenFashion/sideImgmobile.svg",
  WebImg = "/imgs/womenFashion/sideImg.svg",
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
    <div className="w-full max-md:h-fit md:h-[90%] md:w-auto xl:max-h-[650px] 2xl:h-full 2xl:w-fit">
      <div className="relative mx-auto !h-full max-md:h-[294px] max-md:!w-full md:mx-0 md:h-full">
        {mobile ? (
          <Image
            src={mobileImg}
            alt="sideimg"
            width={700}
            height={700}
            loading="lazy"
            className="h-full !w-full object-cover object-top"
          />
        ) : (
          <Image
            src={WebImg}
            alt="sideimg"
            width={300}
            loading="lazy"
            height={650}
            className="h-full !w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
};

export default WomenSidebarSection;
