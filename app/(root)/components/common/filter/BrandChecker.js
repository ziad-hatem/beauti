import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const BrandChecker = ({ brand = null,order }) => {
  if(brand == null){
    return;
  }else{
    return (
      <label className="relative flex h-9 w-[75px] cursor-pointer place-content-center overflow-hidden rounded-md bg-white shadow-md">
        <input type="checkbox" data-order={order} className="peer hidden" />
  
        <div className="absolute inset-0 hidden place-content-center rounded-md border-2 border-primery bg-white/0 text-2xl text-primery peer-checked:grid">
        </div>
  
        <Image src={brand.img} alt="" className="h-full w-auto" />
      </label>
    );
  }
};
export default BrandChecker;
