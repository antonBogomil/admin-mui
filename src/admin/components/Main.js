import React from 'react';
import {withStyles} from "@material-ui/core";
import {mainStyle} from "../styles/main.style";
const Main = props => {
    const {classes} = props;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        </main>
    );
};






export default withStyles(mainStyle)(Main);