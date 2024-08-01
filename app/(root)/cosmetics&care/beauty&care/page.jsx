"use client";
import BannerSlider from "@/components/banners/BannerSlider";
import RecommendationSection from "@/components/common/RecommendationSection";
import WomenSidebarSection2 from "@/components/common/WomenSidebarSection2";
import WomenSidebarSection from "@/components/common/WomenSidebarSection";
import Widebanner from "@/components/common/Widebanner";
import CardsSlider2 from "@/components/common/CardsSlider2";
import CardsSlider from "@/components/common/CardsSlider";
import BeautyOffersgirls from "@/components/common/BeautyOffersgirls";
import DoubleBanner from "@/components/banners/DoubleBanner";
import SectionTitle from "@/components/common/SectionTitle";
import ShopasBrand from "@/components/common/ShopasBrand";
import Offers from "@/components/common/Offers";
import BrandsSwiper2 from "@/components/common/BrandsSwiper2";
import FoodDoubleGallary from "@/components/common/FoodDoubleGallary";
import KidsJewellery from "@/components/common/KidsJewellery";
import BeautyProductMakeup from "@/components/common/BeautyProductMakeup";
import Careandbeauty from "@/components/common/Careandbeauty";
import VitaminsSection from "@/components/common/VitaminsSection";
import EntertainmentsSingle from "@/components/common/EntertainmentsSingle";
import Fitbudget from "@/components/common/Fitbudget";
import MostPopularCareProducts from "@/components/common/MostPopularCareProducts";
import MainSideFilter from "@/components/common/filter/MainSideFilter";
import {
  ManSlimBanner,
  banners,
  dailyOffers,
  filterColors,
  filterOffers,
  filterbrands,
  section,
} from "@/data/fake";
import {
  fashionMaterials,
  fashionSubSections,
} from "@/data/fashionSectionData";
import {
  beautyandCareData,
  beautyCircles,
  BeautyOffers,
  beautyOffersCare,
  beautyOffersGirl,
  BeautyProducts,
  careandbeauty,
  careProducts,
  circles,
  fitBudgetProducts,
  foodFashion,
  girlJewellery,
  hairCut,
  kidsBanner,
  latestPhones,
  makeUp,
  MobilekidsBanner,
  mostSelledVitaminsProducts,
  TechBrands,
  tempmobileBanner,
  vitamins,
} from "@/data/fashionData";
import Link from "next/link";
import Image from "next/image";
import { formatNumberInArabic } from "@/libs/formatNumber";
import WomenWatch from "@/components/common/WomenWatch";
import ShopasPrice from "@/components/common/ShopasPrice";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";

