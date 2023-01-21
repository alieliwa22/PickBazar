import React, { useEffect } from "react";
import AddToCartBtn from "../base-components/AddToCartBtn";

const CartProduct = ({
  product,
  totalCartPrice,
  setTotalCartPrice,
  setCartProducts,
  cartProducts,
}) => {
  const removeHandler = (product) => {
    product.cartCount = 0;
    setCartProducts(
      cartProducts.filter((product) => (product.cartCount > 0 ? product : null))
    );
  };

  useEffect(() => {
    setTotalCartPrice((totalCartPrice += product.price * product.cartCount));
  }, [product.cartCount]);
  return (
    <>
      <div className="flex items-center py-4 px-4 sm:px-6 text-sm border-b border-solid border-border-200 border-opacity-75">
        <AddToCartBtn
          product={product}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
        <div className="w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center overflow-hidden bg-gray-100 mx-4 shrink-0 relative">
          <span className="cart-product--img-container">
            <img
              src={product.image}
              alt={product.title}
              className="cart-product--img"
            />
          </span>
        </div>
        <div>
          <h3 className="font-bold text-heading">{product.title}</h3>
          <p className="my-2.5 font-semibold text-accent">${product.price}</p>
        </div>
        <span className="ml-auto font-bold text-heading">
          ${product.price * product.cartCount}
        </span>
        <button
          className="w-7 h-7 ltr:ml-3 rtl:mr-3 ltr:-mr-2 rtl:-ml-2 flex items-center justify-center shrink-0 rounded-full text-muted transition-all duration-200 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-red-600 focus:text-red-600"
          onClick={() => {
            removeHandler(product);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};

export default CartProduct;
