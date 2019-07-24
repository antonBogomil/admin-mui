import {
    Home,
    Info,
    People,
    List,
    Pages,
    Web,
    Add,
    Settings,
    TextFields,
    ExitToAppOutlined
} from "@material-ui/icons";
import React from "react";

export default [
    {
        title: 'MENU_HOME',
        url: '/',
        icon: <Home/>,
    },
    {
        title: 'MENU_USERS',
        icon: <People/>,
        url: '/users',
        nested: [
            {
                title: 'MENU_USERS_LIST',
                url: '/list',
                icon: <List/>,
            },
            {
                title: 'MENU_USERS_ADD',
                url: '/add',
                icon: <Add/>,
            },
        ],
    },
    {
        title: 'MENU_PAGES',
        icon: <Pages/>,
        url: '/pages',
        nested: [
            {
                title: 'MENU_PAGES_LIST',
                url: '/list',
                icon: <List/>,
            },
            {
                title: 'MENU_PAGES_ADD',
                url: '/add',
                icon: <Add/>,
            },
        ],
    },
    {
        title: 'MENU_SETTINGS',
        icon: <Settings/>,
        url: '/settings',
    },
    // {
    //     title: 'MENU_DOC',
    //     url: '/docs',
    //     icon: Info,
    // },
];
