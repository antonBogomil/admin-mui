import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Menu from "./components/Menu";
import Main from "./components/Main";
import Header from "./components/Header";
import withTheme from "../hoc/withTheme";
import menu from "./settings/menu";
import withStyles from "@material-ui/core/styles/withStyles";
import {mainStyles} from "./styles/main.styles";
import store from "../store";
import themeService from '../services/theme.service';



const theme = themeService.create(store.getState().site.theme);

const Admin = (props) => {
    const {classes} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header handleDrawerToggle={handleDrawerToggle}/>
            <nav className={classes.drawer} aria-label="Mailbox folders">
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.toolbar}>
                            <img alt={'logo'} src="/logo.png" className={classes.logo}/>
                        </div>
                        <Divider/>
                        <Menu data={menu} parentUrl={'/admin'}/>
                    </Drawer>
                </Hidden>
            </nav>
            <Main/>
        </div>
    );
};

Admin.propTypes = {
    container: PropTypes.object,
};
export default withTheme(withStyles(mainStyles)(Admin),theme);