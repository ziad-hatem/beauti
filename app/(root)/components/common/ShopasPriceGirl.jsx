import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Home.module.css";

const LessThanComponent = ({ link, className, i, dir }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`${styles[`item${dir}${i}`]} `}>
      <Link
        href={"/"}
        style={{
          background: isHovered ? link.hover : link.color,
          // opacity: isHovered ? link.bgHoverOpacity + "%" : 1,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`link ${className} flex items-center justify-center transition-all max-md:h-[8.44vw] max-md:max-h-[40px] max-md:w-[28.15vw] max-md:max-w-[120px] md:h-[44px] md:w-[146px] lg:h-[44px] lg:w-[146px] `}
      >
        <div
          className={`max-md:text-[10px] md:text-xl !text-[${
            link.textColor ? link.textColor : "#000"
          }]`}
        >
          {link.title}
        </div>
      </Link>
    </div>
  );
};

export default function ShopasPriceGirl({
  img = "",
  mobileImg = "",
  leftlinks = [],
  rightlinks = [],
}) {
  return (
    <section className="mt-8 h-fit w-full bg-[#FAFAFA] md:mt-10">
      <div className="flex w-full !justify-center !px-4">
        <h2 className="mb-[33px] mt-[18px] text-[13px] font-[400] text-black md:mb-[25px] md:mt-[24px] md:text-[22px]">
          أزياء الشخصيات الكرتونية
        </h2>
      </div>
      <div className={`${styles.container} pb-[15px]`}>
        <div className={`${styles.RightLinks} justify-self-end`}>
          {leftlinks.map((e, i) => {
            return (
              <LessThanComponent
                key={i}
                link={e}
                className={styles.gridItemRight}
                i={++i}
                dir="Right"
              />
            );
          })}
        </div>
        <Image
          src={img}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="relative z-20 hidden h-full w-auto object-cover mix-blend-multiply md:block"
        />
        <Image
          src={mobileImg}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="relative z-20 block h-full w-[calc(85px_+_10vw)] object-cover mix-blend-multiply md:hidden"
        />
        <div className={`${styles.LeftLinks} justify-self-end`}>
          {rightlinks.map((e, i) => {
            return (
              <LessThanComponent
                key={i}
                link={e}
                className={styles.gridItemLeft}
                i={++i}
                dir="Left"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
