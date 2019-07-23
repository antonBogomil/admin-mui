export const LIST_ACTIONS = {
    PAGE_CHANGE: "CHANGE",
    PAGE_LOADING: "LOADING",
    PAGE_LOADED: "LOADED",
    DATA_ERROR: "ERROR",
    SELECT: "SELECT",
    ROWS_CHANGE: "ROWS_CHANGE"
};
export function listReducer(state, action) {
    switch (action.type) {
        case LIST_ACTIONS.PAGE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case LIST_ACTIONS.PAGE_LOADED:
            return {
                ...state,
                error: false,
                loading: false,
                count: action.payload.count,
                items: action.payload.items,
                rows: action.payload.rows,
            };
        case LIST_ACTIONS.DATA_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case LIST_ACTIONS.PAGE_CHANGE:
            return {
                ...state,
                page: action.payload.page,
                rows: action.payload.rows
            };
        case LIST_ACTIONS.SELECT:
            return {
                ...state,
                selected: action.selected,
            };
        default:
            return state
    }
}
