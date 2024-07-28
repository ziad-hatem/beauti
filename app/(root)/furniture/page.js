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
import FurnitureDoubleGallary from "@/components/common/FurnitureDoubleGallary";
import ImgsOffersSliderMobile from "@/components/fashion/ImgsOffersSliderMobile";
import WatchesBlocks from "@/components/common/WatchesBlocks";
import KidsJewellery from "@/components/common/KidsJewellery";
import SmartWatches from "@/components/common/SmartWatches";
import ShopasBrand from "@/components/common/ShopasBrand";
import KitchenTools from "@/components/common/KitchenTools";
import Mattresses from "@/components/common/Mattresses";
import PerfumesBlocks from "@/components/common/PerfumesBlocks";
import PathRoomSupplies from "@/components/common/PathRoomSupplies";
import NormalImgSlider from "@/components/common/NormalImgSlider";
import {
  banners,
  brownGirl,
  brownGirllinks,
  brownGirlmobile,
  cheapClothes,
  furnitureProducts,
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
  ShopasDesiredSliderFurniture,
  mobileBanner,
  womenOffers,
  furnitureProductsWomen,
  heroBanners,
  mobileBanners,
} from "@/data/fake";
import {
  FashionHeroMobileBanners,
  fashionMaterials,
  fashionOffers,
  fashionSubSections,
  luxuryBrands,
  furnitureDoubleGallary,
  womenOffersSlider,
} from "@/data/fashionSectionData";
import {
  wWatchesEconomy,
  girlJewellery,
  smartWatches,
  furniture,
  furniture2,
  furniture3,
} from "@/data/fashionData";
import Image from "next/image";
import Link from "next/link";
import features from "/public/imgs/features.svg";
import { womenEconomy, furniturecircles } from "@/data/fashionData";
import CardsSlider2 from "@/components/common/CardsSlider2";

const data = [
  {
    img: "/imgs/furniture/image 255.png",
    name: "أجهزة تلفزيون و ترفيه",
    description: "تجربة سينمائية في منزلكم مع أجهزة التلفزيون المتطورة",
  },
  {
    img: "/imgs/furniture/image 256.png",
    name: "أجهزة كهربائية صغيرة",
    description: "اجعلوا حياتكم أسهل مع أجهزتنا المنزلية الصغيرة",
  },
  {
    img: "/imgs/furniture/image 340.png",
    name: "أجهزة كهربائية كبيرة",
    description: "اجعلوا منزلكم أكثر فعالية مع أجهزتنا المنزلية الكبيرة",
  },
];

