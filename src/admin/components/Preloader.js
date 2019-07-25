import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});
const Preloader = () => {
    const cl = useStyles();
    return (
        <div className={cl.root}>
            <Preloader/>
        </div>
    );
};

export default Preloader;
