import { useState } from "react";

function Product({ products, product }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  function addProductToCart(productId) {
    setFilteredProducts(products.filter((product) => (product.id = productId)));
  }

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
