import CartProduct from "../CartProduct";
import { useState } from "react";

function Cart({ filteredProducts }) {
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
          ></CartProduct>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
