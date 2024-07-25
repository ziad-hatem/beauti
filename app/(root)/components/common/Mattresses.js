import React from 'react';
import WomenSidebarSection from './WomenSidebarSection';
import Image from 'next/image';

export default function Mattresses({mobileSideImg,sideImg,titleBg,products }) {
  return (
    <div className='flex gap-[25px] flex-col md:flex-row md:px-[13px]'>
        <WomenSidebarSection WebImg={sideImg} mobileImg={mobileSideImg}/>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[25px] gap-y-[40px]">
            {products.map((product, i) => (
            <div key={i + "product"} className="!h-fit aspect-square md:max-w-[224px]">
                <div>
                    <Image src={product.img} className="aspect-square" height="300" width="300"/>
                </div>
                <div className={`${titleBg} font-[300] h-[40px] flex justify-center items-center`}>{product.title}</div>
            </div>
        ))}
        </div>
    </div>
  )
}
