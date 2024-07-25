import Link from "next/link";
import ShowAllBtn from "../../common/ShowAllBtn";
import Image from "next/image";
const SideMenuCol = ({ SideMenuColData }) => {
  return (
    <div className="flex  flex-col justify-between xl:w-1/4">
      <div className="w-ful  h-[61%] bg-gray-300 outline-1 outline-primery transition-all hover:outline">
        <Link href={SideMenuColData.mainImage.href}>
          <Image
            src={SideMenuColData.mainImage.image}
            className="mx-auto h-full"
            alt=""
          />
        </Link>
      </div>

      <div className="flex h-20 gap-3">
        {SideMenuColData.subImage.map((img) => (
          <div
            key={img.href}
            className="w-1/3 bg-gray-300 outline-1 outline-primery transition-all hover:outline"
          >
            <Link href={img.href}>
              <Image src={img.image} className="mx-auto h-full" alt="" />
            </Link>
          </div>
        ))}
      </div>

      <div className=" flex gap-3 font-bold">
        {SideMenuColData.subLinks.map((link) => (
          <div key={link.href} className="w-1/3  text-center ">
            <Link href={link.href} className="underline hover:text-primery">
              {link.title}
            </Link>
          </div>
        ))}
      </div>

      <div className=" flex items-center justify-between">
        <Link
          href={SideMenuColData.lastLink.href}
          className="text-lg font-bold underline hover:text-primery"
        >
          {SideMenuColData.lastLink.title}
        </Link>
        <ShowAllBtn />
      </div>
    </div>
  );
};
export default SideMenuCol;
