import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    id: 1,
    name: "أحدث المنتجات",
  },

  {
    id: 2,
    name: "كل المنتجات",
  },
  {
    id: 3,
    name: "العروض اليومية",
  },
  {
    id: 4,
    name: "الأعلى تقيماً",
  },
];

const Section = ({ name, active, id, setActive, bgHover }) => {
  return (
    <Link
      href={"/"}
      onClick={() => setActive(id)}
      className={`sectionName flex h-[25.32px] items-center justify-center rounded-lg bg-white hover:text-white max-md:bg-[#F5F5F5] md:h-[30px] ${
        id == active ? "text-white" : "text-[" + bgHover + "]"
      }  ${id == active && `!bg-[${bgHover}]`} transition-all`}
    >
      <h3 className={`text-[11px] md:text-sm`}>{name}</h3>
    </Link>
  );
};

const JewellerysectionsSwiper = ({ bgHover = "#383838" }) => {
  const [active, setActive] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <section
      className="mb-1 !p-0"
      style={{ background: "none", backgroundImage: "none" }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={20.67}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`noButtonSwiper2 !bg-transparent`}
      >
        {sections.map((e, i) => {
          return (
            <SwiperSlide
              key={i}
              className="!h-[30px] !w-[124.08px] text-[12px] font-[500] md:!w-[141px]"
            >
              <Section
                name={e.name}
                setActive={setActive}
                active={active}
                id={e.id}
                bgHover={bgHover}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default JewellerysectionsSwiper;
