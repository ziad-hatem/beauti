import CartBtn from "@/components/Home/CartBtn";

const SuggestedPackagePrice = ({ price }) => {
  return (
    <div className="mt-6 flex items-center justify-between xs:justify-center xs:gap-2.5 ">
      <p className="text-[9px] font-bold sm:text-sm">
        عرض حزمة ثلاثة منتجات فقط ب {price} رس
      </p>
      <CartBtn
        className={"h-8 w-fit !flex-grow-0 !rounded-md px-2.5 lg:h-9"}
        textClasses={"text-10 sm:text-base whitespace-nowrap"}
      />
    </div>
  );
};
export default SuggestedPackagePrice;
