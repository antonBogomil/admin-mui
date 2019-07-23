export const listStyle = theme => {
    return {
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
        loadingField: {
            // color: 'white',
            opacity: 0
        },
        listProgress: {
            height: '4px'
        },
        cell: {
            height: '100px'
        },
        cellImg: {
            margin: 10,
            width: 60,
            height: 60,
        },
        checkedIcon:{
            color: theme.palette.primary.main
        },
        checkedIconFalse:{
            color: theme.palette.secondary.main
        }
    }
};
