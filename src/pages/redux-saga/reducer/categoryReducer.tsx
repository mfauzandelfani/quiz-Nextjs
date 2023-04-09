import * as ActionType from "../constant/categoryConstant";

const init_state = {
  category: [],
};

const CategoryReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_CATEGORY_SUCCESS:
      return GetCategory(state, action);

    default:
      return { ...state };
  }
};

const GetCategory = (state: any, action: any) => {
  return {
    ...state,
    category: action.payload,
  };
};

export default CategoryReduce;
