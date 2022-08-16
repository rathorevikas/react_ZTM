import { createContext, useReducer } from "react";

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

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearCartFromItem: () => null,
  cartItemsCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const INITIAL_STATE = {
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvide = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartItemsCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartItemsCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
  };

  const addItemToCart = (productToAdd) => {
    const addCartItems = addItem(cartItems, productToAdd);
    updateCartItemsReducer(addCartItems);
  };

  const removeItemFromCart = (prdouctToRemove) => {
    const removeCartItems = removeItem(cartItems, prdouctToRemove);
    updateCartItemsReducer(removeCartItems);
  };

  const clearCartFromItem = (prdouctToClear) => {
    const clearCartItem = clearItem(cartItems, prdouctToClear);
    updateCartItemsReducer(clearCartItem);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearCartFromItem,
    cartItems,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
