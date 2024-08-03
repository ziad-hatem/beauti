"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import DoubleBanner from "@/components/banners/DoubleBanner";
import BeautyOffersgirls from "@/components/common/BeautyOffersgirls";
import CardsSlider from "@/components/common/CardsSlider";
import CardsSlider2 from "@/components/common/CardsSlider2";
import Fitbudget from "@/components/common/Fitbudget";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import Offers from "@/components/common/Offers";
import RecommendationSection from "@/components/common/RecommendationSection";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasBrand from "@/components/common/ShopasBrand";
import ShopasPrice from "@/components/common/ShopasPrice";
import Widebanner from "@/components/common/Widebanner";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import WomenWatch from "@/components/common/WomenWatch";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  banners,
  dailyOffers,
  filterbrands,
  filterColors,
  filterOffers,
  ManSlimBanner,
  section,
} from "@/data/fake";
import {
  beautyCircles,
  BeautyOffers,
  beautyOffersCare,
  fitBudgetProducts,
  kidsBanner,
  makeupHeroSlider,
  MobilekidsBanner,
  mostSelledVitaminsProducts,
  tempmobileBanner,
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import { formatNumberInArabic } from "@/libs/formatNumber";
import Link from "next/link";
import MakeupHeroSlider from "../../components/common/MakeupHeroSlider";

export default function Makeup() {
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
          <section className="mt-8 md:mt-10">
            <MakeupHeroSlider data={makeupHeroSlider} />
          </section>
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9C9E] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                أحدث المنتجات الملابس الرجالية
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/beauty&care/sideImg.svg"
                mobileImg="/imgs/beauty&care/mobileSideImg.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[16px] font-[500] text-[#383838] lg:text-[19px]">
                  عروض بيوتي على مستحضرات التجميل و العناية
                </h2>
                <div className="displayAll !bg-[#FF9C9E] !text-white">
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
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>أقل من ٢٥ ريال</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <DoubleBanner
            rightBanners={banners}
            classNames="!mb-0 max-md:!mt-8 !mt-[20px]"
            leftBanners={banners}
          />
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9C9E] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                أحدث المنتجات الملابس الرجالية
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/beauty&care/sideImg2.svg"
                mobileImg="/imgs/beauty&care/mobileSideImg2.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[16px] font-[500] text-[#383838] lg:text-[19px]">
                  الأعلى تقييماً مستحضرات التجميل و العناية
                </h2>
                <div className="displayAll !bg-[#FF9C9E] !text-white">
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
          <section className="shopasBrand">
            <SectionTitle name={"تسوقي حسب الماركة"} />
            <ShopasBrand
              brands={[
                {
                  img: "/imgs/beauty&care/shopasbrand/brand1.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand2.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand3.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand4.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand5.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand6.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand7.svg",
                },
                {
                  img: "/imgs/beauty&care/shopasbrand/brand8.svg",
                },
              ]}
              mainImg="/imgs/beauty&care/shopasbrand/mainImg.svg"
            />
          </section>
          <section className="mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:mt-10">
            <div className="leftSide mx-auto w-fit flex-shrink-0 max-md:!w-[calc(100%_-_26px)] xl:w-[301px]">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#FF9C9E] px-2 text-[20px] font-[700] text-white max-lg:text-[15px] md:w-full 2xl:mx-0">
                عروض المكياج
              </div>
              <WomenSidebarSection
                WebImg="/imgs/kidsFashion/sideImg2.svg"
                mobileImg="/imgs/kidsFashion/sideImg2Mobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-full flex-grow flex-col overflow-hidden pt-3 md:mr-[13px]">
              <Widebanner
                products={dailyOffers}
                buttonbg="bg-[#383838]"
                buttonHovbg="hover:bg-[#383838]"
              />
              <div className="section-title !mb-[5px] !mt-[13px] flex !h-[35px] !items-center bg-[#FF9C9E] !px-[13px] md:!mb-[10px] md:!mt-[16px] md:!h-[39px]">
                <h2 className="block text-[13px] font-[700] !text-white lg:text-[18px]">
                  عروض بيوتي على المكياج
                </h2>
                <div className="displayAll !bg-white !text-[#383838]">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider
                products={dailyOffers}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>
          <section className="mt-10 max-md:mt-8">
            <SectionTitle name={"عروض على أهم الماركات العالمية"} />

            <BeautyOffersgirls
              products={beautyOffersCare}
              bg=""
              hover={"#EBEBEB"}
              offerbgColor="#FF9C9E"
              offerTextColor="#FFFFFF"
              hideButtons={true}
            />
          </section>
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>أقل من ٢٥ ريال</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="offers !mt-8 md:!mt-[20px]">
            <div className="section-title-offers !bg-[#FFF] font-[400] !text-[#383838]">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#CA4758]">
                  خصم حتى {formatNumberInArabic(70)}%
                </span>
              </h2>
            </div>
            <Offers
              offers={BeautyOffers}
              banner="/imgs/far5.svg"
              bannerTextColor="#FFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>اخترناها لك مستحضرات العناية بالشعر</h2>
              <div className="displayAll !bg-[#FF9C9E] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9C9E] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                أحدث المنتجات الملابس الرجالية
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/beauty&care/sideImg4.svg"
                mobileImg="/imgs/beauty&care/mobileSideImg3.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[16px] font-[500] text-[#383838] lg:text-[19px]">
                  أحدث المنتجات مستحضرات التجميل و العناية
                </h2>
                <div className="displayAll !bg-[#FF9C9E] !text-white">
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
          <div className="mt-8 lg:mt-10">
            <ShopasPrice
              circles={beautyCircles}
              color="FFF1F1"
              img="/imgs/makeup/mainImg.svg"
            />
          </div>
          <section className="mt-8 md:mt-10">
            <BannerSlider
              desktopBanners={ManSlimBanner}
              mobileBanners={tempmobileBanner}
              swiperClass={"slim-slider !mb-0 !mt-0"}
            />
          </section>
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>اخترناها لك مستحضرات العناية بالشعر</h2>
              <div className="displayAll !bg-[#FF9C9E] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="w-full">
            {" "}
            <SectionTitle name={"ساعات نسائية"} className="md:!mt-[20px]" />
            <WomenWatch
              bgcolor="#F6F6F6"
              BigImages={[
                {
                  image: "/imgs/beauty&care/makeup/bigImg.png",
                  title: "كريم الأساس",
                },
                {
                  image: "/imgs/beauty&care/makeup/bigImg2.png",
                  title: "طلاء الأظافر",
                },
              ]}
              fourImages={[
                {
                  image: "/imgs/beauty&care/makeup/smallImg.png",
                  title: "مسكارا الحواجب",
                },
                {
                  image: "/imgs/beauty&care/makeup/smallImg2.png",
                  title: "مزيل مكياج",
                },
                {
                  image: "/imgs/beauty&care/makeup/smallImg3.png",
                  title: "أحمر شفاه",
                },
                {
                  image: "/imgs/beauty&care/makeup/smallImg4.png",
                  title: "فرش المكياج",
                },
              ]}
            />
          </section>
          <section className="round PinkBigBrandSection kids mt-8 md:mt-10">
            <Fitbudget array={fitBudgetProducts} />
          </section>
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض على أدوات العناية و التجميل</h2>
              <div className="displayAll !bg-[#EFEBE0] !text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
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
          <section className="round CardsSlider-p !mt-6 md:!mt-[30px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض على أدوات العناية و التجميل</h2>
              <div className="displayAll !bg-[#EFEBE0] !text-[#383838]">
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
