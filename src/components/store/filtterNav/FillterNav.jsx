import React from "react";
import "./fillternav.css";
import useScrollPosition from "../../../hooks/useScrollPosition";
const FillterNav = () => {
  const scrollPosition = useScrollPosition();
  const addStickyClass = () => {
    if (scrollPosition > 200) {
      if (scrollPosition > 300) {
        return "fillter-nav-sticky scrolled";
      } else {
        return "fillter-nav-sticky";
      }
    } else {
      return "";
    }
  };
  const leftFillter = () => {
    const div = document.querySelector("#left-popup");

    div.style.display = "block";
    setTimeout(() => {
      div.style.left = 0;
    }, 50);
  };
  return (
    <div
      className={`fillter-nav top-14 z-10 flex h-14 items-center justify-between border-t border-b border-border-200 bg-light py-3 px-5 md:top-16 md:h-16 lg:top-22 lg:px-7 xl:hidden ${addStickyClass()}`}
    >
      <button
        className="flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 py-1 px-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-none md:h-10 md:py-1.5 md:px-4 md:text-base"
        onClick={leftFillter}
      >
        <box-icon name="dots-vertical-rounded" color="#1f2937"></box-icon>
        Filter
      </button>
    </div>
  );
};

export default FillterNav;
