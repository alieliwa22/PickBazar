import React from "react";
import SearchComponentWithBtn from "../base-components/SearchComponentWithBtn";
import "./styles/slide.css";
const SlideContent = () => {
  return (
    <div className="slide-content">
      <h1 className="title">Shop your designer dresses</h1>
      <p>
        Ready to wear dresses tailored for you online. Hurry up while stock
        lasts.
      </p>
      <div className="w-full mt-25 max-w-3 text-center">
        <SearchComponentWithBtn />
      </div>
    </div>
  );
};

export default SlideContent;
