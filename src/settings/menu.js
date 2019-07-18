import {
    ICON_LOGOUT,
    MENU_ICON_ADD, MENU_ICON_DOC,
    MENU_ICON_FORMS,
    MENU_ICON_HOME, MENU_ICON_LIST,
    MENU_ICON_PAGES,
    MENU_ICON_SETTINGS,
    MENU_ICON_UI, MENU_ICON_USERS
} from "../constants/icons";
import {ACTION_TYPES} from "../store/types";
import {userActions} from "../store/actions";

export default [
    {
        title: 'MENU_HOME',
        url: '/',
        icon: MENU_ICON_HOME,
    },
    {
        title: 'MENU_USERS',
        icon: MENU_ICON_USERS,
        url: '/users',
        nested: [
            {
                title: 'MENU_USERS_LIST',
                url: '/list',
                icon: MENU_ICON_LIST,
            },
            {
                title: 'MENU_USERS_ADD',
                url: '/add',
                icon: MENU_ICON_ADD,
            },
        ],
    },
    {
        title: 'MENU_PAGES',
        icon: MENU_ICON_PAGES,
        url: '/pages',
    },
    {
        title: 'MENU_FORMS',
        icon: MENU_ICON_FORMS,
        url: '/forms',
    },
    {
        title: 'MENU_SETTINGS',
        icon: MENU_ICON_SETTINGS,
        url: '/settings',
    },
    {
        title: 'MENU_UI_DEMO',
        icon: MENU_ICON_UI,
        url: '/ui',
        nested: [{
            title: 'MENU_UI_DEMO_BTN',
            url: '/buttons',
            icon: ''
        },
            {
                title: 'MENU_FORMS',
                url: '/forms',
                icon: ''
            }
        ]
    },
    {
        title: 'MENU_DOC',
        url: '/docs',
        icon: MENU_ICON_DOC,
    },
    {
        title: 'LOGOUT',
        action: userActions.logout,
        icon: ICON_LOGOUT,
    }


];
