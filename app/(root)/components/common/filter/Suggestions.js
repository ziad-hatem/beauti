"use client";
import ProductRow from "@/components/Home/ProductRow";
import { useState } from "react";

const Suggestions = ({ products = null }) => {
  const [showMore, setShowMore] = useState(false);
  if(products == null){
    return;
  }else{
    return (
      <>
        <div
          className={`${
            showMore ? "h-auto" : "h-[310px]"
          } flex flex-col gap-2 overflow-hidden py-1.5`}
        >
          {products.map((product) => (
            <ProductRow key={product.title} product={product} />
          ))}
        </div>
        <button
          className="mx-auto mt-2 block text-sm font-medium text-sectwo hover:text-secone"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "عرض أقل" : "عرض المزيد"}
        </button>
      </>
    );
  }
};
export default Suggestions;
