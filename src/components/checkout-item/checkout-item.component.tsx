import React, { FC } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import { CartContext } from "../../context/cartContext";
import {
  addItemToCart,
  clearCartFromItem,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  Arrow,
  BaseSpan,
  CheckOutItemContainer,
  ImageContainer,
  QuantitySpan,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import { CartItemsType } from "../../store/cart/cart.type";

type CheckoutItemProps = {
  cartItem: CartItemsType
}

const CheckoutItem :FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  // const { clearCartFromItem, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearCartFromItem(cartItems, cartItem));

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantitySpan>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
