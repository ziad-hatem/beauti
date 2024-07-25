"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const MobileSectionHeading = ({ section, title }) => {
  return (
    <div className="mb-3 md:hidden">
      <div className="relative h-14 overflow-hidden rounded-lg">
        <h2 className="absolute start-0 top-1/2 -translate-y-1/2 ps-2 font-extrabold text-white">
          {title ? title : section.title}
        </h2>
        <Image src={section.img} alt="" className="-mt-16 object-cover" />
      </div>
      <div className="slider-container mt-2">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper-all subsections-swiper "
        >
          {section.subSections.map((sub, i) => (
            <SwiperSlide key={i + sub.title} className="my-1.5 !w-fit">
              <Link
                href={sub.href}
                className=" subsection_shadow text-10 flex items-center gap-2 rounded-full bg-white py-0.5 pe-1 ps-3 font-bold text-sectwo"
              >
                <span>{sub.title}</span>
                <span className="h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M12.2035 6.008L8.84391 10.2075L12.2035 14.4069"
                      stroke="currentColor"
                      strokeWidth="1.25984"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default MobileSectionHeading;
