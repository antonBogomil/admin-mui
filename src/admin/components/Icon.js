import React from 'react';
import icons from "../settings/icons";

const Icon = (props) => {
    const {name} = props;
    const Component = icons[name];
    return (<Component {...props}/>);
};

export default Icon;