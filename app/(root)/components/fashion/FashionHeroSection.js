import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/banners/BannerSlider";
import ImgsOffersSlider from "@/components/fashion/ImgsOffersSlider";

import {
  FashionHeroBanners,
  FashionHeroMobileBanners,
  fashionMainSubSections,
} from "@/data/fashionSectionData";

const FashionHeroSection = () => {
  return (
    <section>
      {/* main banner */}
      <div className=" w-full max-w-[971px] overflow-hidden rounded-lg lg:rounded-2xl">
        <BannerSlider
          desktopBanners={FashionHeroBanners}
          mobileBanners={FashionHeroMobileBanners}
          swiperClass={"fashion-one"}
        />
      </div>
      {/* sub sections */}
      <div className="flex place-content-center mt-6">
        <ImgsOffersSlider
          array={fashionMainSubSections}
          spacesInDesktop={32}
          spacesInMobile={10}
          slideClassName={"!w-20 sm:!w-32 md:!w-[167px]"}
        />
      </div>
      {/* <div className="mt-3 flex items-center justify-center gap-3 lg:justify-between lg:gap-8 w-">
        {fashionMainSubSections.map((subSection) => (
          <Link key={subSection.name} href={subSection.href} className="">
            <Image src={subSection.img} alt="" className="object-cover" />
          </Link>
        ))}
      </div> */}
    </section>
  );
};
export default FashionHeroSection;
