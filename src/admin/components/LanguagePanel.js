import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import langs from "../../settings/langs";
import {useStyles} from "../styles";
import InputBase from "@material-ui/core/InputBase";
import LanguageIcon from "@material-ui/icons/Language";
import IconButton from "@material-ui/core/IconButton";
import {settingsActions} from "../../store/actions";
import {changeLocaleUrl} from "../../services/settings.service";

const LanguagePanel = (props) => {
    const [open, setOpen] = React.useState(false);
    const locale = useSelector((state) => state.settings.locale);
    const [t] = useTranslation();
    const classes = useStyles();

    function handleChange(e) {
        const selectedLanguage = e.target.value;
        settingsActions.changeLocale(selectedLanguage)
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    return (
        <form autoComplete="off">
            <FormControl className={classes.formControl}>
                {/*<InputLabel*/}
                {/*htmlFor="#select-lang"*/}
                {/*component={LanguageIcon}*/}
                {/*/>*/}
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={locale}
                    onChange={handleChange}
                    className={classes.langSelect}
                    IconComponent={() => ''}
                    renderValue={() =>
                        <IconButton color='inherit'>
                            <LanguageIcon fontSize={"inherit"}/>
                        </IconButton>}
                    classes={{
                        selectMenu: classes.langMenu
                    }}
                    input={
                        <InputBase
                            id="select-lang"
                            placeholder={t("LANGUAGE")}
                        />
                    }

                >
                    {
                        langs.map((lang) => {
                            return (
                                <MenuItem
                                    key={lang.id}
                                    value={lang.code}
                                >
                                    {t(lang.title)}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </form>
    );
};

export default LanguagePanel;
