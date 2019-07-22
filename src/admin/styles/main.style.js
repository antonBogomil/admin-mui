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
            backgroundColor: theme.palette.primary.main
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
            margin: theme.spacing(1),
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
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            maxWidth: 600,
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column'
            // flexWrap: 'wrap'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        rootPageLogin: {
            margin: 'auto',
            maxWidth: 420,
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        },
        paperPageLogin: {
            padding: theme.spacing(1),
        },
        fixedLangPanel: {
            position: 'fixed',
            right: 10,
        }

    }
};