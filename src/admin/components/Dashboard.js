import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Header from "./Header";
import routes from "../config/routes";
import {Route, Switch} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "../styles";
import Navigation from "./Navigation";
import Menu from "./Menu";
import menu from "../config/menu";

const Dashboard = (props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header handleDrawerToggle={handleDrawerToggle}/>
            <div className={classes.drawer} aria-label="Mailbox folders">
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.toolbar}>
                            <img alt={'logo'}
                                 src={"/logo.png"}
                                 className={classes.logo}/>
                        </div>
                        <Navigation>
                            <Menu {...props} data={menu} parentUrl={props.match.url}/>
                        </Navigation>
                    </Drawer>
                </Hidden>
            </div>
            <Suspense fallback={<CircularProgress disableShrink/>}>
                <Switch>
                    {routes.map((route, i) => {
                            return <Route key={i} path={`${props.match.url + route.path}`} exact={route.exact}
                                          component={route.action}/>
                        }
                    )}
                </Switch>
            </Suspense>
        </div>
    );
};

Dashboard.propTypes = {
    container: PropTypes.object,
};

export default Dashboard;