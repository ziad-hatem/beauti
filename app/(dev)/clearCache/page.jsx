"use client";
import { clearCache } from "(dev)/actions";
import { useEffect, useState } from "react";

const Page = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    clearCache("Api").then((r) => setDone(true));
  }, []);
  return (
    <div className="container my-5">
      <div className="row items">
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
          <span className="arr">➜</span> Clear cache:
          <span className="done"> {done ? "Done" : "..."}</span>
        </div>
      </div>
    </div>
  );
};
export default Page;
