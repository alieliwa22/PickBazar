import React from "react";

const CartSideBtn = ({ cartProducts, totalCartPrice }) => {
  const leftFillter = () => {
    const div = document.querySelector("#cart");

    div.style.display = "block";
    setTimeout(() => {
      div.style.right = 0;
    }, 50);
  };
  return (
    <>
      <button
        className="hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 right-0 z-40 shadow-900 rounded rounded-tr-none rounded-br-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover "
        onClick={leftFillter}
      >
        <span className="flex pb-0.5">
          <box-icon name="shopping-bag" type="solid" color="#eaf1ef"></box-icon>
          <span className="flex ml-2">{cartProducts.length} Item</span>
        </span>
        <span className="text-center bg-light rounded w-full py-2 px-2 text-accent mt-3">
          ${totalCartPrice}
        </span>
      </button>
    </>
  );
};

export default CartSideBtn;
