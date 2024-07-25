"use client";

import { useState } from "react";

const FaqQuestion = ({ question }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="flex justify-between gap-2 rounded-lg bg-white px-2 py-3 lg:gap-4 lg:rounded-2xl lg:px-6 lg:py-4 ">
      <div className="max-w-md">
        <h3 className=" lg:text-22 font-medium text-sectwo lg:leading-7">
          {question.title}
        </h3>
        {opened && (
          <p className="mt-3 text-[#6F6C90] lg:text-lg lg:leading-7">
            {question.answer}
          </p>
        )}
      </div>
      <span
        className="cursor-pointer"
        onClick={() => {
          setOpened((prev) => !prev);
        }}
      >
        {opened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            className="h-4 w-4 lg:h-auto lg:w-auto"
          >
            <path
              d="M20.5 15.9712H10.5M15.5 28.4712C22.4036 28.4712 28 22.8748 28 15.9712C28 9.06763 22.4036 3.47119 15.5 3.47119C8.59644 3.47119 3 9.06763 3 15.9712C3 22.8748 8.59644 28.4712 15.5 28.4712Z"
              stroke="#F39406"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            className="h-4 w-4 lg:h-auto lg:w-auto"
          >
            <path
              d="M14.9924 10.9712V20.9712M19.9924 15.9712H9.99243M14.9924 28.4712C21.896 28.4712 27.4924 22.8748 27.4924 15.9712C27.4924 9.06763 21.896 3.47119 14.9924 3.47119C8.08887 3.47119 2.49243 9.06763 2.49243 15.9712C2.49243 22.8748 8.08887 28.4712 14.9924 28.4712Z"
              stroke="#F39406"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default FaqQuestion;
