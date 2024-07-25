import Image from "next/image";
import Stars from "../common/Stars";

const SingleReviews = ({ singleReviews }) => {
  return (
    <div className="mb-6 flex flex-col  gap-3 lg:mb-0">
      {singleReviews.map((review) => (
        <div key={review.name} className="flex gap-6 lg:min-h-[185px]">
          <div className="mb-auto hidden aspect-square w-14 shrink-0 overflow-hidden rounded-full lg:block">
            <Image src={review.img} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              {/* name and date */}
              <div className="flex items-center gap-3">
                <div className="mb-auto block aspect-square w-14 shrink-0 overflow-hidden rounded-full lg:hidden">
                  <Image src={review.img} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-4 lg:gap-8">
                    <h3 className="text-sm font-bold leading-6 text-[#1D2939] lg:text-lg lg:font-medium">
                      {review.name}
                    </h3>
                    <span className="text-xs text-[#4F547B]">
                      {review.date}
                    </span>
                  </div>
                  {/* stars */}
                  <Stars starsNumber={review.stars} className={"mt-2 gap-1"} />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-col">
                <h4 className="mt-4 font-medium text-[#1D2939]">
                  {review.product}
                </h4>
                <p className="mt-2 text-[#667085] lg:leading-7">{review.desc}</p>
              </div>
            </div>
            {/* like and comment */}
            <div className="mt-1 flex items-center gap-3">
              <span className="cursor-pointer text-sm text-[#D94A27]">
                الرد
              </span>
              <span className="flex cursor-pointer items-center gap-0.5 text-sm text-[#667085]">
                <span>إعجاب</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                  >
                    <path
                      d="M11.8278 10.4108L9.76112 11.7108C9.49446 11.9274 8.89446 12.0358 8.49446 12.0358H5.96112C5.16112 12.0358 4.29446 11.5483 4.09446 10.8983L2.49446 6.94411C2.16112 6.18578 2.76112 5.53578 3.76112 5.53578H6.42779C6.82779 5.53578 7.16112 5.26494 7.09446 4.88578L6.76112 3.15244C6.62779 2.66494 7.02779 2.12328 7.62779 1.96078C8.16112 1.79828 8.82779 2.01494 9.09446 2.33994L11.8278 5.64411"
                      stroke="#667085"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M15.2278 10.4107V5.10241C15.2278 4.34408 14.8278 4.07324 13.8944 4.07324H13.2278C12.2944 4.07324 11.8944 4.34408 11.8944 5.10241V10.4107C11.8944 11.1691 12.2944 11.4399 13.2278 11.4399H13.8944C14.8278 11.4399 15.2278 11.1691 15.2278 10.4107Z"
                      stroke="#667085"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SingleReviews;
