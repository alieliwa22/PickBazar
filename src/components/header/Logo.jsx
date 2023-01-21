import React from "react";
import "./styles/logo.css";
const Logo = ({logoImg}) => {
  return (
    <>
      <div className="logo">
        <img src={logoImg} alt="" />
      </div>
    </>
  );
};

export default Logo;
