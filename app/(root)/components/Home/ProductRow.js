import Image from "next/image";
import Link from "next/link";

const ProductRow = ({ product }) => {
  const starsFraction = product.stars;
  const stars = Array.from(
    { length: Math.round(parseFloat(starsFraction)) },
    (_, index) => index + 1,
  );
  return (
    <div className="group ms-0.5 flex items-center gap-4 text-sm">
      <div className="product_card_shadow rounded-20 aspect-square w-[95px] shrink-0 overflow-hidden">
        <Link href={"/"}>
          <Image src={product.img} alt="" />
        </Link>
      </div>
      <div>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-secone group-hover:text-primery">
            {product.title.length > 20
              ? product.title.substring(0, 45) + "..."
              : product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="flex items-center gap-1 font-semibold text-secthree ">
            <span>({product.reviews})</span>
            تقييم
          </span>
          <span className="flex h-3 gap-0.5">
            {stars.map((star, i) => (
              <svg
                key={i + "star"}
                className="mb-0.5"
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
            ))}
          </span>
        </div>
        <p className=" mt-1 text-black">
          {product.offerPrice}
          <span className="ms-0.5">ر.س</span>
        </p>
        <p className="old_price text-10 relative -mt-1.5 w-fit">
          {product.originalPrice}
          <span className="ms-0.5 ">ر.س</span>
        </p>
      </div>
    </div>
  );
};
export default ProductRow;
