import { combineReducers } from "redux";
import CustomerReduce from "./customerReducer";
import CategoryReduce from "./categoryReducer";
import ProductReduce from "./productReducer";
import OrderReduce from "./orderReducer";
import DetailReduce from "./detailReducer";
import UserReducer from "./userReducer";
const rootReducer = combineReducers({
  customerState: CustomerReduce,
  categoryState: CategoryReduce,
  productState: ProductReduce,
  orderState: OrderReduce,
  detailState: DetailReduce,
  userState: UserReducer
});

export default rootReducer;
