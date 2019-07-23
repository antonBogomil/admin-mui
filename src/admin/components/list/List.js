import React, {useEffect, useReducer, useState} from 'react';
import {ListBody, ListHead} from "./List.components";
import TablePagination from "@material-ui/core/TablePagination";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import {_httpRequest} from "../../../utils/_httpRequest";
import {useStyles} from "../../styles";
import {LIST_ACTIONS, listReducer} from "./List.reducer";


const initialState = {
    page: 0,
    rows: 5,
    count: 0,
    error: false,
};
const List = ({config}) => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const {page, loading, error, items, rows, count, selected} = state;
    const classes = useStyles();
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

    return (
        <>
            <div className={classes.listProgress}>
                {loading && <LinearProgress variant={"query"}/>}
            </div>
            <Table>
                <ListHead config={config}/>
                <ListBody config={config}
                          loading={loading}
                          edit={config.edit}
                          items={items}
                          rows={rows}
                />
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
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

export default List;