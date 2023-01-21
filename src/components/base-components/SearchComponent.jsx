import React from "react";
import Button from "./Button";
// main search component
const SearchComponent = () => {
  return (
    <div className="d-flex">
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        icone={<box-icon name="search" color="#6b7280"></box-icon>}
        type={`submit`}
      />
    </div>
  );
};

export default SearchComponent;
