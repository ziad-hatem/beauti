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
import SmallBrandSlider from "@/components/common/SmallBrandSlider";
import BeautyBrandSample from "@/components/common/BeautyBrandSample";
import Recommended from "@/components/common/Recommended";
import GlassesMostSelled from "@/components/common/GlassesMostSelled";
import ShopasPrice2 from "@/components/common/ShopasPrice2";
import DoubleBanner from "@/components/banners/DoubleBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FurnitureDoubleGallary from "@/components/common/FurnitureDoubleGallary";
import ShopasPrice3 from "@/components/common/ShopasPrice3";
import WomenWatch from "@/components/common/WomenWatch";
import KidsSlider from "@/components/common/KidsSlider";
import ShopasBrand from "@/components/common/ShopasBrand";
import ShopasPriceGirl from "@/components/common/ShopasPriceGirl";
import RecommendationSection from "@/components/common/RecommendationSection";
import SimpleCardNoButtonSlider from "@/components/common/SimpleCardNoButtonSlider";
import Widebanner from "@/components/common/Widebanner";
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
import FlexLinksBanner from "@/components/common/FlexLinksBanner";
import SimpleLargeCardSlider from "@/components/common/SimpleLargeCardSlider";
import WomenSuitcase from "@/components/common/WomenSuitcase";
import SimpleLargeCard from "@/components/common/SimpleLargeCard";
import FramSmallSlider from "@/components/common/FramSmallSlider";
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
    smartWatches,
    boysFashion,
    cheapSport,
    womenWatchescircles,
    boysleftlinks,
    boysrightlinks,
    dailyOffers2,
    boyswears,
    cheapClothes,
    circles,
    sportProducts,
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
    sportDoubleGallary,
    fashionMaterials,
    fashionSubSections,
} from "@/data/fashionSectionData";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// import { wsport } from "../../data/fashionData";
const data = [
    {
        img: "/imgs/sportPage/Frame 40154 (2).png",
        name: "أجهزة تلفزيون و ترفيه",
        description: "تجربة سينمائية في منزلكم مع أجهزة التلفزيون المتطورة",
    },
    {
        img: "/imgs/sportPage/Frame 40155 (2).png",
        name: "أجهزة كهربائية صغيرة",
        description: "اجعلوا حياتكم أسهل مع أجهزتنا المنزلية الصغيرة",
    },
    {
        img: "/imgs/sportPage/Frame 40156 (2).png",
        name: "أجهزة كهربائية كبيرة",
        description: "اجعلوا منزلكم أكثر فعالية مع أجهزتنا المنزلية الكبيرة",
    },
];
export default function sportPage() {
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
                    <BannerSlider
                        desktopBanners={boysBanner}
                        swiperClass={"top-banner"}
                        mobileBanners={mobileboysBanner}
                    />
                    <section className="mt-[40px]">
                        <FurnitureDoubleGallary products={sportDoubleGallary} />
                    </section>
                    <section className="my-8 md:my-10">
                        <BannerSlider
                            desktopBanners={ManSlimBanner}
                            swiperClass={"slim-slider !mb-0 !mt-0"}
                        />
                    </section>
                    <section className="offers">
                        <div className="section-title-offers !bg-[#fff] !text-[#383838]">
                            <h2 className="!text-[#383838]">
                                عروض بيوتى |{" "}
                                <span className="leastprice !text-[#CA4758]">خصم حتى 70%</span>
                            </h2>
                        </div>
                        <Offers
                            offers={boysBeautyOffers}
                            banner="/imgs/sportPage/far 1.png"
                            bannerTextColor="#FFF"
                            sectionName={"عروض بيوتى"}
                        />
                    </section>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={13}
                        grabCursor={true}
                        modules={[Navigation, Scrollbar]}
                        // navigation={true}
                        // pagination={true}
                        scrollbar={{
                            draggable: true,
                            dragSize: 25,
                        }}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 13
                            }
                        }}

                        className="mt-10 gap-3 max-md:mt-8 max-md:!px-[13px] max-md:!pb-[20px]"
                    >
                        {
                            [{ img1: "/imgs/sportPage/Rectangle 1071.png", img2: "/imgs/sportPage/Rectangle 1072.png" }, { img1: "/imgs/sportPage/Rectangle 1073.png", img2: "/imgs/sportPage/Rectangle 1074.png" }].map((image) => {
                                return (

                                    <SwiperSlide className="!flex mt-0 gap-[13px] max-md:mt-8 flex-col h-fit w-fit">
                                        <Image
                                            src={image.img1}
                                            width={100}
                                            height={100}
                                            unoptimized
                                            loading="lazy"
                                            className="max-md:mx-auto !h-fit w-full"
                                        />
                                        <Image
                                            src={image.img2}
                                            width={100}
                                            unoptimized
                                            loading="lazy"
                                            height={100}
                                            className="max-md:mx-auto !h-fit w-full"
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <section className="mt-10 flex h-fit w-full flex-col max-md:mt-8 md:flex-row">
                        <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#9CBBDD] !px-[13px] !py-[10px] md:!hidden">
                            <h2 className="text-[calc(12px+0.8vw)] font-[500] text-white">
                                عروض بيوتي على منتجات الجيم و الرياضة
                            </h2>
                        </div>
                        <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
                            <WomenSidebarSection2
                                img="/imgs/sportPage/Frame 39947.png"
                                mobileImg="/imgs/sportPage/Frame 39947.png"
                                className="!mb-2"
                            />
                        </div>
                        <div className="rightSide mr-[5px] flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden">
                            <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                                    عروض بيوتي على منتجات الجيم و الرياضة
                                </h2>
                                <div className="displayAll !bg-[#9CBBDD] !text-white">
                                    <a href="/">عرض الكل</a>
                                </div>
                            </div>
                            <CardsSlider2
                                sectionClassName="!bg-none !t-0 !px-0 !py-0 !mt-0"
                                products={sportProducts}
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
                        <SectionTitle name={"منتجات السباحة"} color={"#383838"} />
                        <SimpleLargeCard products={
                            [
                                {
                                    img: "/imgs/sportPage/image 335.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-1.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-2.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-3.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                            ]
                        } />
                    </section>
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>اقل من ٢٥ ريال الجيم و الرياضة</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section>
                        <SectionTitle name={"ماركات الرياضة العالمية"} color={"#383838"} />
                        <div className="grid grid-cols-4 gap-[30px]">
                            <div>
                                <img src="/imgs/sportPage/Frame 399503.png" alt="" />
                            </div>
                            <div>
                                <img src="/imgs/sportPage/Frame 399504.png" alt="" />
                            </div>
                            <div>
                                <img src="/imgs/sportPage/Frame 399505.png" alt="" />
                            </div>
                            <div>
                                <img src="/imgs/sportPage/Frame 399506.png" alt="" />
                            </div>
                        </div>
                        <SmallBrandSlider brands={fbrands} />
                    </section>
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على الماركات العالمية</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section className="lg:mb-10">
                        <SectionTitle name={"الملابس الرياضية"} />
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
                    <BannerSlider
                        desktopBanners={ManSlimBanner}
                        swiperClass={"slim-slider !mb-0 !mt-0"}
                    />
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على الألبسة الرياضية</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section className="womensuitcase max-md:mx-[13px]">
                        <div className="hidden lg:block">
                            <SectionTitle name={"المكملات الرياضية"} />
                        </div>
                        <div className="block lg:hidden">
                            <SectionTitle name={"المكملات الرياضية"} />
                        </div>
                        <WomenSuitcase
                            mainImg="/imgs/sportPage/57cd658976499b9dc9d9edc15832cc50 1.png"
                            data={[
                                {
                                    name: "شنط يد",
                                    img: "/imgs/sportPage/2 23-1.png",
                                    mobileImg: "/imgs/sportPage/2 23-1.png",
                                },
                                {
                                    name: "حقائب ظهر",
                                    img: "/imgs/sportPage/2 23.png",
                                    mobileImg: "/imgs/sportPage/2 23.png",
                                },
                                {
                                    name: "محفظة",
                                    img: "/imgs/sportPage/2 23-3.png",
                                    mobileImg: "/imgs/sportPage/2 23-3.png",
                                },
                                {
                                    name: "شنط سفر",
                                    img: "/imgs/sportPage/2 23-2.png",
                                    mobileImg: "/imgs/sportPage/2 23-2.png",
                                },
                            ]}
                        />
                    </section>
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على المكملات الرياضية</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section className="max-md:my-10 my-8">
                        <BannerSlider
                            desktopBanners={ManSlimBanner}
                            swiperClass={"slim-slider !mb-0 !mt-0"}
                        />
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
                                            className="mx-auto mb-1 aspect-square !w-full object-cover rounded-[12px]"
                                            loading="lazy"
                                            alt={e.name}
                                        />
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
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على الأحذية الرياضية</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section>
                        <SectionTitle name={"فئات مرغوبة"} />
                        <div className="!grid grid-cols-2 mt-10 gap-[13px] max-md:mt-8 max-md:grid-cols-1 h-fit">
                            {
                                [{ img: "/imgs/sportPage/Rectangle 1076.png" }, { img: "/imgs/sportPage/Rectangle 1075.png" }].map((img) => {
                                    return (
                                        <Image
                                            src={img.img}
                                            width={100}
                                            height={100}
                                            unoptimized
                                            loading="lazy"
                                            className="max-md:mx-auto !h-fit w-full"
                                        />
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className="round PinkBigBrandSection kids mb-8 mt-8 !pb-8 !pr-[10px] !pl-[10px] !pt-0.5 md:mb-10 md:mt-10 md:!bg-[#FAFAFA]">
                        <BlueBigBrand array={cheapSport} bgColor={"!bg-[#9CBBDD]"} textColor={"!text-[#fff]"} offerTextColor={"!text-[#fff]"} smallBannerImg={"/../imgs/womanWatches/65hh 4.png"} title="الجيم و الرياضة تناسب الميزانية" />
                    </section>
                    {/* 
                            
                                missing section
                            
                            
                            */}
                    <section className="mt-10 flex h-fit w-full flex-col max-md:mt-8 md:flex-row">
                        <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
                            <h2 className=" text-[16px] font-[500] text-white">
                                عروض بيوتي على الدراجات و اكسسواراتها
                            </h2>
                        </div>
                        <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
                            <WomenSidebarSection2
                                img="/imgs/sportpage/Frame 39947 (3).png"
                                mobileImg="/imgs/sportpage/Frame 39947 (2).png"
                                className="!mb-2"
                            />
                        </div>
                        <div className="rightSide mr-[5px] flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden">
                            <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                                    عروض بيوتي على الدراجات و اكسسواراتها
                                </h2>
                                <div className="displayAll !bg-[#9CBBDD] !text-white">
                                    <a href="/">عرض الكل</a>
                                </div>
                            </div>
                            <CardsSlider2
                                sectionClassName="!bg-none !t-0 !px-0 !py-0 !mt-0"
                                products={sportProducts}
                            />
                        </div>
                        <Link
                            href={"/"}
                            className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
                        >
                            عرض الكل <span className="font-[400]">»</span>
                        </Link>
                    </section>
                    {/* 
                                    
                            missing section
                        
                        
                        */}
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على الأجهزة الرياضية</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section>
                        <SectionTitle name={"دليل بيوتي الرياضي"} />
                        <div className="bg-[#F5F5F5] p-[20px]">
                            <BannerSlider
                                desktopBanners={boysBanner}
                                swiperClass={"top-banner !rounded-[0] imageNoHeight aspect-[933/297]"}
                                mobileBanners={mobileboysBanner}
                            />
                            <FramSmallSlider products={[
                                {
                                    img: '/imgs/sportPage/Frame 40093.png',
                                    title: "كرة الريشة"
                                },
                                {
                                    img: '/imgs/sportPage/Frame 40094.png',
                                    title: "الملاكمة"
                                },
                                {
                                    img: '/imgs/sportPage/Frame 40095.png',
                                    title: "السباحة"
                                },
                                {
                                    img: '/imgs/sportPage/Frame 40096.png',
                                    title: "تنس"
                                },
                                {
                                    img: '/imgs/sportPage/Frame 40097.png',
                                    title: "كرة السلة"
                                },
                            ]} />
                        </div>
                    </section>
                    <section className="ImgsOffersSlider offers Recommended !mb-0 !mt-0">
                        <SectionTitle name={"مختارات قد تعجبك"} color={"#383838"} />
                        <Recommended products={recommendedProducts} />
                    </section>
                    <section>
                        <SectionTitle name={"اكسسوارات التدريب و  اللياقة"} color={"#383838"} />
                        <SimpleLargeCardSlider products={
                            [
                                {
                                    img: "/imgs/sportPage/image 335 (2).png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-1 (2).png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-2 (2).png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-3 (2).png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-4.png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-5.png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-6.png",
                                    title: "زجاجات للرياضين"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-7.png",
                                    title: "زجاجات للرياضين"
                                },
                            ]
                        } />
                    </section>
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#fff] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض بيوتي على اكسسوارات التدريب و الياقة</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <section className="boysJewellery mt-[40px] max-md:mt-[32px]">
                        <SectionTitle name={"تكنولوجيا الرياضة والترفيه"} color={"#383838"} />
                        <SmartWatches
                            mainImg={"/imgs/sportPage/Frame 39951.png"}
                            bgcolor={"bg-[#FAFAFA]"}
                            titleColor={"#fff"}
                            cardTitleBg={"#9CBBDD"}
                            imgbgColor={"!bg-[#ffffff]"}
                            watchesData={smartWatches}
                        />
                    </section>
                    <section>
                        <SectionTitle name={"ساعات نسائية"} color={"#383838"} />
                        <SimpleLargeCard products={
                            [
                                {
                                    img: "/imgs/sportPage/image 335.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-1.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-2.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                                {
                                    img: "/imgs/sportPage/image 335-3.png",
                                    title: "أدوات التدريب على السباحة"
                                },
                            ]
                        } />
                    </section>
                    <section className="mt-10 flex h-fit w-full flex-col max-md:mt-8 md:flex-row">
                        <div className="section-title !mx-3 !mb-0 !mt-0 !flex !items-center !justify-center bg-[#383838] !px-[13px] !py-[10px] md:!hidden">
                            <h2 className=" text-[16px] font-[500] text-white">
                            عروض بيوتي على منتجات الجيم و الرياضة
                            </h2>
                        </div>
                        <div className="leftSide h-fit w-auto flex-none md:!ml-[19px]">
                            <WomenSidebarSection2
                                img="/imgs/sportPage/Frame 39947.png"
                                mobileImg="/imgs/sportPage/Frame 39947.png"
                                className="!mb-2"
                            />
                        </div>
                        <div className="rightSide mr-[5px] flex !h-fit w-auto flex-1 flex-col !justify-center overflow-hidden">
                            <div className="section-title !my-0 !hidden !items-center !py-0 !pl-0 !pr-4 md:!flex">
                                <h2 className="!mb-[17px] text-[19px] font-[500] text-black">
                                عروض بيوتي على منتجات الجيم و الرياضة
                                </h2>
                                <div className="displayAll !bg-[#9CBBDD] !text-white">
                                    <a href="/">عرض الكل</a>
                                </div>
                            </div>
                            <CardsSlider2
                                sectionClassName="!bg-none !t-0 !px-0 !py-0 !mt-0"
                                products={sportProducts}
                            />
                        </div>
                        <Link
                            href={"/"}
                            className="mr-3 mt-2 hidden text-[12px] font-[500] max-md:block"
                        >
                            عرض الكل <span className="font-[400]">»</span>
                        </Link>
                    </section>
                    {/* 



          here we are
          
          
          
          */}
                    {/* ------------ */}
                    <section className="gray round CardsSlider-p !mt-8 !pt-0 md:!mt-10">
                        <div className="section-title !m-0 flex items-center max-md:!h-[35px] max-md:!bg-[#F5F5F5] max-md:!text-[13px] !text-[#383838] md:!pb-[10px] md:!pt-[5px]">
                            <h2>عروض الجيم و الرياضة</h2>
                            <div className="displayAll !bg-[#9CBBDD] md:!text-[#fff]">
                                <a href="/">عرض الكل</a>
                            </div>
                        </div>
                        <CardsSlider
                            products={sportProducts}
                            classNames="NextButtonSwiperRight0PX"
                        />
                    </section>
                    <RecommendationSection section={section} />
                </div>
            </div>
        </main>
    );
}