import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { Container } from "./styles";

function Cart({ cartProducts, setCartProducts }) {
  return (
    <Container>
      <div>
        <header>
          <h2>Carrinho de Compras</h2>
        </header>
        <ul className="cartSpace">
          {cartProducts.length === 0 ? (
            <section>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione Itens</p>
            </section>
          ) : (
            cartProducts.map((cartProduct) => (
              <CartProduct
                key={cartProduct.id}
                cartProduct={cartProduct}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              ></CartProduct>
            ))
          )}
        </ul>
      </div>

      {cartProducts.length !== 0 && (
        <CartTotal
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></CartTotal>
      )}
    </Container>
  );
}

export default Cart;
