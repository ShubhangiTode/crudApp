import { combineReducers } from "redux";
import productReducer from "./Product/reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
