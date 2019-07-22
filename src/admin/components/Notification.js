import React from 'react';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import classNames from 'classnames';
import Snackbar from "@material-ui/core/Snackbar";
import {useStyles} from "../styles";
import {notificationActions} from "../../store/actions";

const variantIcon = {
    error: ErrorIcon,
};
const Notification = ({className, message, onClose, open, variant, ...other}) => {
    const classes = useStyles();
    const Icon = variantIcon[variant];
    function handleClose() {
        notificationActions.hideMessage();
    }
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={message}
            autoHideDuration={6000}
            onClose={onClose}
            color={variant}
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
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
                        <CloseIcon className={classes.icon}/>
                    </IconButton>,
                ]}
                {...other}
            />
        </Snackbar>

    );
};

export default Notification;