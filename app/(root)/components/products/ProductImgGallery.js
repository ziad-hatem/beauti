"use client";
import ProductImgsSlider from "@/components/products/ProductImgsSlider";
import CartBlock from "@/components/products/CartBlock";
import { mainContext } from "@/contexts/ContextProvider";
import { useContext } from "react";

const ProductImgGallery = ({ product }) => {
  const { showCartBlock } = useContext(mainContext);
  return (
    <div className="relative mx-auto w-full shrink-0 max-w-md lg:max-w-none lg:w-[448px]">
      {showCartBlock ? (
        <CartBlock product={product} quantity={5} />
      ) : (
        <ProductImgsSlider imgs={product.imgs} />
      )}
    </div>
  );
};
export default ProductImgGallery;
