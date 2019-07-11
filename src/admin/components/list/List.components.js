import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import classNames from 'classnames';
import React from "react";

const ListHead = ({fields, classes}) => {
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

const ListBody = ({items = [], fields = [], rows = 0, loading, classes}) => {
    let result = [];
    for (let i = 0; i < rows; i++) {
        if (items[i]) {
            let item = items[i];
            result.push(
                <TableRow key={i}>
                    {
                        fields.map((field, i) => {
                            return (
                                <ListCell key={i} value={item[field.name]} loading={loading} classes={classes}/>
                            )
                        })
                    }
                </TableRow>
            )
        } else {
            result.push(
                <TableRow key={i}>
                    {
                        fields.map((field, i) => {
                            return (
                                <ListCell key={i} value={'-'} loading={loading} classes={classes}/>
                            )
                        })
                    }
                </TableRow>
            )
        }
    }
    return (
        <TableBody>
            {result}
        </TableBody>
    )
};
const ListCell = ({value, type, loading, empty, classes}) => {
    return (
        <TableCell className={classNames({[classes.loadingField]: loading || empty})}>
            {value}
        </TableCell>
    )
};

export {ListBody, ListCell, ListHead}