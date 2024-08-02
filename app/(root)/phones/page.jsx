"use client";
import RecommendationSection from "@/components/common/RecommendationSection";
import PhonesSlider from "@/components/common/PhonesSlider";
import BrandsSwiper from "@/components/common/BrandsSwiper";
import Offers from "@/components/common/Offers";
import BannerSlider from "@/components/banners/BannerSlider";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  dailyOffers,
  fbrands,
  filterColors,
  filterOffers,
  filterbrands,
  heroBanners,
  recommendedProducts,
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
  beautyPhones,
  entertainments,
  famousBranding,
  headPhonesData,
  InternationalEarsBrandData,
  latestPhones,
  Mobileaccessories,
  phonesFitBudget,
  phonesSliderdata,
  powerbankData,
  shopasBrandPhones,
  shopasPricePhones,
  TechBrands,
  tempmobileBanner,
} from "@/data/fashionData";
import CardsSlider from "@/components/common/CardsSlider";
import { formatNumberInArabic } from "@/libs/formatNumber";
import Entertainments from "@/components/common/Entertainments";
import ShopasPricePhones from "@/components/common/ShopasPricePhones";
import ShopasBrand2 from "@/components/common/ShopasBrand2";
import BrandsSwiper2 from "@/components/common/BrandsSwiper2";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import CardsSlider2 from "@/components/common/CardsSlider2";
import MobileAccessories from "@/components/common/MobileAccessories";
import PhonesRecommended from "@/components/common/PhonesRecommended";
import PhonesFitBudget from "@/components/common/PhonesFitBudget";
import BeautyPhones from "@/components/common/BeautyPhones";
import AdBanner from "@/components/common/AdBanner";
import PowerBankSlider from "@/components/common/PowerBankSlider";
import Care from "@/components/common/Care";
import InternationalEarsBrand from "@/components/common/InternationalEarsBrand";
import Link from "next/link";
import { careClean } from "../data/fashionData";
import Image from "next/image";

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
          <section className="round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض بيوتي على الجوالات و اكسسوارتها</h2>
              <div className="displayAll !bg-[#383838] !text-white">
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
          <section className="mt-8 md:mt-10">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                ماركات تجارية مشهورة
              </h1>
            </div>
            <BrandsSwiper brands={famousBranding} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#248EB0] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض بيوتي على الماركات المشهورة</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#248EB0] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-[20px]">
              <h1 className="text-[13px] font-[400] md:text-[22px]">
                أحدث موديلات الموبايلات
              </h1>
            </div>
            <Entertainments data={latestPhones} />
          </section>
          <section className="mb-8 mt-[15px] md:mb-10 md:mt-[40px]">
            <BannerSlider
              desktopBanners={vitaminsBanner}
              swiperClass={"slim-slider mt-6"}
              mobileBanners={tempmobileBanner}
            />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#248EB0] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>أحدث المنتجات الجوالات</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#248EB0] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="!mt-8 md:!mt-[20px]">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                تسوق حسب السعر
              </h1>
            </div>
            <ShopasPricePhones data={shopasPricePhones} />
          </section>
          <section className="mt-8 md:mt-10">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                تسوق حسب الماركة
              </h1>
            </div>
            <ShopasBrand2 data={shopasBrandPhones} />
          </section>
          <section className="mt-4 md:mt-6">
            <BrandsSwiper2 data={TechBrands} />
          </section>
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#248EB0] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                الأفضل مبيعاً الجوالات
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/phones/sideImg.svg"
                mobileImg="/imgs/phones/mobileSideImg.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className=" text-[19px] font-[500] text-[#383838]">
                  الأفضل مبيعاً الجوالات
                </h2>
                <div className="displayAll !bg-[#248EB0] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                swiperClassName="!p-0"
                sectionClassName="!bg-none !t-0 !px-0 !py-0 !mt-0"
                products={dailyOffers}
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="mt-8 md:mt-10">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                دليل بيوتي الرياضي
              </h1>
            </div>
            <MobileAccessories data={Mobileaccessories} />
          </section>
          {/* Fix This Section Ya Kareem */}

          {/* <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-8 md:!mt-10">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                مختارات قد تعجبك
              </h1>
            </div>
            <PhonesRecommended products={recommendedProducts} />
          </section> */}

          {/* Fix This Section Ya Kareem */}
          <section className="mt-8 md:mt-10">
            <div className="title mb-2 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                جوالات تناسب الميزانية
              </h1>
            </div>
            <PhonesFitBudget data={phonesFitBudget} />
          </section>
          <section className="mb-8 mt-8 md:mb-10 md:mt-[40px]">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                الأعلى تقييماً لدى العملاء
              </h1>
            </div>
            <BannerSlider
              desktopBanners={vitaminsBanner}
              swiperClass={"slim-slider mt-6"}
              mobileBanners={tempmobileBanner}
            />
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض بيوتي على التابلت و السماعات</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="!mt-7 md:!mt-[20px]">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                هواتف بيوتي الفاخرة
              </h1>
            </div>
            <BeautyPhones data={beautyPhones} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#248EB0] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>الأعلى تقييماً الجوالات</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#248EB0] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="mt-[20px] flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#248EB0] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                عروض سامسونغ
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/phones/sideImg2.svg"
                mobileImg="/imgs/phones/mobileSideImg2.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className=" text-[19px] font-[500] text-[#383838]">
                  عروض سامسونغ
                </h2>
                <div className="displayAll !bg-[#248EB0] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                swiperClassName="!p-0"
                sectionClassName="!bg-none !t-0 !px-0 !py-0 !mt-0"
                products={dailyOffers}
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="mt-8 md:mt-10">
            <AdBanner />
          </section>
          <section className="mt-8 md:mt-10">
            <div className="title mb-4 flex w-full justify-center md:mb-8">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                الباور بانك حسب الاستعمال
              </h1>
            </div>
            <PowerBankSlider products={powerbankData} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>أفضل منتجات الباور بانك</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-[20px]">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                سماعات الجوال حسب الرغبة
              </h1>
            </div>
            <Care
              data={headPhonesData}
              classNameMainImg="!w-[279px] mr-6"
              mainImg="/imgs/phones/headPhones/mainImg.png"
            />
          </section>
          <section className="mt-8">
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-[20px]">
              <h1 className="text-[13px] font-[400] md:text-[22px]">
                ماركات سماعات عالمية
              </h1>
            </div>
            <InternationalEarsBrand data={InternationalEarsBrandData} />
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#248EB0] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض بيوتي على السماعات</h2>
              <div className="displayAll !bg-[#248EB0] !text-white max-md:!bg-white max-md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-[20px]">
              <h1 className="text-[13px] font-[400] md:text-[22px]">
                فئات مرغوبة
              </h1>
            </div>
            <div className="flex gap-3 max-md:flex-col">
              <Image
                src={"/imgs/phones/bigImg.png"}
                unoptimized
                width={100}
                height={100}
                loading="lazy"
                className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
              />
              <Image
                src={"/imgs/phones/bigImg2.png"}
                width={100}
                unoptimized
                loading="lazy"
                height={100}
                className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
              />
            </div>
          </section>
          <section className="round CardsSlider-p !mt-8">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#248EB0] max-md:!text-[11px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الجوالات والأجهزة اللوحية واكسسوارتها</h2>
              <div className="displayAll !bg-[#248EB0] !text-white max-md:!bg-white max-md:!text-[#383838]">
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
