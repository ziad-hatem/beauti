import SideMenuCol from "./SideMenuCol";
import ShowAllBtn from "../../common/ShowAllBtn";
import Image from "next/image";
import Link from "next/link";
import { SlClose } from "react-icons/sl";

const SideMenu = ({
  logos,
  sideMenuThreeColData,
  setShowSideMenu,
  setOpener,
}) => {
  const handleCloseMenu = () => {
    setShowSideMenu(false);
    setOpener("");
  };
  return (
    <div className="bg-maingray rounded-20 absolute inset-0 z-50 flex items-stretch justify-center gap-8 p-12 text-secone">
      {sideMenuThreeColData.map((col, i) => (
        <SideMenuCol key={i + "col"} SideMenuColData={col} />
      ))}

      <div className="group relative hidden w-1/4 flex-col justify-between xl:flex">
        <div>
          <h3 className="select-none text-xl font-semibold transition group-hover:text-primery">
            تسوق حسب الموديل
          </h3>
          <div className="mt-1 h-0.5 w-6/12 bg-sectwo transition-all group-hover:w-11/12 group-hover:bg-primery" />
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="h-[69px] w-[calc(50%_-_8px)] bg-gray-300  outline-1 outline-primery transition-all hover:outline"
            >
              <Link href={logo.href}>
                <Image src={logo.logo} className="mx-auto h-full" alt="" />
              </Link>
            </div>
          ))}
        </div>
        <div className="me-0 ms-auto  w-fit ">
          <ShowAllBtn />
        </div>
        <button
          className="absolute -left-8 -top-8 rounded-full text-2xl text-gray-500 transition hover:text-red-500"
          onClick={handleCloseMenu}
        >
          <SlClose />
        </button>
      </div>
    </div>
  );
};
export default SideMenu;
