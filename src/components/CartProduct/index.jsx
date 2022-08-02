function CartProduct({ cartProduct, cartProducts, setCartProducts }) {
  function removeProductToCart(productId) {
    setCartProducts(cartProducts.filter((element) => element.id !== productId));
  }

  return (
    <li>
      <figure>
        <img alt="" src={cartProduct.img} />
      </figure>

      <div className="card-product--descricao">
        <h2>{cartProduct.name}</h2>
        <p>{cartProduct.category}</p>
      </div>
      <button onClick={() => removeProductToCart(cartProduct.id)}>
        Remover
      </button>
    </li>
  );
}

export default CartProduct;
