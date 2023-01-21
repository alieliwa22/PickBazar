import React, { useEffect } from "react";
import AddToCartBtn from "./AddToCartBtn";

const SingleProduct = ({ product, setCartProducts, cartProducts }) => {
  return (
    <>
      <article className="product-card cart-type-xenon rounded h-full bg-light overflow-hidden border border-border-200 border-opacity-70 transform transition-all duration-200 hover:shadow hover:border-transparent hover:-translate-y-0.5">
        <div className="relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64">
          <span className="image-container-product">
            <img src={product.image} alt={product.title} />
          </span>
        </div>
        <div className="p-3 md:p-6">
          <h3 className="text-xs md:text-sm text-body truncate cursor-pointer">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-sm md:text-base text-heading font-semibold">
                {product.price}
              </span>
              <span> - </span>
              <span className="text-sm md:text-base text-heading font-semibold">
                $35.00
              </span>
            </div>
            <AddToCartBtn
              product={product}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleProduct;
