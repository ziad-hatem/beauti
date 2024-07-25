"use client";
import MainDetails from "@/components/products/MainDetails";
import Overall from "@/components/products/Overall";
import Specs from "@/components/products/Specs";
import { useState } from "react";
const MainProductDetails = ({ details }) => {
  const [showFull, setShowFull] = useState(false);
  const handleClick = () => {
    setShowFull((prev) => !prev);
  };
  return (
    <div className="bg-maingray mt-4 hidden rounded-2xl p-6 lg:block ">
      <h2 className="text-22 mb-6 font-extrabold text-secone">تفاصيل المنتج</h2>
      <div
        className={`flex text-lg ${
          showFull ? "h-auto" : " h-96"
        } gap-12 overflow-hidden transition-[height] duration-1000`}
      >
        <div className="max-w-lg">
          <MainDetails mainDetails={details.mainDetails} />
          <Overall overall={details.overall} />
        </div>
        <Specs specs={details.specs} />
      </div>
      <button
        className="mx-auto mt-8 block text-lg font-semibold text-secone hover:text-primery"
        onClick={handleClick}
      >
        {showFull ? "عرض أقل" : "عرض المزيد"}
      </button>
    </div>
  );
};
export default MainProductDetails;
