import dynamic from "next/dynamic";
// import MainSideFilter from "@/components/common/filter/MainSideFilter";
import FashionHeroSection from "@/components/fashion/FashionHeroSection";
import MainSectionPageSubSection from "@/components/common/MainSectionPageSubSection";
import DoubleBanner from "@/components/banners/DoubleBanner";
import Offers from "@/components/common/Offers";
import travelBags from "../../../public/imgs/fashion/travel-bags.png";
import winterCloths from "../../../public/imgs/fashion/winter-cloths.png";
import offersOverlay from "../../../public/imgs/fashion/banner-overlay-1.png";
import {
  filterbrands,
  filterColors,
  filterOffers,
  heroBanners,
  offers,
} from "@/data/fake";
import {
  babyFashionOffersCategories,
  babysFashionBranches,
  boysFashionBranches,
  boysFashionOffersCategories,
  fashionFirstBannerSliderDesktop,
  fashionFirstBannersSliderMobile,
  fashionLeftBanner,
  fashionMaterials,
  fashionRightBanner,
  fashionSubSections,
  girlsFashionBranches,
  girlsFashionOffersCategories,
  menFashionBranches,
  menFashionOffersCategories,
  menOffersSlider,
  womenFashionBranches,
  womenFashionOffersCategories,
  womenOffersSlider,
} from "@/data/fashionSectionData";
import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/banners/BannerSlider";
import ImgsOffersSlider from "@/components/fashion/ImgsOffersSlider";
import boysLong from "../../../public/imgs/fashion/boys/boys-long.png";
import babysLong from "../../../public/imgs/fashion/boys/boys-long.png";
import womenLong from "../../../public/imgs/fashion/women/women-long.png";
import menLong from "../../../public/imgs/fashion/men/men-long.png";
import girlsLong from "../../../public/imgs/fashion/girls/girls-long.png";
import dressesOverlay from "../../../public/imgs/fashion/dresses-overlay.png";
import {
  dressesLinks,
  offersAndDiscountLinks,
} from "../data/fashionSectionData";

const MainSideFilter = dynamic(
  () => import("@/components/common/filter/MainSideFilter"),
  {
    ssr: false,
  },
);

const FashionPage = () => {
  return (
    <main className="container mx-auto my-4 min-h-screen px-3 xl:px-0">
      <div className="mx-auto mt-4 flex flex-col items-start gap-3 xl:flex-row">
        {/* side filter */}
        <MainSideFilter
          sectionPageName={"قسم الأزياء"}
          subSections={fashionSubSections}
          brands={filterbrands}
          colors={filterColors}
          suggestedOffers={filterOffers}
          customChecker={"المادة"}
          customCheckerElements={fashionMaterials}
        />
        {/* page content  */}
        <div className="mx-auto w-full max-w-[971px] ">
          <FashionHeroSection />
          {/* offer section */}
          <Offers
            offers={offers}
            offerpercentage={75}
            sectionName={"عروض الأزياء"}
          />
          {/* women section */}
          <MainSectionPageSubSection
            heading={"الازياء النسائية"}
            img={womenLong}
            branches={womenFashionBranches}
            offers={womenFashionOffersCategories}
          />

          {/* bags and winter */}
          <div className="mt-3 flex select-none flex-col-reverse gap-2 sm:flex-row lg:gap-3">
            <Link href={"/"} className="overflow-hidden">
              <Image src={travelBags} alt="travel bags" className="mx-auto" />
            </Link>
            <Link href={"/"} className="overflow-hidden">
              <Image src={winterCloths} alt="winter cloths banner" />
            </Link>
          </div>

          {/* banner */}
          <div className="mt-3 block w-full max-w-[971px] overflow-hidden rounded-lg lg:rounded-2xl">
            <BannerSlider
              desktopBanners={fashionFirstBannerSliderDesktop}
              // mobileBanners={fashionFirstBannersSliderMobile}
              swiperClass={"fashion-one"}
            />
          </div>

          {/* men section */}
          <MainSectionPageSubSection
            heading={"الازياء الرجالية"}
            img={menLong}
            branches={menFashionBranches}
            offers={menFashionOffersCategories}
          />

          {/* brands */}
          {/* <div>brands here</div> */}

          {/* banner with links*/}
          <div className="relative mt-3  w-full overflow-hidden rounded-lg text-secone lg:rounded-2xl">
            <Image src={offersOverlay} alt="offers overlay" />
            <div className="absolute bottom-0 left-0 top-0 w-1/2 lg:p-8 lg:ps-16">
              <h3 className="text-19 font-bold lg:text-5xl">عروض وخصومات</h3>
              <p className="text-10 font-bold text-[#977d66] lg:mt-3 lg:text-xl">
                تصل الي أكثر من 70%
              </p>
              <div className="grid grid-cols-2 text-10 lg:mt-6 lg:text-base">
                {offersAndDiscountLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.title}
                    className="mt-4 cursor-pointer font-extrabold underline transition-all hover:text-black"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* boys section */}
          <MainSectionPageSubSection
            heading={"ازياء الاولاد"}
            branches={boysFashionBranches}
            img={boysLong}
            offers={boysFashionOffersCategories}
          />

          {/* banner */}
          <DoubleBanner
            doubleClass={"fashion-double-one"}
            rightBanners={fashionRightBanner}
            leftBanners={fashionLeftBanner}
          />

          {/* offers for women */}
          <div className="flex place-content-center">
            <ImgsOffersSlider
              array={womenOffersSlider}
              slideClassName={"!w-32 sm:!w-40 md:!w-[206px]"}
              spacesInDesktop={49}
            />
          </div>

          {/* girls section */}
          <MainSectionPageSubSection
            heading={"ازياء البنات"}
            branches={girlsFashionBranches}
            img={girlsLong}
            offers={girlsFashionOffersCategories}
          />

          {/* offers for men */}
          <div className="flex place-content-center">
            <ImgsOffersSlider
              array={menOffersSlider}
              slideClassName={"!w-20 sm:!w-24 md:!w-[140px]"}
            />
          </div>

          {/* dresses and perfumes */}
          <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row lg:gap-3">
            <div className="relative w-full overflow-hidden ">
              <Image
                src={dressesOverlay}
                alt="dresses"
                className="mx-auto rounded-xl lg:rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 top-0 w-1/2 pe-5 pt-5 lg:p-8">
                <Link
                  href="#"
                  className="block rounded-md bg-white py-0.5 text-center text-19 font-bold transition-all hover:bg-primery hover:text-white lg:py-1.5 lg:text-xl"
                >
                  الفساتين
                </Link>

                <div className="mt-4 grid grid-cols-2 gap-x-1 gap-y-2 text-11 text-white lg:mt-7 lg:gap-y-4 lg:text-base">
                  {dressesLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.title}
                      className="cursor-pointer font-bold underline transition-all hover:text-amber-500"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href={"/"} className="w-full overflow-hidden">
              <Image src={winterCloths} alt="winter cloths banner" />
            </Link>
          </div>

          {/* baby section */}
          <MainSectionPageSubSection
            heading={"ازياء الرضع"}
            branches={babysFashionBranches}
            img={babysLong}
            offers={babyFashionOffersCategories}
          />

          {/* banner */}
          <div className="mt-3 w-full max-w-[971px] overflow-hidden rounded-lg lg:rounded-2xl">
            <BannerSlider
              desktopBanners={heroBanners}
              swiperClass={"fashion-one"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default FashionPage;
