import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {ListBody, ListHead} from "./List.components";
import TablePagination from "@material-ui/core/TablePagination";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import {_httpRequest} from "../../../utils/_httpRequest";
import {useStyles} from "../../styles";
import {LIST_ACTIONS, listReducer} from "./List.reducer";
import {Typography} from "@material-ui/core";


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
		let isSubscribed = true;
		dispatch({type: LIST_ACTIONS.PAGE_LOADING});
		_httpRequest.get(config.dataUrl, {
			page: page,
			rows: rows
		}).then((data) => {
			isSubscribed && dispatch({
				type: LIST_ACTIONS.PAGE_LOADED,
				payload: data,
			})
		}).catch((e) => {
			dispatch({
				type: LIST_ACTIONS.DATA_ERROR,
				payload: "Ooops...",
			})
		});
		return () => {
			isSubscribed = false
		}
	}, [config.dataUrl, page, rows]);

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

	const head = useMemo(() => ListHead(config), [config]);
	const body = <ListBody config={config}
						   loading={loading}
						   items={items}
						   rows={rows}
	/>;
	console.log(state);
	return (
		<>
			{error ?
				<Typography variant={"body1"} color={"error"}>{error}</Typography> :
				<>
					<div className={classes.listProgress}>
						{loading && <LinearProgress variant={"query"}/>}

					</div>
					<Table>
						{head}
						{body}
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
			}
		</>
	)
};

export default List;