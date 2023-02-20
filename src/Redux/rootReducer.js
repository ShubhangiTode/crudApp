import { combineReducers } from "redux";
import useReducer from "./User/Reducer";

const rootReducer = combineReducers({
  user: useReducer,
});

export default rootReducer;
