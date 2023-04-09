import { call, put } from "redux-saga/effects";
import Detail from "../../api/detail";
import {
  GetDetailSuccess,
  GetDetailFailed,
} from "../action/detailAction";
function* handleGetDetail(): any {
  try {
    const result = yield call(Detail.GetData);
    yield put(GetDetailSuccess(result));
  } catch (error) {
    yield put(GetDetailFailed(error));
  }
}

export { handleGetDetail };
