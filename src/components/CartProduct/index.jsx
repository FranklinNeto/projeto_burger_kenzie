import { LiCardProduct } from "./styles";

function CartProduct({ cartProduct, cartProducts, setCartProducts }) {
  function removeProductFromCart(productId) {
    setCartProducts(cartProducts.filter((element) => element.id !== productId));
  }

  return (
    <LiCardProduct>
      <div>
        <figure>
          <img alt="" src={cartProduct.img} />
        </figure>

        <div className="card-product--descricao">
          <h2>{cartProduct.name}</h2>
          <p>{cartProduct.category}</p>
        </div>
      </div>
      <button onClick={() => removeProductFromCart(cartProduct.id)}>
        Remover
      </button>
    </LiCardProduct>
  );
}

export default CartProduct;
