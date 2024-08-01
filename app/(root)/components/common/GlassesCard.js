import Image from "next/image";
import Link from "next/link";
import Rating from "../common/Rating";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import { mainContext } from "@/contexts/ContextProvider";
import { useContext } from "react";
const GlassesCard = ({
  product,
  multiSubSection,
  productClassName,
  imgClasses,
  click,
}) => {
  // const { setProduct } = useContext(mainContext);
  return (
    <div
      className={
        "product-card flex !h-fit !w-fit flex-col !border-0 !p-0 max-md:!h-[198px] max-md:w-[119px] lg:!h-fit lg:!w-[161px] " +
        productClassName
      }
      onClick={() => {
        click(product);
      }}
    >
      {/* image */}
      <div
        className={
          "product-image-container relative mx-auto overflow-hidden rounded-xl !p-0 max-md:!h-[119px] max-md:!w-[119px] md:!h-[161px] md:!w-[161px] lg:rounded-13 " +
          imgClasses
        }
      >
        <Image
          src={product.img}
          alt=""
          width={100}
          loading="lazy"
          height={100}
          className="!object-contain !mix-blend-darken transition-all duration-500 group-hover:scale-125 max-md:!h-[98px] max-md:!w-[104px] md:!h-[132.6px] md:!w-[131.72px]"
        />
      </div>

      {/* title */}
      <div className="flex flex-col">
        <h3 className="mt-2 w-[117px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-[12px] font-[700] text-black md:w-[151px]">
          {product.title}
        </h3>
        <h3 className="flex w-full max-w-full items-center justify-center text-[12px] text-[#636363] ">
          <p className="w-[117px] overflow-hidden text-ellipsis whitespace-nowrap md:w-[151px]">
            {product.description
              ? product.description
              : "هذه كتابة تجريبية لملئ مكان الشرح الخاص بالمنتج"}
          </p>
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
export default GlassesCard;
