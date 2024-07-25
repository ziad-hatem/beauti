"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import DoubleBanner from "@/components/banners/DoubleBanner";
import BeautyOffers from "@/components/common/BeautyOffers";
import BigBrand from "@/components/common/BigBrand";
import CardNoButtonSlider from "@/components/common/CardNoButtonSlider";
import CardsSlider from "@/components/common/CardsSlider";
import DoubleGallary from "@/components/common/DoubleGallary";
import ManSingelBanner from "@/components/common/ManSingelBanner";
import Offers from "@/components/common/Offers";
import PinkBigBrand from "@/components/common/PinkBigBrand";
import RecommendationSection from "@/components/common/RecommendationSection";
import Robes from "@/components/common/Robes";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasDesiredSlider from "@/components/common/ShopasDesiredSlider";
import ShopasPrice from "@/components/common/ShopasPrice";
import SimpleCardNoButtonSlider from "@/components/common/SimpleCardNoButtonSlider";
import SmallBrandSlider from "@/components/common/SmallBrandSlider";
import WomenSuitcase from "@/components/common/WomenSuitcase";
import Widebanner from "@/components/common/Widebanner";
import Recommended from "@/components/common/Recommended";
import WomenWatch from "@/components/common/WomenWatch";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import Sport from "@/components/common/Sport";
import SmallBrandSlider2 from "@/components/common/SmallBrandSlider2";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import ManJewellery from "@/components/common/ManJewellery";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  ManBanner,
  ManSlimBanner,
  MandailyOffers,
  ManwrobesImages,
  banners,
  cheapClothes,
  dailyOffers,
  dailyOffersMan,
  fbrands,
  filterColors,
  filterOffers,
  filterbrands,
  manDoubleBanner,
  manShopasDesiredSliderData,
  manbannerObject,
  mancheapClothes,
  manlinks,
  mansport,
  mobileBanner,
  mobileBanners,
  offerimgObj,
  recommendedProducts,
  section,
  slimBanners,
  wsport,
} from "@/data/fake";
import {
  fashionMaterials,
  fashionOffers,
  fashionSubSections,
  menFashion,
} from "@/data/fashionSectionData";
import Image from "next/image";
import Link from "next/link";
import features from "../../../../public/imgs/features.svg";
import CardsSlider2 from "@/components/common/CardsSlider2";
import {
  leftlinks,
  leftlinks2,
  leftlinks3,
  leftlinks5,
  rightlinks5,
} from "@/data/fashionData";
import { manBrands } from "../../data/fake";

