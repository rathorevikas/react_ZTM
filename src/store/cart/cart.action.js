import { createAction } from "../../components/utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

const addItem = (cartItems, productToAdd) => {
  const itemExistingIndex = cartItems.findIndex(
    (item) => item.id === productToAdd.id
  );
  if (itemExistingIndex >= 0) {
    cartItems[itemExistingIndex].quantity += 1;
    return [...cartItems];
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeItem = (cartItems, prdouctToRemove) => {
  const itemExistingIndex = cartItems.findIndex(
    (item) => item.id === prdouctToRemove.id
  );

  if (itemExistingIndex >= 0 && cartItems[itemExistingIndex].quantity > 1) {
    cartItems[itemExistingIndex].quantity -= 1;
    return [...cartItems];
  } else {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== prdouctToRemove.id
    );
    return newCartItems;
  }
};

const clearItem = (cartItems, prdouctToClear) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== prdouctToClear.id
  );
  return newCartItems;
};

const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const addCartItems = addItem(cartItems, productToAdd);
  return setCartItems(addCartItems);
};

export const removeItemFromCart = (cartItems, prdouctToRemove) => {
  const removeCartItems = removeItem(cartItems, prdouctToRemove);
  return setCartItems(removeCartItems);
};

export const clearCartFromItem = (cartItems, prdouctToClear) => {
  const clearCartItem = clearItem(cartItems, prdouctToClear);
  return setCartItems(clearCartItem);
};
