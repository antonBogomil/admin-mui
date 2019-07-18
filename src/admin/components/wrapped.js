import React from "react";
import {withStyles} from "@material-ui/styles";
import {mainStyle} from "../styles/main.style";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

export default function wrappedPage(Component, settings) {
    let WrappedPage = (props) => {
        const {classes} = props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container spacing={3}>
                   <Grid item xs={12}>
                       <Typography variant="h3"
                                   component="h3"
                                   color={'primary'}
                       >
                           {settings.title}
                       </Typography>
                   </Grid>
                    <Grid item xs={12}>
                        <Component {...props}/>

                    </Grid>
                </Grid>
            </main>
        )
    };
    return withStyles(mainStyle)(WrappedPage);
}