const data = [
  {
    img: "/imgs/manFashion/Desirablecategories/img1.svg",
    name: "كابات و قبعات",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/manFashion/Desirablecategories/img2.svg",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/manFashion/Desirablecategories/img3.svg",
    name: "الأطقم الرياضية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
];

export default function ManFashionPage() {
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
            desktopBanners={ManBanner}
            mobileBanners={mobileBanner}
            swiperClass={"top-banner"}
          />
          <div className="features my-4 w-full max-w-[971px] md:my-10 md:h-[60px]">
            <Image
              src={features}
              className="h-full w-full p-2"
              alt="features"
            />
          </div>
          <DoubleGallary products={menFashion} />
          <div className="my-8 h-full w-full">
            <SectionTitle name={"تسوق حسب الرغبة"} />
            <ShopasDesiredSlider data={manShopasDesiredSliderData} />
          </div>
          <section className="offers">
            <div className="section-title-offers !bg-none">
              <h2>
                عروض بيوتى | <span className="leastprice">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers offers={fashionOffers} sectionName={"عروض بيوتى"} />
          </section>

          <div className="mt-8 lg:mt-10">
            <ShopasPrice color="5A5A5A" img="/imgs/manFashion/shirt.svg" />
          </div>

          <section className="mb-1">
            <SectionTitle name={"عروض بيوتي على الملابس الرجالية"} />
            <div className="">
              <BeautyOffers />
            </div>
          </section>
          <section className="gray round CardsSlider-p">
            <div className="section-title flex !h-[35px] items-center max-md:!my-0 max-md:!bg-[#383838] max-md:!text-[#383838] md:!mt-0">
              <h2 className="!text-[20px] font-bold max-md:!max-w-fit max-md:!text-[13px] max-md:text-white">
                عروض الملابس الرجالية تبدأ من ٢٥ ريال
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-md:!bg-white max-md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="round CardsSlider-p relative !mt-10">
            <div className="absolute top-[0%] z-[-10] h-[83%] w-full bg-[#F3F3F3] pt-2"></div>
            <CardNoButtonSlider
              products={dailyOffersMan}
              heart={false}
              backgroundColor="#5A5A5A"
              HeaderText={"عروض لفترة محدودة الأزياء الرجالية"}
              imgbgColor="#F9F9F9"
            />
          </section>

          <section className="mb-10 mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col">
            <div className="leftSide mx-auto w-[calc(100%_-_26px)] flex-none md:!ml-[19px] md:w-auto">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#383838] px-2 text-[20px] font-[700] text-white max-lg:text-[15px] md:w-full 2xl:mx-0">
                عروض الملابس الرجالية
              </div>
              <WomenSidebarSection
                WebImg="/imgs/manFashion/sideImg.svg"
                mobileImg="/imgs/manFashion/sideImgMobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-auto flex-1 flex-col overflow-hidden pt-3">
              <Widebanner products={dailyOffers} />
              <div className="section-title !mb-[5px] !mt-[13px] flex !items-center bg-[#383838] !px-[13px] !py-[10px] md:!mb-[10px] md:!mt-[16px] md:!py-[14px]">
                <h2 className="hidden text-[13px] font-[700] text-white lg:block lg:text-[18px]">
                  عروض بيوتي على الملابس الرجالية
                </h2>
                <h2 className="block text-[13px] font-[700] text-white lg:hidden lg:text-[18px]">
                  عروض الملابس الرجالية
                </h2>
                <div className="displayAll !bg-white !text-black">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider
                products={MandailyOffers}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>

          <BannerSlider
            desktopBanners={ManSlimBanner}
            swiperClass={"slim-slider mt-6 !mb-0"}
          />
          <section className="ImgsOffersSlider !mt-0 mb-5">
            <SectionTitle name={"أشهر الماركات العالمية"} />
            <BigBrand brands={manBrands} />
          </section>
          <SmallBrandSlider brands={fbrands} />
          <section className="lg:mb-10">
            <SectionTitle name={"فئات مرغوبة"} />
            <div className="mt-5 flex flex-row flex-wrap items-center justify-around gap-3 max-lg:mx-[13px]">
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
                      className="mt-2 h-[20px] text-center text-[12px] text-[#383838] group-hover:text-[13px] group-hover:font-[700] max-md:mb-[29px] md:text-start xl:text-[14px]"
                    >
                      تسوق الآن »
                    </Link>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mb-6 flex w-full flex-col md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
                <h2 className=" text-[16px] font-[500] text-white">
                  أحدث المنتجات الملابس الرجالية
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/manFashion/sideImg2.svg"
                mobileImg="/imgs/manFashion/sideImgMobile2.svg"
              />
            </div>
            <div className="rightSide mr-1 flex h-fit w-auto flex-1 flex-col overflow-hidden">
              <div className="section-title !mb-[17px] !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  أحدث المنتجات الملابس الرجالية
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2 products={dailyOffers} />
            </div>
            <Link
              href={"/"}
              className="mr-3 mt-2 hidden text-[12px] max-md:block"
            >
              عرض الكل »
            </Link>
          </section>
          <section className="round PinkBigBrandSection max-md:bg-[#FAFAFA]">
            <PinkBigBrand
              array={cheapClothes}
              male={true}
              title={"أزياء رجالية تناسب الميزانية"}
              manArray={mancheapClothes}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-[24px] !px-0">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#383838] max-md:!text-[13px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>خصم حتى ٧٥٪ على الملابس العربية</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="!mt-[5px] !pr-[0] !mr-[5px]"
            />
          </section>
          <section className="manSingleBanner min-h-fit">
            <ManSingelBanner
              banner={manbannerObject}
              mobileBanner={manbannerObject}
              links={manlinks}
              headerBgColor="62060B"
            />
          </section>
          <section className="gray round CardsSlider-p !mt-[24px] !px-0">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F4F0ED] max-md:!text-[13px] max-md:!text-[#383838]  md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الملابس العربية</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="!mt-[5px] !pr-[0] !mr-[5px]"
            />
          </section>
          <DoubleBanner
            rightBanners={manDoubleBanner}
            leftBanners={manDoubleBanner}
            classNames="max-md:!my-8"
          />
          <section className="flex w-full flex-col md:flex-row 2xl:max-h-[350px]">
            <div className="leftSide w-auto flex-none md:!ml-[19px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  الأكثر مبيعاً الملابس الرجالية
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/manFashion/sideImg3.svg"
                mobileImg="/imgs/manFashion/sideImg3Mobile.svg"
              />
            </div>
            <div className="rightSide flex !h-fit w-auto flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !my-0 !mb-[20px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأكثر مبيعاً الملابس الرجالية
                </h2>
                <div className="displayAll !bg-black !text-white">
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

          <section className="ImgsOffersSlider mb-[32px] !h-auto w-full !overflow-visible">
            <SectionTitle name={"الأرواب و المناشف"} />
            <Robes robes={ManwrobesImages} offer={offerimgObj} />
          </section>

          <section className="gray round CardsSlider-p">
            <div className="section-title !m-0 flex !h-[35px] items-center max-md:!bg-[#383838] max-md:!text-[13px] max-md:!text-white">
              <h2>عروض الأرواب و المناشف</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="!mt-[5px] !p-0 !pr-[5px]"
            />
          </section>
          <section className="womensuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"شنط و حقائب رجالية"} />
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"شنط رجالية"} />
            </div>
            <WomenSuitcase
              mainImg="/imgs/manFashion/banners/suitcase.svg"
              data={[
                {
                  name: "شنط يد",
                  img: "/imgs/manFashion/banners/suitcase1.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase1.svg",
                },
                {
                  name: "حقائب ظهر",
                  img: "/imgs/manFashion/banners/suitcase2.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase2.svg",
                },
                {
                  name: "محفظة",
                  img: "/imgs/manFashion/banners/suitcase3.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase3.svg",
                },
                {
                  name: "شنط سفر",
                  img: "/imgs/manFashion/banners/suitcase4.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase4.svg",
                },
              ]}
            />
          </section>
          <section className="gray round CardsSlider-p !bg-[#F5F5F5]">
            <div className="section-title !m-0 items-center max-lg:!bg-[#383838] max-lg:text-white max-md:flex max-md:h-[35px] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الشنط الرجالية</h2>
              <div className="displayAll !bg-white !text-black lg:!bg-black lg:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <DoubleBanner
            rightBanners={manDoubleBanner}
            classNames="!mb-0 max-md:!mt-10 !mt-[32px]"
            leftBanners={manDoubleBanner}
          />
          <section className="h-fit w-full">
            {" "}
            <SectionTitle name={"ساعات رجالية"} />
            <WomenWatch
              color="F5F5F5"
              BigImages={[
                "/imgs/manFashion/watchesImage.svg",
                "/imgs/manFashion/watchesImage2.svg",
              ]}
              fourImages={[
                "/imgs/manFashion/smallwatchesImage1.svg",
                "/imgs/manFashion/smallwatchesImage2.svg",
                "/imgs/manFashion/smallwatchesImage3.svg",
                "/imgs/manFashion/smallwatchesImage4.svg",
              ]}
            />
          </section>
          {/* TO DO */}
          <section className="mt-10 flex h-fit w-full flex-col max-md:mt-8 md:flex-row">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
              <h2 className=" text-[16px] font-[500] text-white">
                الأكثر مبيعاً الملابس الرجالية
              </h2>
            </div>
            <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
              <WomenSidebarSection2
                img="/imgs/manFashion/sideImg4.svg"
                mobileImg="/imgs/manFashion/sideImg4Mobile.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden">
              <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                  الأكثر مبيعاً الملابس الرجالية
                </h2>
                <div className="displayAll !bg-black !text-white">
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
          <section className="ManSports">
            <Sport sportArray={mansport} />
          </section>
          <BannerSlider
            desktopBanners={ManSlimBanner}
            swiperClass={"slim-slider mt-6"}
          />
          <section className="ImgsOffersSlider  SmallBrandSlider2-section !mb-8 !mt-0 md:!mb-10">
            <SectionTitle name={"تسوق افضل ماركات الملابس الرياضية"} />
            <SmallBrandSlider2 brands={fbrands} />
          </section>
          <section className="gray round CardsSlider-p max-md:!mt-0">
            <div className="section-title !mb-0 !items-center max-md:!h-[35px] max-md:!bg-[#383838] md:!mt-0 md:!pb-[10px] md:!pt-[5px]">
              <h2 className="!max-w-full max-md:!text-[12px] max-md:!text-white">
                عروض تصل إلى 70% على الملابس الرياضية
              </h2>
              <div className="displayAll !bg-[#383838] !text-white max-md:!bg-white max-md:!text-[#383838]">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="!p-0 max-md:!mt-[5px] !h-fit !mr-[5px] NextButtonSwiperRight0PX"
            />
          </section>
          <section>
            <ShopasPrice2
              mobileImg="/imgs/manFashion/BigManImageMobile.svg"
              img="/imgs/manFashion/BigManImage.svg"
              leftlink={leftlinks5}
              rightlink={rightlinks5}
            />
          </section>

          <section className="my-5">
            <SectionTitle name={"الأعلى تقييماً لدى العملاء"} />
            <BannerSlider
              desktopBanners={ManSlimBanner}
              swiperClass={"slim-slider mt-6"}
            />
          </section>
          <section>
            <GlassesMostSelled
              classNames="bg-[#383838] text-white"
              text="الأكثر مبيعاً النظارات الشمسية الرجالية"
            />
          </section>
          <section className="my-10 flex w-full flex-col max-lg:my-8 md:flex-row-reverse">
            <div className="leftSide h-fit w-auto flex-none md:!mr-[19px]">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  أحدث المنتجات الملابس االرجالية
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/manFashion/SideImg5.svg"
                mobileImg="/imgs/manFashion/SideImg5Mobile.svg"
              />
            </div>
            <div className="rightSide flex !h-fit w-auto flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !my-0 !mb-[5px] !hidden !h-[42px] !items-center bg-[#383838] !py-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-white">
                  أحدث المنتجات الملابس االرجالية
                </h2>
              </div>
              <CardsSlider2
                sectionClassName="!bg-none !t-0 !py-0 !mt-0 !mr-0 !p-0"
                classNames="!mt-0 !mr-0"
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

          <section className="ManJewellery">
            <ManJewellery
              HeaderImg="/imgs/manFashion/Jewellery/HeaderImg.svg"
              HeaderText="اكسسوارات رجالية"
              mainImg="/imgs/manFashion/Jewellery/bigjewellery.svg"
              bgcolor={"#F0F0F0"}
            />
          </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"ملابس قد تعجبك"} />
            <Recommended products={recommendedProducts} />
          </section>
          <section className="womensuitcase max-md:mx-[13px]">
            <SectionTitle name={"الأحذية الرجالية"} />

            <WomenSuitcase
              mainImg="/imgs/manFashion/banners/suitcase5.svg"
              data={[
                {
                  name: "شنط يد",
                  img: "/imgs/manFashion/banners/suitcase6.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase6.svg",
                },
                {
                  name: "حقائب ظهر",
                  img: "/imgs/manFashion/banners/suitcase7.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase7.svg",
                },
                {
                  name: "محفظة",
                  img: "/imgs/manFashion/banners/suitcase8.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase8.svg",
                },
                {
                  name: "شنط سفر",
                  img: "/imgs/manFashion/banners/suitcase9.svg",
                  mobileImg: "/imgs/manFashion/banners/suitcase9.svg",
                },
              ]}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-[24px] !px-0 max-md:!mb-[30px]">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#383838] max-md:!text-[13px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض الأحذية الرجالية</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={MandailyOffers}
              classNames="!mt-[5px] !pr-[0] !mr-[5px]"
            />
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
