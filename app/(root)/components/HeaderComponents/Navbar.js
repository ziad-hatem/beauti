"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import {mainSectionsLinks} from "../../data/fake"

export default function Navbar() {
  return (
    <nav className='main-nav container'>
      <Swiper
      slidesPerView="auto"
      // centeredSlides={true}
      spaceBetween={25}
      grabCursor={true}
      navigation={true}
      loop={false}
      modules={[Navigation]}
      // autoplay={{
      //   // delay: 2500,
      //   // disableOnInteraction: true,
      //   // pauseOnMouseEnter: true
      // }}
      className="nav-swiper"
    >
      {mainSectionsLinks.map((link, i) => (
        <SwiperSlide key={i} className="">
            {link.title}
        </SwiperSlide>
      ))}
    </Swiper>
    </nav>
  )
}
