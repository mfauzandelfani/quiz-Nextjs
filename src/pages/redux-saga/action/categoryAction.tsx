import * as ActionCategory from "../constant/categoryConstant";

export const GetCategoryRequest = () => ({
  type: ActionCategory.GET_CATEGORY_REQUEST,
});

export const GetCategorySuccess = (payload: any) => ({
  type: ActionCategory.GET_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryFailed = (payload: any) => ({
  type: ActionCategory.GET_CATEGORY_FAILED,
  payload,
});