const data = [
  {
    img: "/imgs/beauty&care/Desirablecategories/img1.png",
    name: "المجوهرات",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/beauty&care/Desirablecategories/img2.png",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
  {
    img: "/imgs/beauty&care/Desirablecategories/img3.png",
    name: "الملابس الشتوية",
    description: "تشكيلة واسعة من ملابس الأندية و المنتخبات العالمية",
  },
];
export default function beautyandCare() {
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
          <section className="my-8 md:my-10">
            <FoodDoubleGallary
              hideButtons={false}
              flatButtons={true}
              smallButtons={true}
              paddingTop={10}
              imgClassName="!top-[initial] !bottom-0 lg:!w-full !absolute"
              products={beautyandCareData}
            />
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
                <h2 className=" text-[19px] font-[500] text-[#383838]">
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
          <section className="round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>أقل من ٢٥ ريال</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="md:mb-10">
            <SectionTitle name={"فئات مرغوبة"} className="md:!mt-[20px]" />
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
          <DoubleBanner
            rightBanners={banners}
            classNames="!mb-0 max-md:!mt-8 !mt-10"
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
                <h2 className=" text-[19px] font-[500] text-[#383838]">
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
              offerbgColor="#FF9C9E"
              offerTextColor="#FFFFFF"
              hideButtons={true}
            />
          </section>
          <section className="mt-10 flex gap-3 max-md:mt-8 max-md:flex-col">
            <Image
              src={"/imgs/beauty&care/leftImg1.svg"}
              unoptimized
              width={100}
              height={100}
              loading="lazy"
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
            <Image
              src={"/imgs/beauty&care/leftImg2.svg"}
              width={100}
              unoptimized
              loading="lazy"
              height={100}
              className="mx-auto h-full w-[calc(50%_-_6px)] max-md:w-[calc(100%_-_26px)]"
            />
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-10">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>أقل من ٢٥ ريال</h2>
              <div className="displayAll !bg-[#383838] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <SectionTitle
              name={"الأعلى تقييماً لدى العملاء"}
              className="md:!mt-[20px]"
            />
            <BannerSlider
              desktopBanners={ManSlimBanner}
              mobileBanners={tempmobileBanner}
              swiperClass={"slim-slider !mb-0 !mt-0"}
            />
          </section>
          <section className="offers">
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
                <h2 className=" text-[19px] font-[500] text-[#383838]">
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
          <section>
            <SectionTitle name={"كل ما يحتاجه الشعر"} />
            <div className="flex items-center gap-[11.67px] max-md:flex-col">
              {hairCut.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="aspect-square h-auto w-[calc(100vw_-_26px)] max-w-[400px] md:h-[234px] md:w-[234px]"
                  >
                    <Image
                      src={e.img}
                      unoptimized
                      loading="lazy"
                      className="h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-[25px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>اخترناها لك مستحضرات العناية بالشعر</h2>
              <div className="displayAll !bg-[#383838] !text-white">
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
          <div className="mt-8 lg:mt-10">
            <ShopasPrice
              circles={beautyCircles}
              color="FFF1F1"
              img="/imgs/kidsFashion/shirt.svg"
            />
          </div>
          <section className="beautyCare">
            <KidsJewellery
              HeaderImg="/imgs/beauty&care/makeup2/headerImg.png"
              HeaderText="المكياج"
              mainImg="/imgs/beauty&care/makeup2/mainImg.png"
              bgcolor="#F5F5F5"
              marginRight={"75"}
              jewelleryData={makeUp}
            />
          </section>
          <section>
            <SectionTitle name={"مستحضرات العناية الأكثر طلباً"} />
            <MostPopularCareProducts data={careProducts} />
          </section>
          <section className="mt-8 md:mt-10">
            <BannerSlider
              desktopBanners={ManSlimBanner}
              mobileBanners={tempmobileBanner}
              swiperClass={"slim-slider !mb-0 !mt-0"}
            />
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-[25px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>اخترناها لك مستحضرات العناية بالشعر</h2>
              <div className="displayAll !bg-[#FF9C9E] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section>
            <SectionTitle
              name={"أدوات العناية و التجميل"}
              className="md:!mt-[20px]"
            />
            <Careandbeauty
              mainImg={"/imgs/beauty&care/Careandbeauty/mainImg.png"}
              data={careandbeauty}
            />
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-[25px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض على أدوات العناية و التجميل</h2>
              <div className="displayAll !bg-[#EFEBE0] !text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider products={dailyOffers} />
          </section>
          <section className="beautyCare">
            <KidsJewellery
              HeaderImg="/imgs/beauty&care/makeup2/headerImg.png"
              HeaderText="المكياج"
              mainImg="/imgs/beauty&care/makeup2/mainImg.png"
              bgcolor="#F5F5F5"
              marginRight={"75"}
              jewelleryData={makeUp}
            />
          </section>
          <section className="round PinkBigBrandSection kids mt-8 md:mt-10">
            <Fitbudget array={fitBudgetProducts} />
          </section>
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
          <section className="mt-8 md:mt-10">
            <BannerSlider
              desktopBanners={ManSlimBanner}
              mobileBanners={tempmobileBanner}
              swiperClass={"slim-slider !mb-0 !mt-0"}
            />
          </section>
          <section>
            <div className="title mb-14 mt-8 flex w-full justify-center md:mt-10">
              <h1 className="text-[15px] font-[400] md:text-[22px]">
                منتجات الجمال الفاخرة
              </h1>
            </div>
            <BeautyProductMakeup data={BeautyProducts} />
          </section>
          <section className="mt-4 md:mt-6">
            <BrandsSwiper2 data={TechBrands} />
          </section>
          <section className="mt-10 flex w-full flex-col max-md:mt-8 md:flex-row xl:max-h-[350px]">
            <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#9CBBDD] !px-[13px] !py-[10px] md:!hidden">
              <h2 className="text-[16px] font-[500] text-white">
                عروض بيوتي على منتجات الجيم و الرياضة
              </h2>
            </div>
            <div className="leftSide w-auto flex-none md:ml-[19px] lg:w-[213px] xl:w-fit">
              <WomenSidebarSection2
                img="/imgs/beauty&care/sideImg5.svg"
                mobileImg="/imgs/beauty&care/mobileSideImg3.svg"
                className="!mb-2"
              />
            </div>
            <div className="rightSide mr-[5px] flex !h-auto w-full flex-1 flex-col !justify-center overflow-hidden lg:h-fit">
              <div className="section-title !my-0 !mb-[17px] !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className=" text-[19px] font-[500] text-[#383838]">
                  الأكثر مبيعاً المنتجات الفاخرة
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
          <section>
            <div className="title mb-4 mt-8 flex w-full justify-center md:mb-8 md:mt-10">
              <h1 className="text-[13px] font-[400] md:text-[22px]">
                هدايا مستحضرات العناية و التجميل{" "}
              </h1>
            </div>
            <EntertainmentsSingle data={latestPhones} />
          </section>
          <section className="round CardsSlider-p !mt-8 md:!mt-[25px]">
            <div className="section-title !m-0 max-md:flex max-md:h-[35px] max-md:items-center max-md:!bg-[#FAFAFA] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض هدايا مستحضرات العناية و التجميل</h2>
              <div className="displayAll !bg-[#FF9C9E] !text-white">
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
