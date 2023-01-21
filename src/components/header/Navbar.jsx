import "./styles/navbar.css";
// components used
import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Button from "../base-components/Button";
import SearchComponent from "../base-components/SearchComponent";
// hooks
import useScrollPosition from "../../hooks/useScrollPosition";
// main comp
const Navbar = ({ logoImg }) => {
  // scroll spy
  const scrollPosition = useScrollPosition();
  // stiky nav
  const addScrolledClass = () => {
    if (scrollPosition > 150) {
      if (scrollPosition > 201) {
        return "scrolled stikey";
      } else {
        return "scrolled";
      }
    } else {
      return "";
    }
  };
  // displaying search bar
  const displaySearchBar = () => {
    if (scrollPosition > 200) {
      return <SearchComponent />;
    } else {
      return "";
    }
  };
  // returning jsx
  return (
    <div className={`navbar--desktop ${addScrolledClass()}`}>
      <Logo logoImg={logoImg} />
      <div className="d-flex min-screen-d-none search-component">
        {displaySearchBar()}
      </div>
      <div className="d-flex min-screen-d-none">
        <Nav />
        <div className="d-flex">
          <Button name="Become a Seller" />
          <Button name="Join" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
