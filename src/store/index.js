import {rootReducer} from "./reducer";
import {createStore} from "redux";

const LOCAL_STORAGE_KEY = "my-state";
const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {};
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
});
// unsubscribe();
export default store;
