import React from 'react';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ErrorIcon from '@material-ui/icons/Error';
import {useInfoStyles} from "../styles/infoBar.style";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import classNames from 'classnames';
import Snackbar from "@material-ui/core/Snackbar";

const variantIcon = {
    error: ErrorIcon,
};
const Notification = ({className, message, onClose, open, variant, ...other}) => {
    const classes = useInfoStyles();
    const Icon = variantIcon[variant];
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={message}
            autoHideDuration={6000}
            onClose={onClose}
        >
            <SnackbarContent
                className={classNames(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span className={classes.message}>
                        {message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
                        <CloseIcon className={classes.icon}/>
                    </IconButton>,
                ]}
                {...other}
            />
        </Snackbar>

    );
};

export default Notification;