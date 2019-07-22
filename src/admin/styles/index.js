import {makeStyles} from "@material-ui/core";
import {listStyle} from "./list.style";
import {menuStyle} from "./menu.style";
import {mainStyle} from "./main.style";
import {notificationStyle} from "./infoBar.style";
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
    }, {});
};
const styles = makeStyles(combineStyles);
export const useStyles = styles;