import * as ActionOrder from "../constant/orderConstant";

export const GetOrderRequest = () => ({
  type: ActionOrder.GET_ORDER_REQUEST,
});

export const GetOrderSuccess = (payload: any) => ({
  type: ActionOrder.GET_ORDER_SUCCESS,
  payload,
});

export const GetOrderFailed = (payload: any) => ({
  type: ActionOrder.GET_ORDER_FAILED,
  payload,
});
