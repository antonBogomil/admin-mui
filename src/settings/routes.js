import React, {lazy} from "react";
import loadable from '@loadable/component'

const UserAdd = loadable(()=>import('../admin/pages/UserAdd'));
const UserList = loadable(()=>import('../admin/pages/UserList'));
const Home = loadable(()=>import('../admin/pages/Home'));
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