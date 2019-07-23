import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {changeLang} from "../../store/actions/site.actions";
import langs from "../../settings/langs";
import {useStyles} from "../styles";

const LanguagePanel = () => {
    const [open, setOpen] = React.useState(false);
    const lang = useSelector((state) => state.site.lang);
    const [t] = useTranslation();
    const classes = useStyles();
    function handleChange(e) {
        changeLang(e.target.value);
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

export default LanguagePanel;