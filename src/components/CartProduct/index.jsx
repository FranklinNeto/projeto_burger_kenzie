function CartProduct({ filteredProduct }) {
  return (
    <li>
      <figure>
        <img alt="" src={filteredProduct.img} />
      </figure>

      <div className="card-product--descricao">
        <h2>{filteredProduct.name}</h2>
        <p>{filteredProduct.category}</p>
      </div>
      <button>Remover</button>
    </li>
  );
}

export default CartProduct;
