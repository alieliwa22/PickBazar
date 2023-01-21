import React from "react";
import Button from "../../base-components/Button";
const LoadMore = () => {
  return (
    <div className="mt-8 flex justify-center lg:mt-12 mb-8">
      <span
        className={
          "inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 h-11 text-sm font-semibold md:text-base"
        }
      >
        <Button name={"Load More"} />
      </span>
    </div>
  );
};

export default LoadMore;
