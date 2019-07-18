import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {withStyles} from "@material-ui/styles";
import {mainStyle} from "../styles/main.style";
import LanguagePanel from "./LanguagePanel";

const Header = (props) => {
    const {classes,handleDrawerToggle} = props;
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.header}>
                        <Typography variant="h6" noWrap>
                            Responsive drawer
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

export default withStyles(mainStyle)(Header);