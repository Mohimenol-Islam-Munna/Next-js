import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({ nameReducer, postReducer });

export default rootReducer;
