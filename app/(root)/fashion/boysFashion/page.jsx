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
import Recommended from "@/components/common/Recommended";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasPrice3 from "@/components/common/ShopasPrice3";
import KidsSlider from "@/components/common/KidsSlider";
import boysJewellery from "@/components/common/BoysJewellery";
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
import {
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
} from "@/data/fake";
import {
  BeautyOffers,
  beautyOffersGirl,
  beautyOffersboys,
  boysBanner,
  boysBeautyOffers,
  boysEconomy,
  boysFashion,
  boyscheapClothes,
  boyscircles,
  boysleftlinks,
  boysrightlinks,
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
} from "@/data/fashionData";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import Link from "next/link";
import Image from "next/image";
import { wsport } from "../../data/fashionData";
import BoysJewellery from "@/components/common/BoysJewellery";
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
export default function boysFashionPage() {
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
          <BannerSlider
            desktopBanners={boysBanner}
            swiperClass={"top-banner"}
            mobileBanners={mobileboysBanner}
          />{" "}
          <section className="my-8 md:my-10">
            <DoubleGallary products={boysFashion} />
          </section>
          <section className="offers">
            <div className="section-title-offers !bg-[#07368A] !text-white">
              <h2 className="!text-white">
                عروض بيوتى |{" "}
                <span className="leastprice !text-white">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers
              offers={boysBeautyOffers}
              banner="/imgs/far 4.svg"
              bannerTextColor="#FFF"
              sectionName={"عروض بيوتى"}
            />
          </section>
          <section className="CardsSlider-p round relative !mt-8 !pt-0 md:!mt-10">
            <div className="absolute top-[0%] z-[-10] h-[80%] w-full bg-[#F3F3F3] pt-0"></div>
            <CardNoButtonSlider
              products={dailyOffersboys}
              heart={false}
              backgroundColor="#07368A"
              imgbgColor="#F9F9F9"
              textColor="#FFFFFF"
              seaAllColor="#07368A"
              HeaderText={"عروض لفترة محدودة الأزياء الولادية "}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !bg-[#FAFAFA] !pt-0 md:!mt-8 md:!bg-[#F5F5F5]">
            <div className="section-title flex items-center !rounded-none !bg-[#F5F5F5] max-lg:!my-0 max-md:!h-[35px] md:!mb-[15px] md:!mt-[5px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض ملابس الأولاد تبدأ من ٢٥ ريال
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={boysEconomy}
              className="NextButtonSwiperRight0PX"
            />
          </section>
          <div className="mt-8 lg:mt-10">
            <ShopasPrice
              circles={boyscircles}
              color="FFF1F1"
              img="/imgs/boysFashion/shirt.svg"
            />
          </div>
          <section className="mt-10 max-md:mt-8">
            <div className="header relative mb-4 flex justify-center md:mb-8">
              <h1 className="text-[22px] font-[400] max-lg:mr-[14px] max-lg:text-[13px]">
                عروض بيوتي على الماركات العالمية
              </h1>
            </div>
            <BeautyOffersgirls
              offerbgColor="#07368A"
              offerTextColor="#FFFFFF"
              products={beautyOffersboys}
            />
          </section>
          <section className="round PinkBigBrandSection kids mb-8 mt-8 !pb-8 !pr-[10px] !pt-0.5 md:mb-10 md:mt-10 md:!bg-[#F5F5F5]">
            <BlueBigBrand array={boyscheapClothes} />
          </section>
          <BannerSlider
            desktopBanners={ManSlimBanner}
            swiperClass={"slim-slider !mb-0 !mt-0"}
          />
          <section className="mb-6 mt-8 flex w-full flex-col md:flex-row md:!items-center lg:mt-10 2xl:max-h-[350px]">
            <div
              className="leftSide h-auto w-auto md:!ml-[19px] lg:w-[213px]"
              style={{ flex: "0 0 auto" }}
            >
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !h-[42px] !items-center !justify-center bg-[#07368A] !pr-[13px] pl-0 md:!hidden">
                <h3 className="text-[14px] font-[500] text-white">
                  خصم حتى ٧٥٪ على الكنزات و التيشرتات الولادية
                </h3>
              </div>
              <WomenSidebarSection2
                img="/imgs/boysFashion/sideImg.svg"
                mobileImg="/imgs/boysFashion/sideImgMobile.svg"
              />
            </div>
            <div
              className="rightSide mr-1 flex h-fit flex-col overflow-hidden"
              style={{ flex: "1 1 auto" }}
            >
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  خصم حتى ٧٥٪ على الكنزات و التيشرتات الولادية
                </h2>
                <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                  <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                    عرض الكل
                  </a>
                </div>
              </div>
              <CardsSlider2 products={boysEconomy} />
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
              src={"/imgs/boysFashion/rightImg.svg"}
              width={100}
              height={100}
              unoptimized
              loading="lazy"
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/boysFashion/leftImg.svg"}
              width={100}
              unoptimized
              loading="lazy"
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="mb-10 mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:mt-10">
            <div
              className="leftSide mx-auto max-md:!w-[calc(100%_-_26px)] 2xl:w-[301px]"
              style={{ flex: "0 0 auto" }}
            >
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#07368A] px-2 text-[20px] font-[700] text-white max-lg:text-[15px] md:w-full 2xl:mx-0">
                عروض شورتات الأولاد
              </div>
              <WomenSidebarSection
                WebImg="/imgs/boysFashion/sideImg2.svg"
                mobileImg="/imgs/boysFashion/sideImg2Mobile.svg"
              />
            </div>
            <div
              className="rightSide flex h-fit flex-col pt-3 max-md:max-w-full md:mr-[13px] md:overflow-auto"
              style={{ flex: "1 1 auto" }}
            >
              <Widebanner products={dailyOffers} />
              <div className="section-title !mb-[5px] !mt-[13px] flex !items-center bg-[#07368A] !px-[13px] !py-[10px] md:!mb-[10px] md:!mt-[16px] md:!py-[14px]">
                <h2 className="block text-[13px] font-[700] text-white md:text-[18px]">
                  عروض بيوتي على شورتات الأولاد
                </h2>
                <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px] md:!bg-white md:!text-[#383838]">
                  <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                    عرض الكل
                  </a>
                </div>
              </div>
              <CardsSlider
                products={boysEconomy}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>
          <section>
            <ShopasPriceGirl
              mobileImg="/imgs/boysFashion/BigGirlImageMobile.svg"
              img="/imgs/boysFashion/BigGirlImage.svg"
              rightlinks={boysrightlinks}
              leftlinks={boysleftlinks}
            />
          </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"ملابس قد تعجبك"} />
            <Recommended products={recommendedProducts} />
          </section>
          <section className="boyssuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"شنط و حقائب أولاد"} />
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"شنط و حقائب أولاد"} />
            </div>
            <WomenSuitcase
              mainImg="/imgs/boysFashion/banners/suitcase.svg"
              mobileImg="/imgs/boysFashion/banners/mobilesuitcase.svg"
              data={[
                {
                  name: "شنط يد",
                  img: "/imgs/boysFashion/banners/suitcase1.svg",
                  mobileImg: "/imgs/boysFashion/banners/suitcase1.svg",
                },
                {
                  name: "شنط يد",
                  img: "/imgs/boysFashion/banners/suitcase2.svg",
                  mobileImg: "/imgs/boysFashion/banners/suitcase2.svg",
                },
                {
                  name: "شنط يد",
                  img: "/imgs/boysFashion/banners/suitcase3.svg",
                  mobileImg: "/imgs/boysFashion/banners/suitcase3.svg",
                },
                {
                  name: "شنط يد",
                  img: "/imgs/boysFashion/banners/suitcase4.svg",
                  mobileImg: "/imgs/boysFashion/banners/suitcase4.svg",
                },
              ]}
            />
          </section>
          <section className="round CardsSlider-p">
            <div className="section-title !mb-7 flex !h-[35px] items-center md:!mb-[22px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض شنط الأولاد
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <KidsSlider products={dailyOffers} classNames="max-lg:!mr-[5px]" />
          </section>
          <section className="mt-10">
            <div className="flex h-[39px] items-center justify-center bg-[#07368A] text-[15px] font-[400] text-white md:h-[78px] md:rounded-t-[16px] md:rounded-tr-[16px] lg:text-[22px]">
              ملابس الرضع
            </div>
            <BabyWears wears={boyswears} flowers={false} />
          </section>
          <section className="round CardsSlider-p mt-8 bg-[#FAFAFA] md:bg-[#F5F5F5] lg:mt-10">
            <div className="section-title !mt-1 flex !h-fit items-center max-md:!h-[35px] max-md:bg-[#F5F5F5]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض ملابس الأولاد الرضع
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={boysEconomy}
              classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
            />
          </section>
          <section>
            <ShopasPrice2
              mobileImg="/imgs/boysFashion/BigGirlShopasPriceImageMobile.svg"
              img="/imgs/boysFashion/BigGirlShopasPriceImage.svg"
              color="#FAFAFA"
            />
          </section>
          <section className="mt-10 flex w-full flex-col max-lg:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#07368A] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                الأعلى تقييماً ملابس الأولاد
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:!ml-[19px]">
              <WomenSidebarSection2
                img="/imgs/boysFashion/sideImg3.svg"
                mobileImg="/imgs/boysFashion/sideImg3Mobile.svg"
                className="max-md:!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden">
              <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                  الأعلى تقييماً ملابس الأولاد
                </h2>
                <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                  <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                    عرض الكل
                  </a>
                </div>
              </div>
              <CardsSlider2 products={boysEconomy} />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="kidsSports">
            <Sport sportArray={msport} />
          </section>
          <BannerSlider
            desktopBanners={slimBanners}
            swiperClass={
              "!h-[138px] slim-slider md:!h-[208px] !mt-10 max-md:!mt-8"
            }
          />
          <section className="ImgsOffersSlider  SmallBrandSlider2-section !mb-8 !mt-0 md:!mb-10">
            <SectionTitle name={"تسوق افضل ماركات الملابس الرياضية"} />
            <SmallBrandSlider2 brands={fbrands} />
          </section>
          <section className="lg:mb-10">
            <SectionTitle name={"فئات مرغوبة"} />
            <div className="mt-5 flex flex-row flex-wrap items-center justify-around gap-3 max-lg:mx-[13px]">
              {data.map((e, i) => {
                return (
                  <Link
                    href={"/"}
                    className="group mx-auto flex !w-full flex-col flex-wrap  md:!w-[200px] lg:!h-fit xl:!w-[313px]"
                    key={i}
                  >
                    <div className="!w-full bg-[#F5F5F5] md:!h-[200px] xl:!h-[313px]">
                      <Image
                        src={e.img}
                        width={100}
                        height={100}
                        className="mx-auto aspect-square  !h-full !w-full object-cover mix-blend-multiply"
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
                    <p
                      className="mt-2 !h-[22px] text-center text-[12px] text-[#383838] group-hover:text-[13px] group-hover:font-[700] max-md:mb-[29px] md:text-start xl:text-[14px]"
                    >
                      تسوق الآن »
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="gray round CardsSlider-p !bg-[#FAFAFA] !pb-1 max-md:bg-[#F5F5F5] md:!mt-10">
            <div className="section-title flex items-center max-lg:!my-0 max-md:!h-[35px] max-md:bg-[#F5F5F5] md:!mb-[15px] md:!mt-[5px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[12px]">
                عروض تصل إلى ٧٠٪ على الملابس الرياضية
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={boysEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="min-h-fit">
            <ManSingelBanner
              banner={boysbannerObject}
              mobileBanner={boysbannerObject}
              links={manlinks}
              hover="#383F51"
            />
          </section>
          <section className="gray round CardsSlider-p !mt-6 !bg-[#F5F5F5] max-lg:!mt-8 max-md:bg-[#FAFAFA]">
            <div className="section-title flex items-center max-lg:!my-0 max-md:!h-[35px] max-md:bg-[#F5F5F5] md:!my-[15px] md:!mt-[5px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[12px]">
                عروض تصل إلى ٧٠٪ على الملابس العربية
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={boysEconomy}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="boysJewellery mt-10 max-md:mt-8">
            <BoysJewellery
              HeaderImg="/imgs/boysFashion/girlaccessories/header.svg"
              HeaderText="اكسسوارات الأولاد"
              mainImg="/imgs/boysFashion/girlaccessories/bigimg.svg"
              bgcolor="#EAEAEA"
              bgHover={"383838"}
              data={[
                {
                  name: "قبعات",
                  img: "/imgs/boysFashion/Jewellery/img1.svg",
                },
                {
                  name: "سلاسل مفاتيح",
                  img: "/imgs/boysFashion/Jewellery/img2.svg",
                },
                {
                  name: "ربطات عنق",
                  img: "/imgs/boysFashion/Jewellery/img3.svg",
                },
                {
                  name: "محافظ",
                  img: "/imgs/boysFashion/Jewellery/img4.svg",
                },
                {
                  name: "ربطات عنق",
                  img: "/imgs/boysFashion/Jewellery/img5.svg",
                },
                {
                  name: "محافظ",
                  img: "/imgs/boysFashion/Jewellery/img7.svg",
                },
                {
                  name: "اكسسوارات",
                  img: "/imgs/boysFashion/Jewellery/img8.svg",
                },
              ]}
            />
          </section>
          <section className="round CardsSlider-p !mt-10 max-md:!mt-8">
            <div className="section-title mb-7 flex !h-[35px] items-center">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض شنط الأولاد
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
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
          <section className="mt-10 flex w-full flex-col max-lg:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#07368A] !py-[10px] !pr-[13px] md:!hidden">
              <h2 className=" text-[16px] font-[500] text-white">
                الأعلى تقييماً ملابس الأولاد
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:!ml-[19px]">
              <WomenSidebarSection2
                img="/imgs/boysFashion/sideImg3.svg"
                mobileImg="/imgs/boysFashion/sideImg3Mobile.svg"
                className="max-md:!mb-2"
              />
            </div>
            <div className="rightSide 0flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden max-md:mr-[5px]">
              <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                  الأعلى تقييماً ملابس الأولاد
                </h2>
                <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                  <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                    عرض الكل
                  </a>
                </div>
              </div>
              <CardsSlider2 products={boysEconomy} />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
            >
              عرض الكل <span className="font-[400]">»</span>
            </Link>
          </section>
          <section className="shopasBrand">
            <SectionTitle name={"تسوق حسب الماركة"} />
            <ShopasBrand />
          </section>
          <section className="mt-10 flex gap-3 max-md:mt-8 max-md:flex-col">
            <Image
              src={"/imgs/kidsFashion/leftImg3.svg"}
              width={100}
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/kidsFashion/leftImg4.svg"}
              width={100}
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="LatestKidsWears my-10 max-md:my-8">
            {" "}
            <GlassesMostSelled
              classNames="bg-[#07368A] text-white md:text-black startButtonSwiper"
              text="أحدث منتجات الملابس الولادية"
              glassClassName="!rounded-none"
              linkClassName="!bg-white !text-black"
            />
          </section>
          <section className="my-8">
            <SectionTitle name={"الأعلى تقييماً لدى العملاء"} />
            <BannerSlider
              desktopBanners={ManSlimBanner}
              swiperClass={"slim-slider mt-6"}
            />
          </section>
          <section className="round CardsSlider-p !mb-10 bg-[#FAFAFA] md:bg-[#F5F5F5]">
            <div className="section-title flex items-center max-md:!h-[35px] max-md:bg-[#F5F5F5] md:!mb-[15px] md:!mt-[5px]">
              <h2 className="!text-[20px] font-bold text-[#383838] max-lg:!max-w-fit max-lg:!text-[13px]">
                عروض ملابس الأولاد تبدأ من ٢٥ ريال
              </h2>
              <div className="displayAll !bg-[#07368A] !text-white max-md:!h-[16px] max-md:!w-[51px]">
                <a href="/" className="max-md:!text-[8px] max-md:!font-[500]">
                  عرض الكل
                </a>
              </div>
            </div>
            <CardsSlider
              products={boysEconomy}
              classNames="max-lg:!mr-[5px] max-md:!mt-0 NextButtonSwiperRight0PX"
            />
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
