import * as ActionType from "../constant/customerConstant";

const init_state = {
  customer: [],

};

const CustomerReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.GET_CUSTOMER_SUCCESS:
      return GetCustomer(state, action);
   
    default:
      return { ...state };
  }
};

const GetCustomer = (state: any, action: any) => {
  return {
    ...state,
    customer: action.payload,
  };
};






export default CustomerReduce;
