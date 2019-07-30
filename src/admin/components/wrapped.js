import React from "react";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {useStyles} from "../styles";
import {history} from '../../utils/history';
import {ArrowBack} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {useTranslation} from "react-i18next";

export default function wrappedPage(Component, settings) {
    return (props) => {
        const classes = useStyles();
        const [t] = useTranslation();
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container
                              direction="row"
                              justify="space-between"
                              alignItems="center"
                        >
                            <Grid item>
                                <IconButton onClick={() => {
                                    history.goBack()
                                }}>
                                    <ArrowBack color={'primary'}/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3"
                                            component="h3"
                                            color={'primary'}
                                >
                                    {t(settings.title)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Component {...props}/>
                    </Grid>
                </Grid>
            </main>
        )
    };
}