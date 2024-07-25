const Specs = ({ specs }) => {
  return (
    <div>
      {specs.map((spec, i) => (
        <div
          key={spec.name}
          className={`flex  ${i % 2 === 0 ? "bg-[#d9d9d980]" : ""}`}
        >
          <span className="w-48">{spec.name}</span>
          <span className="w-48">{spec.data}</span>
        </div>
      ))}
    </div>
  );
};
export default Specs;
