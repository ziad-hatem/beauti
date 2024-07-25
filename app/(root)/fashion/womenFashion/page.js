"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import DoubleBanner from "@/components/banners/DoubleBanner";
import LongBannerSlider from "@/components/banners/LongBannerSlider";
import BigBrand from "@/components/common/BigBrand";
import CardNoButtonSlider from "@/components/common/CardNoButtonSlider";
import CardsSlider from "@/components/common/CardsSlider";
import DoubleBigBrand from "@/components/common/DoubleBigBrand";
import DoubleGallary from "@/components/common/DoubleGallary";
import FlexLinksBanner from "@/components/common/FlexLinksBanner";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import Jalabiyas from "@/components/common/Jalabiyas";
import Jewellery from "@/components/common/Jewellery";
import Materials from "@/components/common/Materials";
import Offers from "@/components/common/Offers";
import PinkBigBrand from "@/components/common/PinkBigBrand";
import RecommendationSection from "@/components/common/RecommendationSection";
import Recommended from "@/components/common/Recommended";
import Robes from "@/components/common/Robes";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasDesiredSlider from "@/components/common/ShopasDesiredSlider";
import ShopasPrice from "@/components/common/ShopasPrice";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import SimpleCardNoButtonSlider from "@/components/common/SimpleCardNoButtonSlider";
import SingleBanner from "@/components/common/SingleBanner";
import SlimBanner from "@/components/common/SlimBanner";
import SmallBrandSlider from "@/components/common/SmallBrandSlider";
import SmallBrandSlider2 from "@/components/common/SmallBrandSlider2";
import Sport from "@/components/common/Sport";
import Widebanner from "@/components/common/Widebanner";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import WomenSuitcase from "@/components/common/WomenSuitcase";
import WomenWatch from "@/components/common/WomenWatch";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import ImgsOffersSlider from "@/components/fashion/ImgsOffersSlider";
import ImgsOffersSliderMobile from "@/components/fashion/ImgsOffersSliderMobile";
import {
  banners,
  brownGirl,
  brownGirllinks,
  brownGirlmobile,
  cheapClothes,
  dailyOffers,
  fabrics,
  fbrands,
  filterColors,
  filterOffers,
  filterbrands,
  jalabiya,
  materialsArray,
  offerimgObj,
  recommendedProducts,
  section,
  slimBanners,
  wStyles,
  womanlinks,
  womenbannerObject,
  wrobesImages,
  wsport,
  ShopasDesiredSliderData,
  mobileBanner,
  womenOffers,
  dailyOffersWomen,
  heroBanners,
  mobileBanners,
} from "@/data/fake";
import {
  FashionHeroMobileBanners,
  fashionMaterials,
  fashionOffers,
  fashionSubSections,
  luxuryBrands,
  womenFashionBranches,
  womenOffersSlider,
} from "@/data/fashionSectionData";
import Image from "next/image";
import Link from "next/link";
import features from "../../../../public/imgs/features.svg";
import { womenEconomy, womencircles } from "@/data/fashionData";
import CardsSlider2 from "@/components/common/CardsSlider2";

