import { Suspense } from "react";
import Hero from "@/components/Home/Hero";
import DoubleBanner from "@/components/banners/DoubleBanner";
import BannerSlider from "@/components/banners/BannerSlider";
import SliderSection from "@/components/Home/SliderSection";
import Brands from "@/components/Home/Brands";
import TwoColLayoutBanner from "@/components/Home/TwoColLayoutBanner";
import TwoColLayoutSlider from "@/components/Home/TwoColLayoutSlider";
import FilterSection from "@/components/Home/FilterSection";
import MobileSectionHeading from "@/components/Home/MobileSectionHeading";
import MobileBanner from "@/components/banners/MobileBanner";
import womenBanner from "../../public/imgs/banners/woman-banner.png";
import abayatBanner from "../../public/imgs/banners/abayat banner.png";
import giftBanner from "../../public/imgs/banners/gift Banner.png";
import decore from "../../public/imgs/banners/decor2.png";
import verticalBanner from "../../public/imgs/banners/vert.png";
import {
  MenClothesmobileSectionHead,
  banners,
  brands,
  dailyOffers,
  detailedProduct,
  detailedproducts,
  menOffers,
  mobileBanners,
  mobileSectionHead,
  sectionBrands,
  womenOffers,
} from "./data/fake";

const HomePage = async () => {
  return (
    <main className="container mx-auto my-3 px-3 xl:px-0">
      <Suspense fallback={<div>loading...</div>}>
        <Hero />
      </Suspense>
      <FilterSection product={detailedProduct} />
      <SliderSection headTitle={"العروض اليومية"} products={dailyOffers} />
      <DoubleBanner
        doubleClass={"double-one"}
        rightBanners={banners}
        leftBanners={banners}
      />
      <Brands headTitle={"العلامة التجارية"} brands={brands} />

      {/* start sections from here */}
      {/* section 1 ladies clothes */}
      <MobileSectionHeading section={mobileSectionHead} />
      <TwoColLayoutBanner
        sideVerticalBannerBanners={womenBanner}
        sideVerticalBannerTitle={""}
        BorderColor={"#f3afac"}
        blockColor={"#fff2f3"}
        doubleRowSliderSectionHeadTitle={"عروض الازياء النسائية"}
        doubleRowSliderSectionProducts={womenOffers}
        multiSubSection={true}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <div className="w-full">
        <BannerSlider desktopBanners={banners} swiperClass={"single-two"} />
      </div>

      {/* section 2 men clothes*/}
      <MobileSectionHeading section={MenClothesmobileSectionHead} />
      <SliderSection
        headTitle={"عروض الموضة الرجالية"}
        products={menOffers}
        multiSubSection={true}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <DoubleBanner
        doubleClass={"double-two"}
        rightBanners={banners}
        leftBanners={banners}
      />

      {/* section 3 girls*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"أزياء البنات"}
      />
      <SliderSection headTitle={"عروض ازياء البنات"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 4 boys*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"موضة الأولاد"}
      />
      <SliderSection headTitle={"عروض موضة الاولاد"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 5 baby*/}
      <MobileSectionHeading section={mobileSectionHead} title={"ملابس الرضع"} />
      <SliderSection headTitle={"عروض ملابس الرضع"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 6 female abaya */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"العبايات النسائية"}
      />
      <TwoColLayoutBanner
        sideVerticalBannerBanners={abayatBanner}
        BorderColor={"#d8d6e5"}
        blockColor={"#f2f1f6"}
        sideVerticalBannerTitle={"العبايات النسائية"}
        doubleRowSliderSectionHeadTitle={"عروض العبايات النسائية"}
        doubleRowSliderSectionProducts={womenOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <div className="w-full">
        <BannerSlider desktopBanners={banners} swiperClass={"single-two"} />
      </div>

      {/* section 7 perfume*/}
      <MobileSectionHeading section={mobileSectionHead} title={"العطور"} />
      <TwoColLayoutSlider
        sideVerticalSliderHeadTitle={"قد يعجبك"}
        sideVerticalSliderProducts={dailyOffers}
        detailedProductSliderHeadTitle={"افضل العطور"}
        detailedProductSliderProducts={detailedproducts}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 8 oud*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"العود والبخور "}
      />
      <SliderSection headTitle={"عروض العود والبخور"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 9 beauty*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"مستحضرات التجميل والعناية"}
      />
      <SliderSection
        headTitle={"عروض مستحضرات التجميل والعناية"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 10 gifts */}
      <MobileSectionHeading section={mobileSectionHead} title={"الهدايا"} />
      <TwoColLayoutBanner
        sideVerticalBannerBanners={giftBanner}
        BorderColor={"#d8d8d8"}
        blockColor={"#f1f1f1"}
        sideVerticalBannerTitle={"الهدايا"}
        doubleRowSliderSectionHeadTitle={"عروض الهدايا"}
        doubleRowSliderSectionProducts={womenOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <div className="w-full">
        <BannerSlider desktopBanners={banners} swiperClass={"single-two"} />
      </div>

      {/* section 11 glasses*/}
      <MobileSectionHeading section={mobileSectionHead} title={"النظارات"} />
      <SliderSection headTitle={"عروض النظارات "} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 12 jul*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"المجوهرات و الإكسسوارات"}
      />
      <TwoColLayoutSlider
        sideVerticalSliderHeadTitle={"المجوهرات"}
        sideVerticalSliderProducts={dailyOffers}
        detailedProductSliderHeadTitle={"المجوهرات الفاخرة"}
        detailedProductSliderProducts={detailedproducts}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 13 watches*/}
      <MobileSectionHeading section={mobileSectionHead} title={"الساعات"} />
      <SliderSection headTitle={"عروض الساعات"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 14 lagg*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"شنط و حقائب وأمتعة"}
      />
      <SliderSection
        headTitle={"عروض الشنط و الحقائب والأمتعة"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 15 shoes*/}
      <MobileSectionHeading section={mobileSectionHead} title={"الأحذية"} />
      <SliderSection headTitle={"عروض الأحذية"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 16 house */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"المنزل والديكور"}
      />
      <TwoColLayoutBanner
        sideVerticalBannerBanners={decore}
        sideVerticalBannerTitle={"المنزل والديكور"}
        BorderColor={"#c9c1b8"}
        blockColor={"#f7f2ea"}
        doubleRowSliderSectionHeadTitle={"عروض التقديم والضيافة"}
        doubleRowSliderSectionProducts={womenOffers}
        multiSubSection={true}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <div className="w-full">
        <BannerSlider desktopBanners={banners} swiperClass={"single-two"} />
      </div>

      {/* section 17 elec devices */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"الأجهزة الكهربائية"}
      />
      <SliderSection
        headTitle={"عروض الأجهزة الكهربائية"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 18 mobile and tablet*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"الجوالات والأجهزة اللوحية"}
      />
      <TwoColLayoutSlider
        sideVerticalSliderHeadTitle={"قد يعجبك"}
        sideVerticalSliderProducts={dailyOffers}
        detailedProductSliderHeadTitle={"عروض الجوالات والأجهزة اللوحية"}
        detailedProductSliderProducts={detailedproducts}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 19 school */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"مستلزمات مكتبية ومدرسية"}
      />
      <SliderSection
        headTitle={"عروض مستلزمات مكتبية ومدرسية"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 20 boocks */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"الكتب ودور النشر"}
      />
      <SliderSection
        headTitle={"عروض الكتب ودور النشر"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 21 games */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"عالم الألعاب والأنمي"}
      />
      <SliderSection
        headTitle={"عروض عالم الألعاب والأنمي"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 22 gym */}
      <MobileSectionHeading section={mobileSectionHead} title={"جيم و رياضة"} />
      <SliderSection headTitle={"عروض جيم و رياضة"} products={dailyOffers} />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 23 supplement */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"المكملات الغذائية"}
      />
      <SliderSection
        headTitle={"عروض المكملات الغذائية"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 24 food*/}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"المواد الغذائية والعطارة"}
      />
      <TwoColLayoutSlider
        sideVerticalSliderHeadTitle={"افضل العطارة"}
        sideVerticalSliderProducts={dailyOffers}
        detailedProductSliderHeadTitle={"عروض الحلويات المستوردة"}
        detailedProductSliderProducts={detailedproducts}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 25 medical */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={"المستلزمات الطبية"}
      />
      <SliderSection
        headTitle={"عروض المستلزمات الطبية"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />

      {/* section 26 pets */}
      <MobileSectionHeading
        section={mobileSectionHead}
        title={" مستلزمات الحيوانات الأليفة"}
      />
      <SliderSection
        headTitle={"عروض مستلزمات الحيوانات الأليفة"}
        products={dailyOffers}
      />
      <Brands
        headTitle={"تسوق حسب البرند"}
        brands={sectionBrands}
        className={"lg:hidden"}
      />
      <MobileBanner banners={mobileBanners} />
    </main>
  );
};

export default HomePage;
