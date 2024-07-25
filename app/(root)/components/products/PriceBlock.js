const PriceBlock = ({ product, offerClasses, originalClasses }) => {
  return (
    <>
      <p className={` font-bold text-secone text-lg lg:text-3xl ${offerClasses}`}>
        {product.offerPrice + "رس"}
      </p>
      <p className={` text-black/50 lg:text-xl ${originalClasses}`}>
        <span className="line-through">{product.originalPrice}</span>{" "}
        <span className="font-bold">رس</span>
      </p>
    </>
  );
};
export default PriceBlock;
