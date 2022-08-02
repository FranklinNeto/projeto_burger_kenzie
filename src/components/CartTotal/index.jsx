function CartTotal({ filteredProducts }) {
  const totalPrice = filteredProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  return (
    <div>
      <div>
        <h2>Total:</h2>
        <p>R$ {totalPrice}</p>
      </div>
      <button>Remover Todos</button>
    </div>
  );
}

export default CartTotal;
