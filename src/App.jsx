import Global from "./styles/global";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { MainContainer } from "./components/MainContainer/styles";

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

    if (arrayProductSelected[0].isInTheCart === false) {
      arrayProductSelected[0].isInTheCart = true;
      arrayProductSelected[0].quantityCart += 1;

      setCartProducts([...cartProducts, ...arrayProductSelected]);
    } else {
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id === productId) {
          cartProducts[i].quantityCart += 1;
          setCartProducts([...cartProducts]);
        }
      }
    }
  }

  return (
    <div>
      <Global />
      <Header products={products} setProducts={setProducts}></Header>
      <MainContainer>
        <div>
          <ProductsList
            products={products}
            addProductToCart={addProductToCart}
          ></ProductsList>
        </div>
        {/* <div> */}
        <Cart
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></Cart>
        {/*  </div> */}
      </MainContainer>
    </div>
  );
}

export default App;
