import { combineReducers } from "redux";
import { battleReducer } from "./battle/reducers";


export default combineReducers({
    battle: battleReducer
});