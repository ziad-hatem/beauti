import CheckerRow from "./CheckerRow";
import StarsRow from "./StarsRow";

const RatingBlock = ({ array }) => {
  return (
    <>
      {array.map((el,i) => (
        <CheckerRow inputName={"rating"} key={el} order={i} Type={"radio"} label={<StarsRow nu={el} />} />
      ))}
    </>
  );
};
export default RatingBlock;
