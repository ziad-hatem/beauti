import SearchSelector from "./SearchSelector";
import SearchInput from "./SearchInput";

const SearchBar = ({ className }) => {
  return (
    <div
      className={`my-1.5 flex-1 items-center justify-start rounded-full border-2 border-primery bg-white  text-10 font-semibold text-sectwo lg:my-0 lg:border-[3px] lg:text-sm ${className}`}
    >
      <SearchSelector />
      <div className="ms-1.5 h-[19px] w-[1px] bg-[#999] drop-shadow-[0px_0px_0.097px_rgba(0,_0,_0,_0.25)] hidden lg:block"></div>
      <SearchInput />
    </div>
  );
};
export default SearchBar;
