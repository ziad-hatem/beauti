import SideVerticalSlider from "./SideVerticalSlider";
import DetailedProductSlider from "./DetailedProductSlider";

const TwoColLayoutSlider = ({
  sideVerticalSliderHeadTitle,
  sideVerticalSliderProducts,
  detailedProductSliderHeadTitle,
  detailedProductSliderProducts,
}) => {
  return (
    <section className="my-3 flex max-h-[535px] flex-col items-stretch gap-3 xl:flex-row">
      <div className="bg-maingray rounded-20 hidden w-[297px] shrink-0 overflow-hidden xl:block">
        <SideVerticalSlider
          headTitle={sideVerticalSliderHeadTitle}
          products={sideVerticalSliderProducts}
        />
      </div>
      <div className="bg-maingray lg:rounded-20 rounded-lg xl:w-[calc(100%_-_309px)] ">
        {/* <div className="h-9 w-full rounded-t-[20px] bg-lime-500 text-center text-2xl font-bold tracking-wide text-white">
          waiting ...
        </div> */}
        <div className="h-[calc(100%_-_36px)] p-1 lg:p-4">
          <DetailedProductSlider
            headTitle={detailedProductSliderHeadTitle}
            products={detailedProductSliderProducts}
          />
        </div>
      </div>
    </section>
  );
};
export default TwoColLayoutSlider;
