import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { CartContext } from "../../context/cartContext";
import {
  Name,
  Price,
  ProductCardContainer,
  ProductCardFooter,
} from "./product-card.styles.jsx";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
