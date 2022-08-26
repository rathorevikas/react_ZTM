// export const CATEGORIES_ACTION_TYPES = {
//   // SET_CATEGORIES: "categories/SET_CATEGORIES",
//   FETCH_CATEGORIES_START: "categories/FETCH_CATEGORIES_START",
//   FETCH_CATEGORIES_SUCCESS: "categories/FETCH_CATEGORIES_SUCCESS",
//   FETCH_CATEGORIES_FAILED: "categories/FETCH_CATEGORIES_FAILED",
// };

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "categories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "categories/FETCH_CATEGORIES_FAILED",
}

export type CategoryItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CategoryType = {
  title: string;
  imageUrl: string;
  items: CategoryItemType[];
};

export type CategoryMap = {
  [key: string]: CategoryItemType[];
};
