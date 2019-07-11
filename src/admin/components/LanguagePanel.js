import React from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from "@material-ui/styles";
import {mainStyle} from "../styles/main.style";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeLang} from "../../store/actions/site.actions";
import langs from "../../settings/langs";

const LanguagePanel = ({classes}) => {
    const [open, setOpen] = React.useState(false);
    const lang = useSelector((state) => state.site.lang);
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(changeLang(e.target.value));
        i18n.changeLanguage(e.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    console.log(lang);
    return (
        <form autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">
                    {t("LANGUAGE")}
                </InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={lang}
                    variant="standard"
                    onChange={handleChange}

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

export default withStyles(mainStyle)(LanguagePanel);