import { ActionWithPayload, createAction, withMatcher } from "../../components/utils/reducer/reducer.utils";
import { CategoryItemType } from "../categories/categories.type";
import { CartItemsType, CART_ACTION_TYPES } from "./cart.type";

const addItem = (cartItems:CartItemsType[], productToAdd:CategoryItemType): CartItemsType[] => {
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

const removeItem = (cartItems:CartItemsType[], prdouctToRemove:CartItemsType) => {
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

const clearItem = (cartItems: CartItemsType[] , prdouctToClear:CartItemsType) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== prdouctToClear.id
  );
  return newCartItems;
};


export type SetCartIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItemsType[]
>;

export const setCartItems = withMatcher((cartItems: CartItemsType[] ):SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const setIsCartOpen = withMatcher((bool:boolean):SetCartIsOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

export const addItemToCart = (cartItems:CartItemsType[], productToAdd:CategoryItemType) => {
  const addCartItems = addItem(cartItems, productToAdd);
  return setCartItems(addCartItems);
};

export const removeItemFromCart = (cartItems:CartItemsType[], prdouctToRemove:CartItemsType) => {
  const removeCartItems = removeItem(cartItems, prdouctToRemove);
  return setCartItems(removeCartItems);
};

export const clearCartFromItem = (cartItems:CartItemsType[], prdouctToClear:CartItemsType) => {
  const clearCartItem = clearItem(cartItems, prdouctToClear);
  return setCartItems(clearCartItem);
};
