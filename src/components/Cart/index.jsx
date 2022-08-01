import CartProduct from "../CartProduct";
import { useState } from "react";

function Cart({ products }) {
  /*  const [filteredProducts, setFilteredProducts] = useState([]);

  const addProductToCart = (productId) => {
    setFilteredProducts(products.filter((product) => (product.id = productId)));
  }; */

  return (
    <div>
      <header>
        <h2>Carrinho de Compras</h2>
      </header>
      <ul className="cartSpace"></ul>
    </div>
  );
}

export default Cart;
