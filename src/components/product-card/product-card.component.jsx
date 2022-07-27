import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../context/cartContext";
import { Name, Price, ProductCardContainer, ProductCardFooter } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemToCartHandler}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
