import Link from "next/link";
import DescDetailsReviewsAccordion from "@/components/products/DescDetailsReviewsAccordion";
import ProductTags from "@/components/products/ProductTags";
import LikesShareBookmark from "@/components/products/LikesShareBookmark";
import ProductImgsSlider from "@/components/products/ProductImgsSlider";
import TabbyAndTamara from "@/components/products/TabbyAndTamara";
import PriceBlock from "@/components/products/PriceBlock";
import Rating from "@/components/common/Rating";
import Quantity from "@/components/common/Quantity";
import CartBtn from "@/components/Home/CartBtn";
import ProductImgGallery from "@/components/products/ProductImgGallery";
import SuggestedPackage from "@/components/products/SuggestedPackage";
import Image from "next/image";

const MainProductDesc = ({ packageOffer, product }) => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div className="mx-auto block w-full max-w-xs md:max-w-md lg:hidden">
        <ProductTags code={"WAR52466"} />
      </div>
      {/* imgs gallery */}
      <ProductImgGallery product={product} />

      {/* description */}
      <div className="bg-maingray flex w-full flex-col gap-3 rounded-2xl px-3 py-3 lg:gap-5 lg:px-6 lg:py-6">
        {/* product tags */}
        <div className="mb-3 hidden lg:block">
          <ProductTags code={"WAR52466"} />
        </div>
        {/* title */}
        <div className="flex items-start gap-8">
          <h2 className="lg:text-22 font-bold text-secone">{product.title}</h2>
          <div className="hidden lg:block">
            <LikesShareBookmark likes={product.likes} />
          </div>
        </div>
        {/* brand */}
        <div className="flex items-center justify-between gap-3 text-xs font-medium text-secthree md:text-base lg:text-lg">
          <p className="">
            <span>الماركة :</span>
            <span className="text-primery">{product.brand}</span>
          </p>
          <Link href={"#"} className="transition-all hover:underline">
            <span> منتجات مشابهة من</span>{" "}
            <span className="text-primery">{product.brand}</span>
          </Link>
        </div>
        {/* line */}
        <hr className="hidden  h-0.5 bg-[#E0E0E0] lg:block" />
        {/* price */}
        <div className="flex items-end gap-4">
          <div>
            <PriceBlock product={product} />
          </div>
          <div>
            <Rating
              reviews={product.reviews}
              stars={product.stars}
              className={"text-xs lg:text-base"}
            />
            {/* recommendation */}
            <p className="mt-1 text-xs font-medium text-secthree lg:mt-2 lg:text-lg">
              <span dir="ltr" className="font-bold text-[#3E9242]">
                {product.recommendation + "%"}
              </span>{" "}
              <span>من العملاء ينصحون بهذا المنتج</span>
            </p>
          </div>
        </div>
        {/* color picker */}
        <div>
          <h3 className="text-xs font-bold text-sectwo lg:text-lg">
            اختر اللون
          </h3>
          <div className="mt-4 flex items-center gap-2">
            {product.colors.map((color) => (
              <span
                key={color}
                className="aspect-square w-7 cursor-pointer rounded-xl lg:w-8"
                style={{ backgroundColor: `${color}` }}
              ></span>
            ))}
          </div>
        </div>
        {/* size picker */}
        <div>
          <h3 className="text-xs font-bold text-sectwo lg:text-lg">
            اختر الحجم
          </h3>
          <div className="mt-4 flex items-center gap-1.5 sm:gap-2">
            {product.sizes.map((size, i) => (
              <label
                key={size}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-1 py-2 text-xs font-medium text-sectwo sm:px-2.5 lg:text-sm lg:font-bold"
              >
                <input
                  type="radio"
                  name="size"
                  className="peer hidden"
                  defaultChecked={i === 0}
                />
                <span className="peer-checked:text-primery">{size}</span>
                <div className="aspect-square w-4 shrink-0 rounded-full border border-sectwo outline -outline-offset-[4px] outline-white peer-checked:border-primery peer-checked:bg-primery"></div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-5 ">
          {/* tabby and tamara */}
          <TabbyAndTamara className={"mt-3 flex"} />
          {/* quantity and add to cart and last pieces */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-10  flex items-center gap-2 whitespace-nowrap font-bold text-secthree sm:text-base">
              <span className="aspect-square shrink-0 md:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="h-full w-full"
                >
                  <g clipPath="url(#clip0_21_1567)">
                    <path
                      d="M2.25 1.5C2.25 1.08579 1.91421 0.75 1.5 0.75C1.08579 0.75 0.75 1.08579 0.75 1.5H2.25ZM16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5C17.25 16.0858 16.9142 15.75 16.5 15.75V17.25ZM11.625 10.5C11.2108 10.5 10.875 10.8358 10.875 11.25C10.875 11.6642 11.2108 12 11.625 12V10.5ZM13.7073 10.8354L13.0365 10.5L13.7073 10.8354ZM14.9208 10.0854C15.1061 9.71493 14.9559 9.26442 14.5854 9.07918C14.2149 8.89394 13.7644 9.04411 13.5792 9.41459L14.9208 10.0854ZM12.4978 11.2862L12.909 11.9134L14.1634 11.091L13.7522 10.4638L12.4978 11.2862ZM11.0733 7.74536L10.4461 8.15655V8.15655L11.0733 7.74536ZM9.80447 7.76818L9.16286 7.3798L9.80447 7.76818ZM8.37334 10.1325L7.73173 9.74408L8.37334 10.1325ZM7.07283 10.1023L6.41394 10.4606L7.07283 10.1023ZM5.90889 6.39173C5.71103 6.02783 5.25562 5.89324 4.89173 6.09111C4.52783 6.28897 4.39324 6.74438 4.59111 7.10827L5.90889 6.39173ZM0.75 1.5V13.5H2.25V1.5H0.75ZM4.5 17.25H16.5V15.75H4.5V17.25ZM0.75 13.5C0.75 15.5711 2.42893 17.25 4.5 17.25V15.75C3.25736 15.75 2.25 14.7426 2.25 13.5H0.75ZM11.625 12H13.0365V10.5H11.625V12ZM14.3781 11.1708L14.9208 10.0854L13.5792 9.41459L13.0365 10.5L14.3781 11.1708ZM13.0365 12C13.6046 12 14.124 11.679 14.3781 11.1708L13.0365 10.5V12ZM13.7522 10.4638L11.7005 7.33417L10.4461 8.15655L12.4978 11.2862L13.7522 10.4638ZM9.16286 7.3798L7.73173 9.74408L9.01495 10.5208L10.4461 8.15655L9.16286 7.3798ZM7.73173 9.74408L5.90889 6.39173L4.59111 7.10827L6.41394 10.4606L7.73173 9.74408ZM7.73173 9.74408H7.73173L6.41394 10.4606C6.96708 11.4779 8.41533 11.5114 9.01495 10.5208L7.73173 9.74408ZM11.7005 7.33417C11.0955 6.41116 9.73438 6.43564 9.16286 7.3798L10.4461 8.15655L11.7005 7.33417Z"
                      fill="#F39406"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_1567">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                تبقى {product.remainingPieces} قطع{" "}
                <span className="hidden xs:inline">فقط</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="min-w-20">
                <Quantity />
              </div>
              <CartBtn
                className={
                  "!text-10 grid h-8 w-fit min-w-10 !rounded-lg px-2 xs:!text-base sm:min-h-[43px] sm:px-4"
                }
                textClasses={"whitespace-nowrap"}
                inProductPage={true}
              />
            </div>
          </div>
          {/* ocord here */}
          <DescDetailsReviewsAccordion product={product} />
          {/* delivery mobile */}
          <div className="mt-3 flex gap-2 text-xs xl:hidden">
            <span className="aspect-square shrink-0 pt-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <circle
                  cx="7.5"
                  cy="6.26624"
                  r="1.5"
                  stroke="#F39406"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.0012 10.7662C12.4534 9.77569 12.75 8.75075 12.75 7.76624C12.75 3.6241 10.3995 1.76624 7.5 1.76624C4.60051 1.76624 2.25 3.6241 2.25 7.76624C2.25 10.227 4.10294 12.9404 5.60721 14.7378C6.61274 15.9392 8.38726 15.9392 9.3928 14.7378C9.51009 14.5976 9.62951 14.4519 9.75 14.3012M12.0012 10.7662H11.25C10.4216 10.7662 9.75 11.4378 9.75 12.2662V14.3012M12.0012 10.7662H14.25C15.0784 10.7662 15.75 11.4378 15.75 12.2662V15.2662C15.75 16.0947 15.0784 16.7662 14.25 16.7662H11.25C10.4216 16.7662 9.75 16.0947 9.75 15.2662V14.3012"
                  stroke="#F39406"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.5 12.2662L12 12.2662"
                  stroke="#F39406"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className=" font-bold text-sectwo ">
                توصيل سريع للمنزل في الرياض
              </h4>
              <p className="mt-1  font-medium text-secthree">
                جاهز للاستلام بين يوم 17 يناير و يوم 18 يناير{" "}
                <Link href={"#"} className="transition-all hover:text-primery">
                  تفاصيل
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* delivery details */}
        <div className="boreder-lightgray  hidden flex-col gap-[18px] rounded-2xl border px-6 py-4 lg:flex">
          <div className="flex gap-2">
            <span className="aspect-square w-6 shrink-0 pt-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  x="13.5"
                  y="3.4057"
                  width="9"
                  height="9"
                  rx="2"
                  stroke="#F39406"
                  strokeWidth="1.5"
                />
                <path
                  d="M19 6.4057L17 6.4057"
                  stroke="#F39406"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 9.4057H4.5L10.7622 12.1454C11.7241 12.5662 12.1664 13.6841 11.7528 14.6491V14.6491C11.337 15.6193 10.2136 16.0687 9.24342 15.6529L7.5 14.9057"
                  stroke="#F39406"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.83541 17.7349C2.46493 17.5496 2.01442 17.6998 1.82918 18.0703C1.64394 18.4408 1.79411 18.8913 2.16459 19.0765L2.83541 17.7349ZM11.8354 14.7349L11.1646 14.3995L10.4938 15.7411L11.1646 16.0765L11.8354 14.7349ZM14.2331 16.7723L13.8977 17.4431L14.2331 16.7723ZM16.9164 18.1557H18.5V16.6557H16.9164V18.1557ZM18.5 20.6557H10.3885V22.1557H18.5V20.6557ZM7.14625 19.8903L2.83541 17.7349L2.16459 19.0765L6.47542 21.2319L7.14625 19.8903ZM14.5685 16.1014L11.8354 14.7349L11.1646 16.0765L13.8977 17.4431L14.5685 16.1014ZM10.3885 20.6557C9.26302 20.6557 8.15295 20.3936 7.14625 19.8903L6.47542 21.2319C7.69041 21.8394 9.03015 22.1557 10.3885 22.1557V20.6557ZM19.75 19.4057C19.75 20.0961 19.1904 20.6557 18.5 20.6557V22.1557C20.0188 22.1557 21.25 20.9245 21.25 19.4057H19.75ZM18.5 18.1557C19.1904 18.1557 19.75 18.7153 19.75 19.4057H21.25C21.25 17.8869 20.0188 16.6557 18.5 16.6557V18.1557ZM16.9164 16.6557C16.1014 16.6557 15.2975 16.4659 14.5685 16.1014L13.8977 17.4431C14.835 17.9117 15.8685 18.1557 16.9164 18.1557V16.6557Z"
                  fill="#F39406"
                />
              </svg>
            </span>
            <div>
              <h4 className="text-[17px] font-bold ">محطة الاستلام</h4>
              <p className="mt-1 text-lg font-medium text-sectwo">
                جاهز للاستلام بين يوم 17 يناير و يوم 18 يناير{" "}
                <Link href={"#"} className="transition-all hover:text-primery">
                  تفاصيل
                </Link>
              </p>
            </div>
          </div>
          <hr className=" bg-[#E0E0E0]" />
          <div className="flex gap-2">
            <span className="aspect-square w-6 shrink-0 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M14.5 19.4057V7.4057M14.5 19.4057H16.5M14.5 19.4057H9.5M14.5 7.4057C14.5 5.19656 12.7091 3.4057 10.5 3.4057H6.5C4.29086 3.4057 2.5 5.19656 2.5 7.4057V15.4057C2.5 17.2709 3.77667 18.838 5.50384 19.2807M14.5 7.4057H17.7091C18.2172 7.4057 18.7063 7.5991 19.077 7.94663L21.8679 10.5631C22.2712 10.9412 22.5 11.4693 22.5 12.0222V17.4057C22.5 18.5103 21.6046 19.4057 20.5 19.4057M20.5 19.4057C20.5 20.5103 19.6046 21.4057 18.5 21.4057C17.3954 21.4057 16.5 20.5103 16.5 19.4057M20.5 19.4057C20.5 18.3011 19.6046 17.4057 18.5 17.4057C17.3954 17.4057 16.5 18.3011 16.5 19.4057M9.5 19.4057C9.5 20.5103 8.60457 21.4057 7.5 21.4057C6.39543 21.4057 5.5 20.5103 5.5 19.4057C5.5 19.3637 5.50129 19.322 5.50384 19.2807M9.5 19.4057C9.5 18.3011 8.60457 17.4057 7.5 17.4057C6.43742 17.4057 5.56838 18.2343 5.50384 19.2807"
                  stroke="#F39406"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 7.9057V11.4057H11"
                  stroke="#F39406"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className="text-[17px] font-bold ">توصيل للمنزل</h4>
              <p className="mt-1 text-lg font-medium text-sectwo">
                جاهز للاستلام بين يوم 17 يناير و يوم 18 يناير{" "}
                <Link href={"#"} className="transition-all hover:text-primery">
                  تفاصيل
                </Link>
              </p>
            </div>
          </div>
          <hr className=" bg-[#E0E0E0]" />
          <div className="flex gap-2">
            <span className="aspect-square w-6 shrink-0 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M14.5 19.4057V7.4057M14.5 19.4057H16.5M14.5 19.4057H9.5M14.5 7.4057C14.5 5.19656 12.7091 3.4057 10.5 3.4057H6.5C4.29086 3.4057 2.5 5.19656 2.5 7.4057V15.4057C2.5 17.2709 3.77667 18.838 5.50384 19.2807M14.5 7.4057H17.7091C18.2172 7.4057 18.7063 7.5991 19.077 7.94663L21.8679 10.5631C22.2712 10.9412 22.5 11.4693 22.5 12.0222V17.4057C22.5 18.5103 21.6046 19.4057 20.5 19.4057M20.5 19.4057C20.5 20.5103 19.6046 21.4057 18.5 21.4057C17.3954 21.4057 16.5 20.5103 16.5 19.4057M20.5 19.4057C20.5 18.3011 19.6046 17.4057 18.5 17.4057C17.3954 17.4057 16.5 18.3011 16.5 19.4057M9.5 19.4057C9.5 20.5103 8.60457 21.4057 7.5 21.4057C6.39543 21.4057 5.5 20.5103 5.5 19.4057C5.5 19.3637 5.50129 19.322 5.50384 19.2807M9.5 19.4057C9.5 18.3011 8.60457 17.4057 7.5 17.4057C6.43742 17.4057 5.56838 18.2343 5.50384 19.2807"
                  stroke="#F39406"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 7.9057V11.4057H11"
                  stroke="#F39406"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className="text-[17px] font-bold ">سياسة الارجاع</h4>
              <p className="mt-1 text-lg font-medium text-sectwo">
                إرجاع المنتج مجانًا خلال 7 أيام بشروط{" "}
                <Link href={"#"} className="transition-all hover:text-primery">
                  تفاصيل
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* suggested package */}
        {/* <div className="rounded-2xl border border-lightgray px-1 py-4 lg:px-5 lg:py-6">
          <div className="flex justify-center gap-0.5 sm:gap-1.5">
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
          </div>

          <div className="mt-6 flex items-center justify-between xs:justify-center xs:gap-2.5 ">
            <p className="text-[9px] font-bold sm:text-base">
              عرض حزمة ثلاثة منتجات فقط ب 152 رس
            </p>
            <CartBtn
              className={"h-8 w-fit !flex-grow-0 !rounded-md px-2.5 lg:h-9"}
              textClasses={"text-10 sm:text-base whitespace-nowrap"}
            />
          </div>
        </div> */}
        <SuggestedPackage packageOffer={packageOffer} />
      </div>
    </div>
  );
};
export default MainProductDesc;
