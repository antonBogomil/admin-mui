import {ThemeProvider} from "@material-ui/styles";
import React from "react";
export default function withTheme(Component,theme) {
    return (props) => {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props}/>
            </ThemeProvider>
        )
    }
}