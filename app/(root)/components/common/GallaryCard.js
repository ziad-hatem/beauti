import Image from "next/image";
import Link from "next/link";
import Rating from "../common/Rating";
// import one from "../../../../public/icons/a1.png";
import two from "../../../../public/icons/a2.png";

const GallaryCard = ({ img, title }) => {
  return (
    <div className="gallary-card group flex h-full flex-col-reverse">
      {/* first row tag an percent */}
      <div className="name">
        <h3 className=" !font-[500]">{title}</h3>
      </div>

      {/* image */}
      {/* {console.log(img)} */}
      <div className="image relative rounded-xl max-md:overflow-hidden">
        <Image
          src={img}
          loading="lazy"
          unoptimized
          alt=""
          className="mix-blend-multiply transition-all duration-500"
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
export default GallaryCard;
