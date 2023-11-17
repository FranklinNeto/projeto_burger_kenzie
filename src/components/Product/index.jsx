import { Button } from "../Button/styles";
import { LiMainCardProduct } from "./styles";
import { motion } from 'framer-motion';

function Product({ product, addProductToCart }) {
  return (
    <LiMainCardProduct>
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <figure>
        <img alt="" src={product.img} className="mainCardImage" />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>R$ {product.price.toFixed(2)}</p>
        <Button onClick={() => addProductToCart(product.id)}>Adicionar</Button>
      </div>
      </motion.div>
    </LiMainCardProduct>
  );
}
export default Product;
