import * as ActionType from "../constant/userConstant";

export const UserSigninRequest = (payload: any) => ({
  type: ActionType.USER_SIGNIN_REQUEST,
  payload,
});

export const UserSigninSuccess = (payload: any) => ({
  type: ActionType.USER_SIGNIN_SUCCESS,
  payload,
});

export const UserSigninFailed = (payload: any) => ({
  type: ActionType.USER_SIGNIN_FAILED,
  payload,
});
///

export const UserSignupRequest = (payload: any) => ({
  type: ActionType.USER_SIGNUP_REQUEST,
  payload,
});

export const UserSignupSuccess = (payload: any) => ({
  type: ActionType.USER_SIGNUP_SUCCESS,
  payload,
});

export const UserSignupFailed = (payload: any) => ({
  type: ActionType.USER_SIGNUP_FAILED,
  payload,
});

///

export const UserSignoutRequest = () => ({
  type: ActionType.USER_SIGNOUT_REQUEST,
});

export const UserSignoutSuccess = (payload: any) => ({
  type: ActionType.USER_SIGNOUT_SUCCESS,
  payload,
});

export const UserSignoutFailed = (payload: any) => ({
  type: ActionType.USER_SIGNOUT_FAILED,
  payload,
});

export const GetUserRequest = () => ({
  type: ActionType.GET_USER_REQUEST,
});

export const GetUserSuccess = (payload: any) => ({
  type: ActionType.GET_USER_SUCCESS,
  payload,
});

export const GetUserFailed = (payload: any) => ({
  type: ActionType.GET_USER_FAILED,
  payload,
});
