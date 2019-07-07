import React, {lazy} from "react";

const HomePage = lazy(() => import('../components/pages/HomePage'));
const UsersPage = lazy(() => import('../components/pages/UsersPage'));
const Error404Page = lazy(() => import('../components/pages/Error404_Page'));
// const UButtonsPage = lazy(() => import('../components/pages/UButtonsPage'));
// const UserEditPage = lazy(() => import('../components/pages/UserEditPage'));
// const UserAddPage = lazy(() => import('../components/pages/UserAddPage'));
export const ADMIN_PATH  = '/admin';
export default [
    {
        path: '/',
        exact: true,
        action: () => <HomePage/>
    },
    {
        path: '/users/list',
        exact: true,
        action: () => <UsersPage/>
    },
    // {
    //     path: '/users/add',
    //     exact: true,
    //     action: () => <UserAddPage/>
    // },
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
        action: () => <Error404Page/>
    },
]