import {combineReducers} from 'redux'
import settingsReducer from "./settings.reducer";
import userReducer from "./user.reducer";
import notificationReducer from './notification.reducer';

export const rootReducer = combineReducers({
    settings: settingsReducer,
    user: userReducer,
    notification: notificationReducer
});
