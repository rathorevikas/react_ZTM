import React, { useContext } from "react";
import "./cart-icon.styles.jsx";
import { CartContext } from "../../context/cartContext";
import { CartIconContainer, ItemCount, ShopCartIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

    const toggleHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShopCartIcon className="shopping-icon" />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
