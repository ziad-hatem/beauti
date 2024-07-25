import React from 'react'
import Image from "next/image"

export default function FurnitureGallaryCard({ img, title }) {
    return (
        <div className="group flex h-full flex-col-reverse round-[18px] bg-transparent w-full">
          {/* first row tag an percent */}
          <div className="name">
            <h3 className=" !font-[500] pt-[12px] text-center leading-[1] text[14px] max-md:!text-[calc(6px+0.8vw)]">{title}</h3>
          </div>
    
          {/* image */}
          {/* {console.log(img)} */}
          <div className="relative rounded-xl max-md:overflow-hidden bg-[#F5F5F5] flex aspect-square p-[8px] md:p-[20px]">
            <Image
              src={img}
              loading="lazy"
              unoptimized
              alt=""
              className="mix-blend-multiply transition-all duration-500 m-auto object-contain aspect-square"
            />
          </div>
    
          {/* title */}
          {/* <h3 className="mt-1 min-h-8 overflow-hidden  text-center  text-[9px] font-bold text-secone hover:text-primery lg:mt-0  lg:text-xs">
            <Link href={`/product/${product.id}`}>
              {product.title.length > 20
                ? product.title.substring(0, 45) + "..."
                : product.title}
            </Link>
          </h3> */}
        </div>
      );
}
