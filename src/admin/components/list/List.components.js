import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import classNames from 'classnames';
import React from "react";
import {useStyles} from "../../styles";

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
                        let val = item ? item[field.name] : '-';
                        return (
                            <ListCell key={j}
                                      value={val}
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
    return (
        <TableCell className={classNames({[classes.loadingField]: loading || empty})}>
            {value}
        </TableCell>
    )
};

export {ListBody, ListCell, ListHead}