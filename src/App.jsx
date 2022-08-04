/* import logo from './logo.svg'; */
import "./App.css";
import "./reset.css";
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
      .then((res) => {
        res.map((element) => {
          element.isInTheCart = false;
          element.quantityCart = 0;
          return element;
        });
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function addProductToCart(productId) {
    const arrayProductSelected = products.filter(
      (product) => product.id === productId
    );

    const idFound = cartProducts.find(
      (element) => element.id === arrayProductSelected[0].id
    );
    if (idFound === undefined) {
      setCartProducts([...cartProducts, ...arrayProductSelected]);
    }
  }

  return (
    <div>
      <Header products={products} setProducts={setProducts}></Header>
      <div className="tudoMenosOHeader">
        <div>
          <ProductsList
            products={products}
            addProductToCart={addProductToCart}
          ></ProductsList>
        </div>
        <Cart
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></Cart>
      </div>
    </div>
  );
}

export default App;

/* const showProducts = () => {};
  const handleClick = (productId) => {
    return productId;
  }; */
