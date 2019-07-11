import React from 'react';
import wrapped from "../components/wrapped";
import Paper from "@material-ui/core/Paper";

const UserAdd = () => {
    return (
        <Paper>
            <form>

            </form>
        </Paper>
    );
};

export default wrapped(UserAdd, {title: 'Add new user'});


