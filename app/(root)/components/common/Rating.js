const Rating = ({
  stars,
  reviews,
  reviewsClasses,
  className,
  color = "#F39406",
}) => {
  return (
    <div className={`card-rating flex items-center gap-1 ${className}`}>
      <span className={`flex gap-1 font-bold text-[${color}] lg:items-center`}>
        <div className="w-[7px] lg:w-auto">
          <svg
            className="w-full lg:mb-0.5"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill={`${color ? color : "none"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 2"
              d="M4.81969 1.26285C5.3025 0.245719 6.6975 0.245717 7.18031 1.26285L8.01474 3.02071C8.20646 3.42461 8.57707 3.70456 9.00578 3.76933L10.8716 4.05122C11.9512 4.21432 12.3823 5.59373 11.6011 6.38545L10.251 7.75375C9.94073 8.06815 9.79917 8.52112 9.87241 8.96505L10.1911 10.8971C10.3755 12.0151 9.24697 12.8676 8.28134 12.3398L6.6125 11.4276C6.22905 11.218 5.77095 11.218 5.3875 11.4276L3.71866 12.3398C2.75304 12.8676 1.62445 12.0151 1.80887 10.8971L2.12759 8.96505C2.20083 8.52112 2.05927 8.06815 1.74905 7.75375L0.398925 6.38545C-0.38228 5.59373 0.0487969 4.21432 1.1284 4.05122L2.99422 3.76933C3.42293 3.70456 3.79354 3.42461 3.98526 3.02071L4.81969 1.26285Z"
              fill={color}
            />
          </svg>
        </div>
        {stars}
      </span>

      <span
        className={`flex items-center gap-1 font-bold text-sectwo ${reviewsClasses}`}
      >
        ({reviews})
      </span>
    </div>
  );
};
export default Rating;
