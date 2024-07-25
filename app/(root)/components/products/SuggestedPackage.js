import Image from "next/image";
import Link from "next/link";
import CartBtn from "@/components/Home/CartBtn";
import ThreeProductsPlus from "@/components/products/ThreeProductsPlus";
import SuggestedPackagePrice from "@/components/products/SuggestedPackagePrice";

const SuggestedPackage = ({ packageOffer }) => {
  return (
    <div className="border-lightgray rounded-2xl border px-1 py-4 lg:px-5 lg:py-6">
      <ThreeProductsPlus packageOffer={packageOffer} />
      {/* <div className="flex justify-center gap-0.5 sm:gap-1.5">
        {packageOffer.map((product, i) => (
          <div
            key={product.title}
            className="flex items-center gap-0.5 sm:gap-1.5"
          >
            <div>
              <Image
                src={product.imgs[0]}
                alt=""
                className="max-w-20 rounded-lg sm:max-w-32"
              />
              <Link
                href={"#"}
                className="whitespace-nowrap text-10 sm:text-base"
              >
                {product.title.length > 14
                  ? product.title.substring(0, 14) + "..."
                  : product.title}
              </Link>
            </div>
            {i !== packageOffer.length - 1 && (
              <span className="w-3 shrink-0 pb-[22px] sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  className="w-full"
                >
                  <path
                    d="M12.9331 6.64435V18.6443M19.3997 12.6443L6.46657 12.6443"
                    stroke="#383838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div> */}

      {/* <div className="mt-6 flex items-center justify-between xs:justify-center xs:gap-2.5 ">
        <p className="text-[9px] font-bold sm:text-base">
          عرض حزمة ثلاثة منتجات فقط ب 152 رس
        </p>
        <CartBtn
          className={"h-8 w-fit !flex-grow-0 !rounded-md px-2.5 lg:h-9"}
          textClasses={"text-10 sm:text-base whitespace-nowrap"}
        />
      </div> */}
      <SuggestedPackagePrice price={152} />
    </div>
  );
};
export default SuggestedPackage;
