import Image from "next/image";
import tabby from "../../../../public/imgs/tabby.png";
import tamara from "../../../../public/imgs/tamara.png";
import Link from "next/link";

const TabbyAndTamara = ({ className }) => {
  return (
    <div
      className={`text-10 items-center gap-3 md:text-sm lg:gap-5 ${className}`}
    >
      <Link
        href={"#"}
        className="border-lightgray relative rounded-2xl border p-2 pt-4"
      >
        <p>قسم مشترياتك على ٤ دفعات بدون فوائد اشتر الآن وقم بالدفع لاحقاً</p>
        <div className="absolute -top-3  w-16 lg:left-7">
          <Image src={tabby} alt="" />
        </div>
      </Link>
      <Link
        href={"#"}
        className="border-lightgray relative rounded-2xl border p-2 pt-4"
      >
        <p>قسم مشترياتك على ٤ دفعات بدون فوائد اشتر الآن وقم بالدفع لاحقاً</p>
        <div className="absolute -top-3  w-16 lg:left-7">
          <Image src={tamara} alt="" />
        </div>
      </Link>
    </div>
  );
};
export default TabbyAndTamara;
