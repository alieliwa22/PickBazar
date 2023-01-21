import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CartProduct from "./CartProduct";
const SideCart = ({
  cartProducts,
  totalCartPrice,
  setTotalCartPrice,
  setCartProducts,
}) => {
  const closeHandler = () => {
    const div = document.querySelector("#cart");
    div.style.right = "-50rem";
    setTimeout(() => {
      div.style.display = "none";
    }, 200);
  };
  const displayProducts = (product) => {
    return (
      <div key={product.id}>
        <CartProduct
          product={product}
          totalCartPrice={totalCartPrice}
          setTotalCartPrice={setTotalCartPrice}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 h-full overflow-hidden d-none right--50"
        id="cart"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-dark bg-opacity-40"
            onClick={closeHandler}
          ></div>
          <div className="absolute inset-y-0 flex max-w-full outline-none right-0 ">
            <div className="h-full w-screen max-w-md">
              <div className="drawer flex h-full flex-col bg-light text-base shadow-xl">
                <div className="h-full w-full ">
                  <section className="flex flex-col h-full relative">
                    <header className="fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75">
                      <div className="flex text-accent font-semibold">
                        <box-icon
                          name="shopping-bag"
                          type="solid"
                          color="#009f7f"
                        ></box-icon>
                        <span className="flex ml-2 ">
                          {cartProducts.length} Item
                        </span>
                      </div>
                      <button
                        className="w-7 h-7 ml-3 mr-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
                        onClick={() => {
                          closeHandler();
                        }}
                      >
                        <box-icon name="x" color="#989696"></box-icon>
                      </button>
                    </header>
                    <div className="flex-grow pt-16 pb-20" id="sideCart">
                      {cartProducts.length > 0 ? (
                        cartProducts.map((product) => {
                          return displayProducts(product);
                        })
                      ) : (
                        <>
                          <div className="h-full flex flex-col items-center justify-center">
                            <box-icon
                              name="shopping-bag"
                              type="solid"
                              color="#009f7f"
                            ></box-icon>
                            <h4 className="mt-6 text-base font-semibold">
                              No products found
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                    <footer className="fixed bottom-0 w-full max-w-md py-5 px-6 z-10 bg-light">
                      <button className="flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover">
                        <span className="flex flex-1 items-center h-full px-5 text-light">
                          Checkout
                        </span>
                        <span className="flex items-center shrink-0 h-full bg-light text-accent rounded-full px-5">
                          ${totalCartPrice}
                        </span>
                      </button>
                    </footer>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default SideCart;
