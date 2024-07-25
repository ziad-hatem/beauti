"use client";
import ShowAllBtn from "@/components/common/ShowAllBtn";
import CardsSlider from "@/components/common/CardsSlider";

const SliderSection = ({ headTitle, products, multiSubSection }) => {
  return (
    <section className="bg-maingray lg:rounded-20 my-3 w-full rounded-lg p-1 lg:p-4">
      <div className="flex items-center justify-between px-1 pt-1.5 lg:px-0 lg:pt-0">
        <h2 className="text-sm font-bold text-secone lg:text-lg ">
          {headTitle}
        </h2>
        <ShowAllBtn />
      </div>
      <div className="slider-container mt-4">
        <CardsSlider products={products} multiSubSection={multiSubSection} />
      </div>
    </section>
  );
};
export default SliderSection;
