const drawerWidth = 240;
const toolbarHeight = 64;
export const mainStyle = (theme) => {
    return {
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            marginLeft: drawerWidth,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        logo: {
            height: toolbarHeight,
            display: 'block',
            margin: 'auto'
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.secondary.dark
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },

        headerRight: {},
        header: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }
};