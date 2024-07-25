import Image from "next/image";
import Link from "next/link";
import smallBanner from "../../../../public/imgs/banners/small-banner.png";
import smallVerBanner from "../../../../public/imgs/banners/small-ver-banner.png";
import Rating from "@/components/common/Rating";
import Quantity from "@/components/common/Quantity";
import CartBtn from "@/components/Home/CartBtn";
import PaymentPageBtn from "@/components/common/PaymentPageBtn";
import ProductRowWithRating from "@/components/products/ProductRowWithRating";
import OffersBlock from "@/components/products/OffersBlock";
import PriceBlock from "@/components/products/PriceBlock";
import two from "../../../../public/icons/a2.png";
import { offersBlockProducts, policies, productPageLinks } from "@/data/fake";

const SidePanel = ({ detailedProductPage }) => {
  return (
    <div className="mx-auto w-full shrink-0 xl:w-[271px]">
      {/* first block */}
      <div className="mb-4 flex flex-col gap-[26px] rounded-2xl bg-maingray px-2.5 pb-3.5 pt-4">
        {/* price
        <div className="hidden text-center xl:block">
          <PriceBlock product={detailedProductPage} />
        </div>
        product
        <div className="hidden xl:block">
          <ProductRowWithRating product={detailedProductPage} />
        </div>
        quantity and payment
        <div className=" hidden flex-col gap-3.5 xl:flex">
          <Quantity />
          <CartBtn className={"grid min-h-[43px] "} inProductPage={true} />
          <PaymentPageBtn className={"grid min-h-[43px]"} />
        </div> */}

        {/* seller box */}
        <div className="relative rounded-[14px] border border-lightgray p-3">
          {/* seller */}
          <div className="flex items-center gap-3.5">
            {/* seller img */}
            <div className="seller_gradiant rounded-full p-0.5">
              <div className=" grid aspect-square w-[60px] place-content-center overflow-hidden rounded-full ">
                <Image src={detailedProductPage.sellerImg} alt="" />
              </div>
            </div>
            {/* seller info */}
            <div>
              <h3 className="font-extrabold">
                {detailedProductPage.sellerName}
              </h3>
              <p className="font-medium text-secthree">متجر رسمي</p>
              <Rating
                stars={detailedProductPage.sellerStars}
                reviews={detailedProductPage.sellerReviews}
                reviewsClasses={"!text-secthree !font-medium"}
              />
            </div>
          </div>
          {/* separator */}
          <div className="mx-1.5 my-4 h-[1px] bg-lightgray"></div>
          {/* policy */}
          <ul className="mb-2 flex flex-wrap items-center justify-center gap-2.5">
            {policies.map((policy) => (
              <li
                key={policy.title}
                className="flex w-[calc(50%_-_10px)] items-center gap-1.5"
              >
                <span>{policy.icon}</span>
                <Link
                  href={policy.href}
                  className="whitespace-nowrap text-xs font-bold transition-all hover:opacity-80"
                >
                  {policy.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* add verfied here */}
          <div className="absolute left-3 top-3.5  w-10">
            <Image src={two} alt="verified" />
          </div>
        </div>
        {/* best offers */}
        <div className="hidden xl:block">
          <OffersBlock title={"افضل العروض"} products={offersBlockProducts} />
        </div>
        {/* compat offers and banner*/}
        <div className="hidden xl:block">
          <OffersBlock title={"عروض منافسة"} products={offersBlockProducts} />
          {/* banner */}
          <div className="mt-3.5 overflow-hidden rounded-2xl">
            <Image src={smallBanner} alt="" />
          </div>
        </div>
      </div>
      {/* second block */}
      <div className="hidden rounded-2xl bg-maingray p-5 xl:block">
        {/* links */}
        <ul className="mt-1 flex flex-col gap-1.5">
          {productPageLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="flex h-[43px] items-center gap-2.5 rounded-lg bg-white px-2.5 text-xl font-bold text-sectwo transition-all hover:bg-primery hover:text-white"
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 overflow-hidden rounded-2xl">
          <Image src={smallVerBanner} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
