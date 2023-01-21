import React from "react";
// base button
const Button = ({ name = "", type = "", icone = "", classNames = "" }) => {
  return (
    <>
      {/* must add name and type and clasenames*/}
      <button className={"btn " + classNames} type={type}>
        {icone} {" " + name}
      </button>
    </>
  );
};

export default Button;
