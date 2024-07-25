import Link from "next/link";
import Image from "next/image";
import PhoneKeySelector from "./PhoneKeySelector";
import ShadowedBtn from "../common/ShadowedBtn";

import { socialLinks } from "@/data/fake";

const ThreeCols = () => {
  return (
    <div className="threecols  hidden items-start gap-4 py-[18px] xl:flex">
      <div className="col-one">
        <h3 className="text-17 mb-[22px] font-[800] text-secone">
          اشترك معنا في خدمة الرسائل النصية واتساب
        </h3>
        <div className=" flex w-[466px] items-center gap-5 rounded-15 bg-white p-2.5">
          <ShadowedBtn text={"إشترك"} />
          <input
            type="number"
            name=""
            id=""
            className="flex-1 text-xl text-black outline-none"
            placeholder="132 456 789"
            dir="ltr"
          />
          <PhoneKeySelector />
        </div>
      </div>
      <div className="col-two">
        <h3 className="text-17 mb-[22px] font-[800] text-secone">
          تابعونا على
        </h3>
        <ul className=" flex items-center justify-center  gap-4 rounded-15 bg-white px-[15px] py-[11px]">
          {socialLinks.map((link,i) => (
            <li key={i}>
              <Link href={link.href}>
                <Image src={link.icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-three">
        <h3 className="text-17 mb-[22px] font-[800] text-secone">
          اشترك معنا في خدمة الرسائل البريدية
        </h3>
        <div className=" flex w-[466px] items-center gap-5 rounded-15 bg-white p-2.5">
          <ShadowedBtn text={"إشترك"} />

          <input
            type="email"
            name=""
            id=""
            className="flex-1 text-xl text-black outline-none"
            placeholder="beauty@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
export default ThreeCols;
