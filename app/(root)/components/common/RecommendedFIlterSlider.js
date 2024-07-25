import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function RecommendedFIlterSlider({
  ID = "test",
  content = [
    { title: "6 فى الصفحة" },
    { title: "12 فى الصفحة" },
    { title: "18 فى الصفحة" },
    { title: "24 فى الصفحة" },
    { title: "30 فى الصفحة" },
  ],
  title,
  modification = { multyChoice: true, all: true },
}) {
  const [OpenContent, setOpenContent] = useState(false);
  useEffect(() => {
    document.querySelectorAll(`#${ID} .options .option`).forEach((el, i) => {
      el.addEventListener("click", (e) => {
        if (modification.multyChoice) {
          if (modification.all) {
            if (
              i == 0 &&
              document
                .querySelector(`#${ID}`)
                .parentElement.classList.contains("active")
            ) {
              document
                .querySelector(`#${ID}`)
                .parentElement.classList.remove("active");
              // document.querySelectorAll(`#${ID} .options .option`).forEach((e)=>{
              //   if(!e.classList.contains("selected")){
              //     e.classList.add("active")
              //   }
              // })
            } else if (
              !document
                .querySelector(`#${ID}`)
                .parentElement.classList.contains("active") &&
              i != 0
            ) {
              document
                .querySelector(`#${ID}`)
                .parentElement.classList.add("active");
            }
          }
        } else {
          // console.log(e.target.innerHTML)
          // if(i == 0 && document.querySelector(`#${ID}`).parentElement.classList.contains("active")){
          //     document.querySelector(`#${ID}`).parentElement.classList.remove("active")
          // }else if(!document.querySelector(`#${ID}`).parentElement.classList.contains("active") && i != 0){
          //     document.querySelector(`#${ID}`).parentElement.classList.add("active")
          // }
          // document
          //   .querySelector(`#${ID} .options .option.selected`)
          //   .classList.remove("selected");
          e.target.parentElement.children.forEach(() => {});
          e.target.classList.toggle("selected");
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="select-container RecommendedFIlterSlider-slide"
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
      <div className="selected-value">{title}</div>
      <div
        className="options"
        style={
          OpenContent
            ? { transition: "0.4s", display: "block" }
            : { transition: "0.4s", display: "none" }
        }
      >
        {modification.all && !modification.multyChoice ? (
          <div className={`option selected`}>الكل</div>
        ) : null}
        {content.map((e, i) => {
          return (
            <div key={i} className={`option`}>
              {e.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
