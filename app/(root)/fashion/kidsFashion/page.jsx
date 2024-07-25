"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import BabyWears from "@/components/common/BabyWears";
import BeautyOffersgirls from "@/components/common/BeautyOffersgirls";
import CardNoButtonSlider from "@/components/common/CardNoButtonSlider";
import CardsSlider from "@/components/common/CardsSlider";
import DoubleGallary from "@/components/common/DoubleGallary";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import KidsJewellery from "@/components/common/KidsJewellery";
import KidsSlider from "@/components/common/KidsSlider";
import Offers from "@/components/common/Offers";
import PinkBigBrand from "@/components/common/PinkBigBrand";
import RecommendationSection from "@/components/common/RecommendationSection";
import Recommended from "@/components/common/Recommended";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasBrand from "@/components/common/ShopasBrand";
import ShopasPrice from "@/components/common/ShopasPrice";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import ShopasPrice3 from "@/components/common/ShopasPrice3";
import SmallBrandSlider2 from "@/components/common/SmallBrandSlider2";
import Sport from "@/components/common/Sport";
import Widebanner from "@/components/common/Widebanner";
import ShopasPriceGirl from "@/components/common/ShopasPriceGirl";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import WomenSuitcase from "@/components/common/WomenSuitcase";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  ManSlimBanner,
  fbrands,
  filterColors,
  filterOffers,
  filterbrands,
  mancheapClothes,
  mobileBanners,
  recommendedProducts,
  section,
  slimBanners,
} from "@/data/fake";
import {
  BeautyOffers,
  MobilekidsBanner,
  beautyOffersGirl,
  cheapClothes,
  circles,
  dailyOffers,
  dailyOffersKids,
  dailyeconomyKids,
  girlJewellery,
  kidsBanner,
  kidsFashion,
  tempmobileBanner,
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";

import CardsSlider2 from "@/components/common/CardsSlider2";
import Image from "next/image";
import Link from "next/link";
import { leftlinks, rightlinks, wsport } from "../../data/fashionData";
import { formatNumberInArabic } from "@/libs/formatNumber";
const data = [
  {
    img: "/imgs/kidsFashion/Desirablecategories/img1.svg",
    name: "كابات و قبعات",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/kidsFashion/Desirablecategories/img2.svg",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/kidsFashion/Desirablecategories/img3.svg",
    name: "الأطقم الرياضية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
];
export default function KidsFashionPage() {
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
            desktopBanners={kidsBanner}
            mobileBanners={MobilekidsBanner}
            swiperClass={"top-banner"}
          />
          <section className="my-8 md:my-10">
            <DoubleGallary products={kidsFashion} />
          </section>
          <section className="offers">
            <div className="section-title-offers !bg-[#FFF1F1] !text-[#383838]">
              <h2 className="!text-[#383838]">
                عروض بيوتى |{" "}
                <span className="leastprice !text-[#383838]">
                  خصم حتى {formatNumberInArabic(70)}%
                </span>
              </h2>
            </div>
            <Offers
              offers={BeautyOffers}
              banner="/imgs/far 3.svg"
              bannerTextColor="#383838"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section className="round CardsSlider-p relative !mt-8 md:!mt-10">
            <div className="absolute top-[-2%] z-[-10] h-[80%] w-full bg-[#FAFAFA] pt-2"></div>
            <CardNoButtonSlider
              products={dailyOffersKids}
              heart={false}
              backgroundColor="#FFF1F1"
              imgbgColor="#F9F9F9"
              textColor="#383838"
              HeaderText={"عروض لفترة محدودة الأزياء البناتية"}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !p-0 md:!mt-10">
            <div className="section-title flex !h-fit items-center max-md:!my-0 max-md:!h-[35px] max-md:!bg-[#FFF1F1] md:!mt-0 md:!pb-[10px] md:!pt-[7px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض ملابس البنات تبدأ من ٢٥ ريال{" "}
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyeconomyKids}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <div className="mt-8 lg:mt-10">
            <ShopasPrice
              circles={circles}
              color="FFF1F1"
              img="/imgs/kidsFashion/shirt.svg"
            />
          </div>

          <section className="mt-10 max-md:mt-8">
            <div className="header relative mb-3 flex h-[119px] items-center justify-between">
              <h1 className="mr-[70px] text-[22px] font-[500] max-lg:mr-[14px] max-lg:text-[12px]">
                عروض بيوتي على الماركات العالمية
              </h1>
              <Image
                unoptimized
                src={"/imgs/kidsFashion/headerkidsImgMobile.svg"}
                width={100}
                height={100}
                className="absolute left-0 block h-[118px] w-[162px] max-sm:left-[-10px] md:hidden"
              />
              <Image
                unoptimized
                src={"/imgs/kidsFashion/headerkidsImg.svg"}
                width={100}
                height={100}
                className="absolute left-0 ml-[67px] hidden h-[21.1vw] max-h-[126px] w-[50.65vw] max-w-[245px] md:block"
              />
            </div>
            <BeautyOffersgirls products={beautyOffersGirl} />
          </section>
          <section className="round PinkBigBrandSection kids mb-8 mt-8 max-md:bg-[#FAFAFA] md:mb-10 md:mt-10">
            <PinkBigBrand
              array={cheapClothes}
              male={false}
              manArray={mancheapClothes}
            />
          </section>
          <BannerSlider
            desktopBanners={ManSlimBanner}
            mobileBanners={tempmobileBanner}
            swiperClass={"slim-slider !mb-0 !mt-0"}
          />
          <section className=" mt-8 flex w-full flex-col md:flex-row md:!items-center lg:mt-10 2xl:max-h-[350px]">
            <div className="leftSide mx-auto h-auto w-full lg:w-[213px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !h-[42px] !items-center !justify-center bg-[#FFF1F1] !pr-[13px] pl-0 md:!hidden">
                <h3 className=" text-[14px] font-[500] text-[#383838]">
                  خصم حتى ٧٥٪ على الكنزات و التيشرتات البناتية
                </h3>
              </div>
              <WomenSidebarSection2
                img="/imgs/kidsFashion/sideImg.svg"
                mobileImg="/imgs/kidsFashion/sideImgMobile.svg"
              />
            </div>
            <div className="rightSide mr-1 flex h-fit flex-col md:w-[calc(100%_-_213px)]">
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-8 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  خصم حتى ٧٥٪ على الكنزات و التيشرتات البناتية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                swiperClassName="md:!mr-[19px] NextButtonSwiperRight19PX"
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] max-md:block"
            >
              عرض الكل »
            </Link>
          </section>
          <section className="mt-10 flex gap-3 max-md:mt-8 max-md:flex-col">
            <Image
              src={"/imgs/kidsFashion/leftImg.png"}
              unoptimized
              width={100}
              height={100}
              loading="lazy"
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/kidsFashion/leftImg2.png"}
              width={100}
              unoptimized
              loading="lazy"
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:mt-10">
            <div className="leftSide mx-auto w-fit flex-shrink-0 max-md:!w-[calc(100%_-_26px)] xl:w-[301px]">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#FFF1F1] px-2 text-[20px] font-[700] text-[#383838] max-lg:text-[15px] md:w-full 2xl:mx-0">
                عروض أطقم البنات
              </div>
              <WomenSidebarSection
                WebImg="/imgs/kidsFashion/sideImg2.svg"
                mobileImg="/imgs/kidsFashion/sideImg2Mobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-full flex-grow flex-col overflow-hidden pt-3 md:mr-[13px]">
              <Widebanner products={dailyOffers} />
              <div className="section-title !mb-[5px] !mt-[13px] flex !h-[35px] !items-center bg-[#FFF1F1] !px-[13px] md:!mb-[10px] md:!mt-[16px] md:!h-[39px]">
                <h2 className="block text-[13px] font-[700] !text-[#383838] lg:text-[18px]">
                  عروض بيوتي على أطقم البنات
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
          <section>
            <ShopasPriceGirl
              mobileImg="/imgs/kidsFashion/BigGirlImageMobile.svg"
              img="/imgs/kidsFashion/BigGirlImage.svg"
              rightlinks={rightlinks}
              leftlinks={leftlinks}
            />
          </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"ملابس قد تعجبك"} />
            <Recommended products={recommendedProducts} />
          </section>
          <section className="womensuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"شنط و حقائب بناتية"} />
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"شنط بناتية"} />
            </div>
            <WomenSuitcase
              mainImg="/imgs/kidsFashion/banners/suitcase.svg"
              data={[
                {
                  name: "شنط يد",
                  img: "/imgs/kidsFashion/banners/suitcase1.svg",
                  mobileImg: "/imgs/kidsFashion/banners/suitcaseMobile1.svg",
                },
                {
                  name: "حقائب ظهر",
                  img: "/imgs/kidsFashion/banners/suitcase2.svg",
                  mobileImg: "/imgs/kidsFashion/banners/suitcaseMobile2.svg",
                },
                {
                  name: "محفظة",
                  img: "/imgs/kidsFashion/banners/suitcase3.svg",
                  mobileImg: "/imgs/kidsFashion/banners/suitcaseMobile3.svg",
                },
                {
                  name: "شنط سفر",
                  img: "/imgs/kidsFashion/banners/suitcase4.svg",
                  mobileImg: "/imgs/kidsFashion/banners/suitcaseMobile4.svg",
                },
              ]}
            />
          </section>
          <section className="round CardsSlider-p max-md:!mt-2 md:!mt-10">
            <div className="section-title !mb-[22px] flex !h-fit items-center md:!mb-7 md:!mt-0">
              <h2 className="!text-[20px] font-[700] text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض شنط البنات
              </h2>
              <div className="displayAll !bg-[#FF9C9E] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <KidsSlider products={dailyOffers} classNames="max-lg:!mr-[5px]" />
          </section>
          <section className="mt-10 max-md:mt-8">
            <div className="flex h-[39px] items-center justify-center bg-[#FFF1F1] text-[15px] font-[400] md:h-[78px] md:rounded-t-[16px] md:rounded-tr-[16px] lg:text-[22px]">
              ملابس الرضع
            </div>
            <BabyWears banner={kidsBanner} />
          </section>
          <section className="round CardsSlider-p mt-8 lg:mt-10 lg:bg-[#FAFAFA]">
            <div className="section-title flex !h-fit items-center !pb-[10px] !pt-[7px] max-lg:!bg-[#FFF1F1] max-md:!h-[35px] md:!my-0">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض ملابس البنات الرضع
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
            />
          </section>
          <section>
            <ShopasPrice2
              mobileImg="/imgs/kidsFashion/GirlImgMobile.svg"
              img="/imgs/kidsFashion/GirlImgDesktop.svg"
            />
          </section>
          <section className="mt-10 flex w-full flex-col max-lg:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-0 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FFF1F1] !py-[10px] !pr-[13px] md:!hidden">
              <h2 className=" text-[16px] font-[500] text-[#383838]">
                الأعلى تقييماً الملابس البناتية
              </h2>
            </div>
            <div className="leftSide lg:h-[351px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/kidsFashion/sideImg3.svg"
                mobileImg="/imgs/kidsFashion/sideImg3Mobile.svg"
                className="max-md:!mb-2"
              />
            </div>
            <div className="rightSide mr-[19px] flex !h-auto w-full flex-col !justify-center max-md:!mr-[5px] md:w-[calc(100%_-_232px)] lg:h-fit">
              <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="!mb-[17px] text-[19px] font-[500] text-[#383838]">
                  الأعلى تقييماً الملابس البناتية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] NextButtonSwiperRight0PX"
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="kidsSports">
            <Sport sportArray={wsport} />
          </section>
          <BannerSlider
            desktopBanners={slimBanners}
            mobileBanners={tempmobileBanner}
            swiperClass={
              "max-lg:h-[138px] mx-auto max-md:w-[calc(100%_-_26px)] max-h-[300px] lg:!h-[208px] mt-10 max-lg:mt-8"
            }
          />
          <section className="ImgsOffersSlider  SmallBrandSlider2-section !mb-8 !mt-0 md:!mb-10">
            <SectionTitle name={"تسوق افضل ماركات الملابس الرياضية"} />
            <SmallBrandSlider2 brands={fbrands} />
          </section>
          <section className="lg:mb-10">
            <SectionTitle name={"فئات مرغوبة"} />
            <div className="mt-5 flex !h-fit flex-row flex-wrap items-center justify-around gap-3 max-lg:mx-[13px]">
              {data.map((e, i) => {
                return (
                  <Link
                    href={"/"}
                    className="group flex !h-fit !w-full flex-col flex-wrap md:!w-[calc(33.33%-20px)] lg:!w-[calc(33.33%-20px)] xl:!w-[calc(33.33%-20px)]"
                    key={i}
                  >
                    <div className="!w-full bg-[#F5F5F5] xl:!h-[313px]">
                      <Image
                        src={e.img}
                        width={100}
                        height={100}
                        className="mx-auto aspect-square !h-full !w-full object-cover mix-blend-multiply"
                        loading="lazy"
                        alt={e.name}
                      />
                    </div>
                    <p className="mt-2 text-center text-[15px] font-[400] text-[#383838] max-md:text-[20px] md:mt-1 md:text-start xl:text-[22px]">
                      {e.name}
                    </p>
                    <p className="-mt-0.5 text-center text-[9px] font-[400] text-[#383838] max-md:text-[13px] md:text-start xl:text-[14px]">
                      {e.description}
                    </p>
                    <Link
                      href={"/"}
                      className="mt-2 text-center text-[12px] text-[#383838] group-hover:text-[13px] group-hover:font-[700] max-md:mb-[29px] md:text-start xl:text-[14px]"
                    >
                      تسوق الآن »
                    </Link>
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="gray round CardsSlider-p !mt-10 max-md:!mt-1">
            <div className="section-title  flex !h-fit items-center !pb-[10px] !pt-[7px] max-lg:!my-0 max-md:!h-[35px] max-md:!bg-[#FFF1F1] max-md:!text-[#FFF1F1] md:!my-0">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[12px]">
                عروض تصل إلى ٧٠٪ على الملابس الرياضية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyeconomyKids}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section>
            <ShopasPrice3
              mobileImg="/imgs/kidsFashion/beautyOffersGirl2Mobile.svg"
              img="/imgs/kidsFashion/beautyOffersGirl2.svg"
              className={"justify-center gap-[25px]"}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-10 max-lg:!mt-8">
            <div className="section-title flex !h-fit items-center !pb-[10px] !pt-[7px] max-lg:!my-0 max-lg:!bg-[#FFF1F1] max-md:!h-[35px] max-md:!text-[#FFF1F1] md:!my-0">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                الأكثر مبيعاً العبايات البناتية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyeconomyKids}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="kidsJewellery">
            <KidsJewellery
              HeaderImg="/imgs/kidsFashion/girlaccessories/header.svg"
              HeaderText="اكسسوارات بناتية"
              mainImg="/imgs/kidsFashion/girlaccessories/bigimg.svg"
              bgcolor="#FFEBF2"
              jewelleryData={girlJewellery}
            />
          </section>
          <section className="round CardsSlider-p">
            <div className="section-title !mt-8 mb-[22px] flex !h-[35px] items-center md:!mt-10">
              <h2 className="!text-[20px] font-[700] text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                الأكثر مبيعاً الملابس البناتية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <KidsSlider products={dailyOffers} classNames="max-lg:!mr-[5px]" />
          </section>
          <section className="relative my-10 h-fit max-md:my-8">
            <Image
              src={"/imgs/kidsFashion/bigWideBanner.svg"}
              width={100}
              height={100}
              className="mx-auto hidden h-[138px] w-[calc(100%_-_26px)] max-md:rounded-10 md:block md:h-full md:w-full"
            />
            <Image
              src={"/imgs/kidsFashion/bigWideBannerMobile.svg"}
              width={100}
              height={100}
              className="mx-auto block h-fit w-[calc(100%_-_26px)] max-md:rounded-10 md:hidden md:h-full md:w-full"
            />
          </section>
          <section className="mb-6 mt-8 flex w-full flex-col md:flex-row md:!items-center lg:mt-10 2xl:max-h-[350px]">
            <div className="leftSide h-auto w-full lg:w-[213px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !h-[42px] !items-center !justify-center bg-[#FFF1F1] !px-[13px] md:!hidden">
                <h3 className=" text-[14px] font-[500] text-white max-md:text-black">
                  الأعلى تقييماً الأحذية البناتية
                </h3>
              </div>
              <WomenSidebarSection2
                img="/imgs/kidsFashion/sideImg4.svg"
                mobileImg="/imgs/kidsFashion/sideImg4Mobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit flex-col max-md:mr-[5px] md:mr-[19px] md:w-[calc(100%_-_232px)]">
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأعلى تقييماً الأحذية البناتية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={dailyOffers}
                classNames="max-lg:!mr-[5px]"
              />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] max-md:block"
            >
              عرض الكل »
            </Link>
          </section>
          <section className="shopasBrand">
            <SectionTitle name={"تسوقي حسب الماركة"} />
            <ShopasBrand mainImg="/imgs/kidsFashion/shopasbrand/img2.svg" />
          </section>
          <section className="mt-10 flex gap-3 max-md:mt-8 max-md:flex-col">
            <Image
              src={"/imgs/kidsFashion/leftImg3.png"}
              width={100}
              height={100}
              loading="lazy"
              unoptimized
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/kidsFashion/leftImg4.png"}
              width={100}
              height={100}
              loading="lazy"
              unoptimized
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="LatestKidsWears my-10 max-md:my-8">
            {" "}
            <GlassesMostSelled
              classNames="bg-[#F5F5F5] text-black startButtonSwiper"
              text="أحدث منتجات الملابس البناتية"
              glassClassName="!rounded-none"
            />
          </section>
          <section className="mb-8 md:mb-10">
            <SectionTitle name={"الأعلى تقييماً لدى العملاء"} />
            <BannerSlider
              desktopBanners={ManSlimBanner}
              swiperClass={"slim-slider mt-6"}
              mobileBanners={tempmobileBanner}
            />
          </section>
          <section className="round CardsSlider-p lg:bg-[#FAFAFA]">
            <div className="section-title flex !h-fit items-center !pb-[10px] !pt-[7px] max-md:!h-[35px] max-md:!bg-[#FFF1F1] md:!my-0">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                الأكثر مبيعاً الملابس البناتية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-lg:bg-white max-lg:text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={dailyOffers}
              classNames="max-lg:!mr-[5px] NextButtonSwiperRight0PX "
            />
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
