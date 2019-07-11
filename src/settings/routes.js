import React, {lazy} from "react";
import UserAdd from "../admin/pages/UserAdd";
import Home from "../admin/pages/Home";
import UserList from "../admin/pages/UserList";
// export const ADMIN_PATH  = '/admin';
export default [
    {
        path: '/',
        exact: true,
        action: () => <Home/>
    },
    {
        path: '/users/list',
        exact: true,
        action: () => <UserList/>
    },
    {
        path: '/users/add',
        exact: true,
        action: () => <UserAdd/>
    },
    // {
    //     path: '/users/:id',
    //     exact: true,
    //     action: () => <UserEditPage/>
    // },
    // {
    //     path: '/ui/buttons',
    //     exact: true,
    //     action: () => <UButtonsPage/>
    // },
    {
        path: '',
        exact: false,
        action: () => '404'
    },
]