import TopHead from "./TopHead";
import MainHead from "./MainHead";
import BottomHead from "./BottomHead";
import SearchBar from "./SearchBar";
import ChangeLocationMenu from "./ChangeLocationMenu";
import MobileSideMenu from "./MobileSideMenu";

const Header = () => {
  return (
    <header className="relative isolate z-50 w-full bg-maingray pt-1 text-center lg:pt-2.5">
      <div className="container z-20 mx-auto px-3 xl:px-0 ">
        <div className="hidden lg:block">
          <TopHead />
        </div>
        <MainHead />
      </div>
      <div className="container mx-auto px-3 lg:-z-[5] xl:px-0 ">
        <BottomHead />
      </div>
      <div className="container relative z-20 mx-auto px-3 xl:px-0 ">
        <SearchBar className={"flex lg:hidden"} />
      </div>
      <div className="container relative  mx-auto px-3 pb-2 lg:hidden xl:px-0">
        <TopHead />
      </div>
      <ChangeLocationMenu />
      <MobileSideMenu />
    </header>
  );
};
export default Header;
