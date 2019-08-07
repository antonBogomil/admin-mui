import React from 'react';
import {FormHelperText, OutlinedInput, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {useTranslation} from "react-i18next";
import {useStyles} from "../styles";

const FormField = (props) => {
	const {name, values, label, onChange, errors, ...rest} = props;
	const value = values[name];
	const error = errors[name];
	const [t] = useTranslation();
	const classes = useStyles();

	function handleChange(e) {
		onChange(name, e.target.value)
	}

	return (
		<FormControl className={classes.formControl} error={!!error}>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			{React.cloneElement(props.children, {
				value: value,
				onChange: handleChange
			})}
			{error && <FormHelperText>{t(error.type, {n: error.n})}</FormHelperText>}
		</FormControl>
	);
};

export default FormField;