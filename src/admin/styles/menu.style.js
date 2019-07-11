export const menuStyle = (theme) => {
    return{
        menu: {
            paddingTop: 0,
            paddingBottom: 0
        },
        menuNested: {
            backgroundColor: theme.palette.background.dark
        },
        nestedMenuItem:{
            paddingLeft: theme.spacing(3),
            fontSize: '.8em'
        },
        menuItem: {
            color: theme.palette.secondary.main,
        },
        menuItemActive: {
            backgroundColor: 'red'
        },
        menuIcon:{
            color: theme.palette.secondary.main
        }
    }
};