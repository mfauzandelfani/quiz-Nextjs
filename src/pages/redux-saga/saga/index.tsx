import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeCustomer from "../constant/customerConstant";
import * as ActionTypeCategory from "../constant/categoryConstant";
import * as ActionTypeProduct from "../constant/productConstant"
import * as ActionTypeOrder from "../constant/orderConstant";
import * as ActionTypeDetail from "../constant/detailConstant"
import * as ActionTypeUser from "../constant/userConstant";
import { handleGetCustomer } from "./CustomerSaga";
import { handleGetCategory } from "./CategorySaga";
import { handleGetProduct } from "./ProductSaga";
import { handleGetOrder } from "./OrderSaga";
import {handleGetDetail} from "./DetailSaga"
import { handleSignin, handleSignup, handleSignout } from "./UserSaga";

function* watchAll() {
  yield all([takeEvery(ActionTypeCustomer.GET_CUSTOMER_REQUEST, handleGetCustomer)]);
  yield all([takeEvery(ActionTypeCategory.GET_CATEGORY_REQUEST, handleGetCategory)]);
  yield all([takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct)]);
   yield all([takeEvery(ActionTypeOrder.GET_ORDER_REQUEST, handleGetOrder)]);
   yield all([takeEvery(ActionTypeDetail.GET_DETAIL_REQUEST, handleGetDetail)]); 

     yield all([
       takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
       takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
       takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
     ]);
}

export default watchAll;
