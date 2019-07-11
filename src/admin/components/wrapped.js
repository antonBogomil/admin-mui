import React from "react";
import {withStyles} from "@material-ui/styles";
import {mainStyle} from "../styles/main.style";
import Typography from "@material-ui/core/Typography";

export default function wrappedPage(Component, settings) {
    let WrappedPage = (props) => {
        const {classes} = props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography variant="h3"
                            component="h3"
                            color={'primary'}
                >
                    {settings.title}
                </Typography>
                <Component {...props}/>
            </main>
        )
    };
    return withStyles(mainStyle)(WrappedPage);
}