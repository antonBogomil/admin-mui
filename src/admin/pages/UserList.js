import React, {useEffect, useState} from 'react';
import wrapped from "../components/wrapped";
import {LIST_COLUMN_TYPE} from "../../constants/list";
import List from "../components/list";

const listConfig = {
    fields: [
        // {name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'avatar', title: 'Picture', type: LIST_COLUMN_TYPE.IMG},
        {name: 'name', title: 'Name', type: LIST_COLUMN_TYPE.STRING},
        {name: 'login', title: 'Login', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Role', type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Active', type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "createdAt", title: 'Registered', type: LIST_COLUMN_TYPE.DATE},
    ],
    dataUrl: '/admin/users',
    paging: true,
    edit: true,
    editBy: "login"
};

function UserList() {
    return (
        <>
            <List config={listConfig}/>
        </>
    );
}

export default wrapped(UserList, {title: 'Users'})