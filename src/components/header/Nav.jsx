import React from "react";
import "./styles/nav.css";

const Nav = () => {
  return (
    <>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#" className="nav-item">
            Shops
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            Offers
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            FAQ
          </a>
        </li>
        <li className="nav-link">
          <a href="#" className="nav-item">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
