import "./cart-dropdown.styles.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
// import { CartContext } from "../../context/cartContext";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  ErrorMessage,
} from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  //  const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </CartItems>
          <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
        </>
      ) : (
        <ErrorMessage>Your Cart is Empty !</ErrorMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
