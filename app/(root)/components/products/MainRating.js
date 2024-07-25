import Stars from "../common/Stars";

const MainRating = ({ mainRating }) => {
  return (
    <div className="flex gap-5 lg:gap-16 items-center lg:items-start mb-5 lg:mb-0">
      <div className="w-fit ">
        <p className="mx-auto w-fit text-4xl lg:text-[64px] font-bold text-[#333] lg:mb-4">
          {mainRating.totalRating}
        </p>
        <Stars className={"h-5 gap-0.5"} starsNumber={mainRating.totalRating} />
        <p className="lg:mt-2 text-base lg:text-xl leading-5 text-secthree text-center">
          {mainRating.totalCount}
        </p>
      </div>

      <div className="w-full flex flex-col lg:gap-1.5">
        {/* five star */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm lg:text-xl font-bold lg:font-medium text-[#333]">5</span>
          <div className="relative h-1.5 lg:h-2.5 w-full max-w-[120px] lg:max-w-[254px] rounded-full bg-[#D9D9D9]">
            <span
              className="absolute bottom-0 right-0 top-0 rounded-full bg-primery"
              style={{
                width:
                  (mainRating.fiveStar / mainRating.totalCount) * 100 + "%",
              }}
            ></span>
          </div>
          <p className="mx-auto text-xs leading-none lg:text-xl text-sectwo">({mainRating.fiveStar})</p>
        </div>
        {/* four star */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm lg:text-xl font-bold lg:font-medium text-[#333]">4</span>
          <div className="relative h-1.5 lg:h-2.5 w-full max-w-[120px] lg:max-w-[254px] rounded-full bg-[#D9D9D9]">
            <span
              className="absolute bottom-0 right-0 top-0 rounded-full bg-primery"
              style={{
                width:
                  (mainRating.fourStar / mainRating.totalCount) * 100 + "%",
              }}
            ></span>
          </div>
          <p className="mx-auto text-xs leading-none lg:text-xl text-sectwo">({mainRating.fourStar})</p>
        </div>
        {/* three star */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm lg:text-xl font-bold lg:font-medium text-[#333]">3</span>
          <div className="relative h-1.5 lg:h-2.5 w-full max-w-[120px] lg:max-w-[254px] rounded-full bg-[#D9D9D9]">
            <span
              className="absolute bottom-0 right-0 top-0 rounded-full bg-primery"
              style={{
                width:
                  (mainRating.threeStar / mainRating.totalCount) * 100 + "%",
              }}
            ></span>
          </div>
          <p className="mx-auto text-xs leading-none lg:text-xl text-sectwo">
            ({mainRating.threeStar})
          </p>
        </div>
        {/* two star */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm lg:text-xl font-bold lg:font-medium text-[#333]">2</span>
          <div className="relative h-1.5 lg:h-2.5 w-full max-w-[120px] lg:max-w-[254px] rounded-full bg-[#D9D9D9]">
            <span
              className="absolute bottom-0 right-0 top-0 rounded-full bg-primery"
              style={{
                width: (mainRating.twoStar / mainRating.totalCount) * 100 + "%",
              }}
            ></span>
          </div>
          <p className="mx-auto text-xs leading-none lg:text-xl text-sectwo">({mainRating.twoStar})</p>
        </div>
        {/* one star */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm lg:text-xl font-bold lg:font-medium text-[#333]">1</span>
          <div className="relative h-1.5 lg:h-2.5 w-full max-w-[120px] lg:max-w-[254px] rounded-full bg-[#D9D9D9]">
            <span
              className="absolute bottom-0 right-0 top-0 rounded-full bg-primery"
              style={{
                width: (mainRating.oneStar / mainRating.totalCount) * 100 + "%",
              }}
            ></span>
          </div>
          <p className="mx-auto text-xs leading-none lg:text-xl text-sectwo">({mainRating.oneStar})</p>
        </div>
      </div>
    </div>
  );
};
export default MainRating;
