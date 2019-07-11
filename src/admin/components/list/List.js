import React from 'react';
import {withStyles} from "@material-ui/core";
import {listStyle} from "../../../admin/styles/list.style";
import ListWithPaging from "./_ListWithPaging";
import ListDefault from "./_ListDefault";

const List = ({data = [], config,classes}) => {
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
export default withStyles(listStyle)(List);
