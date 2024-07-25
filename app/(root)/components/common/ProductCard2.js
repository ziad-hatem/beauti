import Image from "next/image";
import Link from "next/link";
import Rating from "../common/Rating";
import VerifiedBeauty from "./filter/VerifiedBeauty";
const ProductCard2 = ({
  product,
  multiSubSection,
  productClassName,
  imgClassName,
}) => {
  const string =
    "حذاء رياضي كاجوال سهل الارتداء للمشي حذاء رياضي كاجوال سهل الارتداء للمشي ...حذاء رياضي كاجوال سهل الارتداء للمشي حذاء رياضي كاجوال سهل الارتداء للمشي ...";
  return (
    <div
      className={
        "product-card !mr-0 flex !h-[252px] !w-[130px] flex-col border border-[#E3E3E3] bg-white !p-0 md:!h-[291px] md:!w-[149px]" +
        productClassName
      }
    >
      {/* image */}
      <div
        className={`product-image-container relative mx-[6px] mt-2 !h-[148px] !w-[calc(100%_-_12px)] overflow-hidden rounded-xl !p-0 md:!h-[167px] md:!w-[137px] md:rounded-13 ${imgClassName}`}
      >
        <Image
          src={product.img}
          alt=""
          width={100}
          unoptimized
          loading="lazy"
          height={100}
          className="!object-contain transition-all duration-500 group-hover:scale-125"
        />
      </div>

      {/* title */}
      <div className="m-auto flex flex-col">
        <h3 className=" flex w-full items-center justify-center text-[12px] font-[700] text-black">
          كالفن كلاين
        </h3>
        <h3 className="flex w-full max-w-full items-center justify-center text-[12px] text-[#636363] md:text-sm">
          <p className="max-w-full">{string.substring(10, 28)}...</p>
        </h3>
        <h3 className="flex w-full flex-col items-center justify-center text-[12px] font-[500] text-[#545454]">
          ١٩٩ ر.س
        </h3>
        <div className="mx-auto flex w-full items-center justify-center pb-1 text-[8px] lg:text-sm">
          <Rating
            stars={product.stars}
            reviews={product.reviews}
            color="#F39406"
            className={"text-[#F39406]"}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductCard2;
