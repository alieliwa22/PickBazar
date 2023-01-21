import React from "react";
import "./styles/navbarmin.css";
import { BoxIconElement } from "boxicons";
const NavbarMin = () => {
  const leftFillter = () => {
    const div = document.querySelector("#cart");

    div.style.display = "block";
    setTimeout(() => {
      div.style.right = 0;
    }, 50);
  };
  return (
    <>
      <div className="navbar--min--bottom">
        <button>
          <box-icon name="menu-alt-left"></box-icon>
        </button>
        <button>
          <box-icon name="search" rotate="90"></box-icon>
        </button>
        <button>
          <box-icon name="home-alt"></box-icon>
        </button>
        <button onClick={leftFillter}>
          <box-icon name="shopping-bag"></box-icon>
        </button>
        <button>
          <box-icon name="user"></box-icon>
        </button>
      </div>
    </>
  );
};

export default NavbarMin;
