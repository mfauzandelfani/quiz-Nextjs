import { call, put } from "redux-saga/effects";
import Product from "../../api/product";
import {
  GetProductSuccess,
  GetProductFailed,
} from "../action/productAction";
function* handleGetProduct(): any {
  try {
    const result = yield call(Product.GetData);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}

export { handleGetProduct };
