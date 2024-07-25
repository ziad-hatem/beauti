import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hexToRgb } from "@/libs/colorConverter";
export default function Jalabiyas({
  background,
  title,
  links,
  color,
  mobileBackground,
  girl,
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
    <section className="round !min-h-fit">
      <div className={"Jalabiyas relative mt-6 " + color}>
        <div className="background">
          {mobile ? (
            <>
              <Image
                src={mobileBackground}
                alt="جلابيات"
                className="mobileBackground"
              />
              <Image src={girl} className="girl" alt="جلابيات" />
            </>
          ) : (
            <Image
              src={background}
              alt="جلابيات"
              className="min-h-[250px] object-cover"
            />
          )}
        </div>
        <div className="right !left-[50%]">
          <div
            className="title !border-[1px] !border-[#C9DFEF] max-md:mr-8"
            style={{ borderColor: color }}
          >
            {title}
          </div>
          <div className="links max-md:mr-8">
            {links.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  style={{ backgroundColor: hexToRgb(color, 0.38) }}
                  className="max-md:!text-[10px] max-md:!font-[500]"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
