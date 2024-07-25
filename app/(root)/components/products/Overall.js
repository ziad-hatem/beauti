const Overall = ({ overall }) => {
  return (
    <div>
      <h4 className=" my-1 font-bold">{overall.heading}</h4>
      <ul className="ms-6 list-outside list-disc ">
        {overall.points.map((point, i) => (
          <li key={i + "point"} className="mb-0.5 text-justify">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Overall;
