import { call, put } from "redux-saga/effects";
import Customer from "../../api/customer";
import {
  GetCustomerSuccess,
  GetCustomerFailed,
} from "../action/customerAction";
function* handleGetCustomer(): any {
  try {
    const result = yield call(Customer.GetData);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}

export { handleGetCustomer };
