import Image from "next/image";
import Link from "next/link";
import Rating from "../common/Rating";
import VerifiedBeauty from "./filter/VerifiedBeauty";
import { formatNumberInArabic } from "@/libs/formatNumber";
const ProductCard = ({ product, multiSubSection, classes }) => {
  return (
    <div className={"product-card flex h-full flex-col bg-white " + classes}>
      {/* first row tag an percent */}
      <div className="top-bar mb-2 flex items-center justify-between">
        {multiSubSection ? (
          <h3 className="section mx-auto">{product.subSection}</h3>
        ) : (
          <>
            <h3 className="section">{product.tag}</h3>
            <span dir="ltr" className="offer">
              {"- "}
              {product.cutPercent}
              {"%"}
            </span>
          </>
        )}
      </div>

      {/* image */}
      <div className="product-image-container relative mx-auto overflow-hidden rounded-xl lg:rounded-13">
        <Image
          src={product.img}
          alt=""
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="transition-all duration-500 group-hover:scale-125"
        />

        <div className="card-rating-container flex items-center justify-between text-[8px] lg:text-sm">
          {/* <div className="flex items-center gap-1 lg:gap-2 ">
          <span className="flex gap-1 font-bold  text-[#F39406] lg:items-center">
            <div className="w-[7px] lg:w-auto">
              <svg
                className="w-full lg:mb-0.5"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 2"
                  d="M4.81969 1.26285C5.3025 0.245719 6.6975 0.245717 7.18031 1.26285L8.01474 3.02071C8.20646 3.42461 8.57707 3.70456 9.00578 3.76933L10.8716 4.05122C11.9512 4.21432 12.3823 5.59373 11.6011 6.38545L10.251 7.75375C9.94073 8.06815 9.79917 8.52112 9.87241 8.96505L10.1911 10.8971C10.3755 12.0151 9.24697 12.8676 8.28134 12.3398L6.6125 11.4276C6.22905 11.218 5.77095 11.218 5.3875 11.4276L3.71866 12.3398C2.75304 12.8676 1.62445 12.0151 1.80887 10.8971L2.12759 8.96505C2.20083 8.52112 2.05927 8.06815 1.74905 7.75375L0.398925 6.38545C-0.38228 5.59373 0.0487969 4.21432 1.1284 4.05122L2.99422 3.76933C3.42293 3.70456 3.79354 3.42461 3.98526 3.02071L4.81969 1.26285Z"
                  fill="#F39406"
                />
              </svg>
            </div>
            {product.stars}
          </span>

          <span className="flex items-center gap-1 font-bold text-sectwo">
            <span>({product.reviews})</span>
            تقييم
          </span>
        </div> */}
          <Rating stars={product.stars} reviews={product.reviews} />
        </div>
        <div className="card-heart">
          <svg
            width="12"
            height="11"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              id="Vector"
              d="M15.0333 4.43668C16.0667 4.43668 16.9044 5.27441 16.9044 6.30779M10.3556 3.69061L10.9965 3.03335C12.9901 0.988886 16.2223 0.988884 18.2159 3.03334C20.156 5.0229 20.2156 8.22924 18.3509 10.2932L12.9936 16.223C11.5703 17.7983 9.14078 17.7983 7.71754 16.223L2.36023 10.2932C0.495532 8.22927 0.555143 5.02292 2.49521 3.03336C4.48881 0.988896 7.72107 0.988898 9.71467 3.03336L10.3556 3.69061Z"
              stroke="#F39406"
              strokeWidth="1.98118"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* title */}
      <h3 className="product-name">
        <Link href={`/product/${product.id}`}>
          {product.title.length > 20
            ? product.title.substring(0, 45) + "..."
            : product.title}
        </Link>
      </h3>

      {/* rating and loyality */}

      {/* price and cart */}
      <div className="flex items-center justify-between ">
        <div>
          <p className="price">
            {formatNumberInArabic(product.offerPrice)}
            <span className="ms-0.5">ر.س</span>
          </p>
          <p className="old_price relative w-fit text-[8px] font-medium text-[#FF3E3E] lg:text-sm">
            {formatNumberInArabic(product.originalPrice)}
            <span className="ms-0.5 ">ر.س</span>
          </p>
        </div>
        <button className="add-to-cart-button flex items-center justify-center rounded-full bg-primery font-bold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clipPath="url(#clip0_1_13)">
              <path
                d="M9 9.75V14.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 12L6.75 12"
                stroke="white"
                strokeWidth="1.5"
                strokewinecap="round"
                strokewinejoin="round"
              />
              <path
                d="M6.05166 16.5H11.9484C13.3294 16.5 14.532 15.5572 14.8617 14.2161L16.3365 8.21611C16.8013 6.32556 15.3701 4.5 13.4233 4.5H4.57676C2.62992 4.5 1.19876 6.32558 1.66349 8.21613L3.13838 14.2161C3.46805 15.5572 4.67064 16.5 6.05166 16.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25 7.5H15.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.74982 1.5L4.49982 4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.2498 1.5L13.4998 4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_13">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          أضف للسلة
          {/* <span className="hidden lg:block">أضف للسلة</span> */}
        </button>
      </div>

      {/* dicount code */}
      <div className="flex items-center justify-start gap-1 ">
        <div className="w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.69"
            height="9.69"
            viewBox="0 0 18 19"
            fill="none"
            className="h-full w-full"
          >
            <path
              d="M1.5 13.25C1.5 14.9069 2.84315 16.25 4.5 16.25H13.5C15.1569 16.25 16.5 14.9069 16.5 13.25V12.5C16.5 12.0858 16.155 11.7622 15.7636 11.6267C14.8826 11.3217 14.25 10.4847 14.25 9.5C14.25 8.51527 14.8826 7.67829 15.7636 7.37328C16.155 7.23776 16.5 6.91421 16.5 6.5V5.75C16.5 4.09315 15.1569 2.75 13.5 2.75H4.5C2.84315 2.75 1.5 4.09315 1.5 5.75V6.5C1.5 6.91421 1.845 7.23776 2.23642 7.37328C3.1174 7.67829 3.75 8.51527 3.75 9.5C3.75 10.4847 3.1174 11.3217 2.23642 11.6267C1.845 11.7622 1.5 12.0858 1.5 12.5V13.25Z"
              stroke="#F39406"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 7.25C7.5 7.66421 7.16421 8 6.75 8C6.33579 8 6 7.66421 6 7.25C6 6.83579 6.33579 6.5 6.75 6.5C7.16421 6.5 7.5 6.83579 7.5 7.25Z"
              fill="#F39406"
            />
            <path
              d="M12 11.75C12 12.1642 11.6642 12.5 11.25 12.5C10.8358 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.8358 11 11.25 11C11.6642 11 12 11.3358 12 11.75Z"
              fill="#F39406"
            />
            <path
              d="M11.25 7.25L6.75 11.75"
              stroke="#F39406"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="coupon-container text-secthree lg:text-xs">
          <span className="coupon text-[9px] font-bold">
            كود الخصم ({product.discountCode}){" "}
            <span className="green">
              {product.discountCodePercent}
              {"%"}
              {"-"}
            </span>
          </span>
        </p>
        <div></div>
      </div>
      <div className="points flex items-center justify-between">
        <span className="offer-code">{product.loyality}+نقطة</span>
        <VerifiedBeauty />
      </div>
    </div>
  );
};
export default ProductCard;
