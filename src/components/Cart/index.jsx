import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
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
      <CartTotal filteredProducts={filteredProducts}></CartTotal>
    </div>
  );
}

export default Cart;
