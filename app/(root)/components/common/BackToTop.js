"use client";
import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        className="fixed bottom-10 left-5 z-50  hidden aspect-square w-8 place-content-center rounded-lg border-2 border-secthree bg-white text-primery hover:border-sectwo hover:bg-primery hover:text-white lg:grid"
        onClick={scrollToTop}
      >
        <IoMdArrowDropup className="text-2xl" />
      </button>
    )
  );
};
export default BackToTop;
