/* import logo from './logo.svg'; */
import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  /* const showProducts = () => {};
  const handleClick = (productId) => {
    
    
    
    return productId;
  }; */

  return (
    <div>
      <Header></Header>
      <ProductsList products={products}></ProductsList>
      <Cart products={products}></Cart>
    </div>
  );
}

export default App;
