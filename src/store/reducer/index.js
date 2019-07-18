import {combineReducers} from 'redux'
import siteReducer from "./site.reducer";
import userReducer from "./user.reducer";
import notificationReducer from './notification.reducer';

export const rootReducer = combineReducers({
    site: siteReducer,
    user: userReducer,
    notification: notificationReducer
});