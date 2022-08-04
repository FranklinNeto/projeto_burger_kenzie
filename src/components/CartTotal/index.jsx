import { ContainerCartTotal } from "./styles";

function CartTotal({ cartProducts, setCartProducts }) {
  const totalPrice = cartProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantityCart;
  }, 0);

  function removeAll() {
    cartProducts.map((element) => {
      element.quantityCart = 0;
      element.isInTheCart = false;
      return setCartProducts([]);
    });
  }
  return (
    <ContainerCartTotal>
      <div>
        <h2>Total:</h2>
        <p>R$ {totalPrice}</p>
      </div>
      <div>
        <button onClick={() => removeAll()}>Remover Todos</button>
      </div>
    </ContainerCartTotal>
  );
}

export default CartTotal;
