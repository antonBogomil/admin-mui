import IconMail from '@material-ui/icons/Mail';
import IconInbox from '@material-ui/icons/Inbox';
import {
    ExpandLess,
    ExpandMore,
    Home,
    Info,
    People,
    List,
    Pages,
    Web,
    Add,
    Settings,
    TextFields,
    ExitToAppOutlined
} from "@material-ui/icons";
import {
    ICON_EXPANDED_LESS,
    ICON_EXPANDED_MORE,
    ICON_INBOX,
    ICON_MAIL, MENU_ICON_ADD, MENU_ICON_DOC, MENU_ICON_FORMS,
    MENU_ICON_HOME, MENU_ICON_LIST, MENU_ICON_PAGES, MENU_ICON_SETTINGS, MENU_ICON_UI,
    MENU_ICON_USERS,
    ICON_LOGOUT
} from "../constants/icons";

export default {
    [ICON_MAIL]: IconMail,
    [ICON_INBOX]: IconInbox,
    [MENU_ICON_HOME]: Home,
    [MENU_ICON_USERS]: People,
    [MENU_ICON_UI]: Web,
    [MENU_ICON_ADD]: Add,
    [MENU_ICON_SETTINGS]: Settings,
    [MENU_ICON_LIST]: List,
    [MENU_ICON_DOC]: Info,
    [MENU_ICON_PAGES]: Pages,
    [MENU_ICON_FORMS]: TextFields,
    [ICON_EXPANDED_LESS]: ExpandLess,
    [ICON_EXPANDED_MORE]: ExpandMore,
    [ICON_LOGOUT]: ExitToAppOutlined
}