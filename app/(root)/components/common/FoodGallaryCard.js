import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
// import one from "../../../../public/icons/a1.png";
import two from "../../../../public/icons/a2.png";

const FoodGallaryCard = ({ img, title }) => {
  return (
    <div className="group flex h-full !w-fit flex-col-reverse gap-2 !bg-transparent md:gap-3 ">
      {/* first row tag an percent */}
      <div className="name text-center">
        <h3 className="text-center text-[8px] !font-[500] md:text-[14px]">
          {title}
        </h3>
      </div>

      {/* image */}
      {/* {console.log(img)} */}
      <div className=" relative flex items-center justify-center !overflow-visible rounded-xl !bg-[#F5F5F5] max-lg:!h-[85px] max-lg:w-[85px] lg:h-[170px] lg:!w-[170px]">
        <Image
          src={img}
          loading="lazy"
          unoptimized
          alt=""
          className="relative top-[-10%] !h-auto !w-[80%] mix-blend-multiply transition-all duration-500 lg:!w-[90%]"
        />
      </div>

      {/* title */}
      {/* <h3 className="mt-1 min-h-8 overflow-hidden  text-center  text-[9px] font-bold text-secone hover:text-primery lg:mt-0  lg:text-xs">
        <Link href={`/product/${product.id}`}>
          {product.title.length > 20
            ? product.title.substring(0, 45) + "..."
            : product.title}
        </Link>
      </h3> */}
    </div>
  );
};
export default FoodGallaryCard;
