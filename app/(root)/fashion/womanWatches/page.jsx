"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import BeautyOffersgirls from "@/components/common/BeautyOffersgirls";
import CardNoButtonSlider from "@/components/common/CardNoButtonSlider";
import CardsSlider from "@/components/common/CardsSlider";
import DoubleGallary from "@/components/common/DoubleGallary";
import Offers from "@/components/common/Offers";
import BlueBigBrand from "@/components/common/BlueBigBrand";
import ShopasPrice from "@/components/common/ShopasPrice";
import Sport from "@/components/common/Sport";
import ManSingelBanner from "@/components/common/ManSingelBanner";
import WomenSuitcase from "@/components/common/WomenSuitcase";
import SmallBrandSlider2 from "@/components/common/SmallBrandSlider2";
import BeautyBrandSample from "@/components/common/BeautyBrandSample";
import Recommended from "@/components/common/Recommended";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import DoubleBanner from "@/components/banners/DoubleBanner";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasPrice3 from "@/components/common/ShopasPrice3";
import WomenWatch from "@/components/common/WomenWatch";
import KidsSlider from "@/components/common/KidsSlider";
import ShopasBrand from "@/components/common/ShopasBrand";
import ShopasPriceGirl from "@/components/common/ShopasPriceGirl";
import RecommendationSection from "@/components/common/RecommendationSection";
import SimpleCardNoButtonSlider from "@/components/common/SimpleCardNoButtonSlider";
import Widebanner from "@/components/common/Widebanner";
import BabyWears from "@/components/common/BabyWears";
import CardsSlider2 from "@/components/common/CardsSlider2";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import WatchesOffers from "@/components/common/WatchesOffers";
import DesiredSection from "@/components/common/DesiredSection";
import WatchesTopSlider from "@/components/common/WatchesTopSlider";
import WatchesBlocks from "@/components/common/WatchesBlocks";
import WatchesGifts from "@/components/common/WatchesGifts";
import SmartWatches from "@/components/common/SmartWatches";
import Switcher from "@/components/common/Switcher";
import FlexLinksBanner from "@/components/common/FlexLinksBanner";
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
watchesOffers,
  BeautyOffers,
  beautyOffersGirl,
  beautyOffersboys,
  desiredWatches,
  boysBanner,
  boysBeautyOffers,
  boysEconomy,
  watchesEconomy,
  wWatchesEconomy,
  smartWatches,
  boysFashion,
  wWatchescheapClothes,
  womenWatchescircles,
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
  topSliderWomenWatches,
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import Link from "next/link";
import Image from "next/image";
import { wsport } from "../../data/fashionData";
export default function womanWatchesPage() {
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
          {/* Start Done Sections
           */}
           <Switcher sections={[
            {
                title:"نسائية",
                image:"/imgs/watches/womanWatch.png",
                url:"/fashion/womanWatches",
            },
            {
                title:"رجالية",
                image:"/imgs/watches/manWatch.png",
                url:"/fashion/watches",
            }
           ]} textColor="text-[#000000]" bgColor="bg-[#FFEBDD]"/>
          <BannerSlider
            desktopBanners={boysBanner}
            swiperClass={"top-banner"}
            mobileBanners={mobileboysBanner}
          />{" "}
            <WatchesTopSlider products={topSliderWomenWatches} textColor={"#383838"} bgHeight={"h-[91.12%]"} bgColor={"#fff"} imgbgColor={"#F5F5F5"} />
          <section className="my-8 md:my-10">
            {/* <DoubleGallary products={boysFashion} /> */}
          </section>
          <section className="offers">
            <div className="section-title-offers !bg-[#FFEBDD] !text-[#383838]">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#383838]">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers
              offers={boysBeautyOffers}
              banner="/imgs/far 4.svg"
              bannerTextColor="#FFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section className="h-fit w-full">
            {" "}
            <SectionTitle name={"ساعات نسائية"} color={"#383838"}/>
            <WomenWatch
              color="#383838"
              bgcolor="#FFEBDD"
              BigImages={[
                "/imgs/womanWatches/65990ca2cc496b9282150ee18278097a 1.png",
                "/imgs/womanWatches/d6de05b6d42878cc841bfafbfc75c025 1.png",
              ]}
              fourImages={[
                "/imgs/womanWatches/6a21016b65886a37f7f471b34f7554ba 1.png",
                "/imgs/womanWatches/6a21016b65886a37f7f471b34f7554ba 1-1.png",
                "/imgs/womanWatches/6a21016b65886a37f7f471b34f7554ba 1-2.png",
                "/imgs/womanWatches/6a21016b65886a37f7f471b34f7554ba 1-3.png",
              ]}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#3D3D3D] max-md:!text-[13px] !text-[#3D3D3D] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض اكسسوارات الساعات النسائية</h2>
              <div className="displayAll !bg-[#FFEBDD] md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wWatchesEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="round PinkBigBrandSection kids mb-8 mt-8 !pb-8 !pr-[10px] !pl-[10px] !pt-0.5 md:mb-10 md:mt-10 md:!bg-[#FAFAFA]">
            <BlueBigBrand array={wWatchescheapClothes} bgColor={"!bg-[#FFEBDD]"} textColor={"text-[#383838]"} smallBannerImg={"/../imgs/womanWatches/65hh 4.png"}/>
          </section>
            <DoubleBanner rightBanners={banners} leftBanners={banners} />
          <section className="mb-10 mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:mt-10">
            <div
              className="leftSide mx-auto max-md:!w-[calc(100%_-_26px)] 2xl:w-[301px]"
              style={{ flex: "0 0 auto" }}
            >
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#FFEBDD] px-2 text-[20px] font-[700] text-[#383838] max-lg:text-[15px] md:w-full 2xl:mx-0">
              ساعات بيوتي الفاخرة
              </div>
              <WomenSidebarSection
                WebImg="/imgs/womanWatches/Frame 399637.png"
                mobileImg="/imgs/womanWatches/Frame 40224.png"
              />
            </div>
            <div
              className="rightSide flex h-fit flex-col pt-3 max-md:max-w-full md:mr-[13px] md:overflow-auto"
              style={{ flex: "1 1 auto" }}
            >
              <Widebanner products={wWatchesEconomy} buttonbg="bg-[#383838]"/>
              <div className="section-title !mb-[5px] !mt-[13px] flex !items-center bg-[#FFEBDD] !px-[13px] !py-[10px] md:!mb-[10px] md:!mt-[16px] md:!py-[14px]">
                <h2 className="block text-[13px] font-[700] text-[#383838] md:text-[18px]">
                منتجات ساعات بيوتي الفاخرة
                </h2>
                <div className="displayAll !bg-[#FFFFFF] !text-[#383838] max-md:!h-[16px] max-md:!w-[51px] md:!text-[#383838]">
                  <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                    عرض الكل
                  </a>
                </div>
              </div>
              <CardsSlider
                products={wWatchesEconomy}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>
          <section className="mt-10 max-md:mt-8">
            <div className="header relative mb-4 flex justify-center md:mb-8">
              <h1 className="text-[22px] font-[400] text-[#383838] max-lg:mr-[14px] max-lg:text-[13px]">
              تسوق حسب الماركة
              </h1>
            </div>
            <BeautyBrandSample
              products={beautyOffersWatches}
            />
          </section>
          <div className="mt-8 lg:mt-10">
            <ShopasPrice
              circles={womenWatchescircles}
              color="text-[#383838]"
              img="/imgs/womanWatches/71tjYXJiJ2L 1.png"
            />
          </div>
          <section className="gray round CardsSlider-p !mt-8 !pb-0 md:!mt-10">
            <CardNoButtonSlider
              seaAllColor="#FFEBDD"
              HeaderText={"عروض لفترة محدودة الساعات النسائية"}
              products={wWatchesEconomy}
              backgroundColor={"#FFEBDD"}
              textColor="#383838"
              seeAllText="#383838"
            />
          </section>
          <section className="gray !p-0 !mt-8 !pb-0 md:!mt-10">
            <div className="mb-[24px]  w-full sm:h-[119px] xs:h-[81px] px-[70px] flex justify-between items-center bg-[#F9F9F9]">
                <h2 className="sm:text-[20px] xs:text-[calc(9px+0.8vw)] text-[#383838] flex items-center justify-center">
                عروض بيوتي على الماركات العالمية
                </h2>
                <div>
                    <Image src="/imgs/watches/713Wf3pZ9DL 1.png" width={272} height={119} className="sm:block xs:hidden mix-blend-multiply" alt="watch"/>
                    <Image src="/imgs/watches/mobWatch.png" width={152} height={81} className="sm:hidden xs:block mix-blend-multiply" alt="watch"/>
                </div>
            </div>
          <WatchesOffers
            products={watchesOffers}
            offerbgColor={"#FFEBDD"}
            offerTextColor={"#383838"}
          />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !bg-[#FAFAFA] !pt-0 md:!mt-8">
            <div className="section-title flex items-center !rounded-none !bg-[#FAFAFA] max-lg:!my-0 max-md:!h-[35px] md:!mb-[15px] md:!mt-[5px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
              أحدث منتجات الساعات
              </h2>
              <div className="displayAll !bg-[#FFEBDD] !text-[#383838] max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={wWatchesEconomy}
              className="NextButtonSwiperRight0PX"
              
              />
          </section>
          <section className="boyssuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"تسوق حسب المناسبة"} color={"#383838"}/>
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"تسوق حسب المناسبة"} color={"#383838"}/>
            </div>
            <WatchesBlocks
              mainImg="/imgs/womanWatches/57cd658976499b9dc9d9edc15832cc50 1.png"
              mobileImg="/imgs/womanWatches/57cd658976499b9dc9d9edc15832cc50 1.png"
              mainImgTitle={"تسوق حسب المناسبة"}
              bgColor={"bg-[#FFEBDD]"}
              color={"text-[#383838]"}
              data={[
                {
                  name: "المناسبات",
                  img: "/imgs/womanWatches/image 191-1.png",
                  mobileImg: "/imgs/womanWatches/image 191-1.png",
                },
                {
                  name: "اجتماعات العمل",
                  img: "/imgs/womanWatches/image 191-3.png",
                  mobileImg: "/imgs/womanWatches/image 191-3.png",
                },
                {
                  name: "كاجوال يومي",
                  img: "/imgs/womanWatches/image 191-2.png",
                  mobileImg: "/imgs/womanWatches/image 191-2.png",
                },
                {
                  name: "الرياضة",
                  img: "/imgs/womanWatches/image 191.png",
                  mobileImg: "/imgs/womanWatches/image 191.png",
                },
              ]}
            />
          </section>
          <section className="boysJewellery mt-[40px] max-md:mt-[32px]">
          <SectionTitle name={"إكسسوارات الساعة الذكية"} color={"#383838"}/>
          <SmartWatches
            mainImg={"/imgs/watches/0865093411a463d88477e6a0c341d1fe 1.png"}
            bgcolor={"bg-[#ECEBE687]"}
            titleColor={"#383838"}
            cardTitleBg={"#FFEBDD"}
            imgbgColor={"!bg-[#ffffff]"}
            watchesData={smartWatches}
          />
        </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"ساعات قد تعجبك"} color={"#383838"}/>
            <Recommended products={recommendedProducts} />
          </section>
          <DoubleBanner rightBanners={banners} leftBanners={banners} />
          <section>
          <SectionTitle name={"تسوق حسب الرغبة"} color="text-[#383838]" />
            <DesiredSection products={desiredWatches} color="text-[#383838]" titleBg="#F5F5F5"/>
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#3D3D3D] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض تصل الى ٧٠٪ على الساعات النسائية</h2>
              <div className="displayAll !bg-[#FFEBDD] md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wWatchesEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>

          <BannerSlider
            desktopBanners={ManSlimBanner}
            swiperClass={"slim-slider !mb-0 !mt-0"}
            />
            {/* ------------ */}
            <section className="bg-[#F5F5F5] mt-[40px] max-md:mt-[32px]">
                <h1 className="sm:text-[19px] xs:text-[15px] text-[#383838] pb-2 pt-3 text-center">هدايا الساعات الرجالية</h1>
                <WatchesGifts
                mainImg={"/imgs/watches/6c059073b6817302753d8a1321cced4e 1.png"}
                bgcolor={"bg-[#FFEBDD]"}
                bgHover={"hover:bg-[#383838]"}
                watchesData={wWatchesEconomy}
                linksBg={"bg-[#FFEBDD]"}
                Linkscolor={"text-[#383838]"}
                linkshover={"hover:text-[#FFEBDD]"}
                active={"!bg-[#383838] !text-[#FFEBDD]"}
            />
            </section>
            <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>الأكثر مبيعاً أطقم الساعات الفاخرة</h2>
              <div className="displayAll !bg-[#FFEBDD] md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wWatchesEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
            <section>
            <SectionTitle name={"ساعات البنات"} color={"#383838"}/>
            <FlexLinksBanner
              background={brownGirl}
              backgroundMobile={brownGirlmobile}
              links={brownGirllinks}
            />
            </section>
            <section className="LatestKidsWears my-10 max-md:my-8">
            {" "}
            <GlassesMostSelled
                classNames="bg-[#07368A] text-[#383838] lg:text-[#383838] startButtonSwiper"
                text="عروض تصل الى ٧٠٪ على الساعات النسائية"
                glassClassName="!rounded-[20px]"
                linkClassName="!bg-white !text-black"
                cardsClasses={"!bg-[#F5F5F5] !rounded-[11.5px]"}
                titleColor={"#383838"}
            />
            </section>
            <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>أحدث منتجات الساعات</h2>
              <div className="displayAll !bg-[#FFEBDD] md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={wWatchesEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}