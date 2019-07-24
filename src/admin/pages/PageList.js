import React from 'react';
import wrapped from "../components/wrapped";
import List from "../components/list";
import {LIST_COLUMN_TYPE} from "../../constants/list";

const listConfig = {
    fields: [
        // {name: 'id', title: '#', type: LIST_COLUMN_TYPE.NUMBER},
        {name: 'name', title: 'Page name', type: LIST_COLUMN_TYPE.STRING},
        {name: 'url', title: 'Page url', type: LIST_COLUMN_TYPE.STRING},
        {name: "role", title: 'Security group', type: LIST_COLUMN_TYPE.STRING},
        {name: "active", title: 'Live', type: LIST_COLUMN_TYPE.BOOLEAN},
        {name: "createdAt", title: 'Date created', type: LIST_COLUMN_TYPE.DATE},
    ],
    dataUrl: '/pages',
    paging: true,
    edit: true,

};
const PageList = () => {
    return (
        <List config={listConfig}/>
    );
};

export default wrapped(PageList, {title: 'MENU_PAGES_LIST'});