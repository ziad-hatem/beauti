import Image from "next/image";
import Link from "next/link";

const ThreeProductsPlus = ({ packageOffer }) => {
  return (
    <div className="flex justify-center gap-0.5 sm:gap-1.5">
      {packageOffer.map((product, i) => (
        <div
          key={product.title}
          className="flex items-center gap-0.5 sm:gap-1.5"
        >
          <div className="w-fit">
            <Image
              src={product.imgs[0].src}
              alt=""
              className=" mx-auto rounded-lg  sm:max-w-20"
            />
            <Link href={"#"} className="text-10 whitespace-nowrap sm:text-sm">
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
  );
};
export default ThreeProductsPlus;
