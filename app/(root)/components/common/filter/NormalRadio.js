import CheckerRow from "./CheckerRow";

const NormalRadio = ({ array, nam }) => {
  const clearAll = () => {
    [...document.querySelectorAll(".clear-btn~.radio-container~input")].forEach(
      (e) => {
        e.checked = false;
      },
    );
  };
  return array.map((el, i) => {
    return (
      <CheckerRow
        order={i}
        inputName={nam}
        label={el.title}
        key={i}
        Type={"radio"}
      />
    );
  });
};
export default NormalRadio;
