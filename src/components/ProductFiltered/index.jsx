import { Button } from "../Button/styles";
import { LiMainCardProduct } from "../Product/styles";

function ProductFiltered({ filteredProduct, addProductToCart }) {
  return (
    <LiMainCardProduct>
      <figure>
        <img alt="" src={filteredProduct.img} className="mainCardImage" />
      </figure>
      <div>
        <h2>{filteredProduct.name}</h2>
        <span>{filteredProduct.category}</span>
        <p>R$ {filteredProduct.price.toFixed(2)}</p>
        <Button onClick={() => addProductToCart(filteredProduct.id)}>
          Adicionar
        </Button>
      </div>
    </LiMainCardProduct>
  );
}

export default ProductFiltered;
