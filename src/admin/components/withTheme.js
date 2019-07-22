import React from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
const withTheme = (Component,theme) => {
    return (props) => {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props}/>
            </ThemeProvider>
        )
    };
};

export default withTheme;