import "./App.css";
import { useState, useEffect } from "react";
import logoImg from "./assets/logo.webp";
// homePage components import
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import StoreArea from "./components/store/StoreArea";
// hooks import
import CartSideBtn from "./components/base-components/CartSideBtn";
import SideCart from "./components/cart/SideCart";
// main component
function App() {
  // state and data
  const [API_URL, SETAPI_URL] = useState("https://fakestoreapi.com/products");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsDisplayed, setProductsDisplayed] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0.0);
  // effect on load to set categories and products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData);
      });
    fetch(API_URL)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [API_URL]);
  useEffect(() => {
    let productsToDisplay = [];
    const cartCount = 0;
    products.map((product) => {
      let totalPrice = 0;
      productsToDisplay.push({ ...product, cartCount, totalPrice });
    });
    setProductsDisplayed(productsToDisplay);
  }, [products]);

  useEffect(() => {
    let totalArr = cartProducts.map((product) => product.totalPrice);
    let total = 0;
    for (const value of totalArr) {
      total += value;
    }
    setTotalCartPrice(Math.round(total * 100) / 100);
  }, [cartProducts]);
  // return jsx
  return (
    <div className="App">
      <Header className="header" logoImg={logoImg} />
      <Hero className="hero" />
      <StoreArea
        categories={categories}
        products={productsDisplayed}
        logoImg={logoImg}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
        SETAPI_URL={SETAPI_URL}
      />
      <CartSideBtn
        cartProducts={cartProducts}
        totalCartPrice={totalCartPrice}
        setTotalCartPrice={setTotalCartPrice}
      />
      <SideCart
        cartProducts={cartProducts}
        totalCartPrice={totalCartPrice}
        setTotalCartPrice={setTotalCartPrice}
        setCartProducts={setCartProducts}
      />
    </div>
  );
}

export default App;
