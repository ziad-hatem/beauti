"use client";

import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex h-8 w-full overflow-hidden rounded-lg bg-[#D9D9D9] text-xl font-bold sm:h-[43px]">
      <button
        className="grid w-1/3 place-content-center text-white hover:bg-secthree"
        onClick={() => setQuantity((prev) => prev - 1)}
        disabled={quantity < 2}
      >
        -
      </button>
      <span className="grid w-1/3 place-content-center text-white">
        {quantity}
      </span>
      <button
        className="grid w-1/3 place-content-center text-white hover:bg-secthree"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};
export default Quantity;
