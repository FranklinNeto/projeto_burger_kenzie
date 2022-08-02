/* import logo from './logo.svg'; */
import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function addProductToCart(productId) {
    const arrayFiltered = products.filter(
      (product) => product.id === productId
    );

    const idFound = cartProducts.find(
      (element) => element.id === arrayFiltered[0].id
    );
    if (idFound === undefined) {
      setCartProducts([...cartProducts, ...arrayFiltered]);
    }
  }

  return (
    <div>
      <Header></Header>
      <ProductsList
        products={products}
        addProductToCart={addProductToCart}
      ></ProductsList>
      <Cart
        products={products}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></Cart>
    </div>
  );
}

export default App;

/* const showProducts = () => {};
  const handleClick = (productId) => {
    return productId;
  }; */
