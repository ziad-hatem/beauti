import Image from "next/image";
import Stars2 from "../common/Stars2";
import Link from "next/link";
const BigProductCard = ({ product, multiSubSection, className }) => {
  const string = product.description
    ? product.description
    : "هذه كتابة تجريبية لملئ مكان الشرح الخاص بالمنتج";
  return (
    <div
      className={
        "product-card flex !h-full !w-full flex-row !border-none bg-white !p-0 max-lg:mr-4 lg:flex-col "
      }
    >
      {/* image */}
      <div
        className={`product-image-container relative mx-auto overflow-hidden rounded-xl !p-0 max-xl:!m-0 max-xl:border-none max-lg:!bg-transparent max-md:!h-[38.13vw] max-md:!w-[43.75vw] md:!h-[280px] md:!w-[280px] lg:rounded-13 ${className}`}
      >
        <Image
          src={product.img}
          alt=""
          width={100}
          unoptimized
          loading="lazy"
          height={100}
          className="!h-[37.5vw] !w-[37.5vw] !bg-transparent !object-contain transition-all duration-500 group-hover:scale-125 md:!h-[213px] md:!w-[227px]"
        />
      </div>

      {/* title */}

      <div className="max-xl:flex-start flex flex-col max-xl:justify-center max-lg:mr-2 md:!items-center">
        <h3 className="mt-2 w-[208px] overflow-hidden text-ellipsis whitespace-nowrap text-[calc(10px_+_0.6vw)] font-[700] text-black md:w-[208px] md:text-center md:text-[17px]">
          {product.title}
        </h3>
        <h3 className="w-full text-[calc(8px_+_0.6vw)] text-[#363636] md:text-[15px]">
          <p className="hidden w-[180px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap max-lg:block md:w-[269px]">
            {string}
          </p>
          <p className="hidden w-[208px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap md:w-[269px] lg:block">
            {string}
          </p>
          {/* <p className="max-w-full">حقيبة الكمبيوتر المحم...</p> */}
        </h3>

        <div className="mx-auto flex w-full justify-start text-[12px] max-md:flex-col md:gap-5 lg:items-center lg:justify-between xl:gap-0">
          <div className="flex items-center gap-2 max-md:gap-1">
            <p className="text-[rgb(243, 148, 6)] text-[15px] font-[700] md:text-[20px]">
              {4}
            </p>
            <div className="mt-1 hidden max-md:block">
              <Stars2 stars={3.9} measures={[7.5, 7.5]} />
            </div>
            <div className="block max-md:hidden">
              <Stars2 stars={3.9} measures={[12.91, 12.91]} />
            </div>
          </div>
          <h3 className="flex w-fit flex-col justify-center text-[15px] font-bold md:text-[20px] lg:items-center">
            ١٩٩ ر.س
          </h3>
        </div>
        <Link
          href={"/"}
          className="mt-4 flex !h-[18px] !w-[65px] cursor-pointer items-center justify-center !gap-0.5 rounded-full border border-[#000000] max-lg:border-[#CFCFCF] md:hidden"
        >
          <img
            src={"/imgs/womenFashion/eye.svg"}
            className="!h-[5.63px] !w-[8.44px] lg:!h-[8.13px] lg:!w-[12.19px]"
          />
          <p className="text-[8px] font-[400] xl:text-[11px]">نظرة سريعة</p>
        </Link>
      </div>
    </div>
  );
};
export default BigProductCard;
