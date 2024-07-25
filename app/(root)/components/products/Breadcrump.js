const Breadcrump = ({ breadcrumb }) => {
  return (
    <div>
      <nav
        className="flex w-fit rounded-lg bg-[#FAFAFA] px-3 py-3 text-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex flex-wrap items-center gap-1.5 sm:gap-3.5">
          {breadcrumb.map((link, index) => (
            <li key={link.title} className="inline-flex items-center">
              <div className="flex items-center gap-1.5 sm:gap-3.5">
                {index > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="w-3 sm:w-4"
                  >
                    <path
                      d="M10.5 13.7356L5.5 8.7356L10.5 3.7356"
                      stroke="#A3A9C2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <a
                  href={link.title}
                  className={`inline-flex items-center text-[11px] sm:text-sm ${
                    index === breadcrumb.length - 1
                      ? "font-medium text-[#403C3C]"
                      : "text-sectwo hover:text-primery"
                  } `}
                >
                  {link.title}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
export default Breadcrump;
