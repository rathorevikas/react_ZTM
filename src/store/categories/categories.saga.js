import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocument } from "../../components/utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocument, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
