import {ACTION_TYPES} from "../types";
import store from "../index";

export const notificationActions = {
    showSuccessMessage,
    showErrorMessage,
    hideMessage
};

function showErrorMessage(message) {
    store.dispatch({
        type: ACTION_TYPES.SHOW_NOTIFICATION,
        payload: {
            message,
            variant: 'error'
        }
    });
}
function showSuccessMessage(message) {
    store.dispatch({
        type: ACTION_TYPES.SHOW_NOTIFICATION,
        payload: {
            message,
            variant: 'success'
        }
    });
}

function showNotification(message, variant) {
    store.dispatch({
        type: ACTION_TYPES.SHOW_NOTIFICATION,
        payload: {
            message,
            variant
        }
    });
}

function hideMessage() {
    store.dispatch({
        type: ACTION_TYPES.CLOSE_NOTIFICATION,
    });
}