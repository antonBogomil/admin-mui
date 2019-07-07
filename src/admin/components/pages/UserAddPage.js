import React from 'react';
import WrappedPage from "../WrappedPage";
import {FORM_FIELD_TYPES} from "../../constants/const";
import UserAddForm from "../forms/UserAddForm";
const settings = {
    title: "Add User",
};




const UserAddPage = () => {
    return (
        <>
            <UserAddForm/>
        </>
    );
};

export default WrappedPage(UserAddPage, settings);