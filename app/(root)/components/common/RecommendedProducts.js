/* eslint-disable */
import React, { useEffect, useState } from "react";
import HProductCard from "./HProductCard";
import ProductCard from "./ProductCard";

export default function RecommendedProducts({ products, max = 6 }) {
  const [count, setCount] = useState(max);
  const [mobile, setMobileWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileWidth(window.innerWidth <= 767);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOptionClick = (e) => {
      const selectedOption = document.querySelector("#productsNum .selected");

      if (selectedOption) {
        setCount((+selectedOption.getAttribute("value") + 1) * 6);
      }
    };

    const handleShowAllClick = () => {
      const nextOption = document.querySelector(
        "#productsNum .selected~.option",
      );

      if (nextOption) {
        nextOption.click();
      }
    };

    const options = document.querySelectorAll("#productsNum .option");
    options.forEach((e) => {
      e.addEventListener("click", handleOptionClick);
    });

    const showAllButton = document.querySelector("#showAll");
    showAllButton.addEventListener("click", handleShowAllClick);

    // Clean up event listeners on unmount
    return () => {
      options.forEach((e) => {
        e.removeEventListener("click", handleOptionClick);
      });
      showAllButton.removeEventListener("click", handleShowAllClick);
    };
  }, []);

  const renderProducts = () => {
    let array = [];
    if (!mobile) {
      for (let i = 0; i < count && i < products.length; i++) {
        array.push(<HProductCard product={products[i]} key={i} />);
      }
    } else {
      for (let i = 0; i < count && i < products.length; i++) {
        array.push(
          <ProductCard
            product={products[i]}
            key={i}
            classes={"ProductCard !w-[149px]"}
          />,
        );
      }
    }
    return array;
  };

  return (
    <>
      <div
        className="products-container gray hCards flex max-md:!px-0"
        id="recommendedProductsContainer"
      >
        {renderProducts()}
      </div>
      <button
        className="showAll !mt-[16px] !h-[20px] !w-[63px] max-md:!text-[10px] md:!h-[28px] md:!w-[118px]"
        id="showAll"
      >
        عرض الكل
      </button>
    </>
  );
}
