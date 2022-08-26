// export const CART_ACTION_TYPES = {
//     SET_IS_CART_OPEN: "cart/SET_IS_CART_OPEN",
//     SET_CART_ITEMS: "cart/SET_CART_ITEMS",
//   };

import { CategoryItemType } from "../categories/categories.type";

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
}



export type CartItemsType = CategoryItemType & { quantity: number };
