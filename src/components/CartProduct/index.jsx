function CartProduct({
  filteredProduct,
  filteredProducts,
  setFilteredProducts,
}) {
  function removeProductToCart(productId) {
    setFilteredProducts(
      filteredProducts.filter((element) => element.id !== productId)
    );
  }

  return (
    <li>
      <figure>
        <img alt="" src={filteredProduct.img} />
      </figure>

      <div className="card-product--descricao">
        <h2>{filteredProduct.name}</h2>
        <p>{filteredProduct.category}</p>
      </div>
      <button onClick={() => removeProductToCart(filteredProduct.id)}>
        Remover
      </button>
    </li>
  );
}

export default CartProduct;
