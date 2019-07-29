import React from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {useForm} from "../../hook/useForm";
import Button from "@material-ui/core/Button";
import {userService} from "../../services/user.service";
import LinkTo from "./LinkTo";
import Paper from "@material-ui/core/Paper";
import LanguagePanel from "./LanguagePanel";
import {useTranslation} from "react-i18next";
import {useStyles} from "../styles";
import withTheme from "./withTheme";
import theme from '../styles/theme';
const Login = (props) => {
    const [t] = useTranslation();
    const classes = useStyles();
    function sendUser(user) {
        userService.login(user.login, user.password);
    }
    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        handleReset
    } = useForm({login: '', password: ''}, sendUser);
    return (
        <>
            <div className={classes.fixedLangPanel}>
                <LanguagePanel/>
            </div>
            <div className={classes.rootPageLogin}>
                <Paper className={classes.paperPageLogin}>
                    <div>
                        <Typography color={"primary"}
                                    component={'h4'}
                                    align={"center"}
                                    variant={'h4'}>
                            {t('SIGN_IN')}
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <TextField
                            label={t('LOGIN')}
                            className={classes.textField}
                            fullWidth
                            required
                            value={values['login']}
                            onChange={(e) => {
                                handleChange('login', e.target.value)
                            }}
                            margin="normal"
                        />
                        <TextField
                            label={t("PASSWORD")}
                            type='password'
                            fullWidth
                            required
                            className={classes.textField}
                            value={values['password']}
                            onChange={(e) => {
                                handleChange('password', e.target.value)
                            }}
                            margin="normal"
                        />
                        <div>
                            <Button type={'submit'} variant={'contained'} color={"primary"}
                                    className={classes.button}>
                                {t('SIGN_IN')}
                            </Button>
                            <Button type={'submit'}
                                    component={LinkTo}
                                    to={'/'}
                                    variant={'outlined'}
                                    color={"default"} className={classes.button}>
                                {t("CANCEL")}
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        </>

    );
};

export default withTheme(Login,theme);