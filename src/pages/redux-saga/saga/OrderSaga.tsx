import { call, put } from "redux-saga/effects";
import Order from "../../api/order";
import {
  GetOrderSuccess,
  GetOrderFailed,
} from "../action/orderAction";
function* handleGetOrder(): any {
  try {
    const result = yield call(Order.GetData);
    yield put(GetOrderSuccess(result));
  } catch (error) {
    yield put(GetOrderFailed(error));
  }
}

export { handleGetOrder };
