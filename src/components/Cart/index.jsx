import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({ cartProducts, setCartProducts }) {
  return (
    <div>
      <header>
        <h2>Carrinho de Compras</h2>
      </header>
      <ul className="cartSpace">
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            cartProduct={cartProduct}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></CartProduct>
        ))}
      </ul>
      <CartTotal
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></CartTotal>
    </div>
  );
}

export default Cart;
