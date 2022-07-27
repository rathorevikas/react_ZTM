

import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Arrow, BaseSpan, CheckOutItemContainer, ImageContainer, QuantitySpan, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { clearCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearCartItem(cartItem);
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </QuantitySpan>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
