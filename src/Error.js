import React from 'react';
import {NavLink} from "react-router-dom";
import {history} from './utils/history'
import Button from "@material-ui/core/Button";

const Error = (props) => {
    console.log(history);
    return (
        <div className={'error'}>
            Internal Server Error 500
            <div>
                <Button onClick={() => {
                    history.goBack()
                }}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default Error;
