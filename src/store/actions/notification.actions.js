import {ACTION_TYPES} from "../types";
import store from "../index";

export const notificationActions = {
    showNotification,
    hideNotification
};

function showNotification(message, variant) {
    store.dispatch({
        type: ACTION_TYPES.SHOW_NOTIFICATION,
        payload: {
            message,
            variant
        }
    });
}

function hideNotification() {
    store.dispatch({
        type: ACTION_TYPES.CLOSE_NOTIFICATION,
    });
}