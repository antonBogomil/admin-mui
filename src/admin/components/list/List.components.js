import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import classNames from 'classnames';
import React, {useState} from "react";
import {useStyles} from "../../styles";
import dateFormat from 'dateformat';
import {LIST_COLUMN_TYPE} from "../../../constants/list";
import CheckTrueIcon from "@material-ui/icons/CheckBox";
import CheckFalseIcon from "@material-ui/icons/IndeterminateCheckBox";
import EditIcon from "@material-ui/icons/Edit"
import {history} from '../../../utils/history';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "../Avatar";
import {Person} from "@material-ui/icons";

const ListHead = (config) => {
    console.log('haed');
    // const classes = useStyles();
    return (
        <TableHead>
            <TableRow>
                {config.fields.map((field) => {
                    return (
                        <TableCell key={field.title}>
                            {field.title}
                        </TableCell>
                    )
                })}
                {config.edit && <TableCell key={'edit'}/>}
            </TableRow>
        </TableHead>
    )
};

const ListBody = ({items = [], config: {fields, edit}, rows = 0, loading}) => {
    const classes = useStyles();
    let result = [];
    for (let i = 0; i < rows; i++) {
        let item = items[i];
        result.push(
            <TableRow key={i}
                      className={classes.row}
            >
                {
                    fields.map((field, j) => {
                        let val = item ? item[field.name] : null;
                        return (
                            <ListCell key={j}
                                      value={val}
                                      type={field.type}
                                      defaultValue={field.default}
                                      loading={loading}
                                      classes={classes}/>
                        )
                    })
                }
                {
                    edit &&
                    <TableCell className={classNames(classes.cellCenter, classes.cellBtn)}>
                        {
                            !loading && (
                                <IconButton
                                    color={'primary'}
                                    onClick={() => {
                                        history.push(`edit/${item.id}`)
                                    }}>
                                    <EditIcon fontSize={'default'}/>
                                </IconButton>
                            )
                        }
                    </TableCell>
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
const ListCell = ({value, type, defaultValue, loading, empty}) => {
    const classes = useStyles();

    function getViewByType(value, type) {
        if (value !== null) {
            switch (type) {
                case LIST_COLUMN_TYPE.DATE:
                    return dateFormat(value, "dd-mm-yyyy, HH:MM");
                case LIST_COLUMN_TYPE.IMG :
                    return (
                        <Avatar imgSrc={value}
                                key={value}
                                classes={{
                                    colorDefault: classes.listAvatarColor
                                }}
                                className={classes.cellImg}
                                color={"primary"}
                        >
                            {defaultValue}
                        </Avatar>
                    );
                case LIST_COLUMN_TYPE.BOOLEAN :
                    return (value ? <CheckTrueIcon className={classes.checkedIcon}/> :
                        <CheckFalseIcon className={classes.checkedIconFalse}/>);
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