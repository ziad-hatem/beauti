import Link from "next/link";
import Image from "next/image";
import one from "../../../../public/imgs/filter/img (1).png";
import two from "../../../../public/imgs/filter/img (2).png";
import three from "../../../../public/imgs/filter/img (3).png";
import four from "../../../../public/imgs/filter/img (4).png";
import five from "../../../../public/imgs/filter/img (5).png";
import six from "../../../../public/imgs/filter/img (6).png";
import ShowAllBtn from "../common/ShowAllBtn";

const FilterSection = ({ product }) => {
  return (
    <>
      <div className="bg-maingray lg:rounded-20 my-3 flex items-stretch justify-center rounded-lg p-2 lg:p-4 ">
        <div className="rounded-20 bg-lightgray relative me-3 mt-1 hidden px-5 pt-7 text-center xl:block">
          <div className="absolute -top-3.5 left-5">
            <ShowAllBtn />
          </div>
          <div className="bg-maingray mx-auto -mt-9 w-fit rounded-b-xl px-3 pb-1 text-lg font-bold text-secone ">
            عروض اول السنة
          </div>
          <div className="mt-2 flex max-w-sm gap-5">
            <div className="w-1/3  ">
              <h2 className="mb-1 whitespace-nowrap text-center text-sm font-bold text-red-600">
                عروض العطور
              </h2>
              <div className="h-[100px] bg-primery"></div>
              <h3 className=" my-1.5 text-xs font-bold leading-tight">
                {product.title}
                {product.title}
              </h3>
              <div>
                <p className="text-lg font-bold text-black">
                  {product.offerPrice}
                  <span className="ms-0.5">ر.س</span>
                </p>
                <p className="old_price relative mx-auto w-fit font-medium text-[#FF3E3E]">
                  {product.originalPrice}
                  <span className="ms-0.5 ">ر.س</span>
                </p>
              </div>
            </div>
            <div className="w-1/3  ">
              <h2 className="mb-1 whitespace-nowrap text-center text-sm font-bold text-red-600">
                عروض الالكترونيات
              </h2>
              <div className="h-[100px] bg-primery"></div>
              <h3 className=" my-1.5 text-xs font-bold leading-tight">
                {product.title}
                {product.title}
              </h3>
              <div>
                <p className="text-lg font-bold text-black">
                  {product.offerPrice}
                  <span className="ms-0.5">ر.س</span>
                </p>
                <p className="old_price relative mx-auto w-fit font-medium text-[#FF3E3E]">
                  {product.originalPrice}
                  <span className="ms-0.5 ">ر.س</span>
                </p>
              </div>
            </div>
            <div className="w-1/3  ">
              <h2 className="mb-1 whitespace-nowrap text-center text-sm font-bold text-red-600">
                عروض الاطفال
              </h2>
              <div className="h-[100px] bg-primery"></div>
              <h3 className=" my-1.5 text-xs font-bold leading-tight">
                {product.title}
                {product.title}
              </h3>
              <div>
                <p className="text-lg font-bold text-black">
                  {product.offerPrice}
                  <span className="ms-0.5">ر.س</span>
                </p>
                <p className="old_price relative mx-auto w-fit font-medium text-[#FF3E3E]">
                  {product.originalPrice}
                  <span className="ms-0.5 ">ر.س</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-1 items-center gap-2 lg:gap-3">
          <div className="h-full w-1/4 ">
            <Link href={"/"}>
              <Image src={two} alt="" className="w-full object-cover" />
            </Link>
          </div>
          <div className="flex h-full w-1/4 flex-col justify-between gap-2 lg:gap-3">
            <Link href={"/"}>
              <Image src={three} alt="" className="w-full object-cover" />
            </Link>
            <Link href={"/"}>
              <Image src={one} alt="" className="w-full object-cover" />
            </Link>
          </div>
          <div className="h-full w-1/4 ">
            <Link href={"/"}>
              <Image src={six} alt="" className="w-full object-cover" />
            </Link>
          </div>
          <div className="flex h-full w-1/4 flex-col justify-between gap-2 lg:gap-3">
            <Link href={"/"}>
              <Image src={four} alt="" className="w-full object-cover" />
            </Link>
            <Link href={"/"}>
              <Image src={five} alt="" className="w-full object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterSection;
