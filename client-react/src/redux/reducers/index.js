import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import plannerReducer from "./plannerReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    plannerReducer
});