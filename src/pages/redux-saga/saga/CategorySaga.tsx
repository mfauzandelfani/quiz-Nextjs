import { call, put } from "redux-saga/effects";
import Category from "../../api/category";
import {
  GetCategorySuccess,
  GetCategoryFailed,
} from "../action/categoryAction";
function* handleGetCategory(): any {
  try {
    const result = yield call(Category.GetData);
    yield put(GetCategorySuccess(result));
  } catch (error) {
    yield put(GetCategoryFailed(error));
  }
}

export { handleGetCategory };
