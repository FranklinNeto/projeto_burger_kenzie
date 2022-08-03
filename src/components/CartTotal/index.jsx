import { ContainerCartTotal } from "./styles";

function CartTotal({ cartProducts, setCartProducts }) {
  const totalPrice = cartProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  function removeAll() {
    setCartProducts([]);
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
