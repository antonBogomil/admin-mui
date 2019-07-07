import {combineReducers} from 'redux'
import siteReducer from "./site.reducer";
import userReducer from "./user.reducer";

export const rootReducer = combineReducers({
    site: siteReducer,
    user: userReducer
});