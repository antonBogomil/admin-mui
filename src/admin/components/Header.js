import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import LanguagePanel from "./LanguagePanel";
import {useStyles} from "../styles";

const Header = (props) => {
    const {handleDrawerToggle} = props;
    const classes = useStyles();
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

export default Header;