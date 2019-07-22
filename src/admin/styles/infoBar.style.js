
export const notificationStyle = (theme) => {
    return {
        error: {
            backgroundColor: theme.palette.error.main,
        },
        primary: {
            backgroundColor: theme.palette.primary.main,
        },
        icon: {
            fontSize: 20,
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
        },
        message: {
            display: 'flex',
            alignItems: 'center',
        },
    }
};