import React from 'react';
import {withStyles} from "@material-ui/core";
import {mainStyles} from "../styles/main.styles";
import AdminRouting from "./Routing";

const Main = props => {
    const {classes} = props;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <AdminRouting/>
        </main>
    );
};
export default withStyles(mainStyles)(Main);