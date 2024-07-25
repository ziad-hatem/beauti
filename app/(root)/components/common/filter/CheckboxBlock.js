import CheckerRow from "@/components/common/filter/CheckerRow";
const CheckboxBlock = ({ array = null }) => {
  if(array == null){
    return;
  }else{
    return (
      <>
        {array.map((el,i) => (
          <CheckerRow key={el} label={el} order={i} />
        ))}
      </>
    );
  }
};
export default CheckboxBlock;
