"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import CardNoButtonSlider from "@/components/common/CardNoButtonSlider";
import CardsSlider from "@/components/common/CardsSlider";
import Offers from "@/components/common/Offers";
import BlueBigBrand from "@/components/common/BlueBigBrand";
import Recommended from "@/components/common/Recommended";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import DoubleBanner from "@/components/banners/DoubleBanner";
import SectionTitle from "@/components/common/SectionTitle";
import WomenWatch from "@/components/common/WomenWatch";
import RecommendationSection from "@/components/common/RecommendationSection";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import ShoesOffers from "@/components/common/ShoesOffers";
import ShoesTopSlider from "@/components/common/ShoesTopSlider";
import Switcher from "@/components/common/Switcher";
import DoubleSmallBrandSlider from "@/components/common/DoubleSmallBrandSlider";
import ShopasPriceShoes from "@/components/common/ShopasPriceShoes";
import {
banners,
  ManSlimBanner,
  filterColors,
  filterOffers,
  filterbrands,
  mancheapClothes,
  recommendedProducts,
  slimBanners,
  fbrands,
  section,
  manbannerObject,
  manlinks,
  boysbannerObject,
  dailyOffersWomen,
  brownGirl,
  brownGirllinks,
  brownGirlmobile,
} from "@/data/fake";
import {
  wshoesOffers,
  BeautyOffers,
  beautyOffersGirl,
  beautyOffersboys,
  desiredWatches,
  boysBanner,
  boysBeautyOffers,
  boysEconomy,
  shoesEconomy,
  smartWatches,
  boysFashion,
  wshoescheapClothes,
  shoescircles,
  boysleftlinks,
  boysrightlinks,
  dailyOffers2,
  boyswears,
  cheapClothes,
  circles,
  dailyOffers,
  dailyOffersKids,
  dailyOffersboys,
  dailyeconomyKids,
  kidsBanner,
  kidsFashion,
  leftlinks,
  leftlinks2,
  mobileboysBanner,
  msport,
  rightlinks,
  rightlinks2,
  beautyOffersWatches,
  topSliderWatches,
  wtopSliderShoes,
  wshoesEconomyProduct,
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import Link from "next/link";
import Image from "next/image";
import { wsport } from "../../data/fashionData";
const data = [
  {
    img: "/imgs/boysFashion/Desirablecategories/img1.svg",
    name: "كابات و قبعات",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/boysFashion/Desirablecategories/img2.svg",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/boysFashion/Desirablecategories/img3.svg",
    name: "الأطقم الرياضية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
];
export default function page() {
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
        <div className="main-content mx-auto w-full overflow-hidden xl:max-w-[971px]">
        <Switcher sections={[
            {
                title:"الرجال",
                image:"",
                url:"/fashion/menShoes",
            },
            {
                title:"النساء",
                image:"",
                url:"/fashion/womenShoes",
            },
            {
                title:"الأطفال",
                image:"",
                url:"/fashion/kidsShoes",
            },
            {
                title:"الرياضية",
                image:"",
                url:"/fashion/sportShoes",
            }
           ]} textColor="text-[#383838]" bgColor="bg-[#F5F5F5]" round={"0"} border={"border-[#F39406]"}/>
            <BannerSlider
            desktopBanners={boysBanner}
            swiperClass={"top-banner"}
            mobileBanners={mobileboysBanner}
          />{" "}
          <ShoesTopSlider desktopSpace={13} mobileSpace={13} products={wtopSliderShoes} textColor="#383838" bgHeight={"100%"} bgColor={"#F5FAFF"} imgbgColor={"#F5FAFF"} />
          <section className="gray !p-0 !mt-8 !pb-0 md:!mt-10">
            <div className="mb-[24px]  w-full sm:h-[119px] xs:h-[81px] px-[70px] flex justify-between items-center bg-[#F5F5F5]">
                <h2 className="sm:text-[20px] xs:text-[calc(9px+0.8vw)] text-[#383838] flex items-center justify-center">
                عروض بيوتي على الماركات العالمية
                </h2>
                <div>
                    <Image src="" width={272} height={119} className="hidden mix-blend-multiply" alt="watch"/>
                    <Image src="" width={152} height={81} className="hidden mix-blend-multiply" alt="watch"/>
                </div>
            </div>
          <ShoesOffers
            products={wshoesOffers}
            offerbgColor={"#F9F9F9"}
            offerTextColor={"#4D4D4D"}
            cardbg="!bg-white"
          />
          </section>
          <section className="offers">
            <div className="section-title-offers !bg-[#ECECEC] !text-white">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#CA4758]">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers
              offers={boysBeautyOffers}
              banner="/imgs/far 1.png"
              bannerTextColor="#FFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <div className="mt-8 lg:mt-10">
            <ShopasPriceShoes
              circles={shoescircles}
              color="FFF1F1"
              img="/imgs/shoes/56 905.png"
            />
          </div>
          <section className="h-fit w-full">
            {" "}
            <SectionTitle name={"الأحذية النسائية"} />
            <WomenWatch
              bgcolor="#F6F6F6"
              color="#383838"
              BigImages={[
                "/imgs/womenShoes/سسس 1.png",
                "/imgs/womenShoes/ee 2.png",
              ]}
              fourImages={[
                "/imgs/womenShoes/Frame 399664.png",
                "/imgs/womenShoes/Frame 399665.png",
                "/imgs/womenShoes/Frame 399666.png",
                "/imgs/womenShoes/Frame 399667.png",
              ]}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض على الأحذية النسائية</h2>
              <div className="displayAll !bg-[#F39406] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wshoesEconomyProduct}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <BannerSlider
            desktopBanners={ManSlimBanner}
            swiperClass={"slim-slider !mb-0 !mt-0"}
            />
            <section className="gray round CardsSlider-p !mt-8 !pb-0 md:!mt-10">
            <CardNoButtonSlider
              seaAllColor="#F39406"
              HeaderTextColor="text-[#383838]"
              HeaderText={"عروض لفترة محدودة الأحذية النسائية"}
              products={wshoesEconomyProduct}
              backgroundColor={"#F39406"}
            />
          </section>
          <section className="LatestKidsWears my-10 max-md:my-8">
            {" "}
            <GlassesMostSelled
                classNames="bg-[#07368A] text-white lg:text-black startButtonSwiper"
                text="الأكثر مبيعاً الأحذية الرياضية"
                glassClassName="!rounded-[20px] !bg-[#F5F5F5]"
                linkClassName="!bg-white !text-black"
                cardsClasses={"!bg-[#F5F5F5] !rounded-[11.5px]"}
                products={wshoesEconomyProduct}
            />
            </section>
            <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>منتجات تبدأ من ٢٥ ريال</h2>
              <div className="displayAll !bg-[#F39406] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wshoesEconomyProduct}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="round PinkBigBrandSection kids mb-8 mt-8 !pb-8 !pr-[10px] !pl-[10px] !pt-0.5 md:mb-10 md:mt-10 md:!bg-[#F5F5F5]">
            <BlueBigBrand bgColor={"!bg-[#FFEDEC]"} array={wshoescheapClothes} smallBannerImg={"/imgs/womenShoes/65hh 4.png"} textColor={"!text-[#383838]"}/>
          </section>
          {/* -------------------------- */}
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"أحذية نسائية قد تعجبك"} />
            <Recommended products={recommendedProducts} />
          </section>
              {/* ---------------missing section-------------- */}
              <SectionTitle name={"تسوق حسب الماركة"} />
              <DoubleSmallBrandSlider brands={fbrands}/>
          <DoubleBanner rightBanners={banners} leftBanners={banners} />
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>الأعلى تقييماً</h2>
              <div className="displayAll !bg-[#F39406] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wshoesEconomyProduct}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>أحدث المنتجات</h2>
              <div className="displayAll !bg-[#F39406] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wshoesEconomyProduct}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <RecommendationSection section={section} />
          </div>
        </div>
    </main>
  )
}
