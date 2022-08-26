import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItemsType } from "./cart.type";

export type CartItemsState = {
  readonly cartItems: CartItemsType[];
  readonly isCartOpen: boolean;
};

const CART_INITIAL_STATE: CartItemsState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartItemsState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  return state;
  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };

  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };

  //   default:
  //     return state;
  // }
};
