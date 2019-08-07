import React from 'react';
import {useSelector} from "react-redux";
import {history} from '../utils/history'
import Uploader from "../admin/components/uploader/Uploader";

const Site = () => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            {user && `You are in ${user.role} mode!`}
            Site content
        </div>
    );
};

export default Site;