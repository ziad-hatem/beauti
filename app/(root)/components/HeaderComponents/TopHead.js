import LangAndCountry from "./LangAndCountry";
import LocationMenu from "./LocationMenu";

const TopHead = () => {
  return (
    <div className="relative flex items-center justify-between   text-10 font-medium text-secone sm:text-base">
      <LocationMenu />

      <LangAndCountry />
    </div>
  );
};
export default TopHead;
