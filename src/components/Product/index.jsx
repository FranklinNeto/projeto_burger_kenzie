function Product({ product, addProductToCart }) {
  return (
    <li>
      <img alt="" src={product.img} />
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <p>R$ {product.price}</p>
      <button onClick={() => addProductToCart(product.id)}>Adicionar</button>
    </li>
  );
}
export default Product;
