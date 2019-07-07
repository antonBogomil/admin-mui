import React from 'react';
import {LIST_COLUMN_TYPE} from "/constants";
import List from "../list/List";


const settings = {
    title: 'PAGE_TITLE_USERS',
};

const list = {
    fields: [
        // {name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'img', title: 'Picture', type: LIST_COLUMN_TYPE.IMG},
        {name: 'name', title: 'Name', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Role', type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Active', type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "dateCreated", title: 'Created', type: LIST_COLUMN_TYPE.DATE}
    ],
    select: false,
    filter: false,
    edit: true,
    paging: false,
    // sortBy: 'id',
    // sortDir: 'asc',
    dataUrl: '/users',
    rows: 5, /* 2-10 will be the best*/
    activePage: 0,
    editPage: '/users'
};


const UsersPage = (props) => {
    return (
        <>
            <List settings={list}/>
        </>
    );
};

export default WrappedPage(UsersPage, settings);