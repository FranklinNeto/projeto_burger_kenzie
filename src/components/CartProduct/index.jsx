import { LiCardProduct } from "./styles";

function CartProduct({ cartProduct, cartProducts, setCartProducts }) {
  function removeProductFromCart(productId) {
    const arrayProductToBeDeleted = cartProducts.filter(
      (product) => product.id === productId
    );

    if (arrayProductToBeDeleted[0].quantityCart > 1) {
      arrayProductToBeDeleted[0].quantityCart -= 1;
      setCartProducts([...cartProducts]);
    } else {
      arrayProductToBeDeleted[0].isInTheCart = false;
      arrayProductToBeDeleted[0].quantityCart = 0;
      setCartProducts(
        cartProducts.filter((element) => element.id !== productId)
      );
    }
  }

  return (
    <LiCardProduct>
      <div className="card-product--img--descricao">
        <figure>
          <img alt="" src={cartProduct.img} />
        </figure>

        <div className="card-product--descricao">
          <h2>{cartProduct.name}</h2>
          <p>{cartProduct.category}</p>
          <span>Quantidade: {cartProduct.quantityCart}</span>
        </div>
      </div>
      <button onClick={() => removeProductFromCart(cartProduct.id)}>
        Remover
      </button>
    </LiCardProduct>
  );
}

export default CartProduct;
