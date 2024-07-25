import React from "react";
import Image from "next/image";

export default function SimpleCardNoButton({ product, bgColor }) {
  return (
    <div className="cardNoButton">
      <div className="img-container">
        <Image src={product.img} alt={product.title} />
        {/* <span className="love"></span> */}
        {/* <span className="rating"></span> */}
      </div>
      <div
        className={`name`}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <h2>{product.title}</h2>
      </div>
      <div className={`offer`}>
        خصم يصل الى{" "}
        {Math.trunc((1 - product.offerPrice / product.originalPrice) * 100)}%
      </div>
      <div className="static-text">عرض لفترة محدودة</div>
    </div>
  );
}
