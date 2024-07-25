const CheckerRow = ({ id, label, inputName, Type = "checkbox", order }) => {
  return (
    <label
      className="flex select-none items-center gap-2 font-medium text-sectwo"
      htmlFor={id}
      key={order + "B"}
    >
      <input type={Type} name={inputName} id={id} data-order={order} key={order} className="peer hidden" />
      <span className="checkbox-cust relative aspect-square w-[18px] rounded bg-white after:absolute after:left-1 after:font-['Font_Awesome_6_Free'] after:text-sm after:font-black after:text-primery  peer-checked:after:content-['\f00c'] peer-checked:after:color-white"></span>
      {label}
    </label>
  );
};
export default CheckerRow;