import React from "react";
import AdminRouting from "../components/Routing";
import {withStyles} from "@material-ui/styles";
import {mainStyles} from "../styles/main.styles";

export default function wrappedPage(Component, settings) {

    const WrappedPage = (props) => {
        const {classes} = props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Component {...props}/>
            </main>
        )
    };

}