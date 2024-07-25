import Image from "next/image";
import Rating from "../common/Rating";
import Stars2 from "@/components/common/Stars2";
const WideProductCard = ({ product, multiSubSection,btnBg="#383838",btnHovBg="#828282" }) => {
  return (
    <div
      className={
        "product-card flex !h-[232px] !w-full flex-col !border-none bg-white !p-0 md:!h-fit"
      }
    >
      {/* image */}
      <div className="product-image-container relative mx-auto mt-2 !h-[220px] !w-fit overflow-hidden rounded-xl !border-none !bg-transparent !p-0 lg:rounded-13">
        <Image
          unoptimized
          loading="lazy"
          src={product.img}
          alt=""
          className="!h-full w-fit transition-all duration-500 group-hover:scale-125"
        />
      </div>

      {/* title */}
      <div className="flex flex-wrap items-center justify-between">
        <div className="md:mt-2">
          <h3 className=" flex text-[9px] font-[700] text-[#828282] max-md:max-w-[200px] md:text-[12px] xl:text-[16px] 2xl:w-fit">
            برادا نظارة شمسية للنساء من برادا مونوكروم PR 15WS
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <p className="relative ml-0.5 w-fit text-[11px] font-[700] text-black md:mb-[5px] md:text-[16px]">
                {product.originalPrice}
                <span className="ms-0.5">ر.س</span>
              </p>
              <div className="block lg:hidden">
                <Stars2 measures={[9, 9]} stars={product.stars} />
              </div>
              <div className="hidden lg:block">
                <Stars2 stars={product.stars} measures={[13, 13]} />
              </div>
              <p className="mt-[1px] text-[11px] font-[700] text-[#F39406] md:text-[15px]">
                {product.stars}
              </p>
              <p className="mt-[1px] text-[11px] font-[700] text-[#838383] md:text-[15px]">
                ({product.reviews})
              </p>
            </div>
          </div>
        </div>
        <button className={`flex h-[19px] w-[64px] items-center justify-center gap-0.5 ${btnBg} transition-all ${btnHovBg} md:h-[33px] md:w-[120px] md:gap-3 xl:w-[184px]`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 18 18"
            fill="none"
            className="hidden lg:block"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.57px"
            height="8.57px"
            viewBox="0 0 18 18"
            fill="none"
            className="block lg:hidden"
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
          <p className="flex text-[6.43px] font-[700] text-white md:text-[8px] xl:text-[14px]">
            أضف إلى السلة
          </p>
        </button>
      </div>
    </div>
  );
};
export default WideProductCard;
