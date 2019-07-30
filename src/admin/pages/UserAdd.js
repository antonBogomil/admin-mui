import React from 'react';
import wrapped from "../components/wrapped";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {useForm} from "../../hook/useForm";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {useStyles} from "../styles";
import {PersonAdd} from "@material-ui/icons";
import {useTranslation} from "react-i18next";

const UserAdd = (props) => {
    const classes = useStyles();
    const [t] = useTranslation();
    const {values, errors, handleChange, handleSubmit} = useForm({}, addUser);

    function addUser(data) {
        console.log(data);
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit} className={classes.formContainer1}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            label="Name"
                            fullWidth
                            className={classes.textField}
                            value={values.name}
                            onChange={() => {
                                handleChange('name')
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            className={classes.textField}
                            value={values.email}
                            onChange={() => {
                                handleChange('email')
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            className={classes.textField}
                            value={values.password}
                            onChange={() => {
                                handleChange('password')
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Button type={'submit'} color={'primary'} variant={"contained"}
                                className={classes.button}>
                            {t('BTN_CREATE')}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};


export default wrapped(UserAdd, {title: 'PAGE_TITLE_USER_ADD'});


