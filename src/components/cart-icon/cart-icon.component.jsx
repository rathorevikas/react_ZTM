import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleHandler}>
      <ShopCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
