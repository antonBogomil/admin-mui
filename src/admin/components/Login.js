import React from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {mainStyle} from "../styles/main.style";
import {withStyles} from "@material-ui/core";
import {useForm} from "../../hook/useForm";
const Login = ({classes}) => {
    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        handleReset
    } = useForm({login: '', password: ''});
    console.log(values);
    return (
        <div>
            <Typography color={"primary"} component={'h4'} variant={'h4'}>
                Login
            </Typography>
            <form>
                <TextField
                    label="Name"
                    className={classes.textField}
                    value={values['login']}
                    onChange={(e) => {
                        handleChange('login', e.target.value)
                    }}
                    margin="normal"
                />
                <TextField
                    label="password"
                    type='password'
                    className={classes.textField}
                    value={values['password']}
                    onChange={(e) => {
                        handleChange('password', e.target.value)
                    }}
                    margin="normal"
                />
            </form>
        </div>
    );
};

export default withStyles(mainStyle)(Login);