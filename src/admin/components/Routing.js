import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import routes from '../settings/routes'
import Preloader from "@material-ui/core/CircularProgress";

const AdminRouting = (props) => {
    return (
        <Suspense fallback={<Preloader size={4}/>}>
            <Switch>
                {routes.map((route, i) => {
                        return <Route key={i} path={`${props.match.url + route.path}`} exact={route.exact}
                                      component={route.action}/>
                    }
                )}
            </Switch>
        </Suspense>
    );
};

export default withRouter(AdminRouting);