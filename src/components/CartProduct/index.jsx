import { LiCardProduct } from "./styles";
import { motion } from "framer-motion";

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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.div>
    </>
  );
}

export default CartProduct;
