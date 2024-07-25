import SideVerticalBanner from "./SideVerticalBanner";
import DoubleRowSliderSection from "./DoubleRowSliderSection";

const TwoColLayoutBanner = ({
  sideVerticalBannerTitle,
  sideVerticalBannerBanners,
  doubleRowSliderSectionHeadTitle,
  doubleRowSliderSectionProducts,
  multiSubSection,
  BorderColor,
  blockColor,
}) => {
  return (
    <section className="my-3 flex flex-col items-stretch gap-3 lg:flex-row">
      <div className=" hidden w-[297px] shrink-0 overflow-hidden rounded-20 bg-maingray lg:block">
        <SideVerticalBanner
          title={sideVerticalBannerTitle}
          banner={sideVerticalBannerBanners}
          borderColor={BorderColor}
        />
      </div>
      <div className="w-full rounded-lg bg-maingray lg:min-h-[800px] lg:w-[calc(100%_-_309px)] lg:rounded-20">
        <DoubleRowSliderSection
          headTitle={doubleRowSliderSectionHeadTitle}
          products={doubleRowSliderSectionProducts}
          multiSubSection={multiSubSection}
          blockColor={blockColor}
        />
      </div>
    </section>
  );
};
export default TwoColLayoutBanner;
