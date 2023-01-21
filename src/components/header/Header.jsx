import React from "react";
import Navbar from "./Navbar";
import NavbarMin from "./NavbarMin";
import "./styles/header.css";
const Header = ({logoImg}) => {
  return (
    <div className="header">
      <Navbar logoImg={logoImg}  />
      <NavbarMin />
    </div>
  );
};

export default Header;
