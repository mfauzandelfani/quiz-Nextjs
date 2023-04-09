import * as ActionCustomer from "../constant/customerConstant";

export const GetCustomerRequest = () => ({
  type: ActionCustomer.GET_CUSTOMER_REQUEST,
});

export const GetCustomerSuccess = (payload: any) => ({
  type: ActionCustomer.GET_CUSTOMER_SUCCESS,
  payload,
});

export const GetCustomerFailed = (payload: any) => ({
  type: ActionCustomer.GET_CUSTOMER_FAILED,
  payload,
});
