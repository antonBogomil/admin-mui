import React from 'react';
import wrapped from "../components/wrapped";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {useForm} from "../../hook/useForm";
import Button from "@material-ui/core/Button";
import {Grid, Input} from "@material-ui/core";
import {useStyles} from "../styles";
import FormField from "../components/FormField";
import {useTranslation} from "react-i18next";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const selectOptions = [{
	value: 0,
	name: "Admin",
}, {
	value: 1,
	name: "Default",
}, {
	value: 2,
	name: "Customer",
}];
const validationRules = {
	email: {
		required: true,
	},
	login: {
		required: true,
		min: 5,
	},
	password: {
		confirm: true,
		min: 8,
		max: 20,
	}
};
const UserAdd = (props) => {
	const classes = useStyles();
	const [t] = useTranslation();
	const {values, errors, handleChange, handleSubmit} = useForm({
		login: '',
		name: '',
		password: '',
		passwordConfirm: '',
		email: '',
		role: 1
	}, addUser, validationRules);
	// const onChange = name => e => {
	// 	handleChange(name, e.target.value);
	// };

	function addUser(data) {
		console.log(data);
	}
	return (
		<Paper>
			<form onSubmit={handleSubmit} className={classes.formContainer1}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormField
							label="Full name"
							name={"name"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Input/>
						</FormField>
						<FormField
							label="Email"
							name={"email"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Input/>
						</FormField>
						<FormField
							label="Login"
							name={"login"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Input/>
						</FormField>
						<FormField
							label="Create password"
							name={"password"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Input/>
						</FormField>
						<FormField
							label="Confirm password"
							name={"passwordConfirm"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Input/>
						</FormField>

						<FormField
							label="Select user role"
							name={"role"}
							values={values}
							onChange={handleChange}
							errors={errors}
						>
							<Select
								inputProps={{
									name: 'roles',
									id: 'roles',
								}}
							>
								{selectOptions.map((role) => (<MenuItem key={role.value} value={role.value}>{role.name}</MenuItem>))}
							</Select>
						</FormField>

					</Grid>
					<Grid item xs={6}>

					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Button type={'submit'} color={'primary'} variant={"contained"}
								className={classes.button}>
							{t("SAVE")}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default wrapped(UserAdd, {title: 'Add new user'});


