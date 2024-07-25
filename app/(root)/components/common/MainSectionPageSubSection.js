import Image from "next/image";
import Link from "next/link";
import CardsSlider from "./CardsSlider";
import { dailyOffers } from "@/data/fake";
import BranchesSlider from "@/components/fashion/BranchesSlider";
import OffersSlider from "@/components/fashion/OffersSlider";
import DoubleRowSliderSmallCard from "@/components/common/DoubleRowSliderSmallCard";


const MainSectionPageSubSection = ({ heading, branches, img, offers }) => {
  return (
    <section className="mt-6 rounded-2xl bg-maingray px-3 py-6">
      {/* head */}
      <h2 className="text-center text-2xl font-bold">{heading}</h2>

      {/* branches */}
      <div className="my-6 flex place-content-center">
        <div className="max-w-full">
          <BranchesSlider branches={branches} />
        </div>
      </div>

      {/* offers and products */}

      <div className="flex flex-col justify-center lg:flex-row">
        {/* right block */}
        <div className="l relative flex lg:w-[154px] shrink-0  place-content-center overflow-hidden px-2.5">
          <div className="relative z-10 mb-8 mt-auto max-w-full">
            {/* offers grid */}
            <div className=" mt-4 hidden grid-cols-1 gap-4 lg:grid">
              {offers.map((offer) => (
                <Link
                  href={offer.href}
                  key={offer.name}
                  className="border border-[#e5e5e5] bg-white p-2.5 text-xs font-medium shadow-sm"
                >
                  {offer.name}
                </Link>
              ))}
            </div>
            <div className="max-w-full lg:hidden ">
              <OffersSlider offers={offers} />
            </div>
          </div>
          <div className="absolute inset-0 mb-1.5 mt-1 hidden bg-white lg:block">
            <Image src={img} alt="" />
          </div>
        </div>
        {/* offers slider */}
        <div className="overflow-hidden rounded-e-2xl ">
          <DoubleRowSliderSmallCard products={dailyOffers} />
        </div>
      </div>
    </section>
  );
};
export default MainSectionPageSubSection;
