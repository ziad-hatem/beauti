const ShadowedBtn = ({ text, className }) => {
  return (
    <button
      className={` rounded-xl bg-primery px-5 py-1.5 text-[19px] font-bold text-white ${className}`}
    >
      {text}
    </button>
  );
};
export default ShadowedBtn;
