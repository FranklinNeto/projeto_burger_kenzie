import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { Container } from "./styles";

function Cart({ cartProducts, setCartProducts, product, setProducts }) {
  return (
    <Container>
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
      </div>
      <CartTotal
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></CartTotal>
    </Container>
  );
}

export default Cart;
