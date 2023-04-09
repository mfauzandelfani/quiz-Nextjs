import * as ActionType from "../constant/orderConstant";

const init_state = {
  order: [],
};

const OrderReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDER_REQUEST:
      return { ...state };
    case ActionType.GET_ORDER_SUCCESS:
      return GetOrder(state, action);

    default:
      return { ...state };
  }
};

const GetOrder = (state: any, action: any) => {
  return {
    ...state,
    order: action.payload,
  };
};

export default OrderReduce;
