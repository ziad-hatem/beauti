import ProductRowWithRating from "./ProductRowWithRating";

const OffersBlock = ({ title, products }) => {
  return (
    <div>
      <h4 className="text-sm font-bold text-[#403C3C]">{title}</h4>
      <div className="bg-lightgray mx-5 my-2.5 h-[1px]"></div>
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <ProductRowWithRating
            key={product.title}
            product={product}
            reviewsClasses={"!text-secthree"}
          />
        ))}
      </div>
    </div>
  );
};
export default OffersBlock;
