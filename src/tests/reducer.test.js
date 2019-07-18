import userReducer from "../store/reducer/user.reducer";
import {ACTION_TYPES} from "../store/types";
it('USER_AUTH', () => {
    const initialState = {
        user: null
    };
    const action = {
        type: ACTION_TYPES.USER_LOGIN,
        payload: {login: 'admin', password: '12'}
    };
    expect(userReducer(initialState, action)).toEqual(action.payload)
});