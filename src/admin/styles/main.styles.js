const drawerWidth = 240;
const toolbarHeight = 64;
export const mainStyles = (theme) => {
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
    }
};