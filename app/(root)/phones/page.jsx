"use client";
import RecommendationSection from "@/components/common/RecommendationSection";
import PhonesSlider from "@/components/common/PhonesSlider";
import Offers from "@/components/common/Offers";
import BannerSlider from "@/components/banners/BannerSlider";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  dailyOffers,
  filterColors,
  filterOffers,
  filterbrands,
  heroBanners,
  section,
  vitaminsBanner,
} from "@/data/fake";
import {
  FashionHeroMobileBanners,
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import {
  BeautyOffers,
  phonesSliderdata,
  tempmobileBanner,
} from "@/data/fashionData";
import CardsSlider from "@/components/common/CardsSlider";
import { formatNumberInArabic } from "@/libs/formatNumber";

export default function PhonesPage() {
  return (
    <main className="container mx-auto mb-6 mt-4 min-h-screen justify-center xl:px-0">
      <div className="mx-auto mt-4 flex flex-row items-start gap-3">
        {/* side filter */}
        <MainSideFilter
          sectionPageName={"قسم الأزياء النسائى"}
          subSections={fashionSubSections}
          brands={filterbrands}
          colors={filterColors}
          suggestedOffers={filterOffers}
          customChecker={"المادة"}
          customCheckerElements={fashionMaterials}
        />
        <div className="main-content mx-auto w-full max-w-[971px] overflow-hidden">
          <BannerSlider
            desktopBanners={heroBanners}
            swiperClass={"top-banner mb-[40px]"}
            mobileBanners={FashionHeroMobileBanners.reverse()}
          />

          <div className="mb-8 md:mb-10">
            <PhonesSlider products={phonesSliderdata} />
          </div>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#C33849] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض بيوتي على الجوالات و اكسسوارتها</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="mb-8 md:mb-10">
            <BannerSlider
              desktopBanners={vitaminsBanner}
              swiperClass={"slim-slider mt-6"}
              mobileBanners={tempmobileBanner}
            />
          </section>
          <section className="offers !mt-8 md:!mt-10">
            <div className="section-title-offers !text-[#383838] max-md:!bg-[#F5F5F5]">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#CA4758]">
                  خصم حتى {formatNumberInArabic(75)}%
                </span>
              </h2>
            </div>
            <Offers
              offers={BeautyOffers}
              banner="/imgs/phones/far 1.png"
              bannerTextColor="#FFFFFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section>
            <div className="title flex w-full justify-center">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                ماركات تجارية مشهورة
              </h1>
            </div>
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
