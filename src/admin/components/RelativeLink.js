import React from 'react';
import {Link, NavLink, withRouter} from "react-router-dom";

const RelativeLink = (props) => {
    const {match, to} = props;
    const url = match.url + to;
    function handleClick() {
        props.history.push(url);
    }
    return (
        <Link to={url}>
            {props.children}
        </Link>
    );
};

export default withRouter(RelativeLink);