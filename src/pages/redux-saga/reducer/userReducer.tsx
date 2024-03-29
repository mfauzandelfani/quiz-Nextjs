import { use } from "react";
import * as ActionType from "../constant/userConstant";
import { getCookie } from "cookies-next";

const getFromCookies = (key: any) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return getCookie(key);
};

const INIT_STATE = {
  UserProfile: getFromCookies("profile")
    ? JSON.parse(getCookie("profile"))
    : null,
  userSignup: null,
};

const init_state = {
  user: [],
};

const UserReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.USER_SIGNIN_REQUEST:
      return state;
    case ActionType.USER_SIGNIN_SUCCESS:
      return UserSignin(state, action);
    case ActionType.USER_SIGNUP_REQUEST:
      return state;
    case ActionType.USER_SIGNUP_SUCCESS:
      return UserSignup(state, action);
    case ActionType.USER_SIGNOUT_REQUEST:
      return state;
    case ActionType.USER_SIGNOUT_SUCCESS:
      return UserSignout(state, action);
    case ActionType.GET_USER_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SUCCESS:
      return GetUser(state, action);

    default:
      return state;
  }
};

const UserSignin = (state: any, action: any) => {
  return {
    ...state,
    userProfile: action.payload,
  };
};

const UserSignout = (state: any, action: any) => {
  return {
    ...state,
    UserProfile: null,
    UserSignup: null,
  };
};

const UserSignup = (state: any, action: any) => {
  return {
    ...state,
    userSignup: action.payload,
  };
};

const GetUser = (state: any, action: any) => {
  return {
    ...state,
    user: action.payload,
  };
};

export default UserReducer;
