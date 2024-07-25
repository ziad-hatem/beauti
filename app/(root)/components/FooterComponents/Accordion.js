"use client";
import Link from "next/link";
import { useState } from "react";

const Accordion = ({ data }) => {
  const { content } = data;
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2>
        <button
          className="flex w-full items-center justify-between px-[17px] py-2 text-9 font-bold text-black "
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{data.head}</span>
          <span className="grid aspect-square  place-content-center">
            {open ? (
              <span className="rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.12864 1.21837C1.33115 0.967465 1.70051 0.926785 1.95364 1.12751L5.5 3.9397L9.04636 1.12751C9.29949 0.926785 9.66885 0.967465 9.87136 1.21837C10.0739 1.46928 10.0328 1.83541 9.77969 2.03614L5.86667 5.13908C5.6523 5.30907 5.3477 5.30907 5.13333 5.13908L1.22031 2.03614C0.967177 1.83541 0.926137 1.46928 1.12864 1.21837Z"
                    fill="#383838"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="6"
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.12864 1.21837C1.33115 0.967465 1.70051 0.926785 1.95364 1.12751L5.5 3.9397L9.04636 1.12751C9.29949 0.926785 9.66885 0.967465 9.87136 1.21837C10.0739 1.46928 10.0328 1.83541 9.77969 2.03614L5.86667 5.13908C5.6523 5.30907 5.3477 5.30907 5.13333 5.13908L1.22031 2.03614C0.967177 1.83541 0.926137 1.46928 1.12864 1.21837Z"
                    fill="#383838"
                    stroke="#383838"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </span>
        </button>
      </h2>
      {typeof content !== "string" && (
        <ul
          className={` overflow-hidden  px-4 text-9 text-sectwo transition-all duration-300  ${
            open ? "h-auto" : "h-0"
          }`}
        >
          {content.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className="block py-0.5">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {typeof content === "string" && (
        <p
          className={` overflow-hidden  px-4 text-justify text-9 text-sectwo transition-all duration-300 ${
            open ? "h-auto pb-1" : "h-0"
          }`}
        >
          {content}
        </p>
      )}
    </>
  );
};
export default Accordion;
