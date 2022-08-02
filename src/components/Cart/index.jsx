import CartProduct from "../CartProduct";
import { useState } from "react";

function Cart({ filteredProducts, setFilteredProducts }) {
  return (
    <div>
      <header>
        <h2>Carrinho de Compras</h2>
      </header>
      <ul className="cartSpace">
        {filteredProducts.map((filteredProduct) => (
          <CartProduct
            key={filteredProduct.id}
            filteredProduct={filteredProduct}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          ></CartProduct>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
