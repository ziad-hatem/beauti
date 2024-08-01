"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import CardsSlider from "@/components/common/CardsSlider";
import FoodBeverage from "@/components/common/FoodBeverage";
import SuperMarket from "@/components/common/SuperMarket";

import DoubleBanner from "@/components/banners/DoubleBanner";
import Care from "@/components/common/Care";
import Entertainments from "@/components/common/Entertainments";
import Fitbudget from "@/components/common/Fitbudget";
import FoodShopasBrand from "@/components/common/FoodShopasBrand";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import Offers from "@/components/common/Offers";
import RecommendationSection from "@/components/common/RecommendationSection";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasPrice from "@/components/common/ShopasPrice";
import VitaminsSection from "@/components/common/VitaminsSection";
import Widebanner from "@/components/common/Widebanner";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  ManSlimBanner,
  ShopasDesiredFoodSliderData,
  banners,
  filterColors,
  filterOffers,
  filterbrands,
  section,
  vitaminsBanner,
} from "@/data/fake";
import {
  BeautyOffers,
  MobilekidsBanner,
  careClean,
  dailyOffers,
  entertainments,
  fitBudgetProducts,
  foodCircles,
  foodFashion,
  kidsBanner,
  mostSelledVitaminsProducts,
  shopasDesired,
  superMarketData,
  tempmobileBanner,
  vitamins,
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";

import CardsSlider2 from "@/components/common/CardsSlider2";
import { formatNumberInArabic } from "@/libs/formatNumber";
import Image from "next/image";
import Link from "next/link";
import FoodDoubleGallary from "@/components/common/FoodDoubleGallary";

export default function Foodsupplements() {
  return (
    <main className="container mx-auto mb-6 mt-4 min-h-screen justify-center xl:px-0">
      <div className="mx-auto mt-4 flex flex-row items-start gap-3">
        {/* side filter */}
        <MainSideFilter
          sectionPageName={"المواد الغذائية والمكملات"}
          subSections={fashionSubSections}
          brands={filterbrands}
          colors={filterColors}
          suggestedOffers={filterOffers}
          customChecker={"المادة"}
          customCheckerElements={fashionMaterials}
        />
        <div className="main-content mx-auto w-full max-w-[971px] overflow-hidden">
          <BannerSlider
            desktopBanners={kidsBanner}
            mobileBanners={MobilekidsBanner}
            swiperClass={"top-banner"}
          />
          <section className="mb-4 mt-8 md:mb-4 md:mt-10">
            <FoodDoubleGallary
              hideButtons={false}
              smallButtons={true}
              flatButtons={true}
              products={foodFashion}
              paddingTop={"2"}
              MobilepaddingTop="0"
            />
          </section>
          <BannerSlider
            desktopBanners={ManSlimBanner}
            mobileBanners={tempmobileBanner}
            swiperClass={"slim-slider !mb-0 !mt-0 hideButtons"}
          />
          <section className=" flex gap-3 max-md:mt-8 max-md:flex-col md:mt-10">
            <Image
              src={"/imgs/foodFashion/BigImg.png"}
              unoptimized
              width={100}
              height={100}
              loading="lazy"
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/foodFashion/BigImg2.png"}
              width={100}
              unoptimized
              loading="lazy"
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="offers !mt-8 md:!mt-10">
            <div className="section-title-offers !text-[#383838] max-md:!bg-[#F5F5F5]">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#CA4758]">
                  خصم حتى {formatNumberInArabic(70)}%
                </span>
              </h2>
            </div>
            <Offers
              offers={BeautyOffers}
              banner="/imgs/far 1.png"
              bannerTextColor="#FFFFFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section className="my-8 h-full w-full">
            <SectionTitle name={"المشروبات"} />
            <FoodBeverage data={ShopasDesiredFoodSliderData} height="234px" />
          </section>
          <section className="mb-8 flex w-full flex-col md:mb-10 md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#C33849] !px-[13px] !py-[10px] md:!hidden">
                <h2 className=" text-[16px] font-[500] text-white">
                  عروض بيوتي على المشروبات
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/foodFashion/sideImg.svg"
                mobileImg="/imgs/foodFashion/sideImgMobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-auto flex-1 flex-col overflow-hidden">
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  عروض بيوتي على المشروبات
                </h2>
                <div className="displayAll !bg-[#C33849] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                swiperClassName="!p-0 NextButtonSwiperPrev0PX"
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] !font-[400] max-md:block"
            >
              <span className="!font-[500]">عرض الكل </span>»
            </Link>
          </section>
          <section>
            <div className="title flex w-full justify-center">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                السوبر ماركت
              </h1>
            </div>
            <SuperMarket data={superMarketData} />
          </section>
          <section className="mb-10 mt-[32px] flex min-h-fit w-full flex-row max-md:mb-8 max-md:flex-col md:mt-10 md:gap-3">
            <div className="leftSide mx-auto w-auto flex-none max-md:!w-[calc(100%_-_26px)] 2xl:w-[301px]">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#C33849] px-2 text-[20px] font-[700] text-white md:w-full 2xl:mx-0">
                عروض السوبرماركت
              </div>
              <WomenSidebarSection
                WebImg="/imgs/foodFashion/sideImg2.png"
                mobileImg="/imgs/foodFashion/sideImgMobile2.png"
              />
            </div>
            <div className="rightSide flex h-fit w-full flex-1 flex-col overflow-hidden pt-3 lg:mr-[13px]">
              <Widebanner
                buttonbg="bg-[#383838]"
                buttonHovbg="hover:bg-[#383838]"
                products={dailyOffers}
              />
              <div className="section-title !mb-[5px] !mt-[13px] flex !items-center bg-[#C33849] !px-[13px] !py-[7.5px] md:!mb-[10px] md:!mt-[16px] md:!py-[14px]">
                <h2 className="lg:text-[18px]#383838 hidden text-[18px] font-[700] text-white lg:block">
                  عروض بيوتي على السوبرماركت
                </h2>
                <h2 className="block text-[13px] font-[700] text-white lg:hidden lg:text-[18px]">
                  عروض السوبرماركت
                </h2>
                <div className="displayAll !mt-0 !bg-white !text-black">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider
                products={dailyOffers}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>
          <section className="shopasBrand">
            <SectionTitle name={"تسوقي حسب الماركة"} className="!mt-[0]" />
            <FoodShopasBrand data={shopasDesired} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#C33849] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>اقل من ٢٥ ريال المواد الغذائية والمكملات</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#C33849] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <div className="mt-8 lg:mt-[20px]">
            <ShopasPrice
              circles={foodCircles}
              color="FFF1F1"
              position={"!ml-[-25px] max-md:mx-3"}
              img="/imgs/foodFashion/shopasprice/mainImg.png"
            />
          </div>
          <section className="mb-6 mt-8 flex w-full flex-col md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#C33849] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[14px] font-[500] text-white md:text-[16px]">
                  الأعلى تقييماً المواد الغذائية و المكملات
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/foodFashion/sideImg3.svg"
                mobileImg="/imgs/foodFashion/sideImgMobile3.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-auto flex-1 flex-col overflow-hidden max-md:mr-1">
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأعلى تقييماً المواد الغذائية و المكملات
                </h2>
                <div className="displayAll !bg-[#C33849] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                swiperClassName="!p-0 NextButtonSwiperPrev0PX"
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] !font-[400] max-md:block"
            >
              <span className="!font-[500]">عرض الكل </span>»
            </Link>
          </section>
          <DoubleBanner
            rightBanners={banners}
            classNames="!mb-0 max-md:!mt-8 !mt-10"
            leftBanners={banners}
          />
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mt-10">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                الفيتامينات و المكملات الغذائية
              </h1>
            </div>
            <VitaminsSection data={vitamins} />
          </section>
          <section className="LatestKidsWears my-10 max-md:my-8">
            {" "}
            <GlassesMostSelled
              classNames="bg-[#C33849] text-white"
              text="الأكثر مبيعاً الفيتامينات و المكملات الغذائية"
              glassClassName="!rounded-none text-center !rounded-[20px]"
              products={mostSelledVitaminsProducts}
            />
          </section>
          <section className="mb-8 md:mb-10">
            <BannerSlider
              desktopBanners={vitaminsBanner}
              swiperClass={"slim-slider mt-6"}
              mobileBanners={tempmobileBanner}
            />
          </section>
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-10">
              <h1 className="text-[13px] font-[400] md:text-[22px]">
                منتجات الحلويات و التسالي
              </h1>
            </div>
            <Entertainments data={entertainments} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#C33849] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>أحدث المنتجات المواد الغذائية و المكملات</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#C33849] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-[20px]">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                العناية و التنظيف المنزلية
              </h1>
            </div>
            <Care data={careClean} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#C33849] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض العناية و التنظيف النزلية</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#C33849] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="round PinkBigBrandSection kids mt-[20px]">
            <Fitbudget array={fitBudgetProducts} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#C33849] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض المواد الغذائية و المكملات</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#C33849] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>

          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
