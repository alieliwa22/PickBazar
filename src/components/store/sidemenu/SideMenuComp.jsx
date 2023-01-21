import React from "react";
import "./sidemenu.css";
import CategoriesComp from "./CategoriesComp";
import useScrollPosition from "../../../hooks/useScrollPosition";
const SideMenuComp = ({ categories, SETAPI_URL }) => {
  const scrollPosition = useScrollPosition();
  const stikeySideNav = () => {
    if (scrollPosition >= window.innerHeight - 100) {
      return "stikey";
    } else {
      return "";
    }
  };
  return (
    <aside
      className={`lg:sticky lg:top-22 h-full xl:w-72  bg-light categorie-list-menu ${stikeySideNav()} `}
      id="aside"
    >
      <div className="max-h-full overflow-hidden flex-grow">
        <div className={`px-5 categoris-list xl:w-72 `}>
          <ul className="text-xs xl:py-8 ">
            {categories.map((categorie) => { return(
              <CategoriesComp categorie={categorie} SETAPI_URL={SETAPI_URL} key={categorie}/>);
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideMenuComp;
