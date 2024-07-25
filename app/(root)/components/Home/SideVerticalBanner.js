import Image from "next/image";
import Link from "next/link";

const SideVerticalBanner = ({ title, banner, borderColor }) => {
  return (
    <Link href={"/"} className="relative block h-full w-full overflow-hidden ">
      <Image
        src={banner}
        alt=""
        className="h-full w-full rounded-20 border"
        style={{ borderColor: borderColor }}
      />
      <h3 className="absolute right-4 top-4 z-10 text-22 font-bold text-maingray">
        {title}
      </h3>
    </Link>
  );
};
export default SideVerticalBanner;
