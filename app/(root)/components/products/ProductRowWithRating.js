import Image from "next/image";
import Rating from "../common/Rating";

const ProductRowWithRating = ({ product, reviewsClasses }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="aspect-square w-14 shrink-0 overflow-hidden rounded-lg border border-primery">
        <Image src={product.imgs[0].src} alt="" className="object-cover" />
      </div>
      <div>
        <h3 className="text-10 leading-tight">{product.title}</h3>
        <Rating
          stars={product.stars}
          reviews={product.reviews}
          className={`text-15 `}
          reviewsClasses={`${reviewsClasses}`}
        />
      </div>
    </div>
  );
};
export default ProductRowWithRating;
