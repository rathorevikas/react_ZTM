import { createContext, useEffect, useState } from "react";

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
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearCartItem: () => null,
  cartItemsCount: 0,
  cartTotal: 0,
});

export const CartProvide = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemsCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (prdouctToRemove) => {
    setCartItems(removeItem(cartItems, prdouctToRemove));
  };

  const clearCartItem = (prdouctToClear) => {
    setCartItems(clearItem(cartItems, prdouctToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearCartItem,
    cartItems,
    cartItemsCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
