import "./product-card.styles.scss";
import React, { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../context/cartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="product-card-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCartHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
