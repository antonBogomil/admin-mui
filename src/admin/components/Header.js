import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import LanguagePanel from "./LanguagePanel";
import {useStyles} from "../styles";
import {useTranslation} from "react-i18next";

const Header = (props) => {
    const [t] = useTranslation();
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.header}>
                        <Typography variant="h6" noWrap>
                            {t('HELLO', {name: 'Admin'})}
                        </Typography>
                        <div className={classes.headerRight}>
                            <LanguagePanel/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;