const data = [
  {
    img: "/imgs/womenFashion/Desirable categories/img1.png",
    name: "المجوهرات",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/womenFashion/Desirable categories/img2.png",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/womenFashion/Desirable categories/img3.png",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
];

export default function WomenFashionPage() {
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
            swiperClass={"top-banner"}
            mobileBanners={FashionHeroMobileBanners.reverse()}
          />
          <div className="features my-4 h-[40px] w-full max-w-[971px] md:my-10 md:h-[60px]">
            <Image
              src={features}
              className="h-full w-full p-2"
              alt="features"
            />
          </div>
          <DoubleGallary products={womenFashionBranches} />
          <div className="my-8 h-full w-full">
            <SectionTitle name={"تسوق حسب الرغبة"} />
            <ShopasDesiredSlider data={ShopasDesiredSliderData} />
          </div>
          <section className="offers !mt-8 md:!mt-10">
            <div className="section-title-offers !bg-none">
              <h2>
                عروض بيوتى | <span className="leastprice">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers offers={fashionOffers} sectionName={"عروض بيوتى"} />
          </section>

          <div className="mt-10">
            <ShopasPrice circles={womencircles} />
          </div>

          <section className="ImgsOffersSlider">
            <SectionTitle name={"عروض بيوتي على العبايات"} />
            <div className="block md:hidden">
              <ImgsOffersSliderMobile array={womenOffersSlider} />
            </div>
            <div className="hidden md:block">
              <ImgsOffersSlider
                array={womenOffersSlider}
                slideClassName={"ImgsOffersSlider-slide"}
                spacesInDesktop={49}
              />
            </div>
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] max-md:!text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>خصم حتى ٧٠٪ على الملابس المحتشمة</h2>
              <div className="displayAll !bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pb-0 md:!mt-10">
            <CardNoButtonSlider
              seaAllColor="#383838"
              HeaderText={"عروض لفترة محدودة الأزياء النسائية"}
              products={dailyOffersWomen}
            />
          </section>

          <section className="mb-10 mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:gap-3">
            <div className="leftSide mx-auto w-auto flex-none max-md:!w-[calc(100%_-_26px)] 2xl:w-[301px]">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#FF9697] px-2 text-[20px] font-[700] text-white md:w-full 2xl:mx-0">
                عروض الملابس النسائية
              </div>
              <WomenSidebarSection />
            </div>
            <div className="rightSide flex h-fit w-full flex-1 flex-col overflow-hidden pt-3 lg:mr-[13px]">
              <Widebanner products={dailyOffers} />
              <div className="section-title !mb-[5px] !mt-[13px] flex !items-center bg-[#FF9697] !px-[13px] !py-[10px] md:!mb-[10px] md:!mt-[16px] md:!py-[14px]">
                <h2 className="lg:text-[18px]#383838 hidden text-[13px] font-[700] text-white lg:block">
                  عروض بيوتي على الملابس النسائية
                </h2>
                <h2 className="block text-[13px] font-[700] text-white lg:hidden lg:text-[18px]">
                  عروض الملابس النسائية
                </h2>
                <div className="displayAll !bg-white !text-black">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider
                products={dailyOffers}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>

          <BannerSlider
            desktopBanners={slimBanners}
            swiperClass={"slim-slider mt-6 !mb-0 !h-[138px] md:!h-[208px]"}
          />
          <section className="ImgsOffersSlider !mt-0 !h-fit">
            <SectionTitle name={"ماركات بيوتي الفاخرة"} />
            <DoubleBigBrand
              array={luxuryBrands}
              slideClassName={"!w-32 sm:!w-40 md:!w-[206px]"}
              spacesInDesktop={49}
            />
          </section>
          <section className="lg:mb-10">
            <SectionTitle name={"فئات مرغوبة"} />
            <div className="mt-5 flex flex-row flex-wrap items-center justify-around gap-3 max-md:mx-[13px]">
              {data.map((e, i) => {
                return (
                  <Link
                    href={"/"}
                    className="group mx-auto flex !w-full flex-col flex-wrap md:!w-[calc(33.33%-20px)] lg:!w-[calc(33.33%-20px)] xl:!w-[calc(33.33%-20px)]"
                    key={i}
                  >
                    <img
                      src={e.img}
                      className="mx-auto mb-1 aspect-square !w-full object-cover"
                      loading="lazy"
                      alt={e.name}
                    />
                    <p className="mt-2 text-center text-[15px] font-[400] max-md:text-[20px] md:mt-1 md:text-start xl:text-[22px]">
                      {e.name}
                    </p>
                    <p className="-mt-0.5 text-center text-[9px] font-[400] max-md:text-[13px] md:text-start xl:text-[14px]">
                      {e.description}
                    </p>
                    <p
                      href={"/"}
                      className="mt-2 h-[20px] text-center text-[12px] group-hover:text-[13px] group-hover:font-[700] max-md:mb-[29px] md:text-start xl:text-[14px]"
                    >
                      تسوق الآن »
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="mb-8 flex w-full flex-col md:mb-10 md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide w-auto flex-none md:!ml-[19px] md:w-fit">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  أحدث المنتجات الملابس النسائية
                </h2>
              </div>
              <WomenSidebarSection2 />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !mb-[17px] !ml-0 !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  أحدث المنتجات الملابس النسائية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                sectionClassName="!bg-none !t-0 !py-0 !mt-0"
                classNames="!mt-1"
                productClassName=""
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] max-md:block"
            >
              عرض الكل »
            </Link>
          </section>
          <section className="round PinkBigBrandSection">
            <PinkBigBrand
              array={cheapClothes}
              title="أزياء نسائية تناسب الميزانية"
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !px-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#FF9697] max-md:!text-[13px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>ملابس تبدأ من ٣٠ ريال</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="!mt-[5px] !pr-[0] !mr-[5px] NextButtonSwiperRight0PX"
            />
          </section>
          <section className="ImgsOffersSlider !mt-0 mb-5">
            <SectionTitle name={"أشهر الماركات العالمية"} />
            <BigBrand />
          </section>

          <SmallBrandSlider brands={fbrands} />
          <DoubleBanner rightBanners={banners} leftBanners={banners} />
          <section className="flex w-full flex-col md:flex-row 2xl:max-h-fit">
            <div className="leftSide w-auto flex-none md:!ml-[19px] md:w-fit">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  الأكثر مبيعاً الملابس النسائية
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/womenFashion/sideimg3.svg"
                mobileImg="/imgs/womenFashion/mobliesideimg3.svg"
              />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !my-0 !mb-[15px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأكثر مبيعاً الملابس النسائية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                sectionClassName="!bg-none !t-0 !py-0 !mt-0"
                classNames="!mt-0"
                products={dailyOffers}
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="min-h-fit">
            <SectionTitle name={"الفساتين"} />
            <SingleBanner
              banner={womenbannerObject}
              mobileBanner={womenbannerObject}
              links={womanlinks}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#97CBE7] max-md:!text-[13px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الفساتين</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="!mt-[5px] !p-0 !pr-[5px] NextButtonSwiperRight0PX"
            />
          </section>
          <section className="ImgsOffersSlider !h-auto w-full !overflow-visible">
            <SectionTitle name={"الأرواب و المناشف"} />
            <Robes robes={wrobesImages} offer={offerimgObj} />
          </section>
          <section className="gray round CardsSlider-p !mt-8 max-lg:!p-0 md:!mt-10">
            <div className="section-title  !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#F5F5F5] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الأرواب و المناشف</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="womensuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"شنط و حقائب نسائية"} />
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"شنط نسائية"} />
            </div>
            <WomenSuitcase />
          </section>
          <section className="gray round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px]  max-md:items-center max-md:!bg-[#FF9697] max-md:text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الشنط النسائية</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <DoubleBanner
            rightBanners={banners}
            classNames="!mb-0 max-md:!mt-8 !mt-10"
            leftBanners={banners}
          />
          <section className="w-full">
            {" "}
            <SectionTitle name={"ساعات نسائية"} />
            <WomenWatch bgcolor="#FFEBDD" />
          </section>
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                أحدث المنتجات الملابس النسائية
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/womenFashion/sideImg2.svg"
                mobileImg="/imgs/womenFashion/sideImg2.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className=" text-[19px] font-[500] text-[#383838]">
                  الأكثر مبيعاً الملابس النسائية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
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
          <section className="mb-8 md:mb-10">
            <SectionTitle name={"الجلابيات"} />
            <Jalabiyas
              color={"#D0E0F0"}
              girl={jalabiya.girl}
              mobileBackground={jalabiya.mobileBackgroundImg}
              background={jalabiya.backgroundImg}
              title={jalabiya.title}
              links={jalabiya.links}
            />
          </section>
          <section className="CardsSlider-p round !bg-[#E8EFF7] md:!bg-[#FAFAFA]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#F2F4F9] md:pb-[10px] md:pt-[5px]">
              <h2>عروض الجلابيات</h2>
              <div className="displayAll md:!bg-black md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames=" !py-1 !mt-0 NextButtonSwiperRight0PX"
            />
          </section>
          <Sport sportArray={wsport} />
          <BannerSlider
            desktopBanners={slimBanners}
            swiperClass={"slim-slider mt-8 md:mt-10 !h-[138px] md:!h-[208px]"}
          />
          <section className="ImgsOffersSlider SmallBrandSlider2-section !mb-8 !mt-0 md:!mb-10">
            <SectionTitle name={"تسوق افضل ماركات الملابس الرياضية"} />
            <SmallBrandSlider2 brands={fbrands} />
          </section>
          <section className=" round CardsSlider-p bg-[#F2F4F9] max-md:!mt-0 md:bg-[#FAFAFA]">
            <div className="section-title !mb-0  !items-center max-md:!h-[35px] max-md:!bg-[#FF9697] md:!mt-0 md:!pb-[10px] md:!pt-[5px]">
              <h2 className="!max-w-full max-md:!text-[12px] max-md:!text-white">
                عروض تصل إلى 70% على الملابس الرياضية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-md:!bg-[#FAFAFA] max-md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="!p-0 max-md:!mt-[5px] !h-fit !mr-[5px] NextButtonSwiperRight0PX"
            />
          </section>
          <section>
            <ShopasPrice2
              mobileImg="/imgs/bigGirlImage.svg"
              img="/imgs/bigGirlImagepc.svg"
            />
          </section>
          <section className="my-5">
            <SectionTitle name={"الأعلى تقييماً لدى العملاء"} />
            <BannerSlider
              desktopBanners={slimBanners}
              swiperClass={
                "slim-slider !mb-8 md:!mb-10 !h-[138px] md:!h-[208px]"
              }
            />
          </section>
          <section>
            <GlassesMostSelled
              products={womenEconomy}
              glassClassName="!w-[161px] !h-[161px]"
              text="الأكثر مبيعاً النظارات الشمسية النسائية"
              classNames="max-lg:bg-[#F5F5F5] !h-[38px]"
            />
          </section>
          <section>
            <SectionTitle name={"الملابس الشتوية"} />
            <FlexLinksBanner
              background={brownGirl}
              backgroundMobile={brownGirlmobile}
              links={brownGirllinks}
            />
          </section>
          <section className="womenFashion">
            <Jewellery
              bgHover="383838"
              bgcolor="#F5F5F5"
              mainImg="/imgs/bigjewellery.svg"
            />
          </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"ملابس قد تعجبك"} />
            <Recommended products={recommendedProducts} />
          </section>
          <section className="ImgsOffersSlider Recommended !mt-0 mb-2">
            <SectionTitle name={"تسوق الملابس النسائية حسب التصميم"} />
            <LongBannerSlider stylesArray={wStyles} />
          </section>
          <section>
            <SectionTitle name={fabrics.title} />
            <SlimBanner
              banner={fabrics.img}
              mobileBanner={fabrics.mobileImg}
              title={fabrics.title}
            />
          </section>
          <Materials
            array={materialsArray}
            materialBackground={"#FFF8F7"}
            materialColor={"#C97284"}
          />
          <section className="pink-color round CardsSlider-p">
            <div className="section-title !mb-0 !items-center max-md:!h-[35px] md:!mt-0 md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الأقمشة النسائية</h2>
              <div className="displayAll !bg-[#383838] !text-white max-md:!bg-[#FAFAFA] max-md:!text-[#383838]">
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
