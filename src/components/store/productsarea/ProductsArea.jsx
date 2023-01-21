import React from "react";
import SingleProduct from "../../base-components/SingleProduct";
import LoadMore from "./LoadMore";

const ProductsArea = ({ products, setCartProducts, cartProducts }) => {
  return (
    <div className=" px-4 pb-8 lg:p-8 absolute left-72 right-8 products-area">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
        {products.map((product) => {
          return (
            <SingleProduct
              product={product}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              key={product.id}
            />
          );
        })}
      </div>
      <LoadMore />
    </div>
  );
};

export default ProductsArea;
