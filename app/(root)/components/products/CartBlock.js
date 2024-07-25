import Image from "next/image";
import Rating from "../common/Rating";
import PriceBlock from "./PriceBlock";
import PaymentPageBtn from "../common/PaymentPageBtn";
import Link from "next/link";
import SuggestedPackage from "./SuggestedPackage";
import { offersBlockProducts } from "@/data/fake";
import ThreeProductsPlus from "./ThreeProductsPlus";
import SuggestedPackagePrice from "./SuggestedPackagePrice";

const CartBlock = ({ product, quantity }) => {
  return (
    <div className="sticky top-0 z-30 w-full rounded-2xl border-2 border-primery bg-white px-2 py-4 sm:px-4">
      <div className="flex flex-col items-start gap-5 sm:flex-row">
        <div className="mx-auto aspect-square w-32 shrink-0 overflow-hidden rounded-lg border-2 border-primery">
          <Image src={product.imgs[0].src} alt="" className="object-cover" />
        </div>
        <div>
          <h3 className="ing-tight mb-2">{product.title}</h3>
          <Rating
            stars={product.stars}
            reviews={product.reviews}
            className={`text-15 `}
            reviewsClasses={`!text-secthree`}
          />
          <div className="mt-2 flex items-center gap-6 lg:justify-between lg:gap-3">
            <div className="text-xl">
              <span className="font-medium">الكمية : </span>
              <span className="font-bold">{quantity}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <PriceBlock
                product={product}
                offerClasses={"lg:!text-2xl"}
                originalClasses={"lg:!text-base"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-5 flex w-fit flex-col items-center gap-4 sm:flex-row lg:w-auto">
        <PaymentPageBtn className={"grid min-h-[43px] min-w-44 "} />
        <Link
          href={"/"}
          className="grid min-h-[43px] place-content-center whitespace-nowrap rounded-lg bg-primery px-6 text-xl font-bold text-white"
        >
          متابعة التسوق
        </Link>
      </div>
      <div className="border-lightgray rounded-2xl border px-1 py-4 lg:px-5 lg:py-6">
        <ThreeProductsPlus packageOffer={offersBlockProducts} />
      </div>
      <SuggestedPackagePrice price={152} />
    </div>
  );
};
export default CartBlock;
