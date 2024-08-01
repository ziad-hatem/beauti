import BigProductCard from "@/components/common/BigProductCard";
import { mainContext } from "@/contexts/ContextProvider";
import { dailyOffers } from "@/data/fake";
import { useContext, useEffect, useState } from "react";
import SimpleCardNoButtonSlider from "./SimpleCardNoButtonSlider";
import CardsSlider2 from "./CardsSlider2";
import { boysEconomy } from "@/data/fashionData";
const GlassesMostSelled = ({
  text = "الأكثر مبيعاً النظارات الشمسية",
  classNames = "",
  glassClassName = "",
  linkClassName = "!bg-white !text-black",
  products = boysEconomy,
  titleColor,
  cardsClasses,
}) => {
  const [product, setBigProduct] = useState(products[0]);
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row 2xl:items-center">
        <div
          className={`section-title mb-3 !hidden w-full items-center !px-[13px] max-lg:!flex max-sm:h-[38px] md:h-[50px] lg:px-10 ${classNames}`}
        >
          <h2 className="font-medium max-md:!text-[12px]">{text}</h2>
          <div className={`displayAll  ${linkClassName}`}>
            <a href="/">عرض الكل</a>
          </div>
        </div>
        <div className="flex max-lg:mb-[16px] xl:w-[280px]">
          <BigProductCard product={product} className={glassClassName} />
        </div>
        <div className="glassesMostSelled flex !h-full flex-col justify-around rounded-[14px] lg:mr-6 lg:w-[calc(100%_-_304px)]">
          <div
            className={`header my-[38px] mr-7 hidden text-[15px] font-[400] lg:block lg:text-[22px] text-[${titleColor}]`}
          >
            {text}
          </div>
          <CardsSlider2
            glassCard="glassCard"
            products={products}
            swiperClassName="NextButtonSwiperPrev0PX !p-0"
            imgClasses={cardsClasses}
            click={setBigProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassesMostSelled;
