import React from 'react';
import Notification from "./Notification";
import {useSelector} from "react-redux";

const withNotification = (Component) => {
    return (props) => {
        const notification = useSelector((state) => {
            return state.notification
        });
        return (
            <>
                <Component {...props}/>
                <Notification message={notification.message}
                              variant={notification.variant}
                />
            </>
        )
    };
};

export default withNotification;