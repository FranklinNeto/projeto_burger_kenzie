import Product from "../Product";
import { ContainerProductList } from "./styles";
import ProductFiltered from "../ProductFiltered";

function ProductsList({
  products,
  addProductToCart,
  filteredProducts,
  setFilteredProducts,
}) {
  return (
    <ContainerProductList /* className="listaDeProdutos" */>
      {filteredProducts.length !== 0
        ? filteredProducts.map((filteredProduct) => (
            <ProductFiltered
              key={filteredProduct.id}
              filteredProduct={filteredProduct}
              addProductToCart={addProductToCart}
            ></ProductFiltered>
          ))
        : products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            ></Product>
          ))}
    </ContainerProductList>
  );
}
export default ProductsList;
