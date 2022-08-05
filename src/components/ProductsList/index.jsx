import Product from "../Product";
import { ContainerProductList } from "./styles";
import ProductFiltered from "../ProductFiltered";

function ProductsList({
  products,
  addProductToCart,
  filteredProducts,
  inputSearch,
}) {
  return (
    <ContainerProductList>
      {filteredProducts.length !== 0 && (
        <section>
          <h2 className="searchResults">
            Resultados para: <span>{inputSearch}</span>
          </h2>
        </section>
      )}
      <ul>
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
      </ul>
    </ContainerProductList>
  );
}
export default ProductsList;
