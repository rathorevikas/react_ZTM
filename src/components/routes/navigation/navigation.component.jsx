import React from "react";
import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";
import { useDispatch } from "react-redux/es/exports.js";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
// import { UserContext } from "../../../context/userContext";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../../context/cartContext";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { selectCurrentUser } from "../../../store/user/user.selector.js";
import { selectCartIsOpen } from "../../../store/cart/cart.selector.js";
import { signOutStart } from "../../../store/user/user.action.js";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon className="nav-link" />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
