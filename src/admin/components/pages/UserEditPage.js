import React from 'react';
import {withRouter} from "react-router-dom";
import WrappedPage from "../WrappedPage";


const settings = {
    title: 'Edit userReducer',
    back: true
};
const UserEditPage = (props) => {
    const {match: {params: {id}}} = props;
    return (
        <div>
            User ID : {id}
        </div>
    );
};

export default WrappedPage(withRouter(UserEditPage),settings);