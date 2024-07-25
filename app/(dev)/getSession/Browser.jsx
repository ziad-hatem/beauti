"use client";
import { useEffect } from "react";

const Browser = (props) => {
  useEffect(() => {
    console.log(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Browser</div>;
};

export default Browser;
