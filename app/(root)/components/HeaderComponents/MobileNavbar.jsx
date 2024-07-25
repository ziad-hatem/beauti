"use client";

import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { mainSectionsLinks } from "../../data/fake";
import { mainContext } from "@/contexts/ContextProvider";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/libs/Breadcrumbs";

const MobileNavbar = () => {
  const { breadcrumb, setBreadcrumb } = useContext(mainContext);
  console.log(breadcrumb);
  return (
    <nav>
      <Breadcrumbs />
    </nav>
  );
};

export default MobileNavbar;
