import { Button } from "../Button/styles";

function Product({ product, addProductToCart }) {
  return (
    <li className="cardProduct">
      <img alt="" src={product.img} className="mainCardImage" />
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <p>R$ {product.price}</p>
      <Button onClick={() => addProductToCart(product.id)}>Adicionar</Button>
    </li>
  );
}
export default Product;
