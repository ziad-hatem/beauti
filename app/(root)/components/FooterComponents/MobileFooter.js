import FooterInput from "./FooterInput";
import appleStore from "../../../../public/imgs/app-footer/apple-store.svg";
import googlePlay from "../../../../public/imgs/app-footer/google-play.svg";
import appGallery from "../../../../public/imgs/app-footer/app-gallery.svg";
import Image from "next/image";
import Link from "next/link";
import { AccordionData, socialLinks } from "@/data/fake";
import Accordion from "./Accordion";

const MobileFooter = () => {
  return (
    <div className="flex w-full flex-col items-center  xl:hidden">
      {/* news letter */}
      <div className="flex w-full items-center justify-center gap-1.5 bg-secone px-3 py-2 sm:gap-3">
        <FooterInput
          placeholder={"+966 123456789"}
          type={"number"}
          label={"خدمة الرسائل النصية"}
        />
        <FooterInput
          placeholder={"beauty@gmail.com"}
          type={"email"}
          label={"خدمة الرسائل البريدية"}
        />
      </div>
      {/* accordion */}
      <ul className="bg-footergray grid w-full grid-cols-1">
        {AccordionData.map((row,i) => (
          <li key={i} className="border-b border-[#dadada]">
            <Accordion data={row} />
          </li>
        ))}
      </ul>

      <div className="bg-footergray w-full pt-[5px]">
        {/* app download */}
        <div className="flex items-center justify-center gap-[9px]">
          <span className="pe-1.5 text-10 font-bold text-black">
            تنزيل التطبيق
          </span>
          <Link href={"/"} className="h-[19px] w-auto">
            <Image src={appleStore} alt="" className="h-full w-auto" />
          </Link>
          <Link href={"/"} className="h-[19px] w-auto">
            <Image src={googlePlay} alt="" className="h-full w-auto" />
          </Link>
          <Link href={"/"} className="h-[19px] w-auto">
            <Image src={appGallery} alt="" className="h-full w-auto" />
          </Link>
        </div>
        {/* social links */}
        <ul className=" flex items-center justify-center gap-[21px] border-b border-[#dadada] py-2">
          <span className="pe-1.5 text-10 font-bold text-black">
            تابعونا على
          </span>
          {socialLinks.map((link,i) => (
            <li key={i}>
              <Link href={link.href} className="block w-[18px]">
                <Image src={link.icon} alt="" className="w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MobileFooter;
