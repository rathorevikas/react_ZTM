import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports.js";
import "./cart-icon.styles.jsx";
// import { CartContext } from "../../context/cartContext";
import {
  CartIconContainer,
  ItemCount,
  ShopCartIcon,
} from "./cart-icon.styles.jsx";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartIsOpen);
  const toggleHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShopCartIcon className="shopping-icon" />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
