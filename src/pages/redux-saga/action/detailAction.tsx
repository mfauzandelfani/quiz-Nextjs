import * as ActionDetail from "../constant/detailConstant";

export const GetDetailRequest = () => ({
  type: ActionDetail.GET_DETAIL_REQUEST,
});

export const GetDetailSuccess = (payload: any) => ({
  type: ActionDetail.GET_DETAIL_SUCCESS,
  payload,
});

export const GetDetailFailed = (payload: any) => ({
  type: ActionDetail.GET_DETAIL_FAILED,
  payload,
});
