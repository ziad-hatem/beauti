import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SlimBanner({ title, banner, mobileBanner }) {
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
    <div className="SlimBanner relative mb-5 mt-4 h-fit">
      <Image src={mobile ? mobileBanner : banner} alt="عنوان السكشن" />
    </div>
  );
}
