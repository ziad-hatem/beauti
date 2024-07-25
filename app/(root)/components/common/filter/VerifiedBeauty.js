import React from "react";
import StarsRow from "./StarsRow";

export default function VerifiedBeauty({ classNames = "" }) {
  return (
    <span className={`verify-beauty imp ${classNames}`}>
      موثوق
      <StarsRow nu={1} />
    </span>
  );
}
