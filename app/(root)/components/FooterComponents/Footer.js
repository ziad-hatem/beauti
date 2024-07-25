import SixCols from "./SixCols";
import ThreeCols from "./ThreeCols";
import MobileFooter from "./MobileFooter";

import Image from "next/image";
import { paymentMethods } from "@/data/fake";

const Footer = () => {
  return (
    <footer className="text-white mb-14 lg:mb-0">
      {/* desktop footer */}
      <div className="bg-secone">
        <div className="container mx-auto">
          <SixCols />
        </div>
      </div>
      <div className="bg-footergray">
        <div className="container mx-auto">
          <ThreeCols />
        </div>
      </div>
      {/* mobile footer */}
      <MobileFooter />
      <div className="xl:container mx-auto lg:pb-0">
        <div className="flex flex-col items-center justify-between xl:gap-3 xl:py-2 xl:flex-row">
          {/* payment methods */}
          <ul className="flex items-center gap-[5px] px-3 py-[11px] lg:gap-2.5 lg:px-0 xl:py-0">
            {paymentMethods.map((method) => (
              <li key={method.key} className="h-[9px] lg:h-auto">
                <Image src={method.icon} alt="" className="h-full w-auto" />
              </li>
            ))}
          </ul>
          {/* copy right */}
          <p
            className="w-full bg-primery py-[5px] text-center text-xs text-white sm:text-sm md:text-base xl:w-auto xl:bg-white xl:py-0 lg:text-2xl xl:text-secone"
            dir="ltr"
          >
            © {new Date().getFullYear()} Beauty Center جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