export default function FurniturePage() {
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
          <FurnitureDoubleGallary products={furnitureDoubleGallary} />
          <div className="my-8 h-full w-full">
            <SectionTitle name={"تسوق حسب الرغبة"} />
            <ShopasDesiredSlider
              data={ShopasDesiredSliderFurniture}
              ratio="176/224"
              height="!h-[unset]"
            />
          </div>
          <section className="w-full">
            {" "}
            <SectionTitle name={"أثاثك حسب الغرفة"} />
            <WomenWatch
              bgcolor="#F5F5F5"
              fourImages={[
                { image: "/imgs/furniture/image 290.png", title: "أثاث خارجي" },
                { image: "/imgs/furniture/image 291.png", title: "المطبخ" },
                { image: "/imgs/furniture/image 292.png", title: "أثاث مكتبي" },
                {
                  image: "/imgs/furniture/image 293.png",
                  title: "غرفة الطعام",
                },
              ]}
              BigImages={[
                { image: "/imgs/furniture/image 288.png", title: "غرفة النوم" },
                {
                  image: "/imgs/furniture/image 289.png",
                  title: "غرفة المعيشة",
                },
              ]}
            />
          </section>
          <section className="offers !mt-8 md:!mt-10">
            <div className="section-title-offers !bg-none">
              <h2>
                عروض بيوتى | <span className="leastprice">خصم حتى 70%</span>
              </h2>
            </div>
            <Offers offers={fashionOffers} sectionName={"عروض بيوتى"} />
          </section>
          <DoubleBanner rightBanners={banners} leftBanners={banners} />
          <section className="mb-8 flex w-full flex-col md:mb-10 md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide w-auto flex-none md:!ml-[19px] md:w-fit">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-[#383838]">
                  الأعلى تقييماً المنزل و الديكور
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/furniture/Frame 39947.png"
                mobileImg="/imgs/furniture/Frame 39947m.png"
              />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !mb-[17px] !ml-0 !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأعلى تقييماً المنزل و الديكور
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={furnitureProducts}
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
          <section className="boyssuitcase max-md:mx-[13px]">
            <div className="hidden lg:block">
              <SectionTitle name={"التقديم و الضيافة"} color={"#383838"} />
            </div>
            <div className="block lg:hidden">
              <SectionTitle name={"التقديم و الضيافة"} color={"#383838"} />
            </div>
            <WatchesBlocks
              mainImg="/imgs/furniture/57cd658976499b9dc9d9edc15832cc50 1.png"
              mobileImg="/imgs/furniture/57cd658976499b9dc9d9edc15832cc50 1.png"
              mainImgTitle={"أطقم الشاي و القهوة"}
              bgColor={"bg-[#F5F5F5]"}
              color={"text-[#383838]"}
              data={[
                {
                  name: "أواني المائدة",
                  img: "/imgs/furniture/image 191-1.png",
                  mobileImg: "/imgs/furniture/image 191-1.png",
                },
                {
                  name: "الدلات و الترامس",
                  img: "/imgs/furniture/image 191-3.png",
                  mobileImg: "/imgs/furniture/image 191-3.png",
                },
                {
                  name: "أواني التقديم",
                  img: "/imgs/furniture/image 191-2.png",
                  mobileImg: "/imgs/furniture/image 191-2.png",
                },
                {
                  name: "أواني الشرب",
                  img: "/imgs/furniture/image 191.png",
                  mobileImg: "/imgs/furniture/image 191.png",
                },
              ]}
            />
          </section>
          <section className="mb-8 flex w-full flex-col md:mb-10 md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide w-auto flex-none md:!ml-[19px] md:w-fit">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  أحدث المنتجات المنزل و الديكور
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/furniture/Frame 39947.png"
                mobileImg="/imgs/furniture/Frame 39947m.png"
              />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !mb-[17px] !ml-0 !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  أحدث المنتجات المنزل و الديكور
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={furnitureProducts}
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
          <section className="furniture">
            <KidsJewellery
              HeaderImg="/imgs/furniture/headImg3.png"
              HeaderText="تزيين المنزل"
              mainImg="/imgs/furniture/mainImg3.png"
              bgcolor="#F5F5F5"
              jewelleryData={furniture3}
              bgHover="#7E6B5C"
            />
          </section>
          <section className="mt-[32px] flex min-h-fit w-full flex-row max-md:flex-col md:mt-10">
            <div className="leftSide mx-auto w-fit flex-shrink-0 max-md:!w-[calc(100%_-_26px)] xl:w-[301px]">
              <div className="mx-auto mb-[13px] flex h-[44px] w-[100%] items-center justify-center bg-[#7E6B5C] px-2 text-[20px] font-[700] text-[#FFFFFF] max-lg:text-[15px] md:w-full 2xl:mx-0">
                عروض المنزل و الديكور
              </div>
              <WomenSidebarSection
                WebImg="/imgs/kidsFashion/sideImg2.svg"
                mobileImg="/imgs/kidsFashion/sideImg2Mobile.svg"
              />
            </div>
            <div className="rightSide flex h-fit w-full flex-grow flex-col overflow-hidden pt-3 md:mr-[13px]">
              <Widebanner
                products={furnitureProducts}
                buttonbg={"bg-[#383838]"}
              />
              <div className="section-title !mb-[5px] !mt-[13px] flex !h-[35px] !items-center bg-[#7E6B5C] !px-[13px] md:!mb-[10px] md:!mt-[16px] md:!h-[39px]">
                <h2 className="block text-[13px] font-[700] !text-[#FFFFFF] lg:text-[18px]">
                  عروض بيوتي على المنزل و الديكور
                </h2>
                <div className="displayAll !bg-white !text-[#383838]">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider
                products={furnitureProducts}
                classNames="!p-0 max-md:!mr-[5px] !mt-[5px] womenWears NextButtonSwiperRight0PX"
              />
            </div>
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] max-md:!text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض تصل إلى ٧٠٪ على المنزل و الديكور</h2>
              <div className="displayAll !bg-[#7E6B5C] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={furnitureProducts}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="lg:mb-10">
            <SectionTitle name={"الأجهزة الكهربائية المنزلية"} />
            <div className="mt-5 flex flex-row flex-wrap items-baseline justify-around gap-3 max-md:mx-[13px]">
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
          <section className="boysJewellery mt-[40px] max-md:mt-[32px]">
            <SectionTitle name={"أجهزة المنزل الذكية"} color={"#383838"} />
            <SmartWatches
              mainImg={"/imgs/watches/0865093411a463d88477e6a0c341d1fe 1.png"}
              bgcolor={"bg-[#ECEBE687]"}
              titleColor={"#fff"}
              cardTitleBg={"#7E6B5C"}
              imgbgColor={"!bg-[#ffffff]"}
              watchesData={smartWatches}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] max-md:!text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>الأكثر مبيعاً أجهزة المنزل الذكي</h2>
              <div className="displayAll !bg-[#7E6B5C] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={furnitureProducts}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <BannerSlider
            desktopBanners={slimBanners}
            swiperClass={"slim-slider mt-6 !mb-0 !h-[138px] md:!h-[208px]"}
          />
          <section>
            <SectionTitle name={"مستلزمات المطبخ"} color={"#383838"} />
            <KitchenTools
              products={[
                {
                  name: "البدلات وجاكيتات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "أحذية",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "ملابس سباحة",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "النظارات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "الكنزات و التيشرتات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "النظارات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "الكنزات و التيشرتات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "النظارات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "الكنزات و التيشرتات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
                {
                  name: "الجينز و الشورتات",
                  img: "/imgs/furniture/5w 1.png",
                  href: "#",
                },
              ]}
              mainImage={"./imgs/furniture/image 296.png"}
            />
          </section>
          <section className="mb-8 flex w-full flex-col md:mb-10 md:mt-10 md:flex-row md:!items-center 2xl:max-h-[350px]">
            <div className="leftSide w-auto flex-none md:!ml-[19px] md:w-fit">
              <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#FF9697] !px-[13px] !py-[10px] md:!hidden">
                <h2 className="text-[16px] font-[500] text-white">
                  الأعلى تقييماً المنزل و الديكور
                </h2>
              </div>
              <WomenSidebarSection2
                img="/imgs/furniture/Frame 39947.png"
                mobileImg="/imgs/furniture/Frame 39947m.png"
              />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !mb-[17px] !ml-0 !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأعلى تقييماً المنزل و الديكور
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={furnitureProducts}
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

          <PerfumesBlocks
            mainImg="/imgs/furniture/smelly.png"
            mobileImg="/imgs/furniture/smelly.png"
            mainImgTitle={"العود و دهن العود"}
            bgColor={"bg-[#F5F5F5]"}
            color={"text-[#383838]"}
            data={[
              {
                name: "مباخر عود",
                img: "/imgs/furniture/3ba 1.png",
                mobileImg: "/imgs/furniture/3ba 1.png",
              },
              {
                name: "أقراص العود",
                img: "/imgs/furniture/1ba 1.png",
                mobileImg: "/imgs/furniture/1ba 1.png",
              },
              {
                name: "توزيعات العود",
                img: "/imgs/furniture/2ba 1.png",
                mobileImg: "/imgs/furniture/2ba 1.png",
              },
              {
                name: "رقائق العود",
                img: "/imgs/furniture/4ba 1.png",
                mobileImg: "/imgs/furniture/4ba 1.png",
              },
              {
                name: "دهن العود",
                img: "/imgs/furniture/5ba 1.png",
                mobileImg: "/imgs/furniture/5ba 1.png",
              },
              {
                name: "عطور العود ",
                img: "/imgs/furniture/6ba 1.png",
                mobileImg: "/imgs/furniture/6ba 1.png",
              },
            ]}
          />
          <PerfumesBlocks
            mainImg="/imgs/furniture/smelly.png"
            mobileImg="/imgs/furniture/smelly.png"
            mainImgTitle={"العود و دهن العود"}
            dir="flex-row-reverse"
            bgColor={"bg-[#F5F5F5]"}
            color={"text-[#383838]"}
            data={[
              {
                name: "مباخر عود",
                img: "/imgs/furniture/3ba 1.png",
                mobileImg: "/imgs/furniture/3ba 1.png",
              },
              {
                name: "أقراص العود",
                img: "/imgs/furniture/1ba 1.png",
                mobileImg: "/imgs/furniture/1ba 1.png",
              },
              {
                name: "توزيعات العود",
                img: "/imgs/furniture/2ba 1.png",
                mobileImg: "/imgs/furniture/2ba 1.png",
              },
              {
                name: "رقائق العود",
                img: "/imgs/furniture/4ba 1.png",
                mobileImg: "/imgs/furniture/4ba 1.png",
              },
              {
                name: "دهن العود",
                img: "/imgs/furniture/5ba 1.png",
                mobileImg: "/imgs/furniture/5ba 1.png",
              },
              {
                name: "عطور العود ",
                img: "/imgs/furniture/6ba 1.png",
                mobileImg: "/imgs/furniture/6ba 1.png",
              },
            ]}
          />
          <section className="furniture">
            <KidsJewellery
              HeaderImg="/imgs/furniture/headImg2.png"
              HeaderText="مفروشات و منسوجات"
              mainImg="/imgs/furniture/mainImg2.png"
              bgcolor="#F5F5F5"
              jewelleryData={furniture2}
              bgHover="#7E6B5C"
            />
          </section>
          <section>
            <SectionTitle color={"#383838"} name={"المراتب"}></SectionTitle>
            <Mattresses
              sideImg={"/imgs/furniture/image 297.png"}
              mobileSideImg={"/imgs/furniture/image 238.png"}
              titleBg={"bg-[#F5F5F5]"}
              products={[
                {
                  title: "مراتب مزدوجة",
                  img: "/imgs/furniture/image 299.png",
                  href: "#",
                },
                {
                  title: "مراتب كينغ",
                  img: "/imgs/furniture/image 300.png",
                  href: "#",
                },
                {
                  title: "مراتب سوبر كينغ",
                  img: "/imgs/furniture/image 301.png",
                  href: "#",
                },
                {
                  title: "مراتب كوين",
                  img: "/imgs/furniture/ewdf 1.png",
                  href: "#",
                },
                {
                  title: "مراتب فردية",
                  img: "/imgs/furniture/image 303.png",
                  href: "#",
                },
                {
                  title: "مراتب أطفال",
                  img: "/imgs/furniture/image 304.png",
                  href: "#",
                },
              ]}
            />
          </section>
          <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
            <SectionTitle name={"مفروشات قد تعجبك"} color={"#383838"} />
            <Recommended products={recommendedProducts} />
          </section>
          <div className="mt-10">
            <ShopasPrice
              circles={furniturecircles}
              img="/imgs/furniture/image 405.png"
            />
          </div>
          <section className="shopasBrand">
            <SectionTitle name={"العناية و التنظيف المنزلية"} />
            <ShopasBrand
              brands={[
                {
                  img: "/imgs/furniture/Frame 399709.png",
                  title: "مبيدات حشرية",
                },
                {
                  img: "/imgs/furniture/Frame 399708.png",
                  title: "العناية بالمفروشات",
                },
                {
                  img: "/imgs/furniture/Frame 399707.png",
                  title: "العناية بالمطبخ",
                },
                {
                  img: "/imgs/furniture/Frame 399706.png",
                  title: "العناية بالحمام",
                },
                {
                  img: "/imgs/furniture/Frame 399710.png",
                  title: "معطرات المفارش",
                },
                {
                  img: "/imgs/furniture/Frame 399711.png",
                  title: "ورق حمام و مطبخ",
                },
                {
                  img: "/imgs/furniture/Frame 399712.png",
                  title: "العناية بالملابس",
                },
                {
                  img: "/imgs/furniture/Frame 399713.png",
                  title: "مناديل",
                },
              ]}
            />
          </section>
          <section>
            <SectionTitle name={"العناية و التنظيف المنزلية"} />
            <NormalImgSlider
              images={[
                {
                  img: "/imgs/furniture/p 2.png",
                },
                {
                  img: "/imgs/furniture/t 1.png",
                },
                {
                  img: "/imgs/furniture/v 1.png",
                },
                {
                  img: "/imgs/furniture/h 1.png",
                },
                {
                  img: "/imgs/furniture/i 1.png",
                },
                {
                  img: "/imgs/furniture/t 1.png",
                },
                {
                  img: "/imgs/furniture/v 1.png",
                },
                {
                  img: "/imgs/furniture/h 1.png",
                },
              ]}
            />
          </section>
          <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] max-md:!text-[#383838] md:!pb-[10px] md:!pt-[5px]">
              <h2>عروض العناية و التنظيف المنزلية</h2>
              <div className="displayAll !bg-[#7E6B5C] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={furnitureProducts}
              classNames="NextButtonSwiperRight0PX"
            />
          </section>
          <section className="furniture">
            <KidsJewellery
              HeaderImg="/imgs/furniture/headImg.png"
              HeaderText="أدوات تحسين المنزل"
              mainImg="/imgs/furniture/mainImg.png"
              bgcolor="#F5F5F5"
              jewelleryData={furniture}
              bgHover="#7E6B5C"
            />
          </section>
          <section>
            <SectionTitle
              color={"#383838"}
              name={"مستلزمات الحمام"}
            ></SectionTitle>
            <PathRoomSupplies />
          </section>

          <section className="lg:mb-10">
            <SectionTitle name={"الديكور و الأثاث الخارجي"} />
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
                  عروض الديكور و الأثاث الخارجي
                </h2>
              </div>
              <WomenSidebarSection2 />
            </div>
            <div className="rightSide flex flex-1 flex-col justify-center overflow-hidden">
              <div className="section-title !mb-[17px] !ml-0 !mt-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                <h2 className="text-[19px] font-[500] text-[#383838]">
                  الأكثر مبيعاً الديكور والمنزل
                </h2>
                <div className="displayAll !bg-[#383838] !text-white">
                  <a href="/">عرض الكل</a>
                </div>
              </div>
              <CardsSlider2
                products={furnitureProducts}
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
          <section className="gray round CardsSlider-p !mt-8 !px-0 md:!mt-10">
            <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#FF9697] max-md:!text-[13px] max-md:!text-white md:!pb-[10px] md:!pt-[5px]">
              <h2>ملابس تبدأ من ٣٠ ريال</h2>
              <div className="displayAll !bg-white !text-[#383838] md:!bg-[#383838] md:!text-white">
                <a href="/">عرض الكل</a>
              </div>
            </div>
            <CardsSlider
              products={furnitureProducts}
              classNames="!mt-[5px] !pr-[0] !mr-[5px] NextButtonSwiperRight0PX"
            />
          </section>
          <RecommendationSection section={section} />
        </div>
      </div>
    </main>
  );
}
