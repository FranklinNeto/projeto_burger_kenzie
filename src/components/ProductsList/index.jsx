import Product from "../Product";
import { ContainerProductList } from "./styles";

function ProductsList({ products, addProductToCart }) {
  return (
    <>
      <ContainerProductList /* className="listaDeProdutos" */>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          ></Product>
        ))}
      </ContainerProductList>
    </>
  );
}
export default ProductsList;
