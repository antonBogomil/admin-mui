import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import classNames from 'classnames';
import React from "react";
import {useStyles} from "../../styles";
import dateFormat from 'dateformat';
import {LIST_COLUMN_TYPE} from "../../../constants/list";
import Avatar from "@material-ui/core/Avatar";
import {CheckBox as CheckTrueIcon} from "@material-ui/icons";
import {IndeterminateCheckBox as CheckFalseIcon} from "@material-ui/icons";

const ListHead = ({fields}) => {
    // const classes = useStyles();
    return (
        <TableHead>
            <TableRow>
                {fields.map((field) => {
                    return (
                        <TableCell key={field.title}>
                            {field.title}
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    )
};

const ListBody = ({items = [], fields = [], rows = 0, loading}) => {
    let result = [];
    const classes = useStyles();
    for (let i = 0; i < rows; i++) {
        result.push(
            <TableRow key={i}>
                {
                    fields.map((field, j) => {
                        let item = items[i];
                        let val = item ? item[field.name] : null;
                        return (
                            <ListCell key={j}
                                      value={val}
                                      type={field.type}
                                      loading={loading}
                                      classes={classes}/>
                        )
                    })
                }
            </TableRow>
        );
    }
    return (
        <TableBody>
            {result}
        </TableBody>
    )
};
const ListCell = ({value, type, loading, empty}) => {
    const classes = useStyles();
    function getViewByType(value, type) {
        if (value !== null) {
            switch (type) {
                case LIST_COLUMN_TYPE.DATE:
                    return dateFormat(value, "dd-mm-yyyy, HH:MM");
                case LIST_COLUMN_TYPE.IMG :
                    return <Avatar alt={value} src={value} className={classes.cellImg}/>;
                case LIST_COLUMN_TYPE.BOOLEAN :
                    return (value ? <CheckTrueIcon className={classes.checkedIcon}/> : <CheckFalseIcon className={classes.checkedIconFalse}/>);
                default:
                    return value
            }
        } else {
            return '-'
        }
    }

    return (
        <TableCell className={classNames(classes.cell, {[classes.loadingField]: loading || empty})}>
            {getViewByType(value, type)}
        </TableCell>
    )
};


export {ListBody, ListCell, ListHead}