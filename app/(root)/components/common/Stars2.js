import Image from "next/image";
import React, { useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { FilledStars, NonfilledStar } from "@/components/common/Stars3";
const Stars = ({ stars, measures = [10.83, 10.83] }) => {
  const tempstars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} style={{ color: "rgb(243, 148, 6)" }}>
        {stars >= index ? (
          <FilledStars width={measures[0]} height={measures[1]} />
        ) : stars >= number ? (
          <NonfilledStar width={measures[0]} height={measures[1]} />
        ) : (
          <NonfilledStar width={measures[0]} height={measures[1]} />
        )}
      </span>
    );
  });
  return <div className="flex h-fit w-fit gap-0.5">{tempstars}</div>;
};

export default Stars;
