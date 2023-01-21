import React from "react";

const CategoriesComp = ({ categorie, SETAPI_URL }) => {
  const productsInCategoriesHandler = (categorie) => {
    SETAPI_URL(`https://fakestoreapi.com/products/category/${categorie}`);
  };
  return (
    <li className="py-1 rounded-md">
      <button
        className="flex items-center w-full py-2 text-left  outline-none text-body-dark font-semibold  focus:outline-none focus:ring-0 focus:text-accent transition-all ease-in-expo text-body-dark text-sm"
        onClick={() => {
          productsInCategoriesHandler(categorie);
        }}
      >
        <span>{categorie}</span>
        <span className="ml-auto">
          <box-icon name="chevron-down" color="#4b5563"></box-icon>
        </span>
      </button>
    </li>
  );
};

export default CategoriesComp;
