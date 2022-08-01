import Product from "../Product";
import Cart from "../Cart";
function ProductsList({ products }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            products={products}
          ></Product>
        ))}
      </ul>
    </>
  );
}
export default ProductsList;
