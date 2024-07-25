import Category from "@/components/common/filter/Category";
import CheckerRow from "@/components/common/filter/CheckerRow";
import CheckboxBlock from "@/components/common/filter/CheckboxBlock";
import PriceSelector from "@/components/common/filter/PriceSelector";
import RatingBlock from "@/components/common/filter/RatingBlock";
import SectionsBlock from "@/components/common/filter/SectionsBlock";
import BrandFilterBlock from "@/components/common/filter/BrandFilterBlock";
import ColorFilterBlock from "@/components/common/filter/ColorFilterBlock";
import Suggestions from "@/components/common/filter/Suggestions";
import smallVerBanner from "../../../../public/imgs/banners/small-ver-banner.png";

import {
  FashionArrive,
  FashionCondition,
  FashionMaterials,
  FashionRating,
  FashionSubSections,
  Filterbrands,
  filterColors,
  filterOffers,
  sectionsTree,
} from "@/data/fake";
import Image from "next/image";

const FashionSideFilter = () => {
  return (
    <div className="hidde bg-maingray w-[297px] shrink-0 flex-col gap-5 rounded-2xl p-4 xl:flex">
      <Category
        categoryName={"الشحن بواسطة"}
        content={<CheckerRow label={"بيوتي إكسبريس"} />}
        contentClasses={"px-1 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"السعر"}
        content={<PriceSelector />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"ألاقسام"}
        content={<SectionsBlock tree={sectionsTree} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"تقيم المنتج"}
        content={<RatingBlock array={FashionRating} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"قسم الأزياء"}
        content={<CheckboxBlock array={FashionSubSections} />}
        contentClasses={"px-1 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"المادة"}
        content={<CheckboxBlock array={FashionMaterials} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"وصل حديثا"}
        content={<CheckboxBlock array={FashionArrive} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"حالة المنتج "}
        content={<CheckboxBlock array={FashionCondition} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"العلامة التجارية "}
        content={<BrandFilterBlock brands={Filterbrands} />}
        contentClasses={" mt-2"}
        opened={true}
      />
      <Category
        categoryName={"اللون"}
        content={<ColorFilterBlock colors={filterColors} />}
        contentClasses={"px-2 mt-2"}
        opened={true}
      />
      <Category
        categoryName={"مُقترحة لك"}
        content={<Suggestions products={filterOffers} />}
        contentClasses={"mt-2"}
      />
      <div className="mt-3.5 overflow-hidden rounded-2xl">
        <Image src={smallVerBanner} alt="" className="mx-auto" />
      </div>
    </div>
  );
};
export default FashionSideFilter;
