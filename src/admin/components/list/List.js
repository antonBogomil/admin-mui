import React from 'react';
import ListWithPaging from "./_ListWithPaging";
import ListDefault from "./_ListDefault";
import {useStyles} from "../../styles";

const List = ({data = [], config,}) => {
    const classes = useStyles();
    const {paging} = config;
    if (paging) {
        return (
            <ListWithPaging classes={classes} config={config}/>
        )
    } else {
        return (
            <ListDefault classes={classes} config={config}/>
        )
    }
};
List.propTypes = {};
export default List;
