import Link from "next/link";
import appleStore from "../../../../public/imgs/app-footer/apple-store.svg";
import googlePlay from "../../../../public/imgs/app-footer/google-play.svg";
import appGallery from "../../../../public/imgs/app-footer/app-gallery.svg";
import Image from "next/image";
import {
  callUsLinks,
  generalTermsLinks,
  mainSectionsLinks,
  sellWithUsLinks,
} from "@/data/fake";
import FooterCol from "./FooterCol";

const SixCols = () => {
  return (
    <div className="sixcols hidden items-start justify-between gap-[49px]  pb-[22px] pt-[19px] xl:flex">
      <div className="col-one">
        <h3 className="footer_head_shadow text-xl font-[800] text-primery">
          من نحن
        </h3>
        <p className="mt-3 max-w-[244px] text-justify text-15 leading-7">
          بيوتي سنتر منصة سعودية متعددة التجار، نسعى لتوفير تجربة تسوق فريدة
          ومتكاملة لعملائنا.نقدم مجموعة واسعة من المنتجات من مختلف الفئات، بدءًا
          من الموضة والإلكترونيات وصولًا إلى الأدوات المنزلية. اكتشف معنا منتجات
          عالية الجودة وأسعار منافسة، واستمتع بتجربة تسوق مريحة وآمنة عبر منصتنا
        </p>
      </div>

      <FooterCol links={mainSectionsLinks} colTitle={"الأقسام الرئيسية"} />
      <FooterCol links={generalTermsLinks} colTitle={"الشروط العامة"} />
      <FooterCol links={sellWithUsLinks} colTitle={"البيع معنا"} />
      <FooterCol links={callUsLinks} colTitle={"اتصل بنا"} />

      <div className="col-six">
        <h3 className="footer_head_shadow text-xl font-[800] text-primery">تنزيل التطبيق</h3>
        <div className="mt-3 max-w-[244px]  text-15 ">
          <p>تنزيل تطبيق بيوتي سنتر</p>
          <p className="mb-2.5 mt-2">متوفر على كل من</p>
          <Link href={"/"} className="block">
            <Image src={appleStore} alt="" />
          </Link>
          <Link href={"/"} className="mt-3 block">
            <Image src={googlePlay} alt="" />
          </Link>
          <Link href={"/"} className="mt-3 block">
            <Image src={appGallery} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SixCols;
