const MainDetails = ({ mainDetails }) => {
  return (
    <div>
      <h4 className="my-1 font-bold">{mainDetails.heading}</h4>
      <ul className="ms-6 list-outside list-disc">
        {mainDetails.points.map((point, i) => (
          <li key={i + "point"} className="mb-0.5 text-justify">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MainDetails;
