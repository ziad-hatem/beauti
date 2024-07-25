import MainProductDesc from "@/components/products/MainProductDesc";
import Breadcrump from "@/components/products/Breadcrump";
import SliderSection from "@/components/Home/SliderSection";
import BannerSlider from "@/components/banners/BannerSlider";
import DoubleBanner from "@/components/banners/DoubleBanner";
import MobileBanner from "@/components/banners/MobileBanner";
import SidePanel from "@/components/products/SidePanel";
import MainProductDetails from "@/components/products/MainProductDetails";
import MainProductReviews from "@/components/products/MainProductReviews";

import {
  banners,
  breadcrumb,
  dailyOffers,
  detailedProductPage,
  mobileBanners,
  offersBlockProducts,
} from "@/data/fake";

const ProductPage = ({ params: { id } }) => {
  return (
    <main className="container mx-auto my-4 px-3 xl:px-0">
      <Breadcrump breadcrumb={breadcrumb} />
      <section className="mt-4 flex flex-col gap-3 xl:flex-row">
        {/* main */}
        <div className="flex-1">
          <MainProductDesc
            packageOffer={offersBlockProducts}
            product={detailedProductPage}
          />
          {/* details */}
          <MainProductDetails details={detailedProductPage.details} />
          {/* reviews */}
          <MainProductReviews reviews={detailedProductPage.reviewsBlock} />
        </div>
        {/* side */}
        <SidePanel detailedProductPage={detailedProductPage} />
      </section>
      {/* sliders and banners section */}
      <section>
        <SliderSection headTitle={"المزيد من رولكس"} products={dailyOffers} />
        <div className="w-full">
          <BannerSlider
            desktopBanners={banners}
            swiperClass={"single-product"}
          />
        </div>
        <SliderSection headTitle={"قد يعجبك"} products={dailyOffers} />
        <SliderSection headTitle={"منتجات مشابهة"} products={dailyOffers} />

        <div className="hidden lg:block">
          <DoubleBanner
            doubleClass={"double-product"}
            rightBanners={banners}
            leftBanners={banners}
          />
        </div>
        <div className="lg:hidden">
          <MobileBanner banners={mobileBanners} />
        </div>

        <SliderSection headTitle={"الأفضل مبيعًا"} products={dailyOffers} />
      </section>
    </main>
  );
};
export default ProductPage;
