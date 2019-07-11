import themes from "../settings/themes";
import {createMuiTheme} from "@material-ui/core";

const THEME_STORAGE_KEY = 'theme-admin';

function createTheme(name = 'default') {
    const settings = themes[name];
    return createMuiTheme(settings);
}

function getThemeStorage() {
    return localStorage.getItem(THEME_STORAGE_KEY);
}

function setThemeStorage(name) {
    localStorage.setItem(THEME_STORAGE_KEY, name)
}

export default {
    get: getThemeStorage,
    create: createTheme,
    set: setThemeStorage
}