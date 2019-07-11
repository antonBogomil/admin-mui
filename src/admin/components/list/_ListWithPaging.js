import React, {useEffect, useReducer, useState} from 'react';
import {ListBody, ListHead} from "./List.components";
import TablePagination from "@material-ui/core/TablePagination";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import {_httpRequest} from "../../../utils/_httpRequest";

export const LIST_ACTIONS = {
    PAGE_CHANGE: "CHANGE",
    PAGE_LOADING: "LOADING",
    PAGE_LOADED: "LOADED",
    DATA_ERROR: "ERROR",
    SELECT: "SELECT",
    ROWS_CHANGE: "ROWS_CHANGE"
};
const initialState = {
    page: 0,
    rows: 5,
    count: 0,
    error: false,
};
const ListWithPaging = ({config, classes}) => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const {page, loading, error, items, rows, count, selected} = state;
    useEffect(() => {
        dispatch({type: LIST_ACTIONS.PAGE_LOADING});
        _httpRequest.get(config.dataUrl, {
            page: page,
            rows: rows
        }).then((data) => {
            dispatch({
                type: LIST_ACTIONS.PAGE_LOADED,
                payload: data,
            })
        })
    }, [page, rows]);

    function handleChangePage(event, newPage) {
        dispatch({
            type: LIST_ACTIONS.PAGE_CHANGE,
            payload: {
                page: newPage,
                rows: rows
            }
        })
    }

    function handleChangeRowsPerPage(e) {
        dispatch({
            type: LIST_ACTIONS.PAGE_CHANGE,
            payload: {
                rows: e.target.value,
                page: 0
            }
        })
    }

    console.log(state);
    return (
        <>
            {loading && <LinearProgress variant={"query"}/>}
            <Table>
                <ListHead fields={config.fields}/>
                <ListBody fields={config.fields}
                          loading={loading}
                          items={items}
                          rows={rows}
                          classes={classes}
                />
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                classes={{root: classes.pagination}}
                count={count}
                rowsPerPage={rows}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    )
};

function listReducer(state, action) {
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

export default ListWithPaging;