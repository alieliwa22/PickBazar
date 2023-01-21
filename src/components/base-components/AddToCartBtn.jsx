import React, { useEffect } from "react";
import { useState } from "react";

const AddToCartBtn = ({ product, setCartProducts, cartProducts }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCartProducts(
      cartProducts.filter((product) => (product.cartCount > 0 ? product : null))
    );
  }, [count]);
  const addToCartHandller = (product) => {
    if (product.cartCount === 0) {
      product.cartCount++;
      setCount(product.cartCount);
      product.totalPrice = product.cartCount * product.price;
      setCartProducts([...cartProducts, product]);
    } else if (product.cartCount > 0) {
      product.cartCount++;
      setCount(product.cartCount);
      product.totalPrice = product.cartCount * product.price;
    }
  };
  const minceHandler = (product) => {
    product.cartCount--;
    if (product.cartCount <= 0) {
      product.cartCount = 0;
      setCount(0);
      product.totalPrice = product.cartCount * product.price;
      setCartProducts(
        cartProducts.filter((product) =>
          product.cartCount > 0 ? product : null
        )
      );
    } else if (product.cartCount > 0) {
      setCount(product.cartCount);
      product.totalPrice = product.cartCount * product.price;
    }
  };
  return (
    <>
      <div className="flex-shrink-0">
        {product.cartCount > 0 ? (
          <>
            <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 text-heading rounded-full">
              <button
                className="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none hover:bg-gray-100"
                onClick={() => {
                  minceHandler(product);
                }}
              >
                <box-icon name="minus" color="#009a7f"></box-icon>
              </button>
              <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold !px-0 text-heading">
                {product.cartCount}
              </div>
              <div className="flex overflow-hidden flex-col-reverse items-center w-8 h-24 text-heading rounded-full">
                <button
                  className="cursor-pointer pt-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none hover:bg-gray-100"
                  onClick={() => {
                    addToCartHandller(product);
                  }}
                >
                  <span className="sr-only">plus</span>
                  <box-icon name="plus" color="#009f7f"></box-icon>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-accent bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
              onClick={() => {
                addToCartHandller(product);
              }}
            >
              <span className="sr-only">plus</span>
              <box-icon name="plus" color="#009f7f"></box-icon>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AddToCartBtn;
