import React from "react";
import ProductsArea from "./productsarea/ProductsArea";
import SideMenuComp from "./sidemenu/SideMenuComp";
import FillterNav from "./filtterNav/FillterNav";
import LeftPopUp from "../base-components/LeftPopUp";

const StoreArea = ({
  categories,
  products,
  logoImg,
  setCartProducts,
  cartProducts,
  SETAPI_URL,
}) => {
  return (
    <>
      <FillterNav />
      <LeftPopUp categories={categories} logoImg={logoImg} />
      <div
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
        id="grid"
      >
        <SideMenuComp categories={categories} SETAPI_URL={SETAPI_URL} />
        <ProductsArea
          products={products}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      </div>
    </>
  );
};

export default StoreArea;
