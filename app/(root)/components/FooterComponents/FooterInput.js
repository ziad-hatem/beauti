import ShadowedBtn from "../common/ShadowedBtn";

const FooterInput = ({ type, placeholder, label }) => {
  return (
    <div className="relative w-full">
      <label className="text-footergray text-9 font-extrabold">{label}</label>
      <div className=" flex w-full items-center gap-1.5 rounded-15 bg-white p-1.5">
        <ShadowedBtn text={"إشترك"} className={"!px-3 !py-0.5 !text-9"} />

        <input
          dir="ltr"
          type={type}
          placeholder={placeholder}
          className=" h-[18px] w-full rounded-7 bg-white  ps-2 text-8 text-secone outline-none"
        />
      </div>
    </div>
  );
};
export default FooterInput;
