import "./cart-dropdown.styles.jsx";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, ErrorMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

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
        <ErrorMessage>
          Your Cart is Empty !
        </ErrorMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
