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
  {
    id: 5,
    name: "الأعلى تقيماً",
  },
  {
    id: 6,
    name: "الأعلى تقيماً",
  },
  {
    id: 7,
    name: "الأعلى تقيماً",
  },
];

const Section = ({ name, active, id, setActive, bgHover, Linkscolor, Linksbg, linkshover, bgActive }) => {
  console.log(Linkscolor);
  return (
    <Link
      href={"/"}
      onClick={() => setActive(id)}
      className={`sectionName flex h-[27px] items-center justify-center my-2 px-[13px] py-[8px] ${Linksbg} ${Linkscolor ? Linkscolor : "text-white" } ${bgHover} ${linkshover} ${Linksbg} md:h-[27px] ${id == active ? bgActive : null} transition-all`}
    >
      <h3 className={`text-[11px] md:text-sm`}>{name}</h3>
    </Link>
  );
};

const WatchesSectionSwiper = ({ bgHover = "bg-[383838]", bg, Linkscolor, linkshover, bgActive="" }) => {
  const [active, setActive] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <section
      className="mb-1 px-2"
      style={{ background: bg, backgroundImage: "none" }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={5}
        grabCursor={true}
        navigation={true}
        loop={false}
        modules={[Navigation, Autoplay]}
        className={`noButtonSwiper2 ${bg}`}
        >
        {sections.map((e, i) => {
          return (
            <SwiperSlide
            key={i}
            className="!w-[155px] text-[12px] font-[500]"
            >
              <Section
                Linkscolor={Linkscolor}
                name={e.name}
                setActive={setActive}
                active={active}
                id={e.id}
                Linksbg={bg}
                bgHover={bgHover}
                linkshover={linkshover}
                bgActive={bgActive}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default WatchesSectionSwiper;
