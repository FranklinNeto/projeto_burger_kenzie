import Product from "../Product";

function ProductsList({ products, addProductToCart }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          ></Product>
        ))}
      </ul>
    </>
  );
}
export default ProductsList;
