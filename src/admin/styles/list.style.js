export const listStyle = theme => {
    console.log('list st');
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
    }
};
