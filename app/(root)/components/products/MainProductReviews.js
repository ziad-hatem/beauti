import MainRating from "@/components/products/MainRating";
import Faq from "@/components/products/Faq";
import SingleReviews from "@/components/products/SingleReviews";
const MainProductReviews = ({ reviews }) => {
  return (
    <div className="bg-maingray mt-4 hidden rounded-2xl p-6 lg:block ">
      <h2 className="text-22 mb-6 font-extrabold text-secone">
        مراجعات المنتج
      </h2>
      <div className="flex gap-9 overflow-hidden transition-[height] duration-1000">
        <div className="flex w-full max-w-[480px] shrink-0 flex-col gap-7">
          <MainRating mainRating={reviews.mainRating} />
          <Faq faqQustions={reviews.faq} />
        </div>
        <SingleReviews singleReviews={reviews.singleReviews} />
      </div>
    </div>
  );
};
export default MainProductReviews;
