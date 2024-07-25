import React from "react";
import { womanBrands } from "../../data/fake";
import Link from "next/link";
import Image from "next/image";
export default function BigBrand({ brands = womanBrands }) {
  return (
    <div className="BigBrand wrap mt-4 flex">
      {brands.map((element, i) => {
        return (
          <div className="BigBrand-card" key={i}>
            <Link key={element.woman} href={"/"} className="block w-full">
              <Image
                src={element.woman}
                alt={element.color}
                loading="lazy"
                unoptimized
                className="woman select-none object-cover md:!h-[100%]"
              />
              <Image
                loading="lazy"
                unoptimized
                src={element.brand}
                alt={element.color}
                className="brand !h-fit select-none object-cover"
              />
              <div
                className="background max-md:!h-[85.45%]"
                style={{ backgroundColor: element.color }}
              ></div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
