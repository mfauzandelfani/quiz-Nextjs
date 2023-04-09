import * as ActionType from "../constant/detailConstant";

const init_state = {
  detail: [],
};

const DetailReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_DETAIL_REQUEST:
      return { ...state };
    case ActionType.GET_DETAIL_SUCCESS:
      return GetDetail(state, action);

    default:
      return { ...state };
  }
};

const GetDetail = (state: any, action: any) => {
  return {
    ...state,
    detail: action.payload,
  };
};

export default DetailReduce;
