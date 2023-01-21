import React from "react";
import Button from "./Button";

// search component with btn
const SearchComponentWithBtn = () => {
  return (
    <div className="search-comp-with-btn p-relative">
      <form className="w-full">
        <div className="p-relative d-flex">
          <input type="text" className="search w-full" placeholder="Search" />
          <Button
            classNames={"search-btn"}
            icone={
              <box-icon
                name="search"
                color="#FEFEFE"
                className="px-2"
              ></box-icon>
            }
            name={"Search"}
            type={`submit`}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchComponentWithBtn;
