import React, {lazy} from "react";
import loadable from '@loadable/component'
import PageList from "../pages/PageList";

const UserAdd = loadable(()=>import('../pages/UserAdd'));
const UserList = loadable(()=>import('../pages/UserList'));
const Home = loadable(()=>import('../pages/Home'));
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
    {
        path: '/pages/list',
        exact: true,
        action: () => <PageList/>
    },
    {
        path: '/pages/add',
        exact: true,
        action: () => <UserAdd/>
    },
    {
        path: '',
        exact: false,
        action: () => '404'
    },
]