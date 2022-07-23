import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

    const toggleHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleHandler}>
      <ShopCartIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
