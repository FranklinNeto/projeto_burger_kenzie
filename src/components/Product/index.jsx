import { Button } from "../Button/styles";
import { LiMainCardProduct } from "./styles";

function Product({ product, addProductToCart }) {
  return (
    <LiMainCardProduct>
      <figure>
        <img alt="" src={product.img} className="mainCardImage" />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>R$ {product.price.toFixed(2)}</p>
        <Button onClick={() => addProductToCart(product.id)}>Adicionar</Button>
      </div>
    </LiMainCardProduct>
  );
}
export default Product;
