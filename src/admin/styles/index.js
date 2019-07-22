import {createStyles, makeStyles} from "@material-ui/styles";
import {listStyle} from "./list.style";
import {menuStyle} from "./menu.style";
import {mainStyle} from "./main.style";
import {notificationStyle} from "./infoBar.style";

import theme from './theme';

const allStyles = [
    listStyle,
    menuStyle,
    mainStyle,
    notificationStyle
];
const combineStyles = (theme) => {
    return allStyles.reduce((result, style) => {
        return {
            ...result,
            ...style(theme),
        }
    })
};
console.log(combineStyles(theme));

export const useStyles = makeStyles(theme => createStyles(combineStyles(theme)));