import JewellerysectionsSwiper from "@/components/common/JewellerysectionsSwiper";
import { dailyOffers } from "@/data/fake";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleCardNoButtonSlider from "./SimpleCardNoButtonSlider";
import { useEffect, useRef } from "react";
import { JewelleryComponent } from "./Jewellery";
import { JewelleryComponent as ManJewelleryComponent } from "./ManJewellery";
import Link from "next/link";
import CardsSlider2 from "./CardsSlider2";
import { boysEconomy } from "@/data/fashionData";
const jewellery = [
  {
    name: "قبعات",
    img: "/imgs/manFashion/Jewellery/img1.svg",
  },
  {
    name: "سلاسل مفاتيح",
    img: "/imgs/manFashion/Jewellery/img2.svg",
  },
  {
    name: "ربطات عنق",
    img: "/imgs/manFashion/Jewellery/img3.svg",
  },
  {
    name: "محافظ",
    img: "/imgs/manFashion/Jewellery/img4.svg",
  },
  {
    name: "ربطات عنق",
    img: "/imgs/manFashion/Jewellery/img5.svg",
  },
  {
    name: "محافظ",
    img: "/imgs/manFashion/Jewellery/img6.svg",
  },
  {
    name: "اكسسوارات",
    img: "/imgs/manFashion/Jewellery/img7.svg",
  },
];

const JewelleryWideComponent = ({ name, img, bgcolor }) => {
  return (
    <div className="left-robe aspect-square max-lg:!flex max-lg:!h-[51.50vw] max-lg:!w-[92vw] max-lg:!flex-col lg:border lg:border-[#EAEAEA]">
      <div
        className="robe-image max-lg:flex max-lg:aspect-square max-lg:!h-full max-lg:!w-full max-lg:items-center max-lg:justify-center "
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <Image
          width={100}
          height={100}
          unoptimized
          src={img}
          className="mix-blend-multiply max-xl:object-contain"
          alt={name}
        />
      </div>
      <a
        href="/"
        className="robe-title text-center font-[400] max-lg:mt-1 max-lg:text-[13.79px]"
      >
        {name}
      </a>
    </div>
  );
};

const RestofJewelleryComponent = ({ mainImg, bgcolor, bgHover, data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <div>
      <div className="flex w-full flex-col gap-3 md:flex-row">
        <div className="flex max-md:mx-[10px] max-md:w-[calc(100%_-_20px)] md:h-[339px] md:w-[309px]">
          <div className="relative max-h-[400px] w-full max-md:mx-1">
            <Image
              src={mainImg}
              width={100}
              height={100}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 right-3 hidden w-full md:flex">
              <p className="w-20 text-3xl text-[#5A7892]"></p>
              <button className="absolute bottom-0 left-[10%] h-[31px] w-[107px] rounded-full bg-[#383838] text-[15px] font-[500] text-white">
                عرض الكل
              </button>
            </div>
          </div>
        </div>
        <div
          className={`Jewellerys !mb-[5px] mr-0 !flex flex-wrap justify-around md:!hidden`}
        >
          <Swiper
            ref={swiperRef}
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            loop={false}
            modules={[Navigation, Autoplay]}
            className={`noButtonSwiper2 !hidden !justify-around !bg-transparent md:!flex`}
          >
            {Array.from({ length: 7 }, (_, index) => {
              return (
                <SwiperSlide key={index} className="!h-fit !w-fit">
                  {data ? (
                    <JewelleryComponent {...data[index]} bgcolor={bgcolor} />
                  ) : (
                    <JewelleryComponent
                      {...jewellery[index]}
                      bgcolor={bgcolor}
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="hidden flex-wrap items-center justify-center gap-x-[14px] gap-y-4 max-md:flex">
            {Array.from({ length: 7 }, (_, index) => {
              return (
                <div key={index} className={"w-auto"}>
                  {++index != 7 ? (
                    data ? (
                      <JewelleryComponent
                        {...data[--index]}
                        bgcolor={bgcolor}
                      />
                    ) : (
                      <JewelleryComponent
                        {...jewellery[--index]}
                        bgcolor={bgcolor}
                      />
                    )
                  ) : data ? (
                    <JewelleryWideComponent {...data[6]} bgcolor={bgcolor} />
                  ) : (
                    <JewelleryWideComponent
                      {...jewellery[6]}
                      bgcolor={bgcolor}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex !h-fit flex-col justify-around rounded-lg max-md:mr-[5px] md:w-[calc(100%_-_309px)]">
          <div className="header mb-1 !h-[30px]">
            <JewellerysectionsSwiper bgHover={bgHover} />
          </div>
          <CardsSlider2
            products={boysEconomy}
            className="!h-[252px] !w-[130px] md:!h-[291px] md:!w-[149px]"
          />
        </div>
        <h2 className="mr-[13px] hidden text-[12px] max-md:block">
          عرض الكل »
        </h2>
      </div>
    </div>
  );
};

export default RestofJewelleryComponent;
