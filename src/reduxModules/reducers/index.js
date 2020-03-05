import { combineReducers } from "redux";
import UserReducer from "./userReducer";

export default (rootReducers = combineReducers({
    userStore: UserReducer,
}));