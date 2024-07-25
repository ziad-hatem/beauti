import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function RecommendedFilterSelect({ ID="test", content =[
      {title:"6 فى الصفحة"},
      {title:"12 فى الصفحة"},
      {title:"18 فى الصفحة"},
      {title:"24 فى الصفحة"},
      {title:"30 فى الصفحة"},
    ] }) {
  const [OpenContent, setOpenContent] = useState(false);
  let text = "";
  const [ChangeContent, setContent] = useState(text);
  useEffect(() => {
    document.querySelectorAll(`#${ID} .options .option`).forEach((el) => {
      el.addEventListener("click", (e) => {
        // console.log(e.target.innerHTML)
        document
          .querySelector(`#${ID} .options .option.selected`)
          .classList.remove("selected");
        e.target.classList.add("selected");
        setContent(e.target.innerHTML);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    text = document.querySelector(`#${ID} .options .option.selected`).innerHTML;
    let selectedElement = document.querySelector(`#${ID} .options .option.selected`);
    /* to be continued */
    if(selectedElement.parentElement.children[0].classList.contains("selected")){
      console.log("first element selected")
}else{
      console.log("first element not selected")
    }
    document.querySelector(`#${ID} .selected-value`).innerHTML = text;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ChangeContent]);

  return (
    <div
      className="select-container"
      id={ID}
      onClick={() => setOpenContent((prev) => !prev)}
    >
      <div className="arrow-icon">
        <IoIosArrowUp
          style={
            OpenContent
              ? { transition: "0.4s", transform: "rotate(0deg)" }
              : { transition: "0.4s", transform: "rotate(180deg)" }
          }
        />
      </div>
      <div className="selected-value"></div>
      <div
        className="options"
        style={
          OpenContent
            ? { transition: "0.4s", display: "block" }
            : { transition: "0.4s", display: "none" }
        }
      >
        {content.map((e, i) => {
            return (<div key={i} value={i} className={`option ${i == 0 ? "selected" : null}`}>{e.title}</div>);
        })}
      </div>
    </div>
  );
